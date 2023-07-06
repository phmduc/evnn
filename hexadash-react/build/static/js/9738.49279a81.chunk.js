"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[9738],{3284:function(n,e,t){t.r(e),t.d(e,{BtnGroup:function(){return s},Button:function(){return d}});var o=t(1413),r=t(29439),a=t(45987),c=t(47313),l=t(71128),i=t(46417),u=["type","shape","icon","size","outlined","ghost","transparented","raised","squared","color","social","load","children"];function d(n){var e=n.type,t=n.shape,d=n.icon,s=n.size,p=n.outlined,f=n.ghost,h=n.transparented,m=n.raised,v=n.squared,b=n.color,x=n.social,g=n.load,y=n.children,Z=(0,a.Z)(n,u),k=(0,c.useState)({loading:!1}),C=(0,r.Z)(k,2),j=C[0],w=C[1];return(0,i.jsx)(l.ButtonStyled,(0,o.Z)((0,o.Z)({squared:v,outlined:p?1:0,ghost:f,transparent:h?1:0,raised:m?1:0,data:e,size:s,shape:t,type:e,icon:d,color:b,social:x,onClick:g&&function(){w({loading:!0})},loading:j.loading},Z),{},{children:y}))}function s(n){var e=n.children;return(0,i.jsx)(l.ButtonStyledGroup,{children:e})}d.defaultProps={type:"default"}},71128:function(n,e,t){t.r(e),t.d(e,{ButtonStyled:function(){return u},ButtonStyledGroup:function(){return d}});var o,r,a=t(30168),c=t(59491),l=t(70244),i=c.Z.Group,u=(0,l.ZP)(c.Z)(o||(o=(0,a.Z)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(function(n){var e=n.type,t=n.theme;return"default"!==e&&t["".concat(e,"-color")]}),(function(n){return"dashed"!==n.type?"solid":"dashed"}),(function(n){var e=n.theme;return"default"!==n.type?"#ffffff":e[e.mainContent]["gray-text"]}),(function(n){return n.shape?"40px":"4px"}),(function(n){var e=n.size,t=n.theme;return"default"!==e?t["btn-height-".concat(e)]:"44px"}),(function(n){var e=n.type,t=n.theme;return"default"!==e?t["white-color"]:t["light-color"]}),(function(n){var e=n.type,t=n.theme;return"default"!==e&&t["".concat(e,"-hover")]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var e=n.transparent,t=n.theme,o=n.type;return e&&function(n,e){return"\n        background: ".concat(n["".concat(e,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(n["".concat(e,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==e&&n["".concat(e,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==e&&n["".concat(e,"-hover")],"; \n        }\n    ")}(t,o)}),(function(n){var e=n.outlined,t=n.theme,o=n.type;return e&&function(n,e){return"\n        background: transparent;\n        border: 1px solid ".concat("light"!==e?n["".concat(e,"-color")]:n[n.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==e?n["".concat(e,"-color")]:n["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==e?n["".concat(e,"-hover")]:n["primary-color"],";\n          color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          }\n        }\n    ")}(t,o)}),(function(n){var e=n.ghost,t=n.theme;return e&&function(n){return"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(n["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(n["border-color-normal"]," !important;\n        }\n    ")}(t)}),(function(n){var e=n.raised,t=n.theme,o=n.type;return e&&function(n,e){return"\n        box-shadow: 0 8px 13px ".concat("white"!==e?n["".concat(e,"-color")]:n["light-color"],"20;\n    ")}(t,o)}),(function(n){var e=n.squared,t=n.theme,o=n.type;return e&&function(n,e){return"\n    background: ".concat("default"!==e&&n["".concat(e,"-color")],";\n    border: 1px solid ").concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat("default"!==e&&"#ffffff",";\n    }\n")}(t,o)}),(function(n){var e=n.squared,t=n.outlined,o=n.theme,r=n.type;return e&&t&&function(n,e){return"\n    background: transparent;\n    border: 1px solid ".concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat((function(n){var e=n.theme;return"default"!==n.type&&e["white-color"]}),";\n    }\n")}(o,r)}),(function(n){var e=n.social,t=n.color,o=n.shape;return e&&function(n,e){return"\n    background: ".concat(n,";\n    background: ").concat(n,";\n    border: 1px solid ").concat(n,";\n    color: ").concat((function(n){return n.theme["white-color"]}),";\n    border-radius: ").concat(e?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(n,"90;\n        border: 1px solid ").concat(n,"90;\n        color: ").concat((function(n){return n.theme["white-color"]}),";\n    }\n")}(t,o)})),d=(0,l.ZP)(i)(r||(r=(0,a.Z)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(function(n){var e=n.theme;return e[e.mainContent].bgNormal}))},68819:function(n,e,t){t.r(e);var o=t(1413),r=t(29439),a=t(47313),c=t(12008),l=t(68197),i=t(59624),u=t(66672),d=t(65192),s=t(79036),p=t(2135),f=t(23008),h=t(3284),m=t(33464),v=t(46417);e.default=function(){var n=c.Z.useForm(),e=(0,r.Z)(n,1)[0],t=(0,a.useState)({values:""}),b=(0,r.Z)(t,2),x=b[0],g=b[1];return(0,v.jsx)(l.Z,{justify:"center",children:(0,v.jsx)(i.Z,{xxl:10,xl:14,md:16,xs:24,children:(0,v.jsx)("div",{className:"user-work-form",children:(0,v.jsx)(f.BasicFormWrapper,{children:(0,v.jsxs)(c.Z,{style:{width:"100%"},form:e,name:"work",onFinish:function(n){g((0,o.Z)((0,o.Z)({},x),{},{values:n}))},children:[(0,v.jsx)(m.default,{className:"form-title",as:"h4",children:"Work Information"}),(0,v.jsx)(c.Z.Item,{name:"company",label:"Company Name",children:(0,v.jsx)(u.Z,{placeholder:"Company Name"})}),(0,v.jsx)(c.Z.Item,{name:"department",label:"Department",children:(0,v.jsx)(u.Z,{placeholder:"Department name"})}),(0,v.jsx)(c.Z.Item,{name:"designation",label:"Designation",children:(0,v.jsx)(u.Z,{placeholder:"Designation"})}),(0,v.jsx)(c.Z.Item,{name:"hiringDate",rules:[{type:"object",whitespace:!0}],label:"Hiring Date",children:(0,v.jsx)(d.Z,{format:"MM/DD/YYYY",style:{width:"100%"}})}),(0,v.jsx)(c.Z.Item,{name:"status",initialValue:"active",label:"Status",children:(0,v.jsxs)(s.ZP.Group,{children:[(0,v.jsx)(s.ZP,{value:"active",children:"Active"}),(0,v.jsx)(s.ZP,{value:"deactivated",children:"Deactivated"}),(0,v.jsx)(s.ZP,{value:"blocked",children:"Blocked"})]})}),(0,v.jsx)(c.Z.Item,{children:(0,v.jsxs)("div",{className:"add-user-bottom text-right",children:[(0,v.jsx)(h.Button,{className:"ant-btn ant-btn-light",type:"default",onClick:function(){return e.resetFields()},children:"Reset"}),(0,v.jsx)(h.Button,{htmlType:"submit",type:"primary",children:(0,v.jsx)(p.rU,{to:"/admin/users/add-user/social",children:"Next"})})]})})]})})})})})}},81176:function(n,e,t){function o(n){return Object.keys(n).reduce((function(e,t){return!t.startsWith("data-")&&!t.startsWith("aria-")&&"role"!==t||t.startsWith("data-__")||(e[t]=n[t]),e}),{})}t.d(e,{Z:function(){return o}})},1405:function(n,e,t){t.d(e,{Ag:function(){return c},IH:function(){return l},w:function(){return a}});var o=t(47313),r=o.createContext(null),a=r.Provider;e.ZP=r;var c=o.createContext(null),l=c.Provider},93492:function(n,e,t){var o=t(87462),r=t(4942),a=t(29439),c=t(46123),l=t.n(c),i=t(10288),u=t(47313),d=t(74714),s=t(21631),p=t(81176),f=t(1405),h=t(54146),m=u.forwardRef((function(n,e){var t,c=u.useContext(d.E_),m=c.getPrefixCls,v=c.direction,b=u.useContext(s.Z),x=(0,i.Z)(n.defaultValue,{value:n.value}),g=(0,a.Z)(x,2),y=g[0],Z=g[1],k=n.prefixCls,C=n.className,j=void 0===C?"":C,w=n.options,E=n.buttonStyle,P=void 0===E?"outline":E,O=n.disabled,N=n.children,I=n.size,D=n.style,B=n.id,S=n.onMouseEnter,M=n.onMouseLeave,z=n.onFocus,R=n.onBlur,_=m("radio",k),F="".concat(_,"-group"),G=N;w&&w.length>0&&(G=w.map((function(n){return"string"===typeof n||"number"===typeof n?u.createElement(h.Z,{key:n.toString(),prefixCls:_,disabled:O,value:n,checked:y===n},n):u.createElement(h.Z,{key:"radio-group-value-options-".concat(n.value),prefixCls:_,disabled:n.disabled||O,value:n.value,checked:y===n.value,style:n.style},n.label)})));var H=I||b,q=l()(F,"".concat(F,"-").concat(P),(t={},(0,r.Z)(t,"".concat(F,"-").concat(H),H),(0,r.Z)(t,"".concat(F,"-rtl"),"rtl"===v),t),j);return u.createElement("div",(0,o.Z)({},(0,p.Z)(n),{className:q,style:D,onMouseEnter:S,onMouseLeave:M,onFocus:z,onBlur:R,id:B,ref:e}),u.createElement(f.w,{value:{onChange:function(e){var t=y,o=e.target.value;"value"in n||Z(o);var r=n.onChange;r&&o!==t&&r(e)},value:y,disabled:n.disabled,name:n.name,optionType:n.optionType}},G))}));e.Z=u.memo(m)},79036:function(n,e,t){var o=t(93492),r=t(54146),a=t(95746),c=r.Z;c.Button=a.Z,c.Group=o.Z,c.__ANT_RADIO=!0,e.ZP=c},54146:function(n,e,t){var o=t(4942),r=t(87462),a=t(46123),c=t.n(a),l=t(56482),i=t(16945),u=t(47313),d=t(74714),s=t(98438),p=t(4431),f=t(1405),h=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t},m=function(n,e){var t,a=u.useContext(f.ZP),m=u.useContext(f.Ag),v=u.useContext(d.E_),b=v.getPrefixCls,x=v.direction,g=u.useRef(),y=(0,i.sQ)(e,g),Z=(0,u.useContext)(p.aM).isFormItemInput,k=n.prefixCls,C=n.className,j=n.children,w=n.style,E=n.disabled,P=h(n,["prefixCls","className","children","style","disabled"]),O=b("radio",k),N="button"===((null===a||void 0===a?void 0:a.optionType)||m)?"".concat(O,"-button"):O,I=(0,r.Z)({},P),D=u.useContext(s.Z);I.disabled=E||D,a&&(I.name=a.name,I.onChange=function(e){var t,o;null===(t=n.onChange)||void 0===t||t.call(n,e),null===(o=null===a||void 0===a?void 0:a.onChange)||void 0===o||o.call(a,e)},I.checked=n.value===a.value,I.disabled=I.disabled||a.disabled);var B=c()("".concat(N,"-wrapper"),(t={},(0,o.Z)(t,"".concat(N,"-wrapper-checked"),I.checked),(0,o.Z)(t,"".concat(N,"-wrapper-disabled"),I.disabled),(0,o.Z)(t,"".concat(N,"-wrapper-rtl"),"rtl"===x),(0,o.Z)(t,"".concat(N,"-wrapper-in-form-item"),Z),t),C);return u.createElement("label",{className:B,style:w,onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave},u.createElement(l.default,(0,r.Z)({},I,{type:"radio",prefixCls:N,ref:y})),void 0!==j?u.createElement("span",null,j):null)},v=u.forwardRef(m);e.Z=v},95746:function(n,e,t){var o=t(87462),r=t(47313),a=t(74714),c=t(1405),l=t(54146),i=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t},u=function(n,e){var t=r.useContext(a.E_).getPrefixCls,u=n.prefixCls,d=i(n,["prefixCls"]),s=t("radio",u);return r.createElement(c.IH,{value:"button"},r.createElement(l.Z,(0,o.Z)({prefixCls:s},d,{type:"radio",ref:e})))};e.Z=r.forwardRef(u)},56482:function(n,e,t){t.r(e),t.d(e,{Checkbox:function(){return f}});var o=t(87462),r=t(1413),a=t(4942),c=t(29439),l=t(45987),i=t(46123),u=t.n(i),d=t(10288),s=t(47313),p=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],f=(0,s.forwardRef)((function(n,e){var t,i=n.prefixCls,f=void 0===i?"rc-checkbox":i,h=n.className,m=n.style,v=n.checked,b=n.disabled,x=n.defaultChecked,g=void 0!==x&&x,y=n.type,Z=void 0===y?"checkbox":y,k=n.onChange,C=(0,l.Z)(n,p),j=(0,s.useRef)(null),w=(0,d.Z)(g,{value:v}),E=(0,c.Z)(w,2),P=E[0],O=E[1];(0,s.useImperativeHandle)(e,(function(){return{focus:function(){var n;null===(n=j.current)||void 0===n||n.focus()},blur:function(){var n;null===(n=j.current)||void 0===n||n.blur()},input:j.current}}));var N=u()(f,h,(t={},(0,a.Z)(t,"".concat(f,"-checked"),P),(0,a.Z)(t,"".concat(f,"-disabled"),b),t));return s.createElement("span",{className:N,style:m},s.createElement("input",(0,o.Z)({},C,{className:"".concat(f,"-input"),ref:j,onChange:function(e){b||("checked"in n||O(e.target.checked),null===k||void 0===k||k({target:(0,r.Z)((0,r.Z)({},n),{},{type:Z,checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},disabled:b,checked:!!P,type:Z})),s.createElement("span",{className:"".concat(f,"-inner")}))}));e.default=f}}]);