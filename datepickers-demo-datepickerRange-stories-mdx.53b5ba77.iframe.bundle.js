"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[6126],{"./packages/datepickers/demo/datepickerRange.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{datepickerRange:()=>datepickerRange,default:()=>datepickerRange_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),prop_types=__webpack_require__("./packages/datepickers/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),addMonths=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/addMonths/index.js"),subMonths=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/subMonths/index.js"),isBefore=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/isBefore/index.js"),isValid=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/isValid/index.js"),isSameDay=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/isSameDay/index.js"),endOfMonth=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/endOfMonth/index.js"),parse=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/parse/index.js"),startOfMonth=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/startOfMonth/index.js"),toDate=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/toDate/index.js"),requiredArgs=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/_lib/requiredArgs/index.js");function compareAsc(dirtyDateLeft,dirtyDateRight){(0,requiredArgs.Z)(2,arguments);var dateLeft=(0,toDate.Z)(dirtyDateLeft),dateRight=(0,toDate.Z)(dirtyDateRight),diff=dateLeft.getTime()-dateRight.getTime();return diff<0?-1:diff>0?1:diff}var isAfter=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/isAfter/index.js");function formatValue(_ref){let{value,locale,formatDate}=_ref,stringValue="";return void 0!==value&&(0,isValid.Z)(value)&&(stringValue=formatDate?formatDate(value):new Intl.DateTimeFormat(locale,{month:"long",day:"numeric",year:"numeric"}).format(value)),stringValue}function parseInputValue(_ref2){let{inputValue}=_ref2;const MINIMUM_DATE=new Date(1001,0,0);let tryParseDate=(0,parse.Z)(inputValue||"","P",new Date);return(0,isValid.Z)(tryParseDate)&&!(0,isBefore.Z)(tryParseDate,MINIMUM_DATE)?tryParseDate:(tryParseDate=(0,parse.Z)(inputValue||"","PP",new Date),(0,isValid.Z)(tryParseDate)&&!(0,isBefore.Z)(tryParseDate,MINIMUM_DATE)?tryParseDate:(tryParseDate=(0,parse.Z)(inputValue||"","PPP",new Date),(0,isValid.Z)(tryParseDate)&&!(0,isBefore.Z)(tryParseDate,MINIMUM_DATE)?tryParseDate:new Date(NaN)))}const DatepickerRangeContext=(0,react.createContext)(void 0),useDatepickerRangeContext=()=>(0,react.useContext)(DatepickerRangeContext);var index_esm=__webpack_require__("./packages/datepickers/node_modules/@zendeskgarden/container-utilities/dist/index.esm.js");const Start=props=>{const{state,dispatch,onChange,startValue,endValue,startInputRef,customParseDate}=useDatepickerRangeContext(),onChangeCallback=(0,react.useCallback)((e=>{dispatch({type:"START_INPUT_ONCHANGE",value:e.target.value}),props.children.props.onChange&&props.children.props.onChange(e)}),[dispatch,props.children]),onFocusCallback=(0,react.useCallback)((e=>{dispatch({type:"START_FOCUS"}),props.children.props.onFocus&&props.children.props.onFocus(e)}),[dispatch,props.children]),handleBlur=(0,react.useCallback)((()=>{let parsedDate;parsedDate=customParseDate?customParseDate(state.startInputValue):parseInputValue({inputValue:state.startInputValue}),dispatch({type:"START_BLUR"}),parsedDate&&(0,isValid.Z)(parsedDate)&&!(0,isSameDay.Z)(parsedDate,startValue)&&onChange&&onChange({startValue:parsedDate,endValue})}),[dispatch,onChange,startValue,endValue,customParseDate,state.startInputValue]),onKeyDownCallback=(0,react.useCallback)((e=>{e.keyCode===index_esm.nx.ENTER&&(e.preventDefault(),handleBlur()),props.children.props.onKeyDown&&props.children.props.onKeyDown(e)}),[handleBlur,props.children]),onBlurCallback=(0,react.useCallback)((e=>{handleBlur(),props.children.props.onBlur&&props.children.props.onBlur(e)}),[handleBlur,props.children]),childElement=react.Children.only(props.children);return react.cloneElement(childElement,{value:state.startInputValue||"",ref:startInputRef,onChange:(0,index_esm.Mj)(childElement.props.onChange,onChangeCallback),onFocus:(0,index_esm.Mj)(childElement.props.onFocus,onFocusCallback),onKeyDown:(0,index_esm.Mj)(childElement.props.onKeyDown,onKeyDownCallback),onBlur:(0,index_esm.Mj)(childElement.props.onBlur,onBlurCallback)})};Start.displayName="DatepickerRange.Start";try{Start.displayName="DatepickerRange.Start",Start.__docgenInfo={description:"",displayName:"DatepickerRange.Start",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/datepickers/src/elements/DatepickerRange/components/Start.tsx#DatepickerRange.Start"]={docgenInfo:DatepickerRange.Start.__docgenInfo,name:"DatepickerRange.Start",path:"packages/datepickers/src/elements/DatepickerRange/components/Start.tsx#DatepickerRange.Start"})}catch(__react_docgen_typescript_loader_error){}const End=props=>{const{state,dispatch,onChange,startValue,endValue,endInputRef,customParseDate}=useDatepickerRangeContext(),onChangeCallback=(0,react.useCallback)((e=>{dispatch({type:"END_INPUT_ONCHANGE",value:e.target.value}),props.children.props.onChange&&props.children.props.onChange(e)}),[dispatch,props.children]),onFocusCallback=(0,react.useCallback)((e=>{dispatch({type:"END_FOCUS"}),props.children.props.onFocus&&props.children.props.onFocus(e)}),[dispatch,props.children]),handleBlur=(0,react.useCallback)((()=>{let parsedDate;dispatch({type:"END_BLUR"}),parsedDate=customParseDate?customParseDate(state.endInputValue):parseInputValue({inputValue:state.endInputValue}),onChange&&parsedDate&&(0,isValid.Z)(parsedDate)&&!(0,isSameDay.Z)(parsedDate,endValue)&&onChange&&onChange({startValue,endValue:parsedDate})}),[dispatch,onChange,startValue,endValue,customParseDate,state.endInputValue]),onKeydownCallback=(0,react.useCallback)((e=>{e.keyCode===index_esm.nx.ENTER&&(handleBlur(),e.preventDefault()),props.children.props.onKeyDown&&props.children.props.onKeyDown(e)}),[handleBlur,props.children]),onBlurCallback=(0,react.useCallback)((e=>{handleBlur(),props.children.props.onBlur&&props.children.props.onBlur(e)}),[handleBlur,props.children]),childElement=react.Children.only(props.children);return react.cloneElement(childElement,{value:state.endInputValue||"",ref:endInputRef,onChange:(0,index_esm.Mj)(childElement.props.onChange,onChangeCallback),onFocus:(0,index_esm.Mj)(childElement.props.onFocus,onFocusCallback),onKeyDown:(0,index_esm.Mj)(childElement.props.onKeyDown,onKeydownCallback),onBlur:(0,index_esm.Mj)(childElement.props.onBlur,onBlurCallback)})};End.displayName="DatepickerRange.End";try{End.displayName="DatepickerRange.End",End.__docgenInfo={description:"",displayName:"DatepickerRange.End",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/datepickers/src/elements/DatepickerRange/components/End.tsx#DatepickerRange.End"]={docgenInfo:DatepickerRange.End.__docgenInfo,name:"DatepickerRange.End",path:"packages/datepickers/src/elements/DatepickerRange/components/End.tsx#DatepickerRange.End"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),StyledDatepicker=__webpack_require__("./packages/datepickers/src/styled/StyledDatepicker.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledRangeCalendar=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"datepickers.range_calendar"}).withConfig({displayName:"StyledRangeCalendar",componentId:"sc-1og46sy-0"})(["display:flex;overflow:auto;","{margin:0;","}",";"],StyledDatepicker.d,(props=>props.theme.rtl?`&:last-of-type {margin-right: ${5*props.theme.space.base}px}`:`&:first-of-type {margin-right: ${5*props.theme.space.base}px}`),(props=>(0,retrieveComponentStyles.Z)("datepickers.range_calendar",props)));StyledRangeCalendar.defaultProps={theme:theme.Z};var startOfWeek=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/startOfWeek/index.js"),endOfWeek=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/endOfWeek/index.js"),eachDayOfInterval=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/eachDayOfInterval/index.js"),addDays=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/addDays/index.js"),isToday=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/isToday/index.js"),isSameMonth=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/isSameMonth/index.js"),toInteger=__webpack_require__("./packages/datepickers/node_modules/date-fns/esm/_lib/toInteger/index.js");function subDays(dirtyDate,dirtyAmount){(0,requiredArgs.Z)(2,arguments);var amount=(0,toInteger.Z)(dirtyAmount);return(0,addDays.Z)(dirtyDate,-amount)}var chevron_left_stroke=__webpack_require__("./packages/datepickers/node_modules/@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg"),chevron_right_stroke=__webpack_require__("./packages/datepickers/node_modules/@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg"),StyledCalendarItem=__webpack_require__("./packages/datepickers/src/styled/StyledCalendarItem.ts"),StyledDayLabel=__webpack_require__("./packages/datepickers/src/styled/StyledDayLabel.ts"),StyledDay=__webpack_require__("./packages/datepickers/src/styled/StyledDay.ts"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts");const StyledHighlight=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"datepickers.highlight"}).withConfig({displayName:"StyledHighlight",componentId:"sc-16vr32x-0"})(["position:absolute;top:0;left:0;width:100%;height:100%;"," "," ",";"],(_ref=>{let{theme,isEnd,isStart}=_ref;const endValue="border-radius: 50% 0 0 50%;";if(theme.rtl){if(isStart)return"border-radius: 0 50% 50% 0;";if(isEnd)return endValue}return isStart?endValue:isEnd?"border-radius: 0 50% 50% 0;":""}),(_ref2=>{let{isHighlighted,theme}=_ref2;return isHighlighted?(0,styled_components_browser_esm.iv)(["background-color:",";"],(0,getColor.L)("primaryHue",600,theme,.08)):(0,styled_components_browser_esm.iv)([""])}),(props=>(0,retrieveComponentStyles.Z)("datepickers.highlight",props)));StyledHighlight.defaultProps={theme:theme.Z};var StyledHeader=__webpack_require__("./packages/datepickers/src/styled/StyledHeader.ts"),StyledHeaderPaddle=__webpack_require__("./packages/datepickers/src/styled/StyledHeaderPaddle.ts"),StyledHeaderLabel=__webpack_require__("./packages/datepickers/src/styled/StyledHeaderLabel.ts"),StyledCalendar=__webpack_require__("./packages/datepickers/src/styled/StyledCalendar.ts"),calendar_utils=__webpack_require__("./packages/datepickers/src/utils/calendar-utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Month=(0,react.forwardRef)(((_ref,ref)=>{let{displayDate,isPreviousHidden,isNextHidden}=_ref;const{state,dispatch,locale,weekStartsOn,isCompact,minValue,maxValue,startValue,endValue,onChange}=useDatepickerRangeContext(),headerLabelFormatter=(0,react.useCallback)((date=>new Intl.DateTimeFormat(locale,{month:"long",year:"numeric"}).format(date)),[locale]),dayLabelFormatter=(0,react.useCallback)((date=>new Intl.DateTimeFormat(locale,{weekday:"short"}).format(date)),[locale]),dayFormatter=(0,react.useCallback)((date=>new Intl.DateTimeFormat(locale,{day:"numeric"}).format(date)),[locale]),preferredWeekStartsOn=weekStartsOn||(0,calendar_utils.I)(locale),monthStartDate=(0,startOfMonth.Z)(displayDate),monthEndDate=(0,endOfMonth.Z)(monthStartDate),startDate=(0,startOfWeek.Z)(monthStartDate,{weekStartsOn:preferredWeekStartsOn}),endDate=(0,endOfWeek.Z)(monthEndDate,{weekStartsOn:preferredWeekStartsOn}),dayLabels=(0,eachDayOfInterval.Z)({start:startDate,end:(0,addDays.Z)(startDate,6)}).map((date=>{const formattedDayLabel=dayLabelFormatter(date);return(0,jsx_runtime.jsx)(StyledCalendarItem.Y,{isCompact,children:(0,jsx_runtime.jsx)(StyledDayLabel.e,{isCompact,children:formattedDayLabel})},`day-label-${formattedDayLabel}`)})),items=(0,eachDayOfInterval.Z)({start:startDate,end:endDate}).map(((date,itemsIndex)=>{const formattedDayLabel=dayFormatter(date),isCurrentDate=(0,isToday.Z)(date),isPreviousMonth=!(0,isSameMonth.Z)(date,displayDate);if(isPreviousMonth)return(0,jsx_runtime.jsx)(StyledCalendarItem.Y,{isCompact,children:(0,jsx_runtime.jsx)(StyledDay.K,{isCompact,isPreviousMonth:!0,isDisabled:!0,children:" "})},`day-${itemsIndex}`);let isSelected=!1;void 0!==startValue&&(isSelected=(0,isSameDay.Z)(date,startValue)),void 0!==endValue&&(isSelected=isSelected||(0,isSameDay.Z)(date,endValue));let isDisabled=!1;void 0!==minValue&&(isDisabled=(0,isBefore.Z)(date,minValue)&&!(0,isSameDay.Z)(date,minValue)),void 0!==maxValue&&(isDisabled=isDisabled||(0,isAfter.Z)(date,maxValue)&&!(0,isSameDay.Z)(date,maxValue));let isHighlighted=!1;void 0!==startValue&&void 0!==endValue?isHighlighted=((0,isAfter.Z)(date,startValue)||(0,isSameDay.Z)(date,startValue))&&((0,isBefore.Z)(date,endValue)||(0,isSameDay.Z)(date,endValue))&&!(0,isSameDay.Z)(startValue,endValue):void 0!==startValue&&void 0!==state.hoverDate&&(isHighlighted=((0,isAfter.Z)(date,startValue)||(0,isSameDay.Z)(date,startValue))&&((0,isBefore.Z)(date,state.hoverDate)||(0,isSameDay.Z)(date,state.hoverDate)));const isHighlightStart=isHighlighted&&startValue&&(0,isSameDay.Z)(date,startValue)||!1,isHighlightEnd=isHighlighted&&endValue&&(0,isSameDay.Z)(date,endValue)||state.hoverDate&&(0,isSameDay.Z)(date,state.hoverDate)&&!(0,isBefore.Z)(date,endValue)||!1;let isInvalidDateRange=endValue&&startValue&&-1===compareAsc(endValue,startValue)||!1;return minValue&&(startValue&&(isInvalidDateRange=isInvalidDateRange||-1===compareAsc(startValue,subDays(minValue,1))),endValue&&(isInvalidDateRange=isInvalidDateRange||-1===compareAsc(endValue,subDays(minValue,1)))),maxValue&&(startValue&&(isInvalidDateRange=isInvalidDateRange||1===compareAsc(startValue,maxValue)),endValue&&(isInvalidDateRange=isInvalidDateRange||1===compareAsc(endValue,maxValue))),(0,jsx_runtime.jsxs)(StyledCalendarItem.Y,{isCompact,children:[(0,jsx_runtime.jsx)(StyledHighlight,{isHighlighted:!isInvalidDateRange&&isHighlighted&&!isDisabled,isStart:!isInvalidDateRange&&isHighlightStart,isEnd:!isInvalidDateRange&&isHighlightEnd}),(0,jsx_runtime.jsx)(StyledDay.K,{isToday:isCurrentDate,isPreviousMonth,isSelected:!isInvalidDateRange&&isSelected,isDisabled,isCompact,onClick:()=>{isDisabled||(dispatch({type:"CLICK_DATE",value:date}),onChange&&(state.isStartFocused?void 0!==endValue&&((0,isBefore.Z)(date,endValue)||(0,isSameDay.Z)(date,endValue))?onChange({startValue:date,endValue}):onChange({startValue:date,endValue:void 0}):state.isEndFocused?void 0!==startValue&&((0,isAfter.Z)(date,startValue)||(0,isSameDay.Z)(date,startValue))?onChange({startValue,endValue:date}):onChange({startValue:date,endValue:void 0}):void 0===startValue?onChange({startValue:date,endValue:void 0}):void 0===endValue?(0,isBefore.Z)(date,startValue)?onChange({startValue:date,endValue:void 0}):onChange({startValue,endValue:date}):onChange({startValue:date,endValue:void 0})))},onMouseEnter:()=>{isSelected||dispatch({type:"HOVER_DATE",value:date})},children:formattedDayLabel})]},`day-${itemsIndex}`)}));return(0,jsx_runtime.jsxs)(StyledDatepicker.d,{ref,isCompact,onMouseDown:e=>{e.preventDefault()},children:[(0,jsx_runtime.jsxs)(StyledHeader.e,{isCompact,children:[(0,jsx_runtime.jsx)(StyledHeaderPaddle.K,{isCompact,onClick:()=>{dispatch({type:"PREVIEW_PREVIOUS_MONTH"})},isHidden:isPreviousHidden,children:(0,jsx_runtime.jsx)(chevron_left_stroke.Z,{})}),(0,jsx_runtime.jsx)(StyledHeaderLabel.L,{isCompact,children:headerLabelFormatter(displayDate)}),(0,jsx_runtime.jsx)(StyledHeaderPaddle.K,{isCompact,isHidden:isNextHidden,onClick:()=>{dispatch({type:"PREVIEW_NEXT_MONTH"})},children:(0,jsx_runtime.jsx)(chevron_right_stroke.Z,{})})]}),(0,jsx_runtime.jsxs)(StyledCalendar.S,{isCompact,onMouseLeave:()=>{dispatch({type:"HOVER_DATE",value:void 0})},children:[dayLabels,items]})]})}));Month.displayName="Month";try{Month.displayName="Month",Month.__docgenInfo={description:"",displayName:"Month",props:{displayDate:{defaultValue:null,description:"",name:"displayDate",required:!0,type:{name:"Date"}},isPreviousHidden:{defaultValue:null,description:"",name:"isPreviousHidden",required:!1,type:{name:"boolean"}},isNextHidden:{defaultValue:null,description:"",name:"isNextHidden",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/datepickers/src/elements/DatepickerRange/components/Month.tsx#Month"]={docgenInfo:Month.__docgenInfo,name:"Month",path:"packages/datepickers/src/elements/DatepickerRange/components/Month.tsx#Month"})}catch(__react_docgen_typescript_loader_error){}const Calendar=(0,react.forwardRef)(((props,ref)=>{const{state}=useDatepickerRangeContext();return(0,jsx_runtime.jsxs)(StyledRangeCalendar,{ref,"data-garden-id":"datepickers.range","data-garden-version":"storybook",...props,children:[(0,jsx_runtime.jsx)(Month,{displayDate:state.previewDate,isNextHidden:!0}),(0,jsx_runtime.jsx)(Month,{displayDate:(0,addMonths.Z)(state.previewDate,1),isPreviousHidden:!0})]})}));Calendar.displayName="DatepickerRange.Calendar";try{Calendar.displayName="DatepickerRange.Calendar",Calendar.__docgenInfo={description:"",displayName:"DatepickerRange.Calendar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/datepickers/src/elements/DatepickerRange/components/Calendar.tsx#DatepickerRange.Calendar"]={docgenInfo:DatepickerRange.Calendar.__docgenInfo,name:"DatepickerRange.Calendar",path:"packages/datepickers/src/elements/DatepickerRange/components/Calendar.tsx#DatepickerRange.Calendar"})}catch(__react_docgen_typescript_loader_error){}const DatepickerRangeComponent=props=>{const{startValue,locale,weekStartsOn,formatDate,endValue,onChange,customParseDate,isCompact,minValue,maxValue,children}=props,reducer=(0,react.useCallback)((_ref3=>{let{startValue,endValue,locale,formatDate,customParseDate}=_ref3;return(state,action)=>{switch(action.type){case"START_FOCUS":{let previewDate=state.previewDate;return startValue&&(previewDate=1===compareAsc(startValue,(0,startOfMonth.Z)(state.previewDate))&&-1===compareAsc(startValue,(0,addMonths.Z)((0,endOfMonth.Z)(state.previewDate),1))?state.previewDate:(0,startOfMonth.Z)(startValue)),{...state,previewDate,isStartFocused:!0,isEndFocused:!1}}case"END_FOCUS":{let previewDate=state.previewDate;return endValue&&(previewDate=1===compareAsc(endValue,(0,startOfMonth.Z)(state.previewDate))&&-1===compareAsc(endValue,(0,addMonths.Z)((0,endOfMonth.Z)(state.previewDate),1))?state.previewDate:(0,startOfMonth.Z)(endValue)),{...state,previewDate,isEndFocused:!0,isStartFocused:!1}}case"START_BLUR":{let parsedDate;parsedDate=customParseDate?customParseDate(state.startInputValue):parseInputValue({inputValue:state.startInputValue});const startInputValue=formatValue({value:parsedDate,locale,formatDate});return{...state,startInputValue:startInputValue||formatValue({value:startValue,locale,formatDate}),isStartFocused:!1}}case"END_BLUR":{let parsedDate;parsedDate=customParseDate?customParseDate(state.endInputValue):parseInputValue({inputValue:state.endInputValue});const endInputValue=formatValue({value:parsedDate,locale,formatDate})||formatValue({value:endValue,locale,formatDate});return{...state,endInputValue,isEndFocused:!1}}case"CONTROLLED_START_VALUE_CHANGE":{const startInputValue=formatValue({value:action.value,locale,formatDate});let previewDate=state.previewDate;return action.value&&(previewDate=1===compareAsc(action.value,(0,startOfMonth.Z)(state.previewDate))&&-1===compareAsc(action.value,(0,addMonths.Z)((0,endOfMonth.Z)(state.previewDate),1))?state.previewDate:(0,startOfMonth.Z)(action.value)),{...state,startInputValue,hoverDate:void 0,previewDate}}case"CONTROLLED_END_VALUE_CHANGE":{const endInputValue=formatValue({value:action.value,locale,formatDate});let previewDate=state.previewDate;return action.value&&(previewDate=1===compareAsc(action.value,(0,startOfMonth.Z)(state.previewDate))&&-1===compareAsc(action.value,(0,addMonths.Z)((0,endOfMonth.Z)(state.previewDate),1))?state.previewDate:(0,startOfMonth.Z)(action.value)),{...state,endInputValue,hoverDate:void 0,previewDate}}case"CLICK_DATE":return state.isStartFocused?void 0!==endValue&&((0,isBefore.Z)(action.value,endValue)||(0,isSameDay.Z)(action.value,endValue))?{...state,startInputValue:formatValue({value:action.value})}:{...state,startInputValue:formatValue({value:action.value}),endInputValue:void 0}:state.isEndFocused?void 0!==startValue&&((0,isAfter.Z)(action.value,startValue)||(0,isSameDay.Z)(action.value,startValue))?{...state,endInputValue:formatValue({value:action.value})}:{...state,startInputValue:formatValue({value:action.value})}:void 0===startValue?{...state,startInputValue:formatValue({value:action.value}),endInputValue:void 0}:void 0===endValue?(0,isBefore.Z)(action.value,startValue)?{...state,startInputValue:formatValue({value:action.value}),endInputValue:void 0}:{...state,endInputValue:formatValue({value:action.value})}:state;case"START_INPUT_ONCHANGE":return{...state,startInputValue:action.value};case"END_INPUT_ONCHANGE":return{...state,endInputValue:action.value};case"HOVER_DATE":return{...state,hoverDate:action.value};case"PREVIEW_NEXT_MONTH":{const previewDate=(0,addMonths.Z)(state.previewDate,1);return{...state,previewDate,hoverDate:void 0}}case"PREVIEW_PREVIOUS_MONTH":{const previewDate=(0,subMonths.Z)(state.previewDate,1);return{...state,previewDate,hoverDate:void 0}}default:throw new Error}}})({startValue,locale,formatDate,endValue,customParseDate}),[startValue,endValue,locale,formatDate,onChange,customParseDate]),[state,dispatch]=(0,react.useReducer)(reducer,function retrieveInitialState(initialProps){let previewDate=initialProps.startValue;return void 0!==previewDate&&(0,isValid.Z)(previewDate)||(previewDate=new Date),{previewDate,startInputValue:formatValue({value:initialProps.startValue,locale:initialProps.locale,formatDate:initialProps.formatDate}),endInputValue:formatValue({value:initialProps.endValue,locale:initialProps.locale,formatDate:initialProps.formatDate}),isStartFocused:!1,isEndFocused:!1}}(props)),previousStartValue=(0,react.useRef)(startValue),previousEndValue=(0,react.useRef)(endValue),startInputRef=(0,react.useRef)(),endInputRef=(0,react.useRef)();(0,react.useEffect)((()=>{dispatch({type:"CONTROLLED_START_VALUE_CHANGE",value:startValue}),endInputRef.current&&previousStartValue.current!==startValue&&void 0!==startValue&&endInputRef.current.focus(),previousStartValue.current=startValue}),[props,startValue]),(0,react.useEffect)((()=>{dispatch({type:"CONTROLLED_END_VALUE_CHANGE",value:endValue}),startInputRef.current&&previousEndValue.current!==endValue&&void 0!==endValue&&startInputRef.current.focus(),previousEndValue.current=endValue}),[props,endValue]);const value=(0,react.useMemo)((()=>({state,dispatch,isCompact,locale,weekStartsOn,minValue,maxValue,startValue,endValue,onChange,startInputRef,endInputRef,customParseDate})),[state,dispatch,isCompact,locale,weekStartsOn,minValue,maxValue,startValue,endValue,onChange,startInputRef,endInputRef,customParseDate]);return(0,jsx_runtime.jsx)(DatepickerRangeContext.Provider,{value,children})};DatepickerRangeComponent.displayName="DatepickerRangeComponent",DatepickerRangeComponent.propTypes={locale:prop_types_default().string,weekStartsOn:prop_types_default().number,startValue:prop_types_default().instanceOf(Date),endValue:prop_types_default().instanceOf(Date),minValue:prop_types_default().instanceOf(Date),maxValue:prop_types_default().instanceOf(Date),onChange:prop_types_default().func,formatDate:prop_types_default().func,customParseDate:prop_types_default().func,isCompact:prop_types_default().bool},DatepickerRangeComponent.defaultProps={locale:"en-US",isCompact:!1};const DatepickerRange_DatepickerRange=DatepickerRangeComponent;DatepickerRange_DatepickerRange.Calendar=Calendar,DatepickerRange_DatepickerRange.End=End,DatepickerRange_DatepickerRange.Start=Start;try{DatepickerRange_DatepickerRange.displayName="DatepickerRange",DatepickerRange_DatepickerRange.__docgenInfo={description:"",displayName:"DatepickerRange",props:{startValue:{defaultValue:null,description:"Sets the start date",name:"startValue",required:!1,type:{name:"Date"}},endValue:{defaultValue:null,description:"Sets the end date",name:"endValue",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"Handles start and end date changes\n@param values The selected dates",name:"onChange",required:!1,type:{name:"((values: { startValue?: Date; endValue?: Date; }) => void) | undefined"}},customParseDate:{defaultValue:null,description:"Overrides the default date parsing\n@param inputValue A date string\n@returns the parsed date",name:"customParseDate",required:!1,type:{name:"((inputValue?: string) => Date)"}},isCompact:{defaultValue:{value:"false"},description:"Applies compact styling",name:"isCompact",required:!1,type:{name:"boolean"}},minValue:{defaultValue:null,description:"Disables dates before this value on the calendar",name:"minValue",required:!1,type:{name:"Date"}},maxValue:{defaultValue:null,description:"Disables dates after this value on the calendar",name:"maxValue",required:!1,type:{name:"Date"}},locale:{defaultValue:{value:"en-US"},description:"Applies locale-based formatting.\nAccepts all valid `Intl` [locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).",name:"locale",required:!1,type:{name:"string"}},weekStartsOn:{defaultValue:null,description:"Overrides the locale default start day of week",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"4"},{value:"2"},{value:"3"},{value:"6"},{value:"5"},{value:"1"}]}},formatDate:{defaultValue:null,description:"Customizes the input element's date formatting\n@param date The selected date\n@returns a formatted date string",name:"formatDate",required:!1,type:{name:"((date: Date) => string)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/datepickers/src/elements/DatepickerRange/DatepickerRange.tsx#DatepickerRange"]={docgenInfo:DatepickerRange_DatepickerRange.__docgenInfo,name:"DatepickerRange",path:"packages/datepickers/src/elements/DatepickerRange/DatepickerRange.tsx#DatepickerRange"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var Grid=__webpack_require__("./packages/grid/src/elements/Grid.tsx"),Row=__webpack_require__("./packages/grid/src/elements/Row.tsx"),Col=__webpack_require__("./packages/grid/src/elements/Col.tsx"),Field=__webpack_require__("./packages/forms/src/elements/common/Field.tsx"),Label=__webpack_require__("./packages/forms/src/elements/common/Label.tsx"),Input=__webpack_require__("./packages/forms/src/elements/Input.tsx");const DatepickerRangeStory=_ref=>{let{dateStyle,isCompact,...args}=_ref;return(0,jsx_runtime.jsx)(DatepickerRange_DatepickerRange,{...args,formatDate:date=>new Intl.DateTimeFormat(args.locale,{dateStyle}).format(date),isCompact,children:(0,jsx_runtime.jsxs)(Grid.r,{children:[(0,jsx_runtime.jsxs)(Row.X,{children:[(0,jsx_runtime.jsx)(Col.J,{size:"auto",children:(0,jsx_runtime.jsxs)(Field.g,{children:[(0,jsx_runtime.jsx)(Label._,{hidden:!0,children:DatepickerRange_DatepickerRange.Start.displayName}),(0,jsx_runtime.jsx)(DatepickerRange_DatepickerRange.Start,{children:(0,jsx_runtime.jsx)(Input.I,{isCompact,style:{width:isCompact?224:280}})})]})}),(0,jsx_runtime.jsx)(Col.J,{size:"auto",children:(0,jsx_runtime.jsxs)(Field.g,{children:[(0,jsx_runtime.jsx)(Label._,{hidden:!0,children:DatepickerRange_DatepickerRange.End.displayName}),(0,jsx_runtime.jsx)(DatepickerRange_DatepickerRange.End,{children:(0,jsx_runtime.jsx)(Input.I,{isCompact,style:{width:isCompact?224:280}})})]})})]}),(0,jsx_runtime.jsx)(Row.X,{children:(0,jsx_runtime.jsx)(Col.J,{children:(0,jsx_runtime.jsx)(DatepickerRange_DatepickerRange.Calendar,{})})})]})})};DatepickerRangeStory.displayName="DatepickerRangeStory";var data=__webpack_require__("./packages/datepickers/demo/stories/data.ts"),README=__webpack_require__("./packages/datepickers/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Datepickers/DatepickerRange",component:DatepickerRange_DatepickerRange,subcomponents:{"DatepickerRange.Calendar":DatepickerRange_DatepickerRange.Calendar,"DatepickerRange.End":DatepickerRange_DatepickerRange.End,"DatepickerRange.Start":DatepickerRange_DatepickerRange.Start}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"DatepickerRange",args:{dateStyle:data.P[1]},argTypes:{startValue:{control:"date"},endValue:{control:"date"},minValue:{control:"date"},maxValue:{control:"date"},dateStyle:{control:"radio",options:data.P,table:{category:"Story"}}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=134%3A32"}},children:args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(DatepickerRangeStory,{...args,onChange:({endValue,startValue})=>updateArgs({endValue,startValue})})}})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README})]})}const datepickerRange=args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(DatepickerRangeStory,{...args,onChange:({endValue,startValue})=>updateArgs({endValue,startValue})})};datepickerRange.storyName="DatepickerRange",datepickerRange.argTypes={startValue:{control:"date"},endValue:{control:"date"},minValue:{control:"date"},maxValue:{control:"date"},dateStyle:{control:"radio",options:data.P,table:{category:"Story"}}},datepickerRange.args={dateStyle:data.P[1]},datepickerRange.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleChange = ({\n    endValue,\n    startValue\n  }) => updateArgs({\n    endValue,\n    startValue\n  });\n  return <DatepickerRangeStory {...args} onChange={handleChange} />;\n}"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=134%3A32"}};const componentMeta={title:"Packages/Datepickers/DatepickerRange",component:DatepickerRange_DatepickerRange,subcomponents:{"DatepickerRange.Calendar":DatepickerRange_DatepickerRange.Calendar,"DatepickerRange.End":DatepickerRange_DatepickerRange.End,"DatepickerRange.Start":DatepickerRange_DatepickerRange.Start},tags:["stories-mdx"],includeStories:["datepickerRange"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const datepickerRange_stories=componentMeta}}]);