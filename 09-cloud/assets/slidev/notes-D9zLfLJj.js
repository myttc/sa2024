import{h as L,i as V,j,k as A}from"../modules/unplugin-icons-BJo5e7Wi.js";import{d as M,t as P,Q,y as b,D as R,o as c,b as U,e as t,h as y,A as o,l,k as i,c as S,x as w,F as q}from"../modules/vue-uEYNCD1x.js";import{c as C,u as G,a as J,s as r,f as K,_ as O}from"../index-BFuDrq-n.js";import{N as W}from"./NoteDisplay-D4x_FlS1.js";import{I as u}from"./IconButton-uR_HaYJq.js";import"../modules/shiki-BzAJ3tB6.js";const X={class:"h-full flex flex-col"},Y={class:"flex-none border-t border-main"},Z={class:"flex gap-1 items-center px-6 py-3"},ee=t("div",{class:"flex-auto"},null,-1),te={class:"p2 text-center"},oe=M({__name:"notes",setup(le){const N=C.titleTemplate.replace("%s",C.title||"Slidev");G({title:`Notes - ${N}`});const{slides:F,total:_}=J(),{isFullscreen:p,toggle:$}=K,d=P(),s=Q("slidev-notes-font-size",18),n=b(()=>{var e;return((e=r.lastUpdate)==null?void 0:e.type)==="viewer"?r.viewerPage:r.page}),a=b(()=>F.value.find(e=>e.no===n.value));R(n,()=>{var e;(e=d.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function B(){s.value=s.value+1}function T(){s.value=s.value-1}return(e,se)=>{var f,m,v,h,x,g,k,z;const D=j,I=A,E=L,H=V;return c(),U(q,null,[t("div",{class:"fixed top-0 left-0 h-2px bg-teal-500 transition-all duration-500",style:y({width:`${(n.value-1)/o(_)*100}%`})},null,4),t("div",X,[t("div",{ref_key:"scroller",ref:d,class:"px-5 flex-auto h-full overflow-auto",style:y({fontSize:`${o(s)}px`})},[l(W,{note:(v=(m=(f=a.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:v.note,"note-html":(g=(x=(h=a.value)==null?void 0:h.meta)==null?void 0:x.slide)==null?void 0:g.noteHTML,placeholder:`No notes for Slide ${n.value}.`,"clicks-context":(z=(k=a.value)==null?void 0:k.meta)==null?void 0:z.__clicksContext,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),t("div",Y,[t("div",Z,[l(u,{title:o(p)?"Close fullscreen":"Enter fullscreen",onClick:o($)},{default:i(()=>[o(p)?(c(),S(D,{key:0})):(c(),S(I,{key:1}))]),_:1},8,["title","onClick"]),l(u,{title:"Increase font size",onClick:B},{default:i(()=>[l(E)]),_:1}),l(u,{title:"Decrease font size",onClick:T},{default:i(()=>[l(H)]),_:1}),ee,t("div",te,w(n.value)+" / "+w(o(_)),1)])])])],64)}}}),_e=O(oe,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/notes.vue"]]);export{_e as default};
