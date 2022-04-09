var mt=Object.defineProperty;var Me=Object.getOwnPropertySymbols;var pt=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var ie=(e,t,n)=>t in e?mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Se=(e,t)=>{for(var n in t||(t={}))pt.call(t,n)&&ie(e,n,t[n]);if(Me)for(var n of Me(t))ut.call(t,n)&&ie(e,n,t[n]);return e};var d=(e,t,n)=>(ie(e,typeof t!="symbol"?t+"":t,n),n);import{s as c,j as o,a as u,W as gt,u as z,M as ft,b as ve,T as wt,r as x,F as R,c as ee,I,d as bt,e as Ne,S as yt,l as $,L as xt,N as Ze,R as W,f as P,g as kt,h as Mt,i as q,A as St,k as j,m as vt,n as Ct,C as $t,o as Xe,p as A,q as Tt,B as G,t as Ce,v as Ve,w as Oe,P as zt,x as Ue,y as Dt,D as At,z as Lt,E as It,G as Pt,H as Bt,J as jt,K as Et,O as Ht,Q as Ft,U as Yt,V as Ge,X as Rt,Y as _e,Z as Wt,_ as qt,$ as me,a0 as Nt,a1 as Zt,a2 as Xt,a3 as Vt,a4 as h,a5 as Ot,a6 as D,a7 as C,a8 as X,a9 as f,aa as Ut,ab as Gt,ac as _t,ad as Kt,ae as Jt,af as Ke,ag as Qt,ah as en,ai as tn,aj as nn,ak as on,al as rn,am as sn,an,ao as cn,ap as ln,aq as dn,ar as hn,as as Je,at as mn,au as se,av as pn,aw as un,ax as gn,ay as fn,az as wn,aA as bn,aB as yn,aC as xn,aD as kn}from"./vendor.787ddfa0.js";const Mn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Mn();const Sn=c.div`
  /** 50px navbar and 2*5px padding */
  min-height: calc(100vh - 50px - 14px);
`;function vn(){return o(Sn,{children:"Contact"})}function Cn({className:e}){return u("svg",{id:"e76RbDrnTZM1",className:e,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 226.304018 200.378",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",children:[o("path",{id:"e76RbDrnTZM2",d:"M75.000003,20.999997L75.000003,43.003079L152.325119,43.003079L152.325119,20.999997L75.000003,20.999997Z",fill:"#cc0e00",stroke:"#cc0e00",strokeWidth:"0.452608",className:"svg-animated-elem-1"}),o("path",{id:"e76RbDrnTZM3",d:"M75.000003,72.550075L75.000003,156.999998L97.841297,156.999997L97.841297,94.972261L152.325119,94.97226L152.325119,72.550072L75.000003,72.550075Z",transform:"matrix(1 0 0 1 0 0.000003)",fill:"#cc0e00",stroke:"#cc0e00",strokeWidth:"0.452608",className:"svg-animated-elem-2"})]})}const T={xl:"1536px",lg:"1200px",md:"900px",sm:"600px",xs:"0px"},$n=gt`
html {
  font-size: 20px;

  @media screen and (min-width: ${T.lg}) and (max-width: ${T.xl}) {
    font-size: 16px;
  }

  @media screen and (max-width: ${T.lg}){
    font-size: 14px;
  }

}

body {
  margin: 0;
  font-family: "Fira Code", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  color: ${e=>e.theme.colors.whitefontcolor};
  counter-reset: section 0;
  background-color: ${e=>e.theme.colors.mainblack};
}

code {
  font-family: "Courier New",
    monospace;
}


canvas { width: 100%; height: 100%; display: block;}

  /* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #cc0e00 #181114;
  margin: 0;
  padding: 0;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 9px;
}

*::-webkit-scrollbar-track {
  background: #181114;
}

*::-webkit-scrollbar-thumb {
  background-color: #cc0e00;
  border-radius: 0px;
  border: 0px none #cc0e00;
}
`,_=400,B="all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",Tn=500,K=200,pe=300,Qe=1e3,zn=Qe+100,ae=2500,Dn=({className:e})=>u("svg",{className:e,id:"e76RbDrnTZM1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 226.304018 200.378",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",children:[o("path",{id:"e76RbDrnTZM2",d:"M75.000003,20.999997L75.000003,43.003079L152.325119,43.003079L152.325119,20.999997L75.000003,20.999997Z",fill:"#cc0e00",stroke:"#cc0e00",strokeWidth:"0.452608",className:"svg-elem-1"}),o("path",{id:"e76RbDrnTZM3",d:"M75.000003,72.550075L75.000003,156.999998L97.841297,156.999997L97.841297,94.972261L152.325119,94.97226L152.325119,72.550072L75.000003,72.550075Z",transform:"matrix(1 0 0 1 0 0.000003)",fill:"#cc0e00",stroke:"#cc0e00",strokeWidth:"0.452608",className:"svg-elem-2"})]}),ue=[{title:"navbar.about",url:"/#about"},{title:"navbar.experience",url:"/#experience"},{title:"navbar.projects",url:"/#projects"}],An=({open:e,anchorElement:t,onClose:n,handleClose:r})=>{const{t:i,i18n:s}=z(),a=l=>{s.changeLanguage(l),r()};return u(ft,{open:e,anchorEl:t,onClose:n,children:[o(ve,{onClick:()=>a("en"),children:i("languageMenu.english")}),o(ve,{onClick:()=>a("de"),children:i("languageMenu.german")})]})},Ln=c(wt)`
  color: white;
`,et=()=>{const{t:e}=z(),[t,n]=x.exports.useState(null),r=Boolean(t),i=a=>{n(a.currentTarget)},s=()=>{n(null)};return u(R,{children:[o(ee,{title:e("languageMenu.tooltip"),children:o(I,{onClick:i,children:o(Ln,{})})}),o(An,{anchorElement:t,onClose:s,open:r,handleClose:s})]})},In=c.nav`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  font-family: "Fira Code", monospace;
  color: ${e=>e.theme.colors.mainwhite};
`,Pn=c.ol`
  display: flex;
  flex-direction: row;
  list-style: none;
  counter-reset: item 0;
  margin-right: 1vmax;
  align-items: center;
`,$e=c.li`
  counter-increment: item 1;
  margin: 0 10px;
  font-size: 0.8rem;
`,Bn=c(bt)`
  color: ${e=>e.theme.colors.mainwhite};
`,jn=c(Ne)`
  color: ${e=>e.theme.colors.mainwhite};

  &:hover {
    cursor: pointer;
  }
`,En=c(yt)`
  & .MuiPaper-root {
    background-color: transparent;
  }
`,Hn=c.div`
  display: grid;
  flex-direction: column;
  place-content: center;
  background-color: ${e=>$(e.theme.colors.mainblack,.3)};
  border-radius: 8px 8px 0 0;
`,Fn=c.div`
  display: flex;
  width: 2rem;
  height: 6px;
  background-color: ${e=>$(e.theme.colors.mainblack,.05)};
  border-radius: 3px;
  margin-top: 0.75rem;
  justify-self: center;
`,Yn=c(xt)`
  color: ${e=>e.theme.colors.mainwhite};
  transition: ${B};
  justify-content: center;

  &:hover {
    color: ${e=>e.theme.colors.mainred};
  }
`,Rn=c(Ze)`
  text-decoration: none;
  color: inherit;
  transition: ${B};
  font-size: 1.3rem;

  &:hover {
    color: ${e=>e.theme.colors.mainred};
  }
`,Wn=({isMounted:e})=>{const{t:n}=z(),[r,i]=W.useState(!1),s=l=>()=>{i(l)},a=r?o(I,{onClick:s(!1),children:o(jn,{})}):o(I,{onClick:s(!0),children:o(Bn,{})});return u(R,{children:[o(In,{children:u(Pn,{children:[o(P,{in:e,timeout:K,children:o($e,{children:o(et,{})})}),o(P,{in:e,timeout:K+pe,children:o($e,{children:a})})]})}),o(En,{anchor:"bottom",open:r,onClose:s(!1),onOpen:s(!0),swipeAreaWidth:56,disableSwipeToOpen:!1,children:u(Hn,{children:[o(Fn,{}),o(kt,{children:ue.map((l,g)=>o(Mt,{children:o(Yn,{children:o(Rn,{smooth:!0,to:l.url,onClick:s(!1),children:n(l.title)})})}))})]})})]})},qn=c.nav`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  font-family: "Fira Code", monospace;
  color: ${e=>e.theme.colors.mainwhite};
`,Nn=c.ol`
  display: flex;
  flex-direction: row;
  list-style: none;
  counter-reset: item 0;
  margin-right: 1vmax;
  align-items: center;
`,Te=c.li`
  counter-increment: item 1;
  margin: 0 10px;
  font-size: 0.8rem;
`,Zn=c(Ze)`
  text-decoration: none;
  color: inherit;
  transition: ${B};

  &:hover {
    color: ${e=>e.theme.colors.mainred};
  }

  &::before {
    content: "0" counter(item) ".";
    color: ${e=>e.theme.colors.mainred};
    padding: 7px;
  }
`,Xn=({isMounted:e})=>{const{t}=z();return o(qn,{children:u(Nn,{children:[e&&ue.map((n,r)=>o(P,{in:e,timeout:K+r*pe,children:o(Te,{children:o(Zn,{smooth:!0,to:n.url,children:t(n.title)})},r)},r)),o(P,{in:e,timeout:K+ue.length*pe,children:o(Te,{children:o(et,{})})})]})})},Vn=()=>{const[e,t]=x.exports.useState(!1),n=q(`(max-width: ${T.sm})`);return x.exports.useEffect(()=>{const r=setTimeout(()=>t(!0),Tn);return()=>clearTimeout(r)},[]),n?o(Wn,{isMounted:e}):o(Xn,{isMounted:e})},On=c(St)`
  flex-direction: row;
  background-color: ${e=>e.theme.colors.mainblack};
  padding: 5px 0;
`,Un=c(I)`
  margin-left: 1vmax;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: ${e=>j(e.theme.colors.mainred,.7)};
  }
`,Gn=c(Dn)`
  width: 50px;
  height: 50px;

  &:hover path {
    stroke: ${e=>j(e.theme.colors.mainred,.1)};
    fill: ${e=>j(e.theme.colors.mainred,.1)};
  }
`,_n=({homeClickHandler:e})=>{const t=vt({target:window,threshold:50}),n=q(`(max-width: ${T.md})`);return u(R,{children:[o(P,{direction:"down",in:!t,timeout:_,children:u(On,{color:"inherit",position:n?"absolute":"fixed",children:[o(P,{direction:"down",in:!t,timeout:_,children:o(Un,{onClick:e,children:o(Gn,{})})}),o(Vn,{})]})}),o(Ct,{})]})},Kn=c.h2`
  font-size: 2rem;
  margin-bottom: 5vh;
  width: 100%;
  text-transform: uppercase;

  &:before {
    counter-increment: section;
    content: "0" counter(section) ".";
    color: ${e=>e.theme.colors.mainred};
    font-size: 1.3rem;
    margin-right: 15px;
    font-family: "Fira Code";
  }
`,fe=({children:e})=>o(Kn,{children:e}),Jn=c.section`
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`;function Qn(){const{t:e}=z();return o(Jn,{id:"about",children:o(fe,{children:e("sections.about")})})}var eo="/portfolio/assets/chatbot-avatar.2885f311.svg";const to=c($t)`
  background-color: ${e=>e.theme.colors.mainblack};
  color: ${e=>e.theme.colors.mainwhite};

  .MuiCardHeader-action {
    align-self: center;
  }
`,no=c(Xe)`
  color: ${e=>e.theme.colors.mainwhite};
`,ze=c(A)`
  color: ${e=>e.theme.colors.mainwhite};
`,oo=c(I)`
  &:hover {
    background-color: #363636;
  }
`,ro=({clickHandler:e})=>o(to,{avatar:o(Tt,{alt:"Chatbo",src:eo,variant:"square"}),title:o(ze,{sx:{fontSize:24},variant:"caption",display:"block",children:"Chatbot"}),subheader:o(ze,{variant:"caption",display:"block",children:"Ask me a question!"}),action:o(oo,{onClick:e,children:o(no,{})})});var io="/portfolio/assets/lebenslauf.8132e422.pdf";const so=[{message:"chatbot.initialMessage.firstMessage",owner:"bot"},{message:"chatbot.initialMessage.secondMessage",owner:"bot"}],tt={actionText:"chatbot.sayHello.actionText",messges:[{message:"chatbot.sayHello.firstMessage",owner:"customer"},{message:"chatbot.sayHello.secondMessage",owner:"bot"},{message:"chatbot.sayHello.thirdMessage",owner:"bot"},{message:"chatbot.sayHello.fourthMessage",owner:"bot"},{message:"chatbot.sayHello.fifthMessage",owner:"bot"}],furtherActions:["showCV","directChat"]},nt={actionText:"chatbot.showCV.actionText",messges:[{message:"chatbot.showCV.firstMessage",owner:"customer"},{message:"chatbot.showCV.secondMessage",owner:"bot"},{message:"chatbot.showCV.thirdMessage",owner:"bot"},{type:"pdf",owner:"bot",url:io,fileName:"cv_fredericbahr"}],furtherActions:["sayHello","directChat"]},ot=[{name:"name",label:"chatbot.formElementsLabel.name",required:!0,type:"text"},{name:"subject",label:"chatbot.formElementsLabel.subject",required:!0,type:"text"},{name:"email",label:"chatbot.formElementsLabel.email",required:!0,type:"email"},{name:"message",label:"chatbot.formElementsLabel.message",required:!0,type:"textarea"}],ao={actionText:"chatbot.sendAnotherMessage.actionText",messges:[{message:"chatbot.sendAnotherMessage.firstMessage",owner:"customer"},{message:"chatbot.sendAnotherMessage.secondMessage",owner:"bot"},{formElements:ot,formSubmitID:"46ac44df0ea8d59a83d300a64c763539"}],furtherActions:["sendAnotherMessage","sayHello","showCV"]},rt={actionText:"chatbot.directChat.actionText",messges:[{message:"chatbot.directChat.firstMessage",owner:"customer"},{message:"chatbot.directChat.secondMessage",owner:"bot"},{message:"chatbot.directChat.thirdMessage",owner:"bot"},{formElements:ot,formSubmitID:"46ac44df0ea8d59a83d300a64c763539"}],furtherActions:["sendAnotherMessage","sayHello","showCV"]},N=new Map;N.set("sayHello",tt);N.set("showCV",nt);N.set("directChat",rt);N.set("sendAnotherMessage",ao);const co=[tt,nt,rt];function lo(e){return e.message!==void 0}function ho(e){return e.url!==void 0}function mo(e){return e.formElements!==void 0}const po=c(G)`
  margin: 5px 0 5px 10px;
  font-size: 0.8rem;
  width: 100%;

  &:hover {
    background-color: ${e=>e.theme.colors.mainblack};
    color: ${e=>e.theme.colors.mainwhite};
  }
`,uo=({children:e,handleAction:t})=>o(po,{color:"inherit",variant:"outlined",onClick:t,children:e});var go="/portfolio/assets/pdf-file.47f65d66.svg";function ce(e){if(e){const t=e.offsetWidth,n=e.offsetHeight;return{width:t,height:n}}return{width:0,height:0}}function fo(e){const[t,n]=x.exports.useState(ce(e));return x.exports.useEffect(()=>{n(ce(e));function r(){n(ce(e))}return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[e]),t}Ce.exports.GlobalWorkerOptions.workerSrc=`//unpkg.com/pdfjs-dist@${Ce.exports.version}/legacy/build/pdf.worker.min.js`;const wo=c(Ve)`
  margin: 0.5rem 0;
  max-width: 80%;
  background-color: rgba(70, 77, 66, 0.15);
  border-radius: 1.125rem 1.125rem 1.125rem 0;
`,bo=c(Oe)`
  padding: 0.8rem 0.8rem 0 0.8rem;
`,yo=c(zt)`
  & > div {
    margin: auto;
  }
`,xo=c(Ue)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ko=c(A)`
  font-size: 0.8rem;
`,Mo=c.img`
  width: 32px;
  height: 32px;
`,So=({type:e,url:t,fileName:n})=>{const r=x.exports.useRef(null),i=fo(r.current),s=()=>{const l=document.createElement("a");document.body.appendChild(l),l.download=n.toString(),l.href=t.toString(),l.click(),document.body.removeChild(l)};return o(R,{children:e==="pdf"?(()=>(console.log("URL:",t),u(wo,{ref:r,children:[o(Dt,{onClick:()=>s(),children:o(bo,{children:o(At,{file:t,renderMode:"svg",children:o(yo,{pageNumber:1,height:i.width,loading:o(Lt,{})})})})}),u(xo,{children:[o(Mo,{src:go}),u(ko,{children:[n,".pdf"]}),o(I,{onClick:()=>s(),children:o(It,{})})]})]})))():""})},vo=c(Pt)`
  & .MuiPaper-root {
    background-color: ${e=>e.theme.colors.mainblack};
    color: ${e=>e.theme.colors.whitefontcolor};
  }
`,Co=c.div`
  margin-right: 40px;
`,$o=c(I)`
  &:hover {
    background-color: ${e=>j(e.theme.colors.mainblack,.3)};
  }
`,To=c(Bt)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-bottom-color: ${e=>e.theme.colors.mainwhite};
`,zo=c(Xe)`
  color: ${e=>e.theme.colors.whitefontcolor};
`,Do=c(jt)`
  margin-top: 10px;
`,Ao=c(Et)`
  color: ${e=>e.theme.colors.whitefontcolor};
`,Lo=c.form`
  display: flex;
  flex-direction: column;
`,De=c(Ht)`
  margin: 10px 0;

  & label {
    color: ${e=>e.theme.colors.whitefontcolor};
  }

  & label.Mui-focused {
    color: #fbfffe;
  }

  & .MuiOutlinedInput-root {
    color: #fbfffe;

    & fieldset {
      border-color: ${Ft("#fbfffe",.5)};
    }

    &:hover fieldset {
      border-color: #fbfffe;
    }

    &.Mui-focused fieldset {
      border-color: #fbfffe;
    }
  }
`,Io=c(Yt)`
  padding: 8px 24px;
`,Po=W.forwardRef(function(t,n){return o(P,Se({direction:"up",ref:n},t))}),Bo=(e,t)=>e.map((n,r)=>n.type==="textarea"?o(De,{autoFocus:r===0,multiline:!0,minRows:3,size:"small",name:n.name.toString(),required:n.required,label:t(n.label)}):o(De,{autoFocus:r===0,type:n.type,name:n.name.toString(),required:n.required,label:t(n.label),size:"small"})),jo=({formElements:e,formSubmitID:t})=>{const{t:n}=z(),[r,i]=x.exports.useState(!1);return x.exports.useEffect(()=>{const s=setTimeout(()=>i(!0),1200);return()=>clearTimeout(s)},[]),u(vo,{open:r,onClose:()=>i(!1),TransitionComponent:Po,children:[u(To,{children:[u(Co,{children:[o(A,{gutterBottom:!0,component:"p",children:"Message me"}),o(A,{variant:"caption",component:"p",children:"I will get back to you as soon as possible."})]}),o($o,{onClick:()=>i(!1),children:o(zo,{})})]}),u(Do,{children:[o(Ao,{}),u(Lo,{method:"POST",action:`https://formsubmit.co/${t}`,id:"contact-form",children:[Bo(e,n),o("input",{type:"hidden",name:"_next",value:"https://fredericbahr.github.io"}),o("input",{type:"hidden",name:"_captcha",value:"false"}),o("input",{type:"text",name:"_honey",style:{display:"none"}}),o("input",{type:"hidden",name:"_template",value:"table"})]})]}),u(Io,{children:[o(G,{onClick:()=>i(!1),children:"Cancel"}),o(G,{type:"submit",form:"contact-form",children:"Send"})]})]})},Eo=c.div`
  display: flex;
  justify-content: ${e=>e.owner==="bot"?"start":"end"};
`,Ho=c.p`
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  font-size: 0.8rem;
  background: ${e=>e.owner==="bot"?"rgba(70, 77, 66, 0.15)":"black"};
  color: ${e=>e.owner==="bot"?"black":"white"};
  border-radius: ${e=>e.owner==="bot"?"1.125rem 1.125rem 1.125rem 0":"1.125rem 1.125rem 0 1.125rem"};
  min-height: 2.25rem;
  width: fit-content;
  max-width: 80%;
  box-shadow: 0 0 2rem rgba(black, 0.075), 0rem 1rem 1rem -1rem rgba(black, 0.1);
  word-wrap: break-word;
  hyphens: auto;
`,Fo=({children:e,owner:t})=>o(Ge,{in:!0,appear:!0,children:o(Eo,{owner:t,children:o(Ho,{owner:t,children:e})})}),Yo=c(Oe)`
  flex-grow: 1;
`,Ro=c(Ue)`
  flex-wrap: wrap;
  margin-bottom: 1vmax;
`,Wo=c.div`
  overflow-y: scroll;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`,qo=()=>{const{t:e}=z(),[t,n]=x.exports.useState(so),[r,i]=x.exports.useState(co),s=x.exports.useRef(null);x.exports.useEffect(()=>{k()},[t,r]);const a=()=>t.map((p,w)=>lo(p)?o(Fo,{owner:p.owner,children:e(p.message)},w):ho(p)?o(So,{owner:p.owner,type:p.type,fileName:p.fileName,url:p.url},w):mo(p)?o(jo,{formElements:p.formElements,formSubmitID:p.formSubmitID},w):null),l=p=>{const w=[];return p.forEach(M=>{const S=N.get(M);S&&w.push(S)}),w},g=async p=>{i([]);const M=p.messges.map((S,Z)=>new Promise(ne=>{setTimeout(()=>{n(oe=>[...oe,S]),ne()},Z*1e3)}));await Promise.all(M),i(p.furtherActions?l(p.furtherActions):[])},k=()=>{var p;(p=s==null?void 0:s.current)==null||p.scrollIntoView({behavior:"smooth"})};return u(Wo,{children:[o(Yo,{children:a()}),o(Ro,{children:r.map((p,w)=>o(uo,{handleAction:()=>g(p),children:e(p.actionText)},w))}),o("div",{ref:s})]})},No=c(Ve)`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 1vmax;
  right: 2vmax;
  width: 25vw;
  height: 75vh;
  z-index: 3;

  @media screen and (max-width: ${T.md}) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1200;
  }
`,Zo=({clickHandler:e})=>o(P,{direction:"up",in:!0,children:u(No,{children:[o(ro,{clickHandler:e}),o(qo,{})]})}),Xo=c(Rt)`
  background-color: ${e=>$(e.theme.colors.mainblack,.05)};
  position: fixed;
  bottom: 1vmax;
  right: 2vmax;

  z-index: 10;

  &:hover {
    background-color: ${e=>j(e.theme.colors.mainblack,1)};
  }
`,Vo=({clickHandler:e})=>{const{t}=z();return o(_e,{in:!0,children:o(ee,{title:t("chatbot.tooltip"),children:o(Xo,{onClick:e,color:"primary",children:o(Wt,{})})})})},Oo=()=>{const[e,t]=x.exports.useState(!1);return e?o(Zo,{clickHandler:()=>t(!1)}):o(Vo,{clickHandler:()=>t(!0)})},Ae=[{index:0,shortCompanyName:"ipoque",fullCompanyName:"ipoque GmbH",companyUrl:"https://www.ipoque.com/",jobTitle:"experience.jobTitles.working-student",timeRange:{from:"2021-01-01",to:"experience.time-present"},description:["experience.work-ipoque-working-student.statement1","experience.work-ipoque-working-student.statement2","experience.work-ipoque-working-student.statement3"],technologies:["Angular","TypeScript","DSL","Meta Programming","Compiler","Jest"]},{index:1,shortCompanyName:"ipoque",fullCompanyName:"ipoque GmbH",companyUrl:"https://www.ipoque.com/",jobTitle:"experience.jobTitles.bachelor-thesis",timeRange:{from:"2021-07-01",to:"2020-10-01"},description:["experience.work-ipoque-bachelor.statement1","experience.work-ipoque-bachelor.statement2","experience.work-ipoque-bachelor.statement3"],technologies:["DSL","JavaScript","Typescript","Jest","Meta Programming","Compiler"]},{index:2,shortCompanyName:"ipoque",fullCompanyName:"ipoque GmbH",companyUrl:"https://www.ipoque.com/",jobTitle:"experience.jobTitles.intern",timeRange:{from:"2021-03-01",to:"2021-05-31"},description:["experience.work-ipoque-intern.statement1","experience.work-ipoque-intern.statement2","experience.work-ipoque-intern.statement3"],technologies:["Angular","TypeScript","Generic Components"]},{index:3,shortCompanyName:"GDMcom",fullCompanyName:"GDMcom GmbH",companyUrl:"https://gdmcom.de/",jobTitle:"experience.jobTitles.working-student",timeRange:{from:"2019-06-01",to:"2020-12-01"},description:["experience.work-gdmcom.statement1","experience.work-gdmcom.statement2","experience.work-gdmcom.statement3"],technologies:["VBA","Microsoft Office Suite","Automation"]}],Uo=c.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${e=>e.justifyContent};
`,Go=c(qt)`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem;
  background-color: ${e=>$(e.theme.colors.mainblack,.15)};
  color: ${e=>j(e.theme.colors.mainwhite,.15)};

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`,it=({technologies:e=[],justifyContent:t="flex-start"})=>{const{t:n}=z();return o(Uo,{justifyContent:t,children:e.map((r,i)=>o(Go,{children:n(r)},i))})},_o=c(A)`
  margin: 2vh 0;
  width: 85%;
`,Ko=c.ul`
  margin: 2vh 0;
  width: 85%;
`,Jo=c.li`
  list-style: none;
  display: flex;
  margin: 1.75rem 0;

  &::before {
    display: block;
    content: "⏵";
    font-size: 0.7rem;
    padding-right: 8px;
    color: ${e=>e.theme.colors.mainred};
  }
`,Qo=e=>Array.isArray(e),er=({description:e,className:t})=>{const{t:n}=z(),r=i=>{const s=i.map((a,l)=>o(Jo,{children:n(a)},l));return o(Ko,{children:s})};return Qo(e)?r(e):o(_o,{children:n(e)})},le=c(A)`
  font-size: 0.9rem;
  color: ${e=>j(e.theme.colors.mainwhite,.5)};
`,tr=e=>me(e,["YYYY-MM-DD"]).isValid(),nr=({from:e,to:t})=>{const{t:n}=z();return u("div",{children:[o(le,{component:"span",children:me(e).format("MMMM YYYY")}),o(le,{component:"span",children:" - "}),o(le,{component:"span",children:tr(t)?me(t).format("MMMM YYYY"):n(t)})]})},or=c.a`
  text-decoration: none;
  color: ${e=>e.theme.colors.mainred};
  transition: ${B};
  position: relative;
  display: inline-block;

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 1.5px;
    position: relative;
    background-color: ${e=>e.theme.colors.mainred};
    opacity: 0.5;
    transition: ${B};
    bottom: 0.2rem;
  }
