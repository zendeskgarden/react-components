"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[2554],{"./packages/avatars/demo/avatar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{avatar:()=>avatar,default:()=>avatar_stories});var _g,react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Avatar=__webpack_require__("./packages/avatars/src/elements/Avatar.tsx");__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const user_solo_stroke=function SvgUserSoloStroke(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_g||(_g=react.createElement("g",{fill:"none",stroke:"currentColor"},react.createElement("circle",{cx:8,cy:5,r:3.5}),react.createElement("path",{strokeLinecap:"round",d:"M2.5 15.5c.3-2.8 2.6-5 5.5-5s5.2 2.2 5.5 5"}))))};var _path;function zendesk_extends(){return zendesk_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},zendesk_extends.apply(this,arguments)}const zendesk=function SvgZendesk(props){return react.createElement("svg",zendesk_extends({xmlns:"http://www.w3.org/2000/svg",width:26,height:26,focusable:"false",viewBox:"0 0 26 26","aria-hidden":"true"},props),_path||(_path=react.createElement("path",{fill:"currentColor",d:"M12 8.2v14.5H0zM12 3c0 3.3-2.7 6-6 6S0 6.3 0 3h12zm2 19.7c0-3.3 2.7-6 6-6s6 2.7 6 6H14zm0-5.2V3h12z"})))};var palette=__webpack_require__("./packages/theming/src/elements/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AvatarStory=_ref=>{let{children,type,...args}=_ref;return(0,jsx_runtime.jsx)(Avatar.q,{...args,backgroundColor:args.backgroundColor||("image"===type?void 0:palette.Z.kale[800]),children:{icon:args.isSystem?(0,jsx_runtime.jsx)(zendesk,{}):(0,jsx_runtime.jsx)(user_solo_stroke,{}),image:(0,jsx_runtime.jsx)("img",{alt:"user",src:`images/avatars/${args.isSystem?"system":"user"}.png`}),text:(0,jsx_runtime.jsx)(Avatar.q.Text,{children:children||(args.isSystem?"ZD":"G")})}[type||"image"]})};AvatarStory.displayName="AvatarStory";const AVATAR_TYPE=["icon","image","text"];var README=__webpack_require__("./packages/avatars/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Avatars/Avatar",component:Avatar.q,subcomponents:{"Avatar.Text":Avatar.q.Text}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Avatar",args:{type:AVATAR_TYPE[1]},argTypes:{backgroundColor:{control:"color"},badge:{control:"number"},foregroundColor:{control:"color"},children:{control:"text",table:{category:"Avatar.Text"}},type:{control:"radio",options:AVATAR_TYPE,table:{category:"Story"}}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A110"}},children:args=>(0,jsx_runtime.jsx)(AvatarStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README})]})}const avatar=args=>(0,jsx_runtime.jsx)(AvatarStory,{...args});avatar.storyName="Avatar",avatar.argTypes={backgroundColor:{control:"color"},badge:{control:"number"},foregroundColor:{control:"color"},children:{control:"text",table:{category:"Avatar.Text"}},type:{control:"radio",options:AVATAR_TYPE,table:{category:"Story"}}},avatar.args={type:AVATAR_TYPE[1]},avatar.parameters={storySource:{source:"args => <AvatarStory {...args} />"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A110"}};const componentMeta={title:"Packages/Avatars/Avatar",component:Avatar.q,subcomponents:{"Avatar.Text":Avatar.q.Text},tags:["stories-mdx"],includeStories:["avatar"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const avatar_stories=componentMeta},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./packages/avatars/src/elements/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Avatar_Avatar});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./packages/avatars/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useText=__webpack_require__("./packages/theming/src/utils/useText.ts"),clock_stroke=__webpack_require__("./packages/avatars/node_modules/@zendeskgarden/svg-icons/src/12/clock-stroke.svg"),_16_clock_stroke=__webpack_require__("./packages/avatars/node_modules/@zendeskgarden/svg-icons/src/16/clock-stroke.svg"),arrow_left_sm_stroke=__webpack_require__("./packages/avatars/node_modules/@zendeskgarden/svg-icons/src/12/arrow-left-sm-stroke.svg"),_16_arrow_left_sm_stroke=__webpack_require__("./packages/avatars/node_modules/@zendeskgarden/svg-icons/src/16/arrow-left-sm-stroke.svg"),types=__webpack_require__("./packages/avatars/src/types/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),polished_esm=__webpack_require__("./packages/avatars/node_modules/polished/dist/polished.esm.js");const StyledText=styled_components_browser_esm.ZP.span.attrs({"data-garden-id":"avatars.text","data-garden-version":"storybook"}).withConfig({displayName:"StyledText",componentId:"sc-1a6hivh-0"})(["overflow:hidden;text-align:center;white-space:nowrap;",";"],(props=>(0,retrieveComponentStyles.Z)("avatars.text",props)));StyledText.defaultProps={theme:theme.Z};var StyledStatusIndicatorBase=__webpack_require__("./packages/avatars/src/styled/StyledStatusIndicatorBase.ts"),utility=__webpack_require__("./packages/avatars/src/styled/utility.ts");const[xxs,xs,s,m,l]=types.N,StyledStatusIndicator=(0,styled_components_browser_esm.ZP)(StyledStatusIndicatorBase.L).attrs({"data-garden-id":"avatars.status_indicator","data-garden-version":"storybook"}).withConfig({displayName:"StyledStatusIndicator",componentId:"sc-16t9if3-0"})([""," "," ",";"],(props=>{const isVisible=!(0,utility.q9)([xxs,xs],props.size),borderWidth=(0,utility.Zu)(props);let padding="0";return props.size===s?padding=(0,polished_esm.mA)(`${props.theme.space.base+1}px - (${borderWidth} * 2)`):(0,utility.q9)([m,l],props.size)&&(padding=(0,polished_esm.mA)(`${props.theme.space.base+3}px - (${borderWidth} * 2)`)),(0,styled_components_browser_esm.iv)(["max-width:calc(2em + ("," * 3));box-sizing:content-box;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;font-size:",";font-weight:",";& > span{display:",";padding:0 ",";max-width:2em;overflow:inherit;text-align:inherit;text-overflow:inherit;white-space:inherit;}& > svg{","}"],borderWidth,props.theme.fontSizes.xs,props.theme.fontWeights.semibold,isVisible?"inline-block":"none",padding,!isVisible&&"display: none;")}),(props=>{const{theme,type,size,borderColor,surfaceColor}=props;let boxShadow=theme.shadows.sm(surfaceColor||(type?theme.colors.background:theme.palette.white));return size===xxs&&(boxShadow=boxShadow.replace(theme.shadowWidths.sm,"1px")),(0,styled_components_browser_esm.iv)(["border-color:",";box-shadow:",";"],borderColor,boxShadow)}),(props=>(0,retrieveComponentStyles.Z)("avatars.status_indicator",props)));StyledStatusIndicator.defaultProps={size:"medium",theme:theme.Z};const StyledAvatar=styled_components_browser_esm.ZP.figure.attrs({"data-garden-id":"avatars.avatar","data-garden-version":"storybook"}).withConfig({displayName:"StyledAvatar",componentId:"sc-608m04-0"})(["display:inline-flex;position:relative;align-items:center;justify-content:center;transition:box-shadow ","s ease-in-out,color 0.1s ease-in-out;margin:0;vertical-align:middle;box-sizing:border-box;",";",";&::before{position:absolute;top:0;left:0;transition:box-shadow ","s ease-in-out;content:'';}&::before,&& > img{border-radius:inherit;width:100%;height:100%;}&& > img{box-sizing:inherit;vertical-align:bottom;object-fit:cover;}&& > svg{width:1em;height:1em;}& > ","{",";}",";"],utility.CT,(props=>(props=>{let boxShadow,borderRadius,size,fontSize,svgSize;return"extraextrasmall"===props.size?(boxShadow=`0 0 0 ${(0,polished_esm.mA)(`${props.theme.shadowWidths.sm} - 1`)}`,borderRadius=props.isSystem?(0,polished_esm.mA)(`${props.theme.borderRadii.md} - 1`):"50%",size=4*props.theme.space.base+"px",fontSize=0,svgSize=3*props.theme.space.base+"px"):"extrasmall"===props.size?(boxShadow=`inset 0 0 0 ${props.theme.shadowWidths.sm}`,borderRadius=props.isSystem?(0,polished_esm.mA)(`${props.theme.borderRadii.md} - 1`):"50%",size=6*props.theme.space.base+"px",fontSize=props.theme.fontSizes.sm,svgSize=3*props.theme.space.base+"px"):"small"===props.size?(boxShadow=`inset 0 0 0 ${props.theme.shadowWidths.sm}`,borderRadius=props.isSystem?(0,polished_esm.mA)(`${props.theme.borderRadii.md} - 1`):"50%",size=8*props.theme.space.base+"px",fontSize=props.theme.fontSizes.md,svgSize=3*props.theme.space.base+"px"):"large"===props.size?(boxShadow=`inset 0 0 0 ${props.theme.shadowWidths.sm}`,borderRadius=props.isSystem?(0,polished_esm.mA)(`${props.theme.borderRadii.md} + 1`):"50%",size=12*props.theme.space.base+"px",fontSize=props.theme.fontSizes.xl,svgSize=6*props.theme.space.base+"px"):(boxShadow=`inset 0 0 0 ${props.theme.shadowWidths.sm}`,borderRadius=props.isSystem?props.theme.borderRadii.md:"50%",size=10*props.theme.space.base+"px",fontSize=props.theme.fontSizes.lg,svgSize=4*props.theme.space.base+"px"),(0,styled_components_browser_esm.iv)(["border-radius:",";width:"," !important;height:"," !important;::before{box-shadow:",";}& > svg{font-size:",";}& ","{line-height:",";font-size:",";}"],borderRadius,size,size,boxShadow,svgSize,StyledText,size,fontSize)})(props)),(props=>(props=>{const statusColor=(0,utility.z2)(props.status,props.theme),backgroundColor=props.backgroundColor||"transparent",foregroundColor=props.foregroundColor||props.theme.palette.white,surfaceColor=props.status?props.surfaceColor||props.theme.colors.background:"transparent";return(0,styled_components_browser_esm.iv)(["box-shadow:",";background-color:",";color:",";& > svg,& ","{color:",";}"],props.theme.shadows.sm(statusColor),backgroundColor,surfaceColor,StyledText,foregroundColor)})(props)),utility.CT,StyledStatusIndicator,(props=>{const[xxs,xs,s,m,l]=types.N;let position=-1*props.theme.space.base+"px";switch(props.size){case s:case m:position=(0,polished_esm.mA)(`${position}  + 2`);break;case xxs:case xs:case l:position=(0,polished_esm.mA)(`${position}  + 3`)}const animation=(0,styled_components_browser_esm.F4)(["0%{transform:scale(.1);}"]);return(0,styled_components_browser_esm.iv)(["position:absolute;",":",";bottom:",";transition:all ","s ease-in-out;",""],props.theme.rtl?"left":"right",position,position,utility.CT,"active"===props.status&&(0,styled_components_browser_esm.iv)(["animation:"," ","s ease-in-out;"],animation,1.5*utility.CT))}),(props=>(0,retrieveComponentStyles.Z)("avatars.avatar",props)));StyledAvatar.defaultProps={size:"medium",theme:theme.Z};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextComponent=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(StyledText,{ref,...props})));TextComponent.displayName="Avatar.Text";const Text=TextComponent;try{Text.displayName="Avatar.Text",Text.__docgenInfo={description:"",displayName:"Avatar.Text",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/avatars/src/elements/components/Text.tsx#Avatar.Text"]={docgenInfo:Avatar.Text.__docgenInfo,name:"Avatar.Text",path:"packages/avatars/src/elements/components/Text.tsx#Avatar.Text"})}catch(__react_docgen_typescript_loader_error){}const AvatarComponent=(0,react.forwardRef)(((_ref,ref)=>{let{isSystem,size,status,children,badge,surfaceColor,backgroundColor,foregroundColor,...props}=_ref;const computedStatus=void 0===badge?status:"active";let ClockIcon=clock_stroke.Z,ArrowLeftIcon=arrow_left_sm_stroke.Z;["large","medium"].includes(size)&&(ClockIcon=_16_clock_stroke.Z,ArrowLeftIcon=_16_arrow_left_sm_stroke.Z);const defaultStatusLabel=(0,react.useMemo)((()=>{let statusMessage=computedStatus;if("active"===computedStatus){const count="string"==typeof badge?parseInt(badge,10):badge;statusMessage="active. "+(count>0?`${count} notification${count>1?"s":""}`:"no notifications")}return["status"].concat(statusMessage||[]).join(": ")}),[computedStatus,badge]),shouldValidate=void 0!==computedStatus,statusLabel=(0,useText.X)(AvatarComponent,props,"statusLabel",defaultStatusLabel,shouldValidate);return(0,jsx_runtime.jsxs)(StyledAvatar,{ref,isSystem,size,status:computedStatus,surfaceColor,backgroundColor,foregroundColor,"aria-atomic":"true","aria-live":"polite",...props,children:[react.Children.only(children),computedStatus&&(0,jsx_runtime.jsx)(StyledStatusIndicator,{size,type:computedStatus,surfaceColor,"aria-label":statusLabel,as:"figcaption",children:"active"===computedStatus?(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",children:badge}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["away"===computedStatus?(0,jsx_runtime.jsx)(ClockIcon,{"data-icon-status":computedStatus}):null,"transfers"===computedStatus?(0,jsx_runtime.jsx)(ArrowLeftIcon,{"data-icon-status":computedStatus}):null]})})]})}));AvatarComponent.displayName="Avatar",AvatarComponent.propTypes={backgroundColor:prop_types_default().string,foregroundColor:prop_types_default().string,surfaceColor:prop_types_default().string,isSystem:prop_types_default().bool,badge:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),size:prop_types_default().oneOf(types.N),status:prop_types_default().oneOf(types.Q),statusLabel:prop_types_default().string},AvatarComponent.defaultProps={size:"medium"};const Avatar_Avatar=AvatarComponent;Avatar_Avatar.Text=Text;try{Avatar_Avatar.displayName="Avatar",Avatar_Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{backgroundColor:{defaultValue:null,description:"Sets the avatar background color",name:"backgroundColor",required:!1,type:{name:"string"}},foregroundColor:{defaultValue:null,description:"Sets the color for child SVG or `Avatar.Text` components",name:"foregroundColor",required:!1,type:{name:"string"}},surfaceColor:{defaultValue:null,description:"Provides surface color for an avatar placed on a non-white background",name:"surfaceColor",required:!1,type:{name:"string"}},isSystem:{defaultValue:null,description:"Applies system styling for representing objects, brands, or products",name:"isSystem",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Specifies the avatar size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraextrasmall"'},{value:'"extrasmall"'}]}},status:{defaultValue:null,description:"Applies status styling",name:"status",required:!1,type:{name:"enum",value:[{value:'"available"'},{value:'"away"'},{value:'"transfers"'},{value:'"offline"'}]}},statusLabel:{defaultValue:null,description:"Specifies the status label",name:"statusLabel",required:!1,type:{name:"string"}},badge:{defaultValue:null,description:"Sets the badge text and applies active styling",name:"badge",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/avatars/src/elements/Avatar.tsx#Avatar"]={docgenInfo:Avatar_Avatar.__docgenInfo,name:"Avatar",path:"packages/avatars/src/elements/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./packages/avatars/src/styled/StyledStatusIndicatorBase.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>StyledStatusIndicatorBase});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_utility__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/avatars/src/styled/utility.ts");const iconFadeIn=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.F4)(["0%{opacity:0;}100%{opacity:1;}"]),StyledStatusIndicatorBase=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div.attrs({"data-garden-id":"avatars.status-indicator.base","data-garden-version":"storybook"}).withConfig({displayName:"StyledStatusIndicatorBase",componentId:"sc-1rininy-0"})(["transition:inherit;"," "," ",";"],(props=>{const offset=(0,_utility__WEBPACK_IMPORTED_MODULE_1__.Zu)(props),size=(0,_utility__WEBPACK_IMPORTED_MODULE_1__.W5)(props,offset);return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["border:"," ",";border-radius:",";width:",";min-width:",";height:",";line-height:",";& > svg{position:absolute;top:-",";left:-",";transform-origin:50% 50%;animation:"," ","s;max-height:unset;&[data-icon-status='transfers']{transform:scale(",",1);}&[data-icon-status='away'] circle{display:none;}}"],offset,props.theme.borderStyles.solid,size,size,size,size,size,offset,offset,iconFadeIn,_utility__WEBPACK_IMPORTED_MODULE_1__.CT,props.theme.rtl?-1:1)}),(props=>{let backgroundColor=(0,_utility__WEBPACK_IMPORTED_MODULE_1__.z2)(props.type,props.theme),borderColor=backgroundColor;return"offline"===props.type&&(borderColor=(0,_utility__WEBPACK_IMPORTED_MODULE_1__.z2)(props.type,props.theme),backgroundColor=props.theme.palette.white),(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["border-color:",";background-color:",";color:",";"],borderColor,backgroundColor,props.theme.palette.white)}),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)("avatars.status-indicator.base",props)));StyledStatusIndicatorBase.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z,size:"small"}},"./packages/avatars/src/styled/utility.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CT:()=>TRANSITION_DURATION,W5:()=>getStatusSize,Zu:()=>getStatusBorderOffset,q9:()=>includes,z2:()=>getStatusColor});var _zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/getColor.ts"),polished__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/avatars/node_modules/polished/dist/polished.esm.js"),_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/avatars/src/types/index.ts");const[xxs,xs,s,m,l]=_types__WEBPACK_IMPORTED_MODULE_0__.N,TRANSITION_DURATION=.25;function getStatusColor(type,theme){switch(type){case"active":return(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.L)("crimson",400,theme);case"available":return(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.L)("mint",400,theme);case"away":return(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.L)("orange",400,theme);case"transfers":return(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.L)("azure",400,theme);case"offline":return(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.L)("grey",500,theme);default:return"transparent"}}function getStatusBorderOffset(props){return props.size===xxs?(0,polished__WEBPACK_IMPORTED_MODULE_2__.mA)(`${props.theme.shadowWidths.sm} - 1`):props.theme.shadowWidths.sm}function getStatusSize(props,offset){const isActive="active"===props.type;switch(props.size){case xxs:return(0,polished__WEBPACK_IMPORTED_MODULE_2__.mA)(`${props.theme.space.base}px - ${offset}`);case xs:return(0,polished__WEBPACK_IMPORTED_MODULE_2__.mA)(`${2*props.theme.space.base}px - (${offset} * 2)`);case s:return(0,polished__WEBPACK_IMPORTED_MODULE_2__.mA)(`${3*props.theme.space.base}px ${isActive?"":`- (${offset} * 2)`}`);case m:case l:return(0,polished__WEBPACK_IMPORTED_MODULE_2__.mA)(`${4*props.theme.space.base}px ${isActive?"":`- (${offset} * 2)`}`);default:return"0"}}function includes(array,element){return array.includes(element)}},"./packages/avatars/src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SIZE,Q:()=>STATUS});__webpack_require__("./node_modules/react/index.js");const SIZE=["extraextrasmall","extrasmall","small","medium","large"],STATUS=["available","away","transfers","offline"]},"./packages/theming/src/utils/getColor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>getColor,d:()=>DEFAULT_SHADE});var _elements_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/node_modules/polished/dist/polished.esm.js"),lodash_memoize__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/node_modules/lodash.memoize/index.js");const DEFAULT_SHADE=600,adjust=(color,expected,actual)=>{if(expected!==actual){const amount=Math.abs(expected-actual)/100*.05;return expected>actual?(0,polished__WEBPACK_IMPORTED_MODULE_1__._j)(amount,color):(0,polished__WEBPACK_IMPORTED_MODULE_1__.$n)(amount,color)}return color},getColor=__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_0__)()((function(hue){let retVal,shade=arguments.length>1&&void 0!==arguments[1]?arguments[1]:DEFAULT_SHADE,theme=arguments.length>2?arguments[2]:void 0,transparency=arguments.length>3?arguments[3]:void 0;if(isNaN(shade))return;const palette=theme&&theme.palette?theme.palette:_elements_theme__WEBPACK_IMPORTED_MODULE_2__.Z.palette,colors=theme&&theme.colors?theme.colors:_elements_theme__WEBPACK_IMPORTED_MODULE_2__.Z.colors;let _hue;if(_hue="string"==typeof hue&&colors[hue]||hue,Object.prototype.hasOwnProperty.call(palette,_hue)&&(_hue=palette[_hue]),"object"==typeof _hue){if(retVal=_hue[shade],!retVal){const _shade=Object.keys(_hue).map((hueKey=>parseInt(hueKey,10))).reduce(((previous,current)=>Math.abs(current-shade)<Math.abs(previous-shade)?current:previous));retVal=adjust(_hue[_shade],shade,_shade)}}else retVal=adjust(_hue,shade,DEFAULT_SHADE);return transparency&&(retVal=(0,polished__WEBPACK_IMPORTED_MODULE_1__.m4)(retVal,transparency)),retVal}),((hue,shade,theme,transparency)=>JSON.stringify({hue,shade,palette:theme?.palette,colors:theme?.colors,transparency})))},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{Z:()=>retrieveComponentStyles})},"./packages/theming/src/utils/useText.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>useText});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useText=function(component,props,name,text){let condition=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];const value=condition?props[name]:void 0;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(condition){if("children"===name)throw new Error("Error: `children` is not a valid `useText` prop.");if(null===value||""===value)throw new Error(component.displayName?`Error: you must provide a valid \`${name}\` text value for <${component.displayName}>.`:`Error: you must provide a valid \`${name}\` text value.`);if(void 0===value)return text}return value}),[component.displayName,value,name,text,condition])}},"./packages/avatars/README.md":module=>{module.exports='# @zendeskgarden/react-avatars [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-avatars)](https://www.npmjs.com/package/@zendeskgarden/react-avatars)\n\nThis package includes components relating to avatars in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-avatars\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n```jsx\nimport { ThemeProvider } from \'@zendeskgarden/react-theming\';\nimport { Avatar, StatusIndicator } from \'@zendeskgarden/react-avatars\';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Avatar>\n    <img src="images/user.png" alt="Example Avatar" />\n  </Avatar>\n\n  <StatusIndicator type="available" aria-label="status: online">\n    Available\n  </StatusIndicator>\n</ThemeProvider>;\n```\n'}}]);