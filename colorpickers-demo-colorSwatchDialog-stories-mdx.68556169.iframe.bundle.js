"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[8498],{"./packages/colorpickers/demo/colorSwatchDialog.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,controlled:()=>controlled,default:()=>colorSwatchDialog_stories,uncontrolled:()=>uncontrolled});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Button=__webpack_require__("./packages/buttons/src/elements/Button.tsx"),types=__webpack_require__("./packages/modals/src/types/index.ts"),useText=__webpack_require__("./packages/theming/src/utils/useText.ts"),index_esm=__webpack_require__("./node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),chevron_down_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg"),ColorSwatch=__webpack_require__("./packages/colorpickers/src/elements/ColorSwatch/index.tsx"),StyledButton=__webpack_require__("./packages/colorpickers/src/styled/ColorpickerDialog/StyledButton.ts"),StyledButtonPreview=__webpack_require__("./packages/colorpickers/src/styled/ColorpickerDialog/StyledButtonPreview.ts"),StyledTooltipModal=__webpack_require__("./packages/colorpickers/src/styled/ColorpickerDialog/StyledTooltipModal.ts"),StyledTooltipBody=__webpack_require__("./packages/colorpickers/src/styled/ColorpickerDialog/StyledTooltipBody.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ColorSwatchDialog=(0,react.forwardRef)(((_ref,ref)=>{let{colors,rowIndex,colIndex,selectedRowIndex,selectedColIndex,defaultRowIndex,defaultColIndex,defaultSelectedRowIndex,defaultSelectedColIndex,placement,onChange,onSelect,hasArrow,isAnimated,popperModifiers,zIndex,isOpen,focusInset,disabled,buttonProps,onDialogChange,children,"aria-label":ariaLabel,...props}=_ref;const isControlled=null!==rowIndex&&null!==colIndex&&void 0!==rowIndex&&void 0!==colIndex||null!==selectedRowIndex&&null!==selectedColIndex&&void 0!==selectedRowIndex&&void 0!==selectedColIndex,isDialogControlled=null!=isOpen,buttonRef=(0,react.useRef)(null),colorSwatchRef=(0,react.useRef)(null),[referenceElement,setReferenceElement]=(0,react.useState)(),[uncontrolledSelectedRowIndex,setUncontrolledSelectedRowIndex]=(0,react.useState)(defaultSelectedRowIndex||0),[uncontrolledSelectedColIndex,setUncontrolledSelectedColIndex]=(0,react.useState)(defaultSelectedColIndex||0),[uncontrolledRowIndex,setUncontrolledRowIndex]=(0,react.useState)(defaultRowIndex||0),[uncontrolledColIndex,setUncontrolledColIndex]=(0,react.useState)(defaultColIndex||0),ariaLabelText=(0,useText.X)(ColorSwatchDialog,{"aria-label":ariaLabel},"aria-label","Color swatch");let uncontrolledSelectedColor,controlledSelectedColor;(0,react.useEffect)((()=>{isDialogControlled&&setReferenceElement(isOpen?buttonRef.current:null)}),[isOpen,isDialogControlled]),uncontrolledSelectedRowIndex>-1&&uncontrolledSelectedColIndex>-1&&(uncontrolledSelectedColor=colors[uncontrolledSelectedRowIndex][uncontrolledSelectedColIndex]),void 0!==selectedRowIndex&&void 0!==selectedColIndex&&selectedRowIndex>-1&&selectedColIndex>-1&&(controlledSelectedColor=colors[selectedRowIndex][selectedColIndex]);const closeDialog=()=>{setUncontrolledRowIndex(uncontrolledSelectedRowIndex),setUncontrolledColIndex(uncontrolledSelectedColIndex),setReferenceElement(null),onDialogChange&&onDialogChange({isOpen:!1})},onClick=(0,index_esm.Mj)(props.onClick,(()=>{referenceElement?closeDialog():(setReferenceElement(buttonRef.current),onDialogChange&&onDialogChange({isOpen:!0}))}));return(0,react.useEffect)((()=>{if(referenceElement&&colorSwatchRef.current){const focusableButton=colorSwatchRef.current.querySelector('[tabindex="0"]'),selectedCell=colorSwatchRef.current.querySelector('[aria-selected="true"]');selectedCell?selectedCell.children[0].focus():focusableButton?.focus()}}),[referenceElement]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children?(0,react.cloneElement)(react.Children.only(children),{onClick,ref:buttonRef}):(0,jsx_runtime.jsxs)(StyledButton.S,{disabled,focusInset,ref:buttonRef,onClick,...buttonProps,children:[(0,jsx_runtime.jsx)(StyledButtonPreview.a,{backgroundColor:isControlled?controlledSelectedColor?.value:uncontrolledSelectedColor?.value}),(0,jsx_runtime.jsx)(Button.z.EndIcon,{isRotated:null!=referenceElement,children:(0,jsx_runtime.jsx)(chevron_down_stroke.Z,{})})]}),(0,jsx_runtime.jsx)(StyledTooltipModal.i,{ref,zIndex,hasArrow,focusOnMount:!1,placement,isAnimated,popperModifiers,referenceElement,onClose:closeDialog,"aria-label":ariaLabelText,...props,children:(0,jsx_runtime.jsx)(StyledTooltipBody.K,{children:(0,jsx_runtime.jsx)(ColorSwatch.b,{colors,ref:colorSwatchRef,rowIndex,colIndex,selectedRowIndex,selectedColIndex,defaultRowIndex:uncontrolledRowIndex,defaultColIndex:uncontrolledColIndex,defaultSelectedRowIndex:uncontrolledSelectedRowIndex,defaultSelectedColIndex:uncontrolledSelectedColIndex,onChange:(rowIdx,colIdx)=>{!1===isControlled&&(setUncontrolledRowIndex(rowIdx),setUncontrolledColIndex(colIdx)),onChange&&onChange(rowIdx,colIdx)},onSelect:(rowIdx,colIdx)=>{!1===isControlled&&(setUncontrolledSelectedRowIndex(rowIdx),setUncontrolledSelectedColIndex(colIdx)),onSelect&&onSelect(rowIdx,colIdx)}})})})]})}));ColorSwatchDialog.propTypes={...ColorSwatch.b.propTypes,placement:prop_types_default().oneOf(types.r),onDialogChange:prop_types_default().func,disabled:prop_types_default().bool,buttonProps:prop_types_default().object,popperModifiers:prop_types_default().any,zIndex:prop_types_default().number,hasArrow:prop_types_default().bool,isAnimated:prop_types_default().bool,focusInset:prop_types_default().bool,isOpen:prop_types_default().bool},ColorSwatchDialog.defaultProps={placement:"bottom-start",isAnimated:!0,zIndex:1e3,hasArrow:!1},ColorSwatchDialog.displayName="ColorSwatchDialog";try{ColorSwatchDialog.displayName="ColorSwatchDialog",ColorSwatchDialog.__docgenInfo={description:"",displayName:"ColorSwatchDialog",props:{placement:{defaultValue:{value:"bottom-start"},description:"Adjusts the placement of the color dialog",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"end"'},{value:'"end-top"'},{value:'"end-bottom"'},{value:'"start"'},{value:'"start-top"'},{value:'"start-bottom"'}]}},disabled:{defaultValue:null,description:"Disables the color dialog button",name:"disabled",required:!1,type:{name:"boolean"}},popperModifiers:{defaultValue:null,description:"Modifies [Popper instance](https://popper.js.org/docs/v2/modifiers/) to customize positioning logic",name:"popperModifiers",required:!1,type:{name:"Partial<StrictModifier<any> | Partial<Modifier<any, any>>>[]"}},zIndex:{defaultValue:{value:"1000"},description:"Sets the `z-index` of the color dialog",name:"zIndex",required:!1,type:{name:"number"}},hasArrow:{defaultValue:{value:"false"},description:"Adds an arrow to the color dialog",name:"hasArrow",required:!1,type:{name:"boolean"}},isAnimated:{defaultValue:{value:"true"},description:"Animates the color dialog",name:"isAnimated",required:!1,type:{name:"boolean"}},focusInset:{defaultValue:null,description:"Applies inset `box-shadow` styling on focus",name:"focusInset",required:!1,type:{name:"boolean"}},buttonProps:{defaultValue:null,description:"Passes HTML attributes to the color dialog button element",name:"buttonProps",required:!1,type:{name:"HTMLAttributes<HTMLButtonElement>"}},isOpen:{defaultValue:null,description:"Opens the dialog in a controlled color swatch dialog",name:"isOpen",required:!1,type:{name:"boolean"}},onDialogChange:{defaultValue:null,description:"Handles dialog changes\n@param changes The changed dialog state",name:"onDialogChange",required:!1,type:{name:"((changes: { isOpen: boolean; }) => void)"}},colors:{defaultValue:null,description:"Sets the two-dimension array of labeled HEX and RGB/A string colors",name:"colors",required:!0,type:{name:"{ value: string; label: string; }[][]"}},rowIndex:{defaultValue:null,description:"Sets the focused row index in a controlled color swatch",name:"rowIndex",required:!1,type:{name:"number"}},colIndex:{defaultValue:null,description:"Sets the focused column index in a controlled color swatch.\nCan be set to `-1` to clear the row focus.",name:"colIndex",required:!1,type:{name:"number"}},selectedRowIndex:{defaultValue:null,description:"Sets the selected row index in a controlled color swatch.\nCan be set to `-1` to clear the column focus.",name:"selectedRowIndex",required:!1,type:{name:"number"}},selectedColIndex:{defaultValue:null,description:"Sets the selected column index in a controlled color swatch.\nCan be set to `-1` to clear the row selection.",name:"selectedColIndex",required:!1,type:{name:"number"}},defaultRowIndex:{defaultValue:null,description:"Sets the default focused row index in an uncontrolled color swatch.\nCan be set to `-1` to clear the column selection.",name:"defaultRowIndex",required:!1,type:{name:"number"}},defaultColIndex:{defaultValue:null,description:"Sets the default focused column index in an uncontrolled color swatch",name:"defaultColIndex",required:!1,type:{name:"number"}},defaultSelectedRowIndex:{defaultValue:null,description:"Sets the default selected row index in an uncontrolled color swatch",name:"defaultSelectedRowIndex",required:!1,type:{name:"number"}},defaultSelectedColIndex:{defaultValue:null,description:"Sets the default selected column index in an uncontrolled color swatch",name:"defaultSelectedColIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Handles color swatch changes",name:"onChange",required:!1,type:{name:"((rowIndex: number, colIndex: number) => void)"}},onSelect:{defaultValue:null,description:"Handles color swatch select event",name:"onSelect",required:!1,type:{name:"((rowIndex: number, colIndex: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/colorpickers/src/elements/ColorSwatchDialog/index.tsx#ColorSwatchDialog"]={docgenInfo:ColorSwatchDialog.__docgenInfo,name:"ColorSwatchDialog",path:"packages/colorpickers/src/elements/ColorSwatchDialog/index.tsx#ColorSwatchDialog"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var Grid=__webpack_require__("./packages/grid/src/elements/Grid.tsx"),Row=__webpack_require__("./packages/grid/src/elements/Row.tsx"),Col=__webpack_require__("./packages/grid/src/elements/Col.tsx");const ColorSwatchDialogStory=args=>(0,jsx_runtime.jsx)(Grid.r,{children:(0,jsx_runtime.jsx)(Row.X,{style:{height:"calc(100vh - 80px)"},children:(0,jsx_runtime.jsx)(Col.J,{textAlign:"center",alignSelf:"center",children:(0,jsx_runtime.jsx)(ColorSwatchDialog,{...args})})})});ColorSwatchDialogStory.displayName="ColorSwatchDialogStory";var data=__webpack_require__("./packages/colorpickers/demo/stories/data.ts"),README=__webpack_require__("./packages/colorpickers/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Colorpickers/ColorSwatchDialog",component:ColorSwatchDialog,args:{buttonProps:{"aria-label":"Label"},"aria-label":"Title",colors:data.j,isAnimated:!0},argTypes:{focusInset:{control:"boolean"},hasArrow:{control:"boolean"},popperModifiers:{control:"array"},zIndex:{control:"number"}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=4102%3A31515"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Uncontrolled",argTypes:{defaultColIndex:{control:"number"},defaultRowIndex:{control:"number"},defaultSelectedColIndex:{control:"number"},defaultSelectedRowIndex:{control:"number"},colIndex:{control:!1},rowIndex:{control:!1},selectedColIndex:{control:!1},selectedRowIndex:{control:!1}},children:args=>(0,jsx_runtime.jsx)(ColorSwatchDialogStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"controlled",children:"Controlled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Controlled",args:{rowIndex:0,colIndex:5,selectedRowIndex:0,selectedColIndex:5},argTypes:{defaultColIndex:{control:!1},defaultRowIndex:{control:!1},defaultSelectedColIndex:{control:!1},defaultSelectedRowIndex:{control:!1}},children:args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(ColorSwatchDialogStory,{...args,onChange:(rowIndex,colIndex)=>updateArgs({rowIndex,colIndex}),onSelect:(selectedRowIndex,selectedColIndex)=>updateArgs({selectedRowIndex,selectedColIndex})})}})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README})]})}const uncontrolled=args=>(0,jsx_runtime.jsx)(ColorSwatchDialogStory,{...args});uncontrolled.storyName="Uncontrolled",uncontrolled.argTypes={defaultColIndex:{control:"number"},defaultRowIndex:{control:"number"},defaultSelectedColIndex:{control:"number"},defaultSelectedRowIndex:{control:"number"},colIndex:{control:!1},rowIndex:{control:!1},selectedColIndex:{control:!1},selectedRowIndex:{control:!1}},uncontrolled.parameters={storySource:{source:"args => <ColorSwatchDialogStory {...args} />"}};const controlled=args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(ColorSwatchDialogStory,{...args,onChange:(rowIndex,colIndex)=>updateArgs({rowIndex,colIndex}),onSelect:(selectedRowIndex,selectedColIndex)=>updateArgs({selectedRowIndex,selectedColIndex})})};controlled.storyName="Controlled",controlled.argTypes={defaultColIndex:{control:!1},defaultRowIndex:{control:!1},defaultSelectedColIndex:{control:!1},defaultSelectedRowIndex:{control:!1}},controlled.args={rowIndex:0,colIndex:5,selectedRowIndex:0,selectedColIndex:5},controlled.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleChange = (rowIndex, colIndex) => updateArgs({\n    rowIndex,\n    colIndex\n  });\n  const handleSelect = (selectedRowIndex, selectedColIndex) => updateArgs({\n    selectedRowIndex,\n    selectedColIndex\n  });\n  return <ColorSwatchDialogStory {...args} onChange={handleChange} onSelect={handleSelect} />;\n}"}};const componentMeta={title:"Packages/Colorpickers/ColorSwatchDialog",parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=4102%3A31515"}},component:ColorSwatchDialog,args:{buttonProps:{"aria-label":"Label"},"aria-label":"Title",colors:data.j,isAnimated:!0},argTypes:{focusInset:{control:"boolean"},hasArrow:{control:"boolean"},popperModifiers:{control:"array"},zIndex:{control:"number"}},tags:["stories-mdx"],includeStories:["uncontrolled","controlled"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const colorSwatchDialog_stories=componentMeta,__namedExportsOrder=["uncontrolled","controlled"]},"./node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgChevronDownStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"})))}},"./packages/colorpickers/src/styled/ColorpickerDialog/StyledButton.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>StyledButton});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/buttons/src/elements/Button.tsx");const StyledButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_1__.z).attrs({isNeutral:!0,"data-garden-id":"colorpickers.colordialog_button","data-garden-version":"storybook"}).withConfig({displayName:"StyledButton",componentId:"sc-101xjve-0"})(["padding:0;width:","px;max-width:","px;&:last-of-type:not(:first-child){border-top-","-radius:"," !important;border-bottom-","-radius:"," !important;}",";"],(props=>17*props.theme.space.base),(props=>17*props.theme.space.base),(props=>props.theme.rtl?"left":"right"),(props=>props.theme.borderRadii.md),(props=>props.theme.rtl?"left":"right"),(props=>props.theme.borderRadii.md),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)("colorpickers.colordialog_button",props)));StyledButton.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/colorpickers/src/styled/ColorpickerDialog/StyledTooltipBody.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>StyledTooltipBody});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_modals__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/modals/src/elements/TooltipModal/TooltipModal.tsx"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const COMPONENT_ID="colorpickers.colordialog_tooltipmodal_body",StyledTooltipBody=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_zendeskgarden_react_modals__WEBPACK_IMPORTED_MODULE_1__.V.Body).attrs({"data-garden-id":COMPONENT_ID,"data-garden-version":"storybook"}).withConfig({displayName:"StyledTooltipBody",componentId:"sc-6gsgsy-0"})(["padding:0;",";"],(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)(COMPONENT_ID,props)));StyledTooltipBody.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/colorpickers/src/styled/ColorpickerDialog/StyledTooltipModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>StyledTooltipModal});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_modals__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/modals/src/elements/TooltipModal/TooltipModal.tsx"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const COMPONENT_ID="colorpickers.colordialog_tooltipmodal",StyledTooltipModal=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_zendeskgarden_react_modals__WEBPACK_IMPORTED_MODULE_1__.V).attrs({"data-garden-id":COMPONENT_ID,"data-garden-version":"storybook"}).withConfig({displayName:"StyledTooltipModal",componentId:"sc-o022s8-0"})(["width:auto !important;",";"],(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)(COMPONENT_ID,props)));StyledTooltipModal.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/modals/src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>PLACEMENT});__webpack_require__("./node_modules/react/index.js");const PLACEMENT=["auto","top","top-start","top-end","bottom","bottom-start","bottom-end","end","end-top","end-bottom","start","start-top","start-bottom"]}}]);