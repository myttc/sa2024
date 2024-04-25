const __vite__fileDeps=["assets/slidev/DrawingControls-CbEhJrX5.js","assets/modules/unplugin-icons-BeR8N7Ub.js","assets/modules/vue-CyVBQAnX.js","assets/modules/shiki-B34Zut0U.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-BOG5zJbl.js","assets/index-DK5cJv9W.js","assets/index-NaUmuXUz.css","assets/DrawingPreview-DJ7dOR_1.css","assets/slidev/ContextMenu-Bd5aCYUU.js","assets/slidev/IconButton-CJiyqaHF.js","assets/slidev/context-DK7fZVI-.js","assets/ContextMenu-DSnskk1a.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as g,c as x,k as C,q as S,v as D,w as I,x as A,a as O,y as R,z as N,A as H,B as T,D as U,E as L}from"../index-DK5cJv9W.js";import{d as y,a7 as z,o,c as r,A as e,b as _,e as i,f as W,i as M,g as n,ag as F,y as E,k as h,af as b,a6 as $,M as w,l as p,F as B,x as P,v as G,t as Q,h as j}from"../modules/vue-CyVBQAnX.js";import{Q as q,G as K,C as X,r as Y,u as J,S as Z,N as ee,o as le}from"./ContextMenu-Bd5aCYUU.js";import{c as oe,a as se}from"./DrawingPreview-BOG5zJbl.js";import"../modules/shiki-B34Zut0U.js";import"../modules/unplugin-icons-BeR8N7Ub.js";import"./IconButton-CJiyqaHF.js";import"./context-DK7fZVI-.js";const te="/sa2024/06-scalable/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ie=y({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:t}){const a=c,l=z(a,"modelValue",t);function s(){l.value=!1}return(v,u)=>(o(),r(F,null,[e(l)?(o(),_("div",ae,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:u[0]||(u[0]=f=>s())}),i("div",{class:M(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[W(v.$slots,"default")],2)])):n("v-if",!0)],1024))}}),ne=g(ie,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Modal.vue"]]),re={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},de=["innerHTML"],ue=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:te,alt:"Slidev logo"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),$("dev ")])])],-1),ce=y({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:t}){const l=z(c,"modelValue",t),s=E(()=>typeof x.info=="string");return(v,u)=>(o(),r(ne,{modelValue:e(l),"onUpdate:modelValue":u[0]||(u[0]=f=>b(l)?l.value=f:null),class:"px-6 py-4"},{default:h(()=>[i("div",re,[s.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(x).info},null,8,de)):n("v-if",!0),ue])]),_:1},8,["modelValue"]))}}),me=g(ce,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/InfoDialog.vue"]]),pe=y({__name:"Controls",setup(c){const t=w(),a=w();return(d,l)=>(o(),_(B,null,[p(q,{modelValue:e(C),"onUpdate:modelValue":l[0]||(l[0]=s=>b(C)?C.value=s:null)},null,8,["modelValue"]),p(K),t.value?(o(),r(e(t),{key:0})):n("v-if",!0),a.value?(o(),r(e(a),{key:1,modelValue:e(S),"onUpdate:modelValue":l[1]||(l[1]=s=>b(S)?S.value=s:null)},null,8,["modelValue"])):n("v-if",!0),e(x).info?(o(),r(me,{key:2,modelValue:e(D),"onUpdate:modelValue":l[2]||(l[2]=s=>b(D)?D.value=s:null)},null,8,["modelValue"])):n("v-if",!0),p(X)],64))}}),ve=g(pe,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Controls.vue"]]),fe=y({__name:"PrintStyle",setup(c){function t(a,{slots:d}){if(d.default)return G("style",d.default())}return(a,d)=>(o(),r(t,null,{default:h(()=>[$(" @page { size: "+P(e(I))+"px "+P(e(A))+"px; margin: 0px; } ",1)]),_:1}))}}),_e=g(fe,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintStyle.vue"]]),ge=y({__name:"play",setup(c){Y();const{next:t,prev:a,isEmbedded:d,isPrintMode:l}=O(),{isDrawing:s}=oe(),v=Q();function u(m){var V;N.value||m.button===0&&((V=m.target)==null?void 0:V.id)==="slide-container"&&(m.pageX/window.innerWidth>.6?t():a())}J(v);const f=E(()=>R.value||N.value);w();const k=w();return H(()=>import("./DrawingControls-CbEhJrX5.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then(m=>k.value=m.default),(m,V)=>(o(),_(B,null,[e(l)?(o(),r(_e,{key:0})):n("v-if",!0),i("div",{id:"page-root",ref_key:"root",ref:v,class:M(["grid",e(L)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(se,{class:"w-full h-full",style:j({background:"var(--slidev-slide-container-background, black)"}),width:e(l)?e(T).width.value:void 0,scale:e(U),"is-main":!0,onPointerdown:u,onContextmenu:e(le)},{default:h(()=>[p(Z,{"render-context":"slide"})]),controls:h(()=>[e(l)?n("v-if",!0):(o(),_("div",{key:0,class:M(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[f.value?"!opacity-100 right-0":"opacity-0 p-2",e(s)?"pointer-events-none":""]])},[p(ee,{class:"m-auto",persist:f.value},null,8,["persist"])],2)),!e(x).drawings.presenterOnly&&!e(d)&&k.value?(o(),r(e(k),{key:1,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale","onContextmenu"]),n("v-if",!0)],2),e(l)?n("v-if",!0):(o(),r(ve,{key:1}))],64))}}),Se=g(ge,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/play.vue"]]);export{Se as default};
