var d=Object.defineProperty,m=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var p=(i,e,s)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,l=(i,e)=>{for(var s in e||(e={}))b.call(e,s)&&p(i,s,e[s]);if(n)for(var s of n(e))f.call(e,s)&&p(i,s,e[s]);return i},y=(i,e)=>m(i,u(e));import{a9 as h,ab as c,W as j,r as w,gb as g}from"./vendor.f5642644.js";import v from"./FeatureLayerView2D.8496f51a.js";import"./Container.46e88f89.js";import"./drapedUtils.31b2576a.js";import"./definitions.21e97413.js";import"./LayerView.6e406b70.js";import"./schemaUtils.24d1146f.js";import"./Utils.cc4850d4.js";import"./Texture.36d56722.js";import"./MaterialKey.4d0549e4.js";import"./visualVariablesUtils.7662df5b.js";import"./CIMSymbolHelper.e6d71723.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.a172be06.js";import"./quantizationUtils.0f09cc76.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.a76d11a6.js";import"./popupUtils.25af489d.js";import"./RefreshableLayerView.0b1a5166.js";function S(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let o=class extends v{initialize(){this.handles.add([j(this.view,"viewpoint",()=>this._update())])}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,r=this.layer.sublayers.filter(a=>S(a,s)).map(a=>a.subtypeCode);if(!r.length)return e;e=w(e)?e:new g().toJSON();const t=`NOT ${this.layer.subtypeField} IN (${r.join(",")})`;return e.where=e.where?`(${e.where}) AND (${t})`:t,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],r=this.layer.sublayers.find(t=>t.subtypeCode===s);i.layer=r,i.sourceLayer=this.layer}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(t=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:t.labelingInfo,labelsVisible:t.labelsVisible,renderer:t.renderer,subtypeCode:t.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(t=>t.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let r=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return r+=s,y(l(l({},super._createSchemaConfig()),i),{definitionExpression:r})}};o=h([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const J=o;export{J as default};
