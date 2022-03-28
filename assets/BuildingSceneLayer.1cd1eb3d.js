var fe=Object.defineProperty,ve=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var z=(e,r,i)=>r in e?fe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,W=(e,r)=>{for(var i in r||(r={}))be.call(r,i)&&z(e,i,r[i]);if(Z)for(var i of Z(r))Se.call(r,i)&&z(e,i,r[i]);return e},X=(e,r)=>ve(e,me(r));import{b4 as we,iG as $e,af as t,ag as s,dY as I,gK as Oe,iH as P,ah as l,m as H,iq as oe,cU as ae,cd as xe,r as u,iI as ne,iJ as Ie,E as le,d5 as Fe,w as je,z as E,cL as Le,b8 as pe,iK as Te,iL as Be,iM as Ee,dm as Ae,e0 as ye,cu as qe,iN as Ne,cA as S,iO as Pe,iP as Re,cw as v,bk as c,iQ as _e,iR as Me,e6 as ke,e7 as Ke,e8 as Qe,iE as Ue,e9 as De,iS as Ve,ed as Ce,iT as Je,ev as Ge,b9 as He,iU as Ze,iV as ze,iW as We}from"./vendor.85f7dae5.js";import{t as Xe,l as Ye}from"./FetchAssociatedFeatureLayer.0353d93d.js";import{n as et,A as tt,K as Y}from"./SceneService.3663c5d3.js";import{s as rt,l as st,u as it,m as ot}from"./I3SLayerDefinitions.8192fb8c.js";import"./originUtils.0f642d6d.js";import"./resourceUtils.5713089e.js";let y=class extends we($e){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,r){return typeof r.alias=="string"?r.alias:typeof r.name=="string"?r.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:void 0}};t([s({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([I("service","title",["alias","name"])],y.prototype,"readTitle",null),t([s()],y.prototype,"layer",void 0),t([s({type:Oe,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([I("service","id")],y.prototype,"readIdOnlyOnce",null),t([s(P(String))],y.prototype,"modelName",void 0),t([s(P(Boolean))],y.prototype,"isEmpty",void 0),t([s({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([s({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([l("esri.layers.buildingSublayers.BuildingSublayer")],y);const ue=y,at=H.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),ee=Ne();let o=class extends oe.LoadableMixin(ae(ue)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new xe(this.fields)}readAssociatedLayer(e,r){const i=this.layer.associatedFeatureServiceItem,a=r.associatedLayerID;return u(i)&&typeof a=="number"?new ne({portalItem:i,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return u(this.associatedLayer)?this.associatedLayer.displayField:null}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=u(e)?e.signal:null,i=this._fetchService(r).then(()=>{this.indexInfo=et(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,at,r)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return Ie(this,e)}async _fetchService(e){const r=(await le(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var i,a,p,h;const q=(i=this.getFeatureType(r==null?void 0:r.feature))==null||(a=i.domains)==null?void 0:a[e];return q&&q.type!=="inherited"?q:(p=(h=this.getField(e))==null?void 0:h.domain)!=null?p:null}getFeatureType(e){return e&&u(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return u(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return u(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=u(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Xe,{query:r,data:{supportsZ:i,supportsM:a,isVersioned:p}}=e;return{query:r,data:{supportsZ:i,supportsM:a,isVersioned:p}}}createQuery(){const e=new Fe;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),r)).then(i=>{if(i!=null&&i.features)for(const a of i.features)a.layer=this.layer,a.sourceLayer=this;return i})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),r))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:u(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return u(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),je(this.associatedLayer))throw new E("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new E("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([s({readOnly:!0})],o.prototype,"parsedUrl",null),t([s({type:rt,readOnly:!0})],o.prototype,"nodePages",void 0),t([s({type:[st],readOnly:!0})],o.prototype,"materialDefinitions",void 0),t([s({type:[it],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),t([s({type:[ot],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),t([s({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),t([s({readOnly:!0})],o.prototype,"store",void 0),t([s({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),t([s({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),t([s(ee.fields)],o.prototype,"fields",void 0),t([s({readOnly:!0})],o.prototype,"fieldsIndex",null),t([s({readOnly:!0,type:ne})],o.prototype,"associatedLayer",void 0),t([I("service","associatedLayer",["associatedLayerID"])],o.prototype,"readAssociatedLayer",null),t([s(ee.outFields)],o.prototype,"outFields",void 0),t([s({type:String,readOnly:!0})],o.prototype,"objectIdField",null),t([s({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),t([s({readOnly:!0,type:String})],o.prototype,"apiKey",null),t([s({readOnly:!0,type:Le})],o.prototype,"fullExtent",null),t([s({readOnly:!0,type:pe})],o.prototype,"spatialReference",null),t([s({readOnly:!0})],o.prototype,"version",null),t([s({readOnly:!0,type:Te})],o.prototype,"elevationInfo",null),t([s({readOnly:!0,type:Number})],o.prototype,"minScale",null),t([s({readOnly:!0,type:Number})],o.prototype,"maxScale",null),t([s({readOnly:!0,type:Number})],o.prototype,"effectiveScaleRange",null),t([s({type:["hide","show"],json:{write:!0}})],o.prototype,"listMode",void 0),t([s({types:Be,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",void 0),t([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([s(Ee)],o.prototype,"popupEnabled",void 0),t([s({type:Ae,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],o.prototype,"popupTemplate",void 0),t([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),t([s({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),t([s()],o.prototype,"types",null),t([s()],o.prototype,"typeIdField",null),t([s({json:{write:!1}}),ye(new qe({"3DObject":"3d-object",Point:"point"}))],o.prototype,"layerType",void 0),t([s()],o.prototype,"geometryType",null),t([s()],o.prototype,"profile",null),t([s({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),o=t([l("esri.layers.buildingSublayers.BuildingComponentSublayer")],o);const R=o;var _;const te={type:S,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:de}}},read:!1}};function de(e,r,i){if(e&&Array.isArray(e))return new S(e.map(a=>{const p=nt(a);if(p){const h=new p;return h.read(a,i),h}i&&i.messages&&a&&i.messages.push(new Pe("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:i}))}))}let f=_=class extends ue{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Re(this,e=>_.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function nt(e){return e.layerType==="group"?f:R}t([s({type:["hide","show","hide-children"],json:{write:!0}})],f.prototype,"listMode",void 0),t([s(te)],f.prototype,"sublayers",void 0),f=_=t([l("esri.layers.buildingSublayers.BuildingGroupSublayer")],f),function(e){function r(i,a){i.forEach(p=>{a(p),p.type==="building-group"&&r(p.sublayers,a)})}e.sublayersProperty=te,e.readSublayers=de,e.forEachSublayer=r}(f||(f={}));const m=f;let F=class extends v{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:!0}})],F.prototype,"type",void 0),F=t([l("esri.layers.support.BuildingFilterAuthoringInfo")],F);const ce=F;var M;let w=M=class extends v{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new M({filterType:this.filterType,filterValues:c(this.filterValues)})}};t([s({type:String,json:{write:!0}})],w.prototype,"filterType",void 0),t([s({type:[String],json:{write:!0}})],w.prototype,"filterValues",void 0),w=M=t([l("esri.layers.support.BuildingFilterAuthoringInfoType")],w);const lt=w;var k;const pt=S.ofType(lt);let j=k=class extends v{clone(){return new k({filterTypes:c(this.filterTypes)})}};t([s({type:pt,json:{write:!0}})],j.prototype,"filterTypes",void 0),j=k=t([l("esri.layers.support.BuildingFilterAuthoringInfoBlock")],j);const yt=j;var K;const ut=S.ofType(yt);let $=K=class extends ce{constructor(){super(...arguments),this.type="checkbox"}clone(){return new K({filterBlocks:c(this.filterBlocks)})}};t([s({type:["checkbox"]})],$.prototype,"type",void 0),t([s({type:ut,json:{write:!0}})],$.prototype,"filterBlocks",void 0),$=K=t([l("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],$);const re=$;let L=class extends v{};t([s({readOnly:!0,json:{read:!1}})],L.prototype,"type",void 0),L=t([l("esri.layers.support.BuildingFilterMode")],L);const A=L;var Q;let T=Q=class extends A{constructor(){super(...arguments),this.type="solid"}clone(){return new Q}};t([s({type:["solid"],readOnly:!0,json:{write:!0}})],T.prototype,"type",void 0),T=Q=t([l("esri.layers.support.BuildingFilterModeSolid")],T);const U=T;var D;let O=D=class extends A{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new D({edges:c(this.edges)})}};t([ye({wireFrame:"wire-frame"})],O.prototype,"type",void 0),t([s(_e)],O.prototype,"edges",void 0),O=D=t([l("esri.layers.support.BuildingFilterModeWireFrame")],O);const se=O;var V;let B=V=class extends A{constructor(){super(...arguments),this.type="x-ray"}clone(){return new V}};t([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=V=t([l("esri.layers.support.BuildingFilterModeXRay")],B);const ie=B;var C;const dt={nonNullable:!0,types:{key:"type",base:A,typeMap:{solid:U,"wire-frame":se,"x-ray":ie}},json:{read:e=>{switch(e&&e.type){case"solid":return U.fromJSON(e);case"wireFrame":return se.fromJSON(e);case"x-ray":return ie.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let b=C=class extends v{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new U,this.title=""}clone(){return new C({filterExpression:this.filterExpression,filterMode:c(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"filterExpression",void 0),t([s(dt)],b.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"title",void 0),b=C=t([l("esri.layers.support.BuildingFilterBlock")],b);const ct=b;var J;const ht=S.ofType(ct);let g=J=class extends v{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Me(),this.name=null}clone(){return new J({description:this.description,filterBlocks:c(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:c(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],g.prototype,"description",void 0),t([s({type:ht,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:ce,typeMap:{checkbox:re}},json:{read:e=>(e&&e.type)==="checkbox"?re.fromJSON(e):null,write:!0}})],g.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"name",void 0),g=J=t([l("esri.layers.support.BuildingFilter")],g);const gt=g,ft=H.getLogger("esri.layers.support.BuildingSummaryStatistics");let d=class extends v{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],d.prototype,"fieldName",void 0),t([s({type:String})],d.prototype,"modelName",void 0),t([s({type:String})],d.prototype,"label",void 0),t([s({type:Number})],d.prototype,"min",void 0),t([s({type:Number})],d.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],d.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],d.prototype,"subLayerIds",void 0),d=t([l("esri.layers.support.BuildingFieldStatistics")],d);let x=class extends oe.LoadableMixin(ae(v)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(ft.error("building summary statistics are not loaded"),null)}load(e){const r=u(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await le(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],x.prototype,"url",void 0),t([s({readOnly:!0,type:[d],json:{read:{source:"summary"}}})],x.prototype,"fields",null),x=t([l("esri.layers.support.BuildingSummaryStatistics")],x);const he=x,N=H.getLogger("esri.layers.BuildingSceneLayer"),ge=S.ofType(gt),G=c(m.sublayersProperty);G.json.origins["web-scene"]={type:[R],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},G.json.origins["portal-item"]={type:[R],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let n=class extends tt(ke(Ke(Qe(Ue(De(Ve(Ce))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Je({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new ge,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,r,i){const a=m.readSublayers(e,r,i);return m.forEachSublayer(a,p=>p.layer=this),this.sublayerOverrides&&(this.applySublayerOverrides(a,this.sublayerOverrides),this.sublayerOverrides=null),a}applySublayerOverrides(e,{overrides:r,context:i}){m.forEachSublayer(e,a=>a.read(r.get(a.id),i))}readSublayerOverrides(e,r){const i=new Map;for(const a of e)a!=null&&typeof a=="object"&&typeof a.id=="number"?i.set(a.id,a):r.messages.push(new E("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:a}));return{overrides:i,context:r}}writeSublayerOverrides(e,r,i){const a=[];m.forEachSublayer(this.sublayers,p=>{const h=p.write({},i);Object.keys(h).length>1&&a.push(h)}),a.length>0&&(r.sublayers=a)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(i=>{r.sublayers.push(c(i))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this.sublayerOverrides=i}}readSummaryStatistics(e,r){if(typeof r.statisticsHRef=="string"){const i=Ge(this.parsedUrl.path,r.statisticsHRef);return new he({url:i})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=u(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(He).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return Ze(this,e=>{m.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(Y.SAVE_AS,X(W({},r),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(Y.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new E("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&N.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&N.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new Ye(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(i){N.warn("Associated feature service item could not be loaded",i)}}};t([s({type:["BuildingSceneLayer"]})],n.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],n.prototype,"allSublayers",void 0),t([s(G)],n.prototype,"sublayers",void 0),t([I("service","sublayers")],n.prototype,"readSublayers",null),t([s({type:ge,nonNullable:!0,json:{write:!0}})],n.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],n.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:he})],n.prototype,"summaryStatistics",void 0),t([I("summaryStatistics",["statisticsHRef"])],n.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],n.prototype,"outFields",void 0),t([s(ze)],n.prototype,"fullExtent",void 0),t([s({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),t([s(P(pe))],n.prototype,"spatialReference",void 0),t([s(We)],n.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([s()],n.prototype,"associatedFeatureServiceItem",void 0),n=t([l("esri.layers.BuildingSceneLayer")],n);const xt=n;export{xt as default};
