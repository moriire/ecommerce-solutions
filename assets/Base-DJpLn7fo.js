import{u as i,a as _}from"./packages-Du1IEH1h.js";import{m as p,o as h,a as o,c as s,b as t,d,g as l,F as g,e as m,z as k,t as a,w as b,j as w,R as v}from"./index-BnB1bgtS.js";const y={class:"checkout-page mt-100"},P={class:"container"},f={class:"checkout-page-wrapper"},x={class:"row"},S={class:"col-xl-6 col-lg-6 col-md-12 col-12"},B={class:"col-xl-5 col-lg-6 col-md-12 col-12"},N={class:"table table-striped table-hovered .table-bordered"},V=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"Product Name"),t("th",null,"Quantity"),t("th",null,"Price"),t("th",null,"Status")])],-1),C=t("td",null,"#",-1),q={__name:"Base",setup(R){const n=i(),u=p();h(async()=>{await c.getUserProducts(),await n.getPackages(),await u.getCategories()});const c=_();return(F,L)=>(o(),s("div",y,[t("div",P,[t("div",f,[t("div",x,[t("div",S,[d(l(k))]),t("div",B,[t("table",N,[V,t("tbody",null,[(o(!0),s(g,null,m(l(c).registeredProducts,(e,r)=>(o(),s("tr",{key:r},[t("td",null,a(r+1),1),t("td",null,a(e.product.name),1),t("td",null,a(e.product.price),1),t("td",null,a(e.product.quantity),1),t("td",null,[d(l(v),{to:{name:"upload",params:{product:e.id}}},{default:b(()=>[w("Upload")]),_:2},1032,["to"])]),C]))),128))])])])])])])]))}};export{q as default};
