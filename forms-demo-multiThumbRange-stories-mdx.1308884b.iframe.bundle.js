"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[9174],{"./packages/forms/demo/multiThumbRange.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>multiThumbRange_stories,multiThumbRange:()=>multiThumbRange});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),prop_types=__webpack_require__("./packages/forms/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),lodash_debounce=__webpack_require__("./packages/forms/node_modules/lodash.debounce/index.js"),lodash_debounce_default=__webpack_require__.n(lodash_debounce);function composeEventHandlers(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(event){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];return fns.some((fn=>(fn&&fn(event,...args),event&&event.defaultPrevented)))}}const KEYS_DOWN="ArrowDown",KEYS_END="End",KEYS_HOME="Home",KEYS_LEFT="ArrowLeft",KEYS_PAGE_DOWN="PageDown",KEYS_PAGE_UP="PageUp",KEYS_RIGHT="ArrowRight",KEYS_UP="ArrowUp";var DocumentPosition;!function(DocumentPosition){DocumentPosition[DocumentPosition.DISCONNECTED=1]="DISCONNECTED",DocumentPosition[DocumentPosition.PRECEDING=2]="PRECEDING",DocumentPosition[DocumentPosition.FOLLOWING=4]="FOLLOWING",DocumentPosition[DocumentPosition.CONTAINS=8]="CONTAINS",DocumentPosition[DocumentPosition.CONTAINED_BY=16]="CONTAINED_BY",DocumentPosition[DocumentPosition.IMPLEMENTATION_SPECIFIC=32]="IMPLEMENTATION_SPECIFIC"}(DocumentPosition||(DocumentPosition={}));const SLIDER_MIN=0,SLIDER_MAX=100,SLIDER_STEP=1;function useSlider(_ref){let{trackRef,minThumbRef,maxThumbRef,min=SLIDER_MIN,max=SLIDER_MAX,defaultMinValue,defaultMaxValue,minValue,maxValue,onChange=()=>{},step=SLIDER_STEP,jump=step,disabled,rtl,environment}=_ref;const doc=environment||document,[trackRect,setTrackRect]=(0,react.useState)({width:0}),init=function(initMinValue,initMaxValue){void 0===initMinValue&&(initMinValue=min),void 0===initMaxValue&&(initMaxValue=max);const retVal={minValue:initMinValue<min?min:initMinValue,maxValue:initMaxValue>max?max:initMaxValue};return retVal.maxValue<min&&(retVal.maxValue=min),retVal.minValue>retVal.maxValue&&(retVal.minValue=retVal.maxValue),retVal},[state,setState]=(0,react.useState)(init(defaultMinValue,defaultMaxValue)),isControlled=null!=minValue||null!=maxValue,position=isControlled?init(minValue,maxValue):state,setPosition=isControlled?onChange:setState;(0,react.useEffect)((()=>{const handleResize=lodash_debounce_default()((()=>{trackRef.current&&setTrackRect(trackRef.current.getBoundingClientRect())}),100);handleResize();const win=doc.defaultView||window;return win.addEventListener("resize",handleResize),()=>{win.removeEventListener("resize",handleResize),handleResize.cancel()}}),[doc,trackRef]);const getTrackPosition=(0,react.useCallback)((event=>{let retVal;if(trackRect){const offset=rtl?trackRect.left+trackRect.width:trackRect.left,mouseX=(event.pageX-offset)*(rtl?-1:1),x=(max-min)*mouseX/trackRect.width,value=min+parseInt(x,10);retVal=Math.floor(value/step)*step}return retVal}),[max,min,trackRect,rtl,step]),setThumbPosition=(0,react.useCallback)((thumb=>value=>{if(!disabled){let newMinValue=position.minValue,newMaxValue=position.maxValue;"min"===thumb?newMinValue=value<min?min:value>position.maxValue?position.maxValue:value:"max"===thumb&&(newMaxValue=value>max?max:value<position.minValue?position.minValue:value),isNaN(newMinValue)||isNaN(newMaxValue)||setPosition({minValue:newMinValue,maxValue:newMaxValue})}}),[disabled,max,min,position.maxValue,position.minValue,setPosition]),getTrackProps=(0,react.useCallback)((function(_temp){let{onMouseDown,...other}=void 0===_temp?{}:_temp;return{"data-garden-container-id":"containers.slider.track","data-garden-container-version":"0.1.6","aria-disabled":disabled,onMouseDown:composeEventHandlers(onMouseDown,(event=>{if(!disabled&&0===event.button){const value=getTrackPosition(event);if(void 0!==value){Math.abs(position.minValue-value)<=Math.abs(position.maxValue-value)?(minThumbRef.current&&minThumbRef.current.focus(),setThumbPosition("min")(value)):(maxThumbRef.current&&maxThumbRef.current.focus(),setThumbPosition("max")(value))}}})),...other}}),[disabled,getTrackPosition,maxThumbRef,minThumbRef,position.maxValue,position.minValue,setThumbPosition]),getThumbProps=(0,react.useCallback)((thumb=>_ref2=>{let{onKeyDown,onMouseDown,onTouchStart,...other}=_ref2;const handleMouseMove=event=>{const value=getTrackPosition(event);void 0!==value&&setThumbPosition(thumb)(value)},handleTouchMove=event=>{const value=getTrackPosition(event.targetTouches[0]);void 0!==value&&setThumbPosition(thumb)(value)},handleMouseUp=()=>{doc.removeEventListener("mousemove",handleMouseMove),doc.removeEventListener("mouseup",handleMouseUp)},handleTouchEnd=()=>{doc.removeEventListener("touchend",handleTouchEnd),doc.removeEventListener("touchmove",handleTouchMove)};return{"data-garden-container-id":"containers.slider.thumb","data-garden-container-version":"0.1.6",role:"slider",tabIndex:disabled?-1:0,"aria-valuemin":"min"===thumb?min:position.minValue,"aria-valuemax":"min"===thumb?position.maxValue:max,"aria-valuenow":"min"===thumb?position.minValue:position.maxValue,onKeyDown:composeEventHandlers(onKeyDown,(event=>{if(!disabled){let value;switch(event.key){case KEYS_RIGHT:value=("min"===thumb?position.minValue:position.maxValue)+(rtl?-step:step);break;case KEYS_UP:value=("min"===thumb?position.minValue:position.maxValue)+step;break;case KEYS_LEFT:value=("min"===thumb?position.minValue:position.maxValue)-(rtl?-step:step);break;case KEYS_DOWN:value=("min"===thumb?position.minValue:position.maxValue)-step;break;case KEYS_PAGE_UP:value=("min"===thumb?position.minValue:position.maxValue)+jump;break;case KEYS_PAGE_DOWN:value=("min"===thumb?position.minValue:position.maxValue)-jump;break;case KEYS_HOME:value=min;break;case KEYS_END:value=max}void 0!==value&&(event.preventDefault(),event.stopPropagation(),setThumbPosition(thumb)(value))}})),onMouseDown:composeEventHandlers(onMouseDown,(event=>{disabled||0!==event.button||(event.stopPropagation(),doc.addEventListener("mousemove",handleMouseMove),doc.addEventListener("mouseup",handleMouseUp),event.target&&event.target.focus())})),onTouchStart:composeEventHandlers(onTouchStart,(event=>{disabled||(event.stopPropagation(),doc.addEventListener("touchmove",handleTouchMove),doc.addEventListener("touchend",handleTouchEnd),event.target&&event.target.focus())})),...other}}),[doc,disabled,getTrackPosition,jump,max,min,position.maxValue,position.minValue,rtl,step,setThumbPosition]);return(0,react.useMemo)((()=>({getTrackProps,getMinThumbProps:getThumbProps("min"),getMaxThumbProps:getThumbProps("max"),trackRect,minValue:position.minValue,maxValue:position.maxValue})),[getTrackProps,getThumbProps,position.minValue,position.maxValue,trackRect])}const SliderContainer=_ref=>{let{children,render=children,...options}=_ref;return react.createElement(react.Fragment,null,render(useSlider(options)))};SliderContainer.propTypes={children:prop_types_default().func,render:prop_types_default().func,trackRef:prop_types_default().any.isRequired,minThumbRef:prop_types_default().any.isRequired,maxThumbRef:prop_types_default().any.isRequired,environment:prop_types_default().any,defaultMinValue:prop_types_default().number,defaultMaxValue:prop_types_default().number,minValue:prop_types_default().number,maxValue:prop_types_default().number,onChange:prop_types_default().func,min:prop_types_default().number,max:prop_types_default().number,step:prop_types_default().number,jump:prop_types_default().number,disabled:prop_types_default().bool,rtl:prop_types_default().bool},SliderContainer.defaultProps={min:SLIDER_MIN,max:SLIDER_MAX,step:SLIDER_STEP};var useDocument=__webpack_require__("./packages/theming/src/utils/useDocument.ts"),polished_esm=__webpack_require__("./packages/forms/node_modules/polished/dist/polished.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledHint=__webpack_require__("./packages/forms/src/styled/common/StyledHint.ts"),StyledLabel=__webpack_require__("./packages/forms/src/styled/common/StyledLabel.ts"),StyledMessage=__webpack_require__("./packages/forms/src/styled/common/StyledMessage.ts");const StyledSlider=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"forms.slider","data-garden-version":"storybook"}).withConfig({displayName:"StyledSlider",componentId:"sc-1di437a-0"})(["display:block;position:relative;z-index:0;cursor:pointer;height:",";&[aria-disabled='true']{cursor:default;}",":not([hidden]) + &,"," + &,"," + &,& + ",",& + ","{margin-top:",";}",";"],(props=>(0,polished_esm.mA)(`(${props.theme.space.base} * 5px) + (${props.theme.shadowWidths.md} * 2)`)),StyledLabel.a,StyledHint.q,StyledMessage.g,StyledHint.q,StyledMessage.g,(props=>(0,polished_esm.mA)(`${props.theme.space.base} * 2px`)),(props=>(0,retrieveComponentStyles.Z)("forms.slider",props)));StyledSlider.defaultProps={theme:theme.Z};var getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts");const StyledSliderTrack=styled_components_browser_esm.ZP.div.attrs((props=>({"data-garden-id":"forms.slider_track","data-garden-version":"storybook","aria-disabled":props.isDisabled}))).withConfig({displayName:"StyledSliderTrack",componentId:"sc-aw5m6g-0"})(["position:absolute;top:50%;box-sizing:border-box;background-origin:content-box;background-repeat:repeat-y;width:100%;",";",";",";"],(props=>(props=>{const height=(0,polished_esm.mA)(`${props.theme.space.base} * 1.5px`),backgroundPosition=(0,polished_esm.mA)(`${props.backgroundPosition} * 1px`),backgroundSize=(0,polished_esm.mA)(`${props.backgroundSize} * 1px`),borderRadius=height,marginTop=(0,polished_esm.mA)(`${height} / -2`),padding=(0,polished_esm.mA)(`${props.theme.space.base} * 2.5px`);return(0,styled_components_browser_esm.iv)(["margin-top:",";border-radius:",";background-position:",";background-size:",";padding:0 ",";"],marginTop,borderRadius,backgroundPosition,backgroundSize,padding)})(props)),(props=>(props=>{const backgroundColor=(0,getColor.L)("neutralHue",200,props.theme),backgroundImageColor=(0,getColor.L)("primaryHue",600,props.theme),disabledBackgroundColor=(0,getColor.L)("neutralHue",300,props.theme);return(0,styled_components_browser_esm.iv)(["background-color:",";background-image:linear-gradient(",",",");&[aria-disabled='true']{background-image:linear-gradient(",",",");}"],backgroundColor,backgroundImageColor,backgroundImageColor,disabledBackgroundColor,disabledBackgroundColor)})(props)),(props=>(0,retrieveComponentStyles.Z)("forms.slider_track",props)));StyledSliderTrack.defaultProps={backgroundSize:0,backgroundPosition:0,theme:theme.Z};const StyledSliderTrackRail=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"forms.slider_track_rail","data-garden-version":"storybook"}).withConfig({displayName:"StyledSliderTrackRail",componentId:"sc-1o5owbd-0"})(["position:relative;",";",";"],(props=>(props=>{const height=(0,polished_esm.mA)(`${props.theme.space.base} * 1.5px`),margin=(0,polished_esm.mA)(`${props.theme.space.base} * 2.5px`);return(0,styled_components_browser_esm.iv)(["margin:0 "," 0 ",";height:",";"],props.theme.rtl?`-${margin}`:margin,props.theme.rtl?margin:`-${margin}`,height)})(props)),(props=>(0,retrieveComponentStyles.Z)("forms.slider_track_rail",props)));StyledSliderTrackRail.defaultProps={theme:theme.Z};var focusStyles=__webpack_require__("./packages/theming/src/utils/focusStyles.ts");const StyledSliderThumb=styled_components_browser_esm.ZP.div.attrs((props=>({"data-garden-id":"forms.slider_thumb","data-garden-version":"storybook","aria-disabled":props.isDisabled}))).withConfig({displayName:"StyledSliderThumb",componentId:"sc-yspbwa-0"})(["appearance:none;position:absolute;top:50%;",":",";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out;z-index:1;border:",";border-radius:100%;cursor:inherit;box-sizing:border-box;font-size:0;",";",";",";"],(props=>props.theme.rtl?"right":"left"),(props=>(0,polished_esm.mA)(`${props.position} * 1px`)),(props=>props.theme.borders.md),(props=>(props=>{const size=(0,polished_esm.mA)(`${props.theme.space.base} * 5px`),marginTop=(0,polished_esm.mA)(`${size} / -2`);return(0,styled_components_browser_esm.iv)(["margin-top:",";width:",";height:",";"],marginTop,size,size)})(props)),(props=>(props=>{const backgroundColor=(0,getColor.L)("primaryHue",600,props.theme),borderColor=backgroundColor,boxShadow=props.theme.shadows.lg((0,polished_esm.mA)(`${props.theme.space.base} * 1px`),(0,polished_esm.mA)(`${props.theme.space.base} * 2px`),(0,getColor.L)("neutralHue",800,props.theme,.24)),activeBackgroundColor=(0,getColor.L)("primaryHue",700,props.theme),activeBorderColor=borderColor,hoverBackgroundColor=activeBackgroundColor,hoverBorderColor=hoverBackgroundColor,disabledBackgroundColor=(0,getColor.L)("neutralHue",300,props.theme),disabledBorderColor=disabledBackgroundColor;return(0,styled_components_browser_esm.iv)(["border-color:",";box-shadow:",";background-color:",";&:hover,&[data-garden-hover='true']{border-color:",";background-color:",";}"," &:active,&[data-garden-active='true']{border-color:",";background-color:",";}&[aria-disabled='true']{border-color:",";box-shadow:none;background-color:",";}"],borderColor,boxShadow,backgroundColor,hoverBorderColor,hoverBackgroundColor,(0,focusStyles.j)({theme:props.theme}),activeBorderColor,activeBackgroundColor,disabledBorderColor,disabledBackgroundColor)})(props)),(props=>(0,retrieveComponentStyles.Z)("forms.slider_thumb",props)));StyledSliderThumb.defaultProps={position:0,theme:theme.Z};var useFieldContext=__webpack_require__("./packages/forms/src/utils/useFieldContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MIN=0,MAX=100,MultiThumbRange=(0,react.forwardRef)(((_ref,ref)=>{let{min=MIN,max=MAX,minValue,maxValue,disabled,step,jump,onChange,onMouseDown,...props}=_ref;const theme=(0,react.useContext)(styled_components_browser_esm.Ni),environment=(0,useDocument.k)(theme),trackRailRef=(0,react.useRef)(null),minThumbRef=(0,react.useRef)(null),maxThumbRef=(0,react.useRef)(null),{getTrackProps,getMinThumbProps,getMaxThumbProps,trackRect,minValue:updatedMinValue,maxValue:updatedMaxValue}=useSlider({trackRef:trackRailRef,minThumbRef,maxThumbRef,min,max,minValue,maxValue,onChange,step,jump,disabled,rtl:theme.rtl,environment}),{onMouseDown:onSliderMouseDown,...trackProps}=getTrackProps({onMouseDown}),fieldContext=(0,useFieldContext.Z)(),{isLabelHovered,isLabelActive,multiThumbRangeRef}=fieldContext||{};(0,react.useEffect)((()=>{multiThumbRangeRef&&(multiThumbRangeRef.current=minThumbRef.current)}),[multiThumbRangeRef]);const minPosition=(updatedMinValue-min)/(max-min)*trackRect.width,maxPosition=(updatedMaxValue-min)/(max-min)*trackRect.width,sliderBackgroundSize=Math.abs(maxPosition)-Math.abs(minPosition);return(0,jsx_runtime.jsx)(StyledSlider,{ref,onMouseDown:onSliderMouseDown,...props,children:(0,jsx_runtime.jsx)(StyledSliderTrack,{backgroundSize:sliderBackgroundSize,backgroundPosition:theme.rtl?trackRect.width-maxPosition:minPosition,isDisabled:disabled,children:(0,jsx_runtime.jsxs)(StyledSliderTrackRail,{...trackProps,ref:trackRailRef,children:[(0,jsx_runtime.jsx)(StyledSliderThumb,{...getMinThumbProps({"aria-label":updatedMinValue}),isDisabled:disabled,position:minPosition,ref:minThumbRef,"data-garden-active":isLabelActive,"data-garden-hover":isLabelHovered}),(0,jsx_runtime.jsx)(StyledSliderThumb,{...getMaxThumbProps({"aria-label":updatedMaxValue}),isDisabled:disabled,position:maxPosition,ref:maxThumbRef})]})})})}));MultiThumbRange.displayName="MultiThumbRange",MultiThumbRange.propTypes={min:prop_types_default().number,max:prop_types_default().number,minValue:prop_types_default().number,maxValue:prop_types_default().number,step:prop_types_default().number,jump:prop_types_default().number,disabled:prop_types_default().bool,onChange:prop_types_default().func},MultiThumbRange.defaultProps={min:MIN,max:MAX,step:1};try{MultiThumbRange.displayName="MultiThumbRange",MultiThumbRange.__docgenInfo={description:"",displayName:"MultiThumbRange",props:{min:{defaultValue:{value:"0"},description:"Sets the minimum permitted value",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Sets the maximum permitted value",name:"max",required:!1,type:{name:"number"}},minValue:{defaultValue:null,description:"Sets the minimum thumb value",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Sets the maximum thumb value",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"Defines the stepping interval",name:"step",required:!1,type:{name:"number"}},jump:{defaultValue:null,description:"Defines the jumping interval for keyboard page up/down navigation. Defaults to `step`.",name:"jump",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"Indicates that the element is not interactive",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handles change events\n@param updatedValues The values that have changed",name:"onChange",required:!1,type:{name:"((updatedValues: { minValue?: number; maxValue?: number; }) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/forms/src/elements/MultiThumbRange.tsx#MultiThumbRange"]={docgenInfo:MultiThumbRange.__docgenInfo,name:"MultiThumbRange",path:"packages/forms/src/elements/MultiThumbRange.tsx#MultiThumbRange"})}catch(__react_docgen_typescript_loader_error){}var Field=__webpack_require__("./packages/forms/src/elements/common/Field.tsx"),Label=__webpack_require__("./packages/forms/src/elements/common/Label.tsx"),Hint=__webpack_require__("./packages/forms/src/elements/common/Hint.tsx"),Message=__webpack_require__("./packages/forms/src/elements/common/Message.tsx"),FieldStory=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./packages/forms/demo/stories/FieldStory.tsx"));const MultiThumbRangeStory=_ref=>{let{label,isLabelRegular,isLabelHidden,hasHint,hint,hasMessage,message,validationLabel,...args}=_ref;return(0,jsx_runtime.jsx)(FieldStory.f,{label,isLabelRegular,isLabelHidden,hasHint,hint,hasMessage,message,validation:args.validation,validationLabel,children:(0,jsx_runtime.jsx)(MultiThumbRange,{...args})})};MultiThumbRangeStory.displayName="MultiThumbRangeStory";var common=__webpack_require__("./packages/forms/demo/stories/common.tsx"),README=__webpack_require__("./packages/forms/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Forms/MultiThumbRange",component:MultiThumbRange,subcomponents:{Field:Field.g,Label:Label._,Hint:Hint.k,Message:Message.v}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"MultiThumbRange",args:{...common.km},argTypes:{...common.w$},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20263"}},children:args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(MultiThumbRangeStory,{...args,onChange:({minValue,maxValue})=>updateArgs({minValue,maxValue})})}})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README})]})}const multiThumbRange=args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(MultiThumbRangeStory,{...args,onChange:({minValue,maxValue})=>updateArgs({minValue,maxValue})})};multiThumbRange.storyName="MultiThumbRange",multiThumbRange.argTypes={...common.w$},multiThumbRange.args={...common.km},multiThumbRange.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleChange = ({\n    minValue,\n    maxValue\n  }) => updateArgs({\n    minValue,\n    maxValue\n  });\n  return <MultiThumbRangeStory {...args} onChange={handleChange} />;\n}"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20263"}};const componentMeta={title:"Packages/Forms/MultiThumbRange",component:MultiThumbRange,subcomponents:{Field:Field.g,Label:Label._,Hint:Hint.k,Message:Message.v},tags:["stories-mdx"],includeStories:["multiThumbRange"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const multiThumbRange_stories=componentMeta}}]);