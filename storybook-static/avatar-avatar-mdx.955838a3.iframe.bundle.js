/*! For license information please see avatar-avatar-mdx.955838a3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkalfabit_web_next=self.webpackChunkalfabit_web_next||[]).push([[625],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./components/avatar/avatar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarImage:()=>avatar_stories_AvatarImage,AvatarLarge:()=>AvatarLarge,AvatarMedium:()=>AvatarMedium,AvatarSmall:()=>AvatarSmall,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>avatar_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),UserIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/UserIcon.js"),__jsx=react.createElement,AvatarIcon=function AvatarIcon(){return __jsx(UserIcon.Z,{className:"absolute w-1/2 h-1/2"})};AvatarIcon.displayName="AvatarIcon";const avatar_icon=AvatarIcon;var next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),avatar_image_jsx=react.createElement,AvatarImage=function AvatarImage(_ref){var src=_ref.src,altDescription=_ref.altDescription;return avatar_image_jsx("div",null,avatar_image_jsx(next_image.Z,{src,alt:altDescription,className:"rounded-full",width:100,height:100}))};AvatarImage.displayName="AvatarImage";const avatar_image=AvatarImage;try{avatarimage.displayName="avatarimage",avatarimage.__docgenInfo={description:"",displayName:"avatarimage",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},altDescription:{defaultValue:null,description:"",name:"altDescription",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/avatar/avatar-image.tsx#avatarimage"]={docgenInfo:avatarimage.__docgenInfo,name:"avatarimage",path:"components/avatar/avatar-image.tsx#avatarimage"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["size","image","description","className"],avatar_jsx=react.createElement,avatarSizeMap={xs:"w-5 h-5",sm:"w-6 h-6",md:"w-8 h-8",lg:"w-9 h-9"},Avatar=function Avatar(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"xs":_ref$size,image=_ref.image,_ref$description=_ref.description,description=void 0===_ref$description?"":_ref$description,className=_ref.className,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),avatarSizeClass=avatarSizeMap[size],avatarComponent=image?avatar_jsx(avatar_image,{src:image,altDescription:description}):avatar_jsx(avatar_icon,null);return avatar_jsx("div",(0,esm_extends.Z)({className:classnames_default()("relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400",avatarSizeClass,className)},rest),avatarComponent)};Avatar.displayName="Avatar";const avatar_avatar=Avatar;try{avatar.displayName="avatar",avatar.__docgenInfo={description:"",displayName:"avatar",props:{size:{defaultValue:{value:"xs"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/avatar/avatar.tsx#avatar"]={docgenInfo:avatar.__docgenInfo,name:"avatar",path:"components/avatar/avatar.tsx#avatar"})}catch(__react_docgen_typescript_loader_error){}const avatar_stories={title:"Design System/Atoms/Avatar",component:avatar_avatar,argTypes:{className:{type:"string"},size:{type:"string"}}};var Primary={args:{}},avatar_stories_AvatarImage={args:{size:"lg",image:"https://placehold.co/400x400.png"}},AvatarSmall={args:{size:"sm"}},AvatarMedium={args:{size:"md"}},AvatarLarge={args:{size:"lg"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}},avatar_stories_AvatarImage.parameters={...avatar_stories_AvatarImage.parameters,docs:{...avatar_stories_AvatarImage.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'lg',\n    image: 'https://placehold.co/400x400.png'\n  }\n}",...avatar_stories_AvatarImage.parameters?.docs?.source}}},AvatarSmall.parameters={...AvatarSmall.parameters,docs:{...AvatarSmall.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'sm'\n  }\n}",...AvatarSmall.parameters?.docs?.source}}},AvatarMedium.parameters={...AvatarMedium.parameters,docs:{...AvatarMedium.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'md'\n  }\n}",...AvatarMedium.parameters?.docs?.source}}},AvatarLarge.parameters={...AvatarLarge.parameters,docs:{...AvatarLarge.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'lg'\n  }\n}",...AvatarLarge.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","AvatarImage","AvatarSmall","AvatarMedium","AvatarLarge"]},"./components/avatar/avatar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_home_jawa_Desktop_courses_alura_front_end_formacoes_nextjs_e_tailwind_construindo_um_design_system_06_curso_react_eleve_o_nivel_da_sua_documentacao_no_storybook_2_codigo_alfabit_web_next_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_avatar_stories_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/avatar/avatar.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h3:"h3",h2:"h2"},(0,_home_jawa_Desktop_courses_alura_front_end_formacoes_nextjs_e_tailwind_construindo_um_design_system_06_curso_react_eleve_o_nivel_da_sua_documentacao_no_storybook_2_codigo_alfabit_web_next_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_avatar_stories_ts__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"avatar",children:"Avatar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"O componente Avatar exibe uma imagem personalizada, caso fornecida, representando um usuário ou uma entidade. Caso contrário, é exibido um ícone padrão."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Essa pequena representação visual é comumente usada para identificar e diferenciar usuários em aplicativos e interfaces."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"pequeno",children:"Pequeno"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_avatar_stories_ts__WEBPACK_IMPORTED_MODULE_2__.AvatarSmall,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"médio",children:"Médio"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_avatar_stories_ts__WEBPACK_IMPORTED_MODULE_2__.AvatarMedium,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"grande",children:"Grande"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_avatar_stories_ts__WEBPACK_IMPORTED_MODULE_2__.AvatarLarge,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"avatar-image",children:"Avatar Image"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_avatar_stories_ts__WEBPACK_IMPORTED_MODULE_2__.AvatarImage,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"documentação-interativa",children:"Documentação Interativa"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_jawa_Desktop_courses_alura_front_end_formacoes_nextjs_e_tailwind_construindo_um_design_system_06_curso_react_eleve_o_nivel_da_sua_documentacao_no_storybook_2_codigo_alfabit_web_next_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);