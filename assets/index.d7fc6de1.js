var nt=Object.defineProperty;var ke=Object.getOwnPropertySymbols;var rt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var ie=(e,t,o)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Me=(e,t)=>{for(var o in t||(t={}))rt.call(t,o)&&ie(e,o,t[o]);if(ke)for(var o of ke(t))it.call(t,o)&&ie(e,o,t[o]);return e};var d=(e,t,o)=>(ie(e,typeof t!="symbol"?t+"":t,o),o);import{s as c,j as n,a as f,W as st,u as T,M as at,b as Se,T as ct,r as x,F as j,c as Q,I as B,d as lt,e as He,S as dt,l as $,L as ht,N as Ye,R as W,f as D,g as mt,h as pt,i as ee,A as ut,k as P,m as gt,n as ft,C as wt,o as Fe,p as L,q as bt,B as V,t as ve,v as Re,w as je,P as yt,x as We,y as xt,D as kt,z as Mt,E as St,G as vt,H as Ct,J as $t,K as Tt,O as zt,Q as At,U as Lt,V as Ne,X as It,Y as qe,Z as Bt,_ as Dt,$ as he,a0 as Pt,a1 as Et,a2 as Ht,a3 as Yt,a4 as h,a5 as Ft,a6 as z,a7 as C,a8 as Z,a9 as g,aa as Rt,ab as jt,ac as Wt,ad as Nt,ae as qt,af as Ze,ag as Zt,ah as Ot,ai as Xt,aj as Gt,ak as Vt,al as Ut,am as _t,an as Kt,ao as Jt,ap as Qt,aq as eo,ar as to,as as Oe,at as oo,au as se,av as no,aw as ro,ax as io,ay as so,az as ao,aA as co,aB as lo,aC as ho}from"./vendor.16bfde0e.js";const mo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}};mo();const po=c.div`
  /** 50px navbar and 2*5px padding */
  min-height: calc(100vh - 50px - 14px);
`;function uo(){return n(po,{children:"Contact"})}function go({className:e}){return f("svg",{id:"e76RbDrnTZM1",className:e,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 226.304018 200.378",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",children:[n("path",{id:"e76RbDrnTZM2",d:"M75.000003,20.999997L75.000003,43.003079L152.325119,43.003079L152.325119,20.999997L75.000003,20.999997Z",fill:"#cc0e00",stroke:"#cc0e00",strokeWidth:"0.452608",className:"svg-animated-elem-1"}),n("path",{id:"e76RbDrnTZM3",d:"M75.000003,72.550075L75.000003,156.999998L97.841297,156.999997L97.841297,94.972261L152.325119,94.97226L152.325119,72.550072L75.000003,72.550075Z",transform:"matrix(1 0 0 1 0 0.000003)",fill:"#cc0e00",stroke:"#cc0e00",strokeWidth:"0.452608",className:"svg-animated-elem-2"})]})}const A={xl:"1536px",lg:"1200px",md:"900px",sm:"600px",xs:"0px"},fo=st`
html {
  font-size: 20px;

  @media screen and (min-width: ${A.lg}) and (max-width: ${A.xl}) {
    font-size: 16px;
  }

  @media screen and (max-width: ${A.lg}){
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
`,U=400,R="all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",wo=500,_=200,me=300,bo=1e3,yo=({className:e})=>f("svg",{className:e,id:"e76RbDrnTZM1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 226.304018 200.378",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",children:[n("path",{id:"e76RbDrnTZM2",d:"M75.000003,20.999997L75.000003,43.003079L152.325119,43.003079L152.325119,20.999997L75.000003,20.999997Z",fill:"#cc0e00",stroke:"#cc0e00",strokeWidth:"0.452608",className:"svg-elem-1"}),n("path",{id:"e76RbDrnTZM3",d:"M75.000003,72.550075L75.000003,156.999998L97.841297,156.999997L97.841297,94.972261L152.325119,94.97226L152.325119,72.550072L75.000003,72.550075Z",transform:"matrix(1 0 0 1 0 0.000003)",fill:"#cc0e00",stroke:"#cc0e00",strokeWidth:"0.452608",className:"svg-elem-2"})]}),pe=[{title:"navbar.about",url:"/#about"},{title:"navbar.experience",url:"/#experience"},{title:"navbar.projects",url:"/#projects"}],xo=({open:e,anchorElement:t,onClose:o,handleClose:r})=>{const{t:i,i18n:s}=T(),a=l=>{s.changeLanguage(l),r()};return f(at,{open:e,anchorEl:t,onClose:o,children:[n(Se,{onClick:()=>a("en"),children:i("languageMenu.english")}),n(Se,{onClick:()=>a("de"),children:i("languageMenu.german")})]})},ko=c(ct)`
  color: white;
`,Xe=()=>{const{t:e}=T(),[t,o]=x.exports.useState(null),r=Boolean(t),i=a=>{o(a.currentTarget)},s=()=>{o(null)};return f(j,{children:[n(Q,{title:e("languageMenu.tooltip"),children:n(B,{onClick:i,children:n(ko,{})})}),n(xo,{anchorElement:t,onClose:s,open:r,handleClose:s})]})},Mo=c.nav`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  font-family: "Fira Code", monospace;
  color: ${e=>e.theme.colors.mainwhite};
`,So=c.ol`
  display: flex;
  flex-direction: row;
  list-style: none;
  counter-reset: item 0;
  margin-right: 1vmax;
  align-items: center;
`,Ce=c.li`
  counter-increment: item 1;
  margin: 0 10px;
  font-size: 0.8rem;
`,vo=c(lt)`
  color: ${e=>e.theme.colors.mainwhite};
`,Co=c(He)`
  color: ${e=>e.theme.colors.mainwhite};

  &:hover {
    cursor: pointer;
  }
`,$o=c(dt)`
  & .MuiPaper-root {
    background-color: transparent;
  }
`,To=c.div`
  display: grid;
  flex-direction: column;
  place-content: center;
  background-color: ${e=>$(e.theme.colors.mainblack,.3)};
  border-radius: 8px 8px 0 0;
`,zo=c.div`
  display: flex;
  width: 2rem;
  height: 6px;
  background-color: ${e=>$(e.theme.colors.mainblack,.05)};
  border-radius: 3px;
  margin-top: 0.75rem;
  justify-self: center;
`,Ao=c(ht)`
  color: ${e=>e.theme.colors.mainwhite};
  transition: ${R};
  justify-content: center;

  &:hover {
    color: ${e=>e.theme.colors.mainred};
  }
`,Lo=c(Ye)`
  text-decoration: none;
  color: inherit;
  transition: ${R};
  font-size: 1.3rem;

  &:hover {
    color: ${e=>e.theme.colors.mainred};
  }
`,Io=({isMounted:e})=>{const{t:o}=T(),[r,i]=W.useState(!1),s=l=>()=>{i(l)},a=r?n(B,{onClick:s(!1),children:n(Co,{})}):n(B,{onClick:s(!0),children:n(vo,{})});return f(j,{children:[n(Mo,{children:f(So,{children:[n(D,{in:e,timeout:_,children:n(Ce,{children:n(Xe,{})})}),n(D,{in:e,timeout:_+me,children:n(Ce,{children:a})})]})}),n($o,{anchor:"bottom",open:r,onClose:s(!1),onOpen:s(!0),swipeAreaWidth:56,disableSwipeToOpen:!1,children:f(To,{children:[n(zo,{}),n(mt,{children:pe.map((l,u)=>n(pt,{children:n(Ao,{children:n(Lo,{smooth:!0,to:l.url,onClick:s(!1),children:o(l.title)})})}))})]})})]})},Bo=c.nav`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  font-family: "Fira Code", monospace;
  color: ${e=>e.theme.colors.mainwhite};
`,Do=c.ol`
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
`,Po=c(Ye)`
  text-decoration: none;
  color: inherit;
  transition: ${R};

  &:hover {
    color: ${e=>e.theme.colors.mainred};
  }

  &::before {
    content: "0" counter(item) ".";
    color: ${e=>e.theme.colors.mainred};
    padding: 7px;
  }
`,Eo=({isMounted:e})=>{const{t}=T();return n(Bo,{children:f(Do,{children:[e&&pe.map((o,r)=>n(D,{in:e,timeout:_+r*me,children:n($e,{children:n(Po,{smooth:!0,to:o.url,children:t(o.title)})},r)},r)),n(D,{in:e,timeout:_+pe.length*me,children:n($e,{children:n(Xe,{})})})]})})},Ho=()=>{const[e,t]=x.exports.useState(!1),o=ee(`(max-width: ${A.sm})`);return x.exports.useEffect(()=>{const r=setTimeout(()=>t(!0),wo);return()=>clearTimeout(r)},[]),o?n(Io,{isMounted:e}):n(Eo,{isMounted:e})},Yo=c(ut)`
  flex-direction: row;
  background-color: ${e=>e.theme.colors.mainblack};
  padding: 5px 0;
`,Fo=c(B)`
  margin-left: 1vmax;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: ${e=>P(e.theme.colors.mainred,.7)};
  }
`,Ro=c(yo)`
  width: 50px;
  height: 50px;

  &:hover path {
    stroke: ${e=>P(e.theme.colors.mainred,.1)};
    fill: ${e=>P(e.theme.colors.mainred,.1)};
  }
`,jo=({homeClickHandler:e})=>{const t=gt({target:window,threshold:50}),o=ee(`(max-width: ${A.md})`);return f(j,{children:[n(D,{direction:"down",in:!t,timeout:U,children:f(Yo,{color:"inherit",position:o?"absolute":"fixed",children:[n(D,{direction:"down",in:!t,timeout:U,children:n(Fo,{onClick:e,children:n(Ro,{})})}),n(Ho,{})]})}),n(ft,{})]})},Wo=c.h2`
  font-size: 2rem;
  margin-bottom: 5vh;
  width: 100%;

  &:before {
    counter-increment: section;
    content: "0" counter(section) ".";
    color: ${e=>e.theme.colors.mainred};
    font-size: 1.3rem;
    margin-right: 15px;
    font-family: "Fira Code";
  }
`,ge=({children:e})=>n(Wo,{children:e}),No=c.section`
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`;function qo(){const{t:e}=T();return n(No,{id:"about",children:n(ge,{children:e("sections.about")})})}var Zo="/portfolio/assets/chatbot-avatar.2885f311.svg";const Oo=c(wt)`
  background-color: ${e=>e.theme.colors.mainblack};
  color: ${e=>e.theme.colors.mainwhite};

  .MuiCardHeader-action {
    align-self: center;
  }
`,Xo=c(Fe)`
  color: ${e=>e.theme.colors.mainwhite};
`,Te=c(L)`
  color: ${e=>e.theme.colors.mainwhite};
`,Go=c(B)`
  &:hover {
    background-color: #363636;
  }
`,Vo=({clickHandler:e})=>n(Oo,{avatar:n(bt,{alt:"Chatbo",src:Zo,variant:"square"}),title:n(Te,{sx:{fontSize:24},variant:"caption",display:"block",children:"Chatbot"}),subheader:n(Te,{variant:"caption",display:"block",children:"Ask me a question!"}),action:n(Go,{onClick:e,children:n(Xo,{})})});var Uo="/portfolio/assets/lebenslauf.8132e422.pdf";const _o=[{message:"chatbot.initialMessage.firstMessage",owner:"bot"},{message:"chatbot.initialMessage.secondMessage",owner:"bot"}],Ge={actionText:"chatbot.sayHello.actionText",messges:[{message:"chatbot.sayHello.firstMessage",owner:"customer"},{message:"chatbot.sayHello.secondMessage",owner:"bot"},{message:"chatbot.sayHello.thirdMessage",owner:"bot"},{message:"chatbot.sayHello.fourthMessage",owner:"bot"},{message:"chatbot.sayHello.fifthMessage",owner:"bot"}],furtherActions:["showCV","directChat"]},Ve={actionText:"chatbot.showCV.actionText",messges:[{message:"chatbot.showCV.firstMessage",owner:"customer"},{message:"chatbot.showCV.secondMessage",owner:"bot"},{message:"chatbot.showCV.thirdMessage",owner:"bot"},{type:"pdf",owner:"bot",url:Uo,fileName:"cv_fredericbahr"}],furtherActions:["sayHello","directChat"]},Ue=[{name:"name",label:"chatbot.formElementsLabel.name",required:!0,type:"text"},{name:"subject",label:"chatbot.formElementsLabel.subject",required:!0,type:"text"},{name:"email",label:"chatbot.formElementsLabel.email",required:!0,type:"email"},{name:"message",label:"chatbot.formElementsLabel.message",required:!0,type:"textarea"}],Ko={actionText:"chatbot.sendAnotherMessage.actionText",messges:[{message:"chatbot.sendAnotherMessage.firstMessage",owner:"customer"},{message:"chatbot.sendAnotherMessage.secondMessage",owner:"bot"},{formElements:Ue,formSubmitID:"46ac44df0ea8d59a83d300a64c763539"}],furtherActions:["sendAnotherMessage","sayHello","showCV"]},_e={actionText:"chatbot.directChat.actionText",messges:[{message:"chatbot.directChat.firstMessage",owner:"customer"},{message:"chatbot.directChat.secondMessage",owner:"bot"},{message:"chatbot.directChat.thirdMessage",owner:"bot"},{formElements:Ue,formSubmitID:"46ac44df0ea8d59a83d300a64c763539"}],furtherActions:["sendAnotherMessage","sayHello","showCV"]},N=new Map;N.set("sayHello",Ge);N.set("showCV",Ve);N.set("directChat",_e);N.set("sendAnotherMessage",Ko);const Jo=[Ge,Ve,_e];function Qo(e){return e.message!==void 0}function en(e){return e.url!==void 0}function tn(e){return e.formElements!==void 0}const on=c(V)`
  margin: 5px 0 5px 10px;
  font-size: 0.8rem;
  width: 100%;

  &:hover {
    background-color: ${e=>e.theme.colors.mainblack};
    color: ${e=>e.theme.colors.mainwhite};
  }
`,nn=({children:e,handleAction:t})=>n(on,{color:"inherit",variant:"outlined",onClick:t,children:e});var rn="/portfolio/assets/pdf-file.47f65d66.svg";function ae(e){if(e){const t=e.offsetWidth,o=e.offsetHeight;return{width:t,height:o}}return{width:0,height:0}}function sn(e){const[t,o]=x.exports.useState(ae(e));return x.exports.useEffect(()=>{o(ae(e));function r(){o(ae(e))}return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[e]),t}ve.exports.GlobalWorkerOptions.workerSrc=`//unpkg.com/pdfjs-dist@${ve.exports.version}/legacy/build/pdf.worker.min.js`;const an=c(Re)`
  margin: 0.5rem 0;
  max-width: 80%;
  background-color: rgba(70, 77, 66, 0.15);
  border-radius: 1.125rem 1.125rem 1.125rem 0;
`,cn=c(je)`
  padding: 0.8rem 0.8rem 0 0.8rem;
`,ln=c(yt)`
  & > div {
    margin: auto;
  }
`,dn=c(We)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,hn=c(L)`
  font-size: 0.8rem;
`,mn=c.img`
  width: 32px;
  height: 32px;
`,pn=({type:e,url:t,fileName:o})=>{const r=x.exports.useRef(null),i=sn(r.current),s=()=>{const l=document.createElement("a");document.body.appendChild(l),l.download=o.toString(),l.href=t.toString(),l.click(),document.body.removeChild(l)};return n(j,{children:e==="pdf"?(()=>(console.log("URL:",t),f(an,{ref:r,children:[n(xt,{onClick:()=>s(),children:n(cn,{children:n(kt,{file:t,renderMode:"svg",children:n(ln,{pageNumber:1,height:i.width,loading:n(Mt,{})})})})}),f(dn,{children:[n(mn,{src:rn}),f(hn,{children:[o,".pdf"]}),n(B,{onClick:()=>s(),children:n(St,{})})]})]})))():""})},un=c(vt)`
  & .MuiPaper-root {
    background-color: ${e=>e.theme.colors.mainblack};
    color: ${e=>e.theme.colors.whitefontcolor};
  }
`,gn=c.div`
  margin-right: 40px;
`,fn=c(B)`
  &:hover {
    background-color: ${e=>P(e.theme.colors.mainblack,.3)};
  }
`,wn=c(Ct)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-bottom-color: ${e=>e.theme.colors.mainwhite};
`,bn=c(Fe)`
  color: ${e=>e.theme.colors.whitefontcolor};
`,yn=c($t)`
  margin-top: 10px;
`,xn=c(Tt)`
  color: ${e=>e.theme.colors.whitefontcolor};
`,kn=c.form`
  display: flex;
  flex-direction: column;
`,ze=c(zt)`
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
      border-color: ${At("#fbfffe",.5)};
    }

    &:hover fieldset {
      border-color: #fbfffe;
    }

    &.Mui-focused fieldset {
      border-color: #fbfffe;
    }
  }
`,Mn=c(Lt)`
  padding: 8px 24px;
`,Sn=W.forwardRef(function(t,o){return n(D,Me({direction:"up",ref:o},t))}),vn=(e,t)=>e.map((o,r)=>o.type==="textarea"?n(ze,{autoFocus:r===0,multiline:!0,minRows:3,size:"small",name:o.name.toString(),required:o.required,label:t(o.label)}):n(ze,{autoFocus:r===0,type:o.type,name:o.name.toString(),required:o.required,label:t(o.label),size:"small"})),Cn=({formElements:e,formSubmitID:t})=>{const{t:o}=T(),[r,i]=x.exports.useState(!1);return x.exports.useEffect(()=>{const s=setTimeout(()=>i(!0),1200);return()=>clearTimeout(s)},[]),f(un,{open:r,onClose:()=>i(!1),TransitionComponent:Sn,children:[f(wn,{children:[f(gn,{children:[n(L,{gutterBottom:!0,component:"p",children:"Message me"}),n(L,{variant:"caption",component:"p",children:"I will get back to you as soon as possible."})]}),n(fn,{onClick:()=>i(!1),children:n(bn,{})})]}),f(yn,{children:[n(xn,{}),f(kn,{method:"POST",action:`https://formsubmit.co/${t}`,id:"contact-form",children:[vn(e,o),n("input",{type:"hidden",name:"_next",value:"https://fredericbahr.github.io"}),n("input",{type:"hidden",name:"_captcha",value:"false"}),n("input",{type:"text",name:"_honey",style:{display:"none"}}),n("input",{type:"hidden",name:"_template",value:"table"})]})]}),f(Mn,{children:[n(V,{onClick:()=>i(!1),children:"Cancel"}),n(V,{type:"submit",form:"contact-form",children:"Send"})]})]})},$n=c.div`
  display: flex;
  justify-content: ${e=>e.owner==="bot"?"start":"end"};
`,Tn=c.p`
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
`,zn=({children:e,owner:t})=>n(Ne,{in:!0,appear:!0,children:n($n,{owner:t,children:n(Tn,{owner:t,children:e})})}),An=c(je)`
  flex-grow: 1;
`,Ln=c(We)`
  flex-wrap: wrap;
  margin-bottom: 1vmax;
`,In=c.div`
  overflow-y: scroll;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`,Bn=()=>{const{t:e}=T(),[t,o]=x.exports.useState(_o),[r,i]=x.exports.useState(Jo),s=x.exports.useRef(null);x.exports.useEffect(()=>{k()},[t,r]);const a=()=>t.map((p,w)=>Qo(p)?n(zn,{owner:p.owner,children:e(p.message)},w):en(p)?n(pn,{owner:p.owner,type:p.type,fileName:p.fileName,url:p.url},w):tn(p)?n(Cn,{formElements:p.formElements,formSubmitID:p.formSubmitID},w):null),l=p=>{const w=[];return p.forEach(M=>{const S=N.get(M);S&&w.push(S)}),w},u=async p=>{i([]);const M=p.messges.map((S,q)=>new Promise(oe=>{setTimeout(()=>{o(ne=>[...ne,S]),oe()},q*1e3)}));await Promise.all(M),i(p.furtherActions?l(p.furtherActions):[])},k=()=>{var p;(p=s==null?void 0:s.current)==null||p.scrollIntoView({behavior:"smooth"})};return f(In,{children:[n(An,{children:a()}),n(Ln,{children:r.map((p,w)=>n(nn,{handleAction:()=>u(p),children:e(p.actionText)},w))}),n("div",{ref:s})]})},Dn=c(Re)`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 1vmax;
  right: 2vmax;
  width: 25vw;
  height: 75vh;

  @media screen and (max-width: ${A.md}) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1200;
  }
`,Pn=({clickHandler:e})=>n(D,{direction:"up",in:!0,children:f(Dn,{children:[n(Vo,{clickHandler:e}),n(Bn,{})]})}),En=c(It)`
  background-color: ${e=>$(e.theme.colors.mainblack,.05)};
  position: fixed;
  bottom: 1vmax;
  right: 2vmax;

  &:hover {
    background-color: ${e=>P(e.theme.colors.mainblack,1)};
  }
`,Hn=({clickHandler:e})=>{const{t}=T();return n(qe,{in:!0,children:n(Q,{title:t("chatbot.tooltip"),children:n(En,{onClick:e,color:"primary",children:n(Bt,{})})})})},Yn=()=>{const[e,t]=x.exports.useState(!1);return e?n(Pn,{clickHandler:()=>t(!1)}):n(Hn,{clickHandler:()=>t(!0)})},Ae=[{index:0,shortCompanyName:"ipoque",fullCompanyName:"ipoque GmbH",companyUrl:"https://www.ipoque.com/",jobTitle:"experience.jobTitles.working-student",timeRange:{from:"2021-01-01",to:"experience.time-present"},description:["experience.work-ipoque-working-student.statement1","experience.work-ipoque-working-student.statement2","experience.work-ipoque-working-student.statement3"],technologies:["Angular","TypeScript","DSL","Meta Programming","Compiler","Jest"]},{index:1,shortCompanyName:"ipoque",fullCompanyName:"ipoque GmbH",companyUrl:"https://www.ipoque.com/",jobTitle:"experience.jobTitles.bachelor-thesis",timeRange:{from:"2021-07-01",to:"2020-10-01"},description:["experience.work-ipoque-bachelor.statement1","experience.work-ipoque-bachelor.statement2","experience.work-ipoque-bachelor.statement3"],technologies:["DSL","JavaScript","Typescript","Jest","Meta Programming","Compiler"]},{index:2,shortCompanyName:"ipoque",fullCompanyName:"ipoque GmbH",companyUrl:"https://www.ipoque.com/",jobTitle:"experience.jobTitles.intern",timeRange:{from:"2021-03-01",to:"2021-05-31"},description:["experience.work-ipoque-intern.statement1","experience.work-ipoque-intern.statement2","experience.work-ipoque-intern.statement3"],technologies:["Angular","TypeScript","Generic Components"]},{index:3,shortCompanyName:"GDMcom",fullCompanyName:"GDMcom GmbH",companyUrl:"https://gdmcom.de/",jobTitle:"experience.jobTitles.working-student",timeRange:{from:"2019-06-01",to:"2020-12-01"},description:["experience.work-gdmcom.statement1","experience.work-gdmcom.statement2","experience.work-gdmcom.statement3"],technologies:["VBA","Microsoft Office Suite","Automation"]}],Fn=c(L)`
  margin: 2vh 0;
  width: 85%;
`,Rn=c.ul`
  margin: 2vh 0;
  width: 85%;
`,jn=c.li`
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
`,Wn=e=>Array.isArray(e),Nn=({description:e,className:t})=>{const{t:o}=T(),r=i=>{const s=i.map((a,l)=>n(jn,{children:o(a)},l));return n(Rn,{children:s})};return Wn(e)?r(e):n(Fn,{children:o(e)})},qn=c.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
`,Zn=c(Dt)`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem;
  background-color: ${e=>$(e.theme.colors.mainblack,.15)};
  color: ${e=>P(e.theme.colors.mainwhite,.15)};
`,On=({technologies:e=[]})=>n(qn,{children:e.map((t,o)=>n(Zn,{children:t},o))}),ce=c(L)`
  font-size: 0.9rem;
  color: ${e=>P(e.theme.colors.mainwhite,.5)};
`,Xn=e=>he(e,["YYYY-MM-DD"]).isValid(),Gn=({from:e,to:t})=>{const{t:o}=T();return f("div",{children:[n(ce,{component:"span",children:he(e).format("MMMM YYYY")}),n(ce,{component:"span",children:" - "}),n(ce,{component:"span",children:Xn(t)?he(t).format("MMMM YYYY"):o(t)})]})},Vn=c.a`
  text-decoration: none;
  color: ${e=>e.theme.colors.mainred};
  transition: ${R};
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
    transition: ${R};
    bottom: 0.2rem;
  }
