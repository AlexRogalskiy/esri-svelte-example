import{K as h}from"./arcadeUtils.27d49219.js";import{hA as S,h4 as s,hJ as o,g4 as u,hc as w,hg as b,h7 as d}from"./vendor.f5642644.js";import{g as R,d as l}from"./SpatialFilter.5b1ed845.js";import{w as A,A as F,x as v,O as j,p as k,g as y,h as D}from"./geometryEngineAsync.679ba02d.js";import"./FeatureSetReader.8549f04d.js";import"./centroid.b7b6726a.js";import"./WhereClause.289bbe04.js";function p(t){return t instanceof u}function c(t,a,r,f,m){return m(t,a,function(n,E,e){if(e.length<2)return f(new Error("Missing Parameters"));if((e=S(e))[0]===null&&e[1]===null)return s(!1);if(o(e[0]))return e[1]instanceof u?s(new R({parentfeatureset:e[0],relation:r,relationGeom:e[1]})):e[1]===null?s(new l({parentfeatureset:e[0]})):f("Spatial Relation cannot accept this parameter type");if(p(e[0])){if(p(e[1])){let i=null;switch(r){case"esriSpatialRelEnvelopeIntersects":i=y(h(e[0]),h(e[1]));break;case"esriSpatialRelIntersects":i=y(e[0],e[1]);break;case"esriSpatialRelContains":i=k(e[0],e[1]);break;case"esriSpatialRelOverlaps":i=j(e[0],e[1]);break;case"esriSpatialRelWithin":i=v(e[0],e[1]);break;case"esriSpatialRelTouches":i=F(e[0],e[1]);break;case"esriSpatialRelCrosses":i=A(e[0],e[1])}return i!==null?i:w(new Error("Unrecognised Relationship"))}return o(e[1])?s(new R({parentfeatureset:e[1],relation:r,relationGeom:e[0]})):e[1]===null?s(!1):f("Spatial Relation cannot accept this parameter type")}return e[0]!==null?f("Spatial Relation cannot accept this parameter type"):o(e[1])?s(new l({parentfeatureset:e[1]})):e[1]instanceof u||e[1]===null?s(!1):void 0})}function L(t){t.mode==="async"&&(t.functions.intersects=function(a,r){return c(a,r,"esriSpatialRelIntersects",t.failDefferred,t.standardFunctionAsync)},t.functions.envelopeintersects=function(a,r){return c(a,r,"esriSpatialRelEnvelopeIntersects",t.failDefferred,t.standardFunctionAsync)},t.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),t.functions.contains=function(a,r){return c(a,r,"esriSpatialRelContains",t.failDefferred,t.standardFunctionAsync)},t.functions.overlaps=function(a,r){return c(a,r,"esriSpatialRelOverlaps",t.failDefferred,t.standardFunctionAsync)},t.functions.within=function(a,r){return c(a,r,"esriSpatialRelWithin",t.failDefferred,t.standardFunctionAsync)},t.functions.touches=function(a,r){return c(a,r,"esriSpatialRelTouches",t.failDefferred,t.standardFunctionAsync)},t.functions.crosses=function(a,r){return c(a,r,"esriSpatialRelCrosses",t.failDefferred,t.standardFunctionAsync)},t.functions.relate=function(a,r){return t.standardFunctionAsync(a,r,function(f,m,n){if(n=S(n),b(n,3,3),p(n[0])&&p(n[1]))return D(n[0],n[1],d(n[2]));if(n[0]instanceof u&&n[1]===null||n[1]instanceof u&&n[0]===null)return!1;if(o(n[0])&&n[1]===null)return new l({parentfeatureset:n[0]});if(o(n[1])&&n[0]===null)return new l({parentfeatureset:n[1]});if(o(n[0])&&n[1]instanceof u)return n[0].relate(n[1],d(n[2]));if(o(n[1])&&n[0]instanceof u)return n[1].relate(n[0],d(n[2]));if(n[0]===null&&n[1]===null)return!1;throw new Error("Illegal Argument")})})}export{L as registerFunctions};
