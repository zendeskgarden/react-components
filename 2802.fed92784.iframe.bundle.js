/*! For license information please see 2802.fed92784.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[2802],{"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./packages/tabs/node_modules/@zendeskgarden/container-tabs/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>useTabs});var react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2);function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}var useIsomorphicLayoutEffect=canUseDOM()?react.useLayoutEffect:react.useEffect;var serverHandoffComplete=!1,id=0;function genId(){return++id}var maybeReactUseId=react_namespaceObject["useId".toString()];var index_esm=__webpack_require__("./packages/tabs/node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),prop_types=__webpack_require__("./packages/tabs/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);const stateReducer=(state,action)=>{switch(action.type){case"END":case"HOME":case"FOCUS":case"INCREMENT":case"DECREMENT":return{...state,focusedValue:action.payload};case"MOUSE_SELECT":return{...state,selectedValue:action.payload,focusedValue:void 0};case"KEYBOARD_SELECT":return{...state,selectedValue:action.payload};case"EXIT_WIDGET":return{...state,focusedValue:void 0};default:return state}},useSelection=_ref=>{let{values,direction="horizontal",defaultFocusedValue=values[0],defaultSelectedValue,rtl,selectedValue,focusedValue,onSelect,onFocus}=_ref;const isSelectedValueControlled=void 0!==selectedValue,isFocusedValueControlled=void 0!==focusedValue,refs=(0,react.useMemo)((()=>values.reduce(((all,value)=>(all[value]=(0,react.createRef)(),all)),{})),[values]),[state,dispatch]=(0,react.useReducer)(stateReducer,{selectedValue,focusedValue}),controlledFocusedValue=(0,index_esm.u5)(focusedValue,state.focusedValue),controlledSelectedValue=(0,index_esm.u5)(selectedValue,state.selectedValue);(0,react.useEffect)((()=>{if(void 0!==controlledFocusedValue){const targetRef=refs[controlledFocusedValue];targetRef?.current&&targetRef.current.focus()}}),[controlledFocusedValue]),(0,react.useEffect)((()=>{void 0===selectedValue&&void 0!==defaultSelectedValue&&(onSelect&&onSelect(defaultSelectedValue),isSelectedValueControlled||dispatch({type:"KEYBOARD_SELECT",payload:defaultSelectedValue}))}),[]);const getGroupProps=(0,react.useCallback)((function(_temp){let{role="group",...other}=void 0===_temp?{}:_temp;return{role:null===role?void 0:role,"data-garden-container-id":"containers.selection","data-garden-container-version":"3.0.0",...other}}),[]);return{focusedValue:controlledFocusedValue,selectedValue:controlledSelectedValue,getElementProps:_ref2=>{let{selectedAriaKey="aria-selected",onFocus:onFocusCallback,onKeyDown,onClick,value,...other}=_ref2;const isSelected=controlledSelectedValue===value,verticalDirection="vertical"===direction||"both"===direction,horizontalDirection="horizontal"===direction||"both"===direction;return{tabIndex:(void 0===controlledFocusedValue?isSelected:controlledFocusedValue===value)||void 0===controlledSelectedValue&&void 0===controlledFocusedValue&&value===defaultFocusedValue?0:-1,[selectedAriaKey]:selectedAriaKey?isSelected:void 0,ref:refs[value],onFocus:(0,index_esm.Mj)(onFocusCallback,(()=>{onFocus&&onFocus(value),!isFocusedValueControlled&&dispatch({type:"FOCUS",payload:value})})),onClick:(0,index_esm.Mj)(onClick,(()=>{onSelect&&onSelect(value),onFocus&&onFocus(value),!isSelectedValueControlled&&dispatch({type:"MOUSE_SELECT",payload:value})})),onKeyDown:(0,index_esm.Mj)(onKeyDown,(event=>{let nextItem,currentItem;currentItem=isFocusedValueControlled?values.find((id=>focusedValue===id)):values.find((id=>state.focusedValue===id));const onIncrement=()=>{const nextItemIndex=values.indexOf(currentItem)+1;nextItem=values[nextItemIndex],nextItem||(nextItem=values[0]),!isFocusedValueControlled&&dispatch({type:"INCREMENT",payload:nextItem}),onFocus&&onFocus(nextItem)},onDecrement=()=>{const nextItemIndex=values.indexOf(currentItem)-1;nextItem=values[nextItemIndex],nextItem||(nextItem=values[values.length-1]),!isFocusedValueControlled&&dispatch({type:"DECREMENT",payload:nextItem}),onFocus&&onFocus(nextItem)};if(!(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey))if(event.key===index_esm.tW.UP&&verticalDirection||event.key===index_esm.tW.LEFT&&horizontalDirection)rtl&&horizontalDirection?onIncrement():onDecrement(),event.preventDefault();else if(event.key===index_esm.tW.DOWN&&verticalDirection||event.key===index_esm.tW.RIGHT&&horizontalDirection)rtl&&horizontalDirection?onDecrement():onIncrement(),event.preventDefault();else if(event.key===index_esm.tW.HOME){const firstItem=values[0];!isFocusedValueControlled&&dispatch({type:"HOME",payload:firstItem}),onFocus&&onFocus(firstItem),event.preventDefault()}else if(event.key===index_esm.tW.END){const lastItem=values[values.length-1];!isFocusedValueControlled&&dispatch({type:"END",payload:lastItem}),onFocus&&onFocus(lastItem),event.preventDefault()}else event.key!==index_esm.tW.SPACE&&event.key!==index_esm.tW.ENTER||(onSelect&&onSelect(value),!isSelectedValueControlled&&dispatch({type:"KEYBOARD_SELECT",payload:value}),event.preventDefault())})),onBlur:event=>{0===event.target.tabIndex&&(dispatch({type:"EXIT_WIDGET"}),onFocus&&onFocus())},...other}},getGroupProps}},SelectionContainer=_ref=>{let{children,render=children,...options}=_ref;return react.createElement(react.Fragment,null,render(useSelection(options)))};SelectionContainer.defaultProps={direction:"horizontal"},SelectionContainer.propTypes={children:prop_types_default().func,render:prop_types_default().func,values:prop_types_default().arrayOf(prop_types_default().any).isRequired,rtl:prop_types_default().bool,direction:prop_types_default().oneOf(["horizontal","vertical","both"]),defaultFocusedValue:prop_types_default().string,defaultSelectedValue:prop_types_default().string,focusedValue:prop_types_default().any,selectedValue:prop_types_default().any,onSelect:prop_types_default().func,onFocus:prop_types_default().func};const useTabs=_ref=>{let{tabs,orientation="horizontal",idPrefix,...options}=_ref;const prefix=function useId(providedId){if(void 0!==maybeReactUseId){let generatedId=maybeReactUseId();return providedId??generatedId}let initialId=providedId??(serverHandoffComplete?genId():null),[id2,setId]=react.useState(initialId);return useIsomorphicLayoutEffect((()=>{null===id2&&setId(genId())}),[]),react.useEffect((()=>{!1===serverHandoffComplete&&(serverHandoffComplete=!0)}),[]),providedId??id2??void 0}(idPrefix),PANEL_ID=`${prefix}__panel`,TAB_ID=`${prefix}__tab`,values=(0,react.useMemo)((()=>tabs.reduce(((all,tab)=>(!tab.disabled&&all.push(tab.value),all)),[])),[tabs]),{selectedValue,focusedValue,getGroupProps,getElementProps}=useSelection({values,direction:orientation,defaultSelectedValue:values[0],...options}),getTabListProps=(0,react.useCallback)((function(_temp){let{role="tablist",...other}=void 0===_temp?{}:_temp;return{...getGroupProps(other),role:null===role?void 0:role,"aria-orientation":orientation,"data-garden-container-id":"containers.tabs","data-garden-container-version":"2.0.1"}}),[getGroupProps,orientation]),getTabProps=(0,react.useCallback)((_ref2=>{let{role="tab",value,...other}=_ref2;const isDisabled=-1===values.indexOf(value),{onClick,onKeyDown,onFocus,onBlur,...elementProps}=getElementProps({value,role:null===role?void 0:role,...other});return{...elementProps,onClick:isDisabled?void 0:onClick,onFocus:isDisabled?void 0:onFocus,onKeyDown:isDisabled?void 0:onKeyDown,onBlur:isDisabled?void 0:onBlur,id:`${TAB_ID}:${value}`,"aria-disabled":isDisabled||void 0,"aria-controls":`${PANEL_ID}:${value}`}}),[getElementProps,values,PANEL_ID,TAB_ID]),getTabPanelProps=(0,react.useCallback)((_ref3=>{let{role="tabpanel",value,...other}=_ref3;return{role:null===role?void 0:role,id:`${PANEL_ID}:${value}`,hidden:value!==selectedValue,"aria-labelledby":`${TAB_ID}:${value}`,...other}}),[selectedValue,PANEL_ID,TAB_ID]);return(0,react.useMemo)((()=>({selectedValue,focusedValue,getTabListProps,getTabProps,getTabPanelProps})),[selectedValue,focusedValue,getTabListProps,getTabProps,getTabPanelProps])},TabsContainer=_ref=>{let{children,render=children,...options}=_ref;return react.createElement(react.Fragment,null,render(useTabs(options)))};TabsContainer.defaultProps={orientation:"horizontal"},TabsContainer.propTypes={children:prop_types_default().func,render:prop_types_default().func,tabs:prop_types_default().arrayOf(prop_types_default().any).isRequired,rtl:prop_types_default().bool,orientation:prop_types_default().oneOf(["horizontal","vertical"]),idPrefix:prop_types_default().string,defaultSelectedValue:prop_types_default().any,selectedValue:prop_types_default().any,onSelect:prop_types_default().func}},"./packages/tabs/node_modules/@zendeskgarden/container-utilities/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Mj:()=>composeEventHandlers,tW:()=>KEYS,u5:()=>getControlledValue});__webpack_require__("./node_modules/react/index.js");function composeEventHandlers(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(event){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];return fns.some((fn=>(fn&&fn(event,...args),event&&event.defaultPrevented)))}}function getControlledValue(){for(var _len=arguments.length,values=new Array(_len),_key=0;_key<_len;_key++)values[_key]=arguments[_key];for(const value of values)if(void 0!==value)return value}const KEYS={ALT:"Alt",ASTERISK:"*",BACKSPACE:"Backspace",COMMA:",",DELETE:"Delete",DOWN:"ArrowDown",END:"End",ENTER:"Enter",ESCAPE:"Escape",HOME:"Home",LEFT:"ArrowLeft",NUMPAD_ADD:"Add",NUMPAD_DECIMAL:"Decimal",NUMPAD_DIVIDE:"Divide",NUMPAD_ENTER:"Enter",NUMPAD_MULTIPLY:"Multiply",NUMPAD_SUBTRACT:"Subtract",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",PERIOD:".",RIGHT:"ArrowRight",SHIFT:"Shift",SPACE:" ",TAB:"Tab",UNIDENTIFIED:"Unidentified",UP:"ArrowUp"};var DocumentPosition;!function(DocumentPosition){DocumentPosition[DocumentPosition.DISCONNECTED=1]="DISCONNECTED",DocumentPosition[DocumentPosition.PRECEDING=2]="PRECEDING",DocumentPosition[DocumentPosition.FOLLOWING=4]="FOLLOWING",DocumentPosition[DocumentPosition.CONTAINS=8]="CONTAINS",DocumentPosition[DocumentPosition.CONTAINED_BY=16]="CONTAINED_BY",DocumentPosition[DocumentPosition.IMPLEMENTATION_SPECIFIC=32]="IMPLEMENTATION_SPECIFIC"}(DocumentPosition||(DocumentPosition={}))},"./packages/tabs/node_modules/polished/dist/polished.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{wA:()=>stripUnit});var cssRegex$1=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function stripUnit(value){return"string"!=typeof value?value:value.match(cssRegex$1)?parseFloat(value):value}},"./packages/tabs/node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./packages/tabs/node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./packages/tabs/node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./packages/tabs/node_modules/prop-types/factoryWithThrowingShims.js")()},"./packages/tabs/node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./packages/tabs/node_modules/react-merge-refs/dist/react-merge-refs.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function mergeRefs(refs){return function(value){refs.forEach((function(ref){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}}}}]);