`,K=({url:e,children:t})=>n(Vn,{href:e,target:"_blank",children:t}),Un=c.h3`
  display: flex;
`,_n=c(L)``,Kn=c(L)`
  margin: 0 10px;
`,Jn=({title:e,companyName:t,companyUrl:o})=>f(Un,{children:[n(_n,{component:"span",children:e}),n(Kn,{component:"span",children:"@"}),n(K,{url:o,children:t})]}),Qn=c.div`
  flex-grow: 1;
`,er=({children:e,className:t,value:o,index:r})=>n(Qn,{className:t,role:"tabpanel",hidden:o!==r,children:o===r&&n(Pt,{children:e})}),tr=c.section`
  width: 85%;
  margin: 0 auto 25vh auto;
`,or=c.div`
  display: grid;
  grid-template-columns: 1fr auto;

  @media screen and (max-width: ${A.sm}) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
  }
`,nr=c(Et)`
  @media screen and (max-width: ${A.sm}) {
    grid-row: 1/2;
    margin-bottom: 3vh;
  }
`,rr=c(Ht)`
  font-size: 1.1rem;
  text-transform: none;
  font-weight: 400;
  color: ${e=>e.theme.colors.mainwhite};

  &.Mui-selected {
    background-color: ${e=>$(e.theme.colors.mainblack,.05)};
  }
