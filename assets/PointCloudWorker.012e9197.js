var q=Object.defineProperty,G=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var E=(t,e,n)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,M=(t,e)=>{for(var n in e||(e={}))K.call(e,n)&&E(t,n,e[n]);if(V)for(var n of V(e))Q.call(e,n)&&E(t,n,e[n]);return t},F=(t,e)=>G(t,W(e));import{z as y,m as ee,bk as te,r as v,w as ne,gI as re,b8 as Y,fy as oe,gJ as ie}from"./vendor.85f7dae5.js";import{w as ae}from"./quat.8c278d2a.js";import{t as se,n as R}from"./vec3f32.8179e08f.js";import{a as ce,b as ue,d as le}from"./PointCloudUniqueValueRenderer.c59ecb91.js";import{O as A}from"./VertexAttribute.ebaf629c.js";function H(){const t=new Float32Array(4);return t[3]=1,t}function fe(t){const e=new Float32Array(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function de(t,e,n,i){const s=new Float32Array(4);return s[0]=t,s[1]=e,s[2]=n,s[3]=i,s}function be(t,e){return new Float32Array(t,e,4)}Object.freeze({__proto__:null,create:H,clone:fe,fromValues:de,createView:be});const g=!0,U={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function D(t,e,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(t,n+U.identifierOffset,U.identifierLength)),version:e.getUint16(n+U.versionOffset,g),checksum:e.getUint32(n+U.checksumOffset,g)}}const p={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function ye(t,e){return{sizeLo:t.getUint32(e+p.sizeLo,g),sizeHi:t.getUint32(e+p.sizeHi,g),minX:t.getFloat64(e+p.minX,g),minY:t.getFloat64(e+p.minY,g),minZ:t.getFloat64(e+p.minZ,g),maxX:t.getFloat64(e+p.maxX,g),maxY:t.getFloat64(e+p.maxY,g),maxZ:t.getFloat64(e+p.maxZ,g),errorX:t.getFloat64(e+p.errorX,g),errorY:t.getFloat64(e+p.errorY,g),errorZ:t.getFloat64(e+p.errorZ,g),count:t.getUint32(e+p.count,g),reserved:t.getUint32(e+p.reserved,g)}}function ge(t){const e=new DataView(t,0);let n=0;const{identifier:i,version:s}=D(t,e,n);if(n+=U.byteCount,i!=="LEPCC     ")throw new y("lepcc-decode-error","Bad identifier");if(s>1)throw new y("lepcc-decode-error","Unknown version");const r=ye(e,n);if(n+=p.byteCount,r.sizeHi*2**32+r.sizeLo!==t.byteLength)throw new y("lepcc-decode-error","Bad size");const a=new Float64Array(3*r.count),u=[],o=[],l=[],c=[];if(n=z(t,n,u),n=z(t,n,o),n=z(t,n,l),n=z(t,n,c),n!==t.byteLength)throw new y("lepcc-decode-error","Bad length");let f=0,d=0;for(let b=0;b<u.length;b++){d+=u[b];let h=0;for(let w=0;w<o[b];w++){h+=l[f];const I=c[f];a[3*f]=Math.min(r.maxX,r.minX+2*r.errorX*h),a[3*f+1]=Math.min(r.maxY,r.minY+2*r.errorY*d),a[3*f+2]=Math.min(r.maxZ,r.minZ+2*r.errorZ*I),f++}}return{errorX:r.errorX,errorY:r.errorY,errorZ:r.errorZ,result:a}}function z(t,e,n){const i=[];e=x(t,e,i);const s=[];for(let r=0;r<i.length;r++){s.length=0,e=x(t,e,s);for(let a=0;a<s.length;a++)n.push(s[a]+i[r])}return e}function x(t,e,n){const i=new DataView(t,e),s=i.getUint8(0),r=31&s,a=!!(32&s),u=(192&s)>>6;let o=0;if(u===0)o=i.getUint32(1,g),e+=5;else if(u===1)o=i.getUint16(1,g),e+=3;else{if(u!==2)throw new y("lepcc-decode-error","Bad count type");o=i.getUint8(1),e+=2}if(a)throw new y("lepcc-decode-error","LUT not implemented");const l=Math.ceil(o*r/8),c=new Uint8Array(t,e,l);let f=0,d=0,b=0;const h=-1>>>32-r;for(let w=0;w<o;w++){for(;d<r;)f|=c[b]<<d,d+=8,b+=1;n[w]=f&h,f>>>=r,d-=r,d+r>32&&(f|=c[b-1]>>8-d)}return e+b}const m={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function he(t,e){return{sizeLo:t.getUint32(e+m.sizeLo,g),sizeHi:t.getUint32(e+m.sizeHi,g),count:t.getUint32(e+m.count,g),colorMapCount:t.getUint16(e+m.colorMapCount,g),lookupMethod:t.getUint8(e+m.lookupMethod),compressionMethod:t.getUint8(e+m.compressionMethod)}}function pe(t){const e=new DataView(t,0);let n=0;const{identifier:i,version:s}=D(t,e,n);if(n+=U.byteCount,i!=="ClusterRGB")throw new y("lepcc-decode-error","Bad identifier");if(s>1)throw new y("lepcc-decode-error","Unknown version");const r=he(e,n);if(n+=m.byteCount,r.sizeHi*2**32+r.sizeLo!==t.byteLength)throw new y("lepcc-decode-error","Bad size");if((r.lookupMethod===2||r.lookupMethod===1)&&r.compressionMethod===0){if(3*r.colorMapCount+r.count+n!==t.byteLength||r.colorMapCount>256)throw new y("lepcc-decode-error","Bad count");const a=new Uint8Array(t,n,3*r.colorMapCount),u=new Uint8Array(t,n+3*r.colorMapCount,r.count),o=new Uint8Array(3*r.count);for(let l=0;l<r.count;l++){const c=u[l];o[3*l]=a[3*c],o[3*l+1]=a[3*c+1],o[3*l+2]=a[3*c+2]}return o}if(r.lookupMethod===0&&r.compressionMethod===0){if(3*r.count+n!==t.byteLength||r.colorMapCount!==0)throw new y("lepcc-decode-error","Bad count");return new Uint8Array(t,n).slice()}if(r.lookupMethod<=2&&r.compressionMethod===1){if(n+3!==t.byteLength||r.colorMapCount!==1)throw new y("lepcc-decode-error","Bad count");const a=e.getUint8(n),u=e.getUint8(n+1),o=e.getUint8(n+2),l=new Uint8Array(3*r.count);for(let c=0;c<r.count;c++)l[3*c]=a,l[3*c+1]=u,l[3*c+2]=o;return l}throw new y("lepcc-decode-error","Bad method "+r.lookupMethod+","+r.compressionMethod)}const C={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function we(t,e){return{sizeLo:t.getUint32(e+C.sizeLo,g),sizeHi:t.getUint32(e+C.sizeHi,g),count:t.getUint32(e+C.count,g),scaleFactor:t.getUint16(e+C.scaleFactor,g),bitsPerPoint:t.getUint8(e+C.bitsPerPoint),reserved:t.getUint8(e+C.reserved)}}function me(t){const e=new DataView(t,0);let n=0;const{identifier:i,version:s}=D(t,e,n);if(n+=U.byteCount,i!=="Intensity ")throw new y("lepcc-decode-error","Bad identifier");if(s>1)throw new y("lepcc-decode-error","Unknown version");const r=we(e,n);if(n+=C.byteCount,r.sizeHi*2**32+r.sizeLo!==t.byteLength)throw new y("lepcc-decode-error","Bad size");const a=new Uint16Array(r.count);if(r.bitsPerPoint===8){if(r.count+n!==t.byteLength)throw new y("lepcc-decode-error","Bad size");const u=new Uint8Array(t,n,r.count);for(let o=0;o<r.count;o++)a[o]=u[o]*r.scaleFactor}else if(r.bitsPerPoint===16){if(2*r.count+n!==t.byteLength)throw new y("lepcc-decode-error","Bad size");const u=new Uint16Array(t,n,r.count);for(let o=0;o<r.count;o++)a[o]=u[o]*r.scaleFactor}else{const u=[];if(x(t,n,u)!==t.byteLength)throw new y("lepcc-decode-error","Bad size");for(let o=0;o<r.count;o++)a[o]=u[o]*r.scaleFactor}return a}const T=ee.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function Ce(t,e,n){let i="",s=0;for(;s<n;){const r=t[e+s];if(r<128)i+=String.fromCharCode(r),s++;else if(r>=192&&r<224){if(s+1>=n)throw new y("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&r)<<6|63&t[e+s+1];i+=String.fromCharCode(a),s+=2}else if(r>=224&&r<240){if(s+2>=n)throw new y("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&r)<<12|(63&t[e+s+1])<<6|63&t[e+s+2];i+=String.fromCharCode(a),s+=3}else{if(!(r>=240&&r<248))throw new y("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(s+3>=n)throw new y("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&r)<<18|(63&t[e+s+1])<<12|(63&t[e+s+2])<<6|63&t[e+s+3];if(a>=65536){const u=55296+(a-65536>>10),o=56320+(1023&a);i+=String.fromCharCode(u,o)}else i+=String.fromCharCode(a);s+=4}}}return i}function N(t,e){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let i=0;for(let s=0;s<e.length;s++){const r=e[s],a=r.valueType||r.type,u=Me[a];n.fields[r.property]=u(t,i),i+=L[a].BYTES_PER_ELEMENT}return n.byteCount=i,n}function Ue(t,e,n){const i=[];let s,r,a=0;for(r=0;r<t;r+=1){if(s=e[r],s>0){if(i.push(Ce(n,a,s-1)),n[a+s-1]!==0)throw new y("string-array-error","Invalid string array: missing null termination.")}else i.push(null);a+=s}return i}function k(t,e){return new L[e.valueType](t,e.byteOffset,e.count*e.valuesPerElement)}function ve(t,e){return new Uint8Array(t,e.byteOffset,e.byteCount)}function Ae(t,e,n){const i=e.header!=null?N(t,e.header):{byteOffset:0,byteCount:0,fields:{count:n}},s={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let r=i.byteCount;for(let a=0;a<e.ordering.length;a++){const u=e.ordering[a],o=te(e[u]);if(o.count=i.fields.count,o.valueType==="String"){if(o.byteOffset=r,o.byteCount=i.fields[u+"ByteCount"],o.encoding!=="UTF-8")throw new y("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding})}else{if(!J(o.valueType))throw new y("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const l=B(o.valueType);r+=r%l!=0?l-r%l:0,o.byteOffset=r,o.byteCount=l*o.valuesPerElement*o.count}}r+=o.byteCount,s.entries[u]=o}return s.byteCount=r-s.byteOffset,s}function j(t,e,n){if(e!==t&&T.error(`Invalid ${n} buffer size
 expected: ${t}, actual: ${e})`),e<t)throw new y("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:e})}function Ie(t,e){const n=N(t,e&&e.header);let i=n.byteCount;const s={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},r=n.fields,a=r.vertexCount!=null?r.vertexCount:r.count;for(const l of e.ordering){if(!e.vertexAttributes[l])continue;const c=F(M({},e.vertexAttributes[l]),{byteOffset:i,count:a}),f=X[l]?X[l]:"_"+l;s.vertexAttributes[f]=c,i+=B(c.valueType)*c.valuesPerElement*a}const u=r.faceCount;if(e.faces&&u){s.faces={};for(const l of e.ordering){if(!e.faces[l])continue;const c=F(M({},e.faces[l]),{byteOffset:i,count:u});s.faces[l]=c,i+=B(c.valueType)*c.valuesPerElement*u}}const o=r.featureCount;if(e.featureAttributes&&e.featureAttributeOrder&&o){s.featureAttributes={};for(const l of e.featureAttributeOrder){if(!e.featureAttributes[l])continue;const c=F(M({},e.featureAttributes[l]),{byteOffset:i,count:o});s.featureAttributes[l]=c,i+=(c.valueType==="UInt64"?8:B(c.valueType))*c.valuesPerElement*o}}return j(i,t.byteLength,"geometry"),s.byteCount=i-s.byteOffset,s}const X={position:A.POSITION,normal:A.NORMAL,color:A.COLOR,uv0:A.UV0,region:A.UVREGION};function Oe(t,e,n){if(t.encoding==="lepcc-rgb")return pe(e);if(t.encoding==="lepcc-intensity")return me(e);if(t.encoding!=null&&t.encoding!=="")throw new y("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(T.warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),t.ordering[0]==="ObjectIds"&&t.hasOwnProperty("objectIds")&&(T.warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const i=Ae(e,t,n);j(i.byteOffset+i.byteCount,e.byteLength,"attribute");const s=i.entries.attributeValues||i.entries.objectIds;if(s){if(s.valueType==="String"){const r=i.entries.attributeByteCounts,a=k(e,r),u=ve(e,s);return Ue(r.count,a,u)}return k(e,s)}throw new y("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const L={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},Me={Float32:(t,e)=>new DataView(t,0).getFloat32(e,!0),Float64:(t,e)=>new DataView(t,0).getFloat64(e,!0),UInt8:(t,e)=>new DataView(t,0).getUint8(e),Int8:(t,e)=>new DataView(t,0).getInt8(e),UInt16:(t,e)=>new DataView(t,0).getUint16(e,!0),Int16:(t,e)=>new DataView(t,0).getInt16(e,!0),UInt32:(t,e)=>new DataView(t,0).getUint32(e,!0),Int32:(t,e)=>new DataView(t,0).getInt32(e,!0)};function J(t){return L.hasOwnProperty(t)}function B(t){return J(t)?L[t].BYTES_PER_ELEMENT:0}function Fe(t,e,n,i){const{rendererJSON:s,isRGBRenderer:r}=t;let a=null,u=null;if(e&&r)a=e;else if(e&&s.type==="pointCloudUniqueValueRenderer"){u=ce.fromJSON(s);const o=u.colorUniqueValueInfos;a=new Uint8Array(3*i);const l=S(u.fieldTransformType);for(let c=0;c<i;c++){const f=(l?l(e[c]):e[c])+"";for(let d=0;d<o.length;d++)if(o[d].values.indexOf(f)>=0){a[3*c]=o[d].color.r,a[3*c+1]=o[d].color.g,a[3*c+2]=o[d].color.b;break}}}else if(e&&s.type==="pointCloudStretchRenderer"){u=ue.fromJSON(s);const o=u.stops;a=new Uint8Array(3*i);const l=S(u.fieldTransformType);for(let c=0;c<i;c++){const f=l?l(e[c]):e[c],d=o.length-1;if(f<o[0].value)a[3*c]=o[0].color.r,a[3*c+1]=o[0].color.g,a[3*c+2]=o[0].color.b;else if(f>=o[d].value)a[3*c]=o[d].color.r,a[3*c+1]=o[d].color.g,a[3*c+2]=o[d].color.b;else for(let b=1;b<o.length;b++)if(f<o[b].value){const h=(f-o[b-1].value)/(o[b].value-o[b-1].value);a[3*c]=o[b].color.r*h+o[b-1].color.r*(1-h),a[3*c+1]=o[b].color.g*h+o[b-1].color.g*(1-h),a[3*c+2]=o[b].color.b*h+o[b-1].color.b*(1-h);break}}}else if(e&&s.type==="pointCloudClassBreaksRenderer"){u=le.fromJSON(s);const o=u.colorClassBreakInfos;a=new Uint8Array(3*i);const l=S(u.fieldTransformType);for(let c=0;c<i;c++){const f=l?l(e[c]):e[c];for(let d=0;d<o.length;d++)if(f>=o[d].minValue&&f<=o[d].maxValue){a[3*c]=o[d].color.r,a[3*c+1]=o[d].color.g,a[3*c+2]=o[d].color.b;break}}}else{a=new Uint8Array(3*i);for(let o=0;o<a.length;o++)a[o]=255}if(n&&u&&u.colorModulation){const o=u.colorModulation.minValue,l=u.colorModulation.maxValue,c=.3;for(let f=0;f<i;f++){const d=n[f],b=d>=l?1:d<=o?c:c+(1-c)*(d-o)/(l-o);a[3*f]=b*a[3*f],a[3*f+1]=b*a[3*f+1],a[3*f+2]=b*a[3*f+2]}}return a}function ze(t,e){if(t.encoding==null||t.encoding===""){const n=Ie(e,t);if(ne(n.vertexAttributes.position))return;const i=k(e,n.vertexAttributes.position),s=n.header.fields,r=[s.offsetX,s.offsetY,s.offsetZ],a=[s.scaleX,s.scaleY,s.scaleZ],u=i.length/3,o=new Float64Array(3*u);for(let l=0;l<u;l++)o[3*l]=i[3*l]*a[0]+r[0],o[3*l+1]=i[3*l+1]*a[1]+r[1],o[3*l+2]=i[3*l+2]*a[2]+r[2];return o}if(t.encoding==="lepcc-xyz")return ge(e).result}function $(t,e,n){return v(t)&&t.attributeInfo.useElevation?$e(e,n):v(t)?Oe(t.attributeInfo.storageInfo,t.buffer,n):null}function $e(t,e){const n=new Float64Array(e);for(let i=0;i<e;i++)n[i]=t[3*i+2];return n}function Be(t,e,n,i,s){const r=t.length/3;let a=0;for(let u=0;u<r;u++){let o=!0;for(let l=0;l<i.length&&o;l++){const{filterJSON:c}=i[l],f=s[l].values[u];switch(c.type){case"pointCloudValueFilter":{const d=c.mode==="exclude";c.values.indexOf(f)!==-1===d&&(o=!1);break}case"pointCloudBitfieldFilter":{const d=Z(c.requiredSetBits),b=Z(c.requiredClearBits);(f&d)===d&&(f&b)==0||(o=!1);break}case"pointCloudReturnFilter":{const d=15&f,b=f>>>4&15,h=b>1,w=d===1,I=d===b;let P=!1;for(const O of c.includedReturns)if(O==="last"&&I||O==="firstOfMany"&&w&&h||O==="lastOfMany"&&I&&h||O==="single"&&!h){P=!0;break}P||(o=!1);break}}}o&&(n[a]=u,t[3*a]=t[3*u],t[3*a+1]=t[3*u+1],t[3*a+2]=t[3*u+2],e[3*a]=e[3*u],e[3*a+1]=e[3*u+1],e[3*a+2]=e[3*u+2],a++)}return a}function S(t){return t==null||t==="none"?null:t==="low-four-bit"?e=>15&e:t==="high-four-bit"?e=>(240&e)>>4:t==="absolute-value"?e=>Math.abs(e):t==="modulo-ten"?e=>e%10:null}function Z(t){let e=0;for(const n of t||[])e|=1<<n;return e}class Le{transform(e){const n=this._transform(e),i=[n.points.buffer,n.rgb.buffer];v(n.pointIdFilterMap)&&i.push(n.pointIdFilterMap.buffer);for(const s of n.attributes)"buffer"in s.values&&re(s.values.buffer)&&s.values.buffer!==n.rgb.buffer&&i.push(s.values.buffer);return Promise.resolve({result:n,transferList:i})}_transform(e){const n=ze(e.schema,e.geometryBuffer);let i=n.length/3,s=null;const r=[],a=$(e.primaryAttributeData,n,i);v(e.primaryAttributeData)&&a&&r.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:a});const u=$(e.modulationAttributeData,n,i);v(e.modulationAttributeData)&&u&&r.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:u});let o=Fe(e.rendererInfo,a,u,i);if(e.filterInfo&&e.filterInfo.length>0&&v(e.filterAttributesData)){const c=e.filterAttributesData.map(f=>{const d=$(f,n,i),b={attributeInfo:f.attributeInfo,values:d};return r.push(b),b});s=new Uint32Array(i),i=Be(n,o,s,e.filterInfo,c)}for(const c of e.userAttributesData){const f=$(c,n,i);r.push({attributeInfo:c.attributeInfo,values:f})}3*i<o.length&&(o=new Uint8Array(o.buffer.slice(0,3*i))),this._applyElevationOffsetInPlace(n,i,e.elevationOffset);const l=this._transformCoordinates(n,i,e.obb,Y.fromJSON(e.inSR),Y.fromJSON(e.outSR));return{obb:e.obb,points:l,rgb:o,attributes:r,pointIdFilterMap:s}}_transformCoordinates(e,n,i,s,r){if(!oe(e,s,0,e,r,0,n))throw Error("Can't reproject");const a=se(i.center[0],i.center[1],i.center[2]),u=R(),o=R();ae(_,i.quaternion);const l=new Float32Array(3*n);for(let c=0;c<n;c++)u[0]=e[3*c]-a[0],u[1]=e[3*c+1]-a[1],u[2]=e[3*c+2]-a[2],ie(o,u,_),i.halfSize[0]=Math.max(i.halfSize[0],Math.abs(o[0])),i.halfSize[1]=Math.max(i.halfSize[1],Math.abs(o[1])),i.halfSize[2]=Math.max(i.halfSize[2],Math.abs(o[2])),l[3*c]=u[0],l[3*c+1]=u[1],l[3*c+2]=u[2];return l}_applyElevationOffsetInPlace(e,n,i){if(i!==0)for(let s=0;s<n;s++)e[3*s+2]+=i}}const _=H();function Ve(){return new Le}export{Ve as default};
