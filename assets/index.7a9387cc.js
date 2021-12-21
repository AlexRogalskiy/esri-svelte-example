import{S as w,i as b,s as x,e as v,t as L,a as c,b as S,c as A,d as p,f as y,g as k,h as T,j as E,n as _,k as I,R as N}from"./vendor.f5642644.js";const O=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const f of t.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};O();function h(a){let s,r;return{c(){s=v("p"),r=L(a[0])},m(n,e){c(n,s,e),S(s,r)},p(n,e){e&1&&A(r,n[0])},d(n){n&&p(s)}}}function j(a){let s,r,n,e,t,f,u,d,m,i=a[0]&&h(a);return{c(){s=v("h1"),s.textContent="Esri Svelte Example",r=y(),n=v("p"),n.innerHTML=`An example
  <a href="https://svelte.dev/">Svelte</a>
  application that shows how use the ArcGIS API for JavaScript to load a map. Check
  out the
  <a href="https://github.com/gavinr/esri-svelte-example">code</a>
  for more info!`,e=y(),t=v("div"),f=y(),i&&i.c(),u=k(),T(t,"class","view svelte-n8chaa")},m(o,l){c(o,s,l),c(o,r,l),c(o,n,l),c(o,e,l),c(o,t,l),c(o,f,l),i&&i.m(o,l),c(o,u,l),d||(m=E(a[1].call(null,t)),d=!0)},p(o,[l]){o[0]?i?i.p(o,l):(i=h(o),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null)},i:_,o:_,d(o){o&&p(s),o&&p(r),o&&p(n),o&&p(e),o&&p(t),o&&p(f),i&&i.d(o),o&&p(u),d=!1,m()}}}function C(a,s,r){let{centerText:n}=s;const e=t=>{const f=new I({basemap:"streets"});new N({container:t,map:f,zoom:8,center:[-90,38]}).watch("center",d=>{const{latitude:m,longitude:i}=d;r(0,n=`Lat: ${m.toFixed(2)} | Lon: ${i.toFixed(2)}`)})};return a.$$set=t=>{"centerText"in t&&r(0,n=t.centerText)},[n,e]}class F extends w{constructor(s){super();b(this,s,C,j,x,{centerText:0})}}new F({target:document.getElementById("app")});
