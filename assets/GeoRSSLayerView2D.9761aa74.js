import{a0 as p,dh as c,cA as g,dm as w,dn as d,dp as m,af as f,ah as u}from"./vendor.85f7dae5.js";import{f as V,u as b}from"./LayerView.96933026.js";import{i as S}from"./GraphicContainer.14e23810.js";import{r as v}from"./BaseGraphicContainer.b5f81ed2.js";import"./Container.710b0eab.js";import"./Utils.c81af201.js";import"./enums.d6db9796.js";import"./enums.457e23f9.js";import"./Texture.0a5e9578.js";import"./VertexElementDescriptor.0406f2d4.js";import"./CIMSymbolHelper.1288b346.js";import"./BidiEngine.b9926823.js";import"./MaterialKey.d6d4c400.js";import"./GeometryUtils.e53da643.js";import"./projectionSupport.d4bcbcd3.js";import"./json.da51edc4.js";import"./VertexArrayObject.37b5010e.js";import"./FeatureContainer.e9c6d16b.js";import"./TileContainer.3466b105.js";import"./WGLContainer.58232395.js";import"./pixelUtils.81a2c47a.js";import"./ProgramTemplate.222695da.js";import"./StyleDefinition.3146490e.js";import"./config.bd364997.js";import"./GeometryUtils.5ea26345.js";import"./earcut.91e104de.js";import"./visualVariablesUtils.6c4193ad.js";import"./visualVariablesUtils.36e1778e.js";import"./Matcher.4fc35cf2.js";import"./tileUtils.847f5850.js";import"./TileClipper.9eab18a5.js";import"./Geometry.e891c191.js";import"./ExpandedCIM.5149f774.js";import"./quantizationUtils.bb304765.js";import"./devEnvironmentUtils.f51567b1.js";import"./schemaUtils.a6cfb8c2.js";import"./createSymbolSchema.86478aa4.js";import"./MD5.67d7a872.js";import"./util.94a60279.js";import"./ComputedAttributeStorage.fdd6354d.js";import"./vec3f32.8179e08f.js";let l=class extends V(b){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,t){if(!this.graphicsViews.length)return null;const a=this.graphicsViews.reverse().map(i=>i.hitTest(e));return(await Promise.all(a)).flat().filter((i,r)=>(i&&(i.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),i.layer=this.layer,i.sourceLayer=this.layer),!!i))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.handles.add([p(this.layer,"featureCollections",e=>{this._clear();for(const{popupInfo:t,featureSet:a,layerDefinition:i}of e){const r=c.fromJSON(a),h=new g(r.features),n=i.drawingInfo,y=t?w.fromJSON(t):null,o=d(n.renderer),s=new v({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:h,renderer:o,container:new S(this.view.featuresTilingScheme)});this._graphicsViewMap[r.geometryType]=s,this._popupTemplates.set(s,y),r.geometryType!=="polygon"||this.layer.polygonSymbol?r.geometryType!=="polyline"||this.layer.lineSymbol?r.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=o.symbol):this.layer.lineSymbol=o.symbol:this.layer.polygonSymbol=o.symbol,this.graphicsViews.push(s),this.container.addChild(s.container)}}),p(this.layer,"polygonSymbol",e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e})}),p(this.layer,"lineSymbol",e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e})}),p(this.layer,"pointSymbol",e=>{this._graphicsViewMap.point.renderer=new m({symbol:e})})],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};l=f([u("esri.views.2d.layers.GeoRSSLayerView2D")],l);const he=l;export{he as default};
