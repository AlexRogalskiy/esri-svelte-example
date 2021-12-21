var V=Object.defineProperty;var P=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var I=(r,e,t)=>e in r?V(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,C=(r,e)=>{for(var t in e||(e={}))E.call(e,t)&&I(r,t,e[t]);if(P)for(var t of P(e))F.call(e,t)&&I(r,t,e[t]);return r};import{a9 as s,aa as m,gc as R,ab as M,w as u,m as U,E as W,cP as $}from"./vendor.f5642644.js";import{t as L}from"./BitmapContainer.5ebbd2f1.js";import{l as _,u as q}from"./LayerView.6e406b70.js";import{S as z}from"./ExportStrategy.c3ef20bc.js";import{i as A}from"./RefreshableLayerView.0b1a5166.js";import{l as B}from"./ExportWMSImageParameters.277b5e6d.js";import"./WGLContainer.96b23cd9.js";import"./definitions.21e97413.js";import"./VertexArrayObject.e0a1a120.js";import"./Texture.36d56722.js";import"./Utils.cc4850d4.js";import"./ShaderCompiler.42257610.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.4d0549e4.js";import"./pixelUtils.62a09b6b.js";import"./Container.46e88f89.js";import"./earcut.f20dd8d8.js";import"./Bitmap.57e5bb68.js";const D=r=>{let e=class extends r{initialize(){this.exportImageParameters=new B({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(t){const{layer:a}=this;if(!t)return Promise.reject(new u("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const{popupEnabled:n}=a;if(!n)return Promise.reject(new u("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n}));const d=this.createFetchPopupFeaturesQuery(t);if(!d)return Promise.resolve([]);const{extent:i,width:o,height:p,x:l,y}=d;if(!(i&&o&&p))throw new u("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:o,height:p});const c=a.fetchFeatureInfo(i,o,p,l,y);return Promise.resolve(c?[c]:[])}};return s([m()],e.prototype,"exportImageParameters",void 0),s([m({readOnly:!0})],e.prototype,"exportImageVersion",null),s([m()],e.prototype,"layer",void 0),s([m(R)],e.prototype,"timeExtent",void 0),e=s([M("esri.layers.mixins.WMSLayerView")],e),e},G=U.getLogger("esri.views.2d.layers.WMSLayerView2D");let h=class extends D(A(_(q))){initialize(){const{layer:r,view:e}=this;r.supportsSpatialReference(e.spatialReference)||this.addResolvingPromise(Promise.reject(new u("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:r})))}update(r){this.strategy.update(r).catch(e=>{W(e)||G.error(e)})}attach(){const{layer:r}=this,{imageMaxHeight:e,imageMaxWidth:t}=r;this._bitmapContainer=new L,this.container.addChild(this._bitmapContainer),this.strategy=new z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:t,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",()=>this.requestUpdate()),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:e}=this,t=this._bitmapContainer,{x:a,y:n}=r,{spatialReference:d}=e;let i=null,o=0,p=0;if(t.children.some(S=>{const{width:x,height:w,resolution:b,x:g,y:f}=S,v=g+b*x,j=f-b*w;return a>=g&&a<=v&&n<=f&&n>=j&&(i=new $({xmin:g,ymin:j,xmax:v,ymax:f,spatialReference:d}),o=x,p=w,!0)}),!i)return null;const l=i.width/o,y=Math.round((a-i.xmin)/l),c=Math.round((i.ymax-n)/l);return{extent:i,width:o,height:p,x:y,y:c}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,e,t,a){return this.layer.fetchImage(r,e,t,C({timeExtent:this.timeExtent},a))}};s([m()],h.prototype,"strategy",void 0),s([m()],h.prototype,"updating",void 0),h=s([M("esri.views.2d.layers.WMSLayerView2D")],h);const me=h;export{me as default};