`,J=({url:e,children:t})=>o(or,{href:e,target:"_blank",children:t}),rr=c.h3`
  display: flex;
`,ir=c(A)``,sr=c(A)`
  margin: 0 10px;
`,ar=({title:e,companyName:t,companyUrl:n})=>u(rr,{children:[o(ir,{component:"span",children:e}),o(sr,{component:"span",children:"@"}),o(J,{url:n,children:t})]}),cr=c.div`
  flex-grow: 1;
`,lr=({children:e,className:t,value:n,index:r})=>o(cr,{className:t,role:"tabpanel",hidden:n!==r,children:n===r&&o(Nt,{children:e})}),dr=c.section`
  width: 85%;
  margin: 0 auto 25vh auto;
`,hr=c.div`
  display: grid;
  grid-template-columns: 1fr auto;

  @media screen and (max-width: ${T.sm}) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
  }
`,mr=c(Zt)`
  @media screen and (max-width: ${T.sm}) {
    grid-row: 1/2;
    margin-bottom: 3vh;
  }
`,pr=c(Xt)`
  font-size: 1.1rem;
  text-transform: none;
  font-weight: 400;
  color: ${e=>e.theme.colors.mainwhite};

  &.Mui-selected {
    background-color: ${e=>$(e.theme.colors.mainblack,.05)};
  }
