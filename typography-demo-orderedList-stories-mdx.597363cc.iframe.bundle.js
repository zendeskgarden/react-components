"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[4246],{"./packages/typography/demo/orderedList.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>orderedList_stories,orderedList:()=>orderedList});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),prop_types=__webpack_require__("./packages/typography/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);const OrderedListContext=(0,react.createContext)(void 0),utils_useOrderedListContext=()=>{const listContext=(0,react.useContext)(OrderedListContext);if(!listContext)throw new Error("This component must be rendered within an `OrderedList` component.");return listContext};var StyledListItem=__webpack_require__("./packages/typography/src/styled/StyledListItem.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OrderedListItem=(0,react.forwardRef)(((props,ref)=>{const{size}=utils_useOrderedListContext();return(0,jsx_runtime.jsx)(StyledListItem.O,{ref,space:size,...props})}));OrderedListItem.displayName="OrderedList.Item";const Item=OrderedListItem;try{Item.displayName="OrderedList.Item",Item.__docgenInfo={description:"",displayName:"OrderedList.Item",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/lists/OrderedListItem.tsx#OrderedList.Item"]={docgenInfo:OrderedList.Item.__docgenInfo,name:"OrderedList.Item",path:"packages/typography/src/elements/lists/OrderedListItem.tsx#OrderedList.Item"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./packages/typography/src/types/index.ts"),StyledList=__webpack_require__("./packages/typography/src/styled/StyledList.ts");const OrderedListComponent=react.forwardRef(((_ref,ref)=>{let{size,type,...other}=_ref;const value=(0,react.useMemo)((()=>({size})),[size]);return(0,jsx_runtime.jsx)(OrderedListContext.Provider,{value,children:(0,jsx_runtime.jsx)(StyledList.X,{ref,listType:type,...other})})}));OrderedListComponent.displayName="OrderedList",OrderedListComponent.propTypes={size:prop_types_default().oneOf(types.NO),type:prop_types_default().oneOf(types.Ln)},OrderedListComponent.defaultProps={size:"medium",type:"decimal"};const OrderedList_OrderedList=OrderedListComponent;OrderedList_OrderedList.Item=Item;try{OrderedList_OrderedList.displayName="OrderedList",OrderedList_OrderedList.__docgenInfo={description:"",displayName:"OrderedList",props:{size:{defaultValue:{value:"medium"},description:"Adjusts the vertical spacing between list items",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},type:{defaultValue:{value:"decimal"},description:"Sets the marker style",name:"type",required:!1,type:{name:"enum",value:[{value:'"decimal"'},{value:'"decimal-leading-zero"'},{value:'"lower-alpha"'},{value:'"lower-roman"'},{value:'"upper-alpha"'},{value:'"upper-roman"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/lists/OrderedList.tsx#OrderedList"]={docgenInfo:OrderedList_OrderedList.__docgenInfo,name:"OrderedList",path:"packages/typography/src/elements/lists/OrderedList.tsx#OrderedList"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");const getType=level=>{const types=["decimal","lower-alpha","lower-roman"];return types[level%types.length]},OrderedListStory=_ref=>{let{items,level=0,...args}=_ref;return(0,jsx_runtime.jsx)(OrderedList_OrderedList,{...args,type:0===level?args.type:getType(level),children:items.map(((item,index)=>(0,jsx_runtime.jsx)(OrderedList_OrderedList.Item,{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[item.text,item.items&&(0,jsx_runtime.jsx)(OrderedListStory,{items:item.items,level:level+1,...args})]})},index)))})};OrderedListStory.displayName="OrderedListStory";var data=__webpack_require__("./packages/typography/demo/stories/data.ts"),README=__webpack_require__("./packages/typography/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Typography/Lists/OrderedList",component:OrderedList_OrderedList,subcomponents:{"OrderedList.Item":OrderedList_OrderedList.Item}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"OrderedList",args:{items:data.VV},argTypes:{items:{name:"OrderedList.Item[]",table:{category:"Story"}}},children:args=>(0,jsx_runtime.jsx)(OrderedListStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README})]})}const orderedList=args=>(0,jsx_runtime.jsx)(OrderedListStory,{...args});orderedList.storyName="OrderedList",orderedList.argTypes={items:{name:"OrderedList.Item[]",table:{category:"Story"}}},orderedList.args={items:data.VV},orderedList.parameters={storySource:{source:"args => <OrderedListStory {...args} />"}};const componentMeta={title:"Packages/Typography/Lists/OrderedList",component:OrderedList_OrderedList,subcomponents:{"OrderedList.Item":OrderedList_OrderedList.Item},tags:["stories-mdx"],includeStories:["orderedList"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const orderedList_stories=componentMeta},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./packages/theming/src/utils/getLineHeight.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>getLineHeight});var polished__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/node_modules/polished/dist/polished.esm.js");function getLineHeight(height,fontSize){const[heightValue,heightUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.dJ)(height.toString()),[fontSizeValue,fontSizeUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.dJ)(fontSize.toString());if(heightUnit&&"px"!==heightUnit)throw new Error(`Unexpected \`height\` with '${heightUnit}' units.`);if(fontSizeUnit&&"px"!==fontSizeUnit)throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit}' units.`);return heightValue/fontSizeValue}},"./packages/typography/src/styled/StyledList.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>StyledOrderedList,e:()=>StyledUnorderedList});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const listStyles=props=>{const rtl=props.theme.rtl;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["direction:",";margin:0;margin-",":24px;padding:0;list-style-position:outside;list-style-type:",";"],rtl?"rtl":"ltr",rtl?"right":"left",props.listType)},StyledOrderedList=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.ol.attrs({"data-garden-id":"typography.ordered_list","data-garden-version":"storybook"}).withConfig({displayName:"StyledList__StyledOrderedList",componentId:"sc-jdbsfi-0"})(["",";",";"],(props=>listStyles(props)),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.Z)("typography.ordered_list",props)));StyledOrderedList.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z};const StyledUnorderedList=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.ul.attrs({"data-garden-id":"typography.unordered_list","data-garden-version":"storybook"}).withConfig({displayName:"StyledList__StyledUnorderedList",componentId:"sc-jdbsfi-1"})(["",";",";"],(props=>listStyles(props)),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.Z)("typography.unordered_list",props)));StyledUnorderedList.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z}},"./packages/typography/src/styled/StyledListItem.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>StyledOrderedListItem,Q:()=>StyledUnorderedListItem});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/typography/node_modules/polished/dist/polished.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/getLineHeight.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_StyledList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/typography/src/styled/StyledList.ts"),_StyledFont__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/typography/src/styled/StyledFont.tsx");const listItemStyles=props=>(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["line-height:",";",";"],(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)(props.theme.lineHeights.md,props.theme.fontSizes.md),"small"!==props.space&&(props=>{const base=props.theme.space.base,paddingTop="large"===props.space?2*base+"px":`${base}px`;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["padding-top:",";"," > &:first-child,"," > &:first-child{padding-top:0;}"," "," > &:first-child,"," "," > &:first-child,"," "," > &:first-child,"," "," > &:first-child{padding-top:",";}"],paddingTop,_StyledList__WEBPACK_IMPORTED_MODULE_1__.X,_StyledList__WEBPACK_IMPORTED_MODULE_1__.e,_StyledList__WEBPACK_IMPORTED_MODULE_1__.X,_StyledList__WEBPACK_IMPORTED_MODULE_1__.X,_StyledList__WEBPACK_IMPORTED_MODULE_1__.X,_StyledList__WEBPACK_IMPORTED_MODULE_1__.e,_StyledList__WEBPACK_IMPORTED_MODULE_1__.e,_StyledList__WEBPACK_IMPORTED_MODULE_1__.e,_StyledList__WEBPACK_IMPORTED_MODULE_1__.e,_StyledList__WEBPACK_IMPORTED_MODULE_1__.e,paddingTop)})(props)),StyledOrderedListItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_StyledFont__WEBPACK_IMPORTED_MODULE_3__.B).attrs({"data-garden-id":"typography.ordered_list_item","data-garden-version":"storybook",as:"li"}).withConfig({displayName:"StyledListItem__StyledOrderedListItem",componentId:"sc-9rsipg-0"})(["margin-",":",";padding-",":",";",";",";"],(props=>props.theme.rtl?"right":"left"),(props=>(0,polished__WEBPACK_IMPORTED_MODULE_4__.mA)(`${props.theme.space.base} * -1px`)),(props=>props.theme.rtl?"right":"left"),(props=>(0,polished__WEBPACK_IMPORTED_MODULE_4__.mA)(`${props.theme.space.base} * 1px`)),(props=>listItemStyles(props)),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_5__.Z)("typography.ordered_list_item",props)));StyledOrderedListItem.defaultProps={space:"medium",theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_6__.Z};const StyledUnorderedListItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_StyledFont__WEBPACK_IMPORTED_MODULE_3__.B).attrs({"data-garden-id":"typography.unordered_list_item","data-garden-version":"storybook",as:"li"}).withConfig({displayName:"StyledListItem__StyledUnorderedListItem",componentId:"sc-9rsipg-1"})(["",";",";"],(props=>listItemStyles(props)),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_5__.Z)("typography.unordered_list_item",props)));StyledUnorderedListItem.defaultProps={space:"medium",theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_6__.Z}}}]);