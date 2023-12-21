"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[8235],{"./packages/dropdowns.next/demo/menu.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,controlled:()=>controlled,default:()=>menu_stories,uncontrolled:()=>uncontrolled});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),Menu=__webpack_require__("./packages/dropdowns.next/src/elements/menu/Menu.tsx"),Item=__webpack_require__("./packages/dropdowns.next/src/elements/menu/Item.tsx"),Separator=__webpack_require__("./packages/dropdowns.next/src/elements/menu/Separator.tsx"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useText=__webpack_require__("./packages/theming/src/utils/useText.ts"),useMenuContext=__webpack_require__("./packages/dropdowns.next/src/context/useMenuContext.ts"),StyledItem=__webpack_require__("./packages/dropdowns.next/src/views/menu/StyledItem.ts"),StyledItemContent=__webpack_require__("./packages/dropdowns.next/src/views/menu/StyledItemContent.ts"),StyledItemTypeIcon=__webpack_require__("./packages/dropdowns.next/src/views/menu/StyledItemTypeIcon.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledOptGroup=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledOptGroup.ts");const StyledItemGroup=(0,styled_components_browser_esm.ZP)(StyledOptGroup.C).attrs({"data-garden-id":"dropdowns.menu.item_group","data-garden-version":"storybook"}).withConfig({displayName:"StyledItemGroup",componentId:"sc-1p1oxg2-0"})(["",";"],(props=>(0,retrieveComponentStyles.Z)("dropdowns.menu.item_group",props)));StyledItemGroup.defaultProps={theme:theme.Z};var StyledSeparator=__webpack_require__("./packages/dropdowns.next/src/views/menu/StyledSeparator.ts"),useItemGroupContext=__webpack_require__("./packages/dropdowns.next/src/context/useItemGroupContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ItemGroup=(0,react.forwardRef)(((_ref,ref)=>{let{children,content,legend,icon,"aria-label":ariaLabel,type,...props}=_ref;const{isCompact,getItemGroupProps}=(0,useMenuContext.Z)(),groupProps=getItemGroupProps({"aria-label":(0,useText.X)(ItemGroup,{"aria-label":ariaLabel},"aria-label","Group",!legend)||legend}),contextValue=(0,react.useMemo)((()=>({type})),[type]);return(0,jsx_runtime.jsx)(useItemGroupContext.K.Provider,{value:contextValue,children:(0,jsx_runtime.jsx)(StyledItem.M,{isCompact,$type:"group",...props,ref,children:(0,jsx_runtime.jsxs)(StyledItemContent.d,{children:[(content||legend)&&(0,jsx_runtime.jsxs)(StyledItem.M,{as:"div",isCompact,$type:"header",children:[icon&&(0,jsx_runtime.jsx)(StyledItemTypeIcon.J,{isCompact,type:"header",children:icon}),content||legend]}),(0,jsx_runtime.jsxs)(StyledItemGroup,{isCompact,...groupProps,children:[(0,jsx_runtime.jsx)(StyledSeparator.m,{role:"none"}),children]})]})})})}));ItemGroup.displayName="ItemGroup",ItemGroup.propTypes={content:prop_types_default().any,icon:prop_types_default().any,legend:prop_types_default().string,type:prop_types_default().oneOf(["checkbox","radio",void 0])};try{ItemGroup.displayName="ItemGroup",ItemGroup.__docgenInfo={description:"",displayName:"ItemGroup",props:{content:{defaultValue:null,description:"Renders content for the item group (defaults to `legend` text)",name:"content",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Accepts an icon to display",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},legend:{defaultValue:null,description:"Sets the text label of the item group",name:"legend",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"Configures the selection type for items within the group",name:"type",required:!1,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns.next/src/elements/menu/ItemGroup.tsx#ItemGroup"]={docgenInfo:ItemGroup.__docgenInfo,name:"ItemGroup",path:"packages/dropdowns.next/src/elements/menu/ItemGroup.tsx#ItemGroup"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var _path,leaf_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/leaf-stroke.svg");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const shopping_cart_stroke=function SvgShoppingCartStroke(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path||(_path=react.createElement("path",{fill:"currentColor",d:"M5.5 13a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm8 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-8 .9a.6.6 0 100 1.2.6.6 0 000-1.2zm8 0a.6.6 0 100 1.2.6.6 0 000-1.2zM15 2a1 1 0 01.965 1.262l-.037.11-2 5a1 1 0 01-.807.62L13 9H6c-.053 0-.105-.004-.156-.012L5.04 11h9.46a.5.5 0 01.09.992L14.5 12H5.039a1 1 0 01-.969-1.25l.04-.121.853-2.135L2.152.999.5 1A.5.5 0 01.008.59L0 .5A.5.5 0 01.41.008L.5 0h2a.5.5 0 01.43.245l.038.08L3.597 2H15zm0 1H4l2 5h7l2-5z"})))};var Grid=__webpack_require__("./packages/grid/src/elements/Grid.tsx"),Row=__webpack_require__("./packages/grid/src/elements/Row.tsx"),Col=__webpack_require__("./packages/grid/src/elements/Col.tsx");const MenuItem=_ref=>{let{icon,meta,...item}=_ref;return(0,jsx_runtime.jsxs)(Item.c,{...item,icon:icon?(0,jsx_runtime.jsx)(leaf_stroke.Z,{}):void 0,children:[item.label,meta&&(0,jsx_runtime.jsx)(Item.c.Meta,{children:meta})]})};MenuItem.displayName="MenuItem";const MenuStory=_ref2=>{let{items,...args}=_ref2;return(0,jsx_runtime.jsx)(Grid.r,{children:(0,jsx_runtime.jsx)(Row.X,{justifyContent:"center",style:{height:800},children:(0,jsx_runtime.jsx)(Col.J,{alignSelf:"center",textAlign:"center",children:(0,jsx_runtime.jsx)("div",{style:{display:"inline-block",position:"relative",width:200},children:(0,jsx_runtime.jsx)(Menu.v,{...args,children:items.map((item=>"items"in item?(0,jsx_runtime.jsx)(ItemGroup,{legend:item.legend,"aria-label":item["aria-label"],type:item.type,icon:item.icon?(0,jsx_runtime.jsx)(shopping_cart_stroke,{}):void 0,children:item.items.map((groupItem=>(0,jsx_runtime.jsx)(MenuItem,{...groupItem},groupItem.value)))},item.legend||item["aria-label"]):"isSeparator"in item?(0,jsx_runtime.jsx)(Separator.Z,{},item.value):(0,jsx_runtime.jsx)(MenuItem,{...item},item.value)))})})})})})};MenuStory.displayName="MenuStory";var README=__webpack_require__("./packages/dropdowns.next/README.md"),data=__webpack_require__("./packages/dropdowns.next/demo/stories/data.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Dropdowns.Next/Menu",component:Menu.v,subcomponents:{Item:Item.c,"Item.Meta":Item.c.Meta,Separator:Separator.Z,ItemGroup},argTypes:{appendToNode:{control:!1}},args:{button:"Menu",items:data.c,placement:Menu.v.defaultProps.placement,maxHeight:Menu.v.defaultProps.maxHeight,zIndex:Menu.v.defaultProps.zIndex}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Uncontrolled",argTypes:{isExpanded:{control:!1},focusedValue:{control:!1},selectedItems:{control:!1}},children:args=>(0,jsx_runtime.jsx)(MenuStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"controlled",children:"Controlled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Controlled",argTypes:{defaultExpanded:{control:!1},defaultFocusedValue:{control:!1},focusedValue:{control:{type:"text"}}},args:{isExpanded:!1,focusedValue:null,selectedItems:[{value:"aster",type:"checkbox"}]},children:args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(MenuStory,{...args,onChange:changes=>{const{type,...rest}=changes;updateArgs(rest)}})}})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README})]})}const uncontrolled=args=>(0,jsx_runtime.jsx)(MenuStory,{...args});uncontrolled.storyName="Uncontrolled",uncontrolled.argTypes={isExpanded:{control:!1},focusedValue:{control:!1},selectedItems:{control:!1}},uncontrolled.parameters={storySource:{source:"args => <MenuStory {...args} />"}};const controlled=args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(MenuStory,{...args,onChange:changes=>{const{type,...rest}=changes;updateArgs(rest)}})};controlled.storyName="Controlled",controlled.argTypes={defaultExpanded:{control:!1},defaultFocusedValue:{control:!1},focusedValue:{control:{type:"text"}}},controlled.args={isExpanded:!1,focusedValue:null,selectedItems:[{value:"aster",type:"checkbox"}]},controlled.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleChange = changes => {\n    const {\n      type,\n      ...rest\n    } = changes;\n    updateArgs(rest);\n  };\n  return <MenuStory {...args} onChange={handleChange} />;\n}"}};const componentMeta={title:"Packages/Dropdowns.Next/Menu",component:Menu.v,subcomponents:{Item:Item.c,"Item.Meta":Item.c.Meta,Separator:Separator.Z,ItemGroup},args:{button:"Menu",items:data.c,placement:Menu.v.defaultProps.placement,maxHeight:Menu.v.defaultProps.maxHeight,zIndex:Menu.v.defaultProps.zIndex},argTypes:{appendToNode:{control:!1}},tags:["stories-mdx"],includeStories:["uncontrolled","controlled"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const menu_stories=componentMeta,__namedExportsOrder=["uncontrolled","controlled"]},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./packages/dropdowns.next/demo/stories/data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>OPTIONS,c:()=>ITEMS});const ITEMS=[{value:"item",label:"Item"},{value:"item-icon",label:"Item with icon",icon:!0},{value:"separator",isSeparator:!0},{value:"item-meta",label:"Item",meta:"With meta"},{legend:"Choose flowers",type:"checkbox",icon:!0,items:[{value:"aster",label:"Aster",isSelected:!0},{value:"daisy",label:"Daisy",isDisabled:!0},{value:"ivy",label:"Ivy"}]},{"aria-label":"Select a fruit",type:"radio",icon:!0,items:[{value:"apple",label:"Apple",name:"fruits"},{value:"cherry",label:"Cherry",name:"fruits"},{value:"clementine",label:"Clementine",name:"fruits"}]}],OPTIONS=[{label:"Flowers",icon:!0,options:[{value:"flower-01",label:"Aster",meta:"Yohannes",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"flower-02",label:"Daisy",meta:"Bates",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"flower-03",label:"Ivy",meta:"Poison",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"},isDisabled:!0},{value:"flower-04",label:"Poppy",meta:"Lee",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}}]},{label:"Fruits",icon:!0,options:[{value:"fruit-01",label:"Apple",meta:"Martin",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"fruit-02",label:"Cherry",meta:"Jones",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"fruit-03",label:"Clementine",meta:"Laine",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"fruit-04",label:"Huckleberry",meta:"Finn",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}}]},{label:"Herbs",icon:!0,options:[{value:"herb-01",label:"Basil",meta:"Rathbone",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"herb-02",label:"Clover",meta:"Maitland",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"herb-03",label:"Rue",meta:"McClanahan",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"herb-04",label:"Sage",meta:"Francis",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}}]},{label:"Trees",icon:!0,options:[{value:"tree-01",label:"Ash",meta:"Williams",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"tree-02",label:"Oak",meta:"Onaodowan",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"tree-03",label:"Olive",meta:"Borden",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}},{value:"tree-04",label:"Willow",meta:"Smith",icon:!0,tagProps:{"aria-label":"Press delete or backspace to remove",isPill:!0,removeLabel:"Remove"}}]}]},"./packages/theming/src/utils/arrowStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>arrowStyles});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/polished/dist/polished.esm.js");const exponentialSymbols={symbols:{sqrt:{func:{symbol:"sqrt",f:a=>Math.sqrt(a),notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"sqrt",regSymbol:"sqrt\\b"}}},animationStyles=(position,modifier)=>{const property=position.split("-")[0],animationName=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.F4)(["0%,66%{",":2px;border:transparent;}"],property);return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["&","::before,&","::after{animation:0.3s ease-in-out ",";}"],modifier,modifier,animationName)},positionStyles=(position,size,inset)=>{const margin=(0,polished__WEBPACK_IMPORTED_MODULE_1__.mA)(`${size} / -2`),placement=(0,polished__WEBPACK_IMPORTED_MODULE_1__.mA)(`${margin} + ${inset}`);let clipPath,positionCss,propertyRadius;return position.startsWith("top")?(propertyRadius="border-bottom-right-radius",clipPath="polygon(100% 0, 100% 1px, 1px 100%, 0 100%, 0 0)",positionCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["top:",";right:",";left:",";margin-left:",";"],placement,"top-right"===position&&size,"top"===position?"50%":"top-left"===position&&size,"top"===position&&margin)):position.startsWith("right")?(propertyRadius="border-bottom-left-radius",clipPath="polygon(100% 0, 100% 100%, calc(100% - 1px) 100%, 0 1px, 0 0)",positionCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["top:",";right:",";bottom:",";margin-top:",";"],"right"===position?"50%":"right-top"===position&&size,placement,"right-bottom"===position&&size,"right"===position&&margin)):position.startsWith("bottom")?(propertyRadius="border-top-left-radius",clipPath="polygon(100% 0, calc(100% - 1px) 0, 0 calc(100% - 1px), 0 100%, 100% 100%)",positionCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["right:",";bottom:",";left:",";margin-left:",";"],"bottom-right"===position&&size,placement,"bottom"===position?"50%":"bottom-left"===position&&size,"bottom"===position&&margin)):position.startsWith("left")&&(propertyRadius="border-top-right-radius",clipPath="polygon(0 100%, 100% 100%, 100% calc(100% - 1px), 1px 0, 0 0)",positionCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["top:",";bottom:",";left:",";margin-top:",";"],"left"===position?"50%":"left-top"===position&&size,size,placement,"left"===position&&margin)),(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["&::before{",":100%;clip-path:",";}&::before,&::after{","}"],propertyRadius,clipPath,positionCss)};function arrowStyles(position){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const size=options.size||"6px",inset=options.inset||"0",squareSize=(0,polished__WEBPACK_IMPORTED_MODULE_1__.mA)(`${size} * 2 / sqrt(2)`,exponentialSymbols);return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["position:relative;&::before{border-width:inherit;border-style:inherit;border-color:transparent;background-clip:content-box;}&::after{z-index:-1;border:inherit;box-shadow:inherit;}&::before,&::after{position:absolute;transform:rotate(45deg);background-color:inherit;box-sizing:inherit;width:",";height:",";content:'';}",";",";"],squareSize,squareSize,positionStyles(position,squareSize,inset),options.animationModifier&&animationStyles(position,options.animationModifier))}},"./packages/dropdowns.next/README.md":module=>{module.exports='# @zendeskgarden/react-dropdowns.next [![npm version][npm version badge]][npm version link]\n\n[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-dropdowns.next\n[npm version link]: https://www.npmjs.com/package/@zendeskgarden/react-dropdowns.next\n\nThis package includes components related to dropdowns in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-dropdowns.next\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n### Combobox\n\n```jsx\nimport { ThemeProvider } from \'@zendeskgarden/react-theming\';\nimport { Field, Label, Combobox, Option } from \'@zendeskgarden/react-dropdowns.next\';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Field>\n    <Label>Combobox</Label>\n    <Combobox>\n      <Option value="One" />\n      <Option value="Two" />\n      <Option value="Three" />\n    </Combobox>\n  </Field>\n</ThemeProvider>;\n```\n\nBeyond this basic example, Garden\'s `Combobox` offers a comprehensive set of\nWAI-ARIA compliant combobox features. Key capabilities include:\n\n- **Controllable**: The `Combobox` functions in both [uncontrolled and\n  controlled](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)\n  modes. Controlled mode enables aspects, such as input value, selection value(s),\n  listbox expansion, and current option active index, to share and adapt to the\n  surrounding UI.\n- **Autocomplete-able**: Denotes the `Combobox` with [list\n  autocomplete](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/).\n  Filtering implementation is left to the API consumer.\n- **Selectable**: The `Combobox` API ensures the selection of one or more\n  listbox option values, while also supporting the W3C [no autocomplete\n  example](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-none/)\n  for use cases like search.\n- **Multi-selectable**: This feature enables the `Combobox` to provide WAI-ARIA\n  [multi-select\n  listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/#ex2_label)\n  functionality with option-as-tag value rendering.\n- **Non-editable**: The `Combobox` supports [select-only\n  mode](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/),\n  where the user cannot modify the `<input>`.\n- **Filterable**: The `Combobox` offers various filtering methods for listbox\n  options. Details of the filtering implementation are left to the API consumer.\n- **Markup-able**: The `Combobox` can convert input value text to rich HTML\n  markup on blur in single-selection mode.\n- **Decorate-able**: The `Combobox` allows adding start and end media (SVG icons).\n  Certain features will replace end media with Garden\'s standard dropdown chevron\n  treatment.\n- **Group-able**: The `Combobox` API utilizes fully accessible `<OptGroup>`\n  components for grouping, similar to the corresponding HTML element.\n- **Compactible**: Like other form elements, the `Combobox` supports compact\n  sizing.\n- **Field-able**: The `Combobox` builds on Garden’s Field API context to\n  establish accessible relationships with corresponding Label, Hint, and Message\n  components.\n- **Validate-able**: The `Combobox` provides validation styling and\n  accessibility comparable to other Garden form components.\n- **RTL theme-able**: Functionality displays and operates correctly for\n  left-to-right and right-to-left layouts.\n\n### Menu\n\n```jsx\nimport { ThemeProvider } from \'@zendeskgarden/react-theming\';\nimport { Menu, Item } from \'@zendeskgarden/react-dropdowns.next\';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Menu button="Choose an item">\n    <Item value="item-01" label="One" />\n    <Item value="item-02" label="Two" />\n    <Item value="item-03" label="Three" />\n  </Menu>\n</ThemeProvider>;\n```\n\nVisit [storybook](https://zendeskgarden.github.io/react-components) for live examples.\n'}}]);