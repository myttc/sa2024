import{o as n,c as s,k as i,q as a,s as r,A as l,e,a6 as o}from"../modules/vue-B2FnwHXb.js";import{I as u}from"./default-Bs1EBt5I.js";import{_ as c,ak as t}from"../index-Cx-7sCC6.js";import{p as d,u as m,f as p}from"./context-DN_z6xTi.js";import"../modules/shiki-DHDjwTm4.js";const f=e("h1",null,"Goal: loosely coupled components",-1),_=e("ul",null,[e("li",null,[e("code",null,"MovieLister"),o(" should work with "),e("strong",null,"any"),o(),e("code",null,"MovieFinderImplementation"),e("ul",null,[e("li",null,[e("code",null,"MovieLister"),o(" does not need to know the particular type of finder implementation it is using")])])]),e("li",null,[o("The good solution: eliminate all lines of code such as: "),e("ul",null,[e("li",null,[e("code",null,"MovieFinder f = new MyParticularMovieFinderImpl();")]),e("li",null,"A component should NEVER create (instantiate) its dependencies")])]),e("li",null,[o("The solution is called "),e("strong",null,"“Inversion of Control”"),e("ul",null,[e("li",null,"A component does not create (instantiate) its dependencies but has someone else creating them for it")])])],-1),h={__name:"15",setup(v){return d(t),m(),(g,k)=>(n(),s(u,a(r(l(p)(l(t),14))),{default:i(()=>[f,_]),_:1},16))}},F=c(h,[["__file","/@slidev/slides/15.md"]]);export{F as default};
