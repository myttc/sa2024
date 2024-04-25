import{h as A,i as E,l as J,m as U}from"../modules/unplugin-icons-DSU1Mbun.js";import{d as P,o as l,c as u,i as w,A as e,t as I,y as b,D,M as K,ac as X,J as Y,ae as Z,a1 as ee,b as M,e as t,l as s,k,g as y,h as B,x as te,af as se,F as oe,p as ne,a as le}from"../modules/vue-BeRk5K_R.js";import{_ as R,a as ae,c as V,u as re,h as ie,b as ce,s as ue,j as de,k as S,p as pe,e as me,l as _e,m as fe,n as ve}from"../index-DzKdcfdM.js";import{r as xe,u as ge,S as ke,Q as he,o as Ce,N as be,G as ye,C as Se}from"./ContextMenu-BLzLgP19.js";import{b as we,c as Ne,a as $,S as ze}from"./DrawingPreview-Bmb4p__3.js";import{N as Fe}from"./NoteDisplay-BC7pymlx.js";import Ie from"./DrawingControls-Cg1iC9rP.js";import{I as q}from"./IconButton-CUT4OjmU.js";import{C as De}from"./ClicksSlider-BsCAZ8JI.js";import"../modules/shiki-DYdhqpMF.js";import"./context-B3nm4ubA.js";const Me=P({__name:"NoteStatic",props:{no:{type:Number,required:!0},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(i){const c=i,{info:a}=we(c.no);return(d,p)=>{var f,v;return l(),u(Fe,{class:w(c.class),note:(f=e(a))==null?void 0:f.note,"note-html":(v=e(a))==null?void 0:v.noteHTML,"clicks-context":d.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Be=R(Me,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteStatic.vue"]]),N=i=>(ne("data-v-35d4ff51"),i=i(),le(),i),Ve={class:"bg-main h-full slidev-presenter"},$e=N(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),qe={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Pe=N(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Re={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Te={class:"border-t border-main py-1 px-2 text-sm"},Ge={class:"grid-section bottom flex"},He=N(()=>t("div",{"flex-auto":""},null,-1)),Le={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Oe={class:"progress-bar"},Qe=P({__name:"presenter",setup(i){const c=I();xe(),ge(c);const{clicksContext:a,currentSlideNo:d,currentSlideRoute:p,hasNext:f,nextRoute:v,slides:T,queryClicks:G,getPrimaryClicks:H,total:L}=ae(),{isDrawing:O}=Ne(),Q=V.titleTemplate.replace("%s",V.title||"Slidev");re({title:`Presenter - ${Q}`}),I(!1);const{timer:W,resetTimer:z}=ie(),j=b(()=>T.value.map(g=>ce(g))),o=b(()=>a.value.current<a.value.total?[p.value,a.value.current+1]:f.value?[v.value,0]:null),x=b(()=>o.value&&j.value[o.value[0].no-1]);return D([p,G],()=>{x.value&&(x.value.current=o.value[1])},{immediate:!0}),K(),X(()=>{const g=c.value.querySelector("#slide-content"),r=Y(Z()),h=ee();D(()=>{if(!h.value||O.value||!de.value)return;const n=g.getBoundingClientRect(),m=(r.x-n.left)/n.width*100,_=(r.y-n.top)/n.height*100;if(!(m<0||m>100||_<0||_>100))return{x:m,y:_}},n=>{ue.cursor=n})}),(g,r)=>{var F;const h=A,n=E,m=J,_=U;return l(),M(oe,null,[t("div",Ve,[t("div",{class:w(["grid-container",`layout${e(pe)}`])},[t("div",{ref_key:"main",ref:c,class:"relative grid-section main flex flex-col"},[s($,{key:"main",class:"h-full w-full p-2 lg:p-4 flex-auto",onContextmenu:e(Ce)},{default:k(()=>[s(ke,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(l(),u(De,{key:(F=e(p))==null?void 0:F.no,"clicks-context":e(H)(e(p)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),$e],512),t("div",qe,[o.value&&x.value?(l(),u($,{key:"next",class:"h-full w-full"},{default:k(()=>[(l(),u(ze,{is:o.value[0].component,key:o.value[0].no,"clicks-context":x.value,class:w(e(me)(o.value[0])),route:o.value[0],"render-context":"previewNext"},null,8,["is","clicks-context","class","route"]))]),_:1})):y("v-if",!0),Pe]),y(" Notes "),(l(),M("div",Re,[(l(),u(Be,{key:`static-${e(d)}`,no:e(d),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:B({fontSize:`${e(_e)}em`}),"clicks-context":e(a)},null,8,["no","style","clicks-context"])),t("div",Te,[s(q,{title:"Increase font size",onClick:e(fe)},{default:k(()=>[s(h)]),_:1},8,["onClick"]),s(q,{title:"Decrease font size",onClick:e(ve)},{default:k(()=>[s(n)]),_:1},8,["onClick"]),y("v-if",!0)])])),t("div",Ge,[s(be,{persist:!0}),He,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[2]||(r[2]=(...C)=>e(z)&&e(z)(...C))},[s(m,{class:"absolute"}),s(_,{class:"absolute opacity-0"})]),t("div",Le,te(e(W)),1)]),(l(),u(Ie,{key:2}))],2),t("div",Oe,[t("div",{class:"progress h-3px bg-primary transition-all",style:B({width:`${(e(d)-1)/(e(L)-1)*100}%`})},null,4)])]),s(ye),s(he,{modelValue:e(S),"onUpdate:modelValue":r[3]||(r[3]=C=>se(S)?S.value=C:null)},null,8,["modelValue"]),s(Se)],64)}}}),tt=R(Qe,[["__scopeId","data-v-35d4ff51"],["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/presenter.vue"]]);export{tt as default};