`,ur=c(lr)`
  align-self: start;
`,gr=()=>{const[e,t]=W.useState(0),{t:n}=z(),r=q(`(max-width: ${T.sm})`),i=r?"horizontal":"vertical";console.log(r);const s=(a,l)=>{t(l)};return u(dr,{id:"experience",children:[o(fe,{children:n("sections.experience")}),u(hr,{children:[Ae.map(a=>u(ur,{value:e,index:a.index,children:[o(ar,{title:n(a.jobTitle),companyName:a.fullCompanyName,companyUrl:a.companyUrl}),o(nr,{from:a.timeRange.from,to:a.timeRange.to}),o(er,{description:a.description}),a.technologies&&o(it,{technologies:a.technologies})]},a.index)),o(mr,{orientation:i,variant:"scrollable",scrollButtons:"auto",allowScrollButtonsMobile:!0,onChange:s,value:e,children:Ae.map(a=>o(pr,{label:n(a.shortCompanyName)},a.index))})]})]})},fr=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5vh;
`,wr=c(A)`
  font-size: 0.8rem;
  display: block;
`,br=c(A)`
  font-size: 0.65rem;
  margin-top: 0.3rem;
`,yr=()=>u(fr,{children:[o(wr,{children:"Designed & Build by Frederic Bahr"}),u(br,{children:["Inspired by ",o(J,{url:"https://brittanychiang.com/",children:"Brittany Chiang"})]})]}),xr=({className:e})=>o("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",className:e,children:u("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none",children:[o("path",{d:`M2390 5113 c-905 -65 -1713 -614 -2126 -1443 -303 -608 -345 -1300\r
-120 -1947 52 -148 114 -284 144 -317 61 -65 155 -83 232 -44 69 36 103 86\r
108 161 3 55 0 72 -36 154 -81 182 -134 358 -169 558 -25 144 -25 490 0 639\r
107 632 481 1187 1033 1528 598 370 1294 417 1962 132 96 -41 113 -46 168 -42\r
48 3 70 10 99 32 69 53 97 133 76 214 -23 83 -88 129 -296 207 -354 133 -737\r
193 -1075 168z`}),o("path",{d:`M4835 5096 c-16 -8 -1106 -1091 -2422 -2408 -2157 -2159 -2392 -2397\r
-2399 -2431 -25 -144 57 -252 191 -252 45 0 69 6 95 22 19 12 1107 1094 2416\r
2405 2361 2362 2382 2383 2394 2434 21 92 -20 183 -100 224 -46 23 -130 26\r
-175 6z`}),o("path",{d:`M4630 3755 c-52 -16 -107 -65 -126 -112 -21 -49 -16 -111 12 -178\r
103 -241 161 -444 188 -653 83 -639 -150 -1299 -624 -1772 -323 -322 -719\r
-529 -1182 -617 -134 -25 -552 -25 -688 0 -186 35 -350 85 -532 161 -94 39\r
-145 45 -199 22 -127 -53 -166 -211 -76 -313 79 -90 476 -222 812 -270 175\r
-25 552 -22 730 5 332 52 625 156 904 321 682 404 1141 1103 1252 1911 18 125\r
18 498 0 615 -36 246 -95 459 -183 665 -52 122 -91 181 -136 204 -43 22 -103\r
26 -152 11z`})]})}),kr=c.div`
  display: flex;
  align-items: center;
`,Mr=c.div`
  display: flex;
`,Sr=c(Ne)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 10px;
  color: ${e=>e.theme.colors.whitefontcolor};
  background-color: ${e=>$(e.theme.colors.mainblack,.25)};
