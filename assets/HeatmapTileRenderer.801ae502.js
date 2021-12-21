import{a9 as a,ab as l}from"./vendor.f5642644.js";import{o as m,e as d}from"./heatmapUtils.2a607203.js";import{n as h}from"./BitmapTileContainer.b7fc1aa6.js";import{o as p}from"./BaseTileRenderer.bf5499a4.js";import"./Bitmap.57e5bb68.js";import"./Container.46e88f89.js";import"./Texture.36d56722.js";import"./TileContainer.03ef91ca.js";import"./Utils.cc4850d4.js";import"./WGLContainer.96b23cd9.js";import"./definitions.21e97413.js";import"./VertexArrayObject.e0a1a120.js";import"./ShaderCompiler.42257610.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.4d0549e4.js";import"./pixelUtils.62a09b6b.js";import"./earcut.f20dd8d8.js";class c{constructor(){this.gradient=null,this.height=512,this.width=512}render(t){m(t,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let o=class extends p{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new h(e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if(e.type==="heatmap"){const{minPixelIntensity:t,maxPixelIntensity:n}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=n,this._gradient=d(e.toJSON()),this.tiles.forEach(r=>{const i=r.bitmap.source;i&&(i.minPixelIntensity=t,i.maxPixelIntensity=n,i.gradient=this._gradient,r.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&e.type==="heatmap"}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const n=e.intensityInfo,{minPixelIntensity:r,maxPixelIntensity:i}=this._intensityInfo,s=t.bitmap.source||new c;s.intensities=n&&n.matrix||null,s.minPixelIntensity=r,s.maxPixelIntensity=i,s.gradient=this._gradient,t.bitmap.source=s,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};o=a([l("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const q=o;export{q as default};
