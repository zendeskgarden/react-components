"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[3664],{"./packages/dropdowns/demo/stories/DropdownStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>DropdownStory});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var Grid=__webpack_require__("./packages/grid/src/elements/Grid.tsx"),Row=__webpack_require__("./packages/grid/src/elements/Row.tsx"),Col=__webpack_require__("./packages/grid/src/elements/Col.tsx"),Dropdown=__webpack_require__("./packages/dropdowns/src/elements/Dropdown/Dropdown.tsx"),leaf_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/leaf-stroke.svg"),AddItem=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/AddItem.tsx"),ItemMeta=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/ItemMeta.tsx"),HeaderItem=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/HeaderItem.tsx"),HeaderIcon=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/HeaderIcon.tsx"),NextItem=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/NextItem.tsx"),PreviousItem=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/PreviousItem.tsx"),MediaItem=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/MediaItem.tsx"),MediaFigure=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/MediaFigure.tsx"),MediaBody=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/MediaBody.tsx"),Item=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/Item.tsx"),Menu=__webpack_require__("./packages/dropdowns/src/elements/Menu/Menu.tsx"),Separator=__webpack_require__("./packages/dropdowns/src/elements/Menu/Separator.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuItem=_ref=>{let{text:children,type,hasIcon,meta,...props}=_ref;switch(type){case"add":return(0,jsx_runtime.jsxs)(AddItem.k,{...props,children:[children,meta&&(0,jsx_runtime.jsx)(ItemMeta.i,{children:meta})]});case"header":return(0,jsx_runtime.jsxs)(HeaderItem.A,{hasIcon,children:[hasIcon&&(0,jsx_runtime.jsx)(HeaderIcon.c,{children:(0,jsx_runtime.jsx)(leaf_stroke.c,{})}),children]});case"next":return(0,jsx_runtime.jsxs)(NextItem.w,{...props,children:[children,meta&&(0,jsx_runtime.jsx)(ItemMeta.i,{children:meta})]});case"previous":return(0,jsx_runtime.jsxs)(PreviousItem.U,{...props,children:[children,meta&&(0,jsx_runtime.jsx)(ItemMeta.i,{children:meta})]});default:return hasIcon?(0,jsx_runtime.jsxs)(MediaItem.y,{...props,children:[(0,jsx_runtime.jsx)(MediaFigure.S,{children:(0,jsx_runtime.jsx)(leaf_stroke.c,{})}),(0,jsx_runtime.jsxs)(MediaBody.X,{children:[children,meta&&(0,jsx_runtime.jsx)(ItemMeta.i,{children:meta})]})]}):(0,jsx_runtime.jsxs)(Item.i,{...props,children:[children,meta&&(0,jsx_runtime.jsx)(ItemMeta.i,{children:meta})]})}},MenuStory=_ref2=>{let{items,itemProps,...args}=_ref2;return(0,jsx_runtime.jsx)(Menu.i,{...args,children:items.map(((item,index)=>"---"===item?(0,jsx_runtime.jsx)(Separator.U,{},index):(0,jsx_runtime.jsx)(MenuItem,{...itemProps,...item,value:item},index)))})};MenuStory.displayName="MenuStory";const DropdownStory=_ref=>{let{colProps,children,menuProps,items,itemProps,...args}=_ref;return(0,jsx_runtime.jsx)(Grid.y,{children:(0,jsx_runtime.jsx)(Row.W,{justifyContent:"center",style:{height:"calc(100vh - 80px)"},children:(0,jsx_runtime.jsx)(Col.q,{alignSelf:"center",...colProps,children:(0,jsx_runtime.jsxs)(Dropdown.c,{...args,downshiftProps:{itemToString:item=>item&&item.value,...args.downshiftProps},children:[children,(0,jsx_runtime.jsx)(MenuStory,{items,itemProps,...menuProps})]})})})})};DropdownStory.displayName="DropdownStory"},"./packages/dropdowns/demo/stories/data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AP:()=>AUTOCOMPLETE_ITEMS,EH:()=>SELECT_ITEMS,O4:()=>MULTISELECT_ITEMS,SE:()=>COMBOBOX_ITEMS,a_:()=>DROPDOWN_PLACEMENT,i2:()=>MENU_ITEMS});const AUTOCOMPLETE_ITEMS=[{text:"Asparagus",value:"auto-item-01"},{text:"Brussel sprouts",value:"auto-item-02"},{text:"Cauliflower",value:"auto-item-03"},{text:"Garlic",value:"auto-item-04"},{text:"Jerusalem artichoke",value:"auto-item-05"},{text:"Kale",value:"auto-item-06"},{text:"Lettuce",value:"auto-item-07"},{text:"Onion",value:"auto-item-08"},{text:"Mushroom",value:"auto-item-09"},{text:"Potato",value:"auto-item-10"},{text:"Radish",value:"auto-item-11"},{text:"Spinach",value:"auto-item-12"},{text:"Tomato",value:"auto-item-13"},{text:"Yam",value:"auto-item-14"},{text:"Zucchini",value:"auto-item-15"}],DROPDOWN_PLACEMENT=["top","bottom","auto"],MENU_ITEMS=[{type:"header",text:"Header item",value:"item-1"},"---",{text:"Item",value:"item-2"},{type:"next",text:"Next item",value:"item-3"},{text:"Item",meta:"Meta",value:"item-4"},{text:"Item",value:"item-5"},"---",{type:"add",text:"Add item",value:"item-6"}],MULTISELECT_ITEMS=[{text:"Aster",value:"multi-item-01"},{text:"Bachelor's button",value:"multi-item-02"},{text:"Celosia",value:"multi-item-03"},{text:"Dusty miller",value:"multi-item-04"},{text:"Everlasting winged",value:"multi-item-05"},{text:"Four o'clock",value:"multi-item-06"},{text:"Geranium",value:"multi-item-07"},{text:"Honesty",value:"multi-item-08"},{text:"Impatiens",value:"multi-item-09"},{text:"Johnny jump-up",value:"multi-item-10"},{text:"Lobelia",value:"multi-item-11"},{text:"Marigold",value:"multi-item-12"},{text:"Nastutium",value:"multi-item-13"},{text:"Ocimum (basil)",value:"multi-item-14"},{text:"Petunia",value:"multi-item-15"},{text:"Quaking grass",value:"multi-item-16"},{text:"Rose moss",value:"multi-item-17"},{text:"Salvia",value:"multi-item-18"},{text:"Torenia",value:"multi-item-19"},{text:"Ursinia",value:"multi-item-20"},{text:"Verbena",value:"multi-item-21"},{text:"Wax begonia",value:"multi-item-22"},{text:"Xeranthemum",value:"multi-item-23"},{text:"Yellow cosmos",value:"multi-item-24"},{text:"Zinnia",value:"multi-item-25"}],SELECT_ITEMS=[{text:"Apple",value:"item-1"},{text:"Banana",value:"item-2"},{text:"Carrot",value:"item-3"},{text:"Grape",value:"item-4"},{text:"Kiwi",value:"item-5"},{text:"Quince",value:"item-6"}],COMBOBOX_ITEMS=[...AUTOCOMPLETE_ITEMS,...MULTISELECT_ITEMS].sort()},"./packages/dropdowns/src/elements/Menu/Items/AddItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>AddItem});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),plus_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/plus-stroke.svg"),Item=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/Item.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledItem=__webpack_require__("./packages/dropdowns/src/styled/items/StyledItem.ts");const StyledAddItem=(0,styled_components_browser_esm.cp)(StyledItem.m).attrs({"data-garden-id":"dropdowns.add_item","data-garden-version":"storybook"}).withConfig({displayName:"StyledAddItem",componentId:"sc-ekqk50-0"})(["color:",";",";"],(props=>!props.disabled&&(0,getColor.M)("primaryHue",600,props.theme)),(props=>(0,retrieveComponentStyles.c)("dropdowns.add_item",props)));StyledAddItem.defaultProps={theme:theme.c};var StyledItemIcon=__webpack_require__("./packages/dropdowns/src/styled/items/StyledItemIcon.ts"),useMenuContext=__webpack_require__("./packages/dropdowns/src/utils/useMenuContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AddItemComponent=react.forwardRef(((_ref,ref)=>{let{children,disabled,...props}=_ref;const{isCompact}=(0,useMenuContext.c)();return(0,jsx_runtime.jsxs)(StyledAddItem,{ref,disabled,...props,children:[(0,jsx_runtime.jsx)(StyledItemIcon.A,{isCompact,isVisible:!0,isDisabled:disabled,children:(0,jsx_runtime.jsx)(plus_stroke.c,{})}),children]})})),AddItem=react.forwardRef(((props,ref)=>(0,jsx_runtime.jsx)(Item.i,{component:AddItemComponent,ref,...props,hasIcon:!0})));AddItem.displayName="AddItem",AddItem.propTypes={value:prop_types_default().any,disabled:prop_types_default().bool};try{AddItem.displayName="AddItem",AddItem.__docgenInfo={description:"",displayName:"AddItem",props:{disabled:{defaultValue:null,description:"Indicates that the element is not interactive",name:"disabled",required:!1,type:{name:"boolean"}},isDanger:{defaultValue:null,description:"Applies danger styling",name:"isDanger",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Sets the value that is returned upon selection",name:"value",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/elements/Menu/Items/AddItem.tsx#AddItem"]={docgenInfo:AddItem.__docgenInfo,name:"AddItem",path:"packages/dropdowns/src/elements/Menu/Items/AddItem.tsx#AddItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns/src/elements/Menu/Items/HeaderIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>HeaderIcon});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledHeaderIcon=styled_components_browser_esm.cp.div.attrs({"data-garden-id":"dropdowns.header_icon","data-garden-version":"storybook"}).withConfig({displayName:"StyledHeaderIcon",componentId:"sc-1fl6nsz-0"})(["display:flex;position:absolute;top:0;bottom:0;align-items:center;justify-content:center;",":","px;color:",";& > *{width:",";height:",";}",";"],(props=>props.theme.rtl?"right":"left"),(props=>3*props.theme.space.base),(props=>(0,getColor.M)("neutralHue",600,props.theme)),(props=>props.theme.iconSizes.md),(props=>props.theme.iconSizes.md),(props=>(0,retrieveComponentStyles.c)("dropdowns.header_icon",props)));StyledHeaderIcon.defaultProps={theme:theme.c};var useMenuContext=__webpack_require__("./packages/dropdowns/src/utils/useMenuContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HeaderIcon=react.forwardRef(((props,ref)=>{const{isCompact}=(0,useMenuContext.c)();return(0,jsx_runtime.jsx)(StyledHeaderIcon,{ref,isCompact,...props})}));HeaderIcon.displayName="HeaderIcon";try{HeaderIcon.displayName="HeaderIcon",HeaderIcon.__docgenInfo={description:"",displayName:"HeaderIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/elements/Menu/Items/HeaderIcon.tsx#HeaderIcon"]={docgenInfo:HeaderIcon.__docgenInfo,name:"HeaderIcon",path:"packages/dropdowns/src/elements/Menu/Items/HeaderIcon.tsx#HeaderIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns/src/elements/Menu/Items/HeaderItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HeaderItem});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledItem=__webpack_require__("./packages/dropdowns/src/styled/items/StyledItem.ts");const getHorizontalPadding=props=>{if(!props.hasIcon)return 3*props.theme.space.base+"px"},StyledHeaderItem=(0,styled_components_browser_esm.cp)(StyledItem.m).attrs({"data-garden-id":"dropdowns.header_item","data-garden-version":"storybook"}).withConfig({displayName:"StyledHeaderItem",componentId:"sc-137filx-0"})(["cursor:default;padding-right:",";padding-left:",";font-weight:",";",";"],(props=>getHorizontalPadding(props)),(props=>getHorizontalPadding(props)),(props=>props.theme.fontWeights.semibold),(props=>(0,retrieveComponentStyles.c)("dropdowns.header_item",props)));StyledHeaderItem.defaultProps={theme:theme.c};var useMenuContext=__webpack_require__("./packages/dropdowns/src/utils/useMenuContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HeaderItem=react.forwardRef(((props,ref)=>{const{isCompact}=(0,useMenuContext.c)();return(0,jsx_runtime.jsx)(StyledHeaderItem,{ref,isCompact,...props})}));HeaderItem.displayName="HeaderItem";try{HeaderItem.displayName="HeaderItem",HeaderItem.__docgenInfo={description:"",displayName:"HeaderItem",props:{hasIcon:{defaultValue:null,description:"Applies icon styling",name:"hasIcon",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/elements/Menu/Items/HeaderItem.tsx#HeaderItem"]={docgenInfo:HeaderItem.__docgenInfo,name:"HeaderItem",path:"packages/dropdowns/src/elements/Menu/Items/HeaderItem.tsx#HeaderItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns/src/elements/Menu/Items/ItemMeta.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>ItemMeta});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledItemMeta=styled_components_browser_esm.cp.span.attrs({"data-garden-id":"dropdowns.item_meta","data-garden-version":"storybook"}).withConfig({displayName:"StyledItemMeta",componentId:"sc-k6xy28-0"})(["display:block;line-height:","px;color:",";font-size:",";",";"],(props=>props.theme.space.base*(props.isCompact?3:4)),(props=>(0,getColor.M)("neutralHue",props.isDisabled?400:600,props.theme)),(props=>props.theme.fontSizes.sm),(props=>(0,retrieveComponentStyles.c)("dropdowns.item_meta",props)));StyledItemMeta.defaultProps={theme:theme.c};var useMenuContext=__webpack_require__("./packages/dropdowns/src/utils/useMenuContext.ts"),useItemContext=__webpack_require__("./packages/dropdowns/src/utils/useItemContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ItemMeta=react.forwardRef(((props,ref)=>{const{isCompact}=(0,useMenuContext.c)(),{isDisabled}=(0,useItemContext.c)();return(0,jsx_runtime.jsx)(StyledItemMeta,{ref,isCompact,isDisabled,...props})}));ItemMeta.displayName="ItemMeta";try{ItemMeta.displayName="ItemMeta",ItemMeta.__docgenInfo={description:"",displayName:"ItemMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/elements/Menu/Items/ItemMeta.tsx#ItemMeta"]={docgenInfo:ItemMeta.__docgenInfo,name:"ItemMeta",path:"packages/dropdowns/src/elements/Menu/Items/ItemMeta.tsx#ItemMeta"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns/src/elements/Menu/Items/MediaBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>MediaBody});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledMediaBody=styled_components_browser_esm.cp.div.attrs({"data-garden-id":"dropdowns.media_body","data-garden-version":"storybook"}).withConfig({displayName:"StyledMediaBody",componentId:"sc-36j7ef-0"})(["display:block;overflow:hidden;padding-",":","px;",";"],(props=>props.theme.rtl?"right":"left"),(props=>2*props.theme.space.base),(props=>(0,retrieveComponentStyles.c)("dropdowns.media_body",props)));StyledMediaBody.defaultProps={theme:theme.c};var useMenuContext=__webpack_require__("./packages/dropdowns/src/utils/useMenuContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MediaBody=react.forwardRef(((props,ref)=>{const{isCompact}=(0,useMenuContext.c)();return(0,jsx_runtime.jsx)(StyledMediaBody,{ref,isCompact,...props})}));MediaBody.displayName="MediaBody";try{MediaBody.displayName="MediaBody",MediaBody.__docgenInfo={description:"",displayName:"MediaBody",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/elements/Menu/Items/MediaBody.tsx#MediaBody"]={docgenInfo:MediaBody.__docgenInfo,name:"MediaBody",path:"packages/dropdowns/src/elements/Menu/Items/MediaBody.tsx#MediaBody"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns/src/elements/Menu/Items/MediaFigure.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>MediaFigure});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledMediaFigure=(0,styled_components_browser_esm.cp)((_ref=>{let{children,isCompact,theme,...props}=_ref;return react.cloneElement(react.Children.only(children),props)})).attrs({"data-garden-id":"dropdowns.media_figure","data-garden-version":"storybook"}).withConfig({displayName:"StyledMediaFigure",componentId:"sc-2f2x8x-0"})(["float:",";margin-top:","px !important;width:",";height:",";",";"],(props=>props.theme.rtl?"right":"left"),(props=>.5*props.theme.space.base),(props=>props.theme.iconSizes.md),(props=>props.theme.iconSizes.md),(props=>(0,retrieveComponentStyles.c)("dropdowns.media_figure",props)));StyledMediaFigure.defaultProps={theme:theme.c};var useMenuContext=__webpack_require__("./packages/dropdowns/src/utils/useMenuContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MediaFigure=props=>{const{isCompact}=(0,useMenuContext.c)();return(0,jsx_runtime.jsx)(StyledMediaFigure,{isCompact,...props})};MediaFigure.displayName="MediaFigure";try{MediaFigure.displayName="MediaFigure",MediaFigure.__docgenInfo={description:"",displayName:"MediaFigure",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/elements/Menu/Items/MediaFigure.tsx#MediaFigure"]={docgenInfo:MediaFigure.__docgenInfo,name:"MediaFigure",path:"packages/dropdowns/src/elements/Menu/Items/MediaFigure.tsx#MediaFigure"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns/src/elements/Menu/Items/MediaItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>MediaItem});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Item=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/Item.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledItem=__webpack_require__("./packages/dropdowns/src/styled/items/StyledItem.ts");const StyledMediaItem=(0,styled_components_browser_esm.cp)(StyledItem.m).attrs({"data-garden-id":"dropdowns.media_item","data-garden-version":"storybook"}).withConfig({displayName:"StyledMediaItem",componentId:"sc-ikwshz-0"})(["",";"],(props=>(0,retrieveComponentStyles.c)("dropdowns.media_item",props)));StyledMediaItem.defaultProps={theme:theme.c};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MediaItem=react.forwardRef(((props,ref)=>(0,jsx_runtime.jsx)(Item.i,{component:StyledMediaItem,ref,...props})));MediaItem.displayName="MediaItem",MediaItem.propTypes={value:prop_types_default().any,disabled:prop_types_default().bool};try{MediaItem.displayName="MediaItem",MediaItem.__docgenInfo={description:"",displayName:"MediaItem",props:{disabled:{defaultValue:null,description:"Indicates that the element is not interactive",name:"disabled",required:!1,type:{name:"boolean"}},isDanger:{defaultValue:null,description:"Applies danger styling",name:"isDanger",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Sets the value that is returned upon selection",name:"value",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/elements/Menu/Items/MediaItem.tsx#MediaItem"]={docgenInfo:MediaItem.__docgenInfo,name:"MediaItem",path:"packages/dropdowns/src/elements/Menu/Items/MediaItem.tsx#MediaItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns/src/elements/Menu/Items/NextItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>NextItem});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Item=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/Item.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledItem=__webpack_require__("./packages/dropdowns/src/styled/items/StyledItem.ts"),StyledItemIcon=__webpack_require__("./packages/dropdowns/src/styled/items/StyledItemIcon.ts");const StyledNextItem=(0,styled_components_browser_esm.cp)(StyledItem.m).attrs({"data-garden-id":"dropdowns.next_item","data-garden-version":"storybook"}).withConfig({displayName:"StyledNextItem",componentId:"sc-1bcygn5-0"})(["","{right:",";left:",";}",";"],StyledItemIcon.A,(props=>props.theme.rtl?"auto":3*props.theme.space.base+"px"),(props=>props.theme.rtl?3*props.theme.space.base+"px":"auto"),(props=>(0,retrieveComponentStyles.c)("dropdowns.next_item",props)));StyledNextItem.defaultProps={theme:theme.c};var chevron_right_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NextIconComponent=_ref=>{let{className}=_ref;return(0,jsx_runtime.jsx)(chevron_right_stroke.c,{"data-garden-id":"dropdowns.next_item_icon","data-garden-version":"storybook",className})};NextIconComponent.displayName="NextIconComponent";const StyledNextIcon=(0,styled_components_browser_esm.cp)(NextIconComponent).withConfig({displayName:"StyledNextIcon",componentId:"sc-1rinki2-0"})(["transform:",";color:",";",";"],(props=>props.theme.rtl&&"rotate(180deg)"),(props=>props.isDisabled?"inherit":(0,getColor.M)("neutralHue",600,props.theme)),(props=>(0,retrieveComponentStyles.c)("dropdowns.next_item_icon",props)));StyledNextIcon.defaultProps={theme:theme.c};try{StyledNextIcon.displayName="StyledNextIcon",StyledNextIcon.__docgenInfo={description:"",displayName:"StyledNextIcon",props:{isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:{value:"{\n  borders,\n  borderRadii,\n  borderStyles,\n  borderWidths,\n  breakpoints,\n  colors: {\n    base: 'light',\n    ...colors\n  },\n  components: {},\n  fonts,\n  fontSizes,\n  fontWeights,\n  iconSizes,\n  lineHeights,\n  palette,\n  rtl: false,\n  shadowWidths,\n  shadows,\n  space\n}"},description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/styled/items/StyledNextIcon.tsx#StyledNextIcon"]={docgenInfo:StyledNextIcon.__docgenInfo,name:"StyledNextIcon",path:"packages/dropdowns/src/styled/items/StyledNextIcon.tsx#StyledNextIcon"})}catch(__react_docgen_typescript_loader_error){}var useDropdownContext=__webpack_require__("./packages/dropdowns/src/utils/useDropdownContext.ts"),useMenuContext=__webpack_require__("./packages/dropdowns/src/utils/useMenuContext.ts");const NextItemComponent=react.forwardRef(((_ref,ref)=>{let{children,disabled,...props}=_ref;const{isCompact}=(0,useMenuContext.c)();return(0,jsx_runtime.jsxs)(StyledNextItem,{ref,disabled,...props,children:[(0,jsx_runtime.jsx)(StyledItemIcon.A,{isCompact,isDisabled:disabled,isVisible:!0,children:(0,jsx_runtime.jsx)(StyledNextIcon,{isDisabled:disabled})}),children]})})),NextItem=react.forwardRef(((_ref2,ref)=>{let{value,disabled,...props}=_ref2;const{nextItemsHashRef,downshift:{itemToString}}=(0,useDropdownContext.c)(),{itemIndexRef}=(0,useMenuContext.c)();return disabled||(nextItemsHashRef.current[itemToString(value)]=itemIndexRef.current),(0,jsx_runtime.jsx)(Item.i,{component:NextItemComponent,"aria-expanded":!0,disabled,value,ref,...props,hasIcon:!0})}));NextItem.displayName="NextItem",NextItem.propTypes={value:prop_types_default().any,disabled:prop_types_default().bool};try{NextItem.displayName="NextItem",NextItem.__docgenInfo={description:"",displayName:"NextItem",props:{disabled:{defaultValue:null,description:"Indicates that the element is not interactive",name:"disabled",required:!1,type:{name:"boolean"}},isDanger:{defaultValue:null,description:"Applies danger styling",name:"isDanger",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Sets the value that is returned upon selection",name:"value",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/elements/Menu/Items/NextItem.tsx#NextItem"]={docgenInfo:NextItem.__docgenInfo,name:"NextItem",path:"packages/dropdowns/src/elements/Menu/Items/NextItem.tsx#NextItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns/src/elements/Menu/Items/PreviousItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>PreviousItem});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Item=__webpack_require__("./packages/dropdowns/src/elements/Menu/Items/Item.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledItem=__webpack_require__("./packages/dropdowns/src/styled/items/StyledItem.ts");const StyledPreviousItem=(0,styled_components_browser_esm.cp)(StyledItem.m).attrs({"data-garden-id":"dropdowns.previous_item","data-garden-version":"storybook"}).withConfig({displayName:"StyledPreviousItem",componentId:"sc-1nmdds9-0"})(["font-weight:",";",";"],(props=>props.theme.fontWeights.semibold),(props=>(0,retrieveComponentStyles.c)("dropdowns.previous_item",props)));StyledPreviousItem.defaultProps={theme:theme.c};var StyledItemIcon=__webpack_require__("./packages/dropdowns/src/styled/items/StyledItemIcon.ts"),chevron_left_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PreviousIconComponent=_ref=>{let{className}=_ref;return(0,jsx_runtime.jsx)(chevron_left_stroke.c,{"data-garden-id":"dropdowns.previous_item_icon","data-garden-version":"storybook",className})};PreviousIconComponent.displayName="PreviousIconComponent";const StyledPreviousIcon=(0,styled_components_browser_esm.cp)(PreviousIconComponent).withConfig({displayName:"StyledPreviousIcon",componentId:"sc-czfwj7-0"})(["transform:",";color:",";",";"],(props=>props.theme.rtl&&"rotate(180deg)"),(props=>props.isDisabled?"inherit":(0,getColor.M)("neutralHue",600,props.theme)),(props=>(0,retrieveComponentStyles.c)("dropdowns.previous_item_icon",props)));StyledPreviousIcon.defaultProps={theme:theme.c};try{StyledPreviousIcon.displayName="StyledPreviousIcon",StyledPreviousIcon.__docgenInfo={description:"",displayName:"StyledPreviousIcon",props:{isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:{value:"{\n  borders,\n  borderRadii,\n  borderStyles,\n  borderWidths,\n  breakpoints,\n  colors: {\n    base: 'light',\n    ...colors\n  },\n  components: {},\n  fonts,\n  fontSizes,\n  fontWeights,\n  iconSizes,\n  lineHeights,\n  palette,\n  rtl: false,\n  shadowWidths,\n  shadows,\n  space\n}"},description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/styled/items/StyledPreviousIcon.tsx#StyledPreviousIcon"]={docgenInfo:StyledPreviousIcon.__docgenInfo,name:"StyledPreviousIcon",path:"packages/dropdowns/src/styled/items/StyledPreviousIcon.tsx#StyledPreviousIcon"})}catch(__react_docgen_typescript_loader_error){}var useDropdownContext=__webpack_require__("./packages/dropdowns/src/utils/useDropdownContext.ts"),useMenuContext=__webpack_require__("./packages/dropdowns/src/utils/useMenuContext.ts");const PreviousItemComponent=react.forwardRef(((_ref,ref)=>{let{children,disabled,...props}=_ref;const{isCompact}=(0,useMenuContext.c)();return(0,jsx_runtime.jsxs)(StyledPreviousItem,{ref,disabled,...props,children:[(0,jsx_runtime.jsx)(StyledItemIcon.A,{isCompact,isDisabled:disabled,isVisible:!0,children:(0,jsx_runtime.jsx)(StyledPreviousIcon,{isDisabled:disabled})}),children]})})),PreviousItem=react.forwardRef(((_ref2,ref)=>{let{value,disabled,...props}=_ref2;const{previousIndexRef}=(0,useDropdownContext.c)(),{itemIndexRef}=(0,useMenuContext.c)();return disabled||(previousIndexRef.current=itemIndexRef.current),(0,jsx_runtime.jsx)(Item.i,{component:PreviousItemComponent,"aria-expanded":!0,value,disabled,...props,ref,hasIcon:!0})}));PreviousItem.displayName="PreviousItem",PreviousItem.propTypes={value:prop_types_default().any,disabled:prop_types_default().bool};try{PreviousItem.displayName="PreviousItem",PreviousItem.__docgenInfo={description:"",displayName:"PreviousItem",props:{disabled:{defaultValue:null,description:"Indicates that the element is not interactive",name:"disabled",required:!1,type:{name:"boolean"}},isDanger:{defaultValue:null,description:"Applies danger styling",name:"isDanger",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Sets the value that is returned upon selection",name:"value",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/elements/Menu/Items/PreviousItem.tsx#PreviousItem"]={docgenInfo:PreviousItem.__docgenInfo,name:"PreviousItem",path:"packages/dropdowns/src/elements/Menu/Items/PreviousItem.tsx#PreviousItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns/src/elements/Menu/Separator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Separator});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledSeparator=styled_components_browser_esm.cp.li.attrs({"data-garden-id":"dropdowns.separator","data-garden-version":"storybook",role:"separator"}).withConfig({displayName:"StyledSeparator",componentId:"sc-1mrnp18-0"})(["display:block;margin:","px 0;border-bottom:",";",";"],(props=>props.theme.space.base),(props=>`${props.theme.borders.sm} ${(0,getColor.M)("neutralHue",200,props.theme)}`),(props=>(0,retrieveComponentStyles.c)("dropdowns.separator",props)));StyledSeparator.defaultProps={theme:theme.c};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Separator=react.forwardRef(((props,ref)=>(0,jsx_runtime.jsx)(StyledSeparator,{ref,...props})));Separator.displayName="Separator";try{Separator.displayName="Separator",Separator.__docgenInfo={description:"",displayName:"Separator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdowns/src/elements/Menu/Separator.tsx#Separator"]={docgenInfo:Separator.__docgenInfo,name:"Separator",path:"packages/dropdowns/src/elements/Menu/Separator.tsx#Separator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/dropdowns/README.md":module=>{module.exports='# @zendeskgarden/react-dropdowns [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-dropdowns)](https://www.npmjs.com/package/@zendeskgarden/react-dropdowns)\n\nThis package includes components relating to dropdowns in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-dropdowns\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Basic Example\n\n```jsx\nimport { ThemeProvider } from \'@zendeskgarden/react-theming\';\nimport { Dropdown, Menu, Item, Trigger } from \'@zendeskgarden/react-dropdowns\';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Dropdown onSelect={value => console.log(`Selected: ${value}`)}>\n    <Trigger>\n      <button>This triggers a menu</button>\n    </Trigger>\n    <Menu placement="end" hasArrow>\n      <Item value="option-1">Option 1</Item>\n      <Item value="option-2">Option 2</Item>\n      <Item value="option-3">Option 3</Item>\n    </Menu>\n  </Dropdown>\n</ThemeProvider>;\n```\n\nFor all components within the `react-dropdowns` package, the menu layouts and\nimplementations are interchangeable.\n\nWhether you\'re making a `Select`, `Autocomplete`, or a traditional `Menu` the `<Menu>` implementation\nwill adapted to its consumer.\n\n## Usage\n\n### Overview\n\nThe `react-dropdowns` package abstracts the common concepts of `Menus`, `Selects`, and `Autocompletes`\ninto a common API. This includes consistent visuals, common keyboard interaction, and a fully accessible\nexperience for sighted and non-sighted users.\n\nThe customizations available within this can be broken into two groups: _placement / positioning_\nand _dropdown state_\n\n### Placement / Positioning\n\nInternally, the `<Dropdown>` component uses [PopperJS](https://popper.js.org/popper-documentation.html)\nfor its positioning calculations.\n\nThe `<Menu>` component accepts all customizations regarding placement, boundaries, overflows,\netc. via the `popperModifiers` prop.\n\n```jsx\n/** Customize default overflow settings to position against the `viewport` */\n<Menu popperModifiers={{ preventOverflow: { boundariesElement: \'viewport\' } }}>\n  <Item value="item-1">Item 1</Item>\n  <Item value="item-2">Item 2</Item>\n  <Item value="item-3">Item 3</Item>\n</Menu>\n```\n\n### Dropdown State\n\nWe use the [Downshift](https://github.com/downshift-js/downshift) render-prop library to\nhandle our keyboard and accessibility logic.\n\nThe following states can be controlled directly from the `<Dropdown>` component:\n\n- **isOpen** Whether the dropdown is currently open\n- **highlightedIndex** Which index is currently highlighted\n- **inputValue** The value of the input when it\'s used as an `Autocomplete`\n- **selectedItem** The currently selected item\n- **selectedItems** The currently selected items\n\nAll other customizations may be provided directly to the Downshift provider\nvia the `downshiftProps` prop.\n\nDownshift provides several advanced customization features that can be very helpful when\ncustomizing this component. The [stateReducer](https://github.com/downshift-js/downshift#statereducer)\npattern is a common customization strategy.\n\n### Server Side Rendering\n\nIf you are using server side rendering you may need to [configure specific Downshift settings](https://github.com/downshift-js/downshift#resetidcounter).\nThis package re-exports the Downshift `resetIdCounter` utility. It allows resetting the internal id\ncounter which is used to generate unique ids for Downshift.\n'}}]);