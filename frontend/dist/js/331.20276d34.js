"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[331],{5331:function(o,n,t){t.r(n),t.d(n,{default:function(){return b}});var e=t(3396),a=t(9242);const d=o=>((0,e.dD)("data-v-981a7618"),o=o(),(0,e.Cn)(),o),c={id:"inscription"},u=d((()=>(0,e._)("label",{for:"email"},"Email",-1))),l=d((()=>(0,e._)("label",{for:"pseudo"},"Pseudo",-1))),s=d((()=>(0,e._)("label",{for:"password"},"Mot de passe",-1))),i={id:"connexion"},p=d((()=>(0,e._)("label",{for:"pseudo"},"Pseudo",-1))),r=d((()=>(0,e._)("label",{for:"password"},"Mot de passe",-1))),m={key:1,id:"connected"},w=d((()=>(0,e._)("label",{for:"email"},"Email",-1))),_=d((()=>(0,e._)("label",{for:"pseudo"},"Pseudo",-1))),h=d((()=>(0,e._)("label",{for:"password"},"Mot de passe",-1)));function y(o,n,t,d,y,A){return 0===y.counter?((0,e.wg)(),(0,e.iD)(e.HY,{key:0},[(0,e._)("form",c,[(0,e._)("div",null,[u,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":n[0]||(n[0]=o=>y.accountToAdd.email=o),type:"email",name:"email",id:"email",maxlength:"100"},null,512),[[a.nr,y.accountToAdd.email]])]),(0,e._)("div",null,[l,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":n[1]||(n[1]=o=>y.accountToAdd.pseudo=o),type:"text",name:"pseudo",id:"pseudo",maxlength:"100"},null,512),[[a.nr,y.accountToAdd.pseudo]])]),(0,e._)("div",null,[s,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":n[2]||(n[2]=o=>y.accountToAdd.password=o),type:"password",name:"password",id:"password",maxlength:"100"},null,512),[[a.nr,y.accountToAdd.password]])]),(0,e._)("div",null,[(0,e._)("button",{onClick:n[3]||(n[3]=o=>(y.counter=1,A.postAccount))},"S'inscrire")])]),(0,e._)("form",i,[(0,e._)("div",null,[p,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":n[4]||(n[4]=o=>y.accountToAdd.pseudo=o),type:"text",name:"pseudo",id:"pseudo"},null,512),[[a.nr,y.accountToAdd.pseudo]])]),(0,e._)("div",null,[r,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":n[5]||(n[5]=o=>y.accountToAdd.password=o),type:"password",name:"password",id:"password"},null,512),[[a.nr,y.accountToAdd.password]])]),(0,e._)("div",null,[(0,e._)("button",{onClick:n[6]||(n[6]=o=>(y.counter=1,A.getAccount))},"Se connecter")])])],64)):((0,e.wg)(),(0,e.iD)("form",m,[(0,e._)("div",null,[w,(0,e.wy)((0,e._)("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":n[7]||(n[7]=o=>y.accountToAdd.email=o),maxlength:"100"},null,512),[[a.nr,y.accountToAdd.email]])]),(0,e._)("div",null,[_,(0,e.wy)((0,e._)("input",{type:"text",name:"pseudo",id:"pseudo","onUpdate:modelValue":n[8]||(n[8]=o=>y.accountToAdd.pseudo=o),maxlength:"100"},null,512),[[a.nr,y.accountToAdd.pseudo]])]),(0,e._)("div",null,[h,(0,e.wy)((0,e._)("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":n[9]||(n[9]=o=>y.accountToAdd.password=o),maxlength:"100"},null,512),[[a.nr,y.accountToAdd.password]])]),(0,e._)("div",null,[(0,e._)("button",{onClick:n[10]||(n[10]=(...o)=>A.putAccount&&A.putAccount(...o))},"Confirmer les changements")])]))}var A={data(){return{counter:0,account:[],accountToAdd:{email:"",pseudo:"",password:""}}},async createdAccount(){const o=await fetch("/account");this.account=await o.json()},methods:{async postAccount(){await fetch("/account",{headers:{"Content-type":"application/json"},method:"POST",body:JSON.stringify(this.accountToAdd)}),await this.fetchAccount()},async getAccount(){await fetch("/account",{headers:{"Content-type":"application/json"},method:"GET",body:JSON.stringify(this.accountToAdd)}),await this.fetchAccount()},async putAccount(){await fetch("/account",{headers:{"Content-type":"application/json"},methods:"PUT",body:JSON.stringify(this.accountToAdd)}),await this.fetchAccount()}}},f=t(89);const T=(0,f.Z)(A,[["render",y],["__scopeId","data-v-981a7618"]]);var b=T}}]);
//# sourceMappingURL=331.20276d34.js.map