/* Key for bingmaps api*/
Cesium.BingMapsApi.defaultKey = 'AtzPOZBe-iIHEFJY2xCqo8sxLNzYTkVM6_rhNH8sD0qCr9CNZTLR5s7f17VwZvLH';

/*Renders the Cesium interface*/
var viewer = new Cesium.Viewer('cesiumContainer', {
    navigationHelpButton: false,
});

/*
  @types :      Distinct types of the list data entities
  @startTime :  Minimal start date for the timeline on the Cesium view
  @stopTime :   Maximal end date for the timeline on the Cesium view
*/
var types = new Set();
var types_colors = new Set();
var startTime = new Date(2010, 0, 0, 0, 0, 0, 0);
var stopTime = new Date(2018, 0, 0, 0, 0, 0, 0);
var stalledEntities = [];
var geocoder;
var prevTheme = "dark";
var paused = false;
var skipDays = 0;
var long = 6.943359;
var lat  = 48.516604;

/*Toggles the control panel in the Cesium view*/
$("#cb_toggle_display").change(function () {
    $("#menu").toggle("display");
});

// Initialization of script on document load, executing the get request to the api. If sucessfull it passes the data to renderfunctions on the Cesium framework
$(document).ready(function () {
    init();
     window.setInterval(function () {
        updateTimeMeta();
    }, 1000);
});

$(function () {
    $("#slider").slider({
            slide: function(event, ui){
                var values = $( "#slider" ).slider( "option", "value" );
                skipDays = values;
            },
            value: [ 100 ]
    });
});



/* Initialisation of the interface data */
function init() {

   loadTerrorismData();
    initializeTimeline();
    initConfig();
    setCameraPosition();
};

function setCameraPosition(){
    viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(long, lat, 3000000.0)
            });  
}

function loadTerrorismData() {
     loadJSON('data.json', function (data) {
        data = JSON.parse(data);
        for (var x = 0; x < data.length; x++) {
            renderMarkers(data[x]);
        }
        renderFilter(types);
    }
    )
} 

   
var dataSourceCollection = new Cesium.DataSourceCollection();
var dataSourceDisplay = new Cesium.DataSourceDisplay({
    scene : viewer.scene,
    dataSourceCollection : dataSourceCollection
});


// var czmlFiles = ["countryborders.czml"];

// czmlFiles.forEach(function(filename) {
//     var czmlDataSource = new Cesium.CzmlDataSource();
//     czmlDataSource.load(filename).then(function() {

//         dataSourceCollection.add(czmlDataSource);
//         dataSourceDisplay.update(new Cesium.JulianDate());
//     });
// });

/*Initialization of configuration file, now only loads preset_locations*/
function initConfig() {
    loadJSON('config.json', function (data) {
        $.each(data, function (key, value) {
            switch (key) {
                case 'presets_locations':
                    for (var i = 0; i < data[key].length; i++) {
                        $("#presets_locations").append('<li class="location_preset"><a>' + value[i] + '</a></li>');
                    }
                    (function () {
                        $(".location_preset").click((function (e) {
                            geocoder = new google.maps.Geocoder();
                            var address = e.delegateTarget.innerText;
                            geocodeAddress(geocoder, address);
                            $("#location_presets_toggle_button").html(address + '<span class="caret" ></span>');
                        }).bind(this));
                    })();
                    break;
                case 'themes':
                    $("#themeSelection").append('<label>Themes:</label>');
                    for (var i = 0; i < data[key].length; i++) {
                        $("#themeSelection").append(' <div class="radio"><label><input type="radio" class="radioIput" name="optradio" value="' + data[key][i] + '">' + data[key][i] + '</label></div>');
                    }
                    (function () {
                        $(".radioIput").click((function (e) {
                            var theme = e.delegateTarget.value;
                            changeTheme(theme);
                        }).bind(this));
                    })();
                    break;
                default:
                    console.log("You've tried to add a config variable that hasn't been recognised");
                    break;
            }
        });
    });
}

function changeButtons(theme) {
    var buttons = $("button");
    for (var i = 0; i < buttons.length; i++) {
        $(buttons[i]).removeClass(prevTheme);
        $(buttons[i]).addClass(theme);
    }
    prevTheme = theme;
}



/*Get long lat data from the google api based on a location name. Example:"Roggel"
  @geocoder : GeoCoder instance
  @value : Selected search term
  @viewer.camera.flyTo : Function : Set's te camera to the result of the searched term's location
*/
function geocodeAddress(geocoder, value) {
    geocoder.geocode({
        'address': value
    }, function (results, status) {
        console.log(results);
        if (status === 'OK') {
            let lat = results[0].geometry.location.lat();
            let long = results[0].geometry.location.lng();
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(long, lat, 1500000.0)
            });
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
    });
};

// Changes the theme based on the selected radiobutton
function changeTheme(theme) {
    cesiumContainer = document.getElementById("cesiumContainer");
    cesiumContainer.className = "";
    cesiumContainer.className = theme;
    var panel = document.getElementById("controlPanel");
    panel.className = "";
    panel.className = theme;
    changeButtons(theme);
}

/*After calibration for each item the timeline is initializes, set to focus on the start point of the two date ranges*/
function initializeTimeline() {
    let startTime = new Cesium.JulianDate.fromDate(this.startTime);
    let stopTime = new Cesium.JulianDate.fromDate(this.stopTime);
    viewer.clock.startTime = startTime;
    viewer.clock.shouldAnimate = true;
    viewer.clock.stopTime = stopTime;
    // clockStep : Cesium.ClockStep.TICK_DEPENDENT;
    // viewer.clock.multiplier = 5;
    viewer.clock.currentTime = startTime;
    viewer.clock.clockRange = Cesium.ClockRange.CLAMPED;
    viewer.timeline.updateFromClock();
    viewer.timeline.zoomTo(startTime, stopTime);
   
}

