(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[680],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/accordions/demo/stepper.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>stepper_stories,stepper:()=>stepper});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledStepper=styled_components_browser_esm.Ay.ol.attrs({"data-garden-id":"accordions.stepper","data-garden-version":"storybook"}).withConfig({displayName:"StyledStepper",componentId:"sc-dsxw0f-0"})(["display:",";margin:0;padding:0;list-style:none;",";"],(props=>props.isHorizontal&&"flex"),(props=>(0,retrieveComponentStyles.A)("accordions.stepper",props)));StyledStepper.defaultProps={theme:theme.A};const StepperContext=(0,react.createContext)(void 0),StepContext=(0,react.createContext)(void 0),useStepContext=()=>{const context=(0,react.useContext)(StepContext);if(void 0===context)throw new Error("This component must be rendered within a Stepper component");return context};var getColorV8=__webpack_require__("./packages/theming/src/utils/getColorV8.ts");const StyledContent=styled_components_browser_esm.Ay.div.attrs({"data-garden-id":"accordions.step_content","data-garden-version":"storybook"}).withConfig({displayName:"StyledContent",componentId:"sc-mazvvo-0"})(["display:grid;grid-template-rows:","fr;transition:grid-template-rows 0.25s ease-in-out;word-break:break-word;"," ",";"],(props=>props.isActive?1:0),(props=>{const{rtl,space}=props.theme,paddingBottom=props.isActive?8*space.base:6*space.base,paddingRight=rtl?6*space.base:5*space.base,paddingLeft=rtl?5*space.base:6*space.base,marginRight=rtl?3*space.base:"0",marginLeft=rtl?"0":3*space.base,marginVertical=3*space.base;return(0,styled_components_browser_esm.AH)(["margin:","px ","px ","px ","px;padding:0 ","px ","px ","px;min-width:","px;height:auto;"],marginVertical,marginRight,marginVertical,marginLeft,paddingRight,paddingBottom,paddingLeft,30*space.base)}),(props=>(0,retrieveComponentStyles.A)("accordions.step_content",props)));StyledContent.defaultProps={theme:theme.A};const StyledLine=styled_components_browser_esm.Ay.div.attrs({"data-garden-id":"accordions.step_line","data-garden-version":"storybook"}).withConfig({displayName:"StyledLine",componentId:"sc-1gkpjbr-0"})(["display:block;position:absolute;top:","px;right:",";left:",";flex:1;border-top:",";border-color:",";"],(props=>3*props.theme.space.base),(props=>`calc(50% + ${6*props.theme.space.base}px)`),(props=>`calc(-50% + ${6*props.theme.space.base}px)`),(props=>props.theme.borders.sm),(props=>(0,getColorV8.A)("neutralHue",300,props.theme)));StyledLine.defaultProps={theme:theme.A};const StyledStep=styled_components_browser_esm.Ay.li.attrs({"data-garden-id":"accordions.step","data-garden-version":"storybook"}).withConfig({displayName:"StyledStep",componentId:"sc-12fiwtz-0"})(["position:",";flex:",";min-width:",";&:last-of-type ","{display:",";}&:first-of-type ","{display:",";}&:not(:last-of-type) ","{border-",":",";border-color:",";}",";"],(props=>props.isHorizontal&&"relative"),(props=>props.isHorizontal&&"1"),(props=>props.isHorizontal&&15*props.theme.space.base+"px"),StyledLine,(props=>props.theme.rtl&&"none"),StyledLine,(props=>!props.theme.rtl&&"none"),StyledContent,(props=>props.theme.rtl?"right":"left"),(props=>props.theme.borders.sm),(props=>(0,getColorV8.A)("neutralHue",300,props.theme)),(props=>(0,retrieveComponentStyles.A)("accordions.step",props)));StyledStep.defaultProps={theme:theme.A};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StepComponent=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;const{isHorizontal}=(()=>{const context=(0,react.useContext)(StepperContext);if(void 0===context)throw new Error("This component must be rendered within a Stepper component");return context})();return(0,jsx_runtime.jsxs)(StyledStep,{ref,isHorizontal,...props,children:[isHorizontal&&(0,jsx_runtime.jsx)(StyledLine,{}),children]})}));StepComponent.displayName="Stepper.Step";const Step=StepComponent;try{Step.displayName="Stepper.Step",Step.__docgenInfo={description:"",displayName:"Stepper.Step",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/accordions/src/elements/stepper/components/Step.tsx#Stepper.Step"]={docgenInfo:Stepper.Step.__docgenInfo,name:"Stepper.Step",path:"packages/accordions/src/elements/stepper/components/Step.tsx#Stepper.Step"})}catch(__react_docgen_typescript_loader_error){}var _path,prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const check_sm_stroke=function SvgCheckSmStroke(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path||(_path=react.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.25,d:"M3 9l3 3 7-7"})))};var getLineHeight=__webpack_require__("./packages/theming/src/utils/getLineHeight.ts");const StyledIconFlexContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"StyledIcon__StyledIconFlexContainer",componentId:"sc-v20nz9-0"})(["display:flex;flex-basis:100%;justify-content:center;width:100%;"]),StyledIcon=styled_components_browser_esm.Ay.div.attrs({"data-garden-id":"accordions.step_icon","data-garden-version":"storybook"}).withConfig({displayName:"StyledIcon",componentId:"sc-v20nz9-1"})(["display:flex;align-items:center;justify-content:center;transition:background 0.25s ease-in-out,color 0.25s ease-in-out;border-radius:100%;"," "," ",";"],(props=>{const size=6*props.theme.space.base+"px",fontSize=props.theme.fontSizes.sm;return(0,styled_components_browser_esm.AH)(["margin-bottom:",";margin-",":",";width:",";min-width:",";height:",";min-height:",";line-height:",";font-size:",";"],props.isHorizontal&&2*props.theme.space.base+"px",props.theme.rtl?"left":"right",!props.isHorizontal&&3*props.theme.space.base+"px",size,size,size,size,(0,getLineHeight.A)(size,fontSize),fontSize)}),(props=>(0,styled_components_browser_esm.AH)(["background:",";color:",";"],props.isActive?(0,getColorV8.A)("neutralHue",600,props.theme):(0,getColorV8.A)("neutralHue",200,props.theme),props.isActive?(0,getColorV8.A)("background",600,props.theme):(0,getColorV8.A)("foreground",600,props.theme))),(props=>(0,retrieveComponentStyles.A)("accordions.step_icon",props)));StyledIconFlexContainer.defaultProps={theme:theme.A},StyledIcon.defaultProps={theme:theme.A};const StyledLabel=styled_components_browser_esm.Ay.div.attrs({"data-garden-id":"accordions.step_label","data-garden-version":"storybook"}).withConfig({displayName:"StyledLabel",componentId:"sc-1o82llj-0"})(["display:",";align-items:",";transition:color 0.25s ease-in-out,font-weight 0.25s ease-in-out;text-align:",";line-height:",";color:",";font-size:",";font-weight:",";",";"],(props=>!props.isHorizontal&&"flex"),(props=>!props.isHorizontal&&"center"),(props=>props.isHorizontal&&"center"),(props=>(0,getLineHeight.A)(5*props.theme.space.base,props.theme.fontSizes.md)),(props=>props.isActive?(0,getColorV8.A)("foreground",600,props.theme):(0,getColorV8.A)("neutralHue",600,props.theme)),(props=>props.theme.fontSizes.md),(props=>props.isActive&&600),(props=>(0,retrieveComponentStyles.A)("accordions.step_label",props)));StyledLabel.defaultProps={theme:theme.A};const StyledLabelText=styled_components_browser_esm.Ay.div.attrs({"data-garden-id":"accordions.step_label_text","data-garden-version":"storybook"}).withConfig({displayName:"StyledLabelText",componentId:"sc-111m5zo-0"})(["display:",";padding:",";word-wrap:",";"],(props=>props.isHidden&&"none"),(props=>props.isHorizontal&&`0 ${3*props.theme.space.base}px`),(props=>props.isHorizontal&&"break-word"));StyledLabelText.defaultProps={theme:theme.A};const LabelComponent=(0,react.forwardRef)(((_ref,ref)=>{let{icon,iconProps,isHidden,children,...other}=_ref;const{currentStepIndex,isActive,isCompleted,isHorizontal}=useStepContext(),stepIcon=icon||currentStepIndex+1,styledIcon=(0,jsx_runtime.jsx)(StyledIcon,{isActive,isHorizontal,children:isCompleted?(0,jsx_runtime.jsx)(check_sm_stroke,{...iconProps}):stepIcon});return(0,jsx_runtime.jsxs)(StyledLabel,{ref,isActive,isHorizontal,...other,children:[isHorizontal?(0,jsx_runtime.jsx)(StyledIconFlexContainer,{children:styledIcon}):styledIcon,(0,jsx_runtime.jsx)(StyledLabelText,{isHidden,isHorizontal,children})]})}));LabelComponent.displayName="Stepper.Label",LabelComponent.propTypes={icon:prop_types_default().any,iconProps:prop_types_default().object,isHidden:prop_types_default().bool};const Label=LabelComponent;try{Label.displayName="Stepper.Label",Label.__docgenInfo={description:"",displayName:"Stepper.Label",props:{icon:{defaultValue:null,description:"Replaces the label number with an icon",name:"icon",required:!1,type:{name:"ReactNode"}},iconProps:{defaultValue:null,description:"Passes props to the default check icon",name:"iconProps",required:!1,type:{name:"SVGAttributes<SVGElement>"}},isHidden:{defaultValue:null,description:"Hides the label text",name:"isHidden",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/accordions/src/elements/stepper/components/Label.tsx#Stepper.Label"]={docgenInfo:Stepper.Label.__docgenInfo,name:"Stepper.Label",path:"packages/accordions/src/elements/stepper/components/Label.tsx#Stepper.Label"})}catch(__react_docgen_typescript_loader_error){}const StyledInnerContent=styled_components_browser_esm.Ay.div.attrs({"data-garden-id":"accordions.step_inner_content","data-garden-version":"storybook"}).withConfig({displayName:"StyledInnerContent",componentId:"sc-1xs9fh7-0"})(["overflow:hidden;line-height:",";color:",";font-size:",";",";"],(props=>(0,getLineHeight.A)(5*props.theme.space.base,props.theme.fontSizes.md)),(props=>(0,getColorV8.A)("foreground",600,props.theme)),(props=>props.theme.fontSizes.md),(props=>(0,retrieveComponentStyles.A)("accordions.step_inner_content",props)));StyledInnerContent.defaultProps={theme:theme.A};const ContentComponent=(0,react.forwardRef)(((props,ref)=>{const{isActive,isHorizontal}=useStepContext();return!1===isHorizontal?(0,jsx_runtime.jsx)(StyledContent,{ref,isActive,...props,children:(0,jsx_runtime.jsx)(StyledInnerContent,{"aria-hidden":!isActive,children:props.children})}):null}));ContentComponent.displayName="Stepper.Content";const Content=ContentComponent;try{Content.displayName="Stepper.Content",Content.__docgenInfo={description:"",displayName:"Stepper.Content",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/accordions/src/elements/stepper/components/Content.tsx#Stepper.Content"]={docgenInfo:Stepper.Content.__docgenInfo,name:"Stepper.Content",path:"packages/accordions/src/elements/stepper/components/Content.tsx#Stepper.Content"})}catch(__react_docgen_typescript_loader_error){}const DEFAULT_ACTIVE_INDEX=0,StepperComponent=(0,react.forwardRef)(((_ref,ref)=>{let{activeIndex=DEFAULT_ACTIVE_INDEX,isHorizontal,children,...props}=_ref;const stepperContext=(0,react.useMemo)((()=>({activeIndex,isHorizontal:isHorizontal||!1})),[activeIndex,isHorizontal]);return(0,jsx_runtime.jsx)(StepperContext.Provider,{value:stepperContext,children:(0,jsx_runtime.jsx)(StyledStepper,{ref,isHorizontal,...props,children:(0,react.useMemo)((()=>react.Children.toArray(children).filter(react.isValidElement).map(((child,index)=>(0,jsx_runtime.jsx)(StepContext.Provider,{value:{currentStepIndex:index,isActive:stepperContext.activeIndex===index,isCompleted:stepperContext.activeIndex>index,isHorizontal:stepperContext.isHorizontal},children:child},index)))),[children,stepperContext])})})}));StepperComponent.displayName="Stepper",StepperComponent.defaultProps={activeIndex:DEFAULT_ACTIVE_INDEX};const Stepper_Stepper=StepperComponent;Stepper_Stepper.Content=Content,Stepper_Stepper.Label=Label,Stepper_Stepper.Step=Step;try{Stepper_Stepper.displayName="Stepper",Stepper_Stepper.__docgenInfo={description:"",displayName:"Stepper",props:{activeIndex:{defaultValue:{value:"0"},description:"Defines the currently active step, starting at 0",name:"activeIndex",required:!1,type:{name:"number"}},isHorizontal:{defaultValue:null,description:"Applies horizontal layout styling",name:"isHorizontal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/accordions/src/elements/stepper/Stepper.tsx#Stepper"]={docgenInfo:Stepper_Stepper.__docgenInfo,name:"Stepper",path:"packages/accordions/src/elements/stepper/Stepper.tsx#Stepper"})}catch(__react_docgen_typescript_loader_error){}var clipboard_list_stroke_path,_path2;__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");function clipboard_list_stroke_extends(){return clipboard_list_stroke_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},clipboard_list_stroke_extends.apply(null,arguments)}const clipboard_list_stroke=function SvgClipboardListStroke(props){return react.createElement("svg",clipboard_list_stroke_extends({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,focusable:"false",viewBox:"0 0 12 12","aria-hidden":"true"},props),clipboard_list_stroke_path||(clipboard_list_stroke_path=react.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M3.5 2.5H2a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5H8.5m-3 4h3m-3 2h3m-.052-5c.31-1.525-.894-3-2.45-3-1.555 0-2.759 1.475-2.45 3h4.9z"})),_path2||(_path2=react.createElement("path",{fill:"currentColor",d:"M3 6h1v1H3zm0 2h1v1H3z"})))},StepperStory=_ref=>{let{steps,...args}=_ref;return(0,jsx_runtime.jsx)(Stepper_Stepper,{...args,children:steps.map(((step,index)=>(0,jsx_runtime.jsxs)(Stepper_Stepper.Step,{children:[(0,jsx_runtime.jsx)(Stepper_Stepper.Label,{icon:args.hasIcon&&(0,jsx_runtime.jsx)(clipboard_list_stroke,{}),isHidden:args.isLabelHidden,iconProps:args.iconProps,children:step.label}),(0,jsx_runtime.jsx)(Stepper_Stepper.Content,{children:step.content})]},index)))})};StepperStory.displayName="StepperStory";var data=__webpack_require__("./packages/accordions/demo/stories/data.ts"),README=__webpack_require__("./packages/accordions/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Packages/Accordions/Stepper",component:Stepper_Stepper,subcomponents:{"Stepper.Content":Stepper_Stepper.Content,"Stepper.Label":Stepper_Stepper.Label,"Stepper.Step":Stepper_Stepper.Step}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.uY,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Stepper",args:{hasIcon:!1,isLabelHidden:!1,steps:data.Am,iconProps:{role:"img","aria-label":"checked","aria-hidden":void 0}},argTypes:{hasIcon:{name:"icon",table:{category:"Stepper.Label"}},isLabelHidden:{name:"isHidden",table:{category:"Stepper.Label"}},steps:{name:"Stepper.Step[]",table:{category:"Story"}},iconProps:{name:"iconProps",table:{category:"Stepper.Label"}}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=171%3A12818"}},children:args=>(0,jsx_runtime.jsx)(StepperStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:README})]})}const stepper=args=>(0,jsx_runtime.jsx)(StepperStory,{...args});stepper.storyName="Stepper",stepper.argTypes={hasIcon:{name:"icon",table:{category:"Stepper.Label"}},isLabelHidden:{name:"isHidden",table:{category:"Stepper.Label"}},steps:{name:"Stepper.Step[]",table:{category:"Story"}},iconProps:{name:"iconProps",table:{category:"Stepper.Label"}}},stepper.args={hasIcon:!1,isLabelHidden:!1,steps:data.Am,iconProps:{role:"img","aria-label":"checked","aria-hidden":void 0}},stepper.parameters={storySource:{source:"args => <StepperStory {...args} />"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=171%3A12818"}};const componentMeta={title:"Packages/Accordions/Stepper",component:Stepper_Stepper,subcomponents:{"Stepper.Content":Stepper_Stepper.Content,"Stepper.Label":Stepper_Stepper.Label,"Stepper.Step":Stepper_Stepper.Step},tags:["stories-mdx"],includeStories:["stepper"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const stepper_stories=componentMeta,__namedExportsOrder=["stepper"]},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.o,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.X});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.X},"./packages/accordions/demo/stories/data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Am:()=>STEPPER_STEPS,hq:()=>TIMELINE_ITEMS,mB:()=>ACCORDION_SECTIONS});const ACCORDION_SECTIONS=[{headerLabel:"Turnip greens yarrow",panel:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea\n    lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage\n    asparagus winter purslane kale. Celery potato scallion desert raisin\n    horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize\n    bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn\n    pea.  Brussels sprout coriander water chestnut gourd swiss chard wakame\n    kohlrabi beetroot carrot watercress."},{headerLabel:"Corn amaranth salsify",panel:"Corn amaranth salsify bunya nuts nori azuki bean chickweed potato\n    bell pepper artichoke. Nori grape silver beet broccoli kombu beet greens\n    fava bean potato quandong celery.  Bunya nuts black-eyed pea prairie turnip\n    leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut\n    eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi\n    leek soko chicory celtuce parsley jícama."},{headerLabel:"Celery quandong swiss",panel:"Celery quandong swiss chard chicory earthnut pea potato. Salsify\n    taro catsear garlic gram celery bitterleaf wattle seed collard greens nori.\n    Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout\n    chard. Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi\n    radish okra azuki bean corn fava bean mustard tigernut jícama green bean\n    celtuce collard greens avocado quandong fennel gumbo black-eyed pea."},{headerLabel:"Grape silver beet",panel:"Grape silver beet watercress potato tigernut corn groundnut.\n    Chickweed okra winter purslane coriander yarrow sweet pepper radish garlic\n    brussels sprout pea groundnut summer purslane earthnut pea tomato spring\n    onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green\n    bean zucchini gourd winter purslane silver beet rock melon radish asparagus\n    spinach."},{headerLabel:"Soko radicchio bunya",panel:"Soko radicchio bunya nuts gram dulse silver beet parsnip napa\n    cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower\n    garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce\n    tomato kale arugula melon sierra leone bologi rutabaga tigernut. Sea lettuce\n    gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce\n    broccoli celery lotus root carrot winter purslane turnip greens garlic.\n    Jícama garlic courgette coriander radicchio plantain scallion cauliflower\n    fava bean desert raisin spring onion chicory bunya nuts. Sea lettuce water\n    spinach gram fava bean leek dandelion silver beet eggplant bush."}],STEPPER_STEPS=[{label:"Veggies es",content:"Veggies es vobis, sweetpotatotomatillo vos postulo essum magis kohlrabi welsh\n      onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko\n      endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens\n      dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."},{label:"Turnip greens",content:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi\n      amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery\n      potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel\n      kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.\n      Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot\n      watercress."},{label:"Corn amaranth",content:"Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper\n      artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.\n      Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce\n      water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek\n      soko chicory celtuce parsley jícama."},{label:"Celery quandong",content:"Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic\n      gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot\n      horseradish carrot squash brussels sprout chard. Pea horseradish azuki bean lettuce avocado\n      asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green\n      bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea."},{label:"Grape silver",content:"Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra winter\n      purslane coriander yarrow sweet pepper radish garlic brussels sprout pea groundnut summer\n      purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna\n      black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish\n      asparagus spinach."},{label:"Beetroot water",content:"Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer\n      purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio\n      turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea\n      dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive\n      groundnut broccoli arugula."},{label:"Soko radicchio",content:"Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea\n      lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic\n      bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga\n      tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce\n      broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama garlic courgette\n      coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory\n      bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush."},{label:"Zucchini soko",content:"Zucchini soko peanut pea okra cucumber Dandelion tomato. wakame earthnut dandelion\n      greens collard bean fava sprouts pea tatsoi courgette shallot Parsley gourd. Gumbo endive soko\n      corn greens beet Gumbo garlic. Bean azuki melon tomatillo tatsoi amaranth daikon onion welsh\n      kohlrabi magis essum postulo vos proinde vobis, bonus es veggies."},{label:"Swiss carrot",content:"Swiss carrot beetroot kohlrabi wakame chard gourd chestnut water coriander sprout\n      brussels pea. Corn gram chickpea onion pumpkin seakale chard swiss bean green shoot bamboo\n      maize kombu fennel spinach water root Lotus soko. Carrot spinach horseradish raisin desert\n      scallion potato celery kale. Purslane winter asparagus cabbage napa daikon avocado spinach\n      water amaranth kohlrabi lettuce sea cauliflower endive rutabaga ricebean yarrow greens."},{label:"Pea black-eyed",content:"Pea black-eyed gumbo fennel quandong avocado greens collard celtuce bean green jícama\n      tigernut mustard bean fava corn bean azuki okra radish Kohlrabi okra. asparagus avocado lettuce\n      bean azuki horseradish pea chard. Sprout brussels squash carrot horseradish beetroot kombu seed\n      wattle Grape nori. Greens collard seed wattle bitterleaf celery gram garlic catsear taro\n      salsify potato. Pea earthnut chicory chard swiss quandong celery."}],TIMELINE_ITEMS=[{title:"Plant seed",description:"Today, 9:00 AM"},{title:"Purchased seed",description:"Feb 08, 9:05 AM"},{title:"Arranged layout of garden",description:"Jan 21, 9:13 AM"},{title:"Chose a gardening location",description:"Jan 21, 9:21 AM"}]},"./packages/theming/src/utils/getLineHeight.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>getLineHeight});var polished__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/polished/dist/polished.esm.js");function getLineHeight(height,fontSize){const[heightValue,heightUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.J$)(height.toString()),[fontSizeValue,fontSizeUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.J$)(fontSize.toString());if(heightUnit&&"px"!==heightUnit)throw new Error(`Unexpected \`height\` with '${heightUnit}' units.`);if(fontSizeUnit&&"px"!==fontSizeUnit)throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit}' units.`);return heightValue/fontSizeValue}},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{A:()=>retrieveComponentStyles})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./packages/accordions/README.md":module=>{"use strict";module.exports="# @zendeskgarden/react-accordions [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-accordions)](https://www.npmjs.com/package/@zendeskgarden/react-accordions)\n\nThis package includes components related to accordions in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-accordions\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n### Accordion\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Accordion } from '@zendeskgarden/react-accordions';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Accordion level={3}>\n    <Accordion.Section>\n      <Accordion.Header>\n        <Accordion.Label>Turnip greens yarrow</Accordion.Label>\n      </Accordion.Header>\n      <Accordion.Panel>\n        Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth\n        water spinach avocado daikon napa cabbage asparagus winter purslane kale.\n      </Accordion.Panel>\n    </Accordion.Section>\n    <Accordion.Section>\n      <Accordion.Header>\n        <Accordion.Label>Corn amaranth salsify</Accordion.Label>\n      </Accordion.Header>\n      <Accordion.Panel>\n        Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.\n        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.\n      </Accordion.Panel>\n    </Accordion.Section>\n    <Accordion.Section>\n      <Accordion.Header>\n        <Accordion.Label>Celery quandong swiss</Accordion.Label>\n      </Accordion.Header>\n      <Accordion.Panel>\n        Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram\n        celery bitterleaf wattle seed collard greens nori.\n      </Accordion.Panel>\n    </Accordion.Section>\n  </Accordion>\n</ThemeProvider>;\n```\n\n### Stepper\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Stepper } from '@zendeskgarden/react-accordions';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Stepper>\n    <Stepper.Step>\n      <Stepper.Label>Brussels</Stepper.Label>\n      <Stepper.Content>\n        Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi radish artichoke.\n      </Stepper.Content>\n    </Stepper.Step>\n    <Stepper.Step>\n      <Stepper.Label>Beetroot</Stepper.Label>\n      <Stepper.Content>\n        Beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean turnip greens.\n      </Stepper.Content>\n    </Stepper.Step>\n    <Stepper.Step>\n      <Stepper.Label>Turnip</Stepper.Label>\n      <Stepper.Content>\n        Turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea.\n      </Stepper.Content>\n    </Stepper.Step>\n  </Stepper>\n</ThemeProvider>;\n```\n"}}]);