`,vr=c(ee)`
  padding: 0;
`,Cr=c(Vt)`
  & .MuiPaper-root {
    background-color: transparent;
  }
`,$r=({children:e,anchorIcon:t})=>{const{t:n}=z(),[r,i]=W.useState(null),s=Boolean(r);x.exports.useEffect(()=>{l()},[t]);const a=g=>{i(g.currentTarget)},l=()=>{i(null)};return o(kr,{children:u(Mr,{children:[o(vr,{title:n("miniMe.gadget"),placement:"bottom",children:o(I,{onClick:s?l:a,children:s?o(Sr,{}):t})}),s&&o(Cr,{open:s,anchorEl:r,onClose:l,anchorOrigin:{vertical:"center",horizontal:"left"},transformOrigin:{vertical:"center",horizontal:"right"},children:e})]})})},Tr=({className:e})=>o("svg",{width:"100%",height:"100%",className:e,children:o("line",{x1:"0%",y1:"50%",x2:"100%",y2:"50%",stroke:"white"})}),zr=e=>e.type==="Mesh",Dr=(e,t)=>{const n=[];return e.children.forEach(r=>{if(zr(r)){const i=r.geometry.clone();r.updateMatrix(),i.applyMatrix4(r.matrix),n.push(i)}}),new h(Ot(n,!0),t)},m=150,v=400,Ar=30,Lr=30,Ir=1,V=10,Le=-27,y=10,b=10,L=m*.75,we=200,Ie=250,Q=m*.75,Pr=200,st=10,Br=st,jr=1,Er=40,Hr=140,Fr=50,Yr=40,Rr=75,Wr=50,at=20,qr=40,ct=50,Nr=at,Zr=10,Xr=ct,Vr=we+10,lt=15,Or=Q+10,Ur=75,Gr=25,_r=lt,Kr=1,H=we/2,be=300,te=Q,Jr=5,Qr=be/2,ei=te+2,O=-75,dt=H*.85,ye=50,ti=te*.85,ni=dt,oi=35,ri=te+20,Pe=-18.5,ge=O-be/2-ye/2,Be=ge-ye/2,de=700,ii=120,si=-165,ai=15,he=7,ci=120,li=-165,di=5;class hi{constructor(){d(this,"character");d(this,"skinMat");d(this,"eyeMat");d(this,"retinaMat");d(this,"eyeBrownMat");d(this,"oralCavityMat");d(this,"tongueMat");d(this,"teethMat");d(this,"glassMat");d(this,"earMat");d(this,"shirtMat");d(this,"beltMat");d(this,"buckleMat");d(this,"legMat");d(this,"legSeperatorMat");d(this,"footMat");d(this,"hairMat");d(this,"buttonMat");d(this,"gadget");d(this,"deg2rad",t=>t*(Math.PI/180));d(this,"createHead",()=>{const t=new f(m,m,m*.75),n=new h(t,this.skinMat);n.position.set(0,v,0);const[r,i]=this.createEyesAndEyebrowns(n),s=this.createMouth(n),[a,l]=this.createGlassesAndEars(n);n.add(r,i,s,a,l),this.character.add(n)});d(this,"createEyesAndEyebrowns",t=>{const n=new f(Ar,Lr,Ir),r=this.createEyes(t,n),i=this.createEyeBrowns(t,n);return[r,i]});d(this,"createEyes",(t,n)=>{const r=new D,i=new h(n,this.eyeMat);i.position.set(t.geometry.parameters.width/4,V,-t.geometry.parameters.depth/2-2);const s=new h(n,this.eyeMat);s.position.set(-t.geometry.parameters.width/4,V,-t.geometry.parameters.depth/2-2);const[a,l]=this.createRetinas();return i.add(a),s.add(l),r.add(i,s),r});d(this,"createRetinas",()=>{const t=new f(7.5,7.5,1),n=new h(t,this.retinaMat);n.position.set(-2.5,-5,-1);const r=new h(t,this.retinaMat);return r.position.set(2.5,-5,-1),[n,r]});d(this,"createEyeBrowns",(t,n)=>{const r=new D,i=new f(40,10,1),s=new h(i,this.eyeBrownMat);s.position.set(t.geometry.parameters.width/4,n.parameters.height+n.parameters.height*.5,-t.geometry.parameters.depth/2-1),s.rotateZ(this.deg2rad(2));const a=new h(i,this.eyeBrownMat);return a.position.set(-t.geometry.parameters.width/4,n.parameters.height+n.parameters.height*.5,-t.geometry.parameters.depth/2-1),a.rotateZ(this.deg2rad(-2)),r.add(s,a),r});d(this,"createMouth",t=>{const n=new D,r=new Ut(25,5,Math.PI,Math.PI),i=new f(48,5,1),s=new f(15,5,1),a=new h(r,this.oralCavityMat);a.material.side=X,a.position.set(0,Le,-t.geometry.parameters.depth/2-1);const l=new h(i,this.teethMat);l.position.set(0,Le,-t.geometry.parameters.depth/2-1);const g=new h(s,this.tongueMat);return g.position.set(0,-46,-t.geometry.parameters.depth/2-1),n.add(a,l,g),n});d(this,"createGlassesAndEars",t=>{const n=new Gt(27,32,4),r=this.createGlasses(t,n),i=this.createEars(t,n);return[r,i]});d(this,"createGlasses",(t,n)=>{const r=new D,i=new f(5,30,1),s=new f(5,17,1),a=new f(5,t.geometry.parameters.depth/2,1),l=new h(n,this.glassMat);l.position.set(t.geometry.parameters.width/4,V,-t.geometry.parameters.depth/2-1),l.rotateZ(this.deg2rad(45));const g=new h(n,this.glassMat);g.position.set(-t.geometry.parameters.width/4,V,-t.geometry.parameters.depth/2-1),g.rotateZ(this.deg2rad(45));const k=new h(i,this.glassMat);k.position.set(0,n.parameters.outerRadius/2,-t.geometry.parameters.depth/2-1),k.rotateZ(this.deg2rad(90));const p=new h(s,this.glassMat);p.position.set(l.position.x+l.geometry.parameters.innerRadius+2,n.parameters.outerRadius/2,-t.geometry.parameters.depth/2-1),p.rotateZ(this.deg2rad(90));const w=new h(s,this.glassMat);w.position.set(g.position.x-g.geometry.parameters.innerRadius-2,n.parameters.outerRadius/2,-t.geometry.parameters.depth/2-1),w.rotateZ(this.deg2rad(90));const M=new h(a,this.glassMat);M.position.set(t.geometry.parameters.width/2,n.parameters.outerRadius/2,-t.geometry.parameters.depth/4),M.rotateY(this.deg2rad(90)),M.rotateZ(this.deg2rad(90));const S=new h(a,this.glassMat);return S.position.set(-t.geometry.parameters.width/2,n.parameters.outerRadius/2,-t.geometry.parameters.depth/4),S.rotateY(this.deg2rad(90)),S.rotateZ(this.deg2rad(90)),r.add(l,g,k,p,w,M,S),r});d(this,"createEars",(t,n)=>{const r=new D,i=new f(10,30,25),s=new h(i,this.earMat);s.position.set(t.geometry.parameters.width/2+i.parameters.width/2,n.parameters.outerRadius/2,-4);const a=new h(i,this.earMat);return a.position.set(-t.geometry.parameters.width/2,n.parameters.outerRadius/2,-4),r.add(s,a),r});d(this,"createHairs",()=>{const t=new D;let n;const r=new D;let i,s=new f(y,b,L);const a=m/y;this.createTopHair(r,s,a);const l=m/y+2;this.createBackHair(r,l);const g=m*.75/y;this.createSideHair(r,s,g),this.createSideHair(r,s,g,!1),i=this.createDetailHairs(),n=Dr(r,this.hairMat),t.add(n,i),this.character.add(t)});d(this,"createTopHair",(t,n,r)=>{const i=v+m/2+b/2;for(let s=0;s<r;s++){const a=new h(n,this.hairMat),l=m/2-y/2-s*y;a.position.set(l,i,0),t.add(a)}});d(this,"createBackHair",(t,n)=>{for(let r=0;r<n;r++){const i=new f(y,b,L*.6),s=new h(i,this.hairMat),a=m/2+y/2-r*y,l=v+m/2+b-i.parameters.depth/2,g=L/2;s.position.set(a,l,g),s.rotateX(this.deg2rad(90)),t.add(s)}});d(this,"createSideHair",(t,n,r,i=!0)=>{for(let s=0;s<r;s++){let a;const g=(i?1:-1)*(m/2+y/2),k=-m*.75/2+s*y;if(s===12){n=new f(y,b,L/2+25),a=new h(n,this.hairMat);const p=v+m/2+b/4-b-23.1;a.position.set(g,p,k)}else if(s===0){n=new f(y,b,L/2+10),a=new h(n,this.hairMat);const p=v+m/2+b/4-b-15.6;a.position.set(g,p,k)}else if(s===1){n=new f(y,b,L/2+7.5),a=new h(n,this.hairMat);const p=v+m/2+b/4-b-14.35;a.position.set(g,p,k)}else if(s>=10){n=new f(y,b,L/2+10),a=new h(n,this.hairMat);const p=v+m/2+b/4-b-15.6;a.position.set(g,p,k)}else if(s<4||s>=8){n=new f(y,b,L/2),a=new h(n,this.hairMat);const p=v+m/2+b/4-b-10.6;a.position.set(g,p,k)}else{n=new f(y,b,L*.4+3),a=new h(n,this.hairMat);const p=v+m/2+b/4-b-6.5;a.position.set(g,p,k)}a.rotateY(this.deg2rad(90)),a.rotateX(this.deg2rad(90)),t.add(a)}});d(this,"createDetailHairs",()=>{const t=new D;let n=new f(m*.8,b,10);const r=-m*.75/2-n.parameters.depth/2;return this.createFrontHairParting(t,r,n),this.createFrontHairRightSideDetails(t,r),this.createBackHairDetails(t),t});d(this,"createFrontHairParting",(t,n,r)=>{let i=new h(r,this.hairMat),s=m/2-r.parameters.width/2+y,a=v+m/2+b/2-r.parameters.height;i.position.set(s,a,n),t.add(i),r=new f(m*.75,b,10),i=new h(r,this.hairMat),s=m/2-r.parameters.width/2+y,a=v+m/2+b/2,i.position.set(s,a,n),t.add(i),r=new f(m*.63,b,10),i=new h(r,this.hairMat),s=m/2-r.parameters.width/2+y,a=v+m/2+b/2+r.parameters.height,i.position.set(s,a,n),t.add(i)});d(this,"createFrontHairRightSideDetails",(t,n)=>{let r=new f(m/4,b,10),i=new h(r,this.hairMat),s=-m/2-y/2,a=v+m/2-b+1.2;i.position.set(s,a,n),i.rotateZ(this.deg2rad(90)),t.add(i),r=new f(m*.225,b,10),i=new h(r,this.hairMat),s=-m/2-y/2+r.parameters.depth,a=v+m/2-6.5,i.position.set(s,a,n),i.rotateZ(this.deg2rad(90)),t.add(i),r=new f(m/5,b,10),i=new h(r,this.hairMat),s=-m/2-y/2+2*r.parameters.depth,a=v+m/2-3,i.position.set(s,a,n),i.rotateZ(this.deg2rad(90)),t.add(i),r=new f(m/5,b,10),i=new h(r,this.hairMat),s=-m/2-y/2+3*r.parameters.depth,a=v+m/2-3,i.position.set(s,a,n),i.rotateZ(this.deg2rad(90)),t.add(i),r=new f(m/5,b,10),i=new h(r,this.hairMat),s=-m/2-y/2+4*r.parameters.depth,a=v+m/2-3,i.position.set(s,a,n),i.rotateZ(this.deg2rad(90)),t.add(i),r=new f(m*.16,b,10),i=new h(r,this.hairMat),s=-m/2-y/2+5*r.parameters.depth,a=v+m/2,i.position.set(s,a,n),i.rotateZ(this.deg2rad(90)),t.add(i)});d(this,"createBackHairDetails",t=>{const n=m/y+2,r=new f(y,b,L*.6),i=Math.floor((n-1)/2),s=12,a=7;for(let l=0;l<n;l++){const g=l>i?i-(l-i):l;let k=this.getFactorForBackHairDetails(g);const p=new h(r,this.hairMat),w=m/2+y/2-l*y,M=L/2,S=v+m/2+b-r.parameters.depth/2-(s+k*a);p.rotateX(this.deg2rad(90)),p.position.set(w,S,M),t.add(p)}});d(this,"getFactorForBackHairDetails",t=>t<=1?0:t<=3?1:t<=5?2:3);d(this,"createBody",()=>{const t=new f(we,Ie,Q),n=new D,r=new h(t,this.shirtMat);r.position.set(0,Pr,0);const[i,s]=this.createArms(r),a=this.createButtons();r.add(i,s,a),n.add(r),this.character.add(n)});d(this,"createButtons",()=>{const t=new D,n=4;for(let r=0;r<n;r++){const i=this.createButton(r);t.add(i)}return t});d(this,"createButton",t=>{const i=new f(st,Br,jr),s=new h(i,this.buttonMat),a=-Q/2-1,l=0,g=-35+Ie/2-t*50;return s.position.set(l,g,a),s});d(this,"createArms",t=>{const n=new f(Er,Hr,Fr),r=new f(Yr,Rr,Wr),i=new f(at,qr,ct),s=new f(Nr,Zr,Xr),a=this.createArm(t.geometry,n,r,i,s),l=this.createArm(t.geometry,n,r,i,s,!1);return[a,l]});d(this,"createArm",(t,n,r,i,s,a=!0)=>{const l=new D,g=new D,k=a?1:-1,{upperArm:p,lowerArm:w,thumb:M,fingers:S}=this.createArmMeshes(n,r,i,s);return g.add(M,S),a||this.gadget&&g.add(this.gadget),p.position.set(k*(t.parameters.width/2+n.parameters.width/2),t.parameters.height/2-n.parameters.height/2,0),w.position.set(k*(t.parameters.width/2+n.parameters.width/2),p.position.y-n.parameters.height/2-w.geometry.parameters.height/2,0),M.position.set(k*(t.parameters.width/2+n.parameters.width/2+i.parameters.width/2),w.position.y-r.parameters.height/2,0),S.position.set(k*(t.parameters.width/2+n.parameters.width/2-s.parameters.width/2),w.position.y-r.parameters.height/2,0),l.add(p,w,g),l});d(this,"createArmMeshes",(t,n,r,i)=>{const s=new h(t,this.shirtMat),a=new h(n,this.skinMat),l=new h(r,this.skinMat),g=new h(i,this.skinMat);return{upperArm:s,lowerArm:a,thumb:l,fingers:g}});d(this,"createBelt",()=>{const t=new f(Vr,lt,Or),n=new f(Gr,_r,Kr),r=new h(t,this.beltMat);r.position.set(0,Ur,0);const i=new h(n,this.buckleMat);i.position.z=-1*(t.parameters.depth/2+1),r.add(i),this.character.add(r)});d(this,"createLegs",()=>{const t=new D,n=new f(H,be,te),r=new f(Jr,Qr,ei),i=new h(n,this.legMat);i.position.set(n.parameters.width/2,O,0);const s=new h(n,this.legMat);s.position.set(-n.parameters.width/2,O,0);const a=new h(r,this.legSeperatorMat);a.position.set(0,O-r.parameters.height/2,0),t.add(i,s,a),this.character.add(t)});d(this,"createFeet",()=>{const t=new D,n=new f(dt,ye,ti),r=new f(ni,oi,ri),i=new h(n,this.footMat);i.position.set(H/2,ge,0);const s=new h(n,this.footMat);s.position.set(-H/2,ge,0);const a=new h(r,this.footMat);a.position.set(H/2,Be,Pe);const l=new h(r,this.footMat);l.position.set(-H/2,Be,Pe),t.add(i,s,a,l),this.character.add(t)});d(this,"transform",()=>{this.character.translateY(-150),this.character.scale.set(1.1,1.1,1.1)});d(this,"setNoGadget",()=>{this.gadget=null});d(this,"setLaptop",async()=>{const n=await new _t().loadAsync("src/assets/models/laptop/closed-laptop.gltf");n.scene.scale.set(he,he,he),n.scene.position.set(ci,li,di),n.scene.rotation.set(this.deg2rad(90),0,this.deg2rad(-90)),this.gadget=n.scene});d(this,"setKeyboard",async()=>{const t=new Kt,n=new Jt,r=await t.loadAsync("./src/assets/models/keyboard/keyboard.mtl");r.preload(),n.setMaterials(r);const i=await n.loadAsync("./src/assets/models/keyboard/keyboard.obj");i.scale.set(de,de,de),i.position.set(ii,si,ai),i.rotation.set(this.deg2rad(90),0,this.deg2rad(-90)),this.gadget=i});d(this,"reset",()=>{this.character.clear(),this.character.position.set(0,0,0)});d(this,"draw",()=>{this.reset(),this.createHead(),this.createHairs(),this.createBody(),this.createBelt(),this.createLegs(),this.createFeet(),this.transform()});d(this,"setGadget",async t=>{const r=[this.setNoGadget,this.setLaptop,this.setKeyboard][t];r&&await r(),this.draw()});this.character=new D,this.skinMat=new C({color:"#e0bea5"}),this.eyeMat=new C({color:"#fbfffe"}),this.retinaMat=new C({color:"#0aa5ff"}),this.eyeBrownMat=new C({color:"#5a3825"}),this.oralCavityMat=new C({color:"#181114"}),this.tongueMat=new C({color:"#cc0e00"}),this.teethMat=new C({color:"#fbfffe"}),this.glassMat=new C({color:"#181114",side:X}),this.earMat=new C({color:"#deb08e"}),this.shirtMat=new C({color:"#cc0e00"}),this.beltMat=new C({color:"#181114"}),this.buckleMat=new C({color:"#808080",side:X}),this.legMat=new C({color:"#003049"}),this.legSeperatorMat=new C({color:"#181114"}),this.footMat=new C({color:"#f77f00"}),this.hairMat=new C({color:"#ad9032"}),this.buttonMat=new C({color:"#808080",side:X}),this.gadget=null,this.draw()}setShirtMat(t){const n=["#cc0e00","#0aa5ff"];this.shirtMat=new C({color:n[t]})}}const Y=class{constructor(){}};let U=Y;d(U,"instance",null),d(U,"getMiniMe",()=>(Y.instance||(Y.instance=new hi),Y.instance));const mi=Ke`
  0% {
    transform: translateY(-1rem);
  }
  50% {
    transform: translateY(-1.5rem);
  }
  100% {
    transform: translateY(-1rem);
  }
