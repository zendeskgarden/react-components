"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[6433],{"./packages/tabs/demo/tabs.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{controlled:()=>controlled,default:()=>tabs_stories,uncontrolled:()=>uncontrolled});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),elements_theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),index_esm=__webpack_require__("./node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),dist_index_esm=__webpack_require__("./node_modules/@zendeskgarden/container-selection/dist/index.esm.js");const useTabs=_ref=>{let{tabs,orientation="horizontal",idPrefix,...options}=_ref;const prefix=(0,index_esm.Me)(idPrefix),PANEL_ID=`${prefix}__panel`,TAB_ID=`${prefix}__tab`,values=(0,react.useMemo)((()=>tabs.reduce(((all,tab)=>(!tab.disabled&&all.push(tab.value),all)),[])),[tabs]),{selectedValue,focusedValue,getGroupProps,getElementProps}=(0,dist_index_esm.z)({values,direction:orientation,defaultSelectedValue:values[0],...options}),getTabListProps=(0,react.useCallback)((function(_temp){let{role="tablist",...other}=void 0===_temp?{}:_temp;return{...getGroupProps(other),role:null===role?void 0:role,"aria-orientation":orientation,"data-garden-container-id":"containers.tabs","data-garden-container-version":"2.0.7"}}),[getGroupProps,orientation]),getTabProps=(0,react.useCallback)((_ref2=>{let{role="tab",value,...other}=_ref2;const isDisabled=-1===values.indexOf(value),{onClick,onKeyDown,onFocus,onBlur,...elementProps}=getElementProps({value,role:null===role?void 0:role,...other});return{...elementProps,onClick:isDisabled?void 0:onClick,onFocus:isDisabled?void 0:onFocus,onKeyDown:isDisabled?void 0:onKeyDown,onBlur:isDisabled?void 0:onBlur,id:`${TAB_ID}:${value}`,"aria-disabled":isDisabled||void 0,"aria-controls":`${PANEL_ID}:${value}`}}),[getElementProps,values,PANEL_ID,TAB_ID]),getTabPanelProps=(0,react.useCallback)((_ref3=>{let{role="tabpanel",value,...other}=_ref3;return{role:null===role?void 0:role,id:`${PANEL_ID}:${value}`,hidden:value!==selectedValue,"aria-labelledby":`${TAB_ID}:${value}`,...other}}),[selectedValue,PANEL_ID,TAB_ID]);return(0,react.useMemo)((()=>({selectedValue,focusedValue,getTabListProps,getTabProps,getTabPanelProps})),[selectedValue,focusedValue,getTabListProps,getTabProps,getTabPanelProps])},TabsContainer=_ref=>{let{children,render=children,...options}=_ref;return react.createElement(react.Fragment,null,render(useTabs(options)))};TabsContainer.defaultProps={orientation:"horizontal"},TabsContainer.propTypes={children:prop_types_default().func,render:prop_types_default().func,tabs:prop_types_default().arrayOf(prop_types_default().any).isRequired,rtl:prop_types_default().bool,orientation:prop_types_default().oneOf(["horizontal","vertical"]),idPrefix:prop_types_default().string,defaultSelectedValue:prop_types_default().any,selectedValue:prop_types_default().any,onSelect:prop_types_default().func};const toTabs=children=>react.Children.toArray(children).reduce(((_items,child)=>{const retVal=_items;if((0,react.isValidElement)(child))if("item"in child.props){const props=child.props;retVal.push({value:props.item,disabled:props.disabled})}else{const childItems=toTabs(child.props.children);retVal.push(...childItems)}return retVal}),[]),TabsContext=(0,react.createContext)(void 0),useTabsContext=()=>(0,react.useContext)(TabsContext);var retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),focusStyles=__webpack_require__("./packages/theming/src/utils/focusStyles.ts"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js");const StyledTab=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"tabs.tab","data-garden-version":"storybook"}).withConfig({displayName:"StyledTab",componentId:"sc-x2pbow-0"})(["display:inline-block;position:relative;transition:color 0.25s ease-in-out;border-bottom:"," transparent;border-width:",";cursor:pointer;overflow:hidden;vertical-align:top;user-select:none;text-align:center;text-decoration:none;text-overflow:ellipsis;"," "," &:focus{text-decoration:none;}&::before{transition:box-shadow 0.1s ease-in-out;content:'';}&:focus-visible::before,&[data-garden-focus-visible]::before{position:absolute;top:","px;right:","px;left:","px;border-radius:",";height:","px;pointer-events:none;}&:active::before{box-shadow:none;}&[aria-disabled='true']{cursor:default;}",";"],(props=>props.theme.borderStyles.solid),(props=>props.theme.borderWidths.md),(_ref2=>{let{theme}=_ref2;const paddingTop=2.5*theme.space.base,paddingHorizontal=7*theme.space.base,paddingBottom=paddingTop-(0,polished_esm.wA)(theme.borderWidths.md)-(0,polished_esm.wA)(theme.borderWidths.sm);return(0,styled_components_browser_esm.iv)(["padding:","px ","px ","px;"],paddingTop,paddingHorizontal,paddingBottom)}),(_ref=>{let{theme,isSelected}=_ref;const selectedColor=(0,getColor.L)("primaryHue",600,theme);return(0,styled_components_browser_esm.iv)(["border-color:",";color:",";&:hover{color:",";}"," &:active{border-color:currentcolor;color:",";}&[aria-disabled='true']{border-color:transparent;color:",";}"],isSelected&&"currentcolor !important",isSelected?selectedColor:"inherit",selectedColor,(0,focusStyles.j)({theme,inset:!0,spacerWidth:null,shadowWidth:"sm",selector:'&:focus-visible::before, &[data-garden-focus-visible="true"]::before',styles:{color:selectedColor}}),selectedColor,(props=>(0,getColor.L)("neutralHue",400,props.theme)))}),(props=>2.5*props.theme.space.base),(props=>6*props.theme.space.base),(props=>6*props.theme.space.base),(props=>props.theme.borderRadii.md),(props=>5*props.theme.space.base),(props=>(0,retrieveComponentStyles.Z)("tabs.tab",props)));StyledTab.defaultProps={theme:elements_theme.Z};const StyledTabPanel=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"tabs.tabpanel","data-garden-version":"storybook"}).withConfig({displayName:"StyledTabPanel",componentId:"sc-7lhrmp-0"})(["display:block;&[aria-hidden='true']{display:none;}",";"],(props=>(0,retrieveComponentStyles.Z)("tabs.tabpanel",props)));StyledTabPanel.defaultProps={theme:elements_theme.Z};const StyledTabList=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"tabs.tablist","data-garden-version":"storybook"}).withConfig({displayName:"StyledTabList",componentId:"sc-wa5aaj-0"})(["display:block;margin-top:0;margin-bottom:","px;border-bottom:"," "," ",";padding:0;line-height:","px;white-space:nowrap;color:",";font-size:",";",";"],(props=>5*props.theme.space.base),(props=>props.theme.borderWidths.sm),(props=>props.theme.borderStyles.solid),(props=>(0,getColor.L)("neutralHue",300,props.theme)),(props=>5*props.theme.space.base),(props=>(0,getColor.L)("neutralHue",600,props.theme)),(props=>props.theme.fontSizes.md),(props=>(0,retrieveComponentStyles.Z)("tabs.tablist",props)));StyledTabList.defaultProps={theme:elements_theme.Z};const StyledTabs=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"tabs.tabs","data-garden-version":"storybook"}).withConfig({displayName:"StyledTabs",componentId:"sc-1qaor65-0"})(["display:block;overflow:hidden;direction:",";",";",";"],(props=>props.theme.rtl&&"rtl"),(props=>props.isVertical&&(_ref=>{let{theme}=_ref;return(0,styled_components_browser_esm.iv)(["display:table;","{display:table-cell;margin-bottom:0;border-bottom:none;vertical-align:top;}","{display:block;margin-bottom:","px;margin-left:",";border-left:",";border-bottom-style:none;border-","-style:",";border-","-color:transparent;padding:","px ","px;text-align:",";&:last-of-type{margin-bottom:0;}&:focus-visible::before,&[data-garden-focus-visible]::before{top:","px;right:","px;left:","px;}}","{margin-",":","px;vertical-align:top;}"],StyledTabList,StyledTab,5*theme.space.base,theme.rtl&&"0",theme.rtl&&"0",theme.rtl?"right":"left",theme.borderStyles.solid,theme.rtl?"right":"left",theme.space.base,2*theme.space.base,theme.rtl?"right":"left",theme.space.base,theme.space.base,theme.space.base,StyledTabPanel,theme.rtl?"right":"left",8*theme.space.base)})(props)),(props=>(0,retrieveComponentStyles.Z)("tabs.tabs",props)));StyledTabs.defaultProps={theme:elements_theme.Z};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tabs=(0,react.forwardRef)(((_ref,ref)=>{let{isVertical,children,onChange,selectedItem:controlledSelectedItem,...otherProps}=_ref;const theme=(0,react.useContext)(styled_components_browser_esm.Ni)||elements_theme.Z,[internalSelectedItem,setInternalSelectedItem]=(0,react.useState)(),selectedItem=(0,index_esm.u5)(controlledSelectedItem,internalSelectedItem),tabs=(0,react.useMemo)((()=>toTabs(children)),[children]),tabsContextValue=useTabs({tabs,rtl:theme.rtl,orientation:isVertical?"vertical":"horizontal",selectedValue:selectedItem,defaultSelectedValue:tabs.find((tab=>!tab.disabled))?.value,onSelect:item=>{onChange?onChange(item):setInternalSelectedItem(item)}});return(0,jsx_runtime.jsx)(TabsContext.Provider,{value:tabsContextValue,children:(0,jsx_runtime.jsx)(StyledTabs,{isVertical,...otherProps,ref,children})})}));Tabs.propTypes={isVertical:prop_types_default().bool,selectedItem:prop_types_default().any,onChange:prop_types_default().func},Tabs.defaultProps={isVertical:!1},Tabs.displayName="Tabs";try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{isVertical:{defaultValue:{value:"false"},description:"Arranges the tabs vertically",name:"isVertical",required:!1,type:{name:"boolean"}},selectedItem:{defaultValue:null,description:"Specifies the currently selected tab",name:"selectedItem",required:!1,type:{name:"any"}},onChange:{defaultValue:null,description:"Handles tab selection\n@param selectedItem The selected tab's `item` value",name:"onChange",required:!1,type:{name:"((selectedItem: any) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tabs/src/elements/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"packages/tabs/src/elements/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}var react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js");const Tab=react.forwardRef(((_ref,ref)=>{let{disabled,item,...otherProps}=_ref;const tabsPropGetters=useTabsContext();if(disabled||!tabsPropGetters)return(0,jsx_runtime.jsx)(StyledTab,{role:"tab","aria-disabled":disabled,ref,...otherProps});const{ref:tabRef,...tabProps}=tabsPropGetters.getTabProps({value:item});return(0,jsx_runtime.jsx)(StyledTab,{isSelected:item===tabsPropGetters.selectedValue,...tabProps,...otherProps,ref:(0,react_merge_refs_esm.Z)([tabRef,ref])})}));Tab.displayName="Tab",Tab.propTypes={disabled:prop_types_default().bool,item:prop_types_default().any};try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{disabled:{defaultValue:null,description:"Indicates that the element is not interactive",name:"disabled",required:!1,type:{name:"boolean"}},item:{defaultValue:null,description:"Defines a unique value to identify the tab. Provided to the `onChange` event in the [Tabs](#tabs) component.",name:"item",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tabs/src/elements/Tab.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"packages/tabs/src/elements/Tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}const TabList=react.forwardRef(((props,ref)=>{const tabsPropGetters=useTabsContext();if(!tabsPropGetters)return(0,jsx_runtime.jsx)(StyledTabList,{ref,...props});const tabListProps=tabsPropGetters.getTabListProps();return(0,jsx_runtime.jsx)(StyledTabList,{...tabListProps,...props,ref})}));TabList.displayName="TabList";try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tabs/src/elements/TabList.tsx#TabList"]={docgenInfo:TabList.__docgenInfo,name:"TabList",path:"packages/tabs/src/elements/TabList.tsx#TabList"})}catch(__react_docgen_typescript_loader_error){}const TabPanel=react.forwardRef(((_ref,ref)=>{let{item,...otherProps}=_ref;const tabsPropGetters=useTabsContext();if(!tabsPropGetters)return(0,jsx_runtime.jsx)(StyledTabPanel,{ref,...otherProps});const tabPanelProps=tabsPropGetters.getTabPanelProps({value:item});return(0,jsx_runtime.jsx)(StyledTabPanel,{"aria-hidden":tabsPropGetters.selectedValue!==item,...tabPanelProps,...otherProps,ref})}));TabPanel.displayName="TabPanel",TabPanel.propTypes={item:prop_types_default().any};try{TabPanel.displayName="TabPanel",TabPanel.__docgenInfo={description:"",displayName:"TabPanel",props:{item:{defaultValue:null,description:"Defines a value used to match a tab panel with its associated tab",name:"item",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tabs/src/elements/TabPanel.tsx#TabPanel"]={docgenInfo:TabPanel.__docgenInfo,name:"TabPanel",path:"packages/tabs/src/elements/TabPanel.tsx#TabPanel"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");const TabsStory=_ref=>{let{tabs,...args}=_ref;return(0,jsx_runtime.jsxs)(Tabs,{...args,children:[(0,jsx_runtime.jsx)(TabList,{children:tabs.map((tab=>(0,jsx_runtime.jsx)(Tab,{item:tab.value,disabled:tab.disabled,children:tab.value},tab.value)))}),tabs.map((tab=>(0,jsx_runtime.jsx)(TabPanel,{item:tab.value,children:tab.panel},tab.value)))]})};TabsStory.displayName="TabsStory";const TABS=[{value:"Elm",panel:"Elms are deciduous and semi-deciduous trees comprising the flowering plant genus Ulmus in the plant family Ulmaceae.",disabled:!1},{value:"Sugar maple",panel:"The sugar maple is one of America’s most-loved trees. In fact, more states have claimed it as their state tree than any other single species—for New York, West Virginia, Wisconsin, and Vermont, the maple tree stands alone.",disabled:!1},{value:"Sugar",panel:"Cornus is a genus of about 30–60 species of woody plants in the family Cornaceae, commonly known as dogwoods, which can generally be distinguished by their blossoms, berries, and distinctive bark.",disabled:!1},{value:"Boysenberry syrup",panel:"Boysenberry syrup has been discontinued due to low demand.",disabled:!0}],README_namespaceObject='# @zendeskgarden/react-tabs [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-tabs)](https://www.npmjs.com/package/@zendeskgarden/react-tabs)\n\nThis package includes several varieties of Tabs relating to\nthe [Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-tabs\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n```jsx\nimport React, { useState } from \'react\';\nimport { ThemeProvider } from \'@zendeskgarden/react-theming\';\nimport { Tabs, TabList, Tab, TabPanel } from \'@zendeskgarden/react-tabs\';\n\nconst Example = () => {\n  const [selectedTab, setSelectedTab] = useState(\'tab-1\');\n\n  /**\n   * Place a `ThemeProvider` at the root of your React application\n   */\n  return (\n    <ThemeProvider>\n      <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>\n        <TabList>\n          <Tab item="tab-1">Tab 1</Tab>\n          <Tab item="tab-2">Tab 2</Tab>\n          <Tab disabled>Disabled Tab</Tab>\n          <Tab item="tab-3">Tab 3</Tab>\n        </TabList>\n        <TabPanel item="tab-1">Tab 1 content</TabPanel>\n        <TabPanel item="tab-2">Tab 2 content</TabPanel>\n        <TabPanel item="tab-3">Tab 3 content</TabPanel>\n      </Tabs>\n    </ThemeProvider>\n  );\n};\n```\n';function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Tabs/Tabs",component:Tabs,subcomponents:{Tab,TabList,TabPanel},args:{tabs:TABS},argTypes:{tabs:{table:{category:"Story"}}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A123"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Uncontrolled",argTypes:{selectedItem:{control:!1}},children:args=>(0,jsx_runtime.jsx)(TabsStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"controlled",children:"Controlled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Controlled",children:args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(TabsStory,{...args,onChange:selectedItem=>updateArgs({selectedItem})})}})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README_namespaceObject})]})}const uncontrolled=args=>(0,jsx_runtime.jsx)(TabsStory,{...args});uncontrolled.storyName="Uncontrolled",uncontrolled.argTypes={selectedItem:{control:!1}},uncontrolled.parameters={storySource:{source:"args => <TabsStory {...args} />"}};const controlled=args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(TabsStory,{...args,onChange:selectedItem=>updateArgs({selectedItem})})};controlled.storyName="Controlled",controlled.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleChange = selectedItem => updateArgs({\n    selectedItem\n  });\n  return <TabsStory {...args} onChange={handleChange} />;\n}"}};const componentMeta={title:"Packages/Tabs/Tabs",parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A123"}},component:Tabs,subcomponents:{Tab,TabList,TabPanel},args:{tabs:TABS},argTypes:{tabs:{table:{category:"Story"}}},tags:["stories-mdx"],includeStories:["uncontrolled","controlled"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const tabs_stories=componentMeta},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./node_modules/@zendeskgarden/container-selection/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useSelection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);const stateReducer=(state,action)=>{switch(action.type){case"END":case"HOME":case"FOCUS":case"INCREMENT":case"DECREMENT":return{...state,focusedValue:action.payload};case"MOUSE_SELECT":return{...state,selectedValue:action.payload,focusedValue:void 0};case"KEYBOARD_SELECT":return{...state,selectedValue:action.payload};case"EXIT_WIDGET":return{...state,focusedValue:void 0};default:return state}},useSelection=_ref=>{let{values,direction="horizontal",defaultFocusedValue=values[0],defaultSelectedValue,rtl,selectedValue,focusedValue,onSelect,onFocus}=_ref;const isSelectedValueControlled=void 0!==selectedValue,isFocusedValueControlled=void 0!==focusedValue,refs=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>values.reduce(((all,value)=>(all[value]=(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),all)),{})),[values]),[state,dispatch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateReducer,{selectedValue,focusedValue}),controlledFocusedValue=(0,_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.u5)(focusedValue,state.focusedValue),controlledSelectedValue=(0,_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.u5)(selectedValue,state.selectedValue);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(void 0!==controlledFocusedValue){const targetRef=refs[controlledFocusedValue];targetRef?.current&&targetRef.current.focus()}}),[controlledFocusedValue]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{void 0===selectedValue&&void 0!==defaultSelectedValue&&(onSelect&&onSelect(defaultSelectedValue),isSelectedValueControlled||dispatch({type:"KEYBOARD_SELECT",payload:defaultSelectedValue}))}),[]);const getGroupProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(_temp){let{role="group",...other}=void 0===_temp?{}:_temp;return{role:null===role?void 0:role,"data-garden-container-id":"containers.selection","data-garden-container-version":"3.0.6",...other}}),[]);return{focusedValue:controlledFocusedValue,selectedValue:controlledSelectedValue,getElementProps:_ref2=>{let{selectedAriaKey="aria-selected",onFocus:onFocusCallback,onKeyDown,onClick,value,...other}=_ref2;const isSelected=controlledSelectedValue===value,verticalDirection="vertical"===direction||"both"===direction,horizontalDirection="horizontal"===direction||"both"===direction;return{tabIndex:(void 0===controlledFocusedValue?isSelected:controlledFocusedValue===value)||void 0===controlledSelectedValue&&void 0===controlledFocusedValue&&value===defaultFocusedValue?0:-1,[selectedAriaKey]:selectedAriaKey?isSelected:void 0,ref:refs[value],onFocus:(0,_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.Mj)(onFocusCallback,(()=>{onFocus&&onFocus(value),!isFocusedValueControlled&&dispatch({type:"FOCUS",payload:value})})),onClick:(0,_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.Mj)(onClick,(()=>{onSelect&&onSelect(value),onFocus&&onFocus(value),!isSelectedValueControlled&&dispatch({type:"MOUSE_SELECT",payload:value})})),onKeyDown:(0,_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.Mj)(onKeyDown,(event=>{let nextItem,currentItem;currentItem=isFocusedValueControlled?values.find((id=>focusedValue===id)):values.find((id=>state.focusedValue===id));const onIncrement=()=>{const nextItemIndex=values.indexOf(currentItem)+1;nextItem=values[nextItemIndex],nextItem||(nextItem=values[0]),!isFocusedValueControlled&&dispatch({type:"INCREMENT",payload:nextItem}),onFocus&&onFocus(nextItem)},onDecrement=()=>{const nextItemIndex=values.indexOf(currentItem)-1;nextItem=values[nextItemIndex],nextItem||(nextItem=values[values.length-1]),!isFocusedValueControlled&&dispatch({type:"DECREMENT",payload:nextItem}),onFocus&&onFocus(nextItem)};if(!(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey))if(event.key===_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.tW.UP&&verticalDirection||event.key===_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.tW.LEFT&&horizontalDirection)rtl&&horizontalDirection?onIncrement():onDecrement(),event.preventDefault();else if(event.key===_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.tW.DOWN&&verticalDirection||event.key===_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.tW.RIGHT&&horizontalDirection)rtl&&horizontalDirection?onDecrement():onIncrement(),event.preventDefault();else if(event.key===_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.tW.HOME){const firstItem=values[0];!isFocusedValueControlled&&dispatch({type:"HOME",payload:firstItem}),onFocus&&onFocus(firstItem),event.preventDefault()}else if(event.key===_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.tW.END){const lastItem=values[values.length-1];!isFocusedValueControlled&&dispatch({type:"END",payload:lastItem}),onFocus&&onFocus(lastItem),event.preventDefault()}else event.key!==_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.tW.SPACE&&event.key!==_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_1__.tW.ENTER||(onSelect&&onSelect(value),!isSelectedValueControlled&&dispatch({type:"KEYBOARD_SELECT",payload:value}),event.preventDefault())})),onBlur:event=>{0===event.target.tabIndex&&(dispatch({type:"EXIT_WIDGET"}),onFocus&&onFocus())},...other}},getGroupProps}},SelectionContainer=_ref=>{let{children,render=children,...options}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,render(useSelection(options)))};SelectionContainer.defaultProps={direction:"horizontal"},SelectionContainer.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,render:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,values:prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().any).isRequired,rtl:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,direction:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["horizontal","vertical","both"]),defaultFocusedValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,defaultSelectedValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,focusedValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default().any,selectedValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default().any,onSelect:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,onFocus:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func}},"./packages/theming/src/utils/focusStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>SELECTOR_FOCUS_VISIBLE,j:()=>focusStyles});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_getFocusBoxShadow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getFocusBoxShadow.ts");const SELECTOR_FOCUS_VISIBLE='&:focus-visible, &[data-garden-focus-visible="true"]',focusStyles=_ref=>{let{condition=!0,selector=SELECTOR_FOCUS_VISIBLE,shadowWidth="md",spacerWidth="xs",styles:{boxShadow,...styles}={},theme,...options}=_ref;const _boxShadow=condition?(0,_getFocusBoxShadow__WEBPACK_IMPORTED_MODULE_0__.F)({boxShadow,shadowWidth,spacerWidth,theme,...options}):boxShadow;let outline,outlineOffset;return null===spacerWidth?outline=theme.shadowWidths[shadowWidth]:(outline=`${(0,polished__WEBPACK_IMPORTED_MODULE_1__.mA)(`${theme.shadowWidths[shadowWidth]} - ${theme.shadowWidths[spacerWidth]}`)} solid transparent`,outlineOffset=theme.shadowWidths[spacerWidth]),(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["&:focus{outline:none;}","{outline:",";outline-offset:",";box-shadow:",";","}"],selector,outline,outlineOffset,_boxShadow,styles)}},"./packages/theming/src/utils/getColor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>getColor,d:()=>DEFAULT_SHADE});var _elements_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),lodash_memoize__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash.memoize/index.js");const DEFAULT_SHADE=600,adjust=(color,expected,actual)=>{if(expected!==actual){const amount=Math.abs(expected-actual)/100*.05;return expected>actual?(0,polished__WEBPACK_IMPORTED_MODULE_1__._j)(amount,color):(0,polished__WEBPACK_IMPORTED_MODULE_1__.$n)(amount,color)}return color},getColor=__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_0__)()((function(hue){let retVal,shade=arguments.length>1&&void 0!==arguments[1]?arguments[1]:DEFAULT_SHADE,theme=arguments.length>2?arguments[2]:void 0,transparency=arguments.length>3?arguments[3]:void 0;if(isNaN(shade))return;const palette=theme&&theme.palette?theme.palette:_elements_theme__WEBPACK_IMPORTED_MODULE_2__.Z.palette,colors=theme&&theme.colors?theme.colors:_elements_theme__WEBPACK_IMPORTED_MODULE_2__.Z.colors;let _hue;if(_hue="string"==typeof hue&&colors[hue]||hue,Object.prototype.hasOwnProperty.call(palette,_hue)&&(_hue=palette[_hue]),"object"==typeof _hue){if(retVal=_hue[shade],!retVal){const _shade=Object.keys(_hue).map((hueKey=>parseInt(hueKey,10))).reduce(((previous,current)=>Math.abs(current-shade)<Math.abs(previous-shade)?current:previous));retVal=adjust(_hue[_shade],shade,_shade)}}else retVal=adjust(_hue,shade,DEFAULT_SHADE);return transparency&&(retVal=(0,polished__WEBPACK_IMPORTED_MODULE_1__.m4)(retVal,transparency)),retVal}),((hue,shade,theme,transparency)=>JSON.stringify({hue,shade,palette:theme?.palette,colors:theme?.colors,transparency})))},"./packages/theming/src/utils/getFocusBoxShadow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>getFocusBoxShadow});var _elements_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_getColor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getColor.ts");const getFocusBoxShadow=_ref=>{let{boxShadow,inset=!1,hue="primaryHue",shade=_getColor__WEBPACK_IMPORTED_MODULE_0__.d,shadowWidth="md",spacerHue="background",spacerShade=_getColor__WEBPACK_IMPORTED_MODULE_0__.d,spacerWidth="xs",theme=_elements_theme__WEBPACK_IMPORTED_MODULE_1__.Z}=_ref;const color=(0,_getColor__WEBPACK_IMPORTED_MODULE_0__.L)(hue,shade,theme),shadow=theme.shadows[shadowWidth](color);if(null===spacerWidth)return`${inset?"inset":""} ${shadow}`;const spacerColor=(0,_getColor__WEBPACK_IMPORTED_MODULE_0__.L)(spacerHue,spacerShade,theme),retVal=`\n    ${inset?"inset":""} ${theme.shadows[spacerWidth](spacerColor)},\n    ${inset?"inset":""} ${shadow}`;return boxShadow?`${retVal}, ${boxShadow}`:retVal}},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{Z:()=>retrieveComponentStyles})},"./node_modules/react-merge-refs/dist/react-merge-refs.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function mergeRefs(refs){return function(value){refs.forEach((function(ref){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}}}}]);