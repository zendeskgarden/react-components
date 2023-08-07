"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[401],{"./packages/forms/demo/stories/FieldStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>FieldStory});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var _zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/forms/src/elements/common/Field.tsx"),_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/forms/demo/stories/common.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FieldStory=_ref=>{let{hasLabel=!0,label="Label",isLabelRegular,isLabelHidden,hasHint=!0,hint="Hint",children,...args}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_3__.g,{...args,children:[(0,_common__WEBPACK_IMPORTED_MODULE_4__.fA)({hasLabel,label,isLabelHidden,isLabelRegular}),(0,_common__WEBPACK_IMPORTED_MODULE_4__.iQ)({hasHint:hasHint&&hasLabel&&!isLabelHidden,hint}),children,(0,_common__WEBPACK_IMPORTED_MODULE_4__.iQ)({hasHint:hasHint&&(!hasLabel||isLabelHidden),hint}),(0,_common__WEBPACK_IMPORTED_MODULE_4__.F$)(args)]})};FieldStory.displayName="FieldStory"},"./packages/forms/demo/stories/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>renderMessage,Fk:()=>messageArgs,L3:()=>messageArgTypes,OF:()=>hintArgTypes,VU:()=>hintArgs,fA:()=>renderLabel,iQ:()=>renderHint,km:()=>commonArgs,w$:()=>commonArgTypes});__webpack_require__("./node_modules/react/index.js");var _zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/forms/src/elements/common/Label.tsx"),_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/forms/src/elements/common/Hint.tsx"),_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/forms/src/elements/common/Message.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const hintArgTypes={hasHint:{name:"Hint",table:{category:"Story"}},hint:{name:"children",table:{category:"Hint"}}},messageArgTypes={hasMessage:{name:"Message",table:{category:"Story"}},message:{name:"children",table:{category:"Message"}},validationLabel:{control:{type:"text"},table:{category:"Message"}},validation:{options:["success","warning","error"],control:{type:"radio"},table:{category:"Message"}}},commonArgTypes={label:{name:"children",table:{category:"Label"}},isLabelRegular:{name:"isRegular",table:{category:"Label"}},isLabelHidden:{name:"hidden",table:{category:"Label"}},...hintArgTypes,...messageArgTypes},hintArgs={hasHint:!0,hint:"Hint"},messageArgs={hasMessage:!0,message:"Message"},commonArgs={label:"Label",isLabelRegular:!1,isLabelHidden:!1,...hintArgs,...messageArgs},renderLabel=_ref=>{let{hasLabel,isLabelHidden,isLabelRegular,label}=_ref;return hasLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_2__._,{hidden:isLabelHidden,isRegular:isLabelRegular,children:label})},renderHint=_ref2=>{let{hasHint,hint}=_ref2;return hasHint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_3__.k,{children:hint})},renderMessage=_ref3=>{let{hasMessage,validation,validationLabel,message}=_ref3;return hasMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_4__.v,{validation,validationLabel,children:message})};try{renderLabel.displayName="renderLabel",renderLabel.__docgenInfo={description:"",displayName:"renderLabel",props:{hasLabel:{defaultValue:null,description:"",name:"hasLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},isLabelRegular:{defaultValue:null,description:"",name:"isLabelRegular",required:!1,type:{name:"boolean"}},isLabelHidden:{defaultValue:null,description:"",name:"isLabelHidden",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/forms/demo/stories/common.tsx#renderLabel"]={docgenInfo:renderLabel.__docgenInfo,name:"renderLabel",path:"packages/forms/demo/stories/common.tsx#renderLabel"})}catch(__react_docgen_typescript_loader_error){}try{renderHint.displayName="renderHint",renderHint.__docgenInfo={description:"",displayName:"renderHint",props:{hasHint:{defaultValue:null,description:"",name:"hasHint",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/forms/demo/stories/common.tsx#renderHint"]={docgenInfo:renderHint.__docgenInfo,name:"renderHint",path:"packages/forms/demo/stories/common.tsx#renderHint"})}catch(__react_docgen_typescript_loader_error){}try{renderMessage.displayName="renderMessage",renderMessage.__docgenInfo={description:"",displayName:"renderMessage",props:{hasMessage:{defaultValue:null,description:"",name:"hasMessage",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},validationLabel:{defaultValue:null,description:"",name:"validationLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/forms/demo/stories/common.tsx#renderMessage"]={docgenInfo:renderMessage.__docgenInfo,name:"renderMessage",path:"packages/forms/demo/stories/common.tsx#renderMessage"})}catch(__react_docgen_typescript_loader_error){}},"./packages/forms/src/elements/FileUpload.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>FileUpload});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/forms/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/forms/src/styled/file-upload/StyledFileUpload.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FileUpload=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{disabled,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.$,{ref,"aria-disabled":disabled,...props,role:"button"})}));FileUpload.propTypes={isDragging:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,isCompact:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},FileUpload.displayName="FileUpload";try{FileUpload.displayName="FileUpload",FileUpload.__docgenInfo={description:"",displayName:"FileUpload",props:{disabled:{defaultValue:null,description:"Indicates that the element is not interactive",name:"disabled",required:!1,type:{name:"boolean"}},isDragging:{defaultValue:null,description:"Applies drag styling",name:"isDragging",required:!1,type:{name:"boolean"}},isCompact:{defaultValue:null,description:"Applies compact styling",name:"isCompact",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/forms/src/elements/FileUpload.tsx#FileUpload"]={docgenInfo:FileUpload.__docgenInfo,name:"FileUpload",path:"packages/forms/src/elements/FileUpload.tsx#FileUpload"})}catch(__react_docgen_typescript_loader_error){}},"./packages/forms/src/elements/common/Field.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Field});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_zendeskgarden_container_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/forms/node_modules/@zendeskgarden/container-field/dist/index.esm.js"),_utils_useFieldContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/forms/src/utils/useFieldContext.ts"),_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/forms/src/styled/common/StyledField.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Field=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>{const[hasHint,setHasHint]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[hasMessage,setHasMessage]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isLabelActive,setIsLabelActive]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isLabelHovered,setIsLabelHovered]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),multiThumbRangeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),{getInputProps,getMessageProps,...propGetters}=(0,_zendeskgarden_container_field__WEBPACK_IMPORTED_MODULE_2__.U)(props.id),fieldProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...propGetters,getInputProps:function(options){return getInputProps(options,{...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},isDescribed:hasHint,hasMessage})},getMessageProps:options=>getMessageProps({role:"alert",...options}),isLabelActive,setIsLabelActive,isLabelHovered,setIsLabelHovered,hasHint,setHasHint,hasMessage,setHasMessage,multiThumbRangeRef})),[propGetters,getInputProps,getMessageProps,isLabelActive,isLabelHovered,hasHint,hasMessage]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_utils_useFieldContext__WEBPACK_IMPORTED_MODULE_3__.z.Provider,{value:fieldProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_4__.o,{...props,ref})})}));Field.displayName="Field";try{Field.displayName="Field",Field.__docgenInfo={description:"",displayName:"Field",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/forms/src/elements/common/Field.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"packages/forms/src/elements/common/Field.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}},"./packages/forms/src/elements/common/Hint.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Hint});var react=__webpack_require__("./node_modules/react/index.js"),useFieldContext=__webpack_require__("./packages/forms/src/utils/useFieldContext.ts"),useInputContext=__webpack_require__("./packages/forms/src/utils/useInputContext.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),polished_esm=__webpack_require__("./packages/forms/node_modules/polished/dist/polished.esm.js"),StyledHint=__webpack_require__("./packages/forms/src/styled/common/StyledHint.ts");const StyledRadioHint=(0,styled_components_browser_esm.ZP)(StyledHint.q).attrs({"data-garden-id":"forms.radio_hint","data-garden-version":"storybook"}).withConfig({displayName:"StyledRadioHint",componentId:"sc-eo8twg-0"})(["padding-",":",";",";"],(props=>props.theme.rtl?"right":"left"),(props=>(0,polished_esm.mA)(`${props.theme.space.base} * 6px`)),(props=>(0,retrieveComponentStyles.Z)("forms.radio_hint",props)));StyledRadioHint.defaultProps={theme:theme.Z};const StyledCheckHint=(0,styled_components_browser_esm.ZP)(StyledRadioHint).attrs({"data-garden-id":"forms.checkbox_hint","data-garden-version":"storybook"}).withConfig({displayName:"StyledCheckHint",componentId:"sc-1kl8e8c-0"})(["",";"],(props=>(0,retrieveComponentStyles.Z)("forms.checkbox_hint",props)));StyledCheckHint.defaultProps={theme:theme.Z};const StyledToggleHint=(0,styled_components_browser_esm.ZP)(StyledHint.q).attrs({"data-garden-id":"forms.toggle_hint","data-garden-version":"storybook"}).withConfig({displayName:"StyledToggleHint",componentId:"sc-nziggu-0"})(["padding-",":",";",";"],(props=>props.theme.rtl?"right":"left"),(props=>(0,polished_esm.mA)(`${props.theme.space.base} * 12px`)),(props=>(0,retrieveComponentStyles.Z)("forms.toggle_hint",props)));StyledToggleHint.defaultProps={theme:theme.Z};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Hint=react.forwardRef(((props,ref)=>{const{hasHint,setHasHint,getHintProps}=(0,useFieldContext.Z)()||{},type=(0,useInputContext.Z)();let HintComponent;(0,react.useEffect)((()=>(!hasHint&&setHasHint&&setHasHint(!0),()=>{hasHint&&setHasHint&&setHasHint(!1)})),[hasHint,setHasHint]),HintComponent="checkbox"===type?StyledCheckHint:"radio"===type?StyledRadioHint:"toggle"===type?StyledToggleHint:StyledHint.q;let combinedProps=props;return getHintProps&&(combinedProps=getHintProps(combinedProps)),(0,jsx_runtime.jsx)(HintComponent,{ref,...combinedProps})}));Hint.displayName="Hint";try{Hint.displayName="Hint",Hint.__docgenInfo={description:"",displayName:"Hint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/forms/src/elements/common/Hint.tsx#Hint"]={docgenInfo:Hint.__docgenInfo,name:"Hint",path:"packages/forms/src/elements/common/Hint.tsx#Hint"})}catch(__react_docgen_typescript_loader_error){}},"./packages/forms/src/elements/common/Message.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Message});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./packages/forms/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useText=__webpack_require__("./packages/theming/src/utils/useText.ts"),types=__webpack_require__("./packages/forms/src/types/index.ts"),useFieldContext=__webpack_require__("./packages/forms/src/utils/useFieldContext.ts"),useInputContext=__webpack_require__("./packages/forms/src/utils/useInputContext.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),polished_esm=__webpack_require__("./packages/forms/node_modules/polished/dist/polished.esm.js"),StyledMessage=__webpack_require__("./packages/forms/src/styled/common/StyledMessage.ts");const StyledRadioMessage=(0,styled_components_browser_esm.ZP)(StyledMessage.g).attrs({"data-garden-id":"forms.radio_message","data-garden-version":"storybook"}).withConfig({displayName:"StyledRadioMessage",componentId:"sc-1pmi0q8-0"})(["padding-",":",";",";"],(props=>props.theme.rtl?"right":"left"),(props=>(0,polished_esm.mA)(`${props.theme.space.base} * 6px`)),(props=>(0,retrieveComponentStyles.Z)("forms.radio_message",props)));StyledRadioMessage.defaultProps={theme:theme.Z};const StyledCheckMessage=(0,styled_components_browser_esm.ZP)(StyledRadioMessage).attrs({"data-garden-id":"forms.checkbox_message","data-garden-version":"storybook"}).withConfig({displayName:"StyledCheckMessage",componentId:"sc-s4p6kd-0"})(["",";"],(props=>(0,retrieveComponentStyles.Z)("forms.checkbox_message",props)));StyledCheckMessage.defaultProps={theme:theme.Z};var StyledMessageIcon=__webpack_require__("./packages/forms/src/styled/common/StyledMessageIcon.ts");const StyledToggleMessage=(0,styled_components_browser_esm.ZP)(StyledMessage.g).attrs({"data-garden-id":"forms.toggle_message","data-garden-version":"storybook"}).withConfig({displayName:"StyledToggleMessage",componentId:"sc-13vuvl1-0"})(["padding-",":",";& ","{",":",";}",";"],(props=>props.theme.rtl?"right":"left"),(props=>(0,polished_esm.mA)(`${props.theme.space.base} * 12px`)),StyledMessageIcon.h,(props=>props.theme.rtl?"right":"left"),(props=>(0,polished_esm.mA)(`${props.theme.space.base} * 10px - ${props.theme.iconSizes.md}`)),(props=>(0,retrieveComponentStyles.Z)("forms.toggle_message",props)));StyledToggleMessage.defaultProps={theme:theme.Z};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Message=react.forwardRef(((_ref,ref)=>{let{validation,validationLabel,children,...props}=_ref;const{hasMessage,setHasMessage,getMessageProps}=(0,useFieldContext.Z)()||{},type=(0,useInputContext.Z)();let MessageComponent;(0,react.useEffect)((()=>(!hasMessage&&setHasMessage&&setHasMessage(!0),()=>{hasMessage&&setHasMessage&&setHasMessage(!1)})),[hasMessage,setHasMessage]),MessageComponent="checkbox"===type?StyledCheckMessage:"radio"===type?StyledRadioMessage:"toggle"===type?StyledToggleMessage:StyledMessage.g;let combinedProps={validation,validationLabel,...props};getMessageProps&&(combinedProps=getMessageProps(combinedProps));const ariaLabel=(0,useText.X)(Message,combinedProps,"validationLabel",validation,void 0!==validation);return(0,jsx_runtime.jsxs)(MessageComponent,{ref,...combinedProps,children:[validation&&(0,jsx_runtime.jsx)(StyledMessageIcon.h,{validation,"aria-label":ariaLabel}),children]})}));Message.displayName="Message",Message.propTypes={validation:prop_types_default().oneOf(types.at),validationLabel:prop_types_default().string};try{Message.displayName="Message",Message.__docgenInfo={description:"",displayName:"Message",props:{validation:{defaultValue:null,description:"Applies validation state styling",name:"validation",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},validationLabel:{defaultValue:null,description:"Defines the aria-label for the validation icon",name:"validationLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/forms/src/elements/common/Message.tsx#Message"]={docgenInfo:Message.__docgenInfo,name:"Message",path:"packages/forms/src/elements/common/Message.tsx#Message"})}catch(__react_docgen_typescript_loader_error){}},"./packages/forms/src/styled/common/StyledField.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>StyledField});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledField=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div.attrs({"data-garden-id":"forms.field","data-garden-version":"storybook"}).withConfig({displayName:"StyledField",componentId:"sc-12gzfsu-0"})(["position:relative;direction:",";margin:0;border:0;padding:0;font-size:0;",";"],(props=>props.theme.rtl?"rtl":"ltr"),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.Z)("forms.field",props)));StyledField.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z}},"./packages/forms/src/styled/common/StyledHint.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>StyledHint});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/getLineHeight.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/getColor.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledHint=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div.attrs((props=>({"data-garden-id":props["data-garden-id"]||"forms.input_hint","data-garden-version":props["data-garden-version"]||"storybook"}))).withConfig({displayName:"StyledHint",componentId:"sc-17c2wu8-0"})(["direction:",";display:block;vertical-align:middle;line-height:",";color:",";font-size:",";",";"],(props=>props.theme.rtl&&"rtl"),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.Z)(5*props.theme.space.base,props.theme.fontSizes.md)),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.L)("neutralHue",600,props.theme)),(props=>props.theme.fontSizes.md),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z)("forms.input_hint",props)));StyledHint.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_4__.Z}},"./packages/forms/src/styled/file-upload/StyledFileUpload.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>StyledFileUpload});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/forms/node_modules/polished/dist/polished.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getColor.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/utils/focusStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/theming/src/utils/getLineHeight.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_common_StyledLabel__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/forms/src/styled/common/StyledLabel.ts"),_common_StyledHint__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/forms/src/styled/common/StyledHint.ts"),_common_StyledMessage__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/forms/src/styled/common/StyledMessage.ts");const StyledFileUpload=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div.attrs({"data-garden-id":"forms.file_upload","data-garden-version":"storybook"}).withConfig({displayName:"StyledFileUpload",componentId:"sc-1rodjgn-0"})(["display:flex;align-items:center;justify-content:center;box-sizing:border-box;direction:",";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out;border:dashed ",";border-radius:",";cursor:pointer;text-align:center;user-select:none;",";&[aria-disabled='true']{cursor:default;}",";",";"],(props=>props.theme.rtl?"rtl":"ltr"),(props=>props.theme.borderWidths.sm),(props=>props.theme.borderRadii.md),(props=>{const marginTop=props.theme.space.base*(props.isCompact?1:2)+"px",paddingHorizontal=(props.isCompact?2:4)+"em",paddingVertical=(0,polished__WEBPACK_IMPORTED_MODULE_2__.mA)(`${props.theme.space.base*(props.isCompact?2.5:5)} - ${props.theme.borderWidths.sm}`),fontSize=props.theme.fontSizes.md,lineHeight=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_4__.Z)(5*props.theme.space.base,fontSize);return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["padding:"," ",";min-width:4em;line-height:",";font-size:",";",":not([hidden]) + &&,"," + &&,"," + &&,&& + ",",&& + ","{margin-top:",";}"],paddingVertical,paddingHorizontal,lineHeight,fontSize,_common_StyledLabel__WEBPACK_IMPORTED_MODULE_5__.a,_common_StyledHint__WEBPACK_IMPORTED_MODULE_6__.q,_common_StyledMessage__WEBPACK_IMPORTED_MODULE_7__.g,_common_StyledHint__WEBPACK_IMPORTED_MODULE_6__.q,_common_StyledMessage__WEBPACK_IMPORTED_MODULE_7__.g,marginTop)}),(props=>{const baseColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("primaryHue",600,props.theme),hoverColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("primaryHue",700,props.theme),activeColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("primaryHue",800,props.theme),disabledBackgroundColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("neutralHue",200,props.theme),disabledForegroundColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("neutralHue",400,props.theme);return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["border-color:",";background-color:",";color:",";&:hover{border-color:",";background-color:",";color:",";}"," &:active{border-color:",";background-color:",";color:",";}&[aria-disabled='true']{border-color:",";background-color:",";color:",";}"],props.isDragging?activeColor:(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("neutralHue",600,props.theme),props.isDragging&&(0,polished__WEBPACK_IMPORTED_MODULE_2__.m4)(baseColor,.2),props.isDragging?activeColor:baseColor,hoverColor,(0,polished__WEBPACK_IMPORTED_MODULE_2__.m4)(baseColor,.08),hoverColor,(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.j)({theme:props.theme,hue:baseColor}),activeColor,(0,polished__WEBPACK_IMPORTED_MODULE_2__.m4)(baseColor,.2),activeColor,disabledForegroundColor,disabledBackgroundColor,disabledForegroundColor)}),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_8__.Z)("forms.file_upload",props)));StyledFileUpload.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_9__.Z}}}]);