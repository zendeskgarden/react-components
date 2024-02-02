"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[4980],{"./packages/dropdowns/demo/multiselect.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>multiselect_stories,multiselect:()=>multiselect});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),downshift_esm=__webpack_require__("./node_modules/downshift/dist/downshift.esm.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Reference=__webpack_require__("./node_modules/react-popper/lib/esm/Reference.js"),index_esm=__webpack_require__("./packages/dropdowns/node_modules/@zendeskgarden/container-selection/dist/index.esm.js"),dist_index_esm=__webpack_require__("./packages/dropdowns/node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),useDocument=__webpack_require__("./packages/theming/src/utils/useDocument.ts"),chevron_down_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledMultiselectItemWrapper=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"dropdowns.multiselect_item_wrapper","data-garden-version":"storybook"}).withConfig({displayName:"StyledMultiselectItemWrapper",componentId:"sc-1rb2bye-0"})(["display:inline-flex;align-items:center;margin:","px;max-width:100%;",";"],(props=>props.theme.space.base/2),(props=>(0,retrieveComponentStyles.Z)("dropdowns.multiselect_item_wrapper",props)));StyledMultiselectItemWrapper.defaultProps={theme:theme.Z};var getLineHeight=__webpack_require__("./packages/theming/src/utils/getLineHeight.ts"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts");const StyledMultiselectMoreAnchor=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"dropdowns.multiselect_more_anchor","data-garden-version":"storybook"}).withConfig({displayName:"StyledMultiselectMoreAnchor",componentId:"sc-1m9v46e-0"})(["display:inline-block;cursor:",";padding:","px 0;overflow:hidden;user-select:none;text-overflow:ellipsis;line-height:",";white-space:nowrap;color:",";:hover{text-decoration:",";}",";"],(props=>props.isDisabled?"default":"pointer"),(props=>props.theme.space.base*(props.isCompact?.75:1.5)),(props=>props.isCompact?"1em":(0,getLineHeight.Z)(5*props.theme.space.base,props.theme.fontSizes.md)),(props=>props.isDisabled?(0,getColor.L)("neutralHue",400,props.theme):(0,getColor.L)("primaryHue",600,props.theme)),(props=>!props.isDisabled&&"underline"),(props=>(0,retrieveComponentStyles.Z)("dropdowns.multiselect_more_anchor",props)));StyledMultiselectMoreAnchor.defaultProps={theme:theme.Z};var StyledFauxInput=__webpack_require__("./packages/dropdowns/src/styled/select/StyledFauxInput.ts");const StyledMultiselectItemsContainer=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"dropdowns.multiselect_items_container","data-garden-version":"storybook"}).withConfig({displayName:"StyledMultiselectItemsContainer",componentId:"sc-1jzhet8-0"})(["display:inline-flex;flex-grow:1;flex-wrap:wrap;min-width:0;",";",";"],(props=>(props=>{let margin,padding;if(!props.isBare){margin=(props.isCompact?`-${1.5*props.theme.space.base}px`:`-${2.5*props.theme.space.base}px`)+" 0";const paddingVertical=props.isCompact?"3px":"1px",paddingEnd=`${props.theme.space.base}px`;padding=`${paddingVertical} ${props.theme.rtl?0:paddingEnd} ${paddingVertical} ${props.theme.rtl?paddingEnd:0}`}return(0,styled_components_browser_esm.iv)(["margin:",";padding:",";"],margin,padding)})(props)),(props=>(0,retrieveComponentStyles.Z)("dropdowns.multiselect_items_container",props)));StyledMultiselectItemsContainer.defaultProps={theme:theme.Z};var StyledInput=__webpack_require__("./packages/dropdowns/src/styled/select/StyledInput.ts");const StyledMultiselectInput=(0,styled_components_browser_esm.ZP)(StyledInput.F).attrs({"data-garden-id":"dropdowns.multiselect_input","data-garden-version":"storybook",isBare:!0}).withConfig({displayName:"StyledMultiselectInput",componentId:"sc-1avnf6f-0"})(["flex-basis:","px;flex-grow:1;align-self:center;min-height:0;",";",";"],(props=>15*props.theme.space.base),(props=>(props=>{const margin=props.isVisible?props.theme.space.base/2+"px":0,minWidth=props.isVisible?15*props.theme.space.base+"px":0;let height="0";return props.isVisible&&(height=props.theme.space.base*(props.isCompact?5:8)+"px"),(0,styled_components_browser_esm.iv)(["opacity:",";margin:",";width:",";min-width:",";height:",";"],!props.isVisible&&0,margin,!props.isVisible&&0,minWidth,height)})(props)),(props=>(0,retrieveComponentStyles.Z)("dropdowns.multiselect_input",props)));StyledMultiselectInput.defaultProps={theme:theme.Z};var useDropdownContext=__webpack_require__("./packages/dropdowns/src/utils/useDropdownContext.ts"),useFieldContext=__webpack_require__("./packages/dropdowns/src/utils/useFieldContext.ts"),Dropdown=__webpack_require__("./packages/dropdowns/src/elements/Dropdown/Dropdown.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Multiselect=react.forwardRef(((_ref,ref)=>{let{renderItem,placeholder,maxItems,renderShowMore,inputRef:externalInputRef=null,start,onKeyDown,...props}=_ref;const{popperReferenceElementRef,selectedItems=[],containsMultiselectRef,previousIndexRef,downshift:{getToggleButtonProps,getRootProps,getInputProps,isOpen,closeMenu,inputValue,setState:setDownshiftState,itemToString},setDropdownType}=(0,useDropdownContext.Z)(),{isLabelHovered}=(0,useFieldContext.Z)(),inputRef=(0,react.useRef)(),triggerRef=(0,react.useRef)(),blurTimeoutRef=(0,react.useRef)(),previousIsOpenRef=(0,react.useRef)(void 0),previousIsFocusedRef=(0,react.useRef)(void 0),[isHovered,setIsHovered]=(0,react.useState)(!1),[isFocused,setIsFocused]=(0,react.useState)(!1),[focusedItem,setFocusedItem]=(0,react.useState)(void 0),themeContext=(0,react.useContext)(styled_components_browser_esm.Ni),environment=(0,useDocument.k)(themeContext),{getContainerProps,getItemProps}=(0,index_esm.z)({rtl:themeContext.rtl,focusedItem,selectedItem:void 0,onFocus:item=>{setFocusedItem(item)}});(0,react.useEffect)((()=>{containsMultiselectRef.current=!0;const tempRef=blurTimeoutRef;return()=>{clearTimeout(tempRef.current)}}),[]),(0,react.useEffect)((()=>{inputRef.current&&(isOpen&&!previousIsOpenRef.current||isFocused&&!previousIsFocusedRef.current&&void 0===focusedItem)&&inputRef.current.focus(),previousIsOpenRef.current=isOpen,previousIsFocusedRef.current=isFocused}),[isOpen,inputRef,isFocused,focusedItem]),(0,react.useEffect)((()=>{void 0!==focusedItem&&isOpen&&closeMenu()}),[focusedItem,isOpen,closeMenu]);const{type,...selectProps}=getToggleButtonProps(getRootProps({tabIndex:props.disabled?void 0:-1,onKeyDown:(0,dist_index_esm.Mj)(onKeyDown,(e=>{isOpen?e.nativeEvent.preventDownshiftDefault=!0:inputValue||e.keyCode!==dist_index_esm.nx.HOME||(setFocusedItem(selectedItems[0]),e.preventDefault())})),onFocus:()=>{setIsFocused(!0)},onBlur:e=>{const currentTarget=e.currentTarget;blurTimeoutRef.current=setTimeout((()=>{environment&&!currentTarget.contains(environment.activeElement)&&setIsFocused(!1)}),0)},onMouseEnter:(0,dist_index_esm.Mj)(props.onMouseEnter,(()=>setIsHovered(!0))),onMouseLeave:(0,dist_index_esm.Mj)(props.onMouseLeave,(()=>setIsHovered(!1))),role:null,...props})),renderSelectableItem=(0,react.useCallback)(((item,index)=>{const removeValue=()=>{setDownshiftState({type:Dropdown.S,selectedItem:item}),inputRef.current&&inputRef.current.focus()},renderedItem=renderItem({value:item,removeValue}),focusRef=react.createRef(),clonedChild=react.cloneElement(renderedItem,{...getItemProps({item,focusRef,onKeyDown:e=>{e.keyCode!==dist_index_esm.nx.DELETE&&e.keyCode!==dist_index_esm.nx.BACKSPACE||(e.preventDefault(),removeValue()),e.keyCode!==dist_index_esm.nx.END||inputValue||(inputRef.current&&inputRef.current.focus(),e.preventDefault()),themeContext.rtl?(e.keyCode===dist_index_esm.nx.RIGHT&&0===index&&e.preventDefault(),e.keyCode===dist_index_esm.nx.LEFT&&index===selectedItems.length-1&&(e.preventDefault(),inputRef.current&&inputRef.current.focus())):(e.keyCode===dist_index_esm.nx.LEFT&&0===index&&e.preventDefault(),e.keyCode===dist_index_esm.nx.RIGHT&&index===selectedItems.length-1&&(e.preventDefault(),inputRef.current&&inputRef.current.focus()))},onClick:e=>{e.nativeEvent.preventDownshiftDefault=!0},tabIndex:-1}),size:props.isCompact?"medium":"large"}),key=`${itemToString(item)}-${index}`;return(0,jsx_runtime.jsx)(StyledMultiselectItemWrapper,{children:clonedChild},key)}),[getItemProps,inputValue,renderItem,setDownshiftState,itemToString,selectedItems,props,inputRef,themeContext.rtl]),items=(0,react.useMemo)((()=>{const itemValues=selectedItems||[],output=[];for(let x=0;x<itemValues.length;x++){const item=itemValues[x];if(x<maxItems)if(props.disabled){const renderedItem=react.cloneElement(renderItem({value:item,removeValue:()=>{}}),{size:props.isCompact?"medium":"large"});output.push((0,jsx_runtime.jsx)(StyledMultiselectItemWrapper,{children:renderedItem},x))}else output.push(renderSelectableItem(item,x));else{if(!isFocused&&!inputValue||props.disabled){output.push((0,jsx_runtime.jsx)(StyledMultiselectItemWrapper,{children:(0,jsx_runtime.jsx)(StyledMultiselectMoreAnchor,{isCompact:props.isCompact,isDisabled:props.disabled,children:renderShowMore?renderShowMore(itemValues.length-x):`+ ${itemValues.length-x} more`})},"more-anchor"));break}output.push(renderSelectableItem(item,x))}}return output}),[isFocused,props.disabled,renderSelectableItem,selectedItems,renderItem,inputValue,maxItems,renderShowMore,props.isCompact]),isContainerHovered=isLabelHovered&&!isOpen,isContainerFocused=isOpen||isFocused;return(0,react.useEffect)((()=>{setDropdownType("multiselect")}),[setDropdownType]),(0,jsx_runtime.jsx)(Reference.Z,{children:_ref2=>{let{ref:popperReference}=_ref2;return(0,jsx_runtime.jsxs)(StyledFauxInput.v,{...getContainerProps({...selectProps,isHovered:isContainerHovered,isFocused:isContainerFocused,ref:selectRef=>{popperReference(selectRef),(0,react_merge_refs_esm.Z)([triggerRef,popperReferenceElementRef,ref])(selectRef)}}),children:[start&&(0,jsx_runtime.jsx)(StyledFauxInput.v.StartIcon,{isHovered:isHovered||isLabelHovered&&!isOpen,isFocused:isContainerFocused,isDisabled:props.disabled,children:start}),(0,jsx_runtime.jsxs)(StyledMultiselectItemsContainer,{isBare:props.isBare,isCompact:props.isCompact,children:[items,(0,jsx_runtime.jsx)(StyledMultiselectInput,{...getInputProps({disabled:props.disabled,onFocus:()=>{setFocusedItem(void 0)},onClick:e=>{inputValue&&inputValue.length>0&&isOpen&&(e.nativeEvent.preventDownshiftDefault=!0)},onKeyDown:e=>{inputValue||(themeContext.rtl&&e.keyCode===dist_index_esm.nx.RIGHT&&selectedItems.length>0&&void 0===previousIndexRef.current||!themeContext.rtl&&e.keyCode===dist_index_esm.nx.LEFT&&selectedItems.length>0&&void 0===previousIndexRef.current?setFocusedItem(selectedItems[selectedItems.length-1]):e.keyCode===dist_index_esm.nx.BACKSPACE&&selectedItems.length>0&&(setDownshiftState({type:Dropdown.S,selectedItem:selectedItems[selectedItems.length-1]}),e.nativeEvent.preventDownshiftDefault=!0,e.preventDefault(),e.stopPropagation()))},isVisible:isFocused||inputValue||0===selectedItems.length,isCompact:props.isCompact,role:"combobox",ref:(0,react_merge_refs_esm.Z)([inputRef,externalInputRef]),placeholder:0===selectedItems.length?placeholder:void 0})})]}),!props.isBare&&(0,jsx_runtime.jsx)(StyledFauxInput.v.EndIcon,{isHovered:isHovered||isLabelHovered&&!isOpen,isFocused:isContainerFocused,isDisabled:props.disabled,isRotated:isOpen,children:(0,jsx_runtime.jsx)(chevron_down_stroke.Z,{})})]})}})}));Multiselect.propTypes={isCompact:prop_types_default().bool,isBare:prop_types_default().bool,disabled:prop_types_default().bool,focusInset:prop_types_default().bool,renderItem:prop_types_default().func.isRequired,maxItems:prop_types_default().number,validation:prop_types_default().oneOf(["success","warning","error"])},Multiselect.defaultProps={maxItems:4},Multiselect.displayName="Multiselect";try{Multiselect.displayName="Multiselect",Multiselect.__docgenInfo={description:"",displayName:"Multiselect",props:{placeholder:{defaultValue:null,description:"Defines text that appears in the element when no items are selected",name:"placeholder",required:!1,type:{name:"string"}},maxItems:{defaultValue:{value:"4"},description:"Determines the maximum number of items displayed while collapsed",name:"maxItems",required:!1,type:{name:"number"}},renderShowMore:{defaultValue:null,description:'Overrides the "+ N more" text displayed when the total number of items exceeds `maxItems`\n@param value The number of hidden items\n@returns a replacement for the "+ N more" text',name:"renderShowMore",required:!1,type:{name:"((value: number) => string)"}},renderItem:{defaultValue:null,description:"Renders each item element. Designed to be used with [Tag](/components/tags).\n@param options Rendered item options\n@param options.value The item value\n@param options.removeValue Remove item callback\n@returns the item element",name:"renderItem",required:!0,type:{name:"(options: { value: any; removeValue: () => void; }) => ReactElement<any, string | JSXElementConstructor<any>>"}},inputRef:{defaultValue:null,description:"Provides ref access to the underlying input element",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},start:{defaultValue:null,description:"Defines the icon rendered before the element's content",name:"start",required:!1,type:{name:"any"}},isCompact:{defaultValue:null,description:"Applies compact styling",name:"isCompact",required:!1,type:{name:"boolean"}},focusInset:{defaultValue:null,description:"Applies inset `box-shadow` styling on focus",name:"focusInset",required:!1,type:{name:"boolean"}},validation:{defaultValue:null,description:"Applies validation state styling",name:"validation",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'}]}},disabled:{defaultValue:null,description:"Indicates that the element is not interactive",name:"disabled",required:!1,type:{name:"boolean"}},isBare:{defaultValue:null,description:"Removes borders and padding",name:"isBare",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/elements/Multiselect/Multiselect.tsx#Multiselect"]={docgenInfo:Multiselect.__docgenInfo,name:"Multiselect",path:"packages/dropdowns/src/elements/Multiselect/Multiselect.tsx#Multiselect"})}catch(__react_docgen_typescript_loader_error){}var Field=__webpack_require__("./packages/dropdowns/src/elements/Fields/Field.tsx"),Hint=__webpack_require__("./packages/dropdowns/src/elements/Fields/Hint.tsx"),Label=__webpack_require__("./packages/dropdowns/src/elements/Fields/Label.tsx"),Menu=__webpack_require__("./packages/dropdowns/src/elements/Menu/Menu.tsx"),Message=__webpack_require__("./packages/dropdowns/src/elements/Fields/Message.tsx"),leaf_stroke=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/leaf-stroke.svg")),DropdownFieldStory=__webpack_require__("./packages/dropdowns/demo/stories/DropdownFieldStory.tsx"),Tag=__webpack_require__("./packages/tags/src/elements/Tag.tsx");const MultiselectStory=_ref=>{let{label,isLabelRegular,isLabelHidden,hasHint,hint,hasMessage,message,downshiftProps,selectedItems,onSelect,inputValue,onInputValueChange,onStateChange,isOpen,placement,hasIcon,items,showMore,...args}=_ref;const[filteredItems,setFilteredItems]=(0,react.useState)(items);return(0,react.useEffect)((()=>setFilteredItems(items.filter((item=>item.text.match(new RegExp(inputValue,"gui")))))),[items,inputValue]),(0,jsx_runtime.jsx)(DropdownFieldStory._,{dropdownProps:{downshiftProps,selectedItems,inputValue,onSelect,onInputValueChange,onStateChange,isOpen},label,isLabelRegular,isLabelHidden,hasHint,hint,hasMessage,message,validation:args.validation,validationLabel:args.validationLabel,menuProps:{isCompact:args.isCompact,placement},items:0===filteredItems.length?[{text:"No matches found",value:null,disabled:!0}]:filteredItems,itemProps:{hasIcon,disabled:args.disabled},children:(0,jsx_runtime.jsx)(Multiselect,{...args,start:hasIcon?(0,jsx_runtime.jsx)(leaf_stroke.Z,{}):void 0,renderItem:_ref2=>{let{value,removeValue}=_ref2;return(0,jsx_runtime.jsxs)(Tag.V,{children:[(0,jsx_runtime.jsx)("span",{children:value.text}),(0,jsx_runtime.jsx)(Tag.V.Close,{onClick:removeValue})]})},renderShowMore:showMore?value=>`+ ${value} ${showMore}`:void 0})})};MultiselectStory.displayName="MultiselectStory";var data=__webpack_require__("./packages/dropdowns/demo/stories/data.ts"),README=__webpack_require__("./packages/dropdowns/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Dropdowns/Multiselect",component:Multiselect,subcomponents:{Dropdown:Dropdown.L,Field:Field.g,Hint:Hint.k,Label:Label._,Menu:Menu.v,Message:Message.v}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"DEPRECATED:"})," use ",(0,jsx_runtime.jsx)(_components.code,{children:"@zendeskgarden/react-dropdowns.next"}),"\n",(0,jsx_runtime.jsx)(_components.a,{href:"https://zendeskgarden.github.io/react-components/?path=/docs/packages-dropdowns-next-combobox--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Combobox"}),"\ninstead."]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Multiselect",args:{label:"Label",isLabelRegular:!1,isLabelHidden:!1,hasHint:!0,hint:"Hint",hasMessage:!0,message:"Message",hasIcon:!1,maxItems:4,items:data.AP,selectedItems:[data.AP[0],data.AP[1],data.AP[2],data.AP[3],data.AP[4],data.AP[5]],inputValue:"",isOpen:!1,downshiftProps:{defaultHighlightedIndex:0}},argTypes:{hasIcon:{name:"start"},placeholder:{control:"text"},showMore:{name:"renderShowMore",control:"text"},label:{name:"children",table:{category:"Label"}},isLabelRegular:{name:"isRegular",table:{category:"Label"}},isLabelHidden:{name:"hidden",table:{category:"Label"}},hint:{name:"children",table:{category:"Hint"}},message:{name:"children",table:{category:"Message"}},validationLabel:{control:{type:"text"},table:{category:"Message"}},hasHint:{name:"Hint",table:{category:"Story"}},hasMessage:{name:"Message",table:{category:"Story"}},items:{name:"Item[]",table:{category:"Story"}},downshiftProps:{table:{category:"Dropdown"}},selectedItems:{table:{category:"Dropdown"}},inputValue:{table:{category:"Dropdown"}},isOpen:{table:{category:"Dropdown"}},placement:{control:{type:"radio",options:data.SB},table:{category:"Menu"}}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1512%3A29763"}},children:args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(MultiselectStory,{...args,onSelect:selectedItems=>updateArgs({selectedItems}),onInputValueChange:inputValue=>updateArgs({inputValue}),onStateChange:changes=>changes.hasOwnProperty("isOpen")&&![downshift_esm.ZP.stateChangeTypes.blurButton,downshift_esm.ZP.stateChangeTypes.blurInput].includes(changes.type)&&updateArgs({isOpen:changes.isOpen})})}})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README})]})}const multiselect=args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(MultiselectStory,{...args,onSelect:selectedItems=>updateArgs({selectedItems}),onInputValueChange:inputValue=>updateArgs({inputValue}),onStateChange:changes=>changes.hasOwnProperty("isOpen")&&![downshift_esm.ZP.stateChangeTypes.blurButton,downshift_esm.ZP.stateChangeTypes.blurInput].includes(changes.type)&&updateArgs({isOpen:changes.isOpen})})};multiselect.storyName="Multiselect",multiselect.argTypes={hasIcon:{name:"start"},placeholder:{control:"text"},showMore:{name:"renderShowMore",control:"text"},label:{name:"children",table:{category:"Label"}},isLabelRegular:{name:"isRegular",table:{category:"Label"}},isLabelHidden:{name:"hidden",table:{category:"Label"}},hint:{name:"children",table:{category:"Hint"}},message:{name:"children",table:{category:"Message"}},validationLabel:{control:{type:"text"},table:{category:"Message"}},hasHint:{name:"Hint",table:{category:"Story"}},hasMessage:{name:"Message",table:{category:"Story"}},items:{name:"Item[]",table:{category:"Story"}},downshiftProps:{table:{category:"Dropdown"}},selectedItems:{table:{category:"Dropdown"}},inputValue:{table:{category:"Dropdown"}},isOpen:{table:{category:"Dropdown"}},placement:{control:{type:"radio",options:data.SB},table:{category:"Menu"}}},multiselect.args={label:"Label",isLabelRegular:!1,isLabelHidden:!1,hasHint:!0,hint:"Hint",hasMessage:!0,message:"Message",hasIcon:!1,maxItems:4,items:data.AP,selectedItems:[data.AP[0],data.AP[1],data.AP[2],data.AP[3],data.AP[4],data.AP[5]],inputValue:"",isOpen:!1,downshiftProps:{defaultHighlightedIndex:0}},multiselect.parameters={storySource:{source:'args => {\n  const updateArgs = useArgs()[1];\n  const handleSelect = selectedItems => updateArgs({\n    selectedItems\n  });\n  const handleInputValueChange = inputValue => updateArgs({\n    inputValue\n  });\n  const handleStateChange = changes => changes.hasOwnProperty("isOpen") && ![Downshift.stateChangeTypes.blurButton, Downshift.stateChangeTypes.blurInput].includes(changes.type) && /*account for Storybook control*/\n  updateArgs({\n    isOpen: changes.isOpen\n  });\n  return <MultiselectStory {...args} onSelect={handleSelect} onInputValueChange={handleInputValueChange} onStateChange={handleStateChange} />;\n}'},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1512%3A29763"}};const componentMeta={title:"Packages/Dropdowns/Multiselect",component:Multiselect,subcomponents:{Dropdown:Dropdown.L,Field:Field.g,Hint:Hint.k,Label:Label._,Menu:Menu.v,Message:Message.v},tags:["stories-mdx"],includeStories:["multiselect"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const multiselect_stories=componentMeta,__namedExportsOrder=["multiselect"]},"./packages/dropdowns/src/styled/select/StyledFauxInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>StyledFauxInput});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/forms/src/elements/faux-input/FauxInput.tsx");const StyledFauxInput=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_1__.v).attrs((props=>({"data-garden-id":"dropdowns.faux_input","data-garden-version":"storybook",mediaLayout:!0,theme:props.theme}))).withConfig({displayName:"StyledFauxInput",componentId:"sc-1l592ed-0"})(["cursor:",";min-width:","px;",";"],(props=>!props.disabled&&"pointer"),(props=>props.theme.space.base*(props.isCompact?25:36)),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)("dropdowns.faux_input",props)));StyledFauxInput.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/dropdowns/src/styled/select/StyledInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>StyledInput});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/forms/src/elements/Input.tsx"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const hiddenStyling=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["position:fixed;border:0;clip:rect(1px,1px,1px,1px);padding:0;width:1px;height:1px;overflow:hidden;white-space:nowrap;"]),StyledInput=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_zendeskgarden_react_forms__WEBPACK_IMPORTED_MODULE_1__.I).attrs({"data-garden-id":"dropdowns.input","data-garden-version":"storybook",isBare:!0}).withConfig({displayName:"StyledInput",componentId:"sc-hzhvmp-0"})(["",";",";"],(props=>props.isHidden&&hiddenStyling),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)("dropdowns.input",props)));StyledInput.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/forms/src/elements/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/forms/src/types/index.ts"),_utils_useFieldContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/forms/src/utils/useFieldContext.ts"),_utils_useInputGroupContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/forms/src/utils/useInputGroupContext.ts"),_styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/forms/src/styled/text/StyledTextInput.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{onSelect,...props}=_ref;const fieldContext=(0,_utils_useFieldContext__WEBPACK_IMPORTED_MODULE_2__.Z)(),inputGroupContext=(0,_utils_useInputGroupContext__WEBPACK_IMPORTED_MODULE_3__.o)();let combinedProps={ref,onSelect:props.readOnly?(0,_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_4__.Mj)(onSelect,(event=>{event.currentTarget.select()})):onSelect,...props};return inputGroupContext&&(combinedProps={...combinedProps,isCompact:inputGroupContext.isCompact||combinedProps.isCompact,focusInset:void 0===props.focusInset||props.focusInset}),fieldContext&&(combinedProps=fieldContext.getInputProps(combinedProps)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_5__.D,{...combinedProps})}));Input.propTypes={isCompact:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,isBare:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,focusInset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,validation:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(_types__WEBPACK_IMPORTED_MODULE_7__.at)},Input.displayName="Input";try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{isBare:{defaultValue:null,description:"Removes borders and padding",name:"isBare",required:!1,type:{name:"boolean"}},focusInset:{defaultValue:null,description:"Applies inset `box-shadow` styling on focus",name:"focusInset",required:!1,type:{name:"boolean"}},validation:{defaultValue:null,description:"Applies validation state styling",name:"validation",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'}]}},isCompact:{defaultValue:null,description:"Applies compact styling",name:"isCompact",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/forms/src/elements/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"packages/forms/src/elements/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./packages/forms/src/utils/useInputGroupContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>InputGroupContext,o:()=>useInputGroupContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const InputGroupContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useInputGroupContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(InputGroupContext)},"./packages/tags/src/elements/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Tag_Tag});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),focusStyles=__webpack_require__("./packages/theming/src/utils/focusStyles.ts"),getLineHeight=__webpack_require__("./packages/theming/src/utils/getLineHeight.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledAvatar=(0,styled_components_browser_esm.ZP)((_ref=>{let{children,...props}=_ref;return react.cloneElement(react.Children.only(children),props)})).attrs({"data-garden-id":"tags.avatar","data-garden-version":"storybook"}).withConfig({displayName:"StyledAvatar",componentId:"sc-3kdmgt-0"})(["flex-shrink:0;font-size:0;",";"],(props=>(0,retrieveComponentStyles.Z)("tags.avatar",props)));StyledAvatar.defaultProps={theme:theme.Z};const StyledClose=styled_components_browser_esm.ZP.button.attrs({"data-garden-id":"tags.close","data-garden-version":"storybook"}).withConfig({displayName:"StyledClose",componentId:"sc-d6lrpn-0"})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:opacity 0.25s ease-in-out;opacity:0.8;border:0;background:transparent;cursor:pointer;padding:0;color:inherit;font-size:0;appearance:none;&:hover{opacity:0.9;}&:focus{outline:none;}",";"],(props=>(0,retrieveComponentStyles.Z)("tags.close",props)));StyledClose.defaultProps={theme:theme.Z};const StyledTag=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"tags.tag_view","data-garden-version":"storybook"}).withConfig({displayName:"StyledTag",componentId:"sc-1jvbe03-0"})(["display:inline-flex;flex-wrap:nowrap;align-items:center;justify-content:",";transition:box-shadow 0.1s ease-in-out;box-sizing:border-box;border:0;max-width:100%;overflow:hidden;vertical-align:middle;text-decoration:none;white-space:nowrap;font-weight:",";direction:",";",";&:hover{cursor:default;text-decoration:none;}&:link:hover,&:visited:hover{cursor:pointer;}&:any-link:hover{cursor:pointer;}","{text-decoration:none;}",";& > *{overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;}& b{font-weight:",";}& ","{display:",";}& ","{display:",";}",";"],(props=>props.isRound&&"center"),(props=>!props.isRegular&&props.theme.fontWeights.semibold),(props=>props.theme.rtl?"rtl":"ltr"),(props=>(props=>{let borderRadius,padding,height,fontSize,minWidth,avatarSize;"small"===props.size?(borderRadius=props.theme.borderRadii.sm,padding=props.theme.space.base,height=4*props.theme.space.base,fontSize=props.theme.fontSizes.xs,avatarSize=0):"large"===props.size?(borderRadius=props.theme.borderRadii.md,padding=3*props.theme.space.base,height=8*props.theme.space.base,fontSize=props.theme.fontSizes.sm,avatarSize=6*props.theme.space.base):(borderRadius=props.theme.borderRadii.sm,padding=2*props.theme.space.base,height=5*props.theme.space.base,fontSize=props.theme.fontSizes.sm,avatarSize=4*props.theme.space.base);let avatarBorderRadius="large"===props.size?(0,polished_esm.mA)(`${borderRadius} - 1`):borderRadius;const avatarMargin=(height-avatarSize)/2,avatarTextMargin=props.isRound?avatarMargin:2*avatarMargin;return props.isRound?(borderRadius="50%",padding=0,minWidth=height,avatarBorderRadius="50%"):props.isPill&&(borderRadius="100px",avatarBorderRadius="50%","small"===props.size?(padding=1.5*props.theme.space.base,minWidth=6*props.theme.space.base):minWidth="large"===props.size?12*props.theme.space.base:7.5*props.theme.space.base),(0,styled_components_browser_esm.iv)(["border-radius:",";padding:0 ","px;min-width:",";height:","px;line-height:",";font-size:",";& > *{width:100%;min-width:",";}& ","{margin-",":-","px;margin-",":","px;border-radius:",";width:","px;min-width:","px;height:","px;}& ","{margin-",":-","px;border-radius:",";width:","px;height:","px;}"],borderRadius,padding,minWidth?`${minWidth}px`:`calc(${2*padding}px + 1ch)`,height,(0,getLineHeight.Z)(height,fontSize),fontSize,minWidth?minWidth-2*padding+"px":"1ch",StyledAvatar,props.theme.rtl?"right":"left",padding-avatarMargin,props.theme.rtl?"left":"right",avatarTextMargin,avatarBorderRadius,avatarSize,avatarSize,avatarSize,StyledClose,props.theme.rtl?"left":"right",padding,borderRadius,height,height)})(props)),focusStyles.i,(props=>(props=>{let backgroundColor,foregroundColor,closeColor;if(props.hue){const shade="yellow"===props.hue?400:600;backgroundColor=(0,getColor.L)(props.hue,shade,props.theme),foregroundColor="yellow"===props.hue||"lemon"===props.hue?(0,getColor.L)("yellow",800,props.theme):(0,polished_esm.XV)(backgroundColor,props.theme.palette.grey[800],props.theme.palette.white)}else backgroundColor=(0,getColor.L)("neutralHue",200,props.theme),foregroundColor=(0,getColor.L)("neutralHue",700,props.theme),closeColor=(0,getColor.L)("neutralHue",600,props.theme);return(0,styled_components_browser_esm.iv)(["background-color:",";color:",";&:hover{color:",";}"," & ","{color:",";}"],backgroundColor,foregroundColor,foregroundColor,(0,focusStyles.j)({theme:props.theme,shadowWidth:"sm",selector:"&:focus"}),StyledClose,closeColor)})(props)),(props=>props.theme.fontWeights.semibold),StyledAvatar,(props=>(props.isRound||"small"===props.size)&&"none"),StyledClose,(props=>props.isRound&&"none"),(props=>(0,retrieveComponentStyles.Z)("tags.tag_view",props)));StyledTag.defaultProps={size:"medium",theme:theme.Z};var x_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/12/x-stroke.svg"),useText=__webpack_require__("./packages/theming/src/utils/useText.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CloseComponent=(0,react.forwardRef)(((props,ref)=>{const ariaLabel=(0,useText.X)(CloseComponent,props,"aria-label","Remove");return(0,jsx_runtime.jsx)(StyledClose,{ref,"aria-label":ariaLabel,...props,type:"button",tabIndex:-1,children:(0,jsx_runtime.jsx)(x_stroke.Z,{})})}));CloseComponent.displayName="Tag.Close";const Close=CloseComponent;try{Close.displayName="Tag.Close",Close.__docgenInfo={description:"",displayName:"Tag.Close",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tags/src/elements/Close.tsx#Tag.Close"]={docgenInfo:Tag.Close.__docgenInfo,name:"Tag.Close",path:"packages/tags/src/elements/Close.tsx#Tag.Close"})}catch(__react_docgen_typescript_loader_error){}const AvatarComponent=props=>(0,jsx_runtime.jsx)(StyledAvatar,{...props});AvatarComponent.displayName="AvatarComponent",AvatarComponent.displayName="Tag.Avatar";const Avatar=AvatarComponent;try{Avatar.displayName="Tag.Avatar",Avatar.__docgenInfo={description:"",displayName:"Tag.Avatar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tags/src/elements/Avatar.tsx#Tag.Avatar"]={docgenInfo:Tag.Avatar.__docgenInfo,name:"Tag.Avatar",path:"packages/tags/src/elements/Avatar.tsx#Tag.Avatar"})}catch(__react_docgen_typescript_loader_error){}const TagComponent=(0,react.forwardRef)(((_ref,ref)=>{let{size,hue,...otherProps}=_ref;return(0,jsx_runtime.jsx)(StyledTag,{ref,size,hue,...otherProps})}));TagComponent.displayName="Tag",TagComponent.propTypes={size:prop_types_default().oneOf(["small","medium","large"]),hue:prop_types_default().string,isPill:prop_types_default().bool,isRound:prop_types_default().bool,isRegular:prop_types_default().bool},TagComponent.defaultProps={size:"medium"};const Tag_Tag=TagComponent;Tag_Tag.Avatar=Avatar,Tag_Tag.Close=Close;try{Tag_Tag.displayName="Tag",Tag_Tag.__docgenInfo={description:"",displayName:"Tag",props:{size:{defaultValue:{value:"medium"},description:"Adjusts font size and padding",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},hue:{defaultValue:null,description:"Sets the color of the tag. Refer to\n[PALETTE](/components/palette#palette)\nfor available colors. Accepts any hex value.",name:"hue",required:!1,type:{name:"string"}},isPill:{defaultValue:null,description:"Applies pill styling",name:"isPill",required:!1,type:{name:"boolean"}},isRound:{defaultValue:null,description:"Applies styles to round the tag",name:"isRound",required:!1,type:{name:"boolean"}},isRegular:{defaultValue:null,description:"Applies regular (non-bold) font weight",name:"isRegular",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tags/src/elements/Tag.tsx#Tag"]={docgenInfo:Tag_Tag.__docgenInfo,name:"Tag",path:"packages/tags/src/elements/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}}}]);