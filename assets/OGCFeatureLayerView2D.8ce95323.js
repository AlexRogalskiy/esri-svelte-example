import{af as r,ag as o,ah as p}from"./vendor.85f7dae5.js";import s from"./FeatureLayerView2D.e918d382.js";import"./Container.710b0eab.js";import"./enums.d6db9796.js";import"./LayerView.96933026.js";import"./schemaUtils.a6cfb8c2.js";import"./Utils.c81af201.js";import"./enums.457e23f9.js";import"./Texture.0a5e9578.js";import"./VertexElementDescriptor.0406f2d4.js";import"./visualVariablesUtils.36e1778e.js";import"./createSymbolSchema.86478aa4.js";import"./MaterialKey.d6d4c400.js";import"./CIMSymbolHelper.1288b346.js";import"./BidiEngine.b9926823.js";import"./GeometryUtils.e53da643.js";import"./ExpandedCIM.5149f774.js";import"./quantizationUtils.bb304765.js";import"./MD5.67d7a872.js";import"./util.94a60279.js";import"./popupUtils.6538ef30.js";import"./RefreshableLayerView.f170071f.js";const m=t=>{let e=class extends t{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([o()],e.prototype,"layer",void 0),r([o({readOnly:!0})],e.prototype,"availableFields",null),e=r([p("esri.views.layers.OGCFeatureLayerView")],e),e};let i=class extends m(s){supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}};i=r([p("esri.views.2d.layers.OGCFeatureLayerView2D")],i);const D=i;export{D as default};
