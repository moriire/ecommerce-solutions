import{u as a,o as d,a as u,c as p,b as o,w as m,d as r,v as i,e as l}from"./index-BKNTjOOu.js";const c={class:"container"},f={class:"row align-items-center"},_={class:"col-lg-6"},v={class:"row"},g={class:"col-lg-12"},y={class:"form-group form-input my-3"},h={class:"col-lg-4 col-xs-6"},V={class:"form-group form-input my-3"},w={class:"col-lg-4 col-xs-6"},x={class:"form-group form-input my-3"},U={class:"col-lg-4 col-xs-6"},b={class:"form-group form-input my-3"},k={class:"col-lg-12"},P={class:"form-group form-input my-3"},M={class:"col-lg-6"},S={class:"form-group form-input my-3"},B={class:"col-lg-6"},N={class:"form-group form-input my-3"},A={class:"col-lg-12"},E={class:"form-group form-input my-3"},F={class:"col-lg-6"},T={class:"form-group form-input my-3"},j={class:"col-lg-6"},C={class:"form-group form-input my-3"},D={class:"col-lg-6"},I={class:"form-group form-input my-3"},L={class:"col-lg-6"},$={class:"form-group form-input my-3"},q=o("div",{class:"col-lg-12"},[o("div",{class:"form-group form-input my-3"},[o("input",{type:"submit",class:"btn btn-primary d-block"})])],-1),z=o("div",{class:"col-lg-6"}," ddd ",-1),J={__name:"ProfileView",setup(G){const e=a();return d(async()=>{await e.getProfile()}),(n,s)=>(u(),p("div",c,[o("div",f,[o("div",_,[o("form",{onSubmit:s[12]||(s[12]=m(t=>n.javascript(0),["prevent"]))},[o("div",v,[o("div",g,[o("div",y,[r(o("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>l(e).user.email=t),placeholder:"Email",readonly:""},null,512),[[i,l(e).user.email]])])]),o("div",h,[o("div",V,[r(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=t=>l(e).user.username=t),placeholder:"Username"},null,512),[[i,l(e).user.username]])])]),o("div",w,[o("div",x,[r(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=t=>l(e).user.first_name=t),placeholder:"First Name"},null,512),[[i,l(e).user.first_name]])])]),o("div",U,[o("div",b,[r(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[3]||(s[3]=t=>l(e).user.last_name=t),placeholder:"Last Name"},null,512),[[i,l(e).user.last_name]])])]),o("div",k,[o("div",P,[r(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[4]||(s[4]=t=>l(e).user.profile.merchandise=t),placeholder:"Merchandise"},null,512),[[i,l(e).user.profile.merchandise]])])]),o("div",M,[o("div",S,[r(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[5]||(s[5]=t=>l(e).user.profile.store_name=t),placeholder:"Store name"},null,512),[[i,l(e).user.profile.store_name]])])]),o("div",B,[o("div",N,[r(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[6]||(s[6]=t=>l(e).user.profile.state=t),placeholder:"State"},null,512),[[i,l(e).user.profile.state]])])]),o("div",A,[o("div",E,[r(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[7]||(s[7]=t=>l(e).user.profile.address=t),placeholder:"Address"},null,512),[[i,l(e).user.profile.address]])])]),o("div",F,[o("div",T,[r(o("input",{type:"url",class:"form-control","onUpdate:modelValue":s[8]||(s[8]=t=>l(e).user.profile.facebook=t),placeholder:"Facebook Profile"},null,512),[[i,l(e).user.profile.facebook]])])]),o("div",j,[o("div",C,[r(o("input",{type:"url",class:"form-control","onUpdate:modelValue":s[9]||(s[9]=t=>l(e).user.profile.twitter=t),placeholder:"Twitter Profile"},null,512),[[i,l(e).user.profile.twitter]])])]),o("div",D,[o("div",I,[r(o("input",{type:"url",class:"form-control","onUpdate:modelValue":s[10]||(s[10]=t=>l(e).user.profile.twitter=t),placeholder:"Instagram Profile"},null,512),[[i,l(e).user.profile.twitter]])])]),o("div",L,[o("div",$,[o("input",{type:"file",accept:"image/*",class:"form-control",onChange:s[11]||(s[11]=(...t)=>l(e).user.profile.img&&l(e).user.profile.img(...t))},null,32)])]),q])],32)]),z])]))}};export{J as default};