`,pi=Ke`
0% {
    line-height: 1.5rem;
    transform: translateY(-0.75rem);
  }
  55% {
    transform: translateY(-1rem);
  }
  60% {
    line-height: 0.5rem;
  }
  100% {
    line-height: 1.5rem;
    transform: translateY(-0.75rem);
  }
`,ui=c.p`
  animation: ${mi} 4s ease-in-out infinite;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.whitefontcolor};
  background-color: ${e=>$(e.theme.colors.mainblack,.25)};
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0.25rem 0.25rem ${e=>$(e.theme.colors.mainblack,.1)};
  max-width: 10rem;
  word-wrap: break-word;

  &::after {
    animation: ${pi} 4s ease-in-out infinite;
    content: ".";
    -webkit-text-fill-color: ${e=>$(e.theme.colors.mainblack,.25)};
    text-align: right;
    font-size: 2.7rem;
    width: 2.5rem;
    height: 0.5rem;
    border-radius: 0.75rem;
    background-color: ${e=>$(e.theme.colors.mainblack,.25)};
    position: absolute;
    display: block;
    bottom: -2rem;
    right: 0;
    transform: translateX(-200px);
  }
`,gi=({show:e=!0,text:t})=>e?o(ui,{children:t}):null,fi=c.div`
  position: relative;
  width: 100%;
  height: 100%;