`,ir=c(er)`
  align-self: start;
`,sr=()=>{const[e,t]=W.useState(0),{t:o}=T(),r=ee(`(max-width: ${A.sm})`),i=r?"horizontal":"vertical";console.log(r);const s=(a,l)=>{t(l)};return f(tr,{id:"experience",children:[n(ge,{children:o("experience.headline")}),f(or,{children:[Ae.map(a=>f(ir,{value:e,index:a.index,children:[n(Jn,{title:o(a.jobTitle),companyName:a.fullCompanyName,companyUrl:a.companyUrl}),n(Gn,{from:a.timeRange.from,to:a.timeRange.to}),n(Nn,{description:a.description}),a.technologies&&n(On,{technologies:a.technologies})]},a.index)),n(nr,{orientation:i,variant:"scrollable",scrollButtons:"auto",allowScrollButtonsMobile:!0,onChange:s,value:e,children:Ae.map(a=>n(rr,{label:o(a.shortCompanyName)},a.index))})]})]})},ar=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5vh;
`,cr=c(L)`
  font-size: 0.8rem;
  display: block;
`,lr=c(L)`
  font-size: 0.65rem;
  margin-top: 0.3rem;
`,dr=()=>f(ar,{children:[n(cr,{children:"Designed & Build by Frederic Bahr"}),f(lr,{children:["Inspired by ",n(K,{url:"https://brittanychiang.com/",children:"Brittany Chiang"})]})]}),hr=({className:e})=>n("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",className:e,children:f("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none",children:[n("path",{d:`M2390 5113 c-905 -65 -1713 -614 -2126 -1443 -303 -608 -345 -1300\r
-120 -1947 52 -148 114 -284 144 -317 61 -65 155 -83 232 -44 69 36 103 86\r
108 161 3 55 0 72 -36 154 -81 182 -134 358 -169 558 -25 144 -25 490 0 639\r
107 632 481 1187 1033 1528 598 370 1294 417 1962 132 96 -41 113 -46 168 -42\r
48 3 70 10 99 32 69 53 97 133 76 214 -23 83 -88 129 -296 207 -354 133 -737\r
193 -1075 168z`}),n("path",{d:`M4835 5096 c-16 -8 -1106 -1091 -2422 -2408 -2157 -2159 -2392 -2397\r
-2399 -2431 -25 -144 57 -252 191 -252 45 0 69 6 95 22 19 12 1107 1094 2416\r
2405 2361 2362 2382 2383 2394 2434 21 92 -20 183 -100 224 -46 23 -130 26\r
-175 6z`}),n("path",{d:`M4630 3755 c-52 -16 -107 -65 -126 -112 -21 -49 -16 -111 12 -178\r
103 -241 161 -444 188 -653 83 -639 -150 -1299 -624 -1772 -323 -322 -719\r
-529 -1182 -617 -134 -25 -552 -25 -688 0 -186 35 -350 85 -532 161 -94 39\r
-145 45 -199 22 -127 -53 -166 -211 -76 -313 79 -90 476 -222 812 -270 175\r
-25 552 -22 730 5 332 52 625 156 904 321 682 404 1141 1103 1252 1911 18 125\r
18 498 0 615 -36 246 -95 459 -183 665 -52 122 -91 181 -136 204 -43 22 -103\r
26 -152 11z`})]})}),mr=c.div`
  display: flex;
  align-items: center;
`,pr=c.div`
  display: flex;
`,ur=c(He)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 10px;
  color: ${e=>e.theme.colors.whitefontcolor};
  background-color: ${e=>$(e.theme.colors.mainblack,.25)};
