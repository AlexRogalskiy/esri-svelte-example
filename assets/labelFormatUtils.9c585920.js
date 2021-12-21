import{m as d,j$ as m,k0 as y,k1 as b,k2 as g,ff as v,k3 as x,w as h,k4 as w}from"./vendor.f5642644.js";const F=d.getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:()=>null},k={getAttribute:(a,r)=>a.field(r)};async function j(a,r,e){if(!a||!a.symbol)return f;const l=a.where,n=m(a),o=l?await import("./WhereClause.289bbe04.js"):null;let i;if(n.type==="arcade"){const t=await y(n.expression,e,r);i={type:"arcade",evaluate(u){try{const s=t.evaluate({$feature:"attributes"in u?t.repurposeFeature(u):t.repurposeAdapter(u)});if(s!=null)return s.toString()}catch{F.error(new h("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:u,expression:n}))}return null},needsHydrationToEvaluate:()=>w(n.expression)==null}}else i={type:"simple",evaluate:t=>n.expression.replace(/{[^}]*}/g,u=>{const s=u.slice(1,-1),c=r.get(s);if(!c)return u;let p=null;return"attributes"in t?t&&t.attributes&&(p=t.attributes[c.name]):p=t.field(c.name),p==null?"":$(p,c)})};if(l){let t;try{t=o.WhereClause.create(l,r)}catch{return f}const u=i.evaluate;i.evaluate=s=>{const c="attributes"in s?void 0:k;return t.testFeature(s,c)?u(s):null}}return i}function $(a,r){if(a==null)return"";const e=r.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const n=a;for(const o of e.codedValues)if(o.code===n)return o.name}else if(e.type==="range"){const n=+a,o="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue;if(o<=n&&n<=i)return e.name}}let l=a;return r.type==="date"||r.type==="esriFieldTypeDate"?l=b(l,g("short-date")):v(r)&&(l=x(+l)),l||""}export{j as createLabelFunction,$ as formatField};
