(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[1636],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{c:()=>_objectWithoutPropertiesLoose})},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ih:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ih,Qb:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Qb,UF:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UF,_W:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__._W,gF:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gF});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/modals/demo/tooltipModal.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>tooltipModal_stories,tooltipModal:()=>tooltipModal});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),TooltipModal=__webpack_require__("./packages/modals/src/elements/TooltipModal/TooltipModal.tsx"),getColorV8=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./packages/theming/src/utils/getColorV8.ts")),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),Grid=__webpack_require__("./packages/grid/src/elements/Grid.tsx"),Row=__webpack_require__("./packages/grid/src/elements/Row.tsx"),Col=__webpack_require__("./packages/grid/src/elements/Col.tsx"),Button=__webpack_require__("./packages/buttons/src/elements/Button.tsx"),IconButton=__webpack_require__("./packages/buttons/src/elements/IconButton.tsx"),Avatar=__webpack_require__("./packages/avatars/src/elements/Avatar.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PLACEMENT=["top-start","top","top-end","bottom-start","bottom","bottom-end"],TooltipModalStory=_ref=>{let{count,handleClick,hasBody,body,hasClose,hasFooter,hasTitle,title,tag,closeAriaLabel,dialogAriaLabel,...args}=_ref;const refs=(0,react.useRef)([]),current=refs.current.indexOf(args.referenceElement),ariaProp=hasTitle?{}:{"aria-label":dialogAriaLabel};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(TooltipModal.g,{...args,placement:args.placement||PLACEMENT[current],...ariaProp,children:[hasTitle&&(0,jsx_runtime.jsx)(TooltipModal.g.Title,{tag,children:title}),hasBody&&(0,jsx_runtime.jsx)(TooltipModal.g.Body,{children:body}),hasFooter&&(0,jsx_runtime.jsxs)(TooltipModal.g.Footer,{children:[current>0&&(0,jsx_runtime.jsx)(TooltipModal.g.FooterItem,{children:(0,jsx_runtime.jsx)(Button.q,{size:"small",isBasic:!0,onClick:()=>handleClick(refs.current[current-1]),children:"Previous"})}),current>=0&&(0,jsx_runtime.jsx)(TooltipModal.g.FooterItem,{children:(0,jsx_runtime.jsx)(Button.q,{isPrimary:!0,size:"small",onClick:()=>handleClick(current===refs.current.length-1?null:refs.current[current+1]),children:current===refs.current.length-1?"Finish":"Next"})})]}),hasClose&&(0,jsx_runtime.jsx)(TooltipModal.g.Close,{"aria-label":closeAriaLabel})]}),(0,jsx_runtime.jsx)(Grid.y,{children:(0,jsx_runtime.jsx)(Row.W,{style:{height:"calc(100vh - 80px)"},children:[...Array(count)].map(((_,index)=>(0,jsx_runtime.jsx)(Col.q,{md:4,textAlign:"center",alignSelf:"center",children:(0,jsx_runtime.jsx)(IconButton.w,{ref:element=>{refs.current[index]=element},onClick:event=>handleClick(event.currentTarget),children:(0,jsx_runtime.jsx)(Avatar.C,{foregroundColor:(0,getColorV8.G)("foreground",600,theme.c),children:(0,jsx_runtime.jsx)(Avatar.C.Text,{children:index+1})})})},index)))})})]})};var data=__webpack_require__("./packages/modals/demo/stories/data.ts"),README=__webpack_require__("./packages/modals/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{title:"Packages/Modals/TooltipModal",component:TooltipModal.g,subcomponents:{"TooltipModal.Body":TooltipModal.g.Body,"TooltipModal.Close":TooltipModal.g.Close,"TooltipModal.Footer":TooltipModal.g.Footer,"TooltipModal.FooterItem":TooltipModal.g.FooterItem,"TooltipModal.Title":TooltipModal.g.Title}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.UF,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{name:"TooltipModal",args:{focusOnMount:!0,hasArrow:!0,restoreFocus:!0,hasBody:!0,body:data.Ww,hasClose:!0,hasFooter:!0,hasTitle:!0,title:"Title",closeAriaLabel:"Close",dialogAriaLabel:"Title"},argTypes:{referenceElement:{control:!1},hasBody:{name:"TooltipModal.Body",table:{category:"Story"}},hasClose:{name:"TooltipModal.Close",table:{category:"Story"}},hasFooter:{name:"TooltipModal.Footer",table:{category:"Story"}},hasTitle:{name:"TooltipModal.Title",table:{category:"Story"}},body:{name:"children",table:{category:"TooltipModal.Body"}},title:{name:"children",table:{category:"TooltipModal.Title"}},tag:{control:"text",table:{category:"TooltipModal.Title"}},closeAriaLabel:{name:"aria-label",table:{category:"TooltipModal.Close"}},dialogAriaLabel:{name:"aria-label"}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A25593"}},children:args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(TooltipModalStory,{...args,count:3,handleClick:referenceElement=>updateArgs({referenceElement}),onClose:()=>updateArgs({referenceElement:null})})}})}),"\n",(0,jsx_runtime.jsx)(dist.Ih,{children:README})]})}const tooltipModal=args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(TooltipModalStory,{...args,count:3,handleClick:referenceElement=>updateArgs({referenceElement}),onClose:()=>updateArgs({referenceElement:null})})};tooltipModal.storyName="TooltipModal",tooltipModal.argTypes={referenceElement:{control:!1},hasBody:{name:"TooltipModal.Body",table:{category:"Story"}},hasClose:{name:"TooltipModal.Close",table:{category:"Story"}},hasFooter:{name:"TooltipModal.Footer",table:{category:"Story"}},hasTitle:{name:"TooltipModal.Title",table:{category:"Story"}},body:{name:"children",table:{category:"TooltipModal.Body"}},title:{name:"children",table:{category:"TooltipModal.Title"}},tag:{control:"text",table:{category:"TooltipModal.Title"}},closeAriaLabel:{name:"aria-label",table:{category:"TooltipModal.Close"}},dialogAriaLabel:{name:"aria-label"}},tooltipModal.args={focusOnMount:!0,hasArrow:!0,restoreFocus:!0,hasBody:!0,body:data.Ww,hasClose:!0,hasFooter:!0,hasTitle:!0,title:"Title",closeAriaLabel:"Close",dialogAriaLabel:"Title"},tooltipModal.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleClick = referenceElement => updateArgs({\n    referenceElement\n  });\n  const handleClose = () => updateArgs({\n    referenceElement: null\n  });\n  return <TooltipModalStory {...args} count={3} handleClick={handleClick} onClose={handleClose} />;\n}"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A25593"}};const componentMeta={title:"Packages/Modals/TooltipModal",component:TooltipModal.g,subcomponents:{"TooltipModal.Body":TooltipModal.g.Body,"TooltipModal.Close":TooltipModal.g.Close,"TooltipModal.Footer":TooltipModal.g.Footer,"TooltipModal.FooterItem":TooltipModal.g.FooterItem,"TooltipModal.Title":TooltipModal.g.Title},tags:["stories-mdx"],includeStories:["tooltipModal"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const tooltipModal_stories=componentMeta,__namedExportsOrder=["tooltipModal"]},"./packages/buttons/src/elements/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),types=__webpack_require__("./packages/buttons/src/types/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),getColorV8=__webpack_require__("./packages/theming/src/utils/getColorV8.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledButton=__webpack_require__("./packages/buttons/src/styled/StyledButton.ts"),StyledIcon=__webpack_require__("./packages/buttons/src/styled/StyledIcon.ts");const iconButtonStyles=props=>{const width=(0,StyledButton.Y)(props);return(0,styled_components_browser_esm.gV)(["border:",";padding:0;width:",";min-width:",";",";&:disabled{background-color:",";}"],props.isBasic&&"none",width,width,props.isBasic&&!(props.isPrimary||props.isDanger||props.disabled)&&(props=>{const baseColor=(0,getColorV8.G)("neutralHue",600,props.theme),hoverColor=(0,getColorV8.G)("neutralHue",700,props.theme),activeColor=(0,getColorV8.G)("neutralHue",800,props.theme);return(0,styled_components_browser_esm.gV)(["color:",";&:hover{color:",";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:",";}"],baseColor,hoverColor,activeColor)})(props),!props.isPrimary&&"transparent")},StyledIconButton=(0,styled_components_browser_esm.cp)(StyledButton.y).attrs({"data-garden-id":"buttons.icon_button","data-garden-version":"storybook"}).withConfig({displayName:"StyledIconButton",componentId:"sc-1t0ughp-0"})(["",";& ","{","}",";"],(props=>iconButtonStyles(props)),StyledIcon.w,(props=>(props=>{const size=props.theme.iconSizes.md;return(0,styled_components_browser_esm.gV)(["width:",";height:",";& > svg{transition:opacity 0.15s ease-in-out;}"],size,size)})(props)),(props=>(0,retrieveComponentStyles.c)("buttons.icon_button",props)));StyledIconButton.defaultProps={theme:theme.c};var useSplitButtonContext=__webpack_require__("./packages/buttons/src/utils/useSplitButtonContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react.forwardRef)(((_ref,ref)=>{let{children,isRotated,...otherProps}=_ref;const focusInset=(0,useSplitButtonContext.k)();return(0,jsx_runtime.jsx)(StyledIconButton,{ref,...otherProps,focusInset:otherProps.focusInset||focusInset,children:(0,jsx_runtime.jsx)(StyledIcon.w,{isRotated,children})})}));IconButton.displayName="IconButton",IconButton.propTypes={isDanger:prop_types_default().bool,size:prop_types_default().oneOf(types.g),isNeutral:prop_types_default().bool,isPrimary:prop_types_default().bool,isBasic:prop_types_default().bool,isPill:prop_types_default().bool,focusInset:prop_types_default().bool,isRotated:prop_types_default().bool},IconButton.defaultProps={isPill:!0,isBasic:!0,size:"medium"};try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{isRotated:{defaultValue:null,description:"Rotates icon 180 degrees",name:"isRotated",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Specifies the button size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},isPill:{defaultValue:{value:"true"},description:"Applies pill button styling",name:"isPill",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"@ignore prop used by `ButtonGroup`",name:"isSelected",required:!1,type:{name:"boolean"}},isBasic:{defaultValue:{value:"true"},description:"Applies basic button styling",name:"isBasic",required:!1,type:{name:"boolean"}},isDanger:{defaultValue:null,description:"Applies danger styling",name:"isDanger",required:!1,type:{name:"boolean"}},focusInset:{defaultValue:null,description:"Applies inset `box-shadow` styling on focus",name:"focusInset",required:!1,type:{name:"boolean"}},isNeutral:{defaultValue:null,description:"Applies neutral button styling",name:"isNeutral",required:!1,type:{name:"boolean"}},isPrimary:{defaultValue:null,description:"Applies primary button styling",name:"isPrimary",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/buttons/src/elements/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"packages/buttons/src/elements/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/modals/demo/stories/data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{GG:()=>MODAL_BODY,Ww:()=>TOOLTIP_MODAL_BODY,gT:()=>MODAL_FOOTER_ITEMS});const MODAL_BODY="Turnip greens yarrow ricebean rutabaga endive\ncauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa\ncabbage asparagus winter purslane kale. Celery potato scallion desert raisin\nhorseradish spinach carrot soko. Lotus root water spinach fennel kombu maize\nbamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn\npea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi\nbeetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean\nchickweed potato bell pepper artichoke. Nori grape silver beet broccoli kombu\nbeet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie\nturnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut\neggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek\nsoko chicory celtuce parsley jícama. Celery quandong swiss chard chicory\nearthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle\nseed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot\nsquash brussels sprout chard. Pea horseradish azuki bean lettuce avocado\nasparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut\njícama green bean celtuce collard greens avocado quandong fennel gumbo\nblack-eyed pea. Soko radicchio bunya nuts gram dulse silver beet parsnip napa\ncabbage lotus root sea lettuce brussels sprout cabbage.",MODAL_FOOTER_ITEMS=[{text:"Cancel",type:"basic"},{text:"Save",type:"primary"}],TOOLTIP_MODAL_BODY="Gumbo beet greens corn soko endive gumbo\ngourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens\ndandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko\nzucchini."},"./packages/theming/src/utils/arrowStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>arrowStyles});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/polished/dist/polished.esm.js");const exponentialSymbols={symbols:{sqrt:{func:{symbol:"sqrt",f:a=>Math.sqrt(a),notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"sqrt",regSymbol:"sqrt\\b"}}},animationStyles=(position,modifier)=>{const property=position.split("-")[0],animationName=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.xZ)(["0%,66%{",":2px;border:transparent;}"],property);return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.gV)(["&","::before,&","::after{animation:0.3s ease-in-out ",";}"],modifier,modifier,animationName)},positionStyles=(position,size,inset)=>{const margin=(0,polished__WEBPACK_IMPORTED_MODULE_1__.dU)(`${size} / -2`),placement=(0,polished__WEBPACK_IMPORTED_MODULE_1__.dU)(`${margin} + ${inset}`);let clipPath,positionCss,propertyRadius;return position.startsWith("top")?(propertyRadius="border-bottom-right-radius",clipPath="polygon(100% 0, 100% 1px, 1px 100%, 0 100%, 0 0)",positionCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.gV)(["top:",";right:",";left:",";margin-left:",";"],placement,"top-right"===position&&size,"top"===position?"50%":"top-left"===position&&size,"top"===position&&margin)):position.startsWith("right")?(propertyRadius="border-bottom-left-radius",clipPath="polygon(100% 0, 100% 100%, calc(100% - 1px) 100%, 0 1px, 0 0)",positionCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.gV)(["top:",";right:",";bottom:",";margin-top:",";"],"right"===position?"50%":"right-top"===position&&size,placement,"right-bottom"===position&&size,"right"===position&&margin)):position.startsWith("bottom")?(propertyRadius="border-top-left-radius",clipPath="polygon(100% 0, calc(100% - 1px) 0, 0 calc(100% - 1px), 0 100%, 100% 100%)",positionCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.gV)(["right:",";bottom:",";left:",";margin-left:",";"],"bottom-right"===position&&size,placement,"bottom"===position?"50%":"bottom-left"===position&&size,"bottom"===position&&margin)):position.startsWith("left")&&(propertyRadius="border-top-right-radius",clipPath="polygon(0 100%, 100% 100%, 100% calc(100% - 1px), 1px 0, 0 0)",positionCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.gV)(["top:",";bottom:",";left:",";margin-top:",";"],"left"===position?"50%":"left-top"===position&&size,size,placement,"left"===position&&margin)),(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.gV)(["&::before{",":100%;clip-path:",";}&::before,&::after{","}"],propertyRadius,clipPath,positionCss)};function arrowStyles(position){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const size=options.size||"6px",inset=options.inset||"0",squareSize=(0,polished__WEBPACK_IMPORTED_MODULE_1__.dU)(`${size} * 2 / sqrt(2)`,exponentialSymbols);return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.gV)(["position:relative;&::before{border-width:inherit;border-style:inherit;border-color:transparent;background-clip:content-box;}&::after{z-index:-1;border:inherit;box-shadow:inherit;}&::before,&::after{position:absolute;transform:rotate(45deg);background-color:inherit;box-sizing:inherit;width:",";height:",";content:'';}",";",";"],squareSize,squareSize,positionStyles(position,squareSize,inset),options.animationModifier&&animationStyles(position,options.animationModifier))}},"./packages/theming/src/utils/focusStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>SELECTOR_FOCUS_VISIBLE,Y:()=>focusStyles});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_getFocusBoxShadow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getFocusBoxShadow.ts");const SELECTOR_FOCUS_VISIBLE='&:focus-visible, &[data-garden-focus-visible="true"]',focusStyles=_ref=>{let{condition=!0,selector=SELECTOR_FOCUS_VISIBLE,shadowWidth="md",spacerWidth="xs",styles:{boxShadow,...styles}={},theme,...options}=_ref;const _boxShadow=condition?(0,_getFocusBoxShadow__WEBPACK_IMPORTED_MODULE_0__.q)({boxShadow,shadowWidth,spacerWidth,theme,...options}):boxShadow;let outline,outlineOffset;return null===spacerWidth?outline=theme.shadowWidths[shadowWidth]:(outline=`${(0,polished__WEBPACK_IMPORTED_MODULE_1__.dU)(`${theme.shadowWidths[shadowWidth]} - ${theme.shadowWidths[spacerWidth]}`)} solid transparent`,outlineOffset=theme.shadowWidths[spacerWidth]),(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.gV)(["&:focus{outline:none;}","{outline:",";outline-offset:",";box-shadow:",";","}"],selector,outline,outlineOffset,_boxShadow,styles)}},"./packages/theming/src/utils/getFocusBoxShadow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>getFocusBoxShadow});var _elements_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_getColorV8__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getColorV8.ts");const getFocusBoxShadow=_ref=>{let{boxShadow,inset=!1,hue="primaryHue",shade=_getColorV8__WEBPACK_IMPORTED_MODULE_0__.S,shadowWidth="md",spacerHue="background",spacerShade=_getColorV8__WEBPACK_IMPORTED_MODULE_0__.S,spacerWidth="xs",theme=_elements_theme__WEBPACK_IMPORTED_MODULE_1__.c}=_ref;const color=(0,_getColorV8__WEBPACK_IMPORTED_MODULE_0__.G)(hue,shade,theme),shadow=theme.shadows[shadowWidth](color);if(null===spacerWidth)return`${inset?"inset":""} ${shadow}`;const spacerColor=(0,_getColorV8__WEBPACK_IMPORTED_MODULE_0__.G)(spacerHue,spacerShade,theme),retVal=`\n    ${inset?"inset":""} ${theme.shadows[spacerWidth](spacerColor)},\n    ${inset?"inset":""} ${shadow}`;return boxShadow?`${retVal}, ${boxShadow}`:retVal}},"./packages/theming/src/utils/getLineHeight.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>getLineHeight});var polished__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/polished/dist/polished.esm.js");function getLineHeight(height,fontSize){const[heightValue,heightUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.UZ)(height.toString()),[fontSizeValue,fontSizeUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.UZ)(fontSize.toString());if(heightUnit&&"px"!==heightUnit)throw new Error(`Unexpected \`height\` with '${heightUnit}' units.`);if(fontSizeUnit&&"px"!==fontSizeUnit)throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit}' units.`);return heightValue/fontSizeValue}},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{c:()=>retrieveComponentStyles})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react-merge-refs/dist/react-merge-refs.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function mergeRefs(refs){return function(value){refs.forEach((function(ref){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}}},"./packages/modals/README.md":module=>{"use strict";module.exports="# @zendeskgarden/react-modals [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-modals)](https://www.npmjs.com/package/@zendeskgarden/react-modals)\n\nThis package includes components relating to modals in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-modals\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Modal, Header, Body, Footer, FooterItem, Close } from '@zendeskgarden/react-modals';\nimport { Button } from '@zendeskgarden/react-buttons';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Modal onClose={() => alert('modal closing')}>\n    <Header>Example Header</Header>\n    <Body>Some content</Body>\n    <Footer>\n      <FooterItem>\n        <Button isBasic>Cancel</Button>\n      </FooterItem>\n      <FooterItem>\n        <Button isPrimary>Confirm</Button>\n      </FooterItem>\n    </Footer>\n    <Close aria-label=\"Close modal\" />\n  </Modal>\n</ThemeProvider>;\n```\n"}}]);