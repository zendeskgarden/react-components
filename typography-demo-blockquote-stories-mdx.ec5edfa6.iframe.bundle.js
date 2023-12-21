"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[2689],{"./packages/typography/demo/blockquote.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,blockquote:()=>blockquote,default:()=>blockquote_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),types=__webpack_require__("./packages/typography/src/types/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledFont=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx");const StyledBlockquote=styled_components_browser_esm.ZP.blockquote.attrs({"data-garden-id":"typography.blockquote","data-garden-version":"storybook"}).withConfig({displayName:"StyledBlockquote",componentId:"sc-1tt3ye0-0"})(["margin:0;border-",":"," solid;border-color:",";padding:0;padding-",":","px;direction:",";& + &,p + &{margin-top:",";}",";"],(props=>props.theme.rtl?"right":"left"),(props=>props.theme.shadowWidths.sm),(props=>(0,getColor.L)("neutralHue",400,props.theme)),(props=>props.theme.rtl?"right":"left"),(props=>4*props.theme.space.base),(props=>props.theme.rtl?"rtl":"ltr"),(props=>props.theme.lineHeights[StyledFont.z[props.size]]),(props=>(0,retrieveComponentStyles.Z)("typography.blockquote",props)));StyledBlockquote.defaultProps={theme:theme.Z};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Blockquote=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(StyledBlockquote,{ref,...props})));Blockquote.displayName="Blockquote",Blockquote.propTypes={size:prop_types_default().oneOf(types.NO)},Blockquote.defaultProps={size:"medium"};try{Blockquote.displayName="Blockquote",Blockquote.__docgenInfo={description:"",displayName:"Blockquote",props:{size:{defaultValue:{value:"medium"},description:"Controls the spacing between sibling blockquotes and paragraphs",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/Blockquote.tsx#Blockquote"]={docgenInfo:Blockquote.__docgenInfo,name:"Blockquote",path:"packages/typography/src/elements/Blockquote.tsx#Blockquote"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var TypescaleStory=__webpack_require__("./packages/typography/demo/stories/TypescaleStory.tsx");const BlockquoteStory=_ref=>{let{children,...args}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children.map(((child,index)=>(0,jsx_runtime.jsx)(Blockquote,{...args,children:(0,jsx_runtime.jsx)(TypescaleStory.P,{size:args.size,hasDisplayName:!0,tag:"span",children:child})},index)))})};var data=__webpack_require__("./packages/typography/demo/stories/data.ts"),README=__webpack_require__("./packages/typography/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Typography/Blockquote",component:Blockquote}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Blockquote",args:{children:data.C},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=7149%3A39345"}},children:args=>(0,jsx_runtime.jsx)(BlockquoteStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README})]})}const blockquote=args=>(0,jsx_runtime.jsx)(BlockquoteStory,{...args});blockquote.storyName="Blockquote",blockquote.args={children:data.C},blockquote.parameters={storySource:{source:"args => <BlockquoteStory {...args} />"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=7149%3A39345"}};const componentMeta={title:"Packages/Typography/Blockquote",component:Blockquote,tags:["stories-mdx"],includeStories:["blockquote"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const blockquote_stories=componentMeta,__namedExportsOrder=["blockquote"]},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./packages/typography/demo/stories/TypescaleStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>TypescaleStory});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var _zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/typography/src/elements/SM.tsx"),_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/typography/src/elements/LG.tsx"),_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/typography/src/elements/XL.tsx"),_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/typography/src/elements/XXL.tsx"),_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/typography/src/elements/XXXL.tsx"),_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/typography/src/elements/MD.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TypescaleStory=_ref=>{let Typescale,{children,size,hasDisplayName,...args}=_ref;switch(size){case"small":Typescale=_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_3__.SM;break;case"large":Typescale=_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_4__.LG;break;case"extra-large":Typescale=_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_5__.XL;break;case"2x-large":Typescale=_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_6__.T;break;case"3x-large":Typescale=_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_7__.w;break;default:Typescale=_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_8__.MD}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Typescale,{...args,children:[hasDisplayName&&`<${Typescale.displayName}>`,children,hasDisplayName&&`</${Typescale.displayName}>`]})};TypescaleStory.displayName="TypescaleStory"},"./packages/typography/src/elements/LG.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LG:()=>LG});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const LG=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{tag,...other}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.B,{as:tag,ref,size:"large",...other})}));LG.displayName="LG",LG.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,isBold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,isMonospace:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},LG.defaultProps={tag:"div"};try{LG.displayName="LG",LG.__docgenInfo={description:"",displayName:"LG",props:{isMonospace:{defaultValue:null,description:"Renders with monospace font",name:"isMonospace",required:!1,type:{name:"boolean"}},tag:{defaultValue:{value:"div"},description:"Updates the element's HTML tag",name:"tag",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"Applies bold font style",name:"isBold",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/LG.tsx#LG"]={docgenInfo:LG.__docgenInfo,name:"LG",path:"packages/typography/src/elements/LG.tsx#LG"})}catch(__react_docgen_typescript_loader_error){}},"./packages/typography/src/elements/MD.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MD:()=>MD});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MD=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{tag,...other}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.B,{as:tag,ref,size:"medium",...other})}));MD.displayName="MD",MD.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,isBold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,isMonospace:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},MD.defaultProps={tag:"div"};try{MD.displayName="MD",MD.__docgenInfo={description:"",displayName:"MD",props:{isMonospace:{defaultValue:null,description:"Renders with monospace font",name:"isMonospace",required:!1,type:{name:"boolean"}},tag:{defaultValue:{value:"div"},description:"Updates the element's HTML tag",name:"tag",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"Applies bold font style",name:"isBold",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/MD.tsx#MD"]={docgenInfo:MD.__docgenInfo,name:"MD",path:"packages/typography/src/elements/MD.tsx#MD"})}catch(__react_docgen_typescript_loader_error){}},"./packages/typography/src/elements/SM.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{SM:()=>SM});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SM=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{tag,...other}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.B,{as:tag,ref,size:"small",...other})}));SM.displayName="SM",SM.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,isBold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,isMonospace:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},SM.defaultProps={tag:"div"};try{SM.displayName="SM",SM.__docgenInfo={description:"",displayName:"SM",props:{isMonospace:{defaultValue:null,description:"Renders with monospace font",name:"isMonospace",required:!1,type:{name:"boolean"}},tag:{defaultValue:{value:"div"},description:"Updates the element's HTML tag",name:"tag",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"Applies bold font style",name:"isBold",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/SM.tsx#SM"]={docgenInfo:SM.__docgenInfo,name:"SM",path:"packages/typography/src/elements/SM.tsx#SM"})}catch(__react_docgen_typescript_loader_error){}},"./packages/typography/src/elements/XL.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XL:()=>XL});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const XL=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{tag,...other}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.B,{as:tag,ref,size:"extralarge",...other})}));XL.displayName="XL",XL.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,isBold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},XL.defaultProps={tag:"div"};try{XL.displayName="XL",XL.__docgenInfo={description:"",displayName:"XL",props:{tag:{defaultValue:{value:"div"},description:"Updates the element's HTML tag",name:"tag",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"Applies bold font style",name:"isBold",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/XL.tsx#XL"]={docgenInfo:XL.__docgenInfo,name:"XL",path:"packages/typography/src/elements/XL.tsx#XL"})}catch(__react_docgen_typescript_loader_error){}},"./packages/typography/src/elements/XXL.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>XXL});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const XXL=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{tag,...other}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.B,{as:tag,ref,size:"2xlarge",...other})}));XXL.displayName="XXL",XXL.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,isBold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},XXL.defaultProps={tag:"div"};try{XXL.displayName="XXL",XXL.__docgenInfo={description:"",displayName:"XXL",props:{tag:{defaultValue:{value:"div"},description:"Updates the element's HTML tag",name:"tag",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"Applies bold font style",name:"isBold",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/XXL.tsx#XXL"]={docgenInfo:XXL.__docgenInfo,name:"XXL",path:"packages/typography/src/elements/XXL.tsx#XXL"})}catch(__react_docgen_typescript_loader_error){}},"./packages/typography/src/elements/XXXL.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>XXXL});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const XXXL=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{tag,...other}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.B,{as:tag,ref,size:"3xlarge",...other})}));XXXL.displayName="XXXL",XXXL.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,isBold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},XXXL.defaultProps={tag:"div"};try{XXXL.displayName="XXXL",XXXL.__docgenInfo={description:"",displayName:"XXXL",props:{tag:{defaultValue:{value:"div"},description:"Updates the element's HTML tag",name:"tag",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"Applies bold font style",name:"isBold",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/XXXL.tsx#XXXL"]={docgenInfo:XXXL.__docgenInfo,name:"XXXL",path:"packages/typography/src/elements/XXXL.tsx#XXXL"})}catch(__react_docgen_typescript_loader_error){}}}]);