/* Adds a julian function to the Date prototype */
Date.prototype.getJulian = function () {
    return Math.floor((this / 86400000) - (this.getTimezoneOffset() / 1440) + 2440587.5);
}
/**Listener for the clock animation pause button */
Cesium.knockout.getObservable(viewer.animation.viewModel.clockViewModel, 'shouldAnimate').subscribe(function (value) {
    if (paused) {
        console.log('paused', paused);
        paused = false;
    } else {
        paused = true;
    }
});


/*
    Updates the globe to match the selected time
*/
function updateTimeMeta() {
    let currentTime = viewer.clock.currentTime;
    if (paused == false) {
        Cesium.JulianDate.addDays(currentTime, skipDays, viewer.clock.currentTime);
    }
    var context = this;
    for (var i = 0; i < viewer.entities._entities.length; i++) {
        let entity = viewer.entities._entities._array[i];
        if (entity._filtered === false) {
            let interval = viewer.entities._entities._array[i]._interval;
            if (Cesium.TimeInterval.contains(interval, currentTime)) {
                entity._show = true;
            } else {
                entity._show = false;
            }
        } else {
            entity._show = false;
        }
    }
}

//Get's the random color associated with each type on load
function getTypeRandomColor(type) {
    for (let [key, value] of types_colors.entries()) {
        if (type === value.type) {
            return value.color;
        }
        ;
    }
}

/*Creates a time interval based on the entity's start and end time and returns it
    @i: Entity to construct the interval  
    @timeInterval the constructed timeInterval, note the object's properties
 */
function createInterval(i) {
    // let intervalStartTime = new Date(i.iyear, i.imonth, i.iday, 0, 0, 0, 0);
    let intervalStartTime = new Date(i.iyear, 0, 0, 0, 0, 0, 0);
    let intervalEndTime = new Date(i.iyear + 1, 0, 0, 0, 0, 0);
    intervalStartTime = intervalStartTime.toISOString();
    // let intervalEndTime = new Date(i.iyear + 1, i.imonth, i.iday, 0, 0, 0, 0);
    intervalEndTime = intervalEndTime.toISOString();
    var timeInterval = new Cesium.TimeInterval({
        start: Cesium.JulianDate.fromIso8601(intervalStartTime),
        stop: Cesium.JulianDate.fromIso8601(intervalEndTime),
        isStartIncluded: true,
        isStopIncluded: true,
        data: null
    });
    return timeInterval;
}


/*Renders the result of the get request data onto the Cesium framework as marker items. Note: at the end of this function the timeline is initialized
  @data : List containing entity Json objects
*/
function renderMarkers(entity) {
    let context = this;
    var i = entity;
    var type = i.attacktype1_txt;

    if (!types.has(type)) {
        let colorCode = {
            color: Cesium.Color.fromRandom({    
            maximumRed : 0.75,
            maximummGreen : 0.75,
            maximumBlue : 0.75,
    alpha : 1.0}),
            type: type
        }
        types_colors.add(colorCode);
    }
    types.add(type);
    var entityColor = getTypeRandomColor(type);

    viewer.entities.add({
        name: i.type,
        id: i.eventid,
        data: i,
        type: type,
        show: false,
        filtered: false,
        interval: context.createInterval(i),
        /*In the future we can add anything we want to the modal by adding properties to the description key*/
        description: "<h1 style='color: " + entityColor.toCssColorString() + "' >" + type + "</h1><h1>" + new Date(i.iyear,i.imonth,i.iday).toString() + "</h1><p>" + i.summary + "</p>",
        position: Cesium.Cartesian3.fromDegrees(i.longitude, i.latitude),

        point: {
            pixelSize: 5,
            color: getTypeRandomColor(type),
            outlineColor: Cesium.Color.WHITE,
            outlineWidth: 2
        },
    });
}

var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

function enableListener() {
    handler.setInputAction(action, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}

function disableListener() {
    handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
}

function action(click) {
    var pickedObject = viewer.scene.pick(click.position);
    console.log(pickedObject);
    if (Cesium.defined(pickedObject)) {
        console.log(pickedObject);
    }
}

enableListener();

/*Renders the filter preferences and adds the click event on each element, settinf the correct value to the dropdown button and filtering the list based on the event sender
  @list list of each filter. Example : 'Building'
*/
function renderFilter(list) {
    for (var v of list) {
        $("#dd_preferences").append('<li class="preference"><a>' + v + '</a></li>');
    }
    $(".preference").click((function (e) {
        var filterType = e.delegateTarget.innerText;
        filterList(filterType, viewer);
        $("#preference_toggle_button").html(filterType + '<span class="caret" ></span>');
    }).bind(this));
}

/*Loads json from a given filepath and esecutes a callback when it's finished
  @filepath : String containing the file location
  @callback : callback function executed on sucess
*/
function loadJSON(filepath, callback) {
    $.getJSON(filepath, function (data) {
        callback(data);
    })
};

/*Filters the entities array of the viewer.entities array, setting non matching entities to hidden based on it's type
  @filterType : String param of filter value. Example : 'Building'
  @viewer : Cesium viewer instance containing the entities rendered on the Cesium container   
*/
function filterList(filterType, viewer) {
    for (var i = 0; i < viewer.entities._entities._array.length; i++) {
        if (filterType.indexOf(viewer.entities._entities._array[i]._type) <= -1) {
            viewer.entities._entities._array[i]._filtered = true;
        } else {
            viewer.entities._entities._array[i]._filtered = false;
        }
    }
}