import{B as w,C as B}from"../modules/unplugin-icons-BJo5e7Wi.js";import{d as L,t as E,az as I,C as _,ac as N,y,aA as q,o as c,b as v,f as V,A as u,c as C,g as $,i as z,h as M}from"../modules/vue-uEYNCD1x.js";import{c as k,ak as D,al as R,am as W,_ as K}from"../index-CIyRdoXZ.js";import{u as U}from"./context-vkhxtxO6.js";const j=["title"],F=L({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:k.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(b){const e=b,{$clicksContext:a}=U(),l=E(),d=D();I(()=>{a.unregister(d)}),_(()=>{var t;(t=l.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),N(()=>{var i;if(!a||!((i=e.ranges)!=null&&i.length))return;const t=a.calculateSince(e.at,e.ranges.length-1);a.register(d,t);const o=y(()=>Math.max(0,a.current-t.start+1)),s=y(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());_(()=>{if(!l.value)return;let r=e.ranges[o.value]??s.value;const g=r==="hide";l.value.classList.toggle(R,g),g&&(r=e.ranges[o.value+1]??s.value);const m=l.value.querySelector(".shiki"),f=Array.from(m.querySelectorAll("code > .line")),A=f.length;if(W(r,A,e.startLine,n=>[f[n]]),e.maxHeight){const n=Array.from(m.querySelectorAll(".line.highlighted"));n.reduce((h,H)=>H.offsetHeight+h,0)>l.value.offsetHeight?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n.length>0&&n[Math.round((n.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:p,copy:S}=q();function x(){var o,s;const t=(s=(o=l.value)==null?void 0:o.querySelector(".slidev-code"))==null?void 0:s.textContent;t&&S(t)}return(t,o)=>{const s=w,i=B;return c(),v("div",{ref_key:"el",ref:l,class:z(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:M({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[V(t.$slots,"default"),u(k).codeCopy?(c(),v("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:u(p)?"Copied":"Copy",onClick:o[0]||(o[0]=r=>x())},[u(p)?(c(),C(s,{key:0,class:"p-2 w-8 h-8"})):(c(),C(i,{key:1,class:"p-2 w-8 h-8"}))],8,j)):$("v-if",!0)],6)}}}),T=K(F,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);export{T as _};
