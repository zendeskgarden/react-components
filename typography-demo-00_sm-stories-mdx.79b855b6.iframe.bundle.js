(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[5322],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/typography/demo/00_sm.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,sm:()=>sm});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_react_components_react_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/typography/src/elements/SM.tsx"),_stories_TypescaleStory__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/typography/demo/stories/TypescaleStory.tsx"),_README_md__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/typography/README.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_home_runner_work_react_components_react_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Packages/Typography/Typescale/SM",component:_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_4__.SM}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.uY,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"SM",args:{children:"Text"},argTypes:{tag:{control:"text"}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A107"}},children:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stories_TypescaleStory__WEBPACK_IMPORTED_MODULE_5__.O,{...args,size:"small"})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oz,{children:_README_md__WEBPACK_IMPORTED_MODULE_6__})]})}const sm=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stories_TypescaleStory__WEBPACK_IMPORTED_MODULE_5__.O,{...args,size:"small"});sm.storyName="SM",sm.argTypes={tag:{control:"text"}},sm.args={children:"Text"},sm.parameters={storySource:{source:'args => <TypescaleStory {...args} size="small" />'},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A107"}};const componentMeta={title:"Packages/Typography/Typescale/SM",component:_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_4__.SM,tags:["stories-mdx"],includeStories:["sm"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_react_components_react_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["sm"]},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.o,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.X});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.X},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{A:()=>retrieveComponentStyles})},"./packages/typography/demo/stories/TypescaleStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>TypescaleStory});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var _zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/typography/src/elements/SM.tsx"),_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/typography/src/elements/LG.tsx"),_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/typography/src/elements/XL.tsx"),_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/typography/src/elements/XXL.tsx"),_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/typography/src/elements/XXXL.tsx"),_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/typography/src/elements/MD.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TypescaleStory=_ref=>{let Typescale,{children,size,hasDisplayName,...args}=_ref;switch(size){case"small":Typescale=_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_3__.SM;break;case"large":Typescale=_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_4__.LG;break;case"extra-large":Typescale=_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_5__.XL;break;case"2x-large":Typescale=_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_6__.$;break;case"3x-large":Typescale=_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_7__.B;break;default:Typescale=_zendeskgarden_react_typography__WEBPACK_IMPORTED_MODULE_8__.MD}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Typescale,{...args,children:[hasDisplayName&&`<${Typescale.displayName}>`,children,hasDisplayName&&`</${Typescale.displayName}>`]})};TypescaleStory.displayName="TypescaleStory"},"./packages/typography/src/elements/LG.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{LG:()=>LG});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const LG=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{tag,...other}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.p,{as:tag,ref,size:"large",...other})}));LG.displayName="LG",LG.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,isBold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,isMonospace:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},LG.defaultProps={tag:"div"};try{LG.displayName="LG",LG.__docgenInfo={description:"",displayName:"LG",props:{isMonospace:{defaultValue:null,description:"Renders with monospace font",name:"isMonospace",required:!1,type:{name:"boolean"}},tag:{defaultValue:{value:"div"},description:"Updates the element's HTML tag",name:"tag",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"Applies bold font style",name:"isBold",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/LG.tsx#LG"]={docgenInfo:LG.__docgenInfo,name:"LG",path:"packages/typography/src/elements/LG.tsx#LG"})}catch(__react_docgen_typescript_loader_error){}},"./packages/typography/src/elements/MD.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{MD:()=>MD});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MD=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{tag,...other}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.p,{as:tag,ref,size:"medium",...other})}));MD.displayName="MD",MD.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,isBold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,isMonospace:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},MD.defaultProps={tag:"div"};try{MD.displayName="MD",MD.__docgenInfo={description:"",displayName:"MD",props:{isMonospace:{defaultValue:null,description:"Renders with monospace font",name:"isMonospace",required:!1,type:{name:"boolean"}},tag:{defaultValue:{value:"div"},description:"Updates the element's HTML tag",name:"tag",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"Applies bold font style",name:"isBold",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/MD.tsx#MD"]={docgenInfo:MD.__docgenInfo,name:"MD",path:"packages/typography/src/elements/MD.tsx#MD"})}catch(__react_docgen_typescript_loader_error){}},"./packages/typography/src/elements/SM.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{SM:()=>SM});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SM=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{tag,...other}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.p,{as:tag,ref,size:"small",...other})}));SM.displayName="SM",SM.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,isBold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,isMonospace:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},SM.defaultProps={tag:"div"};try{SM.displayName="SM",SM.__docgenInfo={description:"",displayName:"SM",props:{isMonospace:{defaultValue:null,description:"Renders with monospace font",name:"isMonospace",required:!1,type:{name:"boolean"}},tag:{defaultValue:{value:"div"},description:"Updates the element's HTML tag",name:"tag",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"Applies bold font style",name:"isBold",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/SM.tsx#SM"]={docgenInfo:SM.__docgenInfo,name:"SM",path:"packages/typography/src/elements/SM.tsx#SM"})}catch(__react_docgen_typescript_loader_error){}},"./packages/typography/src/elements/XL.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XL:()=>XL});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const XL=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{tag,...other}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.p,{as:tag,ref,size:"extralarge",...other})}));XL.displayName="XL",XL.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,isBold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},XL.defaultProps={tag:"div"};try{XL.displayName="XL",XL.__docgenInfo={description:"",displayName:"XL",props:{tag:{defaultValue:{value:"div"},description:"Updates the element's HTML tag",name:"tag",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"Applies bold font style",name:"isBold",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/XL.tsx#XL"]={docgenInfo:XL.__docgenInfo,name:"XL",path:"packages/typography/src/elements/XL.tsx#XL"})}catch(__react_docgen_typescript_loader_error){}},"./packages/typography/src/elements/XXL.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>XXL});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const XXL=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{tag,...other}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.p,{as:tag,ref,size:"2xlarge",...other})}));XXL.displayName="XXL",XXL.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,isBold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},XXL.defaultProps={tag:"div"};try{XXL.displayName="XXL",XXL.__docgenInfo={description:"",displayName:"XXL",props:{tag:{defaultValue:{value:"div"},description:"Updates the element's HTML tag",name:"tag",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"Applies bold font style",name:"isBold",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/XXL.tsx#XXL"]={docgenInfo:XXL.__docgenInfo,name:"XXL",path:"packages/typography/src/elements/XXL.tsx#XXL"})}catch(__react_docgen_typescript_loader_error){}},"./packages/typography/src/elements/XXXL.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>XXXL});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const XXXL=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{tag,...other}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.p,{as:tag,ref,size:"3xlarge",...other})}));XXXL.displayName="XXXL",XXXL.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,isBold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},XXXL.defaultProps={tag:"div"};try{XXXL.displayName="XXXL",XXXL.__docgenInfo={description:"",displayName:"XXXL",props:{tag:{defaultValue:{value:"div"},description:"Updates the element's HTML tag",name:"tag",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"Applies bold font style",name:"isBold",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/XXXL.tsx#XXXL"]={docgenInfo:XXXL.__docgenInfo,name:"XXXL",path:"packages/typography/src/elements/XXXL.tsx#XXXL"})}catch(__react_docgen_typescript_loader_error){}},"./packages/typography/src/styled/StyledFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>THEME_SIZES,p:()=>StyledFont});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/getColorV8.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/typography/src/types/index.ts");_types__WEBPACK_IMPORTED_MODULE_0__.SK;const THEME_SIZES={small:"sm",medium:"md",large:"lg",extralarge:"xl","2xlarge":"xxl","3xlarge":"xxxl"},StyledFont=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.attrs({"data-garden-id":"typography.font","data-garden-version":"storybook"}).withConfig({displayName:"StyledFont",componentId:"sc-1iildbo-0"})(["",";&[hidden]{display:inline;",";}",";"],(props=>!props.hidden&&(props=>{const monospace=props.isMonospace&&-1!==["inherit","small","medium","large"].indexOf(props.size),fontFamily=monospace&&props.theme.fonts.mono,direction=props.theme.rtl?"rtl":"ltr";let fontSize,fontWeight,lineHeight,color;if(monospace)if("inherit"===props.size)fontSize="calc(1em - 1px)",lineHeight="normal";else{const themeSize=THEME_SIZES[props.size];fontSize=(0,polished__WEBPACK_IMPORTED_MODULE_1__.Dy)(`${props.theme.fontSizes[themeSize]} - 1px`),lineHeight=(0,polished__WEBPACK_IMPORTED_MODULE_1__.Dy)(`${props.theme.lineHeights[themeSize]} - 1px`)}else if("inherit"!==props.size){const themeSize=THEME_SIZES[props.size];fontSize=props.theme.fontSizes[themeSize],lineHeight=props.theme.lineHeights[themeSize]}if(!0===props.isBold?fontWeight=props.theme.fontWeights.semibold:!1!==props.isBold&&"inherit"===props.size||(fontWeight=props.theme.fontWeights.regular),props.hue){const shade="yellow"===props.hue?700:600;color=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.A)(props.hue,shade,props.theme)}return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["line-height:",";color:",";font-family:",";font-size:",";font-weight:",";direction:",";"],lineHeight,color,fontFamily,fontSize,fontWeight,direction)})(props)),(0,polished__WEBPACK_IMPORTED_MODULE_1__.Ic)(),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_4__.A)("typography.font",props)));StyledFont.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_5__.A,size:"inherit"};try{StyledFont.displayName="StyledFont",StyledFont.__docgenInfo={description:"",displayName:"StyledFont",props:{size:{defaultValue:{value:"inherit"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"inherit"'},{value:'"extralarge"'},{value:'"2xlarge"'},{value:'"3xlarge"'}]}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},isMonospace:{defaultValue:null,description:"",name:"isMonospace",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},"data-garden-id":{defaultValue:null,description:"",name:"data-garden-id",required:!1,type:{name:"string"}},"data-garden-version":{defaultValue:null,description:"",name:"data-garden-version",required:!1,type:{name:"any"}},theme:{defaultValue:{value:"{\n  borders,\n  borderRadii,\n  borderStyles,\n  borderWidths,\n  breakpoints,\n  colors: {\n    base: 'light',\n    ...colors\n  },\n  components: {},\n  fonts,\n  fontSizes,\n  fontWeights,\n  iconSizes,\n  lineHeights,\n  palette,\n  rtl: false,\n  shadowWidths,\n  shadows,\n  space\n}"},description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/styled/StyledFont.tsx#StyledFont"]={docgenInfo:StyledFont.__docgenInfo,name:"StyledFont",path:"packages/typography/src/styled/StyledFont.tsx#StyledFont"})}catch(__react_docgen_typescript_loader_error){}},"./packages/typography/src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{JS:()=>HUE,SK:()=>SIZE,W8:()=>TYPE_ORDERED_LIST,Yj:()=>LANGUAGES,_C:()=>INHERIT_SIZE,lT:()=>TYPE_UNORDERED_LIST});__webpack_require__("./node_modules/react/index.js");const HUE=["grey","red","green","yellow"],SIZE=["small","medium","large"],INHERIT_SIZE=["inherit",...SIZE],TYPE_ORDERED_LIST=["decimal","decimal-leading-zero","lower-alpha","lower-roman","upper-alpha","upper-roman"],TYPE_UNORDERED_LIST=["circle","disc","square"],LANGUAGES=["markup","bash","clike","c","cpp","css","javascript","jsx","coffeescript","actionscript","css-extr","diff","git","go","graphql","handlebars","json","less","makefile","markdown","objectivec","ocaml","python","reason","sass","scss","sql","stylus","tsx","typescript","wasm","yaml"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./packages/typography/README.md":module=>{"use strict";module.exports="# @zendeskgarden/react-typography [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-typography)](https://www.npmjs.com/package/@zendeskgarden/react-typography)\n\nThis package includes components relating to typography in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-typography\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { SM } from '@zendeskgarden/react-typography';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <SM>This is some small body text</SM>;\n</ThemeProvider>;\n```\n"}}]);