`,gr=c(Q)`
  padding: 0;
`,fr=c(Yt)`
  & .MuiPaper-root {
    background-color: transparent;
  }
`,wr=({children:e,anchorIcon:t})=>{const{t:o}=T(),[r,i]=W.useState(null),s=Boolean(r);x.exports.useEffect(()=>{l()},[t]);const a=u=>{i(u.currentTarget)},l=()=>{i(null)};return n(mr,{children:f(pr,{children:[n(gr,{title:o("miniMe.gadget"),placement:"bottom",children:n(B,{onClick:s?l:a,children:s?n(ur,{}):t})}),s&&n(fr,{open:s,anchorEl:r,onClose:l,anchorOrigin:{vertical:"center",horizontal:"left"},transformOrigin:{vertical:"center",horizontal:"right"},children:e})]})})},br=({className:e})=>n("svg",{width:"100%",height:"100%",className:e,children:n("line",{x1:"0%",y1:"50%",x2:"100%",y2:"50%",stroke:"white"})}),yr=e=>e.type==="Mesh",xr=(e,t)=>{const o=[];return e.children.forEach(r=>{if(yr(r)){const i=r.geometry.clone();r.updateMatrix(),i.applyMatrix4(r.matrix),o.push(i)}}),new h(Ft(o,!0),t)},m=150,v=400,kr=30,Mr=30,Sr=1,O=10,Le=-27,y=10,b=10,I=m*.75,fe=200,Ie=250,J=m*.75,vr=200,Ke=10,Cr=Ke,$r=1,Tr=40,zr=140,Ar=50,Lr=40,Ir=75,Br=50,Je=20,Dr=40,Qe=50,Pr=Je,Er=10,Hr=Qe,Yr=fe+10,et=15,Fr=J+10,Rr=75,jr=25,Wr=et,Nr=1,H=fe/2,we=300,te=J,qr=5,Zr=we/2,Or=te+2,X=-75,tt=H*.85,be=50,Xr=te*.85,Gr=tt,Vr=35,Ur=te+20,Be=-18.5,ue=X-we/2-be/2,De=ue-be/2,le=700,_r=120,Kr=-165,Jr=15,de=7,Qr=120,ei=-165,ti=5;class oi{constructor(){d(this,"character");d(this,"skinMat");d(this,"eyeMat");d(this,"retinaMat");d(this,"eyeBrownMat");d(this,"oralCavityMat");d(this,"tongueMat");d(this,"teethMat");d(this,"glassMat");d(this,"earMat");d(this,"shirtMat");d(this,"beltMat");d(this,"buckleMat");d(this,"legMat");d(this,"legSeperatorMat");d(this,"footMat");d(this,"hairMat");d(this,"buttonMat");d(this,"gadget");d(this,"deg2rad",t=>t*(Math.PI/180));d(this,"createHead",()=>{const t=new g(m,m,m*.75),o=new h(t,this.skinMat);o.position.set(0,v,0);const[r,i]=this.createEyesAndEyebrowns(o),s=this.createMouth(o),[a,l]=this.createGlassesAndEars(o);o.add(r,i,s,a,l),this.character.add(o)});d(this,"createEyesAndEyebrowns",t=>{const o=new g(kr,Mr,Sr),r=this.createEyes(t,o),i=this.createEyeBrowns(t,o);return[r,i]});d(this,"createEyes",(t,o)=>{const r=new z,i=new h(o,this.eyeMat);i.position.set(t.geometry.parameters.width/4,O,-t.geometry.parameters.depth/2-2);const s=new h(o,this.eyeMat);s.position.set(-t.geometry.parameters.width/4,O,-t.geometry.parameters.depth/2-2);const[a,l]=this.createRetinas();return i.add(a),s.add(l),r.add(i,s),r});d(this,"createRetinas",()=>{const t=new g(7.5,7.5,1),o=new h(t,this.retinaMat);o.position.set(-2.5,-5,-1);const r=new h(t,this.retinaMat);return r.position.set(2.5,-5,-1),[o,r]});d(this,"createEyeBrowns",(t,o)=>{const r=new z,i=new g(40,10,1),s=new h(i,this.eyeBrownMat);s.position.set(t.geometry.parameters.width/4,o.parameters.height+o.parameters.height*.5,-t.geometry.parameters.depth/2-1),s.rotateZ(this.deg2rad(2));const a=new h(i,this.eyeBrownMat);return a.position.set(-t.geometry.parameters.width/4,o.parameters.height+o.parameters.height*.5,-t.geometry.parameters.depth/2-1),a.rotateZ(this.deg2rad(-2)),r.add(s,a),r});d(this,"createMouth",t=>{const o=new z,r=new Rt(25,5,Math.PI,Math.PI),i=new g(48,5,1),s=new g(15,5,1),a=new h(r,this.oralCavityMat);a.material.side=Z,a.position.set(0,Le,-t.geometry.parameters.depth/2-1);const l=new h(i,this.teethMat);l.position.set(0,Le,-t.geometry.parameters.depth/2-1);const u=new h(s,this.tongueMat);return u.position.set(0,-46,-t.geometry.parameters.depth/2-1),o.add(a,l,u),o});d(this,"createGlassesAndEars",t=>{const o=new jt(27,32,4),r=this.createGlasses(t,o),i=this.createEars(t,o);return[r,i]});d(this,"createGlasses",(t,o)=>{const r=new z,i=new g(5,30,1),s=new g(5,17,1),a=new g(5,t.geometry.parameters.depth/2,1),l=new h(o,this.glassMat);l.position.set(t.geometry.parameters.width/4,O,-t.geometry.parameters.depth/2-1),l.rotateZ(this.deg2rad(45));const u=new h(o,this.glassMat);u.position.set(-t.geometry.parameters.width/4,O,-t.geometry.parameters.depth/2-1),u.rotateZ(this.deg2rad(45));const k=new h(i,this.glassMat);k.position.set(0,o.parameters.outerRadius/2,-t.geometry.parameters.depth/2-1),k.rotateZ(this.deg2rad(90));const p=new h(s,this.glassMat);p.position.set(l.position.x+l.geometry.parameters.innerRadius+2,o.parameters.outerRadius/2,-t.geometry.parameters.depth/2-1),p.rotateZ(this.deg2rad(90));const w=new h(s,this.glassMat);w.position.set(u.position.x-u.geometry.parameters.innerRadius-2,o.parameters.outerRadius/2,-t.geometry.parameters.depth/2-1),w.rotateZ(this.deg2rad(90));const M=new h(a,this.glassMat);M.position.set(t.geometry.parameters.width/2,o.parameters.outerRadius/2,-t.geometry.parameters.depth/4),M.rotateY(this.deg2rad(90)),M.rotateZ(this.deg2rad(90));const S=new h(a,this.glassMat);return S.position.set(-t.geometry.parameters.width/2,o.parameters.outerRadius/2,-t.geometry.parameters.depth/4),S.rotateY(this.deg2rad(90)),S.rotateZ(this.deg2rad(90)),r.add(l,u,k,p,w,M,S),r});d(this,"createEars",(t,o)=>{const r=new z,i=new g(10,30,25),s=new h(i,this.earMat);s.position.set(t.geometry.parameters.width/2+i.parameters.width/2,o.parameters.outerRadius/2,-4);const a=new h(i,this.earMat);return a.position.set(-t.geometry.parameters.width/2,o.parameters.outerRadius/2,-4),r.add(s,a),r});d(this,"createHairs",()=>{const t=new z;let o;const r=new z;let i,s=new g(y,b,I);const a=m/y;this.createTopHair(r,s,a);const l=m/y+2;this.createBackHair(r,l);const u=m*.75/y;this.createSideHair(r,s,u),this.createSideHair(r,s,u,!1),i=this.createDetailHairs(),o=xr(r,this.hairMat),t.add(o,i),this.character.add(t)});d(this,"createTopHair",(t,o,r)=>{const i=v+m/2+b/2;for(let s=0;s<r;s++){const a=new h(o,this.hairMat),l=m/2-y/2-s*y;a.position.set(l,i,0),t.add(a)}});d(this,"createBackHair",(t,o)=>{for(let r=0;r<o;r++){const i=new g(y,b,I*.6),s=new h(i,this.hairMat),a=m/2+y/2-r*y,l=v+m/2+b-i.parameters.depth/2,u=I/2;s.position.set(a,l,u),s.rotateX(this.deg2rad(90)),t.add(s)}});d(this,"createSideHair",(t,o,r,i=!0)=>{for(let s=0;s<r;s++){let a;const u=(i?1:-1)*(m/2+y/2),k=-m*.75/2+s*y;if(s===12){o=new g(y,b,I/2+25),a=new h(o,this.hairMat);const p=v+m/2+b/4-b-23.1;a.position.set(u,p,k)}else if(s===0){o=new g(y,b,I/2+10),a=new h(o,this.hairMat);const p=v+m/2+b/4-b-15.6;a.position.set(u,p,k)}else if(s===1){o=new g(y,b,I/2+7.5),a=new h(o,this.hairMat);const p=v+m/2+b/4-b-14.35;a.position.set(u,p,k)}else if(s>=10){o=new g(y,b,I/2+10),a=new h(o,this.hairMat);const p=v+m/2+b/4-b-15.6;a.position.set(u,p,k)}else if(s<4||s>=8){o=new g(y,b,I/2),a=new h(o,this.hairMat);const p=v+m/2+b/4-b-10.6;a.position.set(u,p,k)}else{o=new g(y,b,I*.4+3),a=new h(o,this.hairMat);const p=v+m/2+b/4-b-6.5;a.position.set(u,p,k)}a.rotateY(this.deg2rad(90)),a.rotateX(this.deg2rad(90)),t.add(a)}});d(this,"createDetailHairs",()=>{const t=new z;let o=new g(m*.8,b,10);const r=-m*.75/2-o.parameters.depth/2;return this.createFrontHairParting(t,r,o),this.createFrontHairRightSideDetails(t,r),this.createBackHairDetails(t),t});d(this,"createFrontHairParting",(t,o,r)=>{let i=new h(r,this.hairMat),s=m/2-r.parameters.width/2+y,a=v+m/2+b/2-r.parameters.height;i.position.set(s,a,o),t.add(i),r=new g(m*.75,b,10),i=new h(r,this.hairMat),s=m/2-r.parameters.width/2+y,a=v+m/2+b/2,i.position.set(s,a,o),t.add(i),r=new g(m*.63,b,10),i=new h(r,this.hairMat),s=m/2-r.parameters.width/2+y,a=v+m/2+b/2+r.parameters.height,i.position.set(s,a,o),t.add(i)});d(this,"createFrontHairRightSideDetails",(t,o)=>{let r=new g(m/4,b,10),i=new h(r,this.hairMat),s=-m/2-y/2,a=v+m/2-b+1.2;i.position.set(s,a,o),i.rotateZ(this.deg2rad(90)),t.add(i),r=new g(m*.225,b,10),i=new h(r,this.hairMat),s=-m/2-y/2+r.parameters.depth,a=v+m/2-6.5,i.position.set(s,a,o),i.rotateZ(this.deg2rad(90)),t.add(i),r=new g(m/5,b,10),i=new h(r,this.hairMat),s=-m/2-y/2+2*r.parameters.depth,a=v+m/2-3,i.position.set(s,a,o),i.rotateZ(this.deg2rad(90)),t.add(i),r=new g(m/5,b,10),i=new h(r,this.hairMat),s=-m/2-y/2+3*r.parameters.depth,a=v+m/2-3,i.position.set(s,a,o),i.rotateZ(this.deg2rad(90)),t.add(i),r=new g(m/5,b,10),i=new h(r,this.hairMat),s=-m/2-y/2+4*r.parameters.depth,a=v+m/2-3,i.position.set(s,a,o),i.rotateZ(this.deg2rad(90)),t.add(i),r=new g(m*.16,b,10),i=new h(r,this.hairMat),s=-m/2-y/2+5*r.parameters.depth,a=v+m/2,i.position.set(s,a,o),i.rotateZ(this.deg2rad(90)),t.add(i)});d(this,"createBackHairDetails",t=>{const o=m/y+2,r=new g(y,b,I*.6),i=Math.floor((o-1)/2),s=12,a=7;for(let l=0;l<o;l++){const u=l>i?i-(l-i):l;let k=this.getFactorForBackHairDetails(u);const p=new h(r,this.hairMat),w=m/2+y/2-l*y,M=I/2,S=v+m/2+b-r.parameters.depth/2-(s+k*a);p.rotateX(this.deg2rad(90)),p.position.set(w,S,M),t.add(p)}});d(this,"getFactorForBackHairDetails",t=>t<=1?0:t<=3?1:t<=5?2:3);d(this,"createBody",()=>{const t=new g(fe,Ie,J),o=new z,r=new h(t,this.shirtMat);r.position.set(0,vr,0);const[i,s]=this.createArms(r),a=this.createButtons();r.add(i,s,a),o.add(r),this.character.add(o)});d(this,"createButtons",()=>{const t=new z,o=4;for(let r=0;r<o;r++){const i=this.createButton(r);t.add(i)}return t});d(this,"createButton",t=>{const i=new g(Ke,Cr,$r),s=new h(i,this.buttonMat),a=-J/2-1,l=0,u=-35+Ie/2-t*50;return s.position.set(l,u,a),s});d(this,"createArms",t=>{const o=new g(Tr,zr,Ar),r=new g(Lr,Ir,Br),i=new g(Je,Dr,Qe),s=new g(Pr,Er,Hr),a=this.createArm(t.geometry,o,r,i,s),l=this.createArm(t.geometry,o,r,i,s,!1);return[a,l]});d(this,"createArm",(t,o,r,i,s,a=!0)=>{const l=new z,u=new z,k=a?1:-1,{upperArm:p,lowerArm:w,thumb:M,fingers:S}=this.createArmMeshes(o,r,i,s);return u.add(M,S),a||this.gadget&&u.add(this.gadget),p.position.set(k*(t.parameters.width/2+o.parameters.width/2),t.parameters.height/2-o.parameters.height/2,0),w.position.set(k*(t.parameters.width/2+o.parameters.width/2),p.position.y-o.parameters.height/2-w.geometry.parameters.height/2,0),M.position.set(k*(t.parameters.width/2+o.parameters.width/2+i.parameters.width/2),w.position.y-r.parameters.height/2,0),S.position.set(k*(t.parameters.width/2+o.parameters.width/2-s.parameters.width/2),w.position.y-r.parameters.height/2,0),l.add(p,w,u),l});d(this,"createArmMeshes",(t,o,r,i)=>{const s=new h(t,this.shirtMat),a=new h(o,this.skinMat),l=new h(r,this.skinMat),u=new h(i,this.skinMat);return{upperArm:s,lowerArm:a,thumb:l,fingers:u}});d(this,"createBelt",()=>{const t=new g(Yr,et,Fr),o=new g(jr,Wr,Nr),r=new h(t,this.beltMat);r.position.set(0,Rr,0);const i=new h(o,this.buckleMat);i.position.z=-1*(t.parameters.depth/2+1),r.add(i),this.character.add(r)});d(this,"createLegs",()=>{const t=new z,o=new g(H,we,te),r=new g(qr,Zr,Or),i=new h(o,this.legMat);i.position.set(o.parameters.width/2,X,0);const s=new h(o,this.legMat);s.position.set(-o.parameters.width/2,X,0);const a=new h(r,this.legSeperatorMat);a.position.set(0,X-r.parameters.height/2,0),t.add(i,s,a),this.character.add(t)});d(this,"createFeet",()=>{const t=new z,o=new g(tt,be,Xr),r=new g(Gr,Vr,Ur),i=new h(o,this.footMat);i.position.set(H/2,ue,0);const s=new h(o,this.footMat);s.position.set(-H/2,ue,0);const a=new h(r,this.footMat);a.position.set(H/2,De,Be);const l=new h(r,this.footMat);l.position.set(-H/2,De,Be),t.add(i,s,a,l),this.character.add(t)});d(this,"transform",()=>{this.character.translateY(-150),this.character.scale.set(1.1,1.1,1.1)});d(this,"setNoGadget",()=>{this.gadget=null});d(this,"setLaptop",async()=>{const o=await new Wt().loadAsync("src/assets/models/laptop/closed-laptop.gltf");o.scene.scale.set(de,de,de),o.scene.position.set(Qr,ei,ti),o.scene.rotation.set(this.deg2rad(90),0,this.deg2rad(-90)),this.gadget=o.scene});d(this,"setKeyboard",async()=>{const t=new Nt,o=new qt,r=await t.loadAsync("./src/assets/models/keyboard/keyboard.mtl");r.preload(),o.setMaterials(r);const i=await o.loadAsync("./src/assets/models/keyboard/keyboard.obj");i.scale.set(le,le,le),i.position.set(_r,Kr,Jr),i.rotation.set(this.deg2rad(90),0,this.deg2rad(-90)),this.gadget=i});d(this,"reset",()=>{this.character.clear(),this.character.position.set(0,0,0)});d(this,"draw",()=>{this.reset(),this.createHead(),this.createHairs(),this.createBody(),this.createBelt(),this.createLegs(),this.createFeet(),this.transform()});d(this,"setGadget",async t=>{const r=[this.setNoGadget,this.setLaptop,this.setKeyboard][t];r&&await r(),this.draw()});this.character=new z,this.skinMat=new C({color:"#e0bea5"}),this.eyeMat=new C({color:"#fbfffe"}),this.retinaMat=new C({color:"#0aa5ff"}),this.eyeBrownMat=new C({color:"#5a3825"}),this.oralCavityMat=new C({color:"#181114"}),this.tongueMat=new C({color:"#cc0e00"}),this.teethMat=new C({color:"#fbfffe"}),this.glassMat=new C({color:"#181114",side:Z}),this.earMat=new C({color:"#deb08e"}),this.shirtMat=new C({color:"#cc0e00"}),this.beltMat=new C({color:"#181114"}),this.buckleMat=new C({color:"#808080",side:Z}),this.legMat=new C({color:"#003049"}),this.legSeperatorMat=new C({color:"#181114"}),this.footMat=new C({color:"#f77f00"}),this.hairMat=new C({color:"#ad9032"}),this.buttonMat=new C({color:"#808080",side:Z}),this.gadget=null,this.draw()}setShirtMat(t){const o=["#cc0e00","#0aa5ff"];this.shirtMat=new C({color:o[t]})}}const F=class{constructor(){}};let G=F;d(G,"instance",null),d(G,"getMiniMe",()=>(F.instance||(F.instance=new oi),F.instance));const ni=Ze`
  0% {
    transform: translateY(-1rem);
  }
  50% {
    transform: translateY(-1.5rem);
  }
  100% {
    transform: translateY(-1rem);
  }
