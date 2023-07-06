"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[6417],{22447:function(n,o,t){t(47313);o.Z=t.p+"static/media/404.72d84482a671c69b7c8f659651fd4b51.svg"},3284:function(n,o,t){t.r(o),t.d(o,{BtnGroup:function(){return s},Button:function(){return l}});var r=t(1413),e=t(29439),c=t(45987),a=t(47313),i=t(71128),d=t(46417),u=["type","shape","icon","size","outlined","ghost","transparented","raised","squared","color","social","load","children"];function l(n){var o=n.type,t=n.shape,l=n.icon,s=n.size,f=n.outlined,p=n.ghost,h=n.transparented,g=n.raised,x=n.squared,b=n.color,m=n.social,v=n.load,y=n.children,k=(0,c.Z)(n,u),w=(0,a.useState)({loading:!1}),Z=(0,e.Z)(w,2),j=Z[0],z=Z[1];return(0,d.jsx)(i.ButtonStyled,(0,r.Z)((0,r.Z)({squared:x,outlined:f?1:0,ghost:p,transparent:h?1:0,raised:g?1:0,data:o,size:s,shape:t,type:o,icon:l,color:b,social:m,onClick:v&&function(){z({loading:!0})},loading:j.loading},k),{},{children:y}))}function s(n){var o=n.children;return(0,d.jsx)(i.ButtonStyledGroup,{children:o})}l.defaultProps={type:"default"}},71128:function(n,o,t){t.r(o),t.d(o,{ButtonStyled:function(){return u},ButtonStyledGroup:function(){return l}});var r,e,c=t(30168),a=t(59491),i=t(70244),d=a.Z.Group,u=(0,i.ZP)(a.Z)(r||(r=(0,c.Z)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(function(n){var o=n.type,t=n.theme;return"default"!==o&&t["".concat(o,"-color")]}),(function(n){return"dashed"!==n.type?"solid":"dashed"}),(function(n){var o=n.theme;return"default"!==n.type?"#ffffff":o[o.mainContent]["gray-text"]}),(function(n){return n.shape?"40px":"4px"}),(function(n){var o=n.size,t=n.theme;return"default"!==o?t["btn-height-".concat(o)]:"44px"}),(function(n){var o=n.type,t=n.theme;return"default"!==o?t["white-color"]:t["light-color"]}),(function(n){var o=n.type,t=n.theme;return"default"!==o&&t["".concat(o,"-hover")]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var o=n.transparent,t=n.theme,r=n.type;return o&&function(n,o){return"\n        background: ".concat(n["".concat(o,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(n["".concat(o,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==o&&n["".concat(o,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==o&&n["".concat(o,"-hover")],"; \n        }\n    ")}(t,r)}),(function(n){var o=n.outlined,t=n.theme,r=n.type;return o&&function(n,o){return"\n        background: transparent;\n        border: 1px solid ".concat("light"!==o?n["".concat(o,"-color")]:n[n.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==o?n["".concat(o,"-color")]:n["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==o?n["".concat(o,"-hover")]:n["primary-color"],";\n          color: ").concat("light"!==o?n["".concat(o,"-color")]:n["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==o?n["".concat(o,"-color")]:n["primary-color"],";\n          }\n        }\n    ")}(t,r)}),(function(n){var o=n.ghost,t=n.theme;return o&&function(n){return"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(n["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(n["border-color-normal"]," !important;\n        }\n    ")}(t)}),(function(n){var o=n.raised,t=n.theme,r=n.type;return o&&function(n,o){return"\n        box-shadow: 0 8px 13px ".concat("white"!==o?n["".concat(o,"-color")]:n["light-color"],"20;\n    ")}(t,r)}),(function(n){var o=n.squared,t=n.theme,r=n.type;return o&&function(n,o){return"\n    background: ".concat("default"!==o&&n["".concat(o,"-color")],";\n    border: 1px solid ").concat("default"!==o?n["".concat(o,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==o&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==o&&n["".concat(o,"-hover")],";\n        border: 1px solid ").concat("default"!==o&&n["".concat(o,"-hover")],";\n        color: ").concat("default"!==o&&"#ffffff",";\n    }\n")}(t,r)}),(function(n){var o=n.squared,t=n.outlined,r=n.theme,e=n.type;return o&&t&&function(n,o){return"\n    background: transparent;\n    border: 1px solid ".concat("default"!==o?n["".concat(o,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==o&&n["".concat(o,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==o&&n["".concat(o,"-hover")],";\n        border: 1px solid ").concat("default"!==o&&n["".concat(o,"-hover")],";\n        color: ").concat((function(n){var o=n.theme;return"default"!==n.type&&o["white-color"]}),";\n    }\n")}(r,e)}),(function(n){var o=n.social,t=n.color,r=n.shape;return o&&function(n,o){return"\n    background: ".concat(n,";\n    background: ").concat(n,";\n    border: 1px solid ").concat(n,";\n    color: ").concat((function(n){return n.theme["white-color"]}),";\n    border-radius: ").concat(o?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(n,"90;\n        border: 1px solid ").concat(n,"90;\n        color: ").concat((function(n){return n.theme["white-color"]}),";\n    }\n")}(t,r)})),l=(0,i.ZP)(d)(e||(e=(0,c.Z)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(function(n){var o=n.theme;return o[o.mainContent].bgNormal}))},26417:function(n,o,t){t.r(o);var r=t(29439),e=t(47313),c=t(72652),a=t(2135),i=t(78642),d=t(23008),u=t(33464),l=t(3284),s=t(46417);o.default=function(){var n=(0,e.useState)({isLoading:!0}),o=(0,r.Z)(n,2),f=o[0],p=o[1];return(0,e.useEffect)((function(){setTimeout((function(){p({isLoading:!1})}),1500)}),[]),(0,s.jsx)(d.Main,{children:f.isLoading?(0,s.jsx)("div",{className:"spin",children:(0,s.jsx)(c.Z,{})}):(0,s.jsxs)(i.ErrorWrapper,{children:[(0,s.jsx)("img",{src:t(22447).Z,alt:"404"}),(0,s.jsx)(u.default,{className:"error-text",as:"h3",children:"404"}),(0,s.jsx)("p",{children:"Sorry! the page you are looking for does not exist."}),(0,s.jsx)(a.OL,{to:"/admin",children:(0,s.jsx)(l.Button,{size:"default",type:"primary",to:"/admin",children:"Return Home"})})]})})}}}]);