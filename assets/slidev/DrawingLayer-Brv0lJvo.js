import{d as l,t as i,ac as u,D as c,E as m,o as d,b as f,i as p,A as s}from"../modules/vue-BeRk5K_R.js";import{u as _}from"./context-B3nm4ubA.js";import{c as v}from"./DrawingPreview-Bmb4p__3.js";import{_ as g}from"../index-DzKdcfdM.js";import"../modules/shiki-DYdhqpMF.js";const w=l({__name:"DrawingLayer",setup(D){const{drauu:e,drawingEnabled:o,loadCanvas:t}=v(),r=_().$scale,n=i();return u(()=>{e.mount(n.value,n.value.parentElement),c(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),t()}),m(()=>{e.unmount()}),(a,b)=>(d(),f("svg",{ref_key:"svg",ref:n,class:p(["w-full h-full absolute top-0",{"pointer-events-none":!s(o),"touch-none":s(o)}])},null,2))}}),k=g(w,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{k as default};