`,wi=c.div`
  cursor: crosshair;
  width: 100%;
  height: 100%;
`,bi=c.div`
  position: absolute;
  top: 38%;
  left: 15%;
`,yi=c(Tr)`
  width: 2rem;
`,xi=c(xr)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 10px;
  background-color: ${e=>$(e.theme.colors.mainblack,.25)};

  & g {
    fill: ${e=>e.theme.colors.whitefontcolor};
  }
`,ki=c(I)`
  padding: 0;
  margin: 0 5px;
`,Mi=c(Qt)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 10px;
  color: ${e=>e.theme.colors.whitefontcolor};
  background-color: ${e=>$(e.theme.colors.mainblack,.1)};
`,Si=c(en)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 10px;
  color: ${e=>e.theme.colors.whitefontcolor};
  background-color: ${e=>$(e.theme.colors.mainblack,.1)};
`,vi=c(ee)`
  padding: 0;
`,Ci=c.div`
  position: absolute;
  top: 0;
  left: 5%;
`,$i=()=>{const e=x.exports.useRef(null),[t,n]=x.exports.useState(0),[r,i]=x.exports.useState("miniMe.hiBubbleText"),s=6e3,a=q(`(min-width: ${T.md})`),l=U.getMiniMe(),{t:g}=z();x.exports.useEffect(()=>{var ke;const w=new tn;w.clear();const M=new nn(65,window.innerWidth/window.innerHeight,.1,4e3);M.position.set(0,400,-1e3),M.lookAt(new on(0,0,0));const S=new rn({alpha:!0,antialias:!0});S.setPixelRatio(window.devicePixelRatio);const Z=new sn(M,S.domElement);Z.update(),(ke=e.current)==null||ke.replaceChildren(S.domElement);const ne=()=>{const E=new cn(16777215,16777215,.7),F=new ln(4210752,1.2);w.add(E),w.add(F)},oe=()=>{w.add(l.character)};function ht(){const E=S.domElement,F=E.clientWidth,re=E.clientHeight;(E.width!==F||E.height!==re)&&(S.setSize(F,re,!0),M.aspect=F/re,M.updateProjectionMatrix())}const xe=function(){requestAnimationFrame(xe),ht(),Z.update(),S.render(w,M)};ne(),oe(),xe()}),x.exports.useEffect(()=>{l.setGadget(t)},[t]),x.exports.useEffect(()=>{const w=setTimeout(()=>{i(null)},s);return()=>clearTimeout(w)},[r]);const k=[{id:0,icon:o(xi,{}),name:"empty"},{id:1,icon:o(Mi,{}),name:"laptop"},{id:2,icon:o(Si,{}),name:"keyboard"}],p=()=>k.filter(w=>w.id!==t).map((w,M)=>o(vi,{title:g(`miniMe.${w.name}`),children:o(ki,{onClick:()=>{n(w.id),i(w.name==="empty"?null:`miniMe.${w.name}BubbleText`)},children:w.icon})},M));return a?u(fi,{children:[o(wi,{ref:e,id:"character"}),o(bi,{children:u(an,{direction:"row",spacing:2,children:[o($r,{anchorIcon:k[t].icon,children:p()}),o(yi,{})]})}),o(Ge,{in:Boolean(r),timeout:_,children:o(Ci,{children:o(gi,{show:Boolean(r),text:g(r)})})})]}):null},Ti=c(G)`
  text-transform: none;
  margin: 3vh auto;
`,zi=c(dn)`
  color: ${e=>e.theme.colors.mainwhite};
`,Di=({children:e,className:t,onClick:n})=>o(Ti,{onClick:n,className:t,variant:"contained",startIcon:o(zi,{}),children:e});const Ai=({isMounted:e})=>{const{t}=z(),n=t("introduction.name"),r=t("introduction.student"),i=t("introduction.jobdescription");return x.exports.useEffect(()=>{var s;e&&new hn((s=document.getElementById("typewriter"))!=null?s:"typewriter",{}).pauseFor(zn).typeString(n).pauseFor(ae).deleteAll().typeString(r).pauseFor(ae).deleteAll().typeString(i).pauseFor(ae).deleteAll().typeString(n).start()},[e,n,r,i]),e?o("div",{id:"typewriter"}):null},Li=c.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  /** 50px navbar and 2*5vh margin */
  min-height: calc(100vh - 50px - 10vh);
  margin: 5vh auto;

  @media (max-width: ${T.md}) {
    display: flex;
  }
`,Ii=c.div`
  margin: 7vh 0 0 7.5vw;

  @media screen and (max-width: ${T.md}) {
    margin: 7vh 0.5rem 0 0.5rem;
  }
