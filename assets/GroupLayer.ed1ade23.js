import{i9 as y,ia as d,cX as v,cY as b,iB as c,iC as p,cZ as u,iD as f,r as _,is as m,iE as w,a9 as l,aa as a,bO as L,ab as O,d2 as g}from"./vendor.f5642644.js";let t=class extends y(d(v(b(c(p(u(g))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}_writeLayers(i,e,o,r){const s=[];if(!i)return s;i.forEach(n=>{const h=f(n,r.webmap?r.webmap.getLayerJSONFromResourceInfo(n):null,r);_(h)&&h.layerType&&s.push(h)}),e.layers=s}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return m(this,i=>{i(this.layers)})}layerAdded(i){i.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(i):this.visibilityMode==="inherited"&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!w(this).initialized)return;const o=this.layers;let r=o.find(s=>s.visible);switch(i){case"exclusive":o.length&&!r&&(r=o.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":o.forEach(s=>{s.visible=e})}}_visibleWatcher(i){this.visibilityMode==="inherited"&&this.layers.forEach(e=>{e.visible=i})}_visibilityWatcher(i,e,o,r){const s=r;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(s):this._isAnyLayerVisible()||(s.visible=!0);break;case"inherited":s.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};l([a()],t.prototype,"fullExtent",void 0),l([a({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),l([L("layers")],t.prototype,"_writeLayers",null),l([a({type:["GroupLayer"]})],t.prototype,"operationalLayerType",void 0),l([a({json:{origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",null),l([a()],t.prototype,"spatialReference",void 0),l([a({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),l([a({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"visibilityMode",null),t=l([O("esri.layers.GroupLayer")],t);const x=t;export{x as default};