`,ri=Ze`
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
`,ii=c.p`
  animation: ${ni} 4s ease-in-out infinite;
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
    animation: ${ri} 4s ease-in-out infinite;
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
`,si=({show:e=!0,text:t})=>e?n(ii,{children:t}):null,ai=c.div`
  position: relative;
  width: 100%;
  height: 100%;
`,ci=c.div`
  cursor: crosshair;
  width: 100%;
  height: 100%;
`,li=c.div`
  position: absolute;
  top: 38%;
  left: 15%;
`,di=c(br)`
  width: 2rem;
`,hi=c(hr)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 10px;
  background-color: ${e=>$(e.theme.colors.mainblack,.25)};

  & g {
    fill: ${e=>e.theme.colors.whitefontcolor};
  }
`,mi=c(B)`
  padding: 0;
  margin: 0 5px;
`,pi=c(Zt)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 10px;
  color: ${e=>e.theme.colors.whitefontcolor};
  background-color: ${e=>$(e.theme.colors.mainblack,.1)};
`,ui=c(Ot)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 10px;
  color: ${e=>e.theme.colors.whitefontcolor};
  background-color: ${e=>$(e.theme.colors.mainblack,.1)};
`,gi=c(Q)`
  padding: 0;
`,fi=c.div`
  position: absolute;
  top: 0;
  left: 5%;
`,wi=()=>{const e=x.exports.useRef(null),[t,o]=x.exports.useState(0),[r,i]=x.exports.useState("miniMe.hiBubbleText"),s=6e3,a=ee(`(min-width: ${A.md})`),l=G.getMiniMe(),{t:u}=T();x.exports.useEffect(()=>{var xe;const w=new Xt;w.clear();const M=new Gt(65,window.innerWidth/window.innerHeight,.1,4e3);M.position.set(0,400,-1e3),M.lookAt(new Vt(0,0,0));const S=new Ut({alpha:!0,antialias:!0});S.setPixelRatio(window.devicePixelRatio);const q=new _t(M,S.domElement);q.update(),(xe=e.current)==null||xe.replaceChildren(S.domElement);const oe=()=>{const E=new Jt(16777215,16777215,.7),Y=new Qt(4210752,1.2);w.add(E),w.add(Y)},ne=()=>{w.add(l.character)};function ot(){const E=S.domElement,Y=E.clientWidth,re=E.clientHeight;(E.width!==Y||E.height!==re)&&(S.setSize(Y,re,!0),M.aspect=Y/re,M.updateProjectionMatrix())}const ye=function(){requestAnimationFrame(ye),ot(),q.update(),S.render(w,M)};oe(),ne(),ye()}),x.exports.useEffect(()=>{l.setGadget(t)},[t]),x.exports.useEffect(()=>{const w=setTimeout(()=>{i(null)},s);return()=>clearTimeout(w)},[r]);const k=[{id:0,icon:n(hi,{}),name:"empty"},{id:1,icon:n(pi,{}),name:"laptop"},{id:2,icon:n(ui,{}),name:"keyboard"}],p=()=>k.filter(w=>w.id!==t).map((w,M)=>n(gi,{title:u(`miniMe.${w.name}`),children:n(mi,{onClick:()=>{o(w.id),i(w.name==="empty"?null:`miniMe.${w.name}BubbleText`)},children:w.icon})},M));return a?f(ai,{children:[n(ci,{ref:e,id:"character"}),n(li,{children:f(Kt,{direction:"row",spacing:2,children:[n(wr,{anchorIcon:k[t].icon,children:p()}),n(di,{})]})}),n(Ne,{in:Boolean(r),timeout:U,children:n(fi,{children:n(si,{show:Boolean(r),text:u(r)})})})]}):null},bi=c(V)`
  text-transform: none;
  margin: 3vh auto;
`,yi=c(eo)`
  color: ${e=>e.theme.colors.mainwhite};
`,xi=({children:e,className:t,onClick:o})=>n(bi,{onClick:o,className:t,variant:"contained",startIcon:n(yi,{}),children:e});const ki=({isMounted:e})=>{const{t}=T(),o=t("introduction.name"),r=t("introduction.student"),i=t("introduction.jobdescription");return e?n(to,{options:{strings:[o,r,i,o],autoStart:!0}}):null},Mi=c.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  /** 50px navbar and 2*5vh margin */
  min-height: calc(100vh - 50px - 10vh);
  margin: 5vh auto;

  @media (max-width: ${A.md}) {
    display: flex;
  }
