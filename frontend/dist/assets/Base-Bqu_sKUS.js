import{u as h,a as p}from"./packages-CZCX_EPQ.js";import{s as g,o as b,a as l,c,b as t,q as n,e,F as f,j as m,H as k,t as a,i as d,y,B as P,R as u}from"./index-BKNTjOOu.js";const v={class:"container mt-100"},x={class:"row"},w={class:"col-xl-6 col-lg-6 col-md-12 col-12"},C={class:"col-xl-6 col-lg-6 col-md-12 col-12"},B={class:"table table-striped table-hovered .table-bordered"},S=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"Product Name"),t("th",null,"Quantity"),t("th",null,"Price"),t("th",null,"Status"),t("th",null,"Actions")])],-1),N=["onClick"],V=t("i",{class:"fa fa-trash"},null,-1),R=[V],q=t("i",{class:"fa fa-edit"},null,-1),E={__name:"Base",setup(F){const i=h(),_=g();b(async()=>{await o.getUserProducts(),await i.getPackages(),await _.getCategories()});const o=p();return(L,j)=>(l(),c("div",v,[t("div",x,[t("div",w,[n(e(k))]),t("div",C,[t("table",B,[S,t("tbody",null,[(l(!0),c(f,null,m(e(o).registeredProducts,(s,r)=>(l(),c("tr",{key:r},[t("td",null,a(r+1),1),t("td",null,a(s.product.name),1),t("td",null,a(s.product.price),1),t("td",null,a(s.product.quantity),1),t("td",null,[n(e(u),{to:{name:"upload",params:{product:s.id}},class:P(s.status==="approved"?"text-success":"text-danger")},{default:d(()=>[y(a(s.status),1)]),_:2},1032,["to","class"])]),t("td",null,[t("button",{class:"btn btn-outline-danger",onClick:z=>e(o).deleteProduct(s.product.id)},R,8,N),n(e(u),{to:"/"},{default:d(()=>[q]),_:1})])]))),128))])])])])]))}};export{E as default};
