try{
var Qo=Object.create;var ut=Object.defineProperty;var en=Object.getOwnPropertyDescriptor;var tn=Object.getOwnPropertyNames;var rn=Object.getPrototypeOf,on=Object.prototype.hasOwnProperty;var w=(r,e)=>()=>(r&&(e=r(r=0)),e);var or=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),nn=(r,e)=>{for(var t in e)ut(r,t,{get:e[t],enumerable:!0})},sn=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of tn(e))!on.call(r,n)&&n!==t&&ut(r,n,{get:()=>e[n],enumerable:!(o=en(e,n))||o.enumerable});return r};var an=(r,e,t)=>(t=r!=null?Qo(rn(r)):{},sn(e||!r||!r.__esModule?ut(t,"default",{value:r,enumerable:!0}):t,r));var d=w(()=>{});var y,u=w(()=>{y={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}});var p=w(()=>{});var zs,Us,Ds,ir,Hs,Ys,Ws,Gs,qs,Zs,Xs,Ks,Js,ar,Qs,ei,ti,ri,oi,ni,si,ii,je,ai,Fe,li,ci,se,di,ui,pi,hi,V,fi,mi,gi,lr,yi,vi,bi,xi,_i,wi,Si,Pi,Ti,Ci,ki,cr,Ei,Ni,Mi,Oi,Ri,Ai,$i,Bi,Ii,ji,Fi,Li,Vi,zi,Ui,Di,Hi,Y=w(()=>{d();u();p();zs=__STORYBOOKCOMPONENTS__,{A:Us,ActionBar:Ds,AddonPanel:ir,Badge:Hs,Bar:Ys,Blockquote:Ws,Button:Gs,Code:qs,DL:Zs,Div:Xs,DocumentWrapper:Ks,ErrorFormatter:Js,FlexBar:ar,Form:Qs,H1:ei,H2:ti,H3:ri,H4:oi,H5:ni,H6:si,HR:ii,IconButton:je,IconButtonSkeleton:ai,Icons:Fe,Img:li,LI:ci,Link:se,ListItem:di,Loader:ui,OL:pi,P:hi,Placeholder:V,Pre:fi,ResetWrapper:mi,ScrollArea:gi,Separator:lr,Spaced:yi,Span:vi,StorybookIcon:bi,StorybookLogo:xi,Symbols:_i,SyntaxHighlighter:wi,TT:Si,TabBar:Pi,TabButton:Ti,TabWrapper:Ci,Table:ki,Tabs:cr,TabsState:Ei,TooltipLinkList:Ni,TooltipMessage:Mi,TooltipNote:Oi,UL:Ri,WithTooltip:Ai,WithTooltipPure:$i,Zoom:Bi,codeCommon:Ii,components:ji,createCopyToClipboardFunction:Fi,getStoryHref:Li,icons:Vi,interleaveSeparators:zi,nameSpaceClassNames:Ui,resetComponents:Di,withReset:Hi}=__STORYBOOKCOMPONENTS__});var Zi,Xi,Ki,Ji,Qi,ea,ta,ra,oa,na,sa,ia,A,aa,la,ca,da,m,ua,pa,ha,fa,ma,ga,ya,B=w(()=>{d();u();p();Zi=__STORYBOOKTHEMING__,{CacheProvider:Xi,ClassNames:Ki,Global:Ji,ThemeProvider:Qi,background:ea,color:ta,convert:ra,create:oa,createCache:na,createGlobal:sa,createReset:ia,css:A,darken:aa,ensure:la,ignoreSsrWarning:ca,isPropValid:da,jsx:m,keyframes:ua,lighten:pa,styled:ha,themes:fa,typography:ma,useTheme:ga,withTheme:ya}=__STORYBOOKTHEMING__});var ka,Ea,dr,k,Na,Ma,Oa,ur,Ra,Aa,$a,ht,Ba,Ia,ft,ja,pr,Fa,I,La,Va,C,mt,za,Q,Ua,Da,E,Ha,$=w(()=>{d();u();p();ka=__REACT__,{Children:Ea,Component:dr,Fragment:k,Profiler:Na,PureComponent:Ma,StrictMode:Oa,Suspense:ur,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ra,cloneElement:Aa,createContext:$a,createElement:ht,createFactory:Ba,createRef:Ia,forwardRef:ft,isValidElement:ja,lazy:pr,memo:Fa,useCallback:I,useContext:La,useDebugValue:Va,useEffect:C,useImperativeHandle:mt,useLayoutEffect:za,useMemo:Q,useReducer:Ua,useRef:Da,useState:E,version:Ha}=__REACT__});var yt,fe,dn,un,pn,hr,fr,mr,Ve=w(()=>{d();u();p();$();B();Y();yt=function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},fe=function(r){var e=r.config,t=r.defer,o=t===void 0?!1:t,n=E(o?void 0:e.url),s=n[0],i=n[1],l=E(!1),a=l[0],c=l[1];return C(function(){if(o){var h=requestAnimationFrame(function(){i(e.url)});return function(){return cancelAnimationFrame(h)}}},[o,e.url]),C(function(){c(!1)},[s]),m("div",{css:dn},!a&&m(V,{css:un},"Loading..."),m("iframe",{css:pn,src:s,allowFullScreen:e.allowFullscreen,onLoad:function(){return c(!0)}}))},dn=A(hr||(hr=yt([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`]))),un=A(fr||(fr=yt([`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`],[`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`]))),pn=A(mr||(mr=yt([`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`],[`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`])))});var vt,hn,gr,bt=w(()=>{d();u();p();$();B();Ve();vt=/https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,hn=function(r){return vt.test(r)},gr=function(r){var e=r.config,t=Q(function(){var o=hn(e.url);if(!o)return console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),e;var n=e.embedHost||location.hostname,s="https://www.figma.com/embed?embed_host=".concat(n,"&url=").concat(e.url);return{url:s,allowFullscreen:e.allowFullscreen}},[e.url,e.allowFullscreen,e.embedHost]);return m(fe,{defer:!0,config:t})}});var wt,St,ie,ae=w(()=>{d();u();p();wt=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,St=(r,e,t=null,o=null)=>{for(;e!==t;){let n=e.nextSibling;r.insertBefore(e,o),e=n}},ie=(r,e,t=null)=>{for(;e!==t;){let o=e.nextSibling;r.removeChild(e),e=o}}});var z,Pt,Ar,ge,le,$r,Te,W,ze,ee=w(()=>{d();u();p();z=`{{lit-${String(Math.random()).slice(2)}}}`,Pt=`<!--${z}-->`,Ar=new RegExp(`${z}|${Pt}`),ge="$lit$",le=class{constructor(e,t){this.parts=[],this.element=t;let o=[],n=[],s=document.createTreeWalker(t.content,133,null,!1),i=0,l=-1,a=0,{strings:c,values:{length:h}}=e;for(;a<h;){let f=s.nextNode();if(f===null){s.currentNode=n.pop();continue}if(l++,f.nodeType===1){if(f.hasAttributes()){let g=f.attributes,{length:S}=g,x=0;for(let _=0;_<S;_++)$r(g[_].name,ge)&&x++;for(;x-- >0;){let _=c[a],T=ze.exec(_)[2],N=T.toLowerCase()+ge,H=f.getAttribute(N);f.removeAttribute(N);let L=H.split(Ar);this.parts.push({type:"attribute",index:l,name:T,strings:L}),a+=L.length-1}}f.tagName==="TEMPLATE"&&(n.push(f),s.currentNode=f.content)}else if(f.nodeType===3){let g=f.data;if(g.indexOf(z)>=0){let S=f.parentNode,x=g.split(Ar),_=x.length-1;for(let T=0;T<_;T++){let N,H=x[T];if(H==="")N=W();else{let L=ze.exec(H);L!==null&&$r(L[2],ge)&&(H=H.slice(0,L.index)+L[1]+L[2].slice(0,-ge.length)+L[3]),N=document.createTextNode(H)}S.insertBefore(N,f),this.parts.push({type:"node",index:++l})}x[_]===""?(S.insertBefore(W(),f),o.push(f)):f.data=x[_],a+=_}}else if(f.nodeType===8)if(f.data===z){let g=f.parentNode;(f.previousSibling===null||l===i)&&(l++,g.insertBefore(W(),f)),i=l,this.parts.push({type:"node",index:l}),f.nextSibling===null?f.data="":(o.push(f),l--),a++}else{let g=-1;for(;(g=f.data.indexOf(z,g+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}for(let f of o)f.parentNode.removeChild(f)}},$r=(r,e)=>{let t=r.length-e.length;return t>=0&&r.slice(t)===e},Te=r=>r.index!==-1,W=()=>document.createComment(""),ze=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/});function Ct(r,e){let{element:{content:t},parts:o}=r,n=document.createTreeWalker(t,Tt,null,!1),s=Ce(o),i=o[s],l=-1,a=0,c=[],h=null;for(;n.nextNode();){l++;let f=n.currentNode;for(f.previousSibling===h&&(h=null),e.has(f)&&(c.push(f),h===null&&(h=f)),h!==null&&a++;i!==void 0&&i.index===l;)i.index=h!==null?-1:i.index-a,s=Ce(o,s),i=o[s]}c.forEach(f=>f.parentNode.removeChild(f))}function Br(r,e,t=null){let{element:{content:o},parts:n}=r;if(t==null){o.appendChild(e);return}let s=document.createTreeWalker(o,Tt,null,!1),i=Ce(n),l=0,a=-1;for(;s.nextNode();)for(a++,s.currentNode===t&&(l=wn(e),t.parentNode.insertBefore(e,t));i!==-1&&n[i].index===a;){if(l>0){for(;i!==-1;)n[i].index+=l,i=Ce(n,i);return}i=Ce(n,i)}}var Tt,wn,Ce,Ir=w(()=>{d();u();p();ee();Tt=133;wn=r=>{let e=r.nodeType===11?0:1,t=document.createTreeWalker(r,Tt,null,!1);for(;t.nextNode();)e++;return e},Ce=(r,e=-1)=>{for(let t=e+1;t<r.length;t++){let o=r[t];if(Te(o))return t}return-1}});var jr,kt,ce,Et=w(()=>{d();u();p();jr=new WeakMap,kt=r=>(...e)=>{let t=r(...e);return jr.set(t,!0),t},ce=r=>typeof r=="function"&&jr.has(r)});var F,Ue,Nt=w(()=>{d();u();p();F={},Ue={}});var te,De=w(()=>{d();u();p();ae();ee();te=class{constructor(e,t,o){this.__parts=[],this.template=e,this.processor=t,this.options=o}update(e){let t=0;for(let o of this.__parts)o!==void 0&&o.setValue(e[t]),t++;for(let o of this.__parts)o!==void 0&&o.commit()}_clone(){let e=wt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],o=this.template.parts,n=document.createTreeWalker(e,133,null,!1),s=0,i=0,l,a=n.nextNode();for(;s<o.length;){if(l=o[s],!Te(l)){this.__parts.push(void 0),s++;continue}for(;i<l.index;)i++,a.nodeName==="TEMPLATE"&&(t.push(a),n.currentNode=a.content),(a=n.nextNode())===null&&(n.currentNode=t.pop(),a=n.nextNode());if(l.type==="node"){let c=this.processor.handleTextExpression(this.options);c.insertAfterNode(a.previousSibling),this.__parts.push(c)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,l.name,l.strings,this.options));s++}return wt&&(document.adoptNode(e),customElements.upgrade(e)),e}}});var Fr,Sn,G,ye,He=w(()=>{d();u();p();ae();ee();Fr=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:r=>r}),Sn=` ${z} `,G=class{constructor(e,t,o,n){this.strings=e,this.values=t,this.type=o,this.processor=n}getHTML(){let e=this.strings.length-1,t="",o=!1;for(let n=0;n<e;n++){let s=this.strings[n],i=s.lastIndexOf("<!--");o=(i>-1||o)&&s.indexOf("-->",i+1)===-1;let l=ze.exec(s);l===null?t+=s+(o?Sn:Pt):t+=s.substr(0,l.index)+l[1]+l[2]+ge+l[3]+z}return t+=this.strings[e],t}getTemplateElement(){let e=document.createElement("template"),t=this.getHTML();return Fr!==void 0&&(t=Fr.createHTML(t)),e.innerHTML=t,e}},ye=class extends G{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){let e=super.getTemplateElement(),t=e.content,o=t.firstChild;return t.removeChild(o),St(t,o.firstChild),e}}});var We,Ye,ve,de,X,ke,Ee,be,Lr,Ne,Pn,Ge=w(()=>{d();u();p();Et();ae();Nt();De();He();ee();We=r=>r===null||!(typeof r=="object"||typeof r=="function"),Ye=r=>Array.isArray(r)||!!(r&&r[Symbol.iterator]),ve=class{constructor(e,t,o){this.dirty=!0,this.element=e,this.name=t,this.strings=o,this.parts=[];for(let n=0;n<o.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new de(this)}_getValue(){let e=this.strings,t=e.length-1,o=this.parts;if(t===1&&e[0]===""&&e[1]===""){let s=o[0].value;if(typeof s=="symbol")return String(s);if(typeof s=="string"||!Ye(s))return s}let n="";for(let s=0;s<t;s++){n+=e[s];let i=o[s];if(i!==void 0){let l=i.value;if(We(l)||!Ye(l))n+=typeof l=="string"?l:String(l);else for(let a of l)n+=typeof a=="string"?a:String(a)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},de=class{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==F&&(!We(e)||e!==this.value)&&(this.value=e,ce(e)||(this.committer.dirty=!0))}commit(){for(;ce(this.value);){let e=this.value;this.value=F,e(this)}this.value!==F&&this.committer.commit()}},X=class{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(W()),this.endNode=e.appendChild(W())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=W()),e.__insert(this.endNode=W())}insertAfterPart(e){e.__insert(this.startNode=W()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;ce(this.__pendingValue);){let t=this.__pendingValue;this.__pendingValue=F,t(this)}let e=this.__pendingValue;e!==F&&(We(e)?e!==this.value&&this.__commitText(e):e instanceof G?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Ye(e)?this.__commitIterable(e):e===Ue?(this.value=Ue,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){let t=this.startNode.nextSibling;e=e??"";let o=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){let t=this.options.templateFactory(e);if(this.value instanceof te&&this.value.template===t)this.value.update(e.values);else{let o=new te(t,e.processor,this.options),n=o._clone();o.update(e.values),this.__commitNode(n),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());let t=this.value,o=0,n;for(let s of e)n=t[o],n===void 0&&(n=new X(this.options),t.push(n),o===0?n.appendIntoPart(this):n.insertAfterPart(t[o-1])),n.setValue(s),n.commit(),o++;o<t.length&&(t.length=o,this.clear(n&&n.endNode))}clear(e=this.startNode){ie(this.startNode.parentNode,e.nextSibling,this.endNode)}},ke=class{constructor(e,t,o){if(this.value=void 0,this.__pendingValue=void 0,o.length!==2||o[0]!==""||o[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;ce(this.__pendingValue);){let t=this.__pendingValue;this.__pendingValue=F,t(this)}if(this.__pendingValue===F)return;let e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=F}},Ee=class extends ve{constructor(e,t,o){super(e,t,o),this.single=o.length===2&&o[0]===""&&o[1]===""}_createPart(){return new be(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},be=class extends de{},Lr=!1;(()=>{try{let r={get capture(){return Lr=!0,!1}};window.addEventListener("test",r,r),window.removeEventListener("test",r,r)}catch{}})();Ne=class{constructor(e,t,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=o,this.__boundHandleEvent=n=>this.handleEvent(n)}setValue(e){this.__pendingValue=e}commit(){for(;ce(this.__pendingValue);){let s=this.__pendingValue;this.__pendingValue=F,s(this)}if(this.__pendingValue===F)return;let e=this.__pendingValue,t=this.value,o=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=e!=null&&(t==null||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=Pn(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=F}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}},Pn=r=>r&&(Lr?{capture:r.capture,passive:r.passive,once:r.once}:r.capture)});function Mt(r){let e=ue.get(r.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},ue.set(r.type,e));let t=e.stringsArray.get(r.strings);if(t!==void 0)return t;let o=r.strings.join(z);return t=e.keyString.get(o),t===void 0&&(t=new le(r,r.getTemplateElement()),e.keyString.set(o,t)),e.stringsArray.set(r.strings,t),t}var ue,qe=w(()=>{d();u();p();ee();ue=new Map});var re,Ot,Rt=w(()=>{d();u();p();ae();Ge();qe();re=new WeakMap,Ot=(r,e,t)=>{let o=re.get(e);o===void 0&&(ie(e,e.firstChild),re.set(e,o=new X(Object.assign({templateFactory:Mt},t))),o.appendInto(e)),o.setValue(r),o.commit()}});var Ze,Xe,At=w(()=>{d();u();p();Ge();Ze=class{handleAttributeExpressions(e,t,o,n){let s=t[0];return s==="."?new Ee(e,t.slice(1),o).parts:s==="@"?[new Ne(e,t.slice(1),n.eventContext)]:s==="?"?[new ke(e,t.slice(1),o)]:new ve(e,t,o).parts}handleTextExpression(e){return new X(e)}},Xe=new Ze});var P,M,Ke=w(()=>{d();u();p();At();He();At();Et();ae();Nt();Ge();Rt();qe();De();He();ee();typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");P=(r,...e)=>new G(r,e,"html",Xe),M=(r,...e)=>new ye(r,e,"svg",Xe)});var Vr,Je,Tn,Cn,kn,zr,En,Ur,Dr=w(()=>{d();u();p();ae();Ir();Rt();qe();De();ee();Ke();Vr=(r,e)=>`${r}--${e}`,Je=!0;typeof window.ShadyCSS>"u"?Je=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Je=!1);Tn=r=>e=>{let t=Vr(e.type,r),o=ue.get(t);o===void 0&&(o={stringsArray:new WeakMap,keyString:new Map},ue.set(t,o));let n=o.stringsArray.get(e.strings);if(n!==void 0)return n;let s=e.strings.join(z);if(n=o.keyString.get(s),n===void 0){let i=e.getTemplateElement();Je&&window.ShadyCSS.prepareTemplateDom(i,r),n=new le(e,i),o.keyString.set(s,n)}return o.stringsArray.set(e.strings,n),n},Cn=["html","svg"],kn=r=>{Cn.forEach(e=>{let t=ue.get(Vr(e,r));t!==void 0&&t.keyString.forEach(o=>{let{element:{content:n}}=o,s=new Set;Array.from(n.querySelectorAll("style")).forEach(i=>{s.add(i)}),Ct(o,s)})})},zr=new Set,En=(r,e,t)=>{zr.add(r);let o=t?t.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:s}=n;if(s===0){window.ShadyCSS.prepareTemplateStyles(o,r);return}let i=document.createElement("style");for(let c=0;c<s;c++){let h=n[c];h.parentNode.removeChild(h),i.textContent+=h.textContent}kn(r);let l=o.content;t?Br(t,i,l.firstChild):l.insertBefore(i,l.firstChild),window.ShadyCSS.prepareTemplateStyles(o,r);let a=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&a!==null)e.insertBefore(a.cloneNode(!0),e.firstChild);else if(t){l.insertBefore(i,l.firstChild);let c=new Set;c.add(i),Ct(t,c)}},Ur=(r,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");let o=t.scopeName,n=re.has(e),s=Je&&e.nodeType===11&&!!e.host,i=s&&!zr.has(o),l=i?document.createDocumentFragment():e;if(Ot(r,l,Object.assign({templateFactory:Tn(o)},t)),i){let a=re.get(l);re.delete(l);let c=a.value instanceof te?a.value.template:void 0;En(o,l,c),ie(e,e.firstChild),e.appendChild(l),re.set(e,a)}!n&&s&&window.ShadyCSS.styleElement(e.host)}});var Hr,Lt,Yr,$t,Bt,It,jt,Ft,Vt,xe,Qe=w(()=>{d();u();p();window.JSCompiler_renameProperty=(r,e)=>r;Lt={toAttribute(r,e){switch(e){case Boolean:return r?"":null;case Object:case Array:return r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){switch(e){case Boolean:return r!==null;case Number:return r===null?null:Number(r);case Object:case Array:return JSON.parse(r)}return r}},Yr=(r,e)=>e!==r&&(e===e||r===r),$t={attribute:!0,type:String,converter:Lt,reflect:!1,hasChanged:Yr},Bt=1,It=4,jt=8,Ft=16,Vt="finalized",xe=class extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();let e=[];return this._classProperties.forEach((t,o)=>{let n=this._attributeNameForProperty(o,t);n!==void 0&&(this._attributeToPropertyMap.set(n,o),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;let e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,o)=>this._classProperties.set(o,t))}}static createProperty(e,t=$t){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;let o=typeof e=="symbol"?Symbol():`__${e}`,n=this.getPropertyDescriptor(e,o,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){let s=this[e];this[t]=n,this.requestUpdateInternal(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||$t}static finalize(){let e=Object.getPrototypeOf(this);if(e.hasOwnProperty(Vt)||e.finalize(),this[Vt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){let t=this.properties,o=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(let n of o)this.createProperty(n,t[n])}}static _attributeNameForProperty(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,o=Yr){return o(e,t)}static _propertyValueFromAttribute(e,t){let o=t.type,n=t.converter||Lt,s=typeof n=="function"?n:n.fromAttribute;return s?s(e,o):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;let o=t.type,n=t.converter;return(n&&n.toAttribute||Lt.toAttribute)(e,o)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){let o=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,o)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,o){t!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,t,o=$t){let n=this.constructor,s=n._attributeNameForProperty(e,o);if(s!==void 0){let i=n._propertyValueToAttribute(t,o);if(i===void 0)return;this._updateState=this._updateState|jt,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._updateState=this._updateState&~jt}}_attributeToProperty(e,t){if(this._updateState&jt)return;let o=this.constructor,n=o._attributeToPropertyMap.get(e);if(n!==void 0){let s=o.getPropertyOptions(n);this._updateState=this._updateState|Ft,this[n]=o._propertyValueFromAttribute(t,s),this._updateState=this._updateState&~Ft}}requestUpdateInternal(e,t,o){let n=!0;if(e!==void 0){let s=this.constructor;o=o||s.getPropertyOptions(e),s._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),o.reflect===!0&&!(this._updateState&Ft)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|It;try{await this._updatePromise}catch{}let e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&It}get hasUpdated(){return this._updateState&Bt}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1,t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(o){throw e=!1,this._markUpdated(),o}e&&(this._updateState&Bt||(this._updateState=this._updateState|Bt,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~It}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,o)=>this._propertyToAttribute(o,this[o],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}};Hr=Vt;xe[Hr]=!0});function O(r){return(e,t)=>t!==void 0?Mn(r,e,t):Nn(r,e)}var Nn,Mn,Wr,eu,Gr=w(()=>{d();u();p();Nn=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(t){t.createProperty(e.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}},Mn=(r,e,t)=>{e.constructor.createProperty(t,r)};Wr=Element.prototype,eu=Wr.msMatchesSelector||Wr.webkitMatchesSelector});var et,zt,Me,qr,On,j,Ut=w(()=>{d();u();p();et=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zt=Symbol(),Me=class{constructor(e,t){if(t!==zt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(et?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}},qr=r=>new Me(String(r),zt),On=r=>{if(r instanceof Me)return r.cssText;if(typeof r=="number")return r;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${r}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},j=(r,...e)=>{let t=e.reduce((o,n,s)=>o+On(n)+r[s+1],r[0]);return new Me(t,zt)}});var Zr,K,U=w(()=>{d();u();p();Dr();Qe();Qe();Qe();Gr();Ke();Ut();Ut();(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");Zr={},K=class extends xe{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;let e=this.getStyles();if(Array.isArray(e)){let t=(s,i)=>s.reduceRight((l,a)=>Array.isArray(a)?t(a,l):(l.add(a),l),i),o=t(e,new Set),n=[];o.forEach(s=>n.unshift(s)),this._styles=n}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!et){let o=Array.prototype.slice.call(t.cssRules).reduce((n,s)=>n+s.cssText,"");return qr(o)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){let e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):et?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){let t=this.render();super.update(e),t!==Zr&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(o=>{let n=document.createElement("style");n.textContent=o.cssText,this.renderRoot.appendChild(n)}))}render(){return Zr}};K.finalized=!0;K.render=Ur;K.shadowRootOptions={mode:"open"}});var J,Xr,tt=w(()=>{d();u();p();U();J=({title:r,children:e})=>P`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${r}</span
      >
      <span class="error-description">${e}</span>
    </div>
  </div>
`,Xr=j`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`});var Kr,pe,rt=w(()=>{d();u();p();Ke();Kr=new WeakMap,pe=kt(r=>e=>{if(!(e instanceof de)||e instanceof be||e.committer.name!=="style"||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");let{committer:t}=e,{style:o}=t.element,n=Kr.get(e);n===void 0&&(o.cssText=t.strings.join(" "),Kr.set(e,n=new Set)),n.forEach(s=>{s in r||(n.delete(s),s.indexOf("-")===-1?o[s]=null:o.removeProperty(s))});for(let s in r)n.add(s),s.indexOf("-")===-1?o[s]=r[s]:o.setProperty(s,r[s])})});function Jr(r){return{top:r.y,right:r.x+r.width,bottom:r.y+r.height,left:r.x}}function eo(r,e){let t=Jr(r),o=Jr(e),n=!(t.top>o.bottom||t.bottom<o.top),s=!(t.left>o.right||t.right<o.left);if(s&&n){let h={x:(Math.max(t.left,o.left)+Math.min(t.right,o.right))/2,y:(Math.max(t.top,o.top)+Math.min(t.bottom,o.bottom))/2};return[{points:[{x:t.left,y:h.y},{x:o.left,y:h.y}]},{points:[{x:t.right,y:h.y},{x:o.right,y:h.y}]},{points:[{y:t.top,x:h.x},{y:o.top,x:h.x}]},{points:[{y:t.bottom,x:h.x},{y:o.bottom,x:h.x}]}]}let i=t.left>o.right,l=t.top>o.bottom,a={x:r.x+r.width/2,y:r.y+r.height/2};return[s?null:{points:[{x:i?t.left:t.right,y:a.y},{x:i?o.right:o.left,y:a.y}],bisector:n?void 0:[{x:i?o.right:o.left,y:a.y},{x:i?o.right:o.left,y:l?o.bottom:o.top}]},n?null:{points:[{y:l?t.top:t.bottom,x:a.x},{y:l?o.bottom:o.top,x:a.x}],bisector:s?void 0:[{y:l?o.bottom:o.top,x:a.x},{y:l?o.bottom:o.top,x:i?o.right:o.left}]}].filter(h=>!!h)}function Oe(r){return Math.round(r*100)/100}function ot(r,e){return[...Qr(r),...Qr(e)]}function Qr(r){return r?r instanceof Array?r:[r]:[]}var Re=w(()=>{d();u();p()});var Rn,to,ro=w(()=>{d();u();p();U();Rn=function(r,e,t,o){var n=arguments.length,s=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(i=r[l])&&(s=(n<3?i(s):n>3?i(e,t,s):i(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},to=r=>{class e extends r{constructor(...o){super(...o),this.selectedNode=null}updated(o){super.updated(o),o.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return Rn([O({attribute:!1})],e.prototype,"selectedNode",void 0),e}});function nt(r){return r.touches.length===0||r.touches.length>2}function An(r,e){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}var oo,no=w(()=>{d();u();p();oo=r=>class extends r{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",o=>{nt(o)||(o.preventDefault(),this.previousTouches=o.touches)}),this.addEventListener("touchend",o=>{nt(o)||(o.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",o=>{nt(o)||(o.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",o=>{if(nt(o))return;let n=Array.from(this.previousTouches||[]),s=Array.from(o.touches);if(this.previousTouches=o.touches,!(s.length!==n.length||!s.every(i=>n.some(l=>l.identifier===i.identifier)))){if(s.length===1){this.onTouchPan({x:s[0].pageX-n[0].pageX,y:s[0].pageY-n[0].pageY});return}this.onTouchPinch(An({x:s[0].pageX,y:s[0].pageY},{x:n[0].pageX,y:n[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}}});var Ae,q,so,io,ao=w(()=>{d();u();p();U();no();Ae=function(r,e,t,o){var n=arguments.length,s=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(i=r[l])&&(s=(n<3?i(s):n>3?i(e,t,s):i(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},q=function(r,e){if(!e.has(r))throw new TypeError("attempted to get private field on non-instance");return e.get(r)},so=function(r,e,t){if(!e.has(r))throw new TypeError("attempted to set private field on non-instance");return e.set(r,t),t},io=r=>{var e,t,o,n,s;class i extends oo(r){constructor(...a){super(...a),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,e.set(this,!1),t.set(this,(h,f)=>{this.panX+=h/this.scale/window.devicePixelRatio,this.panY+=f/this.scale/window.devicePixelRatio}),o.set(this,h=>{h.code==="Space"&&!q(this,e)&&(so(this,e,!0),document.body.style.cursor="grab")}),n.set(this,h=>{h.code==="Space"&&q(this,e)&&(so(this,e,!1),document.body.style.cursor="auto")}),s.set(this,()=>{document.addEventListener("keyup",q(this,n)),document.addEventListener("keydown",q(this,o))}),this.addEventListener("wheel",h=>{if(this.isMovable)if(h.preventDefault(),h.ctrlKey){let{deltaY:f}=h;h.deltaMode===1&&(f*=15);let g=this.scale;this.scale*=1-f/((1e3-this.zoomSpeed)*.5);let S=h.offsetX-this.offsetWidth/2,x=h.offsetY-this.offsetHeight/2;this.panX+=S/this.scale-S/g,this.panY+=x/this.scale-x/g}else{let f=this.panSpeed*.002;this.panX-=h.deltaX*f/this.scale,this.panY-=h.deltaY*f/this.scale}},{passive:!1});let c=1;this.addEventListener("gesturestart",h=>{h.preventDefault(),c=this.scale}),this.addEventListener("gesturechange",h=>{let f=h;f.preventDefault(),this.scale=c*f.scale}),this.addEventListener("pointermove",h=>{h.buttons&4&&(h.preventDefault(),q(this,t).call(this,h.movementX,h.movementY))}),q(this,s).call(this),this.onmousedown=()=>{q(this,e)&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:h,movementY:f})=>{q(this,t).call(this,h,f)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",q(this,n)),document.removeEventListener("keydown",q(this,o)),super.disconnectedCallback()}updated(a){super.updated(a),a.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(a.has("panX")||a.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(a){this.panX+=a.x/this.scale,this.panY+=a.y/this.scale}onTouchPinch(a){this.scale*=1-a/1e3}}return e=new WeakMap,t=new WeakMap,o=new WeakMap,n=new WeakMap,s=new WeakMap,Ae([O({attribute:!1})],i.prototype,"panX",void 0),Ae([O({attribute:!1})],i.prototype,"panY",void 0),Ae([O({attribute:!1})],i.prototype,"scale",void 0),Ae([O({type:Number,attribute:"zoom-speed"})],i.prototype,"zoomSpeed",void 0),Ae([O({type:Number,attribute:"pan-speed"})],i.prototype,"panSpeed",void 0),i}});var $n,Bn,lo,co,uo,po=w(()=>{d();u();p();U();rt();Re();$n=({guide:r,reverseScale:e})=>{let t=Math.abs(r.points[0].x-r.points[1].x),o=Math.abs(r.points[0].y-r.points[1].y);return t===0&&o===0?null:M`
    <line
      class="distance-line"
      x1=${r.points[0].x}
      y1=${r.points[0].y}
      x2=${r.points[1].x}
      y2=${r.points[1].y}
    />

    ${r.bisector&&M`
        <line
          class="distance-line"
          x1=${r.bisector[0].x}
          y1=${r.bisector[0].y}
          x2=${r.bisector[1].x}
          y2=${r.bisector[1].y}
          style=${pe({strokeDasharray:`${4*e}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},Bn=({guide:r,reverseScale:e,fontSize:t})=>{let o=Math.abs(r.points[0].x-r.points[1].x),n=Math.abs(r.points[0].y-r.points[1].y);if(o===0&&n===0)return null;let s=Oe(Math.max(o,n)).toString(10),i=s.length*t*.5,l=t*.25,a=t*.25,c=t*.5,h=o>n?(r.points[0].x+r.points[1].x)/2-i/2:r.points[0].x,f=o>n?r.points[0].y:(r.points[0].y+r.points[1].y)/2-t/2,g=[`scale(${e})`,o>n?`translate(0, ${l+a})`:`translate(${l+c}, 0)`].join(" "),S=h+i/2,x=f+t/2,_=o>n?`${S} ${f}`:`${h} ${x}`;return M`
    <g class="distance-tooltip">
      <rect
        x=${h-c}
        y=${f-a}
        rx="2"
        width=${i+c*2}
        height=${t+a*2}
        transform=${g}
        transform-origin=${_}
        stroke="none"
      />

      <text
        x=${S}
        y=${f+t-a/2}
        text-anchor="middle"
        transform=${g}
        transform-origin=${_}
        stroke="none"
        fill="white"
        style="font-size: ${t}px"
      >
        ${s}
      </text>
    </g>
  `},lo=new Map,co=({node:r,distanceTo:e,reverseScale:t,fontSize:o})=>{let n=r.id+`
`+e.id,s=lo.get(n);return s||(s=eo(r.absoluteBoundingBox,e.absoluteBoundingBox),lo.set(n,s)),[...s.map(i=>$n({guide:i,reverseScale:t})),...s.map(i=>Bn({guide:i,reverseScale:t,fontSize:o}))]},uo=j`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`});var fo=or((rp,ho)=>{d();u();p();ho.exports=function(){var r=document.getSelection();if(!r.rangeCount)return function(){};for(var e=document.activeElement,t=[],o=0;o<r.rangeCount;o++)t.push(r.getRangeAt(o));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return r.removeAllRanges(),function(){r.type==="Caret"&&r.removeAllRanges(),r.rangeCount||t.forEach(function(n){r.addRange(n)}),e&&e.focus()}}});var yo=or((ip,go)=>{"use strict";d();u();p();var jn=fo(),mo={"text/plain":"Text","text/html":"Url",default:"Text"},Fn="Copy to clipboard: #{key}, Enter";function Ln(r){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return r.replace(/#{\s*key\s*}/g,e)}function Vn(r,e){var t,o,n,s,i,l,a=!1;e||(e={}),t=e.debug||!1;try{n=jn(),s=document.createRange(),i=document.getSelection(),l=document.createElement("span"),l.textContent=r,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(h){if(h.stopPropagation(),e.format)if(h.preventDefault(),typeof h.clipboardData>"u"){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=mo[e.format]||mo.default;window.clipboardData.setData(f,r)}else h.clipboardData.clearData(),h.clipboardData.setData(e.format,r);e.onCopy&&(h.preventDefault(),e.onCopy(h.clipboardData))}),document.body.appendChild(l),s.selectNodeContents(l),i.addRange(s);var c=document.execCommand("copy");if(!c)throw new Error("copy command was unsuccessful");a=!0}catch(h){t&&console.error("unable to copy using execCommand: ",h),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",r),e.onCopy&&e.onCopy(window.clipboardData),a=!0}catch(f){t&&console.error("unable to copy using clipboardData: ",f),t&&console.error("falling back to prompt"),o=Ln("message"in e?e.message:Fn),window.prompt(o,r)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(s):i.removeAllRanges()),l&&document.body.removeChild(l),n()}return a}go.exports=Vn});var vo,Ht,bo,xo,_o,Yt=w(()=>{d();u();p();U();vo=({onClick:r=()=>{}})=>M`
  <svg @click=${r} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Ht=({onClick:r=()=>{}})=>M`
  <svg @click=${r} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,bo=()=>M`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,xo=()=>M`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,_o=()=>M`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`});var _e,zn,Wt,st,wo,Un,Gt,So=w(()=>{d();u();p();_e=r=>r.a===0?"transparent":r.a<1?`rgba(${wo(r).join(", ")}, ${r.a.toFixed(2)})`:Un(r),zn=r=>new Wt(r).cssColor,Wt=class{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{let o=this.floatToPercent(this.colors[t].position);return e+" "+o})}get cssColor(){let e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>_e(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){let o=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(o).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}},st=class{constructor(e){var t,o,n;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(i=>i===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){let i=e.backgroundColor||((o=e.background)===null||o===void 0?void 0:o[0].color);this.background=_e(i)}let s=(n=e.fills)===null||n===void 0?void 0:n[0];if(s&&s.visible!==!1&&(e.type==="TEXT"?this.color=_e(s.color):s.type.includes("GRADIENT")?this.backgroundImage=zn(s):s.type==="SOLID"&&(this.background=_e(s.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=_e(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){let{offset:i,radius:l,color:a}=e.effects[0];this.boxShadowColor=_e(a),this.boxShadow=`${i?.x||0}px ${i?.y||0}px 0 ${l} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(Gt).join(`
`)}},wo=r=>[Math.trunc(255*r.r),Math.trunc(255*r.g),Math.trunc(255*r.b)],Un=r=>{let[e,t,o]=wo(r);return"#"+((1<<24)+(e<<16)+(t<<8)+o).toString(16).slice(1)},Gt=({property:r,value:e})=>`${r}: ${e};`});var qt,Po,Dn,Hn,To,Co=w(()=>{d();u();p();U();qt=an(yo());Yt();So();Po=({node:r,onClose:e})=>{if(!r)return null;let t=new st(r),o=n=>n.stopPropagation();return P`
    <div
      class="inspector-view"
      @click=${o}
      @wheel=${o}
      @keydown=${o}
      @keyup=${o}
      @pointermove=${o}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${r.name}</h4>
          ${vo({onClick:e})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${t.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${t.height}
            </p>
          </div>
          ${t.fontPostScriptName?P`<p class="inspector-property">
                <span>Font:</span>
                ${t.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${t.hasPadding?P`<div class="inspector-section">
            <h4>Layout</h4>
            ${t.horizontalPadding&&P`<p class="inspector-property">
              ${bo()} ${t.horizontalPadding}
            </p>`}
            ${t.verticalPadding&&P`<p class="inspector-property">
              ${xo()} ${t.verticalPadding}
            </p>`}
          </div>`:null}
      ${r.characters?P`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${Ht({onClick:()=>qt(r.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${r.characters}
            </p>
          </div>`:null}
      ${Dn(t)}
    </div>
  `},Dn=r=>{let e=()=>qt(r.getStyleSheet()),t=r.getStyles();return P`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${Ht({onClick:e})}
    </div>
    <div class="code-section selectable-content">
      ${t.map(Hn)}
    </div>
  </div>`},Hn=r=>{let{property:e,value:t,color:o}=r,n=null;switch(e){case"background":case"fill":case"border":case"box-shadow":case"color":n=P`<span
        class="color-preview"
        style="background-color: ${o}"
      ></span>`;break;case"background-image":n=P`<span
        class="color-preview"
        style="background-image: ${t}"
      ></span>`;break}return P`<div class="css-property" @click=${()=>qt(Gt(r))}>
    <span>${e}:</span>${n}<span class="css-value">${t}</span>;</span>
  </div>`},To=j`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`});var Zt,ko,Eo,No=w(()=>{d();u();p();U();rt();Re();Zt=({node:r,selected:e=!1,computedThickness:t,onClick:o})=>{let{x:n,y:s,width:i,height:l}=r.absoluteBoundingBox,a="cornerRadius"in r&&r.cornerRadius?{topLeft:r.cornerRadius,topRight:r.cornerRadius,bottomRight:r.cornerRadius,bottomLeft:r.cornerRadius}:"rectangleCornerRadii"in r&&r.rectangleCornerRadii?{topLeft:r.rectangleCornerRadii[0],topRight:r.rectangleCornerRadii[1],bottomRight:r.rectangleCornerRadii[2],bottomLeft:r.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},c=t/2,h=(x,_)=>`M${x},${_}`,f=(x,_)=>`L${x},${_}`,g=(x,_,T)=>`A${x},${x} 0 0 1 ${_},${T}`,S=[h(a.topLeft+c,c),f(i-a.topRight,c),g(a.topRight-c,i-c,a.topRight),f(i-c,l-a.bottomRight),g(a.bottomRight-c,i-a.bottomRight,l-c),f(a.bottomLeft,l-c),g(a.bottomLeft-c,c,l-a.bottomLeft),f(c,a.topLeft),g(a.topLeft-c,a.topLeft,c),"Z"].join(" ");return M`
    <path
      class="guide"
      d=${S}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${n}, ${s})"
      ?data-selected=${e}
      @click=${o}
    />
  `},ko=({nodeSize:{x:r,y:e,width:t,height:o},offsetX:n,offsetY:s,reverseScale:i})=>{let l={top:`${s+e+o}px`,left:`${n+r+t/2}px`,transform:`translateX(-50%) scale(${i}) translateY(0.25em)`};return P`
    <div class="tooltip" style="${pe(l)}">
      ${Oe(t)} x ${Oe(o)}
    </div>
  `},Eo=j`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`});var Gn,Mo,Oo,Ro=w(()=>{d();u();p();Gn=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:864e5,divisor:864e5,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],Mo=r=>(typeof r=="object"?r:new Date(r)).getTime(),Oo=(r,e=Date.now(),t=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{let n=Mo(e)-Mo(r),s=Math.abs(n);for(let i of Gn)if(s>=i.gte){let l=Math.round(Math.abs(n)/i.divisor),a=n<0,c=i.unit;return c?t.format(a?l:-l,c):i.text}}});var Ao,$o,Bo=w(()=>{d();u();p();U();Yt();Ro();Ao=j`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,$o=r=>{if(!r||!r.link||r.link===void 0||r.link==="undefined")return null;let{link:e,timestamp:t,fileName:o}=r;return P`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${e}"
  >
    <span class="figma-footer--icon"> ${_o()} </span>
    <span class="figma-footer--title"> ${o} </span>
    <span
      title="Last time edited: ${new Date(t).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${Oo(t)}
    </span>
  </a>`}});function Zn(r){let e=[],t=[],o=[],n=[];for(let l of r.children){if(l.type!=="FRAME"&&l.type!=="COMPONENT")continue;let{x:a,y:c,width:h,height:f}=l.absoluteBoundingBox;e.push(a),t.push(a+h),o.push(c),n.push(c+f)}let s=Math.min(...e),i=Math.min(...o);return{x:s,y:i,width:Math.abs(Math.max(...t)-s),height:Math.abs(Math.min(...n)-i)}}function Xn(r,e){let t=e.map(n=>{if(!("effects"in n))return{top:n.absoluteBoundingBox.y,right:n.absoluteBoundingBox.x+n.absoluteBoundingBox.width,bottom:n.absoluteBoundingBox.y+n.absoluteBoundingBox.height,left:n.absoluteBoundingBox.x};let s=n.effects.filter(a=>a.visible&&a.type==="LAYER_BLUR").map(a=>a.radius),i=n.effects.filter(a=>a.visible&&a.type==="DROP_SHADOW"&&!!a.offset).map(a=>({left:a.radius-a.offset.x,top:a.radius-a.offset.y,right:a.radius+a.offset.x,bottom:a.radius+a.offset.y})),l={top:Math.max(0,...s,...i.map(a=>a.top)),right:Math.max(0,...s,...i.map(a=>a.right)),bottom:Math.max(0,...s,...i.map(a=>a.bottom)),left:Math.max(0,...s,...i.map(a=>a.left))};return{top:n.absoluteBoundingBox.y-l.top,right:n.absoluteBoundingBox.x+n.absoluteBoundingBox.width+l.right,bottom:n.absoluteBoundingBox.y+n.absoluteBoundingBox.height+l.bottom,left:n.absoluteBoundingBox.x-l.left}}),o={top:Math.min(...t.map(n=>n.top)),right:Math.max(...t.map(n=>n.right)),bottom:Math.max(...t.map(n=>n.bottom)),left:Math.min(...t.map(n=>n.left))};return{top:r.absoluteBoundingBox.y-o.top,right:o.right-r.absoluteBoundingBox.x-r.absoluteBoundingBox.width,bottom:o.bottom-r.absoluteBoundingBox.y-r.absoluteBoundingBox.height,left:r.absoluteBoundingBox.x-o.left}}function it(r,e=0){return"absoluteBoundingBox"in r?!("children"in r)||r.children.length===0?[Object.assign(Object.assign({},r),{depth:e})]:[Object.assign(Object.assign({},r),{depth:e}),...r.children.map(t=>it(t,e+1)).flat()]:r.children.map(t=>it(t,e+1)).flat()}var Io,D,Xt,at,Kt=w(()=>{d();u();p();U();rt();Re();ro();ao();po();Co();tt();No();Bo();Io=function(r,e,t,o){var n=arguments.length,s=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(i=r[l])&&(s=(n<3?i(s):n>3?i(e,t,s):i(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},D=function(r,e){if(!e.has(r))throw new TypeError("attempted to get private field on non-instance");return e.get(r)},Xt=function(r,e,t){if(!e.has(r))throw new TypeError("attempted to set private field on non-instance");return e.set(r,t),t},at=r=>{var e,t,o,n,s;class i extends to(io(r)){constructor(...a){super(...a),this.zoomMargin=50,this.link="",e.set(this,void 0),t.set(this,void 0),o.set(this,void 0),n.set(this,c=>h=>{h.preventDefault(),h.stopPropagation(),this.selectedNode=c}),s.set(this,c=>{var h,f;return(f=(h=D(this,o))===null||h===void 0?void 0:h.find(g=>g.id===c))!==null&&f!==void 0?f:null})}static get styles(){let a=super.styles;return ot(a,[j`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,Eo,Xr,uo,To,Ao])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!D(this,e)||!D(this,o)?J({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?J({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?J({title:"Error",children:this.error}):this.error;let a=D(this,e),c=1/this.scale,h=`calc(var(--guide-thickness) * ${c})`,f=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),g=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return P`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${a.width}px;
          height: ${a.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([S,x])=>{var _;let T=D(this,s).call(this,S);if(!T||!("absoluteBoundingBox"in T)||!(!((_=D(this,t))===null||_===void 0)&&_[T.id]))return null;let N=D(this,t)[T.id];return P`
                <img class="rendered-image" src="${x}"
                style=${pe({top:`${T.absoluteBoundingBox.y-a.y}px`,left:`${T.absoluteBoundingBox.x-a.x}px`,marginTop:`${-N.top}px`,marginLeft:`${-N.left}px`,width:T.absoluteBoundingBox.width+N.left+N.right+"px",height:T.absoluteBoundingBox.height+N.top+N.bottom+"px"})}"
                " />
              `})}
            ${this.selectedNode&&ko({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-a.x,offsetY:-a.y,reverseScale:c})}
            ${M`
            <svg
              class="guides"
              viewBox="0 0 5 5"
              width="5"
              height="5"
              style=${pe({left:`${-a.x}px`,top:`${-a.y}px`,strokeWidth:h})}
            >
              ${this.selectedNode&&Zt({node:this.selectedNode,selected:!0,computedThickness:f*c})}

              ${D(this,o).map(S=>{var x;return S.id===((x=this.selectedNode)===null||x===void 0?void 0:x.id)?null:M`
                  <g>
                    ${Zt({node:S,computedThickness:f*c,onClick:D(this,n).call(this,S)})}
                    ${this.selectedNode&&co({node:S,distanceTo:this.selectedNode,reverseScale:c,fontSize:g})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${Po({node:this.selectedNode,onClose:this.deselectNode})}
          ${$o(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(a){super.updated(a)}__updateTree(a){if(!(a.type==="CANVAS"||a.type==="FRAME"||a.type==="COMPONENT"||a.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");Xt(this,e,a.type==="CANVAS"?Zn(a):a.absoluteBoundingBox),Xt(this,o,it(a)),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;let a=Object.keys(this.__images).map(D(this,s)).filter(c=>!!c);Xt(this,t,a.reduce((c,h)=>"absoluteBoundingBox"in h?Object.assign(Object.assign({},c),{[h.id]:Xn(h,it(h))}):c,{})),this.requestUpdate()}resetZoom(){if(D(this,e)){let{width:a,height:c}=D(this,e),{width:h,height:f}=this.getBoundingClientRect(),g=h/(a+this.zoomMargin*2),S=f/(c+this.zoomMargin*2);this.scale=Math.min(g,S,1)}}}return e=new WeakMap,t=new WeakMap,o=new WeakMap,n=new WeakMap,s=new WeakMap,Io([O({type:Number,attribute:"zoom-margin"})],i.prototype,"zoomMargin",void 0),Io([O({type:String,attribute:"link"})],i.prototype,"link",void 0),i}});var jo,we,Fo=w(()=>{d();u();p();U();tt();Kt();jo=function(r,e,t,o){var n=arguments.length,s=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(i=r[l])&&(s=(n<3?i(s):n>3?i(e,t,s):i(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},we=class extends at(K){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;let e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return J({title:"Parameter error",children:P`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return J({title:"Parameter Error",children:P`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}};jo([O({type:Object})],we.prototype,"nodes",void 0);jo([O({type:String,attribute:"rendered-image"})],we.prototype,"renderedImage",void 0)});var Lo,Jt,lt,Qt,Se,Vo=w(()=>{d();u();p();U();tt();Kt();Re();Lo=function(r,e,t,o){var n=arguments.length,s=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(i=r[l])&&(s=(n<3?i(s):n>3?i(e,t,s):i(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},Jt=function(r,e){if(!e.has(r))throw new TypeError("attempted to get private field on non-instance");return e.get(r)},Se=class extends at(K){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,lt.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),Qt.set(this,e=>{var t,o;let n=e.currentTarget;this.selectedPage=(o=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(s=>s.id===n.value))!==null&&o!==void 0?o:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return J({title:"Parameter error",children:P`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return ot(super.styles,[j`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var e;return P`
      <div class="controls">
        <select @change=${Jt(this,Qt)}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>P`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(Jt(this,lt).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(Jt(this,lt).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}};lt=new WeakMap,Qt=new WeakMap;Lo([O({type:Object,attribute:"document-node"})],Se.prototype,"documentNode",void 0);Lo([O({type:Object,attribute:"rendered-images"})],Se.prototype,"renderedImages",void 0)});var zo=w(()=>{d();u();p();Fo();Vo();customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",Se);customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",we)});var Uo,Pe,Do,Ho,Yo=w(()=>{d();u();p();zo();$();Uo=function(r,e){var t={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(r);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(t[o[n]]=r[o[n]]);return t},Pe=(r,e,t)=>{let o=n=>{t(n)};return r.addEventListener(e,o),()=>r.removeEventListener(e,o)},Do=ft((r,e)=>{var{nodes:t,renderedImage:o,className:n,panSpeed:s,zoomMargin:i,zoomSpeed:l,onNodeSelect:a,onPositionChange:c,onScaleChange:h}=r,f=Uo(r,["nodes","renderedImage","className","panSpeed","zoomMargin","zoomSpeed","onNodeSelect","onPositionChange","onScaleChange"]);let[g,S]=E(null);mt(e,()=>g,[g]);let x=I(_=>{_&&(S(_),_.nodes=t,_.renderedImage=o)},[]);return C(()=>{g&&(g.nodes=t,g.renderedImage=o)},[g,t,o]),C(()=>{if(!(!g||!a))return Pe(g,"nodeselect",a)},[g,a]),C(()=>{if(!(!g||!c))return Pe(g,"positionchange",c)},[g,c]),C(()=>{if(!(!g||!h))return Pe(g,"scalechange",h)},[g,h]),ht("figspec-frame-viewer",Object.assign({ref:x,class:n,"pan-speed":s,"zoom-margin":i,"zoom-speed":l},f))}),Ho=ft((r,e)=>{var{documentNode:t,renderedImages:o,className:n,panSpeed:s,zoomMargin:i,zoomSpeed:l,onNodeSelect:a,onPositionChange:c,onScaleChange:h}=r,f=Uo(r,["documentNode","renderedImages","className","panSpeed","zoomMargin","zoomSpeed","onNodeSelect","onPositionChange","onScaleChange"]);let[g,S]=E(null);mt(e,()=>g,[g]);let x=I(_=>{_&&(S(_),_.documentNode=t,_.renderedImages=o)},[]);return C(()=>{g&&(g.documentNode=t,g.renderedImages=o)},[g,t,o]),C(()=>{if(!(!g||!a))return Pe(g,"nodeselect",a)},[g,a]),C(()=>{if(!(!g||!c))return Pe(g,"positionchange",c)},[g,c]),C(()=>{if(!(!g||!h))return Pe(g,"scalechange",h)},[g,h]),ht("figspec-file-viewer",Object.assign({ref:x,class:n,"pan-speed":s,"zoom-margin":i,"zoom-speed":l},f))})});var Xo={};nn(Xo,{Figspec:()=>qo,default:()=>ts});function ct(r){return r.status!==200?Promise.reject(r.statusText):r.json()}function es(r){var e;if(r.accessToken)return r.accessToken;try{return(e=y.STORYBOOK_FIGMA_ACCESS_TOKEN)!==null&&e!==void 0?e:null}catch{return null}}function Zo(r){return"absoluteBoundingBox"in r?[r]:!r.children||r.children.length===0?[]:r.children.map(Zo).reduce(function(e,t){return e.concat(t)},[])}var Kn,dt,Jn,Qn,Wo,qo,ts,Go,Ko=w(()=>{d();u();p();$();Yo();Y();B();bt();Kn=function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},dt=function(){return dt=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},dt.apply(this,arguments)},Jn=function(r,e,t,o){function n(s){return s instanceof t?s:new t(function(i){i(s)})}return new(t||(t=Promise))(function(s,i){function l(h){try{c(o.next(h))}catch(f){i(f)}}function a(h){try{c(o.throw(h))}catch(f){i(f)}}function c(h){h.done?s(h.value):n(h.value).then(l,a)}c((o=o.apply(r,e||[])).next())})},Qn=function(r,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},o,n,s,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(c){return function(h){return a([c,h])}}function a(c){if(o)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(t=0)),t;)try{if(o=1,n&&(s=c[0]&2?n.return:c[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,c[1])).done)return s;switch(n=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,n=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){t.label=c[1];break}if(c[0]===6&&t.label<s[1]){t.label=s[1],s=c;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(c);break}s[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(r,t)}catch(h){c=[6,h],n=0}finally{o=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},Wo=A(Go||(Go=Kn([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`])));qo=function(r){var e=r.config,t=E({state:"loading"}),o=t[0],n=t[1],s=function(i){return Jn(void 0,void 0,void 0,function(){var l,a,c,h,f,g,S,x,_,T,N,H,L,rr,oe;return Qn(this,function(ne){switch(ne.label){case 0:n({state:"loading"}),ne.label=1;case 1:if(ne.trys.push([1,6,,7]),l=e.url.match(vt),!l)throw new Error(e.url+" is not a valid Figma URL.");if(a=l[3],c=new URL(e.url),h=c.searchParams.get("node-id"),f=es(e),!f)throw new Error("Personal Access Token is required.");return g={"X-FIGMA-TOKEN":f},S=new URL("https://api.figma.com/v1/files/".concat(a)),x=new URL("https://api.figma.com/v1/images/".concat(a)),x.searchParams.set("format","svg"),h?[3,4]:[4,fetch(S.href,{headers:g,signal:i}).then(function(Z){return ct(Z)})];case 2:return _=ne.sent(),T=Zo(_.document),x.searchParams.set("ids",T.map(function(Z){return Z.id}).join(",")),[4,fetch(x.href,{headers:g,signal:i}).then(function(Z){return ct(Z)})];case 3:return N=ne.sent(),n({state:"fetched",value:{type:"file",props:{documentNode:_,renderedImages:N.images,link:e.url}}}),[2];case 4:return S.pathname+="/nodes",S.searchParams.set("ids",h),x.searchParams.set("ids",h),[4,Promise.all([fetch(S.href,{headers:g,signal:i}).then(function(Z){return ct(Z)}),fetch(x.href,{headers:g,signal:i}).then(function(Z){return ct(Z)})])];case 5:return H=ne.sent(),L=H[0],rr=H[1],n({state:"fetched",value:{type:"frame",props:{nodes:L,renderedImage:Object.values(rr.images)[0],link:e.url}}}),[3,7];case 6:return oe=ne.sent(),oe instanceof DOMException&&oe.code===DOMException.ABORT_ERR?[2]:(console.error(oe),n({state:"failed",error:oe instanceof Error?oe.message:String(oe)}),[3,7]);case 7:return[2]}})})};switch(C(function(){var i=!1,l=function(){i=!0},a=new AbortController;return s(a.signal).then(l,l),function(){i||a.abort()}},[e.url]),o.state){case"loading":return m(V,null,m(k,null,"Loading Figma file..."));case"failed":return m(V,null,m(k,null,"Failed to load Figma file"),m(k,null,o.error));case"fetched":return o.value.type==="file"?m(Ho,dt({css:Wo},o.value.props)):m(Do,dt({css:Wo},o.value.props))}},ts=qo});d();u();p();d();u();p();d();u();p();d();u();p();var ds=__STORYBOOKAPI__,{ActiveTabs:us,Consumer:ps,ManagerContext:hs,Provider:fs,addons:Be,combineParameters:ms,controlOrMetaKey:gs,controlOrMetaSymbol:ys,eventMatchesShortcut:vs,eventToShortcut:bs,isMacLike:xs,isShortcutTaken:_s,keyToSymbol:ws,merge:Ss,mockChannel:Ps,optionOrAltSymbol:Ts,shortcutMatchesShortcut:Cs,shortcutToHumanString:ks,types:nr,useAddonState:Es,useArgTypes:Ns,useArgs:Ms,useChannel:Os,useGlobalTypes:Rs,useGlobals:As,useParameter:Ie,useSharedState:$s,useStoryPrepared:Bs,useStorybookApi:Is,useStorybookState:sr}=__STORYBOOKAPI__;Y();B();d();u();p();var Le="STORYBOOK_ADDON_DESIGNS",pt=Le+"/panel",wa={UpdateConfig:Le+"/update_config"},he="design";d();u();p();$();Y();B();var cn=function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(o[s]=n[s])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function o(){this.constructor=e}e.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}}(),gt=function(r){cn(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.state={hasError:!1},t}return e.getDerivedStateFromError=function(t){return{hasError:!0,error:t}},e.prototype.componentDidCatch=function(t,o){console.group("An error occurred during rendering Addon panel of storybook-addon-designs"),console.log("--- Error ---"),console.error(t),console.log("--- React Component Stack ---"),console.error(o.componentStack),console.groupEnd()},e.prototype.render=function(){return this.state.hasError?m(V,null,m(k,null,"Failed to render addon UI"),m(k,null,m("p",null,"Sorry, this addon has crashed due to the below error has thrown during rendering the addon UI."),m("pre",null,String(this.state.error)),m("p",null,"See console log for more details. To clear the error state, please reload the page."," ",m(se,{href:"https://github.com/pocka/storybook-addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"Bug report")))):this.props.children},e}(dr);d();u();p();$();B();d();u();p();$();B();Y();bt();Ve();d();u();p();$();B();Y();d();u();p();$();B();d();u();p();$();var yr=function(r,e,t){if(t||arguments.length===2)for(var o=0,n=e.length,s;o<n;o++)(s||!(o in e))&&(s||(s=Array.prototype.slice.call(e,0,o)),s[o]=e[o]);return r.concat(s||Array.prototype.slice.call(e))},vr=function(r,e){var t=E([0,0]),o=t[0],n=t[1],s=E(!1),i=s[0],l=s[1],a=I(function(x){x.button===0&&(n([x.screenX,x.screenY]),l(!0))},[l,n]),c=I(function(x){var _=x.touches[0];n([_.screenX,_.screenY]),l(!0)},[l,n]),h=I(function(x){i&&n(function(_){return r([x[0]-_[0],x[1]-_[1]]),x})},yr([n,i],e,!0)),f=I(function(x){var _=x.screenX,T=x.screenY;h([_,T])},[h]),g=I(function(x){var _=x.touches[0],T=_.screenX,N=_.screenY;h([T,N])},yr([n,i],e,!0)),S=I(function(){n([0,0]),l(!1)},[l,n]);return{onMouseDown:a,onMouseMove:f,onMouseUp:S,onMouseLeave:S,onTouchStart:c,onTouchMove:g,onTouchCancel:S,onTouchEnd:S}};var _r=function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},xt=function(){return xt=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},xt.apply(this,arguments)},wr=function(r){var e=r.children,t=r.className,o=r.style,n=r.defaultValue,s=r.value,i=r.onChange,l=E([0,0]),a=l[0],c=l[1];C(function(){c(n||s||[0,0])},[n]);var h=vr(function(g){i&&i(g),c(function(S){return[S[0]+g[0],S[1]+g[1]]})},[c,i]),f=Q(function(){var g=s||a;return{transform:"translate(".concat(g[0],"px, ").concat(g[1],"px)")}},[s,a]);return m("div",xt({css:fn,className:t,style:o},h),m("div",{css:mn,style:f},e))};var fn=A(br||(br=_r([`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`],[`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`]))),mn=A(xr||(xr=_r([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`]))),br,xr;d();u();p();$();B();Y();var Sr=function(r){var e=r.onZoomIn,t=r.onZoomOut,o=r.onReset;return m(k,null,m(je,{onClick:e},m(Fe,{icon:"zoom"})),m(je,{onClick:t},m(Fe,{icon:"zoomout"})),m(je,{onClick:o},m(Fe,{icon:"zoomreset"})))};d();u();p();$();var Pr=function(r,e){var t=E(1),o=t[0],n=t[1];C(function(){n(r)},e);var s=I(function(){n(function(a){return a+.1})},[n]),i=I(function(){n(function(a){return Math.max(a-.1,.1)})},[n]),l=I(function(){n(1)},[n]);return{scale:o,zoomIn:s,zoomOut:i,resetZoom:l}};var _t=function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},Er=function(r){var e=r.config,t=Pr(e.scale||1,[e.scale]),o=Q(function(){return{transform:"scale(".concat(t.scale,")")}},[t.scale]);return m("div",{css:gn},m(ar,{border:!0},m(k,{key:"left"},m("p",null,m("b",null,"Image")),m(lr,null),m(Sr,{onReset:t.resetZoom,onZoomIn:t.zoomIn,onZoomOut:t.zoomOut}))),m(wr,{css:yn,defaultValue:e.offset},m("img",{css:vn,src:e.url,style:o})))};var gn=A(Tr||(Tr=_t([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`]))),yn=A(Cr||(Cr=_t([`
  flex-grow: 1;
`],[`
  flex-grow: 1;
`]))),vn=A(kr||(kr=_t([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`]))),Tr,Cr,kr;d();u();p();B();Y();var bn=function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},Mr=function(r){var e,t,o,n=r.config;return m("div",{css:xn},m(se,{cancel:!1,href:n.url,target:(e=n.target)!==null&&e!==void 0?e:"_blank",rel:(t=n.rel)!==null&&t!==void 0?t:"noopener",withArrow:(o=n.showArrow)!==null&&o!==void 0?o:!0},n.label||n.url))};var xn=A(Nr||(Nr=bn([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`]))),Nr;d();u();p();Y();B();$();Ve();var me=function(){return me=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},me.apply(this,arguments)},_n=function(r){if(r.protocol!=="https:")return{valid:!1,error:m(k,null,"Expected HTTPS link, received ",m("code",null,r.protocol),".")};if(r.hostname!=="www.sketch.com")return{valid:!1,error:m(k,null,"Expected a hostname ",m("code",null,"www.sketch.com"),", received"," ",m("code",null,r.hostname))};var e=m(k,null,"Expected pathname ",m("code",null,"/s/<string>/a/<string>"),", received"," ",m("code",null,r.pathname),"."),t=r.pathname.split("/").slice(1);if(t.length<4)return{valid:!1,error:e};if(t[0]==="embed")return{valid:!0,data:{url:r.href,offscreen:!1}};var o=t[0],n=t[1],s=t[2],i=t[3];return o!=="s"||!n||s!=="a"||!i?{valid:!1,error:e}:{valid:!0,data:{url:"https://www.sketch.com/embed/s/".concat(n,"/a/").concat(i),offscreen:!1}}},Or=function(r){var e=r.config,t=Q(function(){var o=_n(new URL(e.url));return o.valid?me(me({},o),{data:me(me({},e),o.data)}):o},[e]);return t.valid?m(fe,{defer:!0,config:t.data}):m(V,null,m(k,null,"Invalid Sketch URL"),m(k,null,t.error))};d();u();p();$();B();Y();var Rr=function(r){var e=r.tabs,t=r.deps,o=t===void 0?[]:t,n=E(e[0].id),s=n[0],i=n[1];return C(function(){i(e[0].id)},o),m(cr,{absolute:!0,selected:s,actions:{onSelect:i}},e.map(function(l){return m("div",{key:l.id,id:l.id,title:l.name},l.offscreen||s===l.id?l.content:null)}))};var R=function(){return R=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},R.apply(this,arguments)},rs=function(r,e,t){if(t||arguments.length===2)for(var o=0,n=e.length,s;o<n;o++)(s||!(o in e))&&(s||(s=Array.prototype.slice.call(e,0,o)),s[o]=e[o]);return r.concat(s||Array.prototype.slice.call(e))},os=pr(function(){return Promise.resolve().then(()=>(Ko(),Xo))}),Jo=function(r){var e=r.config;if(!e||"length"in e&&e.length===0)return m(V,null,m(k,null,"No designs found"),m(k,null,"Learn how to"," ",m(se,{href:"https://github.com/storybookjs/addon-designs#3-add-it-to-story",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));var t=rs([],e instanceof Array?e:[e],!0).map(function(o){var n,s,i={id:JSON.stringify(o),name:o.name||((n=o.type)===null||n===void 0?void 0:n.toUpperCase())||"ERROR",offscreen:(s=o.offscreen)!==null&&s!==void 0?s:!0};switch(o.type){case"iframe":return R(R({},i),{content:m(fe,{config:o})});case"figma":return R(R({},i),{content:m(gr,{config:o}),offscreen:!1});case"sketch":return R(R({},i),{content:m(Or,{config:o})});case"figspec":case"experimental-figspec":return o.type==="experimental-figspec"&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),R(R({},i),{content:m(ur,{fallback:"Preparing Figspec viewer..."},m(os,{config:o})),offscreen:!1});case"image":return R(R({},i),{content:m(Er,{config:o})});case"link":return R(R({},i),{content:m(Mr,{config:o})})}return R(R({},i),{content:m(V,null,m(k,null,"Invalid config type"),m(k,null,"Config type you set is not supported. Please choose one from"," ",m(se,{href:"https://github.com/pocka/storybook-addon-designs#available-types",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))})});return t.length===1?m("div",null,t[0].content):m(Rr,{tabs:t,deps:[e]})};var er=function(r){var e=r.active,t=sr(),o=Ie(he),n=E(e),s=n[0],i=n[1];return C(function(){i(e)},[o]),C(function(){e&&i(!0)},[e]),s?m(Jo,{key:t.storyId,config:o}):null};var $e="Design";function tr(r){Be.register(Le,function(e){var t=function(){var o=Ie(he);return o?Array.isArray(o)?o.length>0?"".concat($e," (").concat(o.length,")"):$e:(o.name||$e)+" (1)":$e};r==="tab"?Be.add(pt,{title:$e,render:function(o){var n=o.active,s=o.key;return n?m(gt,{key:s},m(er,{active:!0})):m("noscript",{key:s})},type:nr.TAB,paramKey:he,route:function(o){var n=o.storyId;return"/design/".concat(n)},match:function(o){var n=o.viewMode;return n==="design"}}):Be.addPanel(pt,{title:t,paramKey:he,render:function(o){var n=o.active,s=o.key;return m(ir,{key:s,active:!!n},m(gt,null,m(er,{active:!!n})))}})})}tr("panel");
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=register-bundle.js.map