`,Pi=c(A)`
  color: ${e=>$(e.theme.colors.mainblack,.4)};
  font-size: 1rem;
  margin-bottom: 5vh;
`,Bi=c(A)`
  color: ${e=>$(e.theme.colors.mainblack,.8)};
  font-size: 1.5rem;
`,ji=c(A)`
  font-size: 1.1rem;
  margin-top: 10vh;
  color: ${e=>$(e.theme.colors.mainblack,.8)};
  width: 75%;

  @media screen and (max-width: ${T.md}) {
    width: 100%;
  }
`,Ei=c(Di)`
  margin: 6vh 0 3vh 0;
  padding: 1vh 2vw;
  font-size: 1rem;
`,Hi=()=>{const{t:e}=z(),t=Je(),[n,r]=x.exports.useState(!1),i=()=>{t("contact",{replace:!0})};return x.exports.useEffect(()=>{const s=setTimeout(()=>r(!0),Qe);return()=>clearTimeout(s)},[]),o(_e,{in:n,timeout:_,children:u(Li,{children:[u(Ii,{children:[u(Pi,{variant:"h6",component:"p",children:[e("introduction.hi")," "]}),o(Ai,{isMounted:n}),o(Bi,{children:e("introduction.subtitle")}),u(ji,{children:[e("introduction.info.firstText")," ",o(J,{url:"https://www.htwk-leipzig.de/startseite/",children:e("introduction.info.htwkLink")})," ",e("introduction.info.secondText")," ",o(J,{url:"https://www.ipoque.com/",children:e("introduction.info.jobLink")}),"."]}),o(Ei,{onClick:i,children:"Contact me!"})]}),o($i,{})]})})};var Fi="/portfolio/assets/dag-visualization.83af4ae2.png",Yi="/portfolio/assets/dbs_weatherdata.fd6527c9.png",Ri="/portfolio/assets/domain-specific-languages.d57a8f41.png";const Wi=[{imgUrl:Ri,headline:"projects.dsl.headline",subheadline:"Projects",description:"projects.dsl.description",technologies:["projects.dsl.technologies.0","projects.dsl.technologies.1","projects.dsl.technologies.2","projects.dsl.technologies.3","projects.dsl.technologies.4"]},{imgUrl:Fi,headline:"projects.dag.headline",subheadline:"Projects",description:"projects.dag.description",technologies:["projects.dag.technologies.0","projects.dag.technologies.1","projects.dag.technologies.2","projects.dag.technologies.3","projects.dag.technologies.4"]},{imgUrl:Yi,headline:"projects.weatherData.headline",subheadline:"Projects",description:"projects.weatherData.description",technologies:["projects.weatherData.technologies.0","projects.weatherData.technologies.1","projects.weatherData.technologies.2","projects.weatherData.technologies.3","projects.weatherData.technologies.4","projects.weatherData.technologies.5"]}],qi=c.p`
  background-color: ${e=>$(e.theme.colors.mainblack,.1)};
  padding: 0.75rem 1.25rem;
  grid-column: 1/-1;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-line;

  @media screen and (max-width: ${T.md}) {
    margin: 2rem 0 1rem 0;
    padding: 1.5rem 1rem;
  }
`,je=({description:e,leftSideThumbnail:t})=>o(qi,{leftSideThumbnail:t,children:e}),Ni=c.div`
  grid-column: ${e=>e.leftSideThumbnail?"2/-1":"1/7"};
  display: flex;
  justify-content: ${e=>e.leftSideThumbnail?"flex-end":"flex-start"};
  align-items: center;
`,Ee=({technologies:e,leftSideThumbnail:t})=>o(Ni,{leftSideThumbnail:t,children:o(it,{justifyContent:t?"flex-end":"flex-start",technologies:e})}),Zi=c.figure`
  background-color: ${e=>$(e.theme.colors.mainred,.22)};
  overflow: hidden;
  grid-column: ${e=>e.leftSideThumbnail?"1/7":"7/-1"};
  grid-row: 1/2;
  cursor: pointer;
  transition: ${B};
  display: flex;
`,Xi=c.img`
  opacity: 0.7;
  width: 100%;
  height: 100%;
  -webkit-transition: ${B};
  transition: ${B};

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  @media screen and (max-width: ${T.md}) {
    opacity: 1;
  }
`,He=({imgUrl:e,altText:t,leftSideThumbnail:n,onClick:r})=>o(Zi,{onClick:r,leftSideThumbnail:n,children:o(Xi,{src:e,alt:t})}),Fe=c.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  margin: 10rem 0;

  &:first-of-type {
    margin-top: 1rem;
  }

  @media screen and (max-width: ${T.md}) {
    display: flex;
    flex-direction: column;
  }
`,Vi=c.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-column: ${e=>e.leftSideThumbnail?"6/-1":"1/8"};
  grid-row: 1/2;
