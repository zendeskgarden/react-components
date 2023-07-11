"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[9215],{"./packages/dropdowns/demo/~patterns/patterns.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>patterns_stories,menu:()=>menu});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Menu=__webpack_require__("./packages/dropdowns/src/elements/Menu/Menu.tsx"),Dropdown=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./packages/dropdowns/src/elements/Dropdown/Dropdown.tsx")),Trigger=__webpack_require__("./packages/dropdowns/src/elements/Trigger/Trigger.tsx"),Item=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/Item.tsx"),Button=__webpack_require__("./packages/buttons/src/elements/Button.tsx"),Grid=__webpack_require__("./packages/grid/src/elements/Grid.tsx"),Row=__webpack_require__("./packages/grid/src/elements/Row.tsx"),Col=__webpack_require__("./packages/grid/src/elements/Col.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuStory=_ref=>{let{items,appendToNode,...rest}=_ref;const portalsRef=(0,react.useRef)(null),[isReady,setIsReady]=(0,react.useState)(!1);return(0,react.useLayoutEffect)((()=>{setIsReady(!0)}),[]),(0,jsx_runtime.jsxs)("div",{style:{minHeight:"300px"},children:[isReady&&(0,jsx_runtime.jsx)(Grid.r,{children:(0,jsx_runtime.jsx)(Row.X,{style:{position:"relative",overflow:"hidden",height:"200px"},children:(0,jsx_runtime.jsxs)(Col.J,{children:[(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloremque ducimus, hic molestias perferendis quia recusandae repellat sequi unde voluptas!"}),(0,jsx_runtime.jsxs)(Dropdown.L,{downshiftProps:{itemToString:item=>item&&item.value},children:[(0,jsx_runtime.jsx)(Trigger.x,{children:(0,jsx_runtime.jsx)(Button.z,{children:"Menu"})}),(0,jsx_runtime.jsx)(Menu.v,{appendToNode:"portal"===appendToNode&&portalsRef.current||void 0,...rest,children:items.map(((item,index)=>(0,jsx_runtime.jsx)(Item.c,{value:item.value,children:item.text},index)))})]}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse sed sit vero voluptate. Ab autem necessitatibus non officiis quas. Alias consectetur doloremque ea eos, eum ex harum incidunt, ipsa ipsam iste magni provident quas quidem ratione similique ut voluptatem. A ab alias architecto ducimus est, explicabo inventore ipsa, iste laboriosam molestiae, omnis perspiciatis provident quae quibusdam suscipit ut velit vitae voluptas voluptate voluptatem. Corporis, cum dolores excepturi exercitationem iure magni modi nesciunt optio possimus quaerat? Accusantium adipisci aliquid assumenda autem beatae excepturi facere, fugiat impedit, ipsa laboriosam maiores nobis optio perferendis quod quos velit voluptates? Blanditiis dolore earum id omnis provident quo unde. Aliquid aspernatur consectetur consequuntur, debitis ea, esse et eveniet ex facere hic maiores molestiae natus nesciunt, nisi praesentium quo quos repellat unde veniam veritatis? Corporis ducimus, enim et libero officiis reprehenderit saepe velit veritatis vitae voluptatem. Accusamus at atque beatae culpa cupiditate deleniti dicta dolor doloribus eius enim est fuga in inventore, iste, laudantium maxime modi nulla perferendis provident quaerat quibusdam quidem repudiandae sunt tempora tempore ut vero! Debitis eligendi fugit minus modi molestiae natus non perspiciatis rem soluta, ullam. Asperiores distinctio hic optio porro quisquam sint vel voluptates? Consequuntur expedita ipsa mollitia provident quos repudiandae."})]})})}),(0,jsx_runtime.jsx)("div",{ref:portalsRef})]})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Dropdowns/[patterns]",component:Menu.v}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"patterns",children:"Patterns"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"render-menu-in-a-root-level-react-portal",children:"Render menu in a root level React portal"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"appendToNode"})," property can be used to render the menu in a different\nDOM location than inline with the Trigger component. This is done via React\nportals under the hood."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["You typically will need to set this property if you are using the ",(0,jsx_runtime.jsx)(_components.code,{children:"Menu"})," inside\nan element with ",(0,jsx_runtime.jsx)(_components.code,{children:"overflow: hidden"})," / ",(0,jsx_runtime.jsx)(_components.code,{children:"auto"})," / ",(0,jsx_runtime.jsx)(_components.code,{children:"scroll"})," CSS styles."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["See in this example, that the menu is currently getting cropped. Change the\n",(0,jsx_runtime.jsx)(_components.code,{children:"appendToNode"}),' property to "portal" to see the full menu.']}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Menu",args:{items:[{text:"Item 1",value:"item-1"},{text:"Item 2",value:"item-2"},{text:"Item 3",value:"item-3"},{text:"Item 4",value:"item-4"},{text:"Item 5",value:"item-5"},{text:"Item 6",value:"item-6"}],appendToNode:"undefined"},argTypes:{items:{name:"Item[]",table:{category:"Story"}},appendToNode:{control:{type:"select",options:["undefined","portal"]},table:{category:"Story"}}},children:args=>(0,jsx_runtime.jsx)(MenuStory,{...args})})})]})}MenuStory.displayName="MenuStory";const menu=args=>(0,jsx_runtime.jsx)(MenuStory,{...args});menu.storyName="Menu",menu.argTypes={items:{name:"Item[]",table:{category:"Story"}},appendToNode:{control:{type:"select",options:["undefined","portal"]},table:{category:"Story"}}},menu.args={items:[{text:"Item 1",value:"item-1"},{text:"Item 2",value:"item-2"},{text:"Item 3",value:"item-3"},{text:"Item 4",value:"item-4"},{text:"Item 5",value:"item-5"},{text:"Item 6",value:"item-6"}],appendToNode:"undefined"},menu.parameters={storySource:{source:"args => <MenuStory {...args} />"}};const componentMeta={title:"Packages/Dropdowns/[patterns]",component:Menu.v,tags:["stories-mdx"],includeStories:["menu"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const patterns_stories=componentMeta},"./packages/buttons/src/styled/StyledButton.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>getHeight,S:()=>StyledButton});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/buttons/node_modules/polished/dist/polished.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getColor.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/focusStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/theming/src/utils/getFocusBoxShadow.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_StyledButtonGroup__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/buttons/src/styled/StyledButtonGroup.ts"),_StyledIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/buttons/src/styled/StyledIcon.ts");const getDisabledBackgroundColor=props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("neutralHue",200,props.theme),getHeight=props=>"small"===props.size?8*props.theme.space.base+"px":"large"===props.size?12*props.theme.space.base+"px":10*props.theme.space.base+"px",StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.button.attrs((props=>({"data-garden-id":"buttons.button","data-garden-version":"storybook",type:props.type||"button"}))).withConfig({displayName:"StyledButton",componentId:"sc-qe3ace-0"})(["display:",";align-items:",";justify-content:",";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;margin:0;border:",";border-radius:",";cursor:pointer;width:",";overflow:hidden;text-decoration:none;text-overflow:ellipsis;white-space:",";font-family:inherit;font-weight:",";-webkit-font-smoothing:subpixel-antialiased;box-sizing:border-box;user-select:",";-webkit-touch-callout:none;",";&::-moz-focus-inner{border:0;padding:0;}","{text-decoration:none;}&:hover{text-decoration:",";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;text-decoration:",";}",";&:disabled{cursor:default;text-decoration:",";}& ","{","}"," &&{","}",""],(props=>props.isLink?"inline":"inline-flex"),(props=>!props.isLink&&"center"),(props=>!props.isLink&&"center"),(props=>`${props.isLink?"0px solid":props.theme.borders.sm} transparent`),(props=>(props=>props.isPill?"100px":props.theme.borderRadii.md)(props)),(props=>props.isStretched?"100%":""),(props=>!props.isLink&&"nowrap"),(props=>props.isLink?"inherit":props.theme.fontWeights.regular),(props=>!props.isLink&&"none"),(props=>(props=>{let retVal;if(props.isLink)retVal=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["padding:0;font-size:inherit;"]);else{const height=getHeight(props),lineHeight=(0,polished__WEBPACK_IMPORTED_MODULE_3__.mA)(`${height} - (${props.theme.borderWidths.sm} * 2)`);let padding,fontSize;"small"===props.size?(fontSize=props.theme.fontSizes.sm,padding=3*props.theme.space.base+"px"):(fontSize=props.theme.fontSizes.md,padding="large"===props.size?5*props.theme.space.base+"px":4*props.theme.space.base+"px"),retVal=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["padding:0 ",";height:",";line-height:",";font-size:",";"],(0,polished__WEBPACK_IMPORTED_MODULE_3__.em)((0,polished__WEBPACK_IMPORTED_MODULE_3__.mA)(`${padding} - ${props.theme.borderWidths.sm}`),fontSize),height,lineHeight,fontSize)}return retVal})(props)),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.i,(props=>props.isLink?"underline":"none"),(props=>props.isLink?"underline":"none"),(props=>(props=>{let retVal,hue;hue=props.disabled||props.isNeutral&&(props.isPrimary||props.isSelected)&&!props.isDanger?"neutralHue":props.isDanger?"dangerHue":"primaryHue";const baseColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)(hue,600,props.theme),hoverColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)(hue,700,props.theme),activeColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)(hue,800,props.theme),focusColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("primaryHue",600,props.theme),disabledBackgroundColor=getDisabledBackgroundColor(props),disabledForegroundColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)(hue,400,props.theme);if(props.isLink)retVal=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["outline-color:transparent;background-color:transparent;color:",";"," &:hover{color:",";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:",";}&:disabled{color:",";}"],baseColor,(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.j)({theme:props.theme,condition:!1,styles:{color:baseColor,outlineColor:focusColor}}),hoverColor,activeColor,disabledForegroundColor);else if(props.isPrimary||props.isSelected)retVal=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["outline-color:transparent;background-color:",";color:",";&:hover{background-color:",";}"," &:active{background-color:",";}&[aria-pressed='true'],&[aria-pressed='mixed']{background-color:",";}&:disabled{background-color:",";color:",";}"],props.isPrimary&&props.isSelected?activeColor:baseColor,props.theme.palette.white,hoverColor,(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.j)({theme:props.theme,inset:props.focusInset,shadowWidth:props.focusInset?"sm":"md",spacerWidth:props.focusInset?"sm":"xs",styles:props.isDanger&&props.focusInset?{borderColor:focusColor}:void 0}),activeColor,props.isPrimary&&activeColor,disabledBackgroundColor,disabledForegroundColor);else{const borderColor=props.isNeutral&&!props.isDanger?(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("neutralHue",300,props.theme):baseColor,foregroundColor=props.isNeutral?props.theme.colors.foreground:baseColor,hoverBorderColor=props.isNeutral&&!props.isDanger?baseColor:hoverColor,hoverForegroundColor=props.isNeutral?foregroundColor:hoverColor;retVal=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["outline-color:transparent;border-color:",";background-color:transparent;color:",";&:hover{border-color:",";background-color:",";color:",";}"," &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{border-color:",";background-color:",";color:",";}&:disabled{border-color:transparent;background-color:",";color:",";}& ","{color:",";}&:hover ",",&:focus-visible ",",&[data-garden-focus-visible] ","{color:",";}&:active ","{color:",";}&:disabled ","{color:",";}"],!props.isBasic&&borderColor,foregroundColor,!props.isBasic&&hoverBorderColor,(0,polished__WEBPACK_IMPORTED_MODULE_3__.m4)(baseColor,.08),hoverForegroundColor,(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.j)({theme:props.theme,inset:props.focusInset,styles:props.isNeutral?{borderColor:baseColor}:void 0}),!props.isBasic&&activeColor,(0,polished__WEBPACK_IMPORTED_MODULE_3__.m4)(baseColor,.2),!props.isNeutral&&activeColor,disabledBackgroundColor,disabledForegroundColor,_StyledIcon__WEBPACK_IMPORTED_MODULE_4__.x,props.isNeutral&&(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("neutralHue",600,props.theme),_StyledIcon__WEBPACK_IMPORTED_MODULE_4__.x,_StyledIcon__WEBPACK_IMPORTED_MODULE_4__.x,_StyledIcon__WEBPACK_IMPORTED_MODULE_4__.x,props.isNeutral&&(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("neutralHue",700,props.theme),_StyledIcon__WEBPACK_IMPORTED_MODULE_4__.x,props.isNeutral&&foregroundColor,_StyledIcon__WEBPACK_IMPORTED_MODULE_4__.x,disabledForegroundColor)}return retVal})(props)),(props=>props.isLink&&"none"),_StyledIcon__WEBPACK_IMPORTED_MODULE_4__.x,(props=>(props=>{const size="small"===props.size?props.theme.iconSizes.sm:props.theme.iconSizes.md;return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["width:",";min-width:",";height:",";vertical-align:",";"],size,size,size,props.isLink&&"middle")})(props)),_StyledButtonGroup__WEBPACK_IMPORTED_MODULE_6__.z,(props=>(props=>{const{theme,isPrimary,isBasic,isSelected,isPill,focusInset}=props,{rtl,borderWidths,borders}=theme,startPosition=rtl?"right":"left",endPosition=rtl?"left":"right",marginOffset=borderWidths.sm,marginDisplacement=`${isPrimary||isBasic?"":"-"}${marginOffset}`,iconMarginDisplacement=isPill&&"-2px",disabledBackgroundColor=!isPrimary&&getDisabledBackgroundColor(props),borderColor=isBasic?"transparent":"revert",focusColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("primaryHue",600,theme),focusBoxShadow=isBasic&&!isSelected&&!isPrimary&&(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_5__.F)({theme,inset:focusInset,spacerHue:focusColor,hue:"transparent"});return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["position:relative;transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,margin-"," 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;border:"," ",";","{border-color:",";box-shadow:",";}&:hover,&:active,","{z-index:1;}&:disabled{z-index:-1;background-color:",";}&:not(:first-of-type){margin-",":",";}&:not(:first-of-type):disabled{margin-",":",";}&:not(:first-of-type):not(:last-of-type){border-radius:0;}&:first-of-type:not(:last-of-type){border-top-","-radius:0;border-bottom-","-radius:0;}&:last-of-type:not(:first-of-type){border-top-","-radius:0;border-bottom-","-radius:0;}&:first-of-type:not(:last-of-type) ","{margin-",":",";}&:last-of-type:not(:first-of-type) ","{margin-",":",";}"],startPosition,borders.sm,borderColor,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.i,focusColor,focusBoxShadow,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.i,disabledBackgroundColor,startPosition,marginDisplacement,startPosition,marginOffset,endPosition,endPosition,startPosition,startPosition,_StyledIcon__WEBPACK_IMPORTED_MODULE_4__.x,endPosition,iconMarginDisplacement,_StyledIcon__WEBPACK_IMPORTED_MODULE_4__.x,startPosition,iconMarginDisplacement)})(props)),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_7__.Z)("buttons.button",props)));StyledButton.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_8__.Z}},"./packages/buttons/src/styled/StyledButtonGroup.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>StyledButtonGroup});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledButtonGroup=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div.attrs({"data-garden-id":"buttons.button_group_view","data-garden-version":"storybook"}).withConfig({displayName:"StyledButtonGroup",componentId:"sc-1fbpzef-0"})(["display:inline-flex;position:relative;z-index:0;direction:",";white-space:nowrap;",";"],(props=>props.theme.rtl&&"rtl"),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.Z)("buttons.button_group_view",props)));StyledButtonGroup.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z}},"./packages/buttons/src/styled/StyledIcon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>StyledIcon});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)((_ref=>{let{children,isRotated,theme,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),props)})).attrs({"data-garden-id":"buttons.icon","data-garden-version":"storybook"}).withConfig({displayName:"StyledIcon",componentId:"sc-19meqgg-0"})(["transform:",";transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;",";",";"],(props=>props.isRotated&&`rotate(${props.theme.rtl?"-":"+"}180deg)`),(props=>(props=>{let marginProperty;return"start"===props.position?marginProperty="margin-"+(props.theme.rtl?"left":"right"):"end"===props.position&&(marginProperty="margin-"+(props.theme.rtl?"right":"left")),marginProperty&&(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["",":","px;"],marginProperty,2*props.theme.space.base)})(props)),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)("buttons.icon",props)));StyledIcon.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/buttons/src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SIZE});__webpack_require__("./node_modules/react/index.js");const SIZE=["small","medium","large"]},"./packages/buttons/src/utils/useSplitButtonContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>SplitButtonContext,i:()=>useSplitButtonContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const SplitButtonContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useSplitButtonContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SplitButtonContext)},"./packages/theming/src/utils/focusStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>SELECTOR_FOCUS_VISIBLE,j:()=>focusStyles});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/node_modules/polished/dist/polished.esm.js"),_getFocusBoxShadow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getFocusBoxShadow.ts");const SELECTOR_FOCUS_VISIBLE='&:focus-visible, &[data-garden-focus-visible="true"]',focusStyles=_ref=>{let{condition=!0,selector=SELECTOR_FOCUS_VISIBLE,shadowWidth="md",spacerWidth="xs",styles:{boxShadow,...styles}={},theme,...options}=_ref;const _boxShadow=condition?(0,_getFocusBoxShadow__WEBPACK_IMPORTED_MODULE_0__.F)({boxShadow,shadowWidth,spacerWidth,theme,...options}):boxShadow;let outline,outlineOffset;return null===spacerWidth?outline=theme.shadowWidths[shadowWidth]:(outline=`${(0,polished__WEBPACK_IMPORTED_MODULE_1__.mA)(`${theme.shadowWidths[shadowWidth]} - ${theme.shadowWidths[spacerWidth]}`)} solid transparent`,outlineOffset=theme.shadowWidths[spacerWidth]),(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["&:focus{outline:none;}","{outline:",";outline-offset:",";box-shadow:",";","}"],selector,outline,outlineOffset,_boxShadow,styles)}},"./packages/theming/src/utils/getColor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>getColor,d:()=>DEFAULT_SHADE});var _elements_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/node_modules/polished/dist/polished.esm.js"),lodash_memoize__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/node_modules/lodash.memoize/index.js");const DEFAULT_SHADE=600,adjust=(color,expected,actual)=>{if(expected!==actual){const amount=Math.abs(expected-actual)/100*.05;return expected>actual?(0,polished__WEBPACK_IMPORTED_MODULE_1__._j)(amount,color):(0,polished__WEBPACK_IMPORTED_MODULE_1__.$n)(amount,color)}return color},getColor=__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_0__)()((function(hue){let retVal,shade=arguments.length>1&&void 0!==arguments[1]?arguments[1]:DEFAULT_SHADE,theme=arguments.length>2?arguments[2]:void 0,transparency=arguments.length>3?arguments[3]:void 0;if(isNaN(shade))return;const palette=theme&&theme.palette?theme.palette:_elements_theme__WEBPACK_IMPORTED_MODULE_2__.Z.palette,colors=theme&&theme.colors?theme.colors:_elements_theme__WEBPACK_IMPORTED_MODULE_2__.Z.colors;let _hue;if(_hue="string"==typeof hue&&colors[hue]||hue,Object.prototype.hasOwnProperty.call(palette,_hue)&&(_hue=palette[_hue]),"object"==typeof _hue){if(retVal=_hue[shade],!retVal){const _shade=Object.keys(_hue).map((hueKey=>parseInt(hueKey,10))).reduce(((previous,current)=>Math.abs(current-shade)<Math.abs(previous-shade)?current:previous));retVal=adjust(_hue[_shade],shade,_shade)}}else retVal=adjust(_hue,shade,DEFAULT_SHADE);return transparency&&(retVal=(0,polished__WEBPACK_IMPORTED_MODULE_1__.m4)(retVal,transparency)),retVal}),((hue,shade,theme,transparency)=>JSON.stringify({hue,shade,palette:theme?.palette,colors:theme?.colors,transparency})))},"./packages/theming/src/utils/getFocusBoxShadow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>getFocusBoxShadow});var _elements_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_getColor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getColor.ts");const getFocusBoxShadow=_ref=>{let{boxShadow,inset=!1,hue="primaryHue",shade=_getColor__WEBPACK_IMPORTED_MODULE_0__.d,shadowWidth="md",spacerHue="background",spacerShade=_getColor__WEBPACK_IMPORTED_MODULE_0__.d,spacerWidth="xs",theme=_elements_theme__WEBPACK_IMPORTED_MODULE_1__.Z}=_ref;const color=(0,_getColor__WEBPACK_IMPORTED_MODULE_0__.L)(hue,shade,theme),shadow=theme.shadows[shadowWidth](color);if(null===spacerWidth)return`${inset?"inset":""} ${shadow}`;const spacerColor=(0,_getColor__WEBPACK_IMPORTED_MODULE_0__.L)(spacerHue,spacerShade,theme),retVal=`\n    ${inset?"inset":""} ${theme.shadows[spacerWidth](spacerColor)},\n    ${inset?"inset":""} ${shadow}`;return boxShadow?`${retVal}, ${boxShadow}`:retVal}},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{Z:()=>retrieveComponentStyles})}}]);