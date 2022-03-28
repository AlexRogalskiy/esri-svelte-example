var m=Object.defineProperty,v=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var I=(e,r,a)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,T=(e,r)=>{for(var a in r||(r={}))w.call(r,a)&&I(e,a,r[a]);if(d)for(var a of d(r))b.call(r,a)&&I(e,a,r[a]);return e},f=(e,r)=>v(e,A(r));import{cx as W,cy as F,cz as C,cA as V}from"./vendor.85f7dae5.js";import{a as L}from"./lazyLayerLoader.e1953942.js";import{selectLayerClassPath as B}from"./portalLayers.c1613e33.js";import"./layersLoader.5b17497f.js";import"./jsonContext.8eee4371.js";function O(e){return g(e,"notes")}function h(e){return g(e,"route")}function g(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function U(e,r,a){if(!r)return;const y=[];for(const t of r){const i=J(t,a);t.layerType==="GroupLayer"?y.push(j(i,t,a)):y.push(i)}const n=await W(y);for(const t of n)!t.value||a.filter&&!a.filter(t.value)||e.add(t.value)}const x={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer"},D={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},R={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},k={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},E={ArcGISFeatureLayer:"FeatureLayer"},N={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function J(e,r){return K(await P(e,r),e,r)}async function K(e,r,a){const y=new e;return y.read(r,a.context),y.type==="group"&&G(r)&&await z(y,r,a.context),await F(y,a.context),y}async function P(e,r){const a=r.context,y=H(a);let n=e.layerType||e.type;!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType);const t=y[n];let i=t?L[t]:L.UnknownLayer;if(M(e)){const s=a==null?void 0:a.portal;if(e.itemId){const l=new C({id:e.itemId,portal:s});await l.load();const o=(await B(l)).className||"UnknownLayer";i=L[o]}}else n==="ArcGISFeatureLayer"?O(e)?i=L.MapNotesLayer:h(e)?i=L.RouteLayer:G(e)&&(i=L.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?i=L.WMTSLayer:n==="WFS"&&e.wfsInfo.version!=="2.0.0"&&(i=L.UnsupportedLayer);return i()}function G(e){var r,a,y;return e.layerType!=="ArcGISFeatureLayer"||M(e)?!1:((r=(a=e.featureCollection)==null||(y=a.layers)==null?void 0:y.length)!=null?r:0)>1}function M(e){return e.type==="Feature Collection"}function H(e){let r;if(e.origin==="web-scene")switch(e.layerContainerType){case"basemap":r=R;break;case"ground":r=D;break;default:r=x}else switch(e.layerContainerType){case"basemap":r=N;break;case"tables":r=E;break;default:r=k}return r}async function j(e,r,a){const y=new V,n=U(y,Array.isArray(r.layers)?r.layers:[],a),t=await e;if(await n,t.type==="group")return t.layers.addMany(y),t}async function z(e,r,a){const y=L.FeatureLayer,n=await y(),t=r.featureCollection,i=t.showLegend,s=t.layers.map((l,o)=>{var u,p;const c=new n;c.read(l,a);const S=f(T({},a),{ignoreDefaults:!0});return c.read({id:`${e.id}-sublayer-${o}`,visibility:(u=(p=r.visibleLayers)==null?void 0:p.includes(o))==null||u},S),i!=null&&c.read({showLegend:i},S),c});e.layers.addMany(s)}export{U as populateOperationalLayers};
