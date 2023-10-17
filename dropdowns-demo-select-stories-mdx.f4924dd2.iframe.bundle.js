"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[9007],{"./packages/dropdowns/demo/select.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>select_stories,select:()=>select_stories_select});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),downshift_esm=__webpack_require__("./node_modules/downshift/dist/downshift.esm.js"),index_esm=__webpack_require__("./node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),chevron_down_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg"),types=__webpack_require__("./packages/forms/src/types/index.ts"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Reference=__webpack_require__("./node_modules/react-popper/lib/esm/Reference.js"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),StyledFauxInput=__webpack_require__("./packages/dropdowns/src/styled/select/StyledFauxInput.ts"),StyledSelect=__webpack_require__("./packages/dropdowns/src/styled/select/StyledSelect.ts"),StyledInput=__webpack_require__("./packages/dropdowns/src/styled/select/StyledInput.ts"),useDropdownContext=__webpack_require__("./packages/dropdowns/src/utils/useDropdownContext.ts"),useFieldContext=__webpack_require__("./packages/dropdowns/src/utils/useFieldContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Select=react.forwardRef(((_ref,ref)=>{let{children,start,...props}=_ref;const{popperReferenceElementRef,itemSearchRegistry,downshift:{getToggleButtonProps,getInputProps,isOpen,highlightedIndex,setHighlightedIndex,selectItemAtIndex,closeMenu}}=(0,useDropdownContext.Z)(),{isLabelHovered}=(0,useFieldContext.Z)(),[isHovered,setIsHovered]=(0,react.useState)(!1),[isFocused,setIsFocused]=(0,react.useState)(!1),hiddenInputRef=(0,react.useRef)(),triggerRef=(0,react.useRef)(),previousIsOpenRef=(0,react.useRef)(void 0),[searchString,setSearchString]=(0,react.useState)(""),searchTimeoutRef=(0,react.useRef)(),currentSearchIndexRef=(0,react.useRef)(0);(0,react.useEffect)((()=>{hiddenInputRef.current&&isOpen&&!previousIsOpenRef.current&&hiddenInputRef.current.focus(),triggerRef.current&&!isOpen&&previousIsOpenRef.current&&triggerRef.current.focus(),previousIsOpenRef.current=isOpen}),[isOpen,triggerRef]),(0,react.useEffect)((()=>(searchTimeoutRef.current&&clearTimeout(searchTimeoutRef.current),searchTimeoutRef.current=window.setTimeout((()=>{setSearchString("")}),500),()=>{clearTimeout(searchTimeoutRef.current)})),[searchString]);const searchItems=(0,react.useCallback)(((searchValue,startIndex,endIndex)=>{for(let index=startIndex;index<endIndex;index++){const itemTextValue=itemSearchRegistry.current[index];if(itemTextValue&&0===itemTextValue.toUpperCase().indexOf(searchValue.toUpperCase()))return index}}),[itemSearchRegistry]),onInputKeyDown=(0,react.useCallback)((e=>{if(e.keyCode===index_esm.nx.SPACE&&(searchString?(e.preventDefault(),e.stopPropagation()):null!=highlightedIndex&&(e.preventDefault(),e.stopPropagation(),selectItemAtIndex(highlightedIndex),closeMenu())),(e.keyCode<48||e.keyCode>57)&&(e.keyCode<65||e.keyCode>90)&&e.keyCode!==index_esm.nx.SPACE)return;const character=String.fromCharCode(e.which||e.keyCode);if(!character||0===character.length)return;searchString||(currentSearchIndexRef.current=null==highlightedIndex?-1:highlightedIndex);const newSearchString=searchString+character;setSearchString(newSearchString);let matchingIndex=searchItems(newSearchString,currentSearchIndexRef.current+1,itemSearchRegistry.current.length);void 0===matchingIndex&&(matchingIndex=searchItems(newSearchString,0,currentSearchIndexRef.current)),void 0!==matchingIndex&&setHighlightedIndex(matchingIndex)}),[searchString,searchItems,itemSearchRegistry,highlightedIndex,selectItemAtIndex,closeMenu,setHighlightedIndex]),{type,...selectProps}=getToggleButtonProps({tabIndex:props.disabled?void 0:0,onMouseEnter:(0,index_esm.Mj)(props.onMouseEnter,(()=>setIsHovered(!0))),onMouseLeave:(0,index_esm.Mj)(props.onMouseLeave,(()=>setIsHovered(!1))),onFocus:(0,index_esm.Mj)(props.onFocus,(()=>setIsFocused(!0))),onBlur:(0,index_esm.Mj)(props.onBlur,(()=>setIsFocused(!1))),...props}),isContainerHovered=isLabelHovered&&!isOpen,isContainerFocused=isFocused||isOpen;return(0,jsx_runtime.jsx)(Reference.Z,{children:_ref2=>{let{ref:popperReference}=_ref2;return(0,jsx_runtime.jsxs)(StyledFauxInput.v,{isHovered:isContainerHovered,isFocused:isContainerFocused,...selectProps,role:"none",ref:selectRef=>{popperReference(selectRef),(0,react_merge_refs_esm.Z)([triggerRef,ref,popperReferenceElementRef])(selectRef)},children:[start&&(0,jsx_runtime.jsx)(StyledFauxInput.v.StartIcon,{isHovered:isHovered||isLabelHovered&&!isOpen,isFocused:isContainerFocused,isDisabled:props.disabled,children:start}),(0,jsx_runtime.jsx)(StyledSelect.Q,{children}),(0,jsx_runtime.jsx)(StyledInput.F,{...getInputProps({readOnly:!0,isHidden:!0,tabIndex:-1,ref:hiddenInputRef,value:"",onClick:e=>{isOpen&&(e.nativeEvent.preventDownshiftDefault=!0)},onKeyDown:onInputKeyDown})}),!props.isBare&&(0,jsx_runtime.jsx)(StyledFauxInput.v.EndIcon,{isHovered:isHovered||isLabelHovered&&!isOpen,isFocused:isContainerFocused,isDisabled:props.disabled,isRotated:isOpen,children:(0,jsx_runtime.jsx)(chevron_down_stroke.Z,{})})]})}})}));Select.displayName="Select",Select.propTypes={isCompact:prop_types_default().bool,isBare:prop_types_default().bool,disabled:prop_types_default().bool,focusInset:prop_types_default().bool,validation:prop_types_default().oneOf(types.at),start:prop_types_default().any};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{start:{defaultValue:null,description:"Defines the icon rendered before the element's content",name:"start",required:!1,type:{name:"any"}},isCompact:{defaultValue:null,description:"Applies compact styling",name:"isCompact",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Indicates that the element is not interactive",name:"disabled",required:!1,type:{name:"boolean"}},validation:{defaultValue:null,description:"Applies validation state styling",name:"validation",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},isBare:{defaultValue:null,description:"Removes borders and padding",name:"isBare",required:!1,type:{name:"boolean"}},focusInset:{defaultValue:null,description:"Applies inset `box-shadow` styling on focus",name:"focusInset",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/elements/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"packages/dropdowns/src/elements/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}var Dropdown=__webpack_require__("./packages/dropdowns/src/elements/Dropdown/Dropdown.tsx"),Field=__webpack_require__("./packages/dropdowns/src/elements/Fields/Field.tsx"),Hint=__webpack_require__("./packages/dropdowns/src/elements/Fields/Hint.tsx"),Label=__webpack_require__("./packages/dropdowns/src/elements/Fields/Label.tsx"),Menu=__webpack_require__("./packages/dropdowns/src/elements/Menu/Menu.tsx"),Message=__webpack_require__("./packages/dropdowns/src/elements/Fields/Message.tsx"),leaf_stroke=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/leaf-stroke.svg")),DropdownFieldStory=__webpack_require__("./packages/dropdowns/demo/stories/DropdownFieldStory.tsx");const SelectStory=_ref=>{let{label,isLabelRegular,isLabelHidden,hasHint,hint,hasMessage,message,downshiftProps,selectedItem,onSelect,onStateChange,isOpen,placement,hasIcon,items,...args}=_ref;return(0,jsx_runtime.jsx)(DropdownFieldStory._,{dropdownProps:{downshiftProps,selectedItem,onSelect,onStateChange,isOpen},label,isLabelRegular,isLabelHidden,hasHint,hint,hasMessage,message,validation:args.validation,validationLabel:args.validationLabel,menuProps:{isCompact:args.isCompact,placement},items,itemProps:{hasIcon,disabled:args.disabled},children:(0,jsx_runtime.jsx)(Select,{...args,start:hasIcon?(0,jsx_runtime.jsx)(leaf_stroke.Z,{}):void 0,children:selectedItem.text})})};SelectStory.displayName="SelectStory";var data=__webpack_require__("./packages/dropdowns/demo/stories/data.ts"),README=__webpack_require__("./packages/dropdowns/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Dropdowns/Select",component:Select,subcomponents:{Dropdown:Dropdown.L,Field:Field.g,Hint:Hint.k,Label:Label._,Menu:Menu.v,Message:Message.v}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"DEPRECATED:"})," use ",(0,jsx_runtime.jsx)(_components.code,{children:"@zendeskgarden/react-dropdowns.next"}),"\n",(0,jsx_runtime.jsx)(_components.a,{href:"https://zendeskgarden.github.io/react-components/?path=/docs/packages-dropdowns-next-combobox--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Combobox"}),"\ninstead."]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Select",args:{label:"Label",isLabelRegular:!1,isLabelHidden:!1,hasHint:!0,hint:"Hint",hasMessage:!0,message:"Message",hasIcon:!1,items:data.Ne,selectedItem:data.Ne[1],isOpen:!1},argTypes:{hasIcon:{name:"start"},label:{name:"children",table:{category:"Label"}},isLabelRegular:{name:"isRegular",table:{category:"Label"}},isLabelHidden:{name:"hidden",table:{category:"Label"}},hint:{name:"children",table:{category:"Hint"}},message:{name:"children",table:{category:"Message"}},validationLabel:{control:{type:"text"},table:{category:"Message"}},hasHint:{name:"Hint",table:{category:"Story"}},hasMessage:{name:"Message",table:{category:"Story"}},items:{name:"Item[]",table:{category:"Story"}},downshiftProps:{control:"object",table:{category:"Dropdown"}},selectedItem:{table:{category:"Dropdown"}},isOpen:{table:{category:"Dropdown"}},placement:{control:{type:"radio",options:data.SB},table:{category:"Menu"}}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A24482"}},children:args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(SelectStory,{...args,onSelect:selectedItem=>updateArgs({selectedItem}),onStateChange:changes=>changes.hasOwnProperty("isOpen")&&![downshift_esm.ZP.stateChangeTypes.blurButton,downshift_esm.ZP.stateChangeTypes.blurInput].includes(changes.type)&&updateArgs({isOpen:changes.isOpen})})}})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README})]})}const select_stories_select=args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(SelectStory,{...args,onSelect:selectedItem=>updateArgs({selectedItem}),onStateChange:changes=>changes.hasOwnProperty("isOpen")&&![downshift_esm.ZP.stateChangeTypes.blurButton,downshift_esm.ZP.stateChangeTypes.blurInput].includes(changes.type)&&updateArgs({isOpen:changes.isOpen})})};select_stories_select.storyName="Select",select_stories_select.argTypes={hasIcon:{name:"start"},label:{name:"children",table:{category:"Label"}},isLabelRegular:{name:"isRegular",table:{category:"Label"}},isLabelHidden:{name:"hidden",table:{category:"Label"}},hint:{name:"children",table:{category:"Hint"}},message:{name:"children",table:{category:"Message"}},validationLabel:{control:{type:"text"},table:{category:"Message"}},hasHint:{name:"Hint",table:{category:"Story"}},hasMessage:{name:"Message",table:{category:"Story"}},items:{name:"Item[]",table:{category:"Story"}},downshiftProps:{control:"object",table:{category:"Dropdown"}},selectedItem:{table:{category:"Dropdown"}},isOpen:{table:{category:"Dropdown"}},placement:{control:{type:"radio",options:data.SB},table:{category:"Menu"}}},select_stories_select.args={label:"Label",isLabelRegular:!1,isLabelHidden:!1,hasHint:!0,hint:"Hint",hasMessage:!0,message:"Message",hasIcon:!1,items:data.Ne,selectedItem:data.Ne[1],isOpen:!1},select_stories_select.parameters={storySource:{source:'args => {\n  const updateArgs = useArgs()[1];\n  const handleSelect = selectedItem => updateArgs({\n    selectedItem\n  });\n  const handleStateChange = changes => changes.hasOwnProperty("isOpen") && ![Downshift.stateChangeTypes.blurButton, Downshift.stateChangeTypes.blurInput].includes(changes.type) && /*account for Storybook control*/\n  updateArgs({\n    isOpen: changes.isOpen\n  });\n  return <SelectStory {...args} onSelect={handleSelect} onStateChange={handleStateChange} />;\n}'},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A24482"}};const componentMeta={title:"Packages/Dropdowns/Select",component:Select,subcomponents:{Dropdown:Dropdown.L,Field:Field.g,Hint:Hint.k,Label:Label._,Menu:Menu.v,Message:Message.v},tags:["stories-mdx"],includeStories:["select"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const select_stories=componentMeta},"./node_modules/@zendeskgarden/svg-icons/src/12/check-sm-fill.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgCheckSmFill(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,focusable:"false",viewBox:"0 0 12 12","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 6l2 2 4-4"})))}},"./node_modules/@zendeskgarden/svg-icons/src/12/circle-sm-fill.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _circle,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgCircleSmFill(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,focusable:"false",viewBox:"0 0 12 12","aria-hidden":"true"},props),_circle||(_circle=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:6,cy:6,r:2,fill:"currentColor"})))}},"./node_modules/@zendeskgarden/svg-icons/src/12/dash-fill.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgDashFill(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,focusable:"false",viewBox:"0 0 12 12","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:2,d:"M3 6h6"})))}},"./node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgChevronDownStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"})))}},"./node_modules/@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgChevronLeftStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M10.39 12.688a.5.5 0 01-.718.69l-.062-.066-4-5a.5.5 0 01-.054-.542l.054-.082 4-5a.5.5 0 01.83.55l-.05.074L6.641 8l3.75 4.688z"})))}},"./node_modules/@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgChevronRightStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M5.61 3.312a.5.5 0 01.718-.69l.062.066 4 5a.5.5 0 01.054.542l-.054.082-4 5a.5.5 0 01-.83-.55l.05-.074L9.359 8l-3.75-4.688z"})))}},"./node_modules/@zendeskgarden/svg-icons/src/16/circle-sm-fill.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _circle,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgCircleSmFill(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_circle||(_circle=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:8,cy:8,r:6,fill:"currentColor"})))}},"./node_modules/@zendeskgarden/svg-icons/src/16/leaf-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgLeafStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"none",stroke:"currentColor",strokeLinejoin:"round",d:"M11.5 4.5l-11 11 3-3v-6c0-3.314 4-6 11.5-6a.5.5 0 01.5.5c0 7.5-2.686 11.5-6 11.5h-6l8-8zm-4 4H11 7.5zm0-3.5v3.5V5z"})))}},"./node_modules/@zendeskgarden/svg-icons/src/16/plus-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgPlusStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",d:"M7.5 2.5v12m6-6h-12"})))}},"./node_modules/@zendeskgarden/container-field/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>useField});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_uid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-uid/dist/es2015/hooks.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);function useField(idPrefix){const seed=(0,react_uid__WEBPACK_IMPORTED_MODULE_1__.H)(),prefix=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>idPrefix||seed("field_2.1.2")),[idPrefix,seed]),inputId=`${prefix}--input`,labelId=`${prefix}--label`,hintId=`${prefix}--hint`,messageId=`${prefix}--message`;return{getLabelProps:function(_temp){let{id=labelId,htmlFor=inputId,...other}=void 0===_temp?{}:_temp;return{id,htmlFor,"data-garden-container-id":"containers.field","data-garden-container-version":"2.1.2",...other}},getInputProps:function(_temp2,_temp3){let{id=inputId,...other}=void 0===_temp2?{}:_temp2,{isDescribed=!1,hasMessage=!1}=void 0===_temp3?{}:_temp3;return{id,"aria-labelledby":labelId,"aria-describedby":isDescribed||hasMessage?[].concat(isDescribed?hintId:[],hasMessage?messageId:[]).join(" "):null,...other}},getHintProps:function(_temp4){let{id=hintId,...other}=void 0===_temp4?{}:_temp4;return{id,...other}},getMessageProps:function(_temp5){let{id=messageId,...other}=void 0===_temp5?{}:_temp5;return{id,...other}}}}prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},"./packages/dropdowns/src/styled/select/StyledFauxInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>StyledFauxInput});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/forms/src/elements/faux-input/FauxInput.tsx");const StyledFauxInput=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_1__.v).attrs((props=>({"data-garden-id":"dropdowns.faux_input","data-garden-version":"storybook",mediaLayout:!0,theme:props.theme}))).withConfig({displayName:"StyledFauxInput",componentId:"sc-1l592ed-0"})(["cursor:",";min-width:","px;",";"],(props=>!props.disabled&&"pointer"),(props=>props.theme.space.base*(props.isCompact?25:36)),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)("dropdowns.faux_input",props)));StyledFauxInput.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/dropdowns/src/styled/select/StyledInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>StyledInput});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/forms/src/elements/Input.tsx"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const hiddenStyling=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["position:fixed;border:0;clip:rect(1px,1px,1px,1px);padding:0;width:1px;height:1px;overflow:hidden;white-space:nowrap;"]),StyledInput=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_1__.I).attrs({"data-garden-id":"dropdowns.input","data-garden-version":"storybook",isBare:!0}).withConfig({displayName:"StyledInput",componentId:"sc-hzhvmp-0"})(["",";",";"],(props=>props.isHidden&&hiddenStyling),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)("dropdowns.input",props)));StyledInput.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/dropdowns/src/styled/select/StyledSelect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>StyledSelect});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledSelect=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div.attrs({"data-garden-id":"dropdowns.select","data-garden-version":"storybook"}).withConfig({displayName:"StyledSelect",componentId:"sc-xifmwj-0"})(["flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",";"],(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.Z)("dropdowns.select",props)));StyledSelect.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z}},"./packages/forms/src/elements/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/forms/src/types/index.ts"),_utils_useFieldContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/forms/src/utils/useFieldContext.ts"),_utils_useInputGroupContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/forms/src/utils/useInputGroupContext.ts"),_styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/forms/src/styled/text/StyledTextInput.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{onSelect,...props}=_ref;const fieldContext=(0,_utils_useFieldContext__WEBPACK_IMPORTED_MODULE_2__.Z)(),inputGroupContext=(0,_utils_useInputGroupContext__WEBPACK_IMPORTED_MODULE_3__.o)();let combinedProps={ref,onSelect:props.readOnly?(0,_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_4__.Mj)(onSelect,(event=>{event.currentTarget.select()})):onSelect,...props};return inputGroupContext&&(combinedProps={...combinedProps,isCompact:inputGroupContext.isCompact||combinedProps.isCompact,focusInset:void 0===props.focusInset||props.focusInset}),fieldContext&&(combinedProps=fieldContext.getInputProps(combinedProps)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_5__.D,{...combinedProps})}));Input.propTypes={isCompact:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,isBare:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,focusInset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,validation:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(_types__WEBPACK_IMPORTED_MODULE_7__.at)},Input.displayName="Input";try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{isBare:{defaultValue:null,description:"Removes borders and padding",name:"isBare",required:!1,type:{name:"boolean"}},focusInset:{defaultValue:null,description:"Applies inset `box-shadow` styling on focus",name:"focusInset",required:!1,type:{name:"boolean"}},validation:{defaultValue:null,description:"Applies validation state styling",name:"validation",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},isCompact:{defaultValue:null,description:"Applies compact styling",name:"isCompact",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/forms/src/elements/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"packages/forms/src/elements/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./packages/forms/src/utils/useInputGroupContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>InputGroupContext,o:()=>useInputGroupContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const InputGroupContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useInputGroupContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(InputGroupContext)},"./node_modules/react-uid/dist/es2015/hooks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>useUIDSeed});var react=__webpack_require__("./node_modules/react/index.js"),uid=__webpack_require__("./node_modules/react-uid/dist/es2015/uid.js"),createSource=function(prefix){return void 0===prefix&&(prefix=""),{value:1,prefix,uid:(0,uid.D)()}},counter=createSource(),source=react.createContext(createSource()),useUIDState=function(){var context=(0,react.useContext)(source),uid=(0,react.useState)((function(){return function(context){var quartz=context||counter,prefix=function(source){return source?source.prefix:""}(quartz),id=function(source){return source.value++}(quartz),uid=prefix+id;return{uid,gen:function(item){return uid+quartz.uid(item)}}}(context)}))[0];return uid},useUIDSeed=function(){return useUIDState().gen}},"./node_modules/react-uid/dist/es2015/uid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>generateUID,h:()=>uid});var generateUID=function(){var counter=1,map=new WeakMap,uid=function(item,index){return"number"==typeof item||"string"==typeof item?index?"idx-".concat(index):"val-".concat(item):map.has(item)?"uid"+map.get(item):(map.set(item,counter++),uid(item))};return uid},uid=generateUID()}}]);