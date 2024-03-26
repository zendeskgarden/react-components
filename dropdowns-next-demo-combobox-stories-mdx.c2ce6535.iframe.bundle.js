"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[7705],{"./packages/dropdowns.next/demo/combobox.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,controlled:()=>controlled,default:()=>combobox_stories,uncontrolled:()=>uncontrolled});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),Combobox=__webpack_require__("./packages/dropdowns.next/src/elements/combobox/Combobox.tsx"),useFieldContext=__webpack_require__("./packages/dropdowns.next/src/context/useFieldContext.ts"),StyledHint=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledHint.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Hint=(0,react.forwardRef)(((props,ref)=>{const{hintProps,setHasHint}=(0,useFieldContext.A)();return(0,react.useEffect)((()=>(setHasHint(!0),()=>setHasHint(!1))),[setHasHint]),(0,jsx_runtime.jsx)(StyledHint.d,{...hintProps,...props,ref})}));Hint.displayName="Hint";try{Hint.displayName="Hint",Hint.__docgenInfo={description:"",displayName:"Hint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns.next/src/elements/combobox/Hint.tsx#Hint"]={docgenInfo:Hint.__docgenInfo,name:"Hint",path:"packages/dropdowns.next/src/elements/combobox/Hint.tsx#Hint"})}catch(__react_docgen_typescript_loader_error){}var Label=__webpack_require__("./packages/dropdowns.next/src/elements/combobox/Label.tsx"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),types=__webpack_require__("./packages/forms/src/types/index.ts"),StyledMessage=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledMessage.ts");const Message=(0,react.forwardRef)(((props,ref)=>{const{messageProps,setHasMessage}=(0,useFieldContext.A)();return(0,react.useEffect)((()=>(setHasMessage(!0),()=>setHasMessage(!1))),[setHasMessage]),(0,jsx_runtime.jsx)(StyledMessage.z,{...messageProps,...props,ref})}));Message.displayName="Message",Message.propTypes={validation:prop_types_default().oneOf(types.oO),validationLabel:prop_types_default().string};try{Message.displayName="Message",Message.__docgenInfo={description:"",displayName:"Message",props:{validation:{defaultValue:null,description:"Applies validation state styling",name:"validation",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},validationLabel:{defaultValue:null,description:"Defines the `aria-label` for the validation icon",name:"validationLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns.next/src/elements/combobox/Message.tsx#Message"]={docgenInfo:Message.__docgenInfo,name:"Message",path:"packages/dropdowns.next/src/elements/combobox/Message.tsx#Message"})}catch(__react_docgen_typescript_loader_error){}var Option=__webpack_require__("./packages/dropdowns.next/src/elements/combobox/Option.tsx"),index_esm=__webpack_require__("./node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),useText=__webpack_require__("./packages/theming/src/utils/useText.ts"),useComboboxContext=__webpack_require__("./packages/dropdowns.next/src/context/useComboboxContext.ts"),StyledOption=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledOption.ts"),StyledOptionContent=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledOptionContent.ts"),StyledOptionTypeIcon=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledOptionTypeIcon.ts"),StyledOptGroup=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledOptGroup.ts"),StyledListboxSeparator=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledListboxSeparator.ts");const OptGroup=(0,react.forwardRef)(((_ref,ref)=>{let{children,content,icon,label,"aria-label":ariaLabel,onMouseDown,...props}=_ref;const{getOptGroupProps,isCompact}=(0,useComboboxContext.A)(),optGroupProps=getOptGroupProps({"aria-label":(0,useText.F)(OptGroup,{"aria-label":ariaLabel},"aria-label","Group",!label)||label});return(0,jsx_runtime.jsx)(StyledOption.L,{isCompact,$type:"group",onMouseDown:(0,index_esm.mK)(onMouseDown,(event=>event.preventDefault())),role:"none",...props,ref,children:(0,jsx_runtime.jsxs)(StyledOptionContent.A,{children:[(content||label)&&(0,jsx_runtime.jsxs)(StyledOption.L,{as:"div",isCompact,$type:"header",children:[icon&&(0,jsx_runtime.jsx)(StyledOptionTypeIcon.u,{isCompact,type:"header",children:icon}),content||label]}),(0,jsx_runtime.jsxs)(StyledOptGroup.Q,{isCompact,...optGroupProps,children:[(0,jsx_runtime.jsx)(StyledListboxSeparator.w,{role:"none"}),children]})]})})}));OptGroup.displayName="OptGroup",OptGroup.propTypes={content:prop_types_default().any,icon:prop_types_default().any,label:prop_types_default().string};try{OptGroup.displayName="OptGroup",OptGroup.__docgenInfo={description:"",displayName:"OptGroup",props:{content:{defaultValue:null,description:"Renders content for the option group (defaults to `label` text)",name:"content",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Accepts an icon to display",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},label:{defaultValue:null,description:"Sets the text label of the option group",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns.next/src/elements/combobox/OptGroup.tsx#OptGroup"]={docgenInfo:OptGroup.__docgenInfo,name:"OptGroup",path:"packages/dropdowns.next/src/elements/combobox/OptGroup.tsx#OptGroup"})}catch(__react_docgen_typescript_loader_error){}var Tag=__webpack_require__("./packages/dropdowns.next/src/elements/combobox/Tag.tsx"),user_solo_stroke=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg")),search_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/search-stroke.svg"),leaf_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/leaf-stroke.svg"),Grid=__webpack_require__("./packages/grid/src/elements/Grid.tsx"),Row=__webpack_require__("./packages/grid/src/elements/Row.tsx"),Col=__webpack_require__("./packages/grid/src/elements/Col.tsx"),Field=__webpack_require__("./packages/dropdowns.next/src/elements/combobox/Field.tsx"),utils=__webpack_require__("./packages/dropdowns.next/src/elements/combobox/utils.ts");const toLabel=option=>option.label||(0,utils.dI)(option),ComboboxOption=_ref=>{let{icon,meta,...props}=_ref;const Svg=props.tagProps?.isPill?user_solo_stroke.A:leaf_stroke.A;return(0,jsx_runtime.jsx)(Option.c,{icon:icon?(0,jsx_runtime.jsx)(Svg,{}):void 0,...props,children:meta&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{children:props.children||toLabel(props)}),(0,jsx_runtime.jsx)(Option.c.Meta,{children:meta})]})})};ComboboxOption.displayName="ComboboxOption";const ComboboxStory=_ref2=>{let{label,isLabelRegular,isLabelHidden,hint,startIcon,renderValue,endIcon,options:_options,onChange,message,validation,validationLabel,...args}=_ref2;const[options,setOptions]=(0,react.useState)(_options),getOptions=(0,react.useCallback)((()=>{const retVal=[];return _options.forEach((option=>{"options"in option?retVal.push(...option.options):retVal.push(option)})),retVal}),[_options]),getTagProps=option=>{const Svg=option.tagProps?.isPill?user_solo_stroke.A:leaf_stroke.A,children=option.icon?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Tag.v.Avatar,{children:(0,jsx_runtime.jsx)("span",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,jsx_runtime.jsx)(Svg,{})})})," ",option.tagProps?.children||toLabel(option)]}):void 0;return{...option.tagProps,children}};return(0,jsx_runtime.jsx)(Grid.x,{children:(0,jsx_runtime.jsx)(Row.f,{justifyContent:"center",style:{height:"calc(100vh - 80px)"},children:(0,jsx_runtime.jsx)(Col.f,{alignSelf:"center",children:(0,jsx_runtime.jsxs)(Field.D,{children:[(0,jsx_runtime.jsx)(Label.J,{hidden:isLabelHidden,isRegular:isLabelRegular,children:label}),hint&&(0,jsx_runtime.jsx)(Hint,{children:hint}),(0,jsx_runtime.jsx)(Combobox.G,{validation,...args,startIcon:startIcon?(0,jsx_runtime.jsx)(search_stroke.A,{}):void 0,renderExpandTags:value=>`+ ${value} more`,renderValue:renderValue?_ref3=>{let{selection,inputValue}=_ref3;return inputValue?`🌱 ${inputValue}`:selection&&!Array.isArray(selection)?`🌱 ${toLabel(selection)}`:inputValue}:void 0,endIcon:endIcon?(0,jsx_runtime.jsx)(leaf_stroke.A,{}):void 0,onChange:(0,index_esm.mK)((changes=>{if(args.isAutocomplete&&args.isEditable&&void 0!==changes.inputValue){const value=changes.inputValue;if(""===value)setOptions(_options);else{const regex=new RegExp(value.replace(/[.*+?^${}()|[\]\\]/giu,"\\$&"),"gui"),matchingOptions=getOptions().filter((option=>toLabel(option).match(regex)));setOptions(matchingOptions)}}}),onChange),children:0===options.length?(0,jsx_runtime.jsx)(Option.c,{label:"No options found",isDisabled:!0,value:""}):options.map(((_ref4,index)=>{let{icon,...option}=_ref4;return"options"in option?(0,jsx_runtime.jsx)(OptGroup,{icon:icon?(0,jsx_runtime.jsx)(leaf_stroke.A,{}):void 0,...option,children:option.options.map((_ref5=>{let{icon:groupIcon,...groupOption}=_ref5;return(0,jsx_runtime.jsx)(ComboboxOption,{icon:groupIcon,...groupOption,tagProps:getTagProps({icon:groupIcon,...groupOption})},(0,utils.dI)(groupOption))}))},index):(0,jsx_runtime.jsx)(ComboboxOption,{icon,...option,tagProps:getTagProps({icon,...option})},(0,utils.dI)(option))}))}),message&&(0,jsx_runtime.jsx)(Message,{validation,validationLabel,children:message})]})})})})};ComboboxStory.displayName="ComboboxStory";var data=__webpack_require__("./packages/dropdowns.next/demo/stories/data.ts"),README=__webpack_require__("./packages/dropdowns.next/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Packages/Dropdowns.Next/Combobox",component:Combobox.G,subcomponents:{Hint,Label:Label.J,Message,Option:Option.c,"Option.Meta":Option.c.Meta,OptGroup,Tag:Tag.v,"Tag.Avatar":Tag.v.Avatar},args:{label:"Label",isLabelRegular:!1,isLabelHidden:!1,hint:"Hint",startIcon:!1,renderValue:!1,endIcon:!1,listboxAriaLabel:"Label",message:"Message",validationLabel:"Label",isEditable:!0,listboxMaxHeight:Combobox.G.defaultProps.listboxMaxHeight,listboxZIndex:Combobox.G.defaultProps.listboxZIndex,options:data.l},argTypes:{label:{name:"children",table:{category:"Label"}},hint:{name:"children",table:{category:"Hint"}},startIcon:{control:"boolean"},renderValue:{control:"boolean"},endIcon:{control:"boolean"},appendListboxToNode:{control:!1},message:{name:"children",table:{category:"Message"}},validationLabel:{table:{category:"Message"}},isLabelRegular:{name:"isRegular",table:{category:"Label"}},isLabelHidden:{name:"hidden",table:{category:"Label"}}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A24482"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.uY,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Uncontrolled",argTypes:{activeIndex:{control:!1},inputValue:{control:!1},isExpanded:{control:!1},selectionValue:{control:!1}},children:args=>(0,jsx_runtime.jsx)(ComboboxStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"controlled",children:"Controlled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Controlled",args:{isExpanded:!1,inputValue:"",activeIndex:-1,selectionValue:null},argTypes:{defaultExpanded:{control:!1},defaultSelectionValue:{control:!1}},children:args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(ComboboxStory,{...args,onChange:changes=>{const{type,...args}=changes;updateArgs(args)}})}})}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:README})]})}const uncontrolled=args=>(0,jsx_runtime.jsx)(ComboboxStory,{...args});uncontrolled.storyName="Uncontrolled",uncontrolled.argTypes={activeIndex:{control:!1},inputValue:{control:!1},isExpanded:{control:!1},selectionValue:{control:!1}},uncontrolled.parameters={storySource:{source:"args => <ComboboxStory {...args} />"}};const controlled=args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(ComboboxStory,{...args,onChange:changes=>{const{type,...args}=changes;updateArgs(args)}})};controlled.storyName="Controlled",controlled.argTypes={defaultExpanded:{control:!1},defaultSelectionValue:{control:!1}},controlled.args={isExpanded:!1,inputValue:"",activeIndex:-1,selectionValue:null},controlled.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleChange = changes => {\n    const {\n      type,\n      ...args\n    } = changes;\n    updateArgs(args);\n  };\n  return <ComboboxStory {...args} onChange={handleChange} />;\n}"}};const componentMeta={title:"Packages/Dropdowns.Next/Combobox",parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A24482"}},component:Combobox.G,subcomponents:{Hint,Label:Label.J,Message,Option:Option.c,"Option.Meta":Option.c.Meta,OptGroup,Tag:Tag.v,"Tag.Avatar":Tag.v.Avatar},args:{label:"Label",isLabelRegular:!1,isLabelHidden:!1,hint:"Hint",startIcon:!1,renderValue:!1,endIcon:!1,listboxAriaLabel:"Label",message:"Message",validationLabel:"Label",isEditable:!0,listboxMaxHeight:Combobox.G.defaultProps.listboxMaxHeight,listboxZIndex:Combobox.G.defaultProps.listboxZIndex,options:data.l},argTypes:{label:{name:"children",table:{category:"Label"}},hint:{name:"children",table:{category:"Hint"}},startIcon:{control:"boolean"},renderValue:{control:"boolean"},endIcon:{control:"boolean"},appendListboxToNode:{control:!1},message:{name:"children",table:{category:"Message"}},validationLabel:{table:{category:"Message"}},isLabelRegular:{name:"isRegular",table:{category:"Label"}},isLabelHidden:{name:"hidden",table:{category:"Label"}}},tags:["stories-mdx"],includeStories:["uncontrolled","controlled"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const combobox_stories=componentMeta,__namedExportsOrder=["uncontrolled","controlled"]},"./node_modules/@zendeskgarden/svg-icons/src/16/search-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _circle,_path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgSearchStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_circle||(_circle=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:6,cy:6,r:5.5,fill:"none",stroke:"currentColor"})),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",d:"M15 15l-5-5"})))}},"./node_modules/@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _g,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgUserSoloStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{fill:"none",stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:8,cy:5,r:3.5}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",d:"M2.5 15.5c.3-2.8 2.6-5 5.5-5s5.2 2.2 5.5 5"}))))}},"./packages/dropdowns.next/demo/stories/data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>ITEMS,l:()=>OPTIONS});const ITEMS=[{value:"item",label:"Item"},{value:"item-icon",label:"Item with icon",icon:!0},{value:"separator",isSeparator:!0},{value:"item-meta",label:"Item",meta:"With meta"},{legend:"Choose flowers",type:"checkbox",icon:!0,items:[{value:"aster",label:"Aster",isSelected:!0},{value:"daisy",label:"Daisy",isDisabled:!0},{value:"ivy",label:"Ivy"}]},{"aria-label":"Select a fruit",type:"radio",icon:!0,items:[{value:"apple",label:"Apple",name:"fruits"},{value:"cherry",label:"Cherry",name:"fruits"},{value:"clementine",label:"Clementine",name:"fruits"}]}],OPTIONS=[{label:"Flowers",icon:!0,options:[{value:"flower-01",label:"Aster",meta:"Yohannes",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"flower-02",label:"Daisy",meta:"Bates",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"flower-03",label:"Ivy",meta:"Poison",icon:!0,tagProps:{isPill:!0,removeLabel:"Remove"},isDisabled:!0},{value:"flower-04",label:"Poppy",meta:"Lee",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"flower-05",label:"Lily-Rose",meta:"Depp",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"},isHidden:!0}]},{label:"Fruits",icon:!0,options:[{value:"fruit-01",label:"Apple",meta:"Martin",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"fruit-02",label:"Cherry",meta:"Jones",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"fruit-03",label:"Clementine",meta:"Laine",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"fruit-04",label:"Huckleberry",meta:"Finn",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}}]},{label:"Herbs",icon:!0,options:[{value:"herb-01",label:"Basil",meta:"Rathbone",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"herb-02",label:"Clover",meta:"Maitland",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"herb-03",label:"Rue",meta:"McClanahan",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"herb-04",label:"Sage",meta:"Francis",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}}]},{label:"Trees",icon:!0,options:[{value:"tree-01",label:"Ash",meta:"Williams",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"tree-02",label:"Oak",meta:"Onaodowan",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"tree-03",label:"Olive",meta:"Borden",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"tree-04",label:"Willow",meta:"Smith",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}}]}]},"./packages/dropdowns.next/README.md":module=>{module.exports='# @zendeskgarden/react-dropdowns.next [![npm version][npm version badge]][npm version link]\n\n[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-dropdowns.next\n[npm version link]: https://www.npmjs.com/package/@zendeskgarden/react-dropdowns.next\n\nThis package includes components related to dropdowns in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-dropdowns.next\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n### Combobox\n\n```jsx\nimport { ThemeProvider } from \'@zendeskgarden/react-theming\';\nimport { Field, Label, Combobox, Option } from \'@zendeskgarden/react-dropdowns.next\';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Field>\n    <Label>Combobox</Label>\n    <Combobox>\n      <Option value="One" />\n      <Option value="Two" />\n      <Option value="Three" />\n    </Combobox>\n  </Field>\n</ThemeProvider>;\n```\n\nBeyond this basic example, Garden\'s `Combobox` offers a comprehensive set of\nWAI-ARIA compliant combobox features. Key capabilities include:\n\n- **Controllable**: The `Combobox` functions in both [uncontrolled and\n  controlled](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)\n  modes. Controlled mode enables aspects, such as input value, selection value(s),\n  listbox expansion, and current option active index, to share and adapt to the\n  surrounding UI.\n- **Autocomplete-able**: Denotes the `Combobox` with [list\n  autocomplete](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/).\n  Filtering implementation is left to the API consumer.\n- **Selectable**: The `Combobox` API ensures the selection of one or more\n  listbox option values, while also supporting the W3C [no autocomplete\n  example](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-none/)\n  for use cases like search.\n- **Multi-selectable**: This feature enables the `Combobox` to provide WAI-ARIA\n  [multi-select\n  listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/#ex2_label)\n  functionality with option-as-tag value rendering.\n- **Non-editable**: The `Combobox` supports [select-only\n  mode](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/),\n  where the user cannot modify the `<input>`.\n- **Filterable**: The `Combobox` offers various filtering methods for listbox\n  options. Details of the filtering implementation are left to the API consumer.\n- **Markup-able**: The `Combobox` can convert input value text to rich HTML\n  markup on blur in single-selection mode.\n- **Decorate-able**: The `Combobox` allows adding start and end media (SVG icons).\n  Certain features will replace end media with Garden\'s standard dropdown chevron\n  treatment.\n- **Group-able**: The `Combobox` API utilizes fully accessible `<OptGroup>`\n  components for grouping, similar to the corresponding HTML element.\n- **Compactible**: Like other form elements, the `Combobox` supports compact\n  sizing.\n- **Field-able**: The `Combobox` builds on Garden’s Field API context to\n  establish accessible relationships with corresponding Label, Hint, and Message\n  components.\n- **Validate-able**: The `Combobox` provides validation styling and\n  accessibility comparable to other Garden form components.\n- **RTL theme-able**: Functionality displays and operates correctly for\n  left-to-right and right-to-left layouts.\n\n### Menu\n\n```jsx\nimport { ThemeProvider } from \'@zendeskgarden/react-theming\';\nimport { Menu, Item } from \'@zendeskgarden/react-dropdowns.next\';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Menu button="Choose an item">\n    <Item value="item-01" label="One" />\n    <Item value="item-02" label="Two" />\n    <Item value="item-03" label="Three" />\n  </Menu>\n</ThemeProvider>;\n```\n\nVisit [storybook](https://zendeskgarden.github.io/react-components) for live examples.\n'}}]);