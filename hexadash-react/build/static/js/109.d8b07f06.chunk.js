"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[109],{3284:function(n,e,t){t.r(e),t.d(e,{BtnGroup:function(){return d},Button:function(){return u}});var o=t(1413),r=t(29439),a=t(45987),c=t(47313),i=t(71128),l=t(46417),s=["type","shape","icon","size","outlined","ghost","transparented","raised","squared","color","social","load","children"];function u(n){var e=n.type,t=n.shape,u=n.icon,d=n.size,p=n.outlined,f=n.ghost,h=n.transparented,m=n.raised,g=n.squared,x=n.color,b=n.social,v=n.load,y=n.children,Z=(0,a.Z)(n,s),C=(0,c.useState)({loading:!1}),j=(0,r.Z)(C,2),k=j[0],w=j[1];return(0,l.jsx)(i.ButtonStyled,(0,o.Z)((0,o.Z)({squared:g,outlined:p?1:0,ghost:f,transparent:h?1:0,raised:m?1:0,data:e,size:d,shape:t,type:e,icon:u,color:x,social:b,onClick:v&&function(){w({loading:!0})},loading:k.loading},Z),{},{children:y}))}function d(n){var e=n.children;return(0,l.jsx)(i.ButtonStyledGroup,{children:e})}u.defaultProps={type:"default"}},71128:function(n,e,t){t.r(e),t.d(e,{ButtonStyled:function(){return s},ButtonStyledGroup:function(){return u}});var o,r,a=t(30168),c=t(59491),i=t(70244),l=c.Z.Group,s=(0,i.ZP)(c.Z)(o||(o=(0,a.Z)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(function(n){var e=n.type,t=n.theme;return"default"!==e&&t["".concat(e,"-color")]}),(function(n){return"dashed"!==n.type?"solid":"dashed"}),(function(n){var e=n.theme;return"default"!==n.type?"#ffffff":e[e.mainContent]["gray-text"]}),(function(n){return n.shape?"40px":"4px"}),(function(n){var e=n.size,t=n.theme;return"default"!==e?t["btn-height-".concat(e)]:"44px"}),(function(n){var e=n.type,t=n.theme;return"default"!==e?t["white-color"]:t["light-color"]}),(function(n){var e=n.type,t=n.theme;return"default"!==e&&t["".concat(e,"-hover")]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var e=n.transparent,t=n.theme,o=n.type;return e&&function(n,e){return"\n        background: ".concat(n["".concat(e,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(n["".concat(e,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==e&&n["".concat(e,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==e&&n["".concat(e,"-hover")],"; \n        }\n    ")}(t,o)}),(function(n){var e=n.outlined,t=n.theme,o=n.type;return e&&function(n,e){return"\n        background: transparent;\n        border: 1px solid ".concat("light"!==e?n["".concat(e,"-color")]:n[n.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==e?n["".concat(e,"-color")]:n["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==e?n["".concat(e,"-hover")]:n["primary-color"],";\n          color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          }\n        }\n    ")}(t,o)}),(function(n){var e=n.ghost,t=n.theme;return e&&function(n){return"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(n["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(n["border-color-normal"]," !important;\n        }\n    ")}(t)}),(function(n){var e=n.raised,t=n.theme,o=n.type;return e&&function(n,e){return"\n        box-shadow: 0 8px 13px ".concat("white"!==e?n["".concat(e,"-color")]:n["light-color"],"20;\n    ")}(t,o)}),(function(n){var e=n.squared,t=n.theme,o=n.type;return e&&function(n,e){return"\n    background: ".concat("default"!==e&&n["".concat(e,"-color")],";\n    border: 1px solid ").concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat("default"!==e&&"#ffffff",";\n    }\n")}(t,o)}),(function(n){var e=n.squared,t=n.outlined,o=n.theme,r=n.type;return e&&t&&function(n,e){return"\n    background: transparent;\n    border: 1px solid ".concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat((function(n){var e=n.theme;return"default"!==n.type&&e["white-color"]}),";\n    }\n")}(o,r)}),(function(n){var e=n.social,t=n.color,o=n.shape;return e&&function(n,e){return"\n    background: ".concat(n,";\n    background: ").concat(n,";\n    border: 1px solid ").concat(n,";\n    color: ").concat((function(n){return n.theme["white-color"]}),";\n    border-radius: ").concat(e?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(n,"90;\n        border: 1px solid ").concat(n,"90;\n        color: ").concat((function(n){return n.theme["white-color"]}),";\n    }\n")}(t,o)})),u=(0,i.ZP)(l)(r||(r=(0,a.Z)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(function(n){var e=n.theme;return e[e.mainContent].bgNormal}))},57432:function(n,e,t){t.r(e),t.d(e,{TagStyle:function(){return c}});var o,r=t(30168),a=t(66204),c=(0,t(70244).ZP)(a.Z)(o||(o=(0,r.Z)(["\n    &.ninjadash-tag-new{\n        .ant-tag{\n            background-color: ",";\n        }\n    }\n"])),(function(n){var e=n.theme;return e[e.mainContent]["white-background"]}))},73534:function(n,e,t){t.r(e),t.d(e,{Tag:function(){return p}});var o=t(93433),r=t(1413),a=t(29439),c=t(82138),i=t(66672),l=t(47313),s=t(57432),u=t(46417),d=s.TagStyle.CheckableTag;function p(n){var e=(0,l.useState)({checked:!0,selectedTags:[]}),t=(0,a.Z)(e,2),c=t[0],i=t[1],p=n.closable,h=n.onClose,m=n.color,g=n.checked,x=n.onChange,b=n.data,v=n.hottags,y=n.animate,Z=n.children,C=b,j=function(n,e){var t=c.selectedTags,a=e?[].concat((0,o.Z)(t),[n]):t.filter((function(e){return e!==n}));i((0,r.Z)((0,r.Z)({},c),{},{selectedTags:a})),x&&x(a)},k=c.selectedTags;return g?(0,u.jsx)(d,{props:n,checked:c.checked,onChange:function(n){i((0,r.Z)((0,r.Z)({},c),{},{checke:n})),x&&x(n)}}):v?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{style:{marginRight:8},children:"Categories:"}),C.map((function(n){return(0,u.jsx)(d,{checked:k.indexOf(n)>-1,onChange:function(e){return j(n,e)},children:n},n)}))]}):y?(0,u.jsx)(f,{data:b,onChange:x}):(0,u.jsx)(s.TagStyle,{closable:p,onClose:function(n){h(n)},color:m,children:Z})}function f(n){var e=n.data,t=n.onChange,d=(0,l.useState)({tags:e,inputVisible:!1,inputValue:""}),p=(0,a.Z)(d,2),f=p[0],h=p[1],m=function(){var n=f.inputValue,e=f.tags;n&&-1===e.indexOf(n)&&(e=[].concat((0,o.Z)(e),[n])),t&&t(e),h((0,r.Z)((0,r.Z)({},f),{},{tags:e,inputVisible:!1,inputValue:""}))},g=f.tags,x=f.inputVisible,b=f.inputValue,v=g.map((function(n){var e=(0,u.jsx)(s.TagStyle,{closable:!0,onClose:function(e){e.preventDefault(),function(n){var e=f.tags.filter((function(e){return e!==n}));h({tags:e}),t&&t(e)}(n)},children:n});return(0,u.jsx)("span",{style:{display:"inline-block"},children:e},n)}));return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{style:{marginBottom:10},children:v}),x&&(0,u.jsx)(i.Z,{autoFocus:!0,type:"text",size:"small",style:{width:78},value:b,onChange:function(n){h((0,r.Z)((0,r.Z)({},f),{},{inputValue:n.target.value}))},onBlur:m,onPressEnter:m}),!x&&(0,u.jsxs)(s.TagStyle,{className:"ninjadash-tag-new",onClick:function(){h((0,r.Z)((0,r.Z)({},f),{},{inputVisible:!0}))},style:{borderStyle:"dashed"},children:[(0,u.jsx)(c.Z,{})," New Tag"]})]})}},23308:function(n,e,t){t.r(e);var o=t(1413),r=t(29439),a=t(47313),c=t(74294),i=t(12008),l=t(68197),s=t(59624),u=t(66672),d=t(54987),p=t(3284),f=t(23008),h=t(33464),m=t(73534),g=t(46417),x=c.Z.Option;e.default=function(){var n=i.Z.useForm(),e=(0,r.Z)(n,1)[0],t=(0,a.useState)({tags:["UI/UX","Branding","Product Design","Web Design"],values:null}),b=(0,r.Z)(t,2),v=b[0],y=b[1];return(0,g.jsx)(d.Cards,{title:(0,g.jsxs)("div",{className:"setting-card-title",children:[(0,g.jsx)(h.default,{as:"h4",children:"Edit Profile"}),(0,g.jsx)("span",{children:"Set Up Your Personal Information"})]}),children:(0,g.jsx)(l.Z,{justify:"center",children:(0,g.jsx)(s.Z,{xl:12,lg:16,xs:24,children:(0,g.jsx)(f.BasicFormWrapper,{children:(0,g.jsxs)(i.Z,{name:"editProfile",onFinish:function(n){y((0,o.Z)((0,o.Z)({},v),{},{values:(0,o.Z)((0,o.Z)({},n),{},{tags:v.tags})}))},children:[(0,g.jsx)(i.Z.Item,{name:"name",initialValue:"Duran Clayton",label:"Name",children:(0,g.jsx)(u.Z,{})}),(0,g.jsx)(i.Z.Item,{name:"phone",initialValue:"01742920502",label:"Phone Number",children:(0,g.jsx)(u.Z,{})}),(0,g.jsx)(i.Z.Item,{name:"country",initialValue:"",label:"Country",children:(0,g.jsxs)(c.Z,{style:{width:"100%"},children:[(0,g.jsx)(x,{value:"",children:"Please Select"}),(0,g.jsx)(x,{value:"bangladesh",children:"Bangladesh"}),(0,g.jsx)(x,{value:"india",children:"India"}),(0,g.jsx)(x,{value:"pakistan",children:"Pakistan"})]})}),(0,g.jsx)(i.Z.Item,{name:"city",initialValue:"",label:"City",children:(0,g.jsxs)(c.Z,{style:{width:"100%"},children:[(0,g.jsx)(x,{value:"",children:"Please Select"}),(0,g.jsx)(x,{value:"dhaka",children:"Dhaka"}),(0,g.jsx)(x,{value:"mymensingh",children:"Mymensingh"}),(0,g.jsx)(x,{value:"khulna",children:"Khulna"})]})}),(0,g.jsx)(i.Z.Item,{name:"company",initialValue:"Example",label:"Company Name",children:(0,g.jsx)(u.Z,{})}),(0,g.jsx)(i.Z.Item,{name:"website",initialValue:"www.example.com",label:"Website",children:(0,g.jsx)(u.Z,{})}),(0,g.jsx)(i.Z.Item,{name:"userBio",initialValue:"Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestee.",label:"User Bio",children:(0,g.jsx)(u.Z.TextArea,{rows:3})}),(0,g.jsx)(i.Z.Item,{name:"skills",label:"Skills",children:(0,g.jsx)(f.TagInput,{children:(0,g.jsx)(m.Tag,{animate:!0,onChange:function(n){y({tags:n})},data:v.tags})})}),(0,g.jsxs)("div",{className:"setting-form-actions",children:[(0,g.jsx)(p.Button,{size:"default",htmlType:"submit",type:"primary",children:"Update Profile"}),"\xa0 \xa0",(0,g.jsx)(p.Button,{size:"default",onClick:function(n){n.preventDefault(),e.resetFields()},type:"light",children:"Cancel"})]})]})})})})})}},43681:function(n,e,t){t.d(e,{Z:function(){return l}});var o=t(1413),r=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},c=t(6476),i=function(n,e){return r.createElement(c.Z,(0,o.Z)((0,o.Z)({},n),{},{ref:e,icon:a}))};i.displayName="CheckOutlined";var l=r.forwardRef(i)},74294:function(n,e,t){var o=t(4942),r=t(87462),a=t(46123),c=t.n(a),i=t(61310),l=t(205),s=t(47313),u=t(74714),d=t(82926),p=t(98438),f=t(21631),h=t(4431),m=t(53553),g=t(55681),x=t(87632),b=t(45531),v=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t},y="SECRET_COMBOBOX_MODE_DO_NOT_USE",Z=function(n,e){var t,a,Z=n.prefixCls,C=n.bordered,j=void 0===C||C,k=n.className,w=n.getPopupContainer,O=n.dropdownClassName,I=n.popupClassName,S=n.listHeight,P=void 0===S?256:S,E=n.placement,N=n.listItemHeight,T=void 0===N?24:N,B=n.size,V=n.disabled,z=n.notFoundContent,F=n.status,_=n.showArrow,D=v(n,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),M=s.useContext(u.E_),H=M.getPopupContainer,R=M.getPrefixCls,q=M.renderEmpty,U=M.direction,W=M.virtual,A=M.dropdownMatchSelectWidth,G=s.useContext(f.Z),X=R("select",Z),L=R(),Y=(0,b.ri)(X,U),$=Y.compactSize,K=Y.compactItemClassnames,J=s.useMemo((function(){var n=D.mode;if("combobox"!==n)return n===y?"combobox":n}),[D.mode]),Q="multiple"===J||"tags"===J,nn=void 0!==_?_:D.loading||!(Q||"combobox"===J),en=(0,s.useContext)(h.aM),tn=en.status,on=en.hasFeedback,rn=en.isFormItemInput,an=en.feedbackIcon,cn=(0,g.F)(tn,F);a=void 0!==z?z:"combobox"===J?null:(q||d.Z)("Select");var ln=(0,x.Z)((0,r.Z)((0,r.Z)({},D),{multiple:Q,hasFeedback:on,feedbackIcon:an,showArrow:nn,prefixCls:X})),sn=ln.suffixIcon,un=ln.itemIcon,dn=ln.removeIcon,pn=ln.clearIcon,fn=(0,l.Z)(D,["suffixIcon","itemIcon"]),hn=c()(I||O,(0,o.Z)({},"".concat(X,"-dropdown-").concat(U),"rtl"===U)),mn=$||B||G,gn=s.useContext(p.Z),xn=null!==V&&void 0!==V?V:gn,bn=c()((t={},(0,o.Z)(t,"".concat(X,"-lg"),"large"===mn),(0,o.Z)(t,"".concat(X,"-sm"),"small"===mn),(0,o.Z)(t,"".concat(X,"-rtl"),"rtl"===U),(0,o.Z)(t,"".concat(X,"-borderless"),!j),(0,o.Z)(t,"".concat(X,"-in-form-item"),rn),t),(0,g.Z)(X,cn,on),K,k);return s.createElement(i.ZP,(0,r.Z)({ref:e,virtual:W,dropdownMatchSelectWidth:A},fn,{transitionName:(0,m.mL)(L,(0,m.q0)(E),D.transitionName),listHeight:P,listItemHeight:T,mode:J,prefixCls:X,placement:void 0!==E?E:"rtl"===U?"bottomRight":"bottomLeft",direction:U,inputIcon:sn,menuItemSelectedIcon:un,removeIcon:dn,clearIcon:pn,notFoundContent:a,className:bn,getPopupContainer:w||H,dropdownClassName:hn,showArrow:on||_,disabled:xn}))},C=s.forwardRef(Z);C.SECRET_COMBOBOX_MODE_DO_NOT_USE=y,C.Option=i.Wx,C.OptGroup=i.Xo,e.Z=C},66204:function(n,e,t){t.d(e,{Z:function(){return Z}});var o=t(4942),r=t(87462),a=t(29439),c=t(11829),i=t(46123),l=t.n(i),s=t(205),u=t(47313),d=t(74714),p=t(20238),f=t(46479),h=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t},m=function(n){var e,t=n.prefixCls,a=n.className,c=n.checked,i=n.onChange,s=n.onClick,p=h(n,["prefixCls","className","checked","onChange","onClick"]),f=(0,u.useContext(d.E_).getPrefixCls)("tag",t),m=l()(f,(e={},(0,o.Z)(e,"".concat(f,"-checkable"),!0),(0,o.Z)(e,"".concat(f,"-checkable-checked"),c),e),a);return u.createElement("span",(0,r.Z)({},p,{className:m,onClick:function(n){null===i||void 0===i||i(!c),null===s||void 0===s||s(n)}}))},g=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t},x=new RegExp("^(".concat(p.Y.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(p.E.join("|"),")$")),v=function(n,e){var t,i=n.prefixCls,p=n.className,h=n.style,m=n.children,v=n.icon,y=n.color,Z=n.onClose,C=n.closeIcon,j=n.closable,k=void 0!==j&&j,w=g(n,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),O=u.useContext(d.E_),I=O.getPrefixCls,S=O.direction,P=u.useState(!0),E=(0,a.Z)(P,2),N=E[0],T=E[1];u.useEffect((function(){"visible"in w&&T(w.visible)}),[w.visible]);var B=function(){return!!y&&(x.test(y)||b.test(y))},V=(0,r.Z)({backgroundColor:y&&!B()?y:void 0},h),z=B(),F=I("tag",i),_=l()(F,(t={},(0,o.Z)(t,"".concat(F,"-").concat(y),z),(0,o.Z)(t,"".concat(F,"-has-color"),y&&!z),(0,o.Z)(t,"".concat(F,"-hidden"),!N),(0,o.Z)(t,"".concat(F,"-rtl"),"rtl"===S),t),p),D=function(n){n.stopPropagation(),null===Z||void 0===Z||Z(n),n.defaultPrevented||"visible"in w||T(!1)},M="onClick"in w||m&&"a"===m.type,H=(0,s.Z)(w,["visible"]),R=v||null,q=R?u.createElement(u.Fragment,null,R,u.createElement("span",null,m)):m,U=u.createElement("span",(0,r.Z)({},H,{ref:e,className:_,style:V}),q,k?C?u.createElement("span",{className:"".concat(F,"-close-icon"),onClick:D},C):u.createElement(c.Z,{className:"".concat(F,"-close-icon"),onClick:D}):null);return M?u.createElement(f.Z,null,U):U},y=u.forwardRef(v);y.CheckableTag=m;var Z=y}}]);