`,Oi=c.div`
  grid-column: ${e=>e.leftSideThumbnail?"2/-1":"1/7"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${e=>e.leftSideThumbnail?"flex-end":"flex-start"};
  color: ${e=>e.theme.colors.mainwhite};
`,Ye=c.h3`
  cursor: pointer;
  font-size: 1.75rem;
  text-align: ${e=>e.leftSideThumbnail?"right":"left"};

  @media screen and (max-width: ${T.md}) {
    margin: 0.25rem 0 2rem 0;
  }
`,Re=c.h4`
  font-size: 1rem;
  color: ${e=>e.theme.colors.mainred};
`,Ui=({projectOverview:e,leftSideThumbnail:t=!0})=>{var i,s;const{t:n}=z();return q(`(max-width: ${T.md})`)?u(Fe,{children:[o(Re,{children:e.subheadline}),o(Ye,{leftSideThumbnail:!1,onClick:()=>alert("Hi"),children:n(e.headline)}),o(He,{leftSideThumbnail:!1,onClick:()=>alert("Hi"),imgUrl:e.imgUrl}),o(je,{leftSideThumbnail:!1,description:n(e.description)}),o(Ee,{leftSideThumbnail:!1,technologies:(s=e.technologies)!=null?s:[]})]}):u(Fe,{children:[o(He,{leftSideThumbnail:t,onClick:()=>alert("Hi"),imgUrl:e.imgUrl}),u(Vi,{leftSideThumbnail:t,children:[u(Oi,{leftSideThumbnail:t,children:[o(Re,{children:e.subheadline}),o(Ye,{leftSideThumbnail:t,onClick:()=>alert("Hi"),children:n(e.headline)})]}),o(je,{leftSideThumbnail:t,description:n(e.description)}),o(Ee,{leftSideThumbnail:t,technologies:(i=e.technologies)!=null?i:[]})]})]})},Gi=c.section`
  width: 85%;
  margin: 0 auto;
`,_i=()=>{const{t:e}=z();return u(Gi,{id:"projects",children:[o(fe,{children:e("sections.projects")}),Wi.map((t,n)=>o(Ui,{projectOverview:t,leftSideThumbnail:n%2===0},n))]})},We=()=>u(R,{children:[o(Hi,{}),o(Qn,{}),o(gr,{}),o(_i,{}),o(Oo,{}),o(yr,{})]}),Ki=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${e=>e.theme.colors.mainblack};
`,Ji=c(Cn)`
  width: 30vw;
  height: 30vh;
`,Qi=c.div`
  background-color: ${e=>e.theme.colors.mainblack};
  color: ${e=>e.theme.colors.whitefontcolor};
`;function es(){const[e,t]=x.exports.useState(!0),n=Je(),r=()=>{t(!0),n("/",{replace:!0})};return x.exports.useEffect(()=>{const i=setTimeout(()=>{t(!1)},2800);return()=>clearTimeout(i)},[e]),e?o(Ki,{children:o(Ji,{})}):u(Qi,{children:[o(_n,{homeClickHandler:r}),u(mn,{children:[o(se,{path:"/",element:o(We,{})}),o(se,{path:"/contact",element:o(vn,{})}),o(se,{path:"*",element:o(We,{})})]})]})}const ts={about:"\xDCber mich",experience:"Erfahrung",projects:"Projekte"},ns={about:"\xDCber mich",experience:"Erfahrungen",projects:"Projekte"},os={tooltip:"W\xE4hle deine Sprache",english:"Englisch",german:"Deutsch"},rs={hi:"Hi, ich bin",name:"Frederic Bahr",student:"ein Medieninformatik Student",jobdescription:"ein Frontend Web Developer",subtitle:"Ich entwickle Assets f\xFCr das Web.",info:{firstText:"Ich bin ein Software Engineer, der sich auf die Entwicklung digitaler Erfahrungen aus der Frontend-Perspektive spezialisiert hat. Derzeit studiere ich Medieninformatik (Master) an der",secondText:"und entwickle UI-Komponenten f\xFCr die",htwkLink:"HTWK",jobLink:"ipoque GmbH"}},is={tooltip:"Chatbot \xF6ffnen",initialMessage:{firstMessage:"Hi, Ich bin Frederic`s ChatBot \u{1F916}",secondMessage:"Wie kann ich dir helfen?"},sayHello:{actionText:"Ich wollte nur einmal Hallo sagen",firstMessage:"Hi, wie gehts?",secondMessage:"Hey, sch\xF6n dich kennenzulernen!",thirdMessage:"Danke dass du dir mein Portfolio anschaust.",fourthMessage:"Ich hoffe dir gef\xE4llt meine Arbeit.",fifthMessage:"Kann ich dir sonst irgendwie helfen?"},showCV:{actionText:"Zeig mir deinen Lebenslauf.",firstMessage:"Hey, ich interessiere mich f\xFCr deinen Lebenslauf!",secondMessage:"Danke f\xFCr dein Interesse.",thirdMessage:"Unten kannst du meinen Lebenslauf herunterladen."},sendAnotherMessage:{actionText:"Sende eine weitere Nachricht",firstMessage:"Ich w\xFCrde gerne eine weitere Nachricht senden.",secondMessage:"Ok, kein Problem."},directChat:{actionText:"Ich will mit dir pers\xF6nlich reden.",firstMessage:"Ich mag deinen Chatbot sehr, aber ich w\xFCrde gerne mit dir direkt reden.",secondMessage:"Schade, aber ich respektiere deine Entscheidung.",thirdMessage:"Schicke meinem Meister eine Nachricht, er wird so schnell wie m\xF6glich antworten!"},formElementsLabel:{name:"Name",subject:"Betreff",email:"E-Mail",message:"Nachricht"}},ss={jobTitles:{"working-student":"Werksstudent",intern:"Praktikum","bachelor-thesis":"Bachelor Thesis "},"time-present":"bis Heute","work-gdmcom":{statement1:"Werkstudent in der Abteilung Informations- und Kommunikationstechnologie",statement2:"Automatisierung von wiederkehrenden Aufgaben im Bereich der Microsoft Office Suite und Dateisystemen",statement3:"Implementierung eines Prototyps f\xFCr die automatisierte Erstellung einer \xDCbersicht von Unternehmensstandorten aus Dateiverzeichnissen"},"work-ipoque-intern":{statement1:"Erstellung generischer Angularkomponenten zur Darstellung von UI-Komponenten in einem Showcase",statement2:"Asynchrone Implementierung der Business-/Renderlogik durch Benutzung von RxJS",statement3:"Automatisiertes Rendern verschiedener Formularelemente aufgrundlage einer benutzerdefinierten Konfiguration"},"work-ipoque-bachelor":{statement1:"Konzeption, Entwurf und Implementierung einer dom\xE4nenspezifischen Sprache f\xFCr die Erstellung von Komponentenquellcode",statement2:"Entwerfen und Implementieren eines Compilers f\xFCr eine eigene Programmiersprache",statement3:"Generierung von generischem Angular-Quellcode auf Basis von dom\xE4nen-spezifischen L\xF6sungsans\xE4tze mithilfe von Design Patterns (Dependency Injection, Inversion of control, etc.)"},"work-ipoque-working-student":{statement1:"Weiterentwicklung der DSL und des dazugeh\xF6rigen Compilers mit Implementierung von Plugins f\xFCr diverse IDE\xB4s",statement2:"Entwicklung von DevOps-orientierten Automatisierungsskripten f\xFCr Continuous Delivery-Pipelines",statement3:"Schreiben verschiedener Tests (Unit-Tests, Integrationtests, End-2-End) zur Qualit\xE4tssicherung"}},as={dsl:{headline:"Dom\xE4nenspezifische Sprache",description:"Eine dom\xE4nenspezifische Sprache f\xFCr die unkomplizierte und ausdrucksstarke Erstellung eines Showcases f\xFCr UI-Komponenten.",technologies:["Compiler","JavaScript","VSC Extension","Intellij Plugin","Betriebsgeheimnis"]},dag:{headline:"Gerichteter azyklischer Graph Visualisierung",description:"Eine Implementierung des Sugiyama-Algorithmus unter Verwendung der Barycenter-Heuristik. Die App visualisiert einen gerichteten azyklischen Graphen mit Hilfe von D3.",technologies:["TypeScript","D3.js","Algorithmen","Visualisierung","Universit\xE4t"]},weatherData:{headline:"XML Wetterdaten Visualisierung",description:"",technologies:["XML","XML Schema Definition","DTD","XSL Transformation","D3.js","Universit\xE4t"]}};var cs={sections:ts,navbar:ns,languageMenu:os,introduction:rs,chatbot:is,experience:ss,projects:as};const ls={about:"About me",experience:"Experience",projects:"Projects"},ds={about:"About me",experience:"Experience",projects:"Projects"},hs={tooltip:"Select a language",english:"English",german:"German"},ms={hi:"Hi, I am",name:"Frederic Bahr",student:"a Media Informatics student",jobdescription:"a Frontend Web Developer",subtitle:"I develop occasionally well assets for the web.",info:{firstText:"I\xB4m a Software Engineer spezializing in building digital experience from the frontend perspective. Currently studying Media Informatics (Master) at",secondText:"and developing UI-Components at",htwkLink:"HTWK",jobLink:"ipoque GmbH"}},ps={gadget:"Select a gadget",empty:"Nothing",laptop:"Laptop",keyboard:"Keyboard",hiBubbleText:"Hello there! Come play with me",laptopBubbleText:"Look, my new laptop!",keyboardBubbleText:"Look, my new keyboard!"},us={tooltip:"Open the chatbot",initialMessage:{firstMessage:"Hi, I\xB4m Frederic`s ChatBot \u{1F916}",secondMessage:"How can i help you?"},sayHello:{actionText:"I just wanted to say hello",firstMessage:"Hi, whats up?",secondMessage:"Well hello there, nice to meet you!\u{1F44B}",thirdMessage:"Thanks for looking at my personal website.",fourthMessage:"I hope you enjoy my work.",fifthMessage:"Can I help you with anything else?"},showCV:{actionText:"I want to see your CV.",firstMessage:"Hey, im interested in your CV!",secondMessage:"Thanks for reaching out to me.",thirdMessage:"Underneath you can download my CV."},sendAnotherMessage:{actionText:"Send another message",firstMessage:"I would like to send another message.",secondMessage:"Ok, no problem."},directChat:{actionText:"I want to talk to you directly.",firstMessage:"I really like your Chatbot, but i would rather talk to you directly.",secondMessage:"Sad times, but I respect your decision.",thirdMessage:"Send my master a message and he will answer as soon as possible!"},formElementsLabel:{name:"Name",subject:"Subject",email:"E-Mail",message:"Message"}},gs={jobTitles:{"working-student":"Working Student",intern:"Internship","bachelor-thesis":"Bachelor Thesis "},"time-present":"Present","work-gdmcom":{statement1:"Working student in the Information and Communication Technology department",statement2:"Automation of recurring tasks in the domain of Microsoft Office Suite and file storages",statement3:"Implementing a prototype for the automated creation of an overview of business locations from file directories"},"work-ipoque-intern":{statement1:"Creation of generic Angular component(s) to present UI-components via a showcase",statement2:"Asynchronous implementation of business/render logic using RxJS",statement3:"Automated rendering of various form elements based on a custom configuration"},"work-ipoque-bachelor":{statement1:"Conception, design and implementation of a domain-specific language for the creation of component source code",statement2:"Designing and implementing a compiler for a custom programming language",statement3:"Generation of generic Angular source code based on domain-specific solution approaches using different design patterns (dependency injection, inversion of control, etc.)"},"work-ipoque-working-student":{statement1:"Further development of a domain specific language and the associated compiler with implementation of plugins for various IDEs",statement2:"Development of DevOps oriented automation scripts for continuous delivery pipelines",statement3:"Implementing various tests (unit test, integration tests, end-2-end) for the quality accurance"}},fs={dsl:{headline:"Domain-specific language",description:"A domain-specific language for the easy and expressive creation of a showcase for UI-components.",technologies:["Compiler","JavaScript","VSC Extension","Intellij Plugin","Company Confidential"]},dag:{headline:"Directed Acyclic Graph Visualization",description:"An implementation of the sugiyama algorithm using the barycenter heuristic. The app visualize a directed acyclic graph with the help of D3.",technologies:["TypeScript","D3.js","Algorithms","Visualization","University"]},weatherData:{headline:"XML Wether Data Visualization",description:"",technologies:["XML","XML Schema Definition","DTD","XSL Transformation","D3.js","University"]}};var ws={sections:ls,navbar:ds,languageMenu:hs,introduction:ms,miniMe:ps,chatbot:us,experience:gs,projects:fs};const bs={en:{translation:ws},de:{translation:cs}},ys={order:["querystring","navigator"],lookupQuerystring:"lng"};pn.use(un).use(gn).init({resources:bs,detection:ys,fallbackLng:"en",interpolation:{escapeValue:!1}});const xs="modulepreload",qe={},ks="/portfolio/",Ms=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${ks}${r}`,r in qe)return;qe[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":xs,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((l,g)=>{a.addEventListener("load",l),a.addEventListener("error",g)})})).then(()=>t())},Ss=e=>{e&&e instanceof Function&&Ms(()=>import("./web-vitals.d62816c8.js"),[]).then(({getCLS:t,getFID:n,getFCP:r,getLCP:i,getTTFB:s})=>{t(e),n(e),r(e),i(e),s(e)})},vs=fn({typography:{fontFamily:["Fira Code","Roboto",'"Oxygen"','"Ubuntu"','"Cantarell"','"Fira Sans"','"Droid Sans"','"Helvetica Neue"',"sans-serif"].join(",")},palette:{primary:{main:"#cc0e00"}}}),Cs={colors:{mainblack:"#181114",mainwhite:"#fbfffe",mainred:"#cc0e00",whitefontcolor:"#fbfffe"}};wn.render(o(W.StrictMode,{children:o(bn,{children:o(yn,{injectFirst:!0,children:o(xn,{theme:vs,children:u(kn,{theme:Cs,children:[o($n,{}),o(es,{})]})})})})}),document.getElementById("root"));Ss();
