(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[925],{"./packages/datepickers/demo/datepicker.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,datepicker:()=>datepicker,default:()=>datepicker_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),assertThisInitialized=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),create_react_context_lib=__webpack_require__("./node_modules/@hypnosphi/create-react-context/lib/index.js"),lib_default=__webpack_require__.n(create_react_context_lib),ManagerReferenceNodeContext=lib_default()(),ManagerReferenceNodeSetterContext=lib_default()(),Manager=function(_React$Component){function Manager(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_React$Component.call.apply(_React$Component,[this].concat(args))||this,(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"referenceNode",void 0),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"setReferenceNode",(function(newReferenceNode){newReferenceNode&&_this.referenceNode!==newReferenceNode&&(_this.referenceNode=newReferenceNode,_this.forceUpdate())})),_this}(0,inheritsLoose.A)(Manager,_React$Component);var _proto=Manager.prototype;return _proto.componentWillUnmount=function componentWillUnmount(){this.referenceNode=null},_proto.render=function render(){return react.createElement(ManagerReferenceNodeContext.Provider,{value:this.referenceNode},react.createElement(ManagerReferenceNodeSetterContext.Provider,{value:this.setReferenceNode},this.props.children))},Manager}(react.Component),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),warning=__webpack_require__("./node_modules/warning/warning.js"),warning_default=__webpack_require__.n(warning),unwrapArray=function unwrapArray(arg){return Array.isArray(arg)?arg[0]:arg},safeInvoke=function safeInvoke(fn){if("function"==typeof fn){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return fn.apply(void 0,args)}},setRef=function setRef(ref,node){if("function"==typeof ref)return safeInvoke(ref,node);null!=ref&&(ref.current=node)},InnerReference=function(_React$Component){function InnerReference(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_React$Component.call.apply(_React$Component,[this].concat(args))||this,(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"refHandler",(function(node){setRef(_this.props.innerRef,node),safeInvoke(_this.props.setReferenceNode,node)})),_this}(0,inheritsLoose.A)(InnerReference,_React$Component);var _proto=InnerReference.prototype;return _proto.componentWillUnmount=function componentWillUnmount(){setRef(this.props.innerRef,null)},_proto.render=function render(){return warning_default()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),unwrapArray(this.props.children)({ref:this.refHandler})},InnerReference}(react.Component);function Reference(props){return react.createElement(ManagerReferenceNodeSetterContext.Consumer,null,(function(setReferenceNode){return react.createElement(InnerReference,(0,esm_extends.A)({setReferenceNode},props))}))}var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),deep_equal=__webpack_require__("./packages/datepickers/node_modules/deep-equal/index.js"),deep_equal_default=__webpack_require__.n(deep_equal),popper=__webpack_require__("./node_modules/popper.js/dist/esm/popper.js"),initialStyle={position:"absolute",top:0,left:0,opacity:0,pointerEvents:"none"},initialArrowStyle={},InnerPopper=function(_React$Component){function InnerPopper(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_React$Component.call.apply(_React$Component,[this].concat(args))||this,(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"state",{data:void 0,placement:void 0}),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"popperInstance",void 0),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"popperNode",null),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"arrowNode",null),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"setPopperNode",(function(popperNode){popperNode&&_this.popperNode!==popperNode&&(setRef(_this.props.innerRef,popperNode),_this.popperNode=popperNode,_this.updatePopperInstance())})),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"setArrowNode",(function(arrowNode){_this.arrowNode=arrowNode})),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"updateStateModifier",{enabled:!0,order:900,fn:function fn(data){var placement=data.placement;return _this.setState({data,placement}),data}}),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"getOptions",(function(){return{placement:_this.props.placement,eventsEnabled:_this.props.eventsEnabled,positionFixed:_this.props.positionFixed,modifiers:(0,esm_extends.A)({},_this.props.modifiers,{arrow:(0,esm_extends.A)({},_this.props.modifiers&&_this.props.modifiers.arrow,{enabled:!!_this.arrowNode,element:_this.arrowNode}),applyStyle:{enabled:!1},updateStateModifier:_this.updateStateModifier})}})),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"getPopperStyle",(function(){return _this.popperNode&&_this.state.data?(0,esm_extends.A)({position:_this.state.data.offsets.popper.position},_this.state.data.styles):initialStyle})),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"getPopperPlacement",(function(){return _this.state.data?_this.state.placement:void 0})),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"getArrowStyle",(function(){return _this.arrowNode&&_this.state.data?_this.state.data.arrowStyles:initialArrowStyle})),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"getOutOfBoundariesState",(function(){return _this.state.data?_this.state.data.hide:void 0})),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"destroyPopperInstance",(function(){_this.popperInstance&&(_this.popperInstance.destroy(),_this.popperInstance=null)})),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"updatePopperInstance",(function(){_this.destroyPopperInstance();var popperNode=(0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)).popperNode,referenceElement=_this.props.referenceElement;referenceElement&&popperNode&&(_this.popperInstance=new popper.A(referenceElement,popperNode,_this.getOptions()))})),(0,defineProperty.A)((0,assertThisInitialized.A)((0,assertThisInitialized.A)(_this)),"scheduleUpdate",(function(){_this.popperInstance&&_this.popperInstance.scheduleUpdate()})),_this}(0,inheritsLoose.A)(InnerPopper,_React$Component);var _proto=InnerPopper.prototype;return _proto.componentDidUpdate=function componentDidUpdate(prevProps,prevState){this.props.placement===prevProps.placement&&this.props.referenceElement===prevProps.referenceElement&&this.props.positionFixed===prevProps.positionFixed&&deep_equal_default()(this.props.modifiers,prevProps.modifiers,{strict:!0})?this.props.eventsEnabled!==prevProps.eventsEnabled&&this.popperInstance&&(this.props.eventsEnabled?this.popperInstance.enableEventListeners():this.popperInstance.disableEventListeners()):this.updatePopperInstance(),prevState.placement!==this.state.placement&&this.scheduleUpdate()},_proto.componentWillUnmount=function componentWillUnmount(){setRef(this.props.innerRef,null),this.destroyPopperInstance()},_proto.render=function render(){return unwrapArray(this.props.children)({ref:this.setPopperNode,style:this.getPopperStyle(),placement:this.getPopperPlacement(),outOfBoundaries:this.getOutOfBoundariesState(),scheduleUpdate:this.scheduleUpdate,arrowProps:{ref:this.setArrowNode,style:this.getArrowStyle()}})},InnerPopper}(react.Component);(0,defineProperty.A)(InnerPopper,"defaultProps",{placement:"bottom",eventsEnabled:!0,referenceElement:void 0,positionFixed:!1});popper.A.placements;function Popper(_ref){var referenceElement=_ref.referenceElement,props=(0,objectWithoutPropertiesLoose.A)(_ref,["referenceElement"]);return react.createElement(ManagerReferenceNodeContext.Consumer,null,(function(referenceNode){return react.createElement(InnerPopper,(0,esm_extends.A)({referenceElement:void 0!==referenceElement?referenceElement:referenceNode},props))}))}var index_esm=__webpack_require__("./node_modules/@zendeskgarden/container-utilities/dist/index.esm.js");const SHARED_PLACEMENT=["auto","top","top-start","top-end","bottom","bottom-start","bottom-end"],PLACEMENT=[...SHARED_PLACEMENT,"end","end-top","end-bottom","start","start-top","start-bottom"];function getPopperPlacement(gardenPlacement){switch(gardenPlacement){case"end":return"right";case"end-top":return"right-start";case"end-bottom":return"right-end";case"start":return"left";case"start-top":return"left-start";case"start-bottom":return"left-end";default:return gardenPlacement}}var startOfMonth=__webpack_require__("./node_modules/date-fns/startOfMonth.mjs"),endOfMonth=__webpack_require__("./node_modules/date-fns/endOfMonth.mjs"),startOfWeek=__webpack_require__("./node_modules/date-fns/startOfWeek.mjs"),endOfWeek=__webpack_require__("./node_modules/date-fns/endOfWeek.mjs"),eachDayOfInterval=__webpack_require__("./node_modules/date-fns/eachDayOfInterval.mjs"),addDays=__webpack_require__("./node_modules/date-fns/addDays.mjs"),isToday=__webpack_require__("./node_modules/date-fns/isToday.mjs"),isSameDay=__webpack_require__("./node_modules/date-fns/isSameDay.mjs"),isSameMonth=__webpack_require__("./node_modules/date-fns/isSameMonth.mjs"),isBefore=__webpack_require__("./node_modules/date-fns/isBefore.mjs"),isAfter=__webpack_require__("./node_modules/date-fns/isAfter.mjs"),toDate=__webpack_require__("./node_modules/date-fns/toDate.mjs");function getDate(date){return(0,toDate.a)(date).getDate()}var StyledCalendarItem=__webpack_require__("./packages/datepickers/src/styled/StyledCalendarItem.ts"),StyledDayLabel=__webpack_require__("./packages/datepickers/src/styled/StyledDayLabel.ts"),StyledDay=__webpack_require__("./packages/datepickers/src/styled/StyledDay.ts"),StyledDatepicker=__webpack_require__("./packages/datepickers/src/styled/StyledDatepicker.ts"),StyledCalendar=__webpack_require__("./packages/datepickers/src/styled/StyledCalendar.ts");const DatepickerContext=(0,react.createContext)(void 0),utils_useDatepickerContext=()=>(0,react.useContext)(DatepickerContext);var calendar_utils=__webpack_require__("./packages/datepickers/src/utils/calendar-utils.ts"),StyledHeader=__webpack_require__("./packages/datepickers/src/styled/StyledHeader.ts"),StyledHeaderPaddle=__webpack_require__("./packages/datepickers/src/styled/StyledHeaderPaddle.ts"),StyledHeaderLabel=__webpack_require__("./packages/datepickers/src/styled/StyledHeaderLabel.ts"),chevron_left_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg"),chevron_right_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MonthSelector=_ref=>{let{locale,isCompact}=_ref;const{state,dispatch}=utils_useDatepickerContext(),headerLabelFormatter=(0,react.useCallback)((date=>new Intl.DateTimeFormat(locale,{month:"long",year:"numeric"}).format(date)),[locale]);return(0,jsx_runtime.jsxs)(StyledHeader.h,{isCompact,children:[(0,jsx_runtime.jsx)(StyledHeaderPaddle.P,{isCompact,onClick:()=>{dispatch({type:"PREVIEW_PREVIOUS_MONTH"})},children:(0,jsx_runtime.jsx)(chevron_left_stroke.A,{})}),(0,jsx_runtime.jsx)(StyledHeaderLabel.n,{isCompact,children:headerLabelFormatter(state.previewDate)}),(0,jsx_runtime.jsx)(StyledHeaderPaddle.P,{isCompact,onClick:()=>{dispatch({type:"PREVIEW_NEXT_MONTH"})},children:(0,jsx_runtime.jsx)(chevron_right_stroke.A,{})})]})};MonthSelector.displayName="MonthSelector";try{MonthSelector.displayName="MonthSelector",MonthSelector.__docgenInfo={description:"",displayName:"MonthSelector",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"string"}},isCompact:{defaultValue:null,description:"",name:"isCompact",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/datepickers/src/elements/Datepicker/components/MonthSelector.tsx#MonthSelector"]={docgenInfo:MonthSelector.__docgenInfo,name:"MonthSelector",path:"packages/datepickers/src/elements/Datepicker/components/MonthSelector.tsx#MonthSelector"})}catch(__react_docgen_typescript_loader_error){}const Calendar=(0,react.forwardRef)(((_ref,ref)=>{let{value,minValue,maxValue,isCompact,locale,weekStartsOn}=_ref;const{state,dispatch}=utils_useDatepickerContext(),preferredWeekStartsOn=weekStartsOn||(0,calendar_utils.m)(locale),monthStartDate=(0,startOfMonth.w)(state.previewDate),monthEndDate=(0,endOfMonth.p)(monthStartDate),startDate=(0,startOfWeek.k)(monthStartDate,{weekStartsOn:preferredWeekStartsOn}),endDate=(0,endOfWeek.$)(monthEndDate,{weekStartsOn:preferredWeekStartsOn}),dayLabelFormatter=(0,react.useCallback)((date=>new Intl.DateTimeFormat(locale,{weekday:"short"}).format(date)),[locale]),dayLabels=(0,eachDayOfInterval.k)({start:startDate,end:(0,addDays.f)(startDate,6)}).map((date=>{const formattedDayLabel=dayLabelFormatter(date);return(0,jsx_runtime.jsx)(StyledCalendarItem.Z,{isCompact,children:(0,jsx_runtime.jsx)(StyledDayLabel.i,{isCompact,children:formattedDayLabel})},`day-label-${formattedDayLabel}`)})),items=(0,eachDayOfInterval.k)({start:startDate,end:endDate}).map(((date,itemsIndex)=>{const formattedDayLabel=getDate(date),isCurrentDate=(0,isToday.c)(date),isPreviousMonth=!(0,isSameMonth.t)(date,state.previewDate),isSelected=value&&(0,isSameDay.r)(date,value);let isDisabled=!1;return void 0!==minValue&&(isDisabled=(0,isBefore.Y)(date,minValue)&&!(0,isSameDay.r)(date,minValue)),void 0!==maxValue&&(isDisabled=isDisabled||(0,isAfter.d)(date,maxValue)&&!(0,isSameDay.r)(date,maxValue)),(0,jsx_runtime.jsx)(StyledCalendarItem.Z,{isCompact,children:(0,jsx_runtime.jsx)(StyledDay.u,{isToday:isCurrentDate,isPreviousMonth,isSelected,isDisabled,isCompact,onClick:()=>{isDisabled||dispatch({type:"SELECT_DATE",value:date})},children:formattedDayLabel})},`day-${itemsIndex}`)}));return(0,jsx_runtime.jsxs)(StyledDatepicker.E,{ref,isCompact,onMouseDown:e=>{e.preventDefault()},children:[(0,jsx_runtime.jsx)(MonthSelector,{locale,isCompact}),(0,jsx_runtime.jsxs)(StyledCalendar.C,{isCompact,children:[dayLabels,items]})]})}));Calendar.displayName="Calendar";try{Calendar.displayName="Calendar",Calendar.__docgenInfo={description:"",displayName:"Calendar",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Date"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!1,type:{name:"Date"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"Date"}},isCompact:{defaultValue:null,description:"",name:"isCompact",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"string"}},weekStartsOn:{defaultValue:null,description:"",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"4"},{value:"3"},{value:"6"},{value:"2"},{value:"5"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/datepickers/src/elements/Datepicker/components/Calendar.tsx#Calendar"]={docgenInfo:Calendar.__docgenInfo,name:"Calendar",path:"packages/datepickers/src/elements/Datepicker/components/Calendar.tsx#Calendar"})}catch(__react_docgen_typescript_loader_error){}var addMonths=__webpack_require__("./node_modules/date-fns/addMonths.mjs"),subMonths=__webpack_require__("./node_modules/date-fns/subMonths.mjs"),isValid=__webpack_require__("./node_modules/date-fns/isValid.mjs"),parse=__webpack_require__("./node_modules/date-fns/parse.mjs");function formatInputValue(_ref2){let{date,locale,formatDate}=_ref2;return date?formatDate?formatDate(date):new Intl.DateTimeFormat(locale,{month:"long",day:"numeric",year:"numeric"}).format(date):""}const datepickerReducer=_ref3=>{let{value,formatDate,locale,customParseDate,onChange}=_ref3;return(state,action)=>{switch(action.type){case"OPEN":return{...state,isOpen:!0,previewDate:value||new Date};case"CLOSE":{const inputValue=formatInputValue({date:value,locale,formatDate});return{...state,isOpen:!1,inputValue}}case"PREVIEW_NEXT_MONTH":{const previewDate=(0,addMonths.P)(state.previewDate,1);return{...state,previewDate}}case"PREVIEW_PREVIOUS_MONTH":{const previewDate=(0,subMonths.a)(state.previewDate,1);return{...state,previewDate}}case"MANUALLY_UPDATE_INPUT":{const inputValue=action.value,currentDate=function parseInputValue(_ref){let{inputValue,customParseDate}=_ref;if(customParseDate)return customParseDate(inputValue);const MINIMUM_DATE=new Date(1001,0,0);let tryParseDate=(0,parse.qg)(inputValue,"P",new Date);return(0,isValid.f)(tryParseDate)&&!(0,isBefore.Y)(tryParseDate,MINIMUM_DATE)?tryParseDate:(tryParseDate=(0,parse.qg)(inputValue,"PP",new Date),(0,isValid.f)(tryParseDate)&&!(0,isBefore.Y)(tryParseDate,MINIMUM_DATE)?tryParseDate:(tryParseDate=(0,parse.qg)(inputValue,"PPP",new Date),(0,isValid.f)(tryParseDate)&&!(0,isBefore.Y)(tryParseDate,MINIMUM_DATE)?tryParseDate:new Date(NaN)))}({inputValue,customParseDate});return onChange&&currentDate&&(0,isValid.f)(currentDate)&&!(0,isSameDay.r)(value,currentDate)&&onChange(currentDate),{...state,isOpen:!0,inputValue}}case"CONTROLLED_VALUE_CHANGE":{const previewDate=action.value||new Date,inputValue=formatInputValue({date:action.value,locale,formatDate});return{...state,previewDate,inputValue}}case"CONTROLLED_LOCALE_CHANGE":{const inputValue=formatInputValue({date:value,locale,formatDate});return{...state,inputValue}}case"SELECT_DATE":{const inputValue=formatInputValue({date:action.value,locale,formatDate});return onChange&&action.value&&(0,isValid.f)(action.value)&&!(0,isSameDay.r)(value,action.value)&&onChange(action.value),{...state,isOpen:!1,inputValue}}default:throw new Error}}};var menuStyles=__webpack_require__("./packages/theming/src/utils/menuStyles.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledMenuWrapper=styled_components_browser_esm.Ay.div.attrs((props=>({className:props.isAnimated&&"is-animated"}))).withConfig({displayName:"StyledMenuWrapper",componentId:"sc-6fowoz-0"})(["",";",";"],(props=>(0,menuStyles.A)(function getMenuPosition(popperPlacement){return popperPlacement?popperPlacement.split("-")[0]:"bottom"}(props.placement),{theme:props.theme,hidden:props.isHidden,margin:`${props.theme.space.base}px`,zIndex:props.zIndex,animationModifier:props.isAnimated?".is-animated":void 0})),(props=>(0,retrieveComponentStyles.A)("datepickers.menu_wrapper",props)));StyledMenuWrapper.defaultProps={theme:theme.A};const StyledMenu=styled_components_browser_esm.Ay.div.attrs({"data-garden-id":"datepickers.menu","data-garden-version":"storybook"}).withConfig({displayName:"StyledMenu",componentId:"sc-1npbkk0-0"})(["",";"],(props=>(0,retrieveComponentStyles.A)("datepickers.menu",props)));StyledMenu.defaultProps={theme:theme.A};const Datepicker=(0,react.forwardRef)(((props,calendarRef)=>{const{children,placement,popperModifiers,eventsEnabled,zIndex,isAnimated,refKey,value,isCompact,onChange,formatDate,minValue,maxValue,locale,weekStartsOn,customParseDate,...menuProps}=props,theme=(0,react.useContext)(styled_components_browser_esm.Dx),memoizedReducer=(0,react.useCallback)(datepickerReducer({value,formatDate,locale,customParseDate,onChange}),[value,formatDate,locale,onChange,customParseDate]),[state,dispatch]=(0,react.useReducer)(memoizedReducer,function retrieveInitialState(initialProps){let previewDate=initialProps.value;void 0!==previewDate&&(0,isValid.f)(previewDate)||(previewDate=new Date);let inputValue="";return void 0!==initialProps.value&&(inputValue=initialProps.formatDate?initialProps.formatDate(initialProps.value):new Intl.DateTimeFormat(initialProps.locale,{month:"long",day:"numeric",year:"numeric"}).format(previewDate)),{isOpen:!1,previewDate,inputValue}}(props)),scheduleUpdateRef=(0,react.useRef)(void 0),inputRef=(0,react.useRef)(null),isInputMouseDownRef=(0,react.useRef)(!1);(0,react.useEffect)((()=>{state.isOpen&&scheduleUpdateRef.current&&scheduleUpdateRef.current()}));const[isVisible,setIsVisible]=(0,react.useState)(state.isOpen);(0,react.useEffect)((()=>{let timeout;return state.isOpen?setIsVisible(!0):isAnimated?timeout=setTimeout((()=>setIsVisible(!1)),200):setIsVisible(!1),()=>clearTimeout(timeout)}),[state.isOpen,isAnimated]),(0,react.useEffect)((()=>{dispatch({type:"CONTROLLED_VALUE_CHANGE",value})}),[value]),(0,react.useEffect)((()=>{dispatch({type:"CONTROLLED_LOCALE_CHANGE"})}),[locale]);const popperPlacement=theme.rtl?function getRtlPopperPlacement(gardenPlacement){const popperPlacement=getPopperPlacement(gardenPlacement);switch(popperPlacement){case"left":return"right";case"left-start":return"right-start";case"left-end":return"right-end";case"top-start":return"top-end";case"top-end":return"top-start";case"right":return"left";case"right-start":return"left-start";case"right-end":return"left-end";case"bottom-start":return"bottom-end";case"bottom-end":return"bottom-start";default:return popperPlacement}}(placement):getPopperPlacement(placement),contextValue=(0,react.useMemo)((()=>({state,dispatch})),[state,dispatch]);return(0,jsx_runtime.jsx)(DatepickerContext.Provider,{value:contextValue,children:(0,jsx_runtime.jsxs)(Manager,{children:[(0,jsx_runtime.jsx)(Reference,{children:_ref=>{let{ref}=_ref;const childElement=react.Children.only(children);return react.cloneElement(childElement,{[refKey]:refValue=>{ref(refValue),inputRef.current=refValue},onMouseDown:(0,index_esm.mK)(childElement.props.onMouseDown,(()=>{isInputMouseDownRef.current=!0})),onMouseUp:(0,index_esm.mK)(childElement.props.onMouseUp,(()=>{setTimeout((()=>{isInputMouseDownRef.current=!1}),0)})),onClick:(0,index_esm.mK)(childElement.props.onClick,(()=>{isInputMouseDownRef.current&&!state.isOpen&&dispatch({type:"OPEN"})})),onBlur:(0,index_esm.mK)(childElement.props.onBlur,(()=>{dispatch({type:"CLOSE"})})),onChange:(0,index_esm.mK)(childElement.props.onChange,(e=>{dispatch({type:"MANUALLY_UPDATE_INPUT",value:e.target.value})})),onKeyDown:(0,index_esm.mK)(childElement.props.onKeyDown,(e=>{switch(e.key){case index_esm.Rk.ESCAPE:case index_esm.Rk.ENTER:dispatch({type:"CLOSE"});break;case index_esm.Rk.UP:case index_esm.Rk.DOWN:case index_esm.Rk.SPACE:dispatch({type:"OPEN"})}})),autoComplete:"off",value:state.inputValue})}}),(0,jsx_runtime.jsx)(Popper,{placement:popperPlacement,modifiers:popperModifiers,eventsEnabled:state.isOpen&&eventsEnabled,children:_ref2=>{let{ref,style,scheduleUpdate,placement:currentPlacement}=_ref2;return scheduleUpdateRef.current=scheduleUpdate,(0,jsx_runtime.jsx)(StyledMenuWrapper,{ref,style,isHidden:!state.isOpen,isAnimated:isAnimated&&(state.isOpen||isVisible),placement:currentPlacement,zIndex,children:(state.isOpen||isVisible)&&(0,jsx_runtime.jsx)(StyledMenu,{...menuProps,children:(0,jsx_runtime.jsx)(Calendar,{ref:calendarRef,isCompact,value,minValue,maxValue,locale,weekStartsOn})})})}})]})})}));Datepicker.displayName="Datepicker",Datepicker.propTypes={value:prop_types_default().any,onChange:prop_types_default().any,formatDate:prop_types_default().func,locale:prop_types_default().any,weekStartsOn:prop_types_default().oneOf([0,1,2,3,4,5,6]),minValue:prop_types_default().any,maxValue:prop_types_default().any,isCompact:prop_types_default().bool,customParseDate:prop_types_default().any,refKey:prop_types_default().string,placement:prop_types_default().oneOf(PLACEMENT),popperModifiers:prop_types_default().any,isAnimated:prop_types_default().bool,eventsEnabled:prop_types_default().bool,zIndex:prop_types_default().number},Datepicker.defaultProps={placement:"bottom-start",refKey:"ref",isAnimated:!0,eventsEnabled:!0,zIndex:1e3,locale:"en-US"};try{Datepicker.displayName="Datepicker",Datepicker.__docgenInfo={description:"",displayName:"Datepicker",props:{value:{defaultValue:null,description:"Sets the selected date",name:"value",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"Handles date change\n@param date The selected date",name:"onChange",required:!1,type:{name:"((date: Date) => void)"}},formatDate:{defaultValue:null,description:"Customizes the input element's date formatting\n@param date The selected date\n@returns a formatted date string",name:"formatDate",required:!1,type:{name:"((date: Date) => string)"}},locale:{defaultValue:{value:"en-US"},description:"Applies locale-based formatting.\nAccepts all valid `Intl` [locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).",name:"locale",required:!1,type:{name:"string"}},weekStartsOn:{defaultValue:null,description:"Overrides the locale default start day of week",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"4"},{value:"3"},{value:"6"},{value:"2"},{value:"5"}]}},minValue:{defaultValue:null,description:"Disables dates before this value on the calendar",name:"minValue",required:!1,type:{name:"Date"}},maxValue:{defaultValue:null,description:"Disables dates after this value on the calendar",name:"maxValue",required:!1,type:{name:"Date"}},isCompact:{defaultValue:null,description:"Applies compact styling",name:"isCompact",required:!1,type:{name:"boolean"}},customParseDate:{defaultValue:null,description:"Overrides default date parsing\n@param inputValue A localized input value\n@returns the parsed date",name:"customParseDate",required:!1,type:{name:"((inputValue: string) => Date)"}},refKey:{defaultValue:{value:"ref"},description:"Defines the ref key used to position the calendar",name:"refKey",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"bottom-start"},description:"Adjusts the position of the calendar",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"start"'},{value:'"auto"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"end"'},{value:'"end-top"'},{value:'"end-bottom"'},{value:'"start-top"'},{value:'"start-bottom"'}]}},popperModifiers:{defaultValue:null,description:"Passes configuration options to the [Popper instance](https://popper.js.org/docs/v2/modifiers/)",name:"popperModifiers",required:!1,type:{name:"Modifiers"}},isAnimated:{defaultValue:{value:"true"},description:"Animates the calendar",name:"isAnimated",required:!1,type:{name:"boolean"}},eventsEnabled:{defaultValue:{value:"true"},description:"Allows the calendar to reposition during browser resize events",name:"eventsEnabled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"1000"},description:"Sets the `z-index` of the calendar",name:"zIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/datepickers/src/elements/Datepicker/Datepicker.tsx#Datepicker"]={docgenInfo:Datepicker.__docgenInfo,name:"Datepicker",path:"packages/datepickers/src/elements/Datepicker/Datepicker.tsx#Datepicker"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var Grid=__webpack_require__("./packages/grid/src/elements/Grid.tsx"),Row=__webpack_require__("./packages/grid/src/elements/Row.tsx"),Col=__webpack_require__("./packages/grid/src/elements/Col.tsx"),Field=__webpack_require__("./packages/forms/src/elements/common/Field.tsx"),Label=__webpack_require__("./packages/forms/src/elements/common/Label.tsx"),Input=__webpack_require__("./packages/forms/src/elements/Input.tsx");const DatepickerStory=_ref=>{let{dateStyle,isCompact,...args}=_ref;return(0,jsx_runtime.jsx)(Grid.x,{children:(0,jsx_runtime.jsx)(Row.f,{style:{height:"calc(100vh - 80px)"},children:(0,jsx_runtime.jsx)(Col.f,{textAlign:"center",alignSelf:"center",children:(0,jsx_runtime.jsxs)(Field.D,{children:[(0,jsx_runtime.jsx)(Label.J,{hidden:!0,children:Datepicker.displayName}),(0,jsx_runtime.jsx)(Datepicker,{...args,formatDate:date=>new Intl.DateTimeFormat(args.locale,{dateStyle}).format(date),isCompact,children:(0,jsx_runtime.jsx)(Input.p,{isCompact,style:{width:isCompact?256:320}})})]})})})})};DatepickerStory.displayName="DatepickerStory";var data=__webpack_require__("./packages/datepickers/demo/stories/data.ts"),README=__webpack_require__("./packages/datepickers/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Packages/Datepickers/Datepicker",component:Datepicker}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.uY,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Datepicker",args:{dateStyle:data.q[1],eventsEnabled:!0,isAnimated:!0},argTypes:{value:{control:"date"},minValue:{control:"date"},maxValue:{control:"date"},dateStyle:{control:"radio",options:data.q,table:{category:"Story"}}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=134%3A32"}},children:args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(DatepickerStory,{...args,onChange:value=>updateArgs({value})})}})}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:README})]})}const datepicker=args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(DatepickerStory,{...args,onChange:value=>updateArgs({value})})};datepicker.storyName="Datepicker",datepicker.argTypes={value:{control:"date"},minValue:{control:"date"},maxValue:{control:"date"},dateStyle:{control:"radio",options:data.q,table:{category:"Story"}}},datepicker.args={dateStyle:data.q[1],eventsEnabled:!0,isAnimated:!0},datepicker.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleChange = value => updateArgs({\n    value\n  });\n  return <DatepickerStory {...args} onChange={handleChange} />;\n}"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=134%3A32"}};const componentMeta={title:"Packages/Datepickers/Datepicker",component:Datepicker,tags:["stories-mdx"],includeStories:["datepicker"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const datepicker_stories=componentMeta,__namedExportsOrder=["datepicker"]},"./packages/theming/src/utils/menuStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>menuStyles});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_getColorV8__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/getColorV8.ts"),_elements_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const animationStyles=(position,options)=>{let transformFunction,translateValue=5*(options.theme||_elements_theme__WEBPACK_IMPORTED_MODULE_0__.A).space.base+"px";"top"===position?transformFunction="translateY":"right"===position?(transformFunction="translateX",translateValue=`-${translateValue}`):"bottom"===position?(transformFunction="translateY",translateValue=`-${translateValue}`):transformFunction="translateX";const animationName=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.i7)(["0%{transform:","(",");}"],transformFunction,translateValue);return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(["&"," ","{animation:0.2s cubic-bezier(0.15,0.85,0.35,1.2) ",";}"],options.animationModifier,options.childSelector||"> *",animationName)},hiddenStyles=options=>(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(["transition:",";visibility:hidden;opacity:0;"],options.animationModifier&&"opacity 0.2s ease-in-out, 0.2s visibility 0s linear");function menuStyles(position){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const theme=options.theme||_elements_theme__WEBPACK_IMPORTED_MODULE_0__.A;let marginProperty;return marginProperty="top"===position?"margin-bottom":"right"===position?"margin-left":"bottom"===position?"margin-top":"margin-right",(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(["position:absolute;z-index:",";",":",";line-height:0;font-size:0.01px;& ","{display:inline-block;position:relative;margin:0;box-sizing:border-box;border:"," ",";border-radius:",";box-shadow:",";background-color:",";cursor:default;padding:0;text-align:",";white-space:normal;font-size:",";font-weight:",";direction:",";:focus{outline:none;}}",";",";"],options.zIndex||0,marginProperty,options.margin,options.childSelector||"> *",theme.borders.sm,(0,_getColorV8__WEBPACK_IMPORTED_MODULE_2__.A)("neutralHue",300,theme),theme.borderRadii.md,theme.shadows.lg(5*theme.space.base+"px",7.5*theme.space.base+"px",(0,_getColorV8__WEBPACK_IMPORTED_MODULE_2__.A)("chromeHue",600,theme,.15)),(0,_getColorV8__WEBPACK_IMPORTED_MODULE_2__.A)("background",600,theme),theme.rtl?"right":"left",theme.fontSizes.md,theme.fontWeights.regular,theme.rtl&&"rtl",options.animationModifier&&animationStyles(position,options),options.hidden&&hiddenStyles(options))}},"./packages/datepickers/node_modules/deep-equal/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectKeys=__webpack_require__("./node_modules/object-keys/index.js"),isArguments=__webpack_require__("./node_modules/is-arguments/index.js"),is=__webpack_require__("./node_modules/object-is/index.js"),isRegex=__webpack_require__("./node_modules/is-regex/index.js"),flags=__webpack_require__("./node_modules/regexp.prototype.flags/index.js"),isDate=__webpack_require__("./node_modules/is-date-object/index.js"),getTime=Date.prototype.getTime;function deepEqual(actual,expected,options){var opts=options||{};return!!(opts.strict?is(actual,expected):actual===expected)||(!actual||!expected||"object"!=typeof actual&&"object"!=typeof expected?opts.strict?is(actual,expected):actual==expected:function objEquiv(a,b,opts){var i,key;if(typeof a!=typeof b)return!1;if(isUndefinedOrNull(a)||isUndefinedOrNull(b))return!1;if(a.prototype!==b.prototype)return!1;if(isArguments(a)!==isArguments(b))return!1;var aIsRegex=isRegex(a),bIsRegex=isRegex(b);if(aIsRegex!==bIsRegex)return!1;if(aIsRegex||bIsRegex)return a.source===b.source&&flags(a)===flags(b);if(isDate(a)&&isDate(b))return getTime.call(a)===getTime.call(b);var aIsBuffer=isBuffer(a),bIsBuffer=isBuffer(b);if(aIsBuffer!==bIsBuffer)return!1;if(aIsBuffer||bIsBuffer){if(a.length!==b.length)return!1;for(i=0;i<a.length;i++)if(a[i]!==b[i])return!1;return!0}if(typeof a!=typeof b)return!1;try{var ka=objectKeys(a),kb=objectKeys(b)}catch(e){return!1}if(ka.length!==kb.length)return!1;for(ka.sort(),kb.sort(),i=ka.length-1;i>=0;i--)if(ka[i]!=kb[i])return!1;for(i=ka.length-1;i>=0;i--)if(!deepEqual(a[key=ka[i]],b[key],opts))return!1;return!0}(actual,expected,opts))}function isUndefinedOrNull(value){return null==value}function isBuffer(x){return!(!x||"object"!=typeof x||"number"!=typeof x.length)&&("function"==typeof x.copy&&"function"==typeof x.slice&&!(x.length>0&&"number"!=typeof x[0]))}module.exports=deepEqual}}]);