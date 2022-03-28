import{L as h,bF as m,eG as o,r as g,bK as _,c2 as d,cd as f,B as w,z as u,aC as E,I as F,m as q}from"./vendor.85f7dae5.js";import{m as S}from"./FeatureStore.d8269933.js";import{g as x,f as T}from"./projectionSupport.d4bcbcd3.js";import{V as b}from"./QueryEngine.331a9e2d.js";import{O as I,L as C}from"./geojson.3d455a91.js";import{d as j}from"./sourceUtils.ddd3b4c0.js";import{K as P}from"./wfsUtils.b85db097.js";import"./PooledRBush.52b33fdb.js";import"./json.da51edc4.js";import"./WhereClause.69811220.js";import"./QueryEngineCapabilities.650d7541.js";import"./quantizationUtils.bb304765.js";import"./utils.f06e7abf.js";import"./ClassBreaksDefinition.26ae1783.js";import"./spatialQuerySupport.becc11b1.js";import"./xmlUtils.0a9bf91b.js";class V{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await P(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await I(s),h(e);const a=C(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!m(this._queryEngine.spatialReference,o))for(const r of a)g(r.geometry)&&(r.geometry=_(x(d(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of a){const i={};j(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:r,geometryType:i,featureType:p,objectIdField:y,customParameters:c}=e;this._featureType=p,this._customParameters=c,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new f(r),await this._checkProjection(n),h(t),this._queryEngine=new b({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new S({geometryType:i,hasM:!1,hasZ:!1})});const l=await this._snapshotFeatures(w(t.signal));return this._queryEngine.featureStore.addMany(l),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=E(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),F(s)||q.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await T(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{V as default};
