import{d as _,y as f,o as i,b as m,e as r,f as p,h as v,c as h,k as y,q as g,s as k,A as n}from"../modules/vue-BeRk5K_R.js";import{u as d,p as b,f as x}from"./context-X7FPJONu.js";import{_ as u,a6 as l}from"../index-BUF10GjR.js";import"../modules/shiki-DYdhqpMF.js";function c(e){return e.startsWith("/")?"/sa2024/03-layered/"+e.slice(1):e}function S(e,s=!1){const t=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${c(e)})`:`url("${c(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const B={class:"my-auto w-full"},$=_({__name:"cover",props:{background:{default:""}},setup(e){d();const s=e,t=f(()=>S(s.background,!0));return(o,a)=>(i(),m("div",{class:"slidev-layout cover",style:v(t.value)},[r("div",B,[p(o.$slots,"default")])],4))}}),w=u($,[["__file","/usr/local/lib/node_modules/@slidev/theme-default/layouts/cover.vue"]]),C=r("h1",null,"Software Architecture",-1),P=r("h2",null,"Layered Systems",-1),z={__name:"1",setup(e){return b(l),d(),(s,t)=>(i(),h(w,g(k(n(x)(n(l),0))),{default:y(()=>[C,P]),_:1},16))}},j=u(z,[["__file","/@slidev/slides/1.md"]]);export{j as default};
