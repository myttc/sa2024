import{n as g}from"../modules/unplugin-icons-DSU1Mbun.js";import{d as h,y as i,o as u,b as c,e as o,l as S,A as w,F as f,x as m,g as I,ad as z,aa as V,ab as $,h as x,i as d,p as B,a as D}from"../modules/vue-BeRk5K_R.js";import{o as F,r as M,C as N,_ as A}from"../index-BUF10GjR.js";const b=a=>(B("data-v-e916140b"),a=a(),D(),a),L=["title"],T={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},j=b(()=>o("div",{"flex-auto":""},null,-1)),q={"text-primary":""},E=b(()=>o("span",{op25:""},"/",-1)),K={op50:""},R=["min","max"],U=h({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(a){const n=a,l=i(()=>n.clicksContext.total),p=i(()=>F(0,n.clicksContext.clicksStart,l.value)),r=i(()=>l.value-p.value+1),t=i({get(){return n.clicksContext.current>l.value?-1:n.clicksContext.current},set(v){n.clicksContext.current=v}}),k=i(()=>M(p.value,l.value+1));function C(){(t.value<0||t.value>l.value)&&(t.value=0)}return(v,s)=>{const y=g;return u(),c("div",{class:d(["flex gap-1 items-center select-none",r.value?"":"op50"]),title:`Clicks in this slide: ${r.value}`},[o("div",T,[S(y,{"text-sm":"",op50:""}),j,t.value>=0&&t.value!==w(N)?(u(),c(f,{key:0},[o("span",q,m(t.value),1),E],64)):I("v-if",!0),o("span",K,m(l.value),1)]),o("div",{relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~",onDblclick:s[2]||(s[2]=e=>t.value=v.clicksContext.total)},[(u(!0),c(f,null,z(k.value,e=>(u(),c("div",{key:e,border:"y main","of-hidden":"",relative:"",class:d([e===0?"rounded-l border-l":"",e===l.value?"rounded-r border-r":""]),style:x({width:r.value>0?`${1/r.value*100}%`:"100%"})},[o("div",{absolute:"","inset-0":"",class:d(e<=t.value?"bg-primary op15":"")},null,2),o("div",{class:d([+e==+t.value?"text-primary font-bold op100 border-primary":"op30 border-main",e===0?"rounded-l":"",e===l.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},m(e),3)],6))),128)),V(o("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>t.value=e),class:"range",absolute:"","inset-0":"",type:"range",min:p.value,max:l.value,step:1,"z-10":"",op0:"",style:x({"--thumb-width":`${1/(r.value+1)*100}%`}),onMousedown:C,onFocus:s[1]||(s[1]=e=>{var _;return(_=e.currentTarget)==null?void 0:_.blur()})},null,44,R),[[$,t.value]])],32)],10,L)}}}),J=A(U,[["__scopeId","data-v-e916140b"],["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/ClicksSlider.vue"]]);export{J as C};
