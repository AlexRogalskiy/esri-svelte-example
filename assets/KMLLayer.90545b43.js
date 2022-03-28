var L=Object.defineProperty;var c=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var v=(e,s,t)=>s in e?L(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,f=(e,s)=>{for(var t in s||(s={}))j.call(s,t)&&v(e,t,s[t]);if(c)for(var t of c(s))F.call(s,t)&&v(e,t,s[t]);return e};import{Q as O,jV as $,iq as M,dj as g,r as y,cL as d,ei as m,cA as h,af as r,ag as l,cv as I,jW as T,dY as p,ah as S,iD as C,iF as K,iE as N,e7 as P,e8 as R,e9 as A,ed as H,iT as J,b8 as w,eA as W,b9 as z,b_ as V,ec as q}from"./vendor.85f7dae5.js";import{j as D,S as E,g as _,d as x}from"./kmlUtils.da33ce06.js";var u;let o=u=class extends O.EventedMixin($(M)){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){g(()=>this.networkLink).then(()=>g(()=>this.visible===!0)).then(()=>this.load())}load(e){if(!this.networkLink||this.networkLink.viewFormat)return;const s=y(e)?e.signal:null,t=this._fetchService(this._get("networkLink").href,s).then(a=>{const n=D(a.sublayers);this.fullExtent=d.fromJSON(n),this.sourceJSON=a;const b=m(h.ofType(u),E(u,a));this.sublayers?this.sublayers.addMany(b):this.sublayers=b,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(t),Promise.resolve(this)}set sublayers(e){const s=this._get("sublayers");s&&(s.forEach(t=>{t.parent=null,t.layer=null}),this._sublayersHandles.forEach(t=>t.remove()),this._sublayersHandles=null),e&&(e.forEach(t=>{t.parent=this,t.layer=this.layer}),this._sublayersHandles=[e.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),e.on("after-remove",({item:t})=>{t.parent=null,t.layer=null})]),this._set("sublayers",e)}castSublayers(e){return m(h.ofType(u),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,s){return!!s.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(s=>s.layer=e)}_fetchService(e,s){return _(e,this.layer.outSpatialReference,this.layer.refreshInterval,s).then(t=>x(t.data))}};r([l()],o.prototype,"description",void 0),r([l()],o.prototype,"id",void 0),r([l({readOnly:!0,value:null})],o.prototype,"networkLink",void 0),r([l({json:{write:{allowNull:!0}}})],o.prototype,"parent",void 0),r([l({value:null,json:{write:{allowNull:!0}}})],o.prototype,"sublayers",null),r([I("sublayers")],o.prototype,"castSublayers",null),r([l({value:null,json:{read:{source:"name",reader:e=>T(e)}}})],o.prototype,"title",void 0),r([l({value:!0})],o.prototype,"visible",null),r([p("visible",["visibility"])],o.prototype,"readVisible",null),r([l()],o.prototype,"sourceJSON",void 0),r([l({value:null})],o.prototype,"layer",null),r([l({type:d})],o.prototype,"fullExtent",void 0),o=u=r([S("esri.layers.support.KMLSublayer")],o);const k=o,G=["kml","xml"];let i=class extends C(K(N(P(R(A(H)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new J({getCollections:()=>[this.sublayers],getChildrenFunction:s=>s.sublayers}),this.outSpatialReference=w.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",(e,s)=>{s&&s.forEach(t=>{t.parent=null,t.layer=null}),e&&e.forEach(t=>{t.parent=this,t.layer=this})},!0),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))}normalizeCtorArgs(e,s){return typeof e=="string"?f({url:e},s):e}readSublayersFromItemOrWebMap(e,s){this._visibleFolders=s.visibleFolders}readSublayers(e,s,t){return E(k,s,t,this._visibleFolders)}writeSublayers(e,s){const t=[],a=e.toArray();for(;a.length;){const n=a[0];n.networkLink||(n.visible&&t.push(n.id),n.sublayers&&a.push(...n.sublayers.toArray())),a.shift()}s.visibleFolders=t}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?W(this.url,G)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,s=[],t=a=>{a.visible&&(s.push(a),a.sublayers&&a.sublayers.forEach(t))};return e&&e.forEach(t),s}get fullExtent(){return this._recomputeFullExtent()}load(e){const s=y(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(z).then(()=>this._fetchService(s))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const s=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:_(this.url,this.outSpatialReference,this.refreshInterval,e)),t=x(s.data);t&&this.read(t,{origin:"service"})}_recomputeFullExtent(){let e=null;y(this.extent)&&(e=this.extent.clone());const s=t=>{if(t.sublayers)for(const a of t.sublayers.items)s(a),a.visible&&a.fullExtent&&(y(e)?e.union(a.fullExtent):e=a.fullExtent.clone())};return s(this),e}};r([l({readOnly:!0})],i.prototype,"allSublayers",void 0),r([l({type:w})],i.prototype,"outSpatialReference",void 0),r([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([l({readOnly:!0,json:{read:!1,write:!1}})],i.prototype,"legendEnabled",void 0),r([l({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),r([l({type:["KML"]})],i.prototype,"operationalLayerType",void 0),r([l({})],i.prototype,"resourceInfo",void 0),r([l({type:h.ofType(k),json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),r([p(["web-map","portal-item"],"sublayers",["visibleFolders"])],i.prototype,"readSublayersFromItemOrWebMap",null),r([p("service","sublayers",["sublayers"])],i.prototype,"readSublayers",null),r([V("sublayers")],i.prototype,"writeSublayers",null),r([l({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),r([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],i.prototype,"title",null),r([l(q)],i.prototype,"url",void 0),r([l({readOnly:!0})],i.prototype,"visibleSublayers",null),r([l({type:d})],i.prototype,"extent",void 0),r([l()],i.prototype,"fullExtent",null),i=r([S("esri.layers.KMLLayer")],i);const B=i;export{B as default};
