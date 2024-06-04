(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[5511],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/notifications/demo/notification.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>notification_stories,notification:()=>notification});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Notification=__webpack_require__("./packages/notifications/src/elements/Notification.tsx"),Close=__webpack_require__("./packages/notifications/src/elements/content/Close.tsx"),Paragraph=__webpack_require__("./packages/notifications/src/elements/content/Paragraph.tsx"),Title=__webpack_require__("./packages/notifications/src/elements/content/Title.tsx"),jsx_runtime=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const NotificationStory=_ref=>{let{children,title,hasClose,hasParagraph,isRegular,"aria-label":ariaLabel,...args}=_ref;return(0,jsx_runtime.jsxs)(Notification.E,{...args,children:[title&&(0,jsx_runtime.jsx)(Title.h,{isRegular,children:title}),hasParagraph?(0,jsx_runtime.jsx)(Paragraph.f,{children}):children,hasClose&&(0,jsx_runtime.jsx)(Close.b,{"aria-label":ariaLabel})]})};NotificationStory.displayName="NotificationStory";var README=__webpack_require__("./packages/notifications/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Packages/Notifications/Notification",component:Notification.E,subcomponents:{Close:Close.b,Paragraph:Paragraph.f,Title:Title.h}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.uY,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Notification",args:{children:"Text",title:"Title",hasClose:!0,hasParagraph:!1,"aria-label":"Close"},argTypes:{title:{name:"children",table:{category:"Title"}},isRegular:{control:{type:"boolean"},table:{category:"Title"}},hasClose:{name:"Close",table:{category:"Story"}},hasParagraph:{name:"Paragraph",table:{category:"Story"}},"aria-label":{table:{category:"Close"}}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1480%3A28056"}},children:args=>(0,jsx_runtime.jsx)(NotificationStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:README})]})}const notification=args=>(0,jsx_runtime.jsx)(NotificationStory,{...args});notification.storyName="Notification",notification.argTypes={title:{name:"children",table:{category:"Title"}},isRegular:{control:{type:"boolean"},table:{category:"Title"}},hasClose:{name:"Close",table:{category:"Story"}},hasParagraph:{name:"Paragraph",table:{category:"Story"}},"aria-label":{table:{category:"Close"}}},notification.args={children:"Text",title:"Title",hasClose:!0,hasParagraph:!1,"aria-label":"Close"},notification.parameters={storySource:{source:"args => <NotificationStory {...args} />"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1480%3A28056"}};const componentMeta={title:"Packages/Notifications/Notification",component:Notification.E,subcomponents:{Close:Close.b,Paragraph:Paragraph.f,Title:Title.h},tags:["stories-mdx"],includeStories:["notification"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const notification_stories=componentMeta,__namedExportsOrder=["notification"]},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.o,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.X});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.X},"./node_modules/@zendeskgarden/svg-icons/src/12/x-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgXStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,focusable:"false",viewBox:"0 0 12 12","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",d:"M3 9l6-6m0 6L3 3"})))}},"./node_modules/@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _g,_circle,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgAlertErrorStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{fill:"none",stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:7.5,cy:8.5,r:7}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",d:"M7.5 4.5V9"}))),_circle||(_circle=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:7.5,cy:12,r:1,fill:"currentColor"})))}},"./node_modules/@zendeskgarden/svg-icons/src/16/alert-warning-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_circle,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgAlertWarningStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",d:"M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5"})),_circle||(_circle=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:7.5,cy:12,r:1,fill:"currentColor"})))}},"./node_modules/@zendeskgarden/svg-icons/src/16/check-circle-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _g,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgCheckCircleStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{fill:"none",stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 9l2.5 2.5 5-5"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:7.5,cy:8.5,r:7}))))}},"./node_modules/@zendeskgarden/svg-icons/src/16/info-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _g,_circle,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgInfoStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:7.5,cy:8.5,r:7,fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",d:"M7.5 12.5V8"}))),_circle||(_circle=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:7.5,cy:5,r:1,fill:"currentColor"})))}},"./packages/notifications/src/elements/Notification.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Notification});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),info_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/info-stroke.svg"),types=__webpack_require__("./packages/notifications/src/types/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),getColorV8=__webpack_require__("./packages/theming/src/utils/getColorV8.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledTitle=__webpack_require__("./packages/notifications/src/styled/content/StyledTitle.ts"),StyledBase=__webpack_require__("./packages/notifications/src/styled/StyledBase.ts");const StyledNotification=(0,styled_components_browser_esm.Ay)(StyledBase.p).attrs({"data-garden-id":"notifications.notification","data-garden-version":"storybook"}).withConfig({displayName:"StyledNotification",componentId:"sc-uf6jh-0"})([""," ",";"],(props=>{const{type,theme}=props,{colors}=theme,{successHue,dangerHue,warningHue}=colors;let color;switch(type){case"success":color=(0,getColorV8.A)(successHue,600,theme);break;case"error":color=(0,getColorV8.A)(dangerHue,600,theme);break;case"warning":color=(0,getColorV8.A)(warningHue,700,theme);break;case"info":color=(0,getColorV8.A)("foreground",600,theme);break;default:color="inherit"}return(0,styled_components_browser_esm.AH)(["","{color:",";}"],StyledTitle.Q,color)}),(props=>(0,retrieveComponentStyles.A)("notifications.notification",props)));StyledNotification.propTypes={type:prop_types_default().oneOf(types.Z)},StyledNotification.defaultProps={theme:theme.A};var StyledIcon=__webpack_require__("./packages/notifications/src/styled/StyledIcon.ts"),icons=__webpack_require__("./packages/notifications/src/utils/icons.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Notification=(0,react.forwardRef)(((_ref,ref)=>{let{children,type,...props}=_ref;const Icon=type?icons.E[type]:info_stroke.A,hue=type&&icons.V[type];return(0,jsx_runtime.jsxs)(StyledNotification,{ref,type,isFloating:!0,role:"alert",...props,children:[type&&(0,jsx_runtime.jsx)(StyledIcon.v,{hue,children:(0,jsx_runtime.jsx)(Icon,{})}),children]})}));Notification.displayName="Notification",Notification.propTypes={type:prop_types_default().oneOf(types.Z)};try{Notification.displayName="Notification",Notification.__docgenInfo={description:"",displayName:"Notification",props:{type:{defaultValue:null,description:"Applies notification type styles",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/notifications/src/elements/Notification.tsx#Notification"]={docgenInfo:Notification.__docgenInfo,name:"Notification",path:"packages/notifications/src/elements/Notification.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}},"./packages/notifications/src/elements/content/Close.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>Close});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),getColorV8=__webpack_require__("./packages/theming/src/utils/getColorV8.ts"),focusStyles=__webpack_require__("./packages/theming/src/utils/focusStyles.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledClose=styled_components_browser_esm.Ay.button.attrs({"data-garden-id":"notifications.close","data-garden-version":"storybook"}).withConfig({displayName:"StyledClose",componentId:"sc-1mr9nx1-0"})(["display:block;position:absolute;top:","px;",":",";transition:background-color 0.1s ease-in-out,color 0.25s ease-in-out,box-shadow 0.1s ease-in-out;border:none;border-radius:50%;background-color:transparent;cursor:pointer;padding:0;width:","px;height:","px;overflow:hidden;color:",";font-size:0;user-select:none;&::-moz-focus-inner{border:0;}&:hover{color:",";}"," ",";"],(props=>props.theme.space.base),(props=>props.theme.rtl?"left":"right"),(props=>`${props.theme.space.base}px`),(props=>7*props.theme.space.base),(props=>7*props.theme.space.base),(props=>props.hue?(0,getColorV8.A)(props.hue,"warningHue"===props.hue?700:600,props.theme):(0,getColorV8.A)("neutralHue",600,props.theme)),(props=>props.hue?(0,getColorV8.A)(props.hue,800,props.theme):(0,getColorV8.A)("neutralHue",800,props.theme)),(props=>(0,focusStyles.T)({theme:props.theme,inset:!0})),(props=>(0,retrieveComponentStyles.A)("notifications.close",props)));StyledClose.defaultProps={theme:theme.A};var useNotificationsContext=__webpack_require__("./packages/notifications/src/utils/useNotificationsContext.ts"),useText=__webpack_require__("./packages/theming/src/utils/useText.ts"),x_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/12/x-stroke.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Close=react.forwardRef(((props,ref)=>{const ariaLabel=(0,useText.F)(Close,props,"aria-label","Close"),hue=(0,useNotificationsContext.V)();return(0,jsx_runtime.jsx)(StyledClose,{ref,hue,"aria-label":ariaLabel,...props,children:(0,jsx_runtime.jsx)(x_stroke.A,{})})}));Close.displayName="Close";try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/notifications/src/elements/content/Close.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"packages/notifications/src/elements/content/Close.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./packages/notifications/src/elements/content/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>Paragraph});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledParagraph=styled_components_browser_esm.Ay.p.attrs({"data-garden-id":"notifications.paragraph","data-garden-version":"storybook"}).withConfig({displayName:"StyledParagraph",componentId:"sc-12tmd6p-0"})(["margin:","px 0 0;",";"],(props=>2*props.theme.space.base),(props=>(0,retrieveComponentStyles.A)("notifications.paragraph",props)));StyledParagraph.defaultProps={theme:theme.A};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paragraph=react.forwardRef(((props,ref)=>(0,jsx_runtime.jsx)(StyledParagraph,{ref,...props})));Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/notifications/src/elements/content/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"packages/notifications/src/elements/content/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},"./packages/notifications/src/elements/content/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Title});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/notifications/src/styled/content/StyledTitle.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Title=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.Q,{ref,...props})));Title.displayName="Title";try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{isRegular:{defaultValue:null,description:"Applies regular (non-bold) font weight",name:"isRegular",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/notifications/src/elements/content/Title.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"packages/notifications/src/elements/content/Title.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}},"./packages/notifications/src/styled/StyledBase.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>StyledBase});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getColorV8.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/getLineHeight.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const boxShadow=props=>{const{theme}=props,{space,shadows}=theme,offsetY=5*space.base+"px",blurRadius=7*space.base+"px",color=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.A)("chromeHue",600,theme,.15);return shadows.lg(offsetY,blurRadius,color)},StyledBase=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div.withConfig({displayName:"StyledBase",componentId:"sc-14syaqw-0"})(["position:relative;border:",";border-radius:",";box-shadow:",";padding:",";line-height:",";font-size:",";direction:",";",";"],(props=>props.theme.borders.sm),(props=>props.theme.borderRadii.md),(props=>props.isFloating&&boxShadow),(props=>{const{space}=props.theme;return`${5*space.base+"px"} ${10*space.base+"px"}`}),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.A)(5*props.theme.space.base,props.theme.fontSizes.md)),(props=>props.theme.fontSizes.md),(props=>props.theme.rtl&&"rtl"),(props=>{let backgroundColor,borderColor,foregroundColor;return props.hue?(backgroundColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.A)(props.hue,100,props.theme),borderColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.A)(props.hue,300,props.theme),foregroundColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.A)(props.hue,"info"===props.type?600:700,props.theme)):(backgroundColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.A)("background",600,props.theme),borderColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.A)("neutralHue",300,props.theme),foregroundColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.A)("neutralHue",800,props.theme)),(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(["border-color:",";background-color:",";color:",";"],borderColor,backgroundColor,foregroundColor)}));StyledBase.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.A}},"./packages/notifications/src/styled/StyledIcon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>StyledIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/getColorV8.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)((_ref=>{let{children,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),props)})).withConfig({displayName:"StyledIcon",componentId:"sc-msklws-0"})(["position:absolute;right:",";left:",";margin-top:","px;color:",";"],(props=>props.theme.rtl&&4*props.theme.space.base+"px"),(props=>!props.theme.rtl&&4*props.theme.space.base+"px"),(props=>props.theme.space.base/2),(props=>props.hue&&(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.A)(props.hue,"warningHue"===props.hue?700:600,props.theme)));StyledIcon.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.A}},"./packages/notifications/src/styled/content/StyledTitle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>StyledTitle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/getColorV8.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledTitle=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div.attrs({"data-garden-id":"notifications.title","data-garden-version":"storybook"}).withConfig({displayName:"StyledTitle",componentId:"sc-xx4jsv-0"})(["margin:0;color:",";font-weight:",";",";"],(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.A)("foreground",600,props.theme)),(props=>props.isRegular?props.theme.fontWeights.regular:props.theme.fontWeights.semibold),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.A)("notifications.title",props)));StyledTitle.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.A}},"./packages/notifications/src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>TYPE});__webpack_require__("./node_modules/react/index.js");const TYPE=["success","warning","error","info"]},"./packages/notifications/src/utils/icons.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>validationIcons,V:()=>validationHues});var _zendeskgarden_svg_icons_src_16_alert_error_stroke_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg"),_zendeskgarden_svg_icons_src_16_check_circle_stroke_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/check-circle-stroke.svg"),_zendeskgarden_svg_icons_src_16_alert_warning_stroke_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/alert-warning-stroke.svg"),_zendeskgarden_svg_icons_src_16_info_stroke_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/info-stroke.svg");const validationIcons={success:_zendeskgarden_svg_icons_src_16_check_circle_stroke_svg__WEBPACK_IMPORTED_MODULE_1__.A,error:_zendeskgarden_svg_icons_src_16_alert_error_stroke_svg__WEBPACK_IMPORTED_MODULE_0__.A,warning:_zendeskgarden_svg_icons_src_16_alert_warning_stroke_svg__WEBPACK_IMPORTED_MODULE_2__.A,info:_zendeskgarden_svg_icons_src_16_info_stroke_svg__WEBPACK_IMPORTED_MODULE_3__.A},validationHues={success:"successHue",error:"dangerHue",warning:"warningHue",info:"neutralHue"}},"./packages/notifications/src/utils/useNotificationsContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>NotificationsContext,V:()=>useNotificationsContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const NotificationsContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useNotificationsContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NotificationsContext)},"./packages/theming/src/utils/focusStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>focusStyles,o:()=>SELECTOR_FOCUS_VISIBLE});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_getFocusBoxShadow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getFocusBoxShadow.ts");const SELECTOR_FOCUS_VISIBLE='&:focus-visible, &[data-garden-focus-visible="true"]',focusStyles=_ref=>{let{condition=!0,selector=SELECTOR_FOCUS_VISIBLE,shadowWidth="md",spacerWidth="xs",styles:{boxShadow,...styles}={},theme,...options}=_ref;const _boxShadow=condition?(0,_getFocusBoxShadow__WEBPACK_IMPORTED_MODULE_0__.Q)({boxShadow,shadowWidth,spacerWidth,theme,...options}):boxShadow;let outline,outlineOffset;return null===spacerWidth?outline=theme.shadowWidths[shadowWidth]:(outline=`${(0,polished__WEBPACK_IMPORTED_MODULE_1__.Dy)(`${theme.shadowWidths[shadowWidth]} - ${theme.shadowWidths[spacerWidth]}`)} solid transparent`,outlineOffset=theme.shadowWidths[spacerWidth]),(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["&:focus{outline:none;}","{outline:",";outline-offset:",";box-shadow:",";","}"],selector,outline,outlineOffset,_boxShadow,styles)}},"./packages/theming/src/utils/getFocusBoxShadow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>getFocusBoxShadow});var _elements_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_getColorV8__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getColorV8.ts");const getFocusBoxShadow=_ref=>{let{boxShadow,inset=!1,hue="primaryHue",shade=_getColorV8__WEBPACK_IMPORTED_MODULE_0__.M,shadowWidth="md",spacerHue="background",spacerShade=_getColorV8__WEBPACK_IMPORTED_MODULE_0__.M,spacerWidth="xs",theme=_elements_theme__WEBPACK_IMPORTED_MODULE_1__.A}=_ref;const color=(0,_getColorV8__WEBPACK_IMPORTED_MODULE_0__.A)(hue,shade,theme),shadow=theme.shadows[shadowWidth](color);if(null===spacerWidth)return`${inset?"inset":""} ${shadow}`;const spacerColor=(0,_getColorV8__WEBPACK_IMPORTED_MODULE_0__.A)(spacerHue,spacerShade,theme),retVal=`\n    ${inset?"inset":""} ${theme.shadows[spacerWidth](spacerColor)},\n    ${inset?"inset":""} ${shadow}`;return boxShadow?`${retVal}, ${boxShadow}`:retVal}},"./packages/theming/src/utils/getLineHeight.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>getLineHeight});var polished__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/polished/dist/polished.esm.js");function getLineHeight(height,fontSize){const[heightValue,heightUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.J$)(height.toString()),[fontSizeValue,fontSizeUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.J$)(fontSize.toString());if(heightUnit&&"px"!==heightUnit)throw new Error(`Unexpected \`height\` with '${heightUnit}' units.`);if(fontSizeUnit&&"px"!==fontSizeUnit)throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit}' units.`);return heightValue/fontSizeValue}},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{A:()=>retrieveComponentStyles})},"./packages/theming/src/utils/useText.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>useText});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useText=function(component,props,name,text){let condition=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];const value=condition?props[name]:void 0;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(condition){if("children"===name)throw new Error("Error: `children` is not a valid `useText` prop.");if(null===value||""===value)throw new Error(component.displayName?`Error: you must provide a valid \`${name}\` text value for <${component.displayName}>.`:`Error: you must provide a valid \`${name}\` text value.`);if(void 0===value)return text}return value}),[component.displayName,value,name,text,condition])}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./packages/notifications/README.md":module=>{"use strict";module.exports="# @zendeskgarden/react-notifications [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-notifications)](https://www.npmjs.com/package/@zendeskgarden/react-notifications)\n\nThis package includes several varieties of notifications and wells within\nthe [Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-notifications\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Notification, Title } from '@zendeskgarden/react-notifications';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Notification>\n    <Title>Example Title</Title>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit...\n  </Notification>\n</ThemeProvider>;\n```\n\n## Toasts\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Button } from '@zendeskgarden/react-buttons';\nimport { Notification, Close, ToastProvider, useToast } from '@zendeskgarden/react-notifications';\n\nconst ToastExample = () => {\n  const { addToast } = useToast();\n\n  return (\n    <Button\n      onClick={() =>\n        addToast(({ close }) => (\n          <Notification>\n            Example notification\n            <Close onClick={close} aria-label=\"Close\" />\n          </Notification>\n        ))\n      }\n    >\n      Add toast\n    </Button>\n  );\n};\n\n<ThemeProvider>\n  <ToastProvider>\n    <ToastExample />\n  </ToastProvider>\n</ThemeProvider>;\n```\n"}}]);