var i=Object.defineProperty;var o=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var u=(t,e,s)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,p=(t,e)=>{for(var s in e||(e={}))a.call(e,s)&&u(t,s,e[s]);if(o)for(var s of o(e))l.call(e,s)&&u(t,s,e[s]);return t};import{dR as d,dS as c,dT as y,bc as m,v as h}from"./vendor.f5642644.js";import{t as f}from"./QueryEngineCapabilities.83e56447.js";function $(t){return{renderer:{type:"simple",symbol:t==="esriGeometryPoint"||t==="esriGeometryMultipoint"?d:t==="esriGeometryPolyline"?c:y}}}function b(t,e){if(h("esri-csp-restrictions"))return()=>p({[e]:null},t);try{let s=`this.${e} = null;`;for(const r in t)s+=`this${r.includes(".")?`["${r}"]`:`.${r}`} = ${JSON.stringify(t[r])};`;const n=new Function(s);return()=>new n}catch{return()=>p({[e]:null},t)}}function R(t={}){return[{name:"New Feature",description:"",prototype:{attributes:m(t)}}]}function U(t,e){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0},query:f,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}export{U as a,R as i,b as n,$ as u};
