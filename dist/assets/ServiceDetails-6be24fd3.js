import{h as w,u as y,j as k,r as e,o as a,c as r,e as t,w as n,f as l,t as c,a as s,F as C,d as S,b as B}from"./index-86d8a7b9.js";import{s as D}from"./services-283e48b7.js";const N={class:"mb-10"},V={class:"d-flex flex-column justify-lg-space-between"},j={class:"text-lg-h4"},F={class:"list__item_content"},L=s("div",{class:"dot"},null,-1),E={class:"btn_row"},A=w({__name:"ServiceDetails",setup(O){const d=y().params.id,o=k(()=>D.find(i=>i.id==d));return(i,T)=>{const v=e("v-icon"),u=e("v-breadcrumbs"),m=e("v-list-item-title"),p=e("v-list-item"),f=e("v-list"),h=e("v-img"),_=e("v-btn"),x=e("v-sheet");return a(),r("div",N,[t(u,{class:"text-lg-h6"},{default:n(()=>[l(" Services "),t(v,{icon:"mdi-chevron-right"}),l(" "+c(o.value.title),1)]),_:1}),t(x,{elevation:"12",class:"d-flex flex-row py-14 px-16"},{default:n(()=>[s("div",V,[s("span",j,c(o.value.title),1),s("div",null,[s("span",null,c(o.value.longDescription),1),t(f,{density:"comfortable"},{default:n(()=>[(a(!0),r(C,null,S(o.value.providedList,(b,g)=>(a(),B(p,{key:g,class:"px-0"},{default:n(()=>[s("div",F,[L,t(m,{textContent:c(b)},null,8,["textContent"])])]),_:2},1024))),128))]),_:1})]),t(h,{src:o.value.bg,alt:o.value.title},null,8,["src","alt"])]),s("div",E,[t(_,{color:"black",rounded:"lg"},{default:n(()=>[l("Order Now")]),_:1}),t(_,{variant:"flat","append-icon":"mdi-chevron-right"},{default:n(()=>[l("See reviews")]),_:1})])]),_:1})])}}});export{A as default};
