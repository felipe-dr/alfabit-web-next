/*! For license information please see divider-divider-stories.6c122308.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkalfabit_web_next=self.webpackChunkalfabit_web_next||[]).push([[927],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/divider/divider.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DivisorDark:()=>DivisorDark,DivisorWithProps:()=>DivisorWithProps,Primary:()=>Primary,ThicknessDivisor:()=>ThicknessDivisor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>divider_stories});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),_excluded=["width","height","children","bgColor"],__jsx=react.createElement,colorClassMap={light:"bg-light",dark:"bg-dark",black:"bg-black"},Divider=function Divider(_ref){var width=_ref.width,_ref$height=_ref.height,height=void 0===_ref$height?"h-[1px]":_ref$height,children=_ref.children,_ref$bgColor=_ref.bgColor,bgColor=void 0===_ref$bgColor?"black":_ref$bgColor,colorClass=((0,objectWithoutProperties.Z)(_ref,_excluded),colorClassMap[bgColor]),barClass=classnames_default()(children?"w-1/3":"w-1/2",height,colorClass);return __jsx("div",{className:classnames_default()(width,"flex items-center justify-center")},__jsx("div",{className:barClass}),children&&__jsx("div",{className:"px-3"},children),__jsx("div",{className:barClass}))};Divider.displayName="Divider";const divider_divider=Divider;try{divider.displayName="divider",divider.__docgenInfo={description:"",displayName:"divider",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"h-[1px]"},description:"",name:"height",required:!1,type:{name:"string"}},bgColor:{defaultValue:{value:"black"},description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"black"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/divider/divider.tsx#divider"]={docgenInfo:divider.__docgenInfo,name:"divider",path:"components/divider/divider.tsx#divider"})}catch(__react_docgen_typescript_loader_error){}const divider_stories={title:"Design System/Atoms/Divider",component:divider_divider,argTypes:{children:{type:"string"}}};var Primary={args:{}},Default={args:{}},DivisorWithProps={args:{children:"Olá mundo"}},ThicknessDivisor={args:{height:"h-[5px]"}},DivisorDark={args:{bgColor:"dark",height:"h-1"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},DivisorWithProps.parameters={...DivisorWithProps.parameters,docs:{...DivisorWithProps.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Olá mundo'\n  }\n}",...DivisorWithProps.parameters?.docs?.source}}},ThicknessDivisor.parameters={...ThicknessDivisor.parameters,docs:{...ThicknessDivisor.parameters?.docs,source:{originalSource:"{\n  args: {\n    height: 'h-[5px]'\n  }\n}",...ThicknessDivisor.parameters?.docs?.source}}},DivisorDark.parameters={...DivisorDark.parameters,docs:{...DivisorDark.parameters?.docs,source:{originalSource:"{\n  args: {\n    bgColor: 'dark',\n    height: 'h-1'\n  }\n}",...DivisorDark.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Default","DivisorWithProps","ThicknessDivisor","DivisorDark"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);