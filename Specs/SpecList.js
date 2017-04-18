/*jshint unused: false*/
var specs = ['Specs/Core/appendForwardSlashSpec','Specs/Core/arrayRemoveDuplicatesSpec','Specs/Core/AssociativeArraySpec','Specs/Core/AttributeCompressionSpec','Specs/Core/AxisAlignedBoundingBoxSpec','Specs/Core/barycentricCoordinatesSpec','Specs/Core/binarySearchSpec','Specs/Core/BingMapsApiSpec','Specs/Core/BingMapsGeocoderServiceSpec','Specs/Core/BoundingRectangleSpec','Specs/Core/BoundingSphereSpec','Specs/Core/BoxGeometrySpec','Specs/Core/BoxOutlineGeometrySpec','Specs/Core/buildModuleUrlSpec','Specs/Core/Cartesian2Spec','Specs/Core/Cartesian3Spec','Specs/Core/Cartesian4Spec','Specs/Core/CartographicGeocoderServiceSpec','Specs/Core/CartographicSpec','Specs/Core/CatmullRomSplineSpec','Specs/Core/CesiumTerrainProviderSpec','Specs/Core/CheckSpec','Specs/Core/CircleGeometrySpec','Specs/Core/CircleOutlineGeometrySpec','Specs/Core/ClockSpec','Specs/Core/cloneSpec','Specs/Core/ColorGeometryInstanceAttributeSpec','Specs/Core/ColorSpec','Specs/Core/combineSpec','Specs/Core/ComponentDatatypeSpec','Specs/Core/CorridorGeometrySpec','Specs/Core/CorridorOutlineGeometrySpec','Specs/Core/createGuidSpec','Specs/Core/CubicRealPolynomialSpec','Specs/Core/CylinderGeometrySpec','Specs/Core/CylinderOutlineGeometrySpec','Specs/Core/definedSpec','Specs/Core/deprecationWarningSpec','Specs/Core/DeveloperErrorSpec','Specs/Core/DistanceDisplayConditionGeometryInstanceAttributeSpec','Specs/Core/DistanceDisplayConditionSpec','Specs/Core/EarthOrientationParametersSpec','Specs/Core/EllipseGeometrySpec','Specs/Core/EllipseOutlineGeometrySpec','Specs/Core/EllipsoidalOccluderSpec','Specs/Core/EllipsoidGeodesicSpec','Specs/Core/EllipsoidGeometrySpec','Specs/Core/EllipsoidOutlineGeometrySpec','Specs/Core/EllipsoidSpec','Specs/Core/EllipsoidTangentPlaneSpec','Specs/Core/EllipsoidTerrainProviderSpec','Specs/Core/EncodedCartesian3Spec','Specs/Core/EventSpec','Specs/Core/FeatureDetectionSpec','Specs/Core/FullscreenSpec','Specs/Core/GeographicProjectionSpec','Specs/Core/GeographicTilingSchemeSpec','Specs/Core/GeometryAttributeSpec','Specs/Core/GeometryInstanceAttributeSpec','Specs/Core/GeometryInstanceSpec','Specs/Core/GeometryPipelineSpec','Specs/Core/GeometrySpec','Specs/Core/getAbsoluteUriSpec','Specs/Core/getBaseUriSpec','Specs/Core/getExtensionFromUriSpec','Specs/Core/getFilenameFromUriSpec','Specs/Core/getStringFromTypedArraySpec','Specs/Core/HeadingPitchRangeSpec','Specs/Core/HeadingPitchRollSpec','Specs/Core/HeightmapTerrainDataSpec','Specs/Core/HermitePolynomialApproximationSpec','Specs/Core/HermiteSplineSpec','Specs/Core/Iau2000OrientationSpec','Specs/Core/Iau2006XysDataSpec','Specs/Core/IauOrientationAxesSpec','Specs/Core/IndexDatatypeSpec','Specs/Core/Intersections2DSpec','Specs/Core/IntersectionTestsSpec','Specs/Core/IntervalSpec','Specs/Core/isCrossOriginUrlSpec','Specs/Core/isLeapYearSpec','Specs/Core/joinUrlsSpec','Specs/Core/JulianDateSpec','Specs/Core/LagrangePolynomialApproximationSpec','Specs/Core/LeapSecondSpec','Specs/Core/LinearApproximationSpec','Specs/Core/LinearSplineSpec','Specs/Core/loadArrayBufferSpec','Specs/Core/loadBlobSpec','Specs/Core/loadCRNSpec','Specs/Core/loadImageFromTypedArraySpec','Specs/Core/loadImageSpec','Specs/Core/loadImageViaBlobSpec','Specs/Core/loadJsonpSpec','Specs/Core/loadJsonSpec','Specs/Core/loadKTXSpec','Specs/Core/loadTextSpec','Specs/Core/loadWithXhrSpec','Specs/Core/loadXMLSpec','Specs/Core/MapboxApiSpec','Specs/Core/MathSpec','Specs/Core/Matrix2Spec','Specs/Core/Matrix3Spec','Specs/Core/Matrix4Spec','Specs/Core/mergeSortSpec','Specs/Core/NearFarScalarSpec','Specs/Core/objectToQuerySpec','Specs/Core/OccluderSpec','Specs/Core/oneTimeWarningSpec','Specs/Core/OrientedBoundingBoxSpec','Specs/Core/parseResponseHeadersSpec','Specs/Core/PinBuilderSpec','Specs/Core/PlaneSpec','Specs/Core/PointGeometrySpec','Specs/Core/pointInsideTriangleSpec','Specs/Core/PolygonGeometrySpec','Specs/Core/PolygonOutlineGeometrySpec','Specs/Core/PolygonPipelineSpec','Specs/Core/PolylineGeometrySpec','Specs/Core/PolylinePipelineSpec','Specs/Core/PolylineVolumeGeometrySpec','Specs/Core/PolylineVolumeOutlineGeometrySpec','Specs/Core/QuadraticRealPolynomialSpec','Specs/Core/QuantizedMeshTerrainDataSpec','Specs/Core/QuarticRealPolynomialSpec','Specs/Core/QuaternionSpec','Specs/Core/QuaternionSplineSpec','Specs/Core/queryToObjectSpec','Specs/Core/QueueSpec','Specs/Core/RaySpec','Specs/Core/RectangleGeometrySpec','Specs/Core/RectangleOutlineGeometrySpec','Specs/Core/RectangleSpec','Specs/Core/requestAnimationFrameSpec','Specs/Core/RequestErrorEventSpec','Specs/Core/RuntimeErrorSpec','Specs/Core/sampleTerrainMostDetailedSpec','Specs/Core/sampleTerrainSpec','Specs/Core/ScreenSpaceEventHandlerSpec','Specs/Core/ShowGeometryInstanceAttributeSpec','Specs/Core/Simon1994PlanetaryPositionsSpec','Specs/Core/SimplePolylineGeometrySpec','Specs/Core/SphereGeometrySpec','Specs/Core/SphereOutlineGeometrySpec','Specs/Core/SphericalSpec','Specs/Core/SplineSpec','Specs/Core/subdivideArraySpec','Specs/Core/TaskProcessorSpec','Specs/Core/TerrainEncodingSpec','Specs/Core/throttleRequestByServerSpec','Specs/Core/TileAvailabilitySpec','Specs/Core/TimeIntervalCollectionSpec','Specs/Core/TimeIntervalSpec','Specs/Core/TipsifySpec','Specs/Core/TransformsSpec','Specs/Core/TranslationRotationScaleSpec','Specs/Core/TridiagonalSystemSolverSpec','Specs/Core/TrustedServersSpec','Specs/Core/VertexFormatSpec','Specs/Core/VideoSynchronizerSpec','Specs/Core/VRTheWorldTerrainProviderSpec','Specs/Core/WallGeometrySpec','Specs/Core/WallOutlineGeometrySpec','Specs/Core/WebMercatorProjectionSpec','Specs/Core/WebMercatorTilingSchemeSpec','Specs/Core/writeTextToCanvasSpec','Specs/DataSources/BillboardGraphicsSpec','Specs/DataSources/BillboardVisualizerSpec','Specs/DataSources/BoxGeometryUpdaterSpec','Specs/DataSources/BoxGraphicsSpec','Specs/DataSources/CallbackPropertySpec','Specs/DataSources/CheckerboardMaterialPropertySpec','Specs/DataSources/ColorMaterialPropertySpec','Specs/DataSources/CompositeEntityCollectionSpec','Specs/DataSources/CompositeMaterialPropertySpec','Specs/DataSources/CompositePositionPropertySpec','Specs/DataSources/CompositePropertySpec','Specs/DataSources/ConstantPositionPropertySpec','Specs/DataSources/ConstantPropertySpec','Specs/DataSources/CorridorGeometryUpdaterSpec','Specs/DataSources/CorridorGraphicsSpec','Specs/DataSources/createMaterialPropertyDescriptorSpec','Specs/DataSources/CustomDataSourceSpec','Specs/DataSources/CylinderGeometryUpdaterSpec','Specs/DataSources/CylinderGraphicsSpec','Specs/DataSources/CzmlDataSourceSpec','Specs/DataSources/DataSourceClockSpec','Specs/DataSources/DataSourceCollectionSpec','Specs/DataSources/DataSourceDisplaySpec','Specs/DataSources/EllipseGeometryUpdaterSpec','Specs/DataSources/EllipseGraphicsSpec','Specs/DataSources/EllipsoidGeometryUpdaterSpec','Specs/DataSources/EllipsoidGraphicsSpec','Specs/DataSources/EntityClusterSpec','Specs/DataSources/EntityCollectionSpec','Specs/DataSources/EntitySpec','Specs/DataSources/EntityViewSpec','Specs/DataSources/GeoJsonDataSourceSpec','Specs/DataSources/GeometryVisualizerSpec','Specs/DataSources/GridMaterialPropertySpec','Specs/DataSources/ImageMaterialPropertySpec','Specs/DataSources/KmlDataSourceSpec','Specs/DataSources/LabelGraphicsSpec','Specs/DataSources/LabelVisualizerSpec','Specs/DataSources/ModelGraphicsSpec','Specs/DataSources/ModelVisualizerSpec','Specs/DataSources/NodeTransformationPropertySpec','Specs/DataSources/PathGraphicsSpec','Specs/DataSources/PathVisualizerSpec','Specs/DataSources/PointGraphicsSpec','Specs/DataSources/PointVisualizerSpec','Specs/DataSources/PolygonGeometryUpdaterSpec','Specs/DataSources/PolygonGraphicsSpec','Specs/DataSources/PolylineArrowMaterialPropertySpec','Specs/DataSources/PolylineGeometryUpdaterSpec','Specs/DataSources/PolylineGlowMaterialPropertySpec','Specs/DataSources/PolylineGraphicsSpec','Specs/DataSources/PolylineOutlineMaterialPropertySpec','Specs/DataSources/PolylineVolumeGeometryUpdaterSpec','Specs/DataSources/PolylineVolumeGraphicsSpec','Specs/DataSources/PositionPropertyArraySpec','Specs/DataSources/PropertyArraySpec','Specs/DataSources/PropertyBagSpec','Specs/DataSources/RectangleGeometryUpdaterSpec','Specs/DataSources/RectangleGraphicsSpec','Specs/DataSources/ReferencePropertySpec','Specs/DataSources/RotationSpec','Specs/DataSources/SampledPositionPropertySpec','Specs/DataSources/SampledPropertySpec','Specs/DataSources/StripeMaterialPropertySpec','Specs/DataSources/TimeIntervalCollectionPositionPropertySpec','Specs/DataSources/TimeIntervalCollectionPropertySpec','Specs/DataSources/VelocityOrientationPropertySpec','Specs/DataSources/VelocityVectorPropertySpec','Specs/DataSources/WallGeometryUpdaterSpec','Specs/DataSources/WallGraphicsSpec','Specs/Renderer/AutomaticUniformSpec','Specs/Renderer/BufferSpec','Specs/Renderer/BuiltinFunctionsSpec','Specs/Renderer/ClearCommandSpec','Specs/Renderer/ClearSpec','Specs/Renderer/ComputeCommandSpec','Specs/Renderer/ContextSpec','Specs/Renderer/CubeMapSpec','Specs/Renderer/DrawCommandSpec','Specs/Renderer/DrawSpec','Specs/Renderer/FramebufferSpec','Specs/Renderer/loadCubeMapSpec','Specs/Renderer/PassStateSpec','Specs/Renderer/RenderbufferSpec','Specs/Renderer/RenderStateSpec','Specs/Renderer/SamplerSpec','Specs/Renderer/ShaderCacheSpec','Specs/Renderer/ShaderProgramSpec','Specs/Renderer/ShaderSourceSpec','Specs/Renderer/TextureSpec','Specs/Renderer/UniformSpec','Specs/Renderer/VertexArrayFacadeSpec','Specs/Renderer/VertexArrayFactorySpec','Specs/Renderer/VertexArraySpec','Specs/Scene/AppearanceSpec','Specs/Scene/ArcGisMapServerImageryProviderSpec','Specs/Scene/BatchTableSpec','Specs/Scene/BillboardCollectionSpec','Specs/Scene/BingMapsImageryProviderSpec','Specs/Scene/CameraEventAggregatorSpec','Specs/Scene/CameraFlightPathSpec','Specs/Scene/CameraSpec','Specs/Scene/createOpenStreetMapImageryProviderSpec','Specs/Scene/createTangentSpaceDebugPrimitiveSpec','Specs/Scene/createTileMapServiceImageryProviderSpec','Specs/Scene/CreditDisplaySpec','Specs/Scene/CullingVolumeSpec','Specs/Scene/DebugAppearanceSpec','Specs/Scene/DebugCameraPrimitiveSpec','Specs/Scene/DebugModelMatrixPrimitiveSpec','Specs/Scene/DeviceOrientationCameraControllerSpec','Specs/Scene/DiscardMissingTileImagePolicySpec','Specs/Scene/EllipsoidPrimitiveSpec','Specs/Scene/EllipsoidSurfaceAppearanceSpec','Specs/Scene/FrameRateMonitorSpec','Specs/Scene/FrustumCommandsSpec','Specs/Scene/GeometryRenderingSpec','Specs/Scene/GlobeSpec','Specs/Scene/GlobeSurfaceTileProviderSpec','Specs/Scene/GlobeSurfaceTileSpec','Specs/Scene/GoogleEarthImageryProviderSpec','Specs/Scene/GridImageryProviderSpec','Specs/Scene/GroundPrimitiveSpec','Specs/Scene/HeightmapTessellatorSpec','Specs/Scene/ImageryLayerCollectionSpec','Specs/Scene/ImageryLayerSpec','Specs/Scene/LabelCollectionSpec','Specs/Scene/MapboxImageryProviderSpec','Specs/Scene/MaterialAppearanceSpec','Specs/Scene/MaterialSpec','Specs/Scene/ModelSpec','Specs/Scene/MoonSpec','Specs/Scene/MultifrustumSpec','Specs/Scene/OrthographicOffCenterFrustumSpec','Specs/Scene/PerInstanceColorAppearanceSpec','Specs/Scene/PerspectiveFrustumSpec','Specs/Scene/PerspectiveOffCenterFrustumSpec','Specs/Scene/PickSpec','Specs/Scene/PointAppearanceSpec','Specs/Scene/PointPrimitiveCollectionSpec','Specs/Scene/PolylineCollectionSpec','Specs/Scene/PolylineColorAppearanceSpec','Specs/Scene/PolylineMaterialAppearanceSpec','Specs/Scene/PrimitiveCollectionSpec','Specs/Scene/PrimitiveCullingSpec','Specs/Scene/PrimitivePipelineSpec','Specs/Scene/PrimitiveSpec','Specs/Scene/QuadtreePrimitiveSpec','Specs/Scene/QuadtreeTileSpec','Specs/Scene/SceneSpec','Specs/Scene/SceneTransformsSpec','Specs/Scene/ScreenSpaceCameraControllerSpec','Specs/Scene/ShadowMapSpec','Specs/Scene/SingleTileImageryProviderSpec','Specs/Scene/SkyAtmosphereSpec','Specs/Scene/SkyBoxSpec','Specs/Scene/SunSpec','Specs/Scene/TextureAtlasSpec','Specs/Scene/TileBoundingBoxSpec','Specs/Scene/TileCoordinatesImageryProviderSpec','Specs/Scene/TileImagerySpec','Specs/Scene/TileReplacementQueueSpec','Specs/Scene/TweenCollectionSpec','Specs/Scene/UrlTemplateImageryProviderSpec','Specs/Scene/ViewportQuadSpec','Specs/Scene/WebMapServiceImageryProviderSpec','Specs/Scene/WebMapTileServiceImageryProviderSpec','Specs/TestWorkers/createBadGeometry','Specs/TestWorkers/returnByteLength','Specs/TestWorkers/returnNonCloneable','Specs/TestWorkers/returnParameters','Specs/TestWorkers/throwError','Specs/TestWorkers/transferArrayBuffer','Specs/ThirdParty/knockoutSpec','Specs/ThirdParty/whenSpec','Specs/Widgets/Animation/AnimationSpec','Specs/Widgets/Animation/AnimationViewModelSpec','Specs/Widgets/BaseLayerPicker/BaseLayerPickerSpec','Specs/Widgets/BaseLayerPicker/BaseLayerPickerViewModelSpec','Specs/Widgets/BaseLayerPicker/ProviderViewModelSpec','Specs/Widgets/CesiumInspector/CesiumInspectorSpec','Specs/Widgets/CesiumInspector/CesiumInspectorViewModelSpec','Specs/Widgets/CesiumWidget/CesiumWidgetSpec','Specs/Widgets/ClockViewModelSpec','Specs/Widgets/createCommandSpec','Specs/Widgets/FullscreenButton/FullscreenButtonSpec','Specs/Widgets/FullscreenButton/FullscreenButtonViewModelSpec','Specs/Widgets/Geocoder/GeocoderSpec','Specs/Widgets/Geocoder/GeocoderViewModelSpec','Specs/Widgets/HomeButton/HomeButtonSpec','Specs/Widgets/HomeButton/HomeButtonViewModelSpec','Specs/Widgets/InfoBox/InfoBoxSpec','Specs/Widgets/InfoBox/InfoBoxViewModelSpec','Specs/Widgets/NavigationHelpButton/NavigationHelpButtonSpec','Specs/Widgets/NavigationHelpButton/NavigationHelpButtonViewModelSpec','Specs/Widgets/PerformanceWatchdog/PerformanceWatchdogSpec','Specs/Widgets/PerformanceWatchdog/PerformanceWatchdogViewModelSpec','Specs/Widgets/ProjectionPicker/ProjectionPickerSpec','Specs/Widgets/ProjectionPicker/ProjectionPickerViewModelSpec','Specs/Widgets/SceneModePicker/SceneModePickerSpec','Specs/Widgets/SceneModePicker/SceneModePickerViewModelSpec','Specs/Widgets/SelectionIndicator/SelectionIndicatorSpec','Specs/Widgets/SelectionIndicator/SelectionIndicatorViewModelSpec','Specs/Widgets/SvgPathBindingHandlerSpec','Specs/Widgets/Timeline/TimelineSpec','Specs/Widgets/Viewer/viewerDragDropMixinSpec','Specs/Widgets/Viewer/viewerPerformanceWatchdogMixinSpec','Specs/Widgets/Viewer/ViewerSpec','Specs/Widgets/VRButton/VRButtonSpec','Specs/Widgets/VRButton/VRButtonViewModelSpec'];