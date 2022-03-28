var j=Object.defineProperty,x=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var S=(r,e,s)=>e in r?j(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s,d=(r,e)=>{for(var s in e||(e={}))q.call(e,s)&&S(r,s,e[s]);if(A)for(var s of A(e))E.call(e,s)&&S(r,s,e[s]);return r},m=(r,e)=>x(r,O(e));import{af as a,ag as o,ap as $,dY as p,cJ as F,aS as I,cV as v,ah as R,cw as V,eu as Z,r as C,c3 as K,b8 as M,B as Q,dJ as T,dZ as Y,E as _,d_ as z}from"./vendor.85f7dae5.js";import{a as D,i as B,u as G,f as H,d as L,o as U}from"./NAMessage.d30e21e5.js";import"./GPMessage.aa4e462a.js";function b(r){return r.features.map(e=>{const s=M.fromJSON(r.spatialReference),l=v.fromJSON(e);return Q(l.geometry).spatialReference=s,l})}function f(r){return Z(r.features.map(e=>(C(e.geometry)&&(e.geometry.spatialReference=r.spatialReference),K(e.geometry))))}let t=class extends V{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readIncidents(r,e){return b(e.saPolylines)}readServiceAreaPolygons(r,e){return b(e.saPolygons)}};a([o({type:[$]})],t.prototype,"facilities",void 0),a([p("facilities")],t.prototype,"readFacilities",null),a([o({type:[D]})],t.prototype,"messages",void 0),a([o({type:[$]})],t.prototype,"pointBarriers",void 0),a([p("pointBarriers",["barriers"])],t.prototype,"readPointBarriers",null),a([o({type:[F]})],t.prototype,"polylineBarriers",void 0),a([p("polylineBarriers")],t.prototype,"readPolylineBarriers",null),a([o({type:[I]})],t.prototype,"polygonBarriers",void 0),a([p("polygonBarriers")],t.prototype,"readPolygonBarriers",null),a([o({type:[v]})],t.prototype,"serviceAreaPolylines",void 0),a([p("serviceAreaPolylines",["saPolylines"])],t.prototype,"readIncidents",null),a([o({type:[v]})],t.prototype,"serviceAreaPolygons",void 0),a([p("serviceAreaPolygons",["saPolygons"])],t.prototype,"readServiceAreaPolygons",null),t=a([R("esri.rest.support.ServiceAreaSolveResult")],t);const W=t,X=U({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});async function ee(r,e,s){const l=[],u=[],n={},c={},P=T(r),{path:h}=P;e.facilities&&e.facilities.features&&B(e.facilities.features,u,"facilities.features",n),e.pointBarriers&&e.pointBarriers.features&&B(e.pointBarriers.features,u,"pointBarriers.features",n),e.polylineBarriers&&e.polylineBarriers.features&&B(e.polylineBarriers.features,u,"polylineBarriers.features",n),e.polygonBarriers&&e.polygonBarriers.features&&B(e.polygonBarriers.features,u,"polygonBarriers.features",n);const k=await Y(u);for(const i in n){const y=n[i];l.push(i),c[i]=k.slice(y[0],y[1])}if(G(c,l)){let i=null;try{i=await H(h,e.apiKey,s)}catch{}i&&!i.hasZ&&L(c,l)}for(const i in c)c[i].forEach((y,N)=>{e.get(i)[N].geometry=y});const w=m(d({},s),{query:m(d(d({},P.query),X.toQueryParams(e)),{f:"json"})}),{data:J}=await _(`${h}/solveServiceArea`,w);return W.fromJSON(J)}let g=class extends z{constructor(r){super(r),this.url=null}solve(r,e){return ee(this.url,r,e)}};a([o()],g.prototype,"url",void 0),g=a([R("esri.tasks.ServiceAreaTask")],g);const ie=g;export{ie as default};