`,Si=c.div`
  margin: 7vh 0 0 7.5vw;

  @media screen and (max-width: ${A.md}) {
    margin: 7vh 0.5rem 0 0.5rem;
  }
`,vi=c(L)`
  color: ${e=>$(e.theme.colors.mainblack,.4)};
  font-size: 1rem;
  margin-bottom: 5vh;
`,Ci=c(L)`
  color: ${e=>$(e.theme.colors.mainblack,.8)};
  font-size: 1.5rem;
`,$i=c(L)`
  font-size: 1.1rem;
  margin-top: 10vh;
  color: ${e=>$(e.theme.colors.mainblack,.8)};
  width: 75%;

  @media screen and (max-width: ${A.md}) {
    width: 100%;
  }
`,Ti=c(xi)`
  margin: 6vh 0 3vh 0;
  padding: 1vh 2vw;
  font-size: 1rem;
`,zi=()=>{const{t:e}=T(),t=Oe(),[o,r]=x.exports.useState(!1),i=()=>{t("contact",{replace:!0})};return x.exports.useEffect(()=>{const s=setTimeout(()=>r(!0),bo);return()=>clearTimeout(s)},[]),n(qe,{in:o,timeout:U,children:f(Mi,{children:[f(Si,{children:[f(vi,{variant:"h6",component:"p",children:[e("introduction.hi")," "]}),n(ki,{isMounted:o}),n(Ci,{children:e("introduction.subtitle")}),f($i,{children:[e("introduction.info.firstText")," ",n(K,{url:"https://www.htwk-leipzig.de/startseite/",children:e("introduction.info.htwkLink")})," ",e("introduction.info.secondText")," ",n(K,{url:"https://www.ipoque.com/",children:e("introduction.info.jobLink")}),"."]}),n(Ti,{onClick:i,children:"Contact me!"})]}),n(wi,{})]})})},Ai=c.section`
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`,Li=()=>{const{t:e}=T();return n(Ai,{id:"projects",children:n(ge,{children:e("sections.projects")})})},Pe=()=>f(j,{children:[n(zi,{}),n(qo,{}),n(sr,{}),n(Li,{}),n(Yn,{}),n(dr,{})]}),Ii=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${e=>e.theme.colors.mainblack};
`,Bi=c(go)`
  width: 30vw;
  height: 30vh;
`,Di=c.div`
  background-color: ${e=>e.theme.colors.mainblack};
  color: ${e=>e.theme.colors.whitefontcolor};
`;function Pi(){const[e,t]=x.exports.useState(!0),o=Oe(),r=()=>{t(!0),o("/",{replace:!0})};return x.exports.useEffect(()=>{const i=setTimeout(()=>{t(!1)},2800);return()=>clearTimeout(i)},[e]),e?n(Ii,{children:n(Bi,{})}):f(Di,{children:[n(jo,{homeClickHandler:r}),f(oo,{children:[n(se,{path:"/",element:n(Pe,{})}),n(se,{path:"/contact",element:n(uo,{})}),n(se,{path:"*",element:n(Pe,{})})]})]})}const Ei={about:"\xDCber mich",experience:"Erfahrung",projects:"Projekte"},Hi={about:"\xDCber mich",experience:"Erfahrungen",projects:"Projekte"},Yi={tooltip:"W\xE4hle deine Sprache",english:"Englisch",german:"Deutsch"},Fi={hi:"Hi, ich bin",name:"Frederic Bahr",student:"ein Medieninformatik Student",jobdescription:"ein Frontend Web Developer",subtitle:"Ich entwickle Assets f\xFCr das Web.",info:{firstText:"Ich bin ein Software Engineer, der sich auf die Entwicklung digitaler Erfahrungen aus der Frontend-Perspektive spezialisiert hat. Derzeit studiere ich Medieninformatik (Master) an der",secondText:"und entwickle UI-Komponenten f\xFCr die",htwkLink:"HTWK",jobLink:"ipoque GmbH"}},Ri={tooltip:"Chatbot \xF6ffnen",initialMessage:{firstMessage:"Hi, Ich bin Frederic`s ChatBot \u{1F916}",secondMessage:"Wie kann ich dir helfen?"},sayHello:{actionText:"Ich wollte nur einmal Hallo sagen",firstMessage:"Hi, wie gehts?",secondMessage:"Hey, sch\xF6n dich kennenzulernen!",thirdMessage:"Danke dass du dir mein Portfolio anschaust.",fourthMessage:"Ich hoffe dir gef\xE4llt meine Arbeit.",fifthMessage:"Kann ich dir sonst irgendwie helfen?"},showCV:{actionText:"Zeig mir deinen Lebenslauf.",firstMessage:"Hey, ich interessiere mich f\xFCr deinen Lebenslauf!",secondMessage:"Danke f\xFCr dein Interesse.",thirdMessage:"Unten kannst du meinen Lebenslauf herunterladen."},sendAnotherMessage:{actionText:"Sende eine weitere Nachricht",firstMessage:"Ich w\xFCrde gerne eine weitere Nachricht senden.",secondMessage:"Ok, kein Problem."},directChat:{actionText:"Ich will mit dir pers\xF6nlich reden.",firstMessage:"Ich mag deinen Chatbot sehr, aber ich w\xFCrde gerne mit dir direkt reden.",secondMessage:"Schade, aber ich respektiere deine Entscheidung.",thirdMessage:"Schicke meinem Meister eine Nachricht, er wird so schnell wie m\xF6glich antworten!"},formElementsLabel:{name:"Name",subject:"Betreff",email:"E-Mail",message:"Nachricht"}},ji={jobTitles:{"working-student":"Werksstudent",intern:"Praktikum","bachelor-thesis":"Bachelor Thesis "},"time-present":"bis Heute","work-gdmcom":{statement1:"Werkstudent in der Abteilung Informations- und Kommunikationstechnologie",statement2:"Automatisierung von wiederkehrenden Aufgaben im Bereich der Microsoft Office Suite und Dateisystemen",statement3:"Implementierung eines Prototyps f\xFCr die automatisierte Erstellung einer \xDCbersicht von Unternehmensstandorten aus Dateiverzeichnissen"},"work-ipoque-intern":{statement1:"Erstellung generischer Angularkomponenten zur Darstellung von UI-Komponenten in einem Showcase",statement2:"Implementieren der Komponenten mit variablen Konfigurationsmustern zur benutzerdefinierten Steuerung der Visualisierung",statement3:"Automatisiertes Rendern verschiedener Formularelemente aufgrundlage einer benutzerdefinierten Konfiguration"},"work-ipoque-bachelor":{statement1:"Konzeption, Entwurf und Implementierung einer dom\xE4nenspezifischen Sprache f\xFCr die Erstellung von Komponentenquellcode",statement2:"Entwerfen und Implementieren eines Compilers f\xFCr eine eigene Programmiersprache",statement3:"Generierung von generischem Angular-Quellcode und eigene L\xF6sungsans\xE4tze mithilfe von Design Patterns (Modularisierung, Dependency Injection, etc.)"},"work-ipoque-working-student":{statement1:"Weiterentwicklung der DSL und des dazugeh\xF6rigen Compilers mit Implementierung von Plugins f\xFCr diverse IDE\xB4s",statement2:"Entwicklung interner Automatisierungsskripte f\xFCr die Continuous Delivery-Pipeline",statement3:"Entwicklung von Unit-Tests f\xFCr alle Module des Compilers"}};var Wi={sections:Ei,navbar:Hi,languageMenu:Yi,introduction:Fi,chatbot:Ri,experience:ji};const Ni={about:"About me",experience:"Experience",projects:"Projects"},qi={about:"About me",experience:"Experience",projects:"Projects"},Zi={tooltip:"Select a language",english:"English",german:"German"},Oi={hi:"Hi, I am",name:"Frederic Bahr",student:"a Media Informatics student",jobdescription:"a Frontend Web Developer",subtitle:"I develop occasionally well assets for the web.",info:{firstText:"I\xB4m a Software Engineer spezializing in building digital experience from the frontend perspective. Currently studying Media Informatics (Master) at",secondText:"and developing UI-Components at",htwkLink:"HTWK",jobLink:"ipoque GmbH"}},Xi={gadget:"Select a gadget",empty:"Nothing",laptop:"Laptop",keyboard:"Keyboard",hiBubbleText:"Hello there! Come play with me",laptopBubbleText:"Look, my new laptop!",keyboardBubbleText:"Look, my new keyboard!"},Gi={tooltip:"Open the chatbot",initialMessage:{firstMessage:"Hi, I\xB4m Frederic`s ChatBot \u{1F916}",secondMessage:"How can i help you?"},sayHello:{actionText:"I just wanted to say hello",firstMessage:"Hi, whats up?",secondMessage:"Well hello there, nice to meet you!\u{1F44B}",thirdMessage:"Thanks for looking at my personal website.",fourthMessage:"I hope you enjoy my work.",fifthMessage:"Can I help you with anything else?"},showCV:{actionText:"I want to see your CV.",firstMessage:"Hey, im interested in your CV!",secondMessage:"Thanks for reaching out to me.",thirdMessage:"Underneath you can download my CV."},sendAnotherMessage:{actionText:"Send another message",firstMessage:"I would like to send another message.",secondMessage:"Ok, no problem."},directChat:{actionText:"I want to talk to you directly.",firstMessage:"I really like your Chatbot, but i would rather talk to you directly.",secondMessage:"Sad times, but I respect your decision.",thirdMessage:"Send my master a message and he will answer as soon as possible!"},formElementsLabel:{name:"Name",subject:"Subject",email:"E-Mail",message:"Message"}},Vi={headline:"Experience",jobTitles:{"working-student":"Working Student",intern:"Internship","bachelor-thesis":"Bachelor Thesis "},"time-present":"Present","work-gdmcom":{statement1:"Working student in the Information and Communication Technology department",statement2:"Automation of recurring tasks in the domain of Microsoft Office Suite and file storages",statement3:"Implementing a prototype for the automated creation of an overview of business locations from file directories"},"work-ipoque-intern":{statement1:"Creation of generic Angular components to display UI-components in a showcase",statement2:"Implementing the components with variable configuration patterns for user-defined control of the resulting visualization",statement3:"Automated rendering of various form elements based on a custom configuration"},"work-ipoque-bachelor":{statement1:"Conception, design and implementation of a domain-specific language for the creation of component source code",statement2:"Designing and implementing a compiler for a custom programming language",statement3:"Generation of generic Angular source code and own solution approaches using design patterns (modularization, dependency injection, etc.)"},"work-ipoque-working-student":{statement1:"Further development of the DSL and the associated compiler with implementation of plugins for various IDEs",statement2:"Development of internal automation scripts for the continuous delivery pipeline",statement3:"Development of unit tests for all modules of the compiler"}};var Ui={sections:Ni,navbar:qi,languageMenu:Zi,introduction:Oi,miniMe:Xi,chatbot:Gi,experience:Vi};const _i={en:{translation:Ui},de:{translation:Wi}};no.use(ro).init({resources:_i,lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});const Ki="modulepreload",Ee={},Ji="/portfolio/",Qi=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${Ji}${r}`,r in Ee)return;Ee[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Ki,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((l,u)=>{a.addEventListener("load",l),a.addEventListener("error",u)})})).then(()=>t())},es=e=>{e&&e instanceof Function&&Qi(()=>import("./web-vitals.d62816c8.js"),[]).then(({getCLS:t,getFID:o,getFCP:r,getLCP:i,getTTFB:s})=>{t(e),o(e),r(e),i(e),s(e)})},ts=io({typography:{fontFamily:["Fira Code","Roboto",'"Oxygen"','"Ubuntu"','"Cantarell"','"Fira Sans"','"Droid Sans"','"Helvetica Neue"',"sans-serif"].join(",")},palette:{primary:{main:"#cc0e00"}}}),os={colors:{mainblack:"#181114",mainwhite:"#fbfffe",mainred:"#cc0e00",whitefontcolor:"#fbfffe"}};so.render(n(W.StrictMode,{children:n(ao,{children:n(co,{injectFirst:!0,children:n(lo,{theme:ts,children:f(ho,{theme:os,children:[n(fo,{}),n(Pi,{})]})})})})}),document.getElementById("root"));es();
