"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[9710],{"./packages/buttons/src/elements/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button_Button});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./packages/buttons/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react_merge_refs_esm=__webpack_require__("./packages/buttons/node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),types=__webpack_require__("./packages/buttons/src/types/index.ts"),StyledButton=__webpack_require__("./packages/buttons/src/styled/StyledButton.ts"),useButtonGroupContext=__webpack_require__("./packages/buttons/src/utils/useButtonGroupContext.ts"),useSplitButtonContext=__webpack_require__("./packages/buttons/src/utils/useSplitButtonContext.ts"),StyledIcon=__webpack_require__("./packages/buttons/src/styled/StyledIcon.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StartIconComponent=props=>(0,jsx_runtime.jsx)(StyledIcon.x,{position:"start",...props});StartIconComponent.displayName="StartIconComponent",StartIconComponent.displayName="Button.StartIcon";const StartIcon=StartIconComponent;try{StartIcon.displayName="Button.StartIcon",StartIcon.__docgenInfo={description:"",displayName:"Button.StartIcon",props:{isRotated:{defaultValue:null,description:"Rotates icon 180 degrees",name:"isRotated",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/buttons/src/elements/components/StartIcon.tsx#Button.StartIcon"]={docgenInfo:Button.StartIcon.__docgenInfo,name:"Button.StartIcon",path:"packages/buttons/src/elements/components/StartIcon.tsx#Button.StartIcon"})}catch(__react_docgen_typescript_loader_error){}const EndIconComponent=props=>(0,jsx_runtime.jsx)(StyledIcon.x,{position:"end",...props});EndIconComponent.displayName="EndIconComponent",EndIconComponent.displayName="Button.EndIcon";const EndIcon=EndIconComponent;try{EndIcon.displayName="Button.EndIcon",EndIcon.__docgenInfo={description:"",displayName:"Button.EndIcon",props:{isRotated:{defaultValue:null,description:"Rotates icon 180 degrees",name:"isRotated",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/buttons/src/elements/components/EndIcon.tsx#Button.EndIcon"]={docgenInfo:Button.EndIcon.__docgenInfo,name:"Button.EndIcon",path:"packages/buttons/src/elements/components/EndIcon.tsx#Button.EndIcon"})}catch(__react_docgen_typescript_loader_error){}const ButtonComponent=(0,react.forwardRef)(((props,ref)=>{const buttonGroupContext=(0,useButtonGroupContext.M)(),splitButtonContext=(0,useSplitButtonContext.i)();let computedRef=ref,computedProps={...props,focusInset:props.focusInset||void 0!==buttonGroupContext||splitButtonContext};if(buttonGroupContext&&!props.disabled){if(!props.value)throw new Error('"value" prop must be provided to Button when used within a ButtonGroup');computedProps=buttonGroupContext.getButtonProps({isSelected:props.value===buttonGroupContext.selectedItem,...computedProps}),computedRef=(0,react_merge_refs_esm.Z)([computedProps.ref,ref])}return(0,jsx_runtime.jsx)(StyledButton.S,{...computedProps,ref:computedRef})}));ButtonComponent.displayName="Button",ButtonComponent.propTypes={isNeutral:prop_types_default().bool,isPrimary:prop_types_default().bool,isDanger:prop_types_default().bool,isPill:prop_types_default().bool,isBasic:prop_types_default().bool,focusInset:prop_types_default().bool,isLink:prop_types_default().bool,isStretched:prop_types_default().bool,isSelected:prop_types_default().bool,size:prop_types_default().oneOf(types.N)},ButtonComponent.defaultProps={size:"medium"};const Button_Button=ButtonComponent;Button_Button.EndIcon=EndIcon,Button_Button.StartIcon=StartIcon;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{isDanger:{defaultValue:null,description:"Applies danger styling",name:"isDanger",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Specifies the button size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},isStretched:{defaultValue:null,description:"Stretches the button fill to its container width",name:"isStretched",required:!1,type:{name:"boolean"}},isNeutral:{defaultValue:null,description:"Applies neutral button styling",name:"isNeutral",required:!1,type:{name:"boolean"}},isPrimary:{defaultValue:null,description:"Applies primary button styling",name:"isPrimary",required:!1,type:{name:"boolean"}},isBasic:{defaultValue:null,description:"Applies basic button styling",name:"isBasic",required:!1,type:{name:"boolean"}},isLink:{defaultValue:null,description:"Applies link (anchor) button styling",name:"isLink",required:!1,type:{name:"boolean"}},isPill:{defaultValue:null,description:"Applies pill button styling",name:"isPill",required:!1,type:{name:"boolean"}},focusInset:{defaultValue:null,description:"Applies inset `box-shadow` styling on focus",name:"focusInset",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"@ignore prop used by `ButtonGroup`",name:"isSelected",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/buttons/src/elements/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"packages/buttons/src/elements/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./packages/buttons/src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SIZE});__webpack_require__("./node_modules/react/index.js");const SIZE=["small","medium","large"]},"./packages/buttons/src/utils/useButtonGroupContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>useButtonGroupContext,u:()=>ButtonGroupContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ButtonGroupContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useButtonGroupContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ButtonGroupContext)},"./packages/buttons/src/utils/useSplitButtonContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>SplitButtonContext,i:()=>useSplitButtonContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const SplitButtonContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useSplitButtonContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SplitButtonContext)},"./packages/dropdowns.next/src/context/useItemGroupContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ItemGroupContext,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ItemGroupContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),__WEBPACK_DEFAULT_EXPORT__=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ItemGroupContext)},"./packages/dropdowns.next/src/context/useMenuContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,p:()=>MenuContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MenuContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),__WEBPACK_DEFAULT_EXPORT__=()=>{const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MenuContext);if(!context)throw new Error("Error: this component must be rendered within a <Menu>.");return context}},"./packages/dropdowns.next/src/elements/menu/Item.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Item_Item});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./packages/dropdowns.next/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react_merge_refs_esm=__webpack_require__("./packages/dropdowns.next/node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),plus_stroke=__webpack_require__("./packages/dropdowns.next/node_modules/@zendeskgarden/svg-icons/src/16/plus-stroke.svg"),chevron_right_stroke=__webpack_require__("./packages/dropdowns.next/node_modules/@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg"),chevron_left_stroke=__webpack_require__("./packages/dropdowns.next/node_modules/@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg"),check_lg_stroke=__webpack_require__("./packages/dropdowns.next/node_modules/@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg"),types=__webpack_require__("./packages/dropdowns.next/src/types/index.ts"),StyledItem=__webpack_require__("./packages/dropdowns.next/src/views/menu/StyledItem.ts"),StyledItemTypeIcon=__webpack_require__("./packages/dropdowns.next/src/views/menu/StyledItemTypeIcon.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledOptionIcon=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledOptionIcon.ts");const StyledItemIcon=(0,styled_components_browser_esm.ZP)(StyledOptionIcon.V).attrs({"data-garden-id":"dropdowns.menu.item.icon","data-garden-version":"storybook"}).withConfig({displayName:"StyledItemIcon",componentId:"sc-1htsio6-0"})(["",";"],(props=>(0,retrieveComponentStyles.Z)("dropdowns.menu.item.icon",props)));StyledItemIcon.defaultProps={theme:theme.Z};var StyledItemContent=__webpack_require__("./packages/dropdowns.next/src/views/menu/StyledItemContent.ts");const ItemContext=(0,react.createContext)(void 0),context_useItemContext=()=>{const context=(0,react.useContext)(ItemContext);if(!context)throw new Error("Error: this component must be rendered within an <Item>.");return context};var StyledOptionMeta=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledOptionMeta.ts");const StyledItemMeta=(0,styled_components_browser_esm.ZP)(StyledOptionMeta.d).attrs({"data-garden-id":"dropdowns.menu.item.meta","data-garden-version":"storybook"}).withConfig({displayName:"StyledItemMeta",componentId:"sc-1w4thi3-0"})(["",";"],(props=>(0,retrieveComponentStyles.Z)("dropdowns.menu.item.meta",props)));StyledItemMeta.defaultProps={theme:theme.Z};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ItemMetaComponent=(0,react.forwardRef)(((props,ref)=>{const{isDisabled}=context_useItemContext();return(0,jsx_runtime.jsx)(StyledItemMeta,{isDisabled,...props,ref})}));ItemMetaComponent.displayName="Item.Meta";const ItemMeta=ItemMetaComponent;try{ItemMeta.displayName="Item.Meta",ItemMeta.__docgenInfo={description:"",displayName:"Item.Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns.next/src/elements/menu/ItemMeta.tsx#Item.Meta"]={docgenInfo:Item.Meta.__docgenInfo,name:"Item.Meta",path:"packages/dropdowns.next/src/elements/menu/ItemMeta.tsx#Item.Meta"})}catch(__react_docgen_typescript_loader_error){}var useMenuContext=__webpack_require__("./packages/dropdowns.next/src/context/useMenuContext.ts"),useItemGroupContext=__webpack_require__("./packages/dropdowns.next/src/context/useItemGroupContext.ts"),utils=__webpack_require__("./packages/dropdowns.next/src/elements/menu/utils.ts");const ItemComponent=(0,react.forwardRef)(((_ref,ref)=>{let{children,value,label=value,isSelected,icon,isDisabled,type,name,onClick,onKeyDown,onMouseEnter,...props}=_ref;const{type:selectionType}=(0,useItemGroupContext.Z)(),{focusedValue,getItemProps}=(0,useMenuContext.Z)(),item={...(0,utils.nD)({value,label,name,type,isSelected,isDisabled}),type:selectionType},{ref:_itemRef,...itemProps}=getItemProps({item,onClick,onKeyDown,onMouseEnter}),isActive=value===focusedValue,{isCompact}=(0,useMenuContext.Z)(),contextValue=(0,react.useMemo)((()=>({isDisabled})),[isDisabled]);return(0,jsx_runtime.jsx)(ItemContext.Provider,{value:contextValue,children:(0,jsx_runtime.jsxs)(StyledItem.M,{$type:type,isCompact,isActive,...props,...itemProps,ref:(0,react_merge_refs_esm.Z)([_itemRef,ref]),children:[(0,jsx_runtime.jsx)(StyledItemTypeIcon.J,{isCompact,type,children:(iconType=>{switch(iconType){case"add":return(0,jsx_runtime.jsx)(plus_stroke.Z,{});case"next":return(0,jsx_runtime.jsx)(chevron_right_stroke.Z,{});case"previous":return(0,jsx_runtime.jsx)(chevron_left_stroke.Z,{});default:return(0,jsx_runtime.jsx)(check_lg_stroke.Z,{})}})(type)}),icon&&(0,jsx_runtime.jsx)(StyledItemIcon,{children:icon}),(0,jsx_runtime.jsx)(StyledItemContent.d,{children:children||label})]})})}));ItemComponent.displayName="Item",ItemComponent.propTypes={icon:prop_types_default().any,isDisabled:prop_types_default().bool,isSelected:prop_types_default().bool,label:prop_types_default().string,name:prop_types_default().string,type:prop_types_default().oneOf(types.fV),value:prop_types_default().string.isRequired};const Item_Item=ItemComponent;Item_Item.Meta=ItemMeta;try{Item_Item.displayName="Item",Item_Item.__docgenInfo={description:"",displayName:"Item",props:{icon:{defaultValue:null,description:"Accepts an icon to display",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},isDisabled:{defaultValue:null,description:"Indicates that the item is not interactive",name:"isDisabled",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"Determines the initial selection state for the item",name:"isSelected",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Sets the text label of the item (defaults to `value`)",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Associates the item in a radio item group",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"Determines the item type",name:"type",required:!1,type:{name:"enum",value:[{value:'"next"'},{value:'"previous"'},{value:'"add"'},{value:'"danger"'}]}},value:{defaultValue:null,description:"Sets the unique value that is returned upon selection",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns.next/src/elements/menu/Item.tsx#Item"]={docgenInfo:Item_Item.__docgenInfo,name:"Item",path:"packages/dropdowns.next/src/elements/menu/Item.tsx#Item"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns.next/src/elements/menu/Menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Menu});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./packages/dropdowns.next/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react_merge_refs_esm=__webpack_require__("./packages/dropdowns.next/node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./packages/dropdowns.next/node_modules/@zendeskgarden/container-menu/dist/index.esm.js"),elements_theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),useWindow=__webpack_require__("./packages/theming/src/utils/useWindow.ts"),types=__webpack_require__("./packages/dropdowns.next/src/types/index.ts"),useMenuContext=__webpack_require__("./packages/dropdowns.next/src/context/useMenuContext.ts"),utils=__webpack_require__("./packages/dropdowns.next/src/elements/menu/utils.ts"),floating_ui_react_dom_esm=__webpack_require__("./packages/dropdowns.next/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),floating_ui_core_browser_min=__webpack_require__("./packages/dropdowns.next/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),floating_ui_dom_browser_min=__webpack_require__("./packages/dropdowns.next/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),StyledFloatingListbox=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledFloatingListbox.ts");const StyledFloatingMenu=(0,styled_components_browser_esm.ZP)(StyledFloatingListbox.J).attrs({"data-garden-id":"dropdowns.menu.floating","data-garden-version":"storybook"}).withConfig({displayName:"StyledFloatingMenu",componentId:"sc-1kawjbc-0"})(["",";"],(props=>(0,retrieveComponentStyles.Z)("dropdowns.menu.floating",props)));StyledFloatingMenu.defaultProps={theme:elements_theme.Z};var arrowStyles=__webpack_require__("./packages/theming/src/utils/arrowStyles.ts"),StyledListbox=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledListbox.ts");const StyledMenu=(0,styled_components_browser_esm.ZP)(StyledListbox.C).attrs({"data-garden-id":"dropdowns.menu","data-garden-version":"storybook"}).withConfig({displayName:"StyledMenu",componentId:"sc-1ht6lc5-0"})(["position:static !important;",";",";"],(props=>props.arrowPosition&&(0,arrowStyles.Z)(props.arrowPosition,{size:2*props.theme.space.base+"px",inset:"2px",animationModifier:'[data-garden-animate-arrow="true"]'})),(props=>(0,retrieveComponentStyles.Z)("dropdowns.menu",props)));StyledMenu.defaultProps={theme:elements_theme.Z};var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuList=(0,react.forwardRef)(((_ref,ref)=>{let{appendToNode,hasArrow,isCompact,isExpanded,fallbackPlacements:_fallbackPlacements,maxHeight,minHeight,placement:_placement,triggerRef,zIndex,children,...props}=_ref;const floatingRef=(0,react.useRef)(null),[isVisible,setIsVisible]=(0,react.useState)(isExpanded),[height,setHeight]=(0,react.useState)(),theme=(0,react.useContext)(styled_components_browser_esm.Ni)||elements_theme.Z,floatingPlacement=(0,utils.JC)(theme.rtl,_placement),fallbackPlacements=(0,react.useMemo)((()=>(0,utils.gq)(theme.rtl,floatingPlacement,_fallbackPlacements)),[floatingPlacement,_fallbackPlacements,theme.rtl]),{refs,placement,update,floatingStyles:{transform}}=(0,floating_ui_react_dom_esm.YF)({elements:{reference:triggerRef?.current,floating:floatingRef?.current},placement:floatingPlacement,middleware:[(0,floating_ui_core_browser_min.cv)(theme.space.base*(hasArrow?2:1)),(0,floating_ui_core_browser_min.RR)({fallbackPlacements}),(0,floating_ui_core_browser_min.dp)({apply:_ref2=>{let{rects,availableHeight}=_ref2;null!==minHeight&&"fit-content"!==minHeight&&rects.floating.height>availableHeight&&setHeight(availableHeight)}})]});(0,react.useEffect)((()=>{let cleanup;return isExpanded&&refs.reference.current&&refs.floating.current&&(cleanup=(0,floating_ui_dom_browser_min.Me)(refs.reference.current,refs.floating.current,update,{elementResize:"function"==typeof ResizeObserver})),()=>cleanup&&cleanup()}),[isExpanded,refs.reference,refs.floating,update]),(0,react.useEffect)((()=>{let timeout;return isExpanded?setIsVisible(!0):timeout=setTimeout((()=>{setIsVisible(!1),setHeight(void 0)}),200),()=>clearTimeout(timeout)}),[isExpanded]),(0,react.useEffect)((()=>{height&&(setHeight(void 0),update())}),[children,update]);const Node=(0,jsx_runtime.jsx)(StyledFloatingMenu,{"data-garden-animate":isVisible,isHidden:!isExpanded,position:(0,utils.x$)(placement),zIndex,style:{transform},ref:floatingRef,children:(0,jsx_runtime.jsx)(StyledMenu,{"data-garden-animate-arrow":isVisible,arrowPosition:hasArrow?(0,utils.lr)(placement):void 0,isCompact,minHeight,maxHeight,style:{height},...props,ref,children:isVisible&&children})});return appendToNode?(0,react_dom.createPortal)(Node,appendToNode):Node}));MenuList.displayName="MenuList",MenuList.propTypes={appendToNode:prop_types_default().any,hasArrow:prop_types_default().bool,isCompact:prop_types_default().bool,isExpanded:prop_types_default().bool,maxHeight:prop_types_default().string,minHeight:prop_types_default().string,placement:prop_types_default().oneOf(types.r4),triggerRef:prop_types_default().any,zIndex:prop_types_default().number},MenuList.defaultProps={maxHeight:"400px",placement:"bottom-start",zIndex:1e3};try{MenuList.displayName="MenuList",MenuList.__docgenInfo={description:"",displayName:"MenuList",props:{appendToNode:{defaultValue:null,description:"Appends the menu to the element provided",name:"appendToNode",required:!1,type:{name:"Element | DocumentFragment"}},hasArrow:{defaultValue:null,description:"Attaches an arrow that points towards the menu trigger",name:"hasArrow",required:!1,type:{name:"boolean"}},isCompact:{defaultValue:null,description:"Applies compact styling",name:"isCompact",required:!1,type:{name:"boolean"}},isExpanded:{defaultValue:null,description:"Determines menu expansion",name:"isExpanded",required:!1,type:{name:"boolean"}},fallbackPlacements:{defaultValue:null,description:"Provides a list of acceptable fallback placements",name:"fallbackPlacements",required:!1,type:{name:'("top" | "bottom" | "start" | "auto" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "end" | "end-top" | "end-bottom" | "start-top" | "start-bottom")[]'}},maxHeight:{defaultValue:{value:"400px"},description:"Sets the `max-height` of the menu",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"Sets the `min-height` of the menu",name:"minHeight",required:!1,type:{name:"string | null"}},placement:{defaultValue:{value:"bottom-start"},description:"Adjusts the placement of the menu",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"start"'},{value:'"auto"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"end"'},{value:'"end-top"'},{value:'"end-bottom"'},{value:'"start-top"'},{value:'"start-bottom"'}]}},triggerRef:{defaultValue:null,description:"Provides ref access to the associated trigger element",name:"triggerRef",required:!0,type:{name:"RefObject<HTMLElement>"}},zIndex:{defaultValue:{value:"1000"},description:"Sets the `z-index` of the menu",name:"zIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns.next/src/elements/menu/MenuList.tsx#MenuList"]={docgenInfo:MenuList.__docgenInfo,name:"MenuList",path:"packages/dropdowns.next/src/elements/menu/MenuList.tsx#MenuList"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./packages/buttons/src/elements/Button.tsx");const StyledButton=(0,styled_components_browser_esm.ZP)(Button.z).attrs({"data-garden-id":"dropdowns.menu.button","data-garden-version":"storybook"}).withConfig({displayName:"StyledButton",componentId:"sc-z78ozj-0"})(["",";"],(props=>(0,retrieveComponentStyles.Z)("dropdowns.menu.button",props)));StyledButton.defaultProps={theme:elements_theme.Z};var chevron_down_stroke=__webpack_require__("./packages/dropdowns.next/node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg");const Menu=(0,react.forwardRef)(((_ref,ref)=>{let{button,buttonProps:_buttonProps={},children,isCompact,focusedValue:_focusedValue,defaultFocusedValue,defaultExpanded,isExpanded:_isExpanded,selectedItems,onChange,onMouseLeave,...props}=_ref;const triggerRef=(0,react.useRef)(null),menuRef=(0,react.useRef)(null),items=(0,utils.kj)(children),theme=(0,react.useContext)(styled_components_browser_esm.Ni)||elements_theme.Z,environment=(0,useWindow.z)(theme),{isExpanded,focusedValue,getTriggerProps,getMenuProps,getItemProps,getItemGroupProps,getSeparatorProps}=(0,index_esm.H)({rtl:theme.rtl,environment,defaultFocusedValue,focusedValue:_focusedValue,defaultExpanded,isExpanded:_isExpanded,selectedItems,items,menuRef,triggerRef,onChange}),{onClick,onKeyDown,...buttonProps}=_buttonProps,triggerProps={...isCompact&&{size:"small"},...buttonProps,...getTriggerProps({type:"button",onClick,onKeyDown}),ref:(0,react_merge_refs_esm.Z)([triggerRef,ref])},trigger="function"==typeof button?button(triggerProps):(0,jsx_runtime.jsxs)(StyledButton,{...triggerProps,children:[button,(0,jsx_runtime.jsx)(StyledButton.EndIcon,{isRotated:isExpanded,children:(0,jsx_runtime.jsx)(chevron_down_stroke.Z,{})})]}),contextValue=(0,react.useMemo)((()=>({isCompact,focusedValue,getItemProps,getItemGroupProps,getSeparatorProps})),[isCompact,focusedValue,getItemProps,getItemGroupProps,getSeparatorProps]);return(0,jsx_runtime.jsxs)(useMenuContext.p.Provider,{value:contextValue,children:[trigger,(0,jsx_runtime.jsx)(MenuList,{...props,...getMenuProps({onMouseLeave}),ref:(0,react_merge_refs_esm.Z)([menuRef,ref]),isCompact,isExpanded,triggerRef,children})]})}));Menu.displayName="Menu",Menu.propTypes={appendToNode:prop_types_default().any,button:prop_types_default().any.isRequired,buttonProps:prop_types_default().object,defaultExpanded:prop_types_default().bool,defaultFocusedValue:prop_types_default().string,fallbackPlacements:prop_types_default().arrayOf(prop_types_default().any),focusedValue:prop_types_default().string,hasArrow:prop_types_default().bool,isCompact:prop_types_default().bool,isExpanded:prop_types_default().bool,maxHeight:prop_types_default().string,minHeight:prop_types_default().string,onChange:prop_types_default().func,placement:prop_types_default().oneOf(types.r4),selectedItems:prop_types_default().arrayOf(prop_types_default().any),zIndex:prop_types_default().number},Menu.defaultProps={maxHeight:"400px",placement:"bottom-start",zIndex:1e3};try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{appendToNode:{defaultValue:null,description:"Appends the menu to the element provided",name:"appendToNode",required:!1,type:{name:"Element | DocumentFragment"}},button:{defaultValue:null,description:"Sets the menu button label or renders a provided trigger element",name:"button",required:!0,type:{name:"string | ((props: IButtonProps & { ref: RefObject<HTMLButtonElement>; }) => ReactNode)"}},buttonProps:{defaultValue:null,description:"Provides additional props to the menu [Button](/components/button#button)",name:"buttonProps",required:!1,type:{name:"IButtonProps"}},defaultExpanded:{defaultValue:null,description:"Determines default expansion in an uncontrolled menu",name:"defaultExpanded",required:!1,type:{name:"boolean"}},defaultFocusedValue:{defaultValue:null,description:"Determines focused value on menu initialization",name:"defaultFocusedValue",required:!1,type:{name:"string"}},fallbackPlacements:{defaultValue:null,description:"Provides a list of acceptable fallback placements",name:"fallbackPlacements",required:!1,type:{name:'("top" | "bottom" | "start" | "auto" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "end" | "end-top" | "end-bottom" | "start-top" | "start-bottom")[]'}},focusedValue:{defaultValue:null,description:"Sets the focused value in a controlled menu",name:"focusedValue",required:!1,type:{name:"string | null"}},hasArrow:{defaultValue:null,description:"Attaches an arrow that points towards the menu trigger",name:"hasArrow",required:!1,type:{name:"boolean"}},isCompact:{defaultValue:null,description:"Applies compact styling",name:"isCompact",required:!1,type:{name:"boolean"}},isExpanded:{defaultValue:null,description:"Sets the expansion in a controlled menu",name:"isExpanded",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:{value:"400px"},description:"Sets the `max-height` of the menu",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"Sets the `min-height` of the menu",name:"minHeight",required:!1,type:{name:"string | null"}},onChange:{defaultValue:null,description:"Handles menu state changes\n@param changes.type The event type that triggered the change\n@param changes.isExpanded The updated menu expansion\n@param changes.selectedItems The updated selection values\n@param changes.focusedValue The updated focused value",name:"onChange",required:!1,type:{name:"((changes: { type: string; value?: string; isExpanded?: boolean; focusedValue?: string | null | undefined; selectedItems?: ISelectedItem[] | undefined; }) => void) | undefined"}},selectedItems:{defaultValue:null,description:"Sets the selected items in a controlled menu",name:"selectedItems",required:!1,type:{name:"ISelectedItem[]"}},placement:{defaultValue:{value:"bottom-start"},description:"Adjusts the placement of the menu",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"start"'},{value:'"auto"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"end"'},{value:'"end-top"'},{value:'"end-bottom"'},{value:'"start-top"'},{value:'"start-bottom"'}]}},zIndex:{defaultValue:{value:"1000"},description:"Sets the `z-index` of the menu",name:"zIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns.next/src/elements/menu/Menu.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"packages/dropdowns.next/src/elements/menu/Menu.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns.next/src/elements/menu/Separator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Separator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_views__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/dropdowns.next/src/views/menu/StyledSeparator.ts"),_context_useMenuContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/dropdowns.next/src/context/useMenuContext.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Separator=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;const{getSeparatorProps}=(0,_context_useMenuContext__WEBPACK_IMPORTED_MODULE_2__.Z)(),separatorProps=getSeparatorProps();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_views__WEBPACK_IMPORTED_MODULE_3__.m,{...props,...separatorProps,ref})}));Separator.displayName="Separator";try{Separator.displayName="Separator",Separator.__docgenInfo={description:"",displayName:"Separator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns.next/src/elements/menu/Separator.tsx#Separator"]={docgenInfo:Separator.__docgenInfo,name:"Separator",path:"packages/dropdowns.next/src/elements/menu/Separator.tsx#Separator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns.next/src/elements/menu/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JC:()=>toFloatingPlacement,gq:()=>getFallbackPlacements,kj:()=>toItems,lr:()=>toArrowPosition,nD:()=>toItem,x$:()=>toMenuPosition});var _types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/dropdowns.next/src/types/index.ts"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");_types__WEBPACK_IMPORTED_MODULE_1__.r5;const PLACEMENT_LISTS_MAP={top:["top-start","top","top-end"],bottom:["bottom-start","bottom","bottom-end"],left:["left-start","left","left-end"],right:["right-start","right","right-end"]},OPPOSITE_PLACEMENT_MAP={left:"right",right:"left",top:"bottom",bottom:"top"},toFloatingPlacement=(isRtl,placement)=>{let retVal;if(retVal={auto:"bottom-start",end:"right","end-top":"right-start","end-bottom":"right-end",start:"left","start-top":"left-start","start-bottom":"left-end"}[placement]||placement,isRtl){retVal={left:"right","left-start":"right-start","left-end":"right-end","top-start":"top-end","top-end":"top-start",right:"left","right-start":"left-start","right-end":"left-end","bottom-start":"bottom-end","bottom-end":"bottom-start"}[retVal]||retVal}return retVal},getFallbackPlacements=(isRtl,placement,fallbackPlacements)=>{if(Array.isArray(fallbackPlacements)&&fallbackPlacements.length>0)return fallbackPlacements.map((fallback=>toFloatingPlacement(isRtl,fallback)));const side=placement.split("-")[0],sameSideFallbacks=[...PLACEMENT_LISTS_MAP[side]],oppositeSideFallbacks=PLACEMENT_LISTS_MAP[OPPOSITE_PLACEMENT_MAP[side]];return sameSideFallbacks.splice(sameSideFallbacks.indexOf(placement),1),[...sameSideFallbacks,...oppositeSideFallbacks]},toMenuPosition=placement=>void 0===placement||"auto"===placement?"bottom":placement.split("-")[0],toArrowPosition=placement=>({auto:"top",top:"bottom","top-start":"bottom-left","top-end":"bottom-right",right:"left","right-start":"left-top","right-end":"left-bottom",bottom:"top","bottom-start":"top-left","bottom-end":"top-right",left:"right","left-start":"right-top","left-end":"right-bottom"}[placement||"auto"]),toItem=props=>({value:props.value,label:props.label,...props.name&&{name:props.name},...props.isDisabled&&{disabled:props.isDisabled},...props.isSelected&&{selected:props.isSelected},...props.selectionType&&{type:props.selectionType},..."next"===props.type&&{isNext:!0},..."previous"===props.type&&{isPrevious:!0}}),toItems=(children,type)=>react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce(((items,item)=>{const retVal=items;if((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(item))if("value"in item.props)retVal.push(toItem({...item.props,selectionType:type}));else{const props=item.props,groupLabel=props.legend||props["aria-label"],isSelectableGroup=props.type&&["checkbox","radio"].includes(props.type);if(groupLabel||isSelectableGroup){const groupItems=toItems(props.children,props.type);retVal.push({label:props.legend||props["aria-label"],items:groupItems})}}return retVal}),[])},"./packages/dropdowns.next/src/views/menu/StyledItem.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>StyledItem});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_combobox_StyledOption__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledOption.ts");const StyledItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_combobox_StyledOption__WEBPACK_IMPORTED_MODULE_1__.o).attrs({"data-garden-id":"dropdowns.menu.item","data-garden-version":"storybook"}).withConfig({displayName:"StyledItem",componentId:"sc-1rlz2s1-0"})(["",";"],(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)("dropdowns.menu.item",props)));StyledItem.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/dropdowns.next/src/views/menu/StyledItemContent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>StyledItemContent});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_combobox_StyledOptionContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledOptionContent.ts");const StyledItemContent=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_combobox_StyledOptionContent__WEBPACK_IMPORTED_MODULE_1__.d).attrs({"data-garden-id":"dropdowns.menu.item.content","data-garden-version":"storybook"}).withConfig({displayName:"StyledItemContent",componentId:"sc-lycr0m-0"})(["",";"],(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)("dropdowns.menu.item.content",props)));StyledItemContent.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/dropdowns.next/src/views/menu/StyledItemTypeIcon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>StyledItemTypeIcon});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_combobox_StyledOptionTypeIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledOptionTypeIcon.ts"),_StyledItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/dropdowns.next/src/views/menu/StyledItem.ts");const StyledItemTypeIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_combobox_StyledOptionTypeIcon__WEBPACK_IMPORTED_MODULE_1__.R).attrs({"data-garden-id":"dropdowns.menu.item.type_icon","data-garden-version":"storybook"}).withConfig({displayName:"StyledItemTypeIcon",componentId:"sc-15p2dtm-0"})(["","[aria-checked='true'] > &{opacity:1;}",";"],_StyledItem__WEBPACK_IMPORTED_MODULE_2__.M,(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z)("dropdowns.menu.item.type_icon",props)));StyledItemTypeIcon.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_4__.Z}},"./packages/dropdowns.next/src/views/menu/StyledSeparator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>StyledSeparator});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_combobox_StyledListboxSeparator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/dropdowns.next/src/views/combobox/StyledListboxSeparator.ts");const StyledSeparator=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_combobox_StyledListboxSeparator__WEBPACK_IMPORTED_MODULE_1__.Q).attrs({"data-garden-id":"dropdowns.menu.separator","data-garden-version":"storybook"}).withConfig({displayName:"StyledSeparator",componentId:"sc-jke693-0"})(["",";"],(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)("dropdowns.menu.separator",props)));StyledSeparator.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}}}]);