"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[7847],{4377:function(n,e,t){t(47313);e.Z=t.p+"static/media/home.86b39a0ae5b4b6dd596b6963557ed8ed.svg"},3284:function(n,e,t){t.r(e),t.d(e,{BtnGroup:function(){return p},Button:function(){return l}});var a=t(1413),r=t(29439),o=t(45987),i=t(47313),s=t(71128),c=t(46417),d=["type","shape","icon","size","outlined","ghost","transparented","raised","squared","color","social","load","children"];function l(n){var e=n.type,t=n.shape,l=n.icon,p=n.size,u=n.outlined,h=n.ghost,m=n.transparented,f=n.raised,g=n.squared,x=n.color,b=n.social,v=n.load,y=n.children,k=(0,o.Z)(n,d),j=(0,i.useState)({loading:!1}),w=(0,r.Z)(j,2),Z=w[0],C=w[1];return(0,c.jsx)(s.ButtonStyled,(0,a.Z)((0,a.Z)({squared:g,outlined:u?1:0,ghost:h,transparent:m?1:0,raised:f?1:0,data:e,size:p,shape:t,type:e,icon:l,color:x,social:b,onClick:v&&function(){C({loading:!0})},loading:Z.loading},k),{},{children:y}))}function p(n){var e=n.children;return(0,c.jsx)(s.ButtonStyledGroup,{children:e})}l.defaultProps={type:"default"}},71128:function(n,e,t){t.r(e),t.d(e,{ButtonStyled:function(){return d},ButtonStyledGroup:function(){return l}});var a,r,o=t(30168),i=t(59491),s=t(70244),c=i.Z.Group,d=(0,s.ZP)(i.Z)(a||(a=(0,o.Z)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(function(n){var e=n.type,t=n.theme;return"default"!==e&&t["".concat(e,"-color")]}),(function(n){return"dashed"!==n.type?"solid":"dashed"}),(function(n){var e=n.theme;return"default"!==n.type?"#ffffff":e[e.mainContent]["gray-text"]}),(function(n){return n.shape?"40px":"4px"}),(function(n){var e=n.size,t=n.theme;return"default"!==e?t["btn-height-".concat(e)]:"44px"}),(function(n){var e=n.type,t=n.theme;return"default"!==e?t["white-color"]:t["light-color"]}),(function(n){var e=n.type,t=n.theme;return"default"!==e&&t["".concat(e,"-hover")]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var e=n.transparent,t=n.theme,a=n.type;return e&&function(n,e){return"\n        background: ".concat(n["".concat(e,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(n["".concat(e,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==e&&n["".concat(e,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==e&&n["".concat(e,"-hover")],"; \n        }\n    ")}(t,a)}),(function(n){var e=n.outlined,t=n.theme,a=n.type;return e&&function(n,e){return"\n        background: transparent;\n        border: 1px solid ".concat("light"!==e?n["".concat(e,"-color")]:n[n.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==e?n["".concat(e,"-color")]:n["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==e?n["".concat(e,"-hover")]:n["primary-color"],";\n          color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          }\n        }\n    ")}(t,a)}),(function(n){var e=n.ghost,t=n.theme;return e&&function(n){return"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(n["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(n["border-color-normal"]," !important;\n        }\n    ")}(t)}),(function(n){var e=n.raised,t=n.theme,a=n.type;return e&&function(n,e){return"\n        box-shadow: 0 8px 13px ".concat("white"!==e?n["".concat(e,"-color")]:n["light-color"],"20;\n    ")}(t,a)}),(function(n){var e=n.squared,t=n.theme,a=n.type;return e&&function(n,e){return"\n    background: ".concat("default"!==e&&n["".concat(e,"-color")],";\n    border: 1px solid ").concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat("default"!==e&&"#ffffff",";\n    }\n")}(t,a)}),(function(n){var e=n.squared,t=n.outlined,a=n.theme,r=n.type;return e&&t&&function(n,e){return"\n    background: transparent;\n    border: 1px solid ".concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat((function(n){var e=n.theme;return"default"!==n.type&&e["white-color"]}),";\n    }\n")}(a,r)}),(function(n){var e=n.social,t=n.color,a=n.shape;return e&&function(n,e){return"\n    background: ".concat(n,";\n    background: ").concat(n,";\n    border: 1px solid ").concat(n,";\n    color: ").concat((function(n){return n.theme["white-color"]}),";\n    border-radius: ").concat(e?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(n,"90;\n        border: 1px solid ").concat(n,"90;\n        color: ").concat((function(n){return n.theme["white-color"]}),";\n    }\n")}(t,a)})),l=(0,s.ZP)(c)(r||(r=(0,o.Z)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(function(n){var e=n.theme;return e[e.mainContent].bgNormal}))},24441:function(n,e,t){t.r(e),t.d(e,{PageHeader:function(){return c}});var a=t(28709),r=t(2135),o=t(79585),i=t(7489),s=t(46417);function c(n){var e=n.title,c=n.subTitle,d=n.routes,l=n.buttons,p=n.ghost,u=n.bgColor,h=n.className,m=d?(0,s.jsx)(a.Z,{separator:(0,s.jsx)("span",{className:"ninjadash-seperator"}),children:d.map((function(n,e){return e+1===d.length?(0,s.jsx)(a.Z.Item,{children:n.breadcrumbName},e):(0,s.jsxs)(a.Z.Item,{children:[(0,s.jsx)(o.Q,{src:t(4377).Z})," ",(0,s.jsx)(r.rU,{to:n.path,children:n.breadcrumbName})]},e)}))}):"";return(0,s.jsx)(i.HeaderWrapper,{bgColor:u,children:(0,s.jsx)(i.PageHeaderStyle,{className:h,title:e,subTitle:c,breadcrumb:m,extra:l,ghost:p})})}},7489:function(n,e,t){t.r(e),t.d(e,{HeaderWrapper:function(){return d},PageHeaderStyle:function(){return c}});var a,r,o=t(30168),i=t(94475),s=t(70244),c=(0,s.ZP)(i.Z)(a||(a=(0,o.Z)(["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"],["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"])),(function(n){var e=n.theme;return e[e.mainContent]["main-background-light"]}),(function(n){var e=n.theme;return e[e.mainContent]["main-background"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent]["extra-light"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){var e=n.theme;return e[e.mainContent]["menu-active"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["light-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var e=n.theme;return e[e.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-light-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]})),d=s.ZP.div(r||(r=(0,o.Z)(["\n  background: ","};\n  border-radius: 5px;\n  .ant-page-header-heading-title{\n    color: ",";\n  }\n  .ant-page-header-heading-sub-title{\n    color: ",";\n  }\n"])),(function(n){var e=n.theme;return n.bgColor||e[e.mainContent]["main-background-light"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}))},15971:function(n,e,t){t.r(e);var a=t(93433),r=t(1413),o=t(29439),i=t(47313),s=t(2135),c=t(58467),d=t(1084),l=t(12008),p=t(68197),u=t(59624),h=t(20870),m=t(66672),f=t(72652),g=t(40678),x=t(55989),b=t(60213),v=t(57604),y=t(29800),k=t(2037),j=t(34794),w=t(82536),Z=t(23008),C=t(24441),N=t(3284),T=t(97448),z=t(46417),A=(0,i.lazy)((function(){return t.e(4870).then(t.bind(t,24870))})),S=(0,i.lazy)((function(){return t.e(3110).then(t.bind(t,23110))})),_=(0,i.lazy)((function(){return t.e(9770).then(t.bind(t,45634))}));e.default=function(){var n=l.Z.useForm(),e=(0,o.Z)(n,1)[0],t=(0,d.I0)(),E=(0,d.v9)((function(n){return{taskData:n.Task.data}})).taskData,P=(0,i.useState)({responsive:0,collapsed:!1,visible:!1,modalType:"primary"}),L=(0,o.Z)(P,2),B=L[0],D=L[1],M=function(){D((0,r.Z)((0,r.Z)({},B),{},{visible:!0,collapsed:!1}))},W=function(){D((0,r.Z)((0,r.Z)({},B),{},{visible:!1}))},F=function(n){W();var e=[];E.map((function(n){return e.push(n.id)}));var o=Math.max.apply(Math,e);t((0,T.taskAddData)([].concat((0,a.Z)(E),[(0,r.Z)((0,r.Z)({},n),{},{id:o+1,favourite:!1,completed:!1})])))},O=B.responsive,U=B.collapsed;(0,i.useLayoutEffect)((function(){function n(){var n=window.innerWidth;D({responsive:n})}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]);var H=function(){D((0,r.Z)((0,r.Z)({},B),{},{collapsed:!U}))},I="/admin/app/task";return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(C.PageHeader,{className:"ninjadash-page-header-main",title:"Task",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Task"}]}),(0,z.jsxs)(Z.Main,{children:[(0,z.jsxs)(p.Z,{gutter:25,children:[(0,z.jsx)(u.Z,{xxl:5,lg:6,md:7,xs:24,children:O>767?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(w.SidebarWrap,{className:"mb-30",children:(0,z.jsxs)("div",{className:"ninjadash-taskApp-sidebar",children:[(0,z.jsxs)(N.Button,{className:"ninjadash-btn-add",size:"large",type:"primary",raised:!0,onClick:M,children:[(0,z.jsx)(b.Z,{}),"Add Task"]}),(0,z.jsxs)("ul",{className:"ninjadash-taskApp-sidebar__nav",children:[(0,z.jsx)("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:(0,z.jsxs)(s.OL,{className:"ninjadash-taskApp-sidebar__nav--link",to:"".concat(I,"/all"),children:[(0,z.jsx)("span",{className:"nav-item-icon",children:(0,z.jsx)(y.Z,{})}),(0,z.jsx)("span",{className:"nav-item-text",children:"All"})]})}),(0,z.jsx)("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:(0,z.jsxs)(s.OL,{className:"ninjadash-taskApp-sidebar__nav--link",to:"".concat(I,"/favourites"),children:[(0,z.jsx)("span",{className:"nav-item-icon",children:(0,z.jsx)(v.Z,{})}),(0,z.jsx)("span",{className:"nav-item-text",children:"Favourite"})]})}),(0,z.jsx)("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:(0,z.jsxs)(s.OL,{className:"ninjadash-taskApp-sidebar__nav--link",to:"".concat(I,"/completed"),children:[(0,z.jsx)("span",{className:"nav-item-icon",children:(0,z.jsx)(k.Z,{})}),(0,z.jsx)("span",{className:"nav-item-text",children:"Completed"})]})})]})]})}),(0,z.jsx)(h.Z,{title:"Add Task",className:"ninjadash-addTask-modal",type:B.modalType,visible:B.visible,footer:null,onCancel:W,children:(0,z.jsx)("div",{className:"ninjadash-addTask-modal-inner",children:(0,z.jsx)(Z.BasicFormWrapper,{children:(0,z.jsxs)(l.Z,{form:e,name:"add-task",onFinish:F,children:[(0,z.jsx)(l.Z.Item,{rules:[{required:!0,message:"Please add a Title"}],name:"title",children:(0,z.jsx)(m.Z,{placeholder:"Title",size:"middle"})}),(0,z.jsx)(l.Z.Item,{name:"description",children:(0,z.jsx)(m.Z.TextArea,{rows:4,placeholder:"Add Description"})}),(0,z.jsxs)("div",{className:"ninjadash-modal-actions",children:[(0,z.jsx)(N.Button,{size:"small",type:"white",outlined:!0,onClick:W,children:"Cancel"},"cancel"),(0,z.jsx)(N.Button,{htmlType:"submit",size:"small",type:"primary",children:"Add Task"},"submit")]})]})})})})]}):(0,z.jsxs)(w.FixedSidebar,{className:U?"show":"hide",children:[(0,z.jsx)(s.rU,{to:"#",type:"link",className:"trigger-close",onClick:H,children:(0,z.jsx)(j.Z,{})}),(0,z.jsx)(w.SidebarWrap,{className:"mb-30",children:(0,z.jsxs)("div",{className:"ninjadash-taskApp-sidebar",children:[(0,z.jsxs)(N.Button,{className:"ninjadash-btn-add",size:"large",type:"primary",raised:!0,onClick:M,children:[(0,z.jsx)(b.Z,{}),"Add Task"]}),(0,z.jsxs)("ul",{className:"ninjadash-taskApp-sidebar__nav",children:[(0,z.jsx)("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:(0,z.jsxs)(s.OL,{className:"ninjadash-taskApp-sidebar__nav--link",to:"".concat(I,"/all"),children:[(0,z.jsx)("span",{className:"nav-item-icon",children:(0,z.jsx)(y.Z,{})}),(0,z.jsx)("span",{className:"nav-item-text",children:"All"})]})}),(0,z.jsx)("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:(0,z.jsxs)(s.OL,{className:"ninjadash-taskApp-sidebar__nav--link",to:"".concat(I,"/favourites"),children:[(0,z.jsx)("span",{className:"nav-item-icon",children:(0,z.jsx)(v.Z,{})}),(0,z.jsx)("span",{className:"nav-item-text",children:"Favourite"})]})}),(0,z.jsx)("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:(0,z.jsxs)(s.OL,{className:"ninjadash-taskApp-sidebar__nav--link",to:"".concat(I,"/completed"),children:[(0,z.jsx)("span",{className:"nav-item-icon",children:(0,z.jsx)(k.Z,{})}),(0,z.jsx)("span",{className:"nav-item-text",children:"Completed"})]})})]})]})}),(0,z.jsx)(h.Z,{title:"Add Task",className:"ninjadash-addTask-modal",type:B.modalType,visible:B.visible,footer:null,onCancel:W,children:(0,z.jsx)("div",{className:"ninjadash-addTask-modal-inner",children:(0,z.jsx)(Z.BasicFormWrapper,{children:(0,z.jsxs)(l.Z,{form:e,name:"add-task",onFinish:F,children:[(0,z.jsx)(l.Z.Item,{rules:[{required:!0,message:"Please add a Title"}],name:"title",children:(0,z.jsx)(m.Z,{placeholder:"Title"})}),(0,z.jsx)(l.Z.Item,{name:"description",children:(0,z.jsx)(m.Z.TextArea,{rows:4,placeholder:"Add Description"})}),(0,z.jsxs)("div",{className:"ninjadash-modal-actions",children:[(0,z.jsx)(N.Button,{size:"small",type:"white",outlined:!0,onClick:W,children:"Cancel"},"cancel"),(0,z.jsx)(N.Button,{htmlType:"submit",size:"small",type:"primary",children:"Add Task"},"submit")]})]})})})})]})}),(0,z.jsxs)(u.Z,{xxl:19,lg:18,md:17,xs:24,children:[O<=767&&(0,z.jsx)("div",{className:"sidebar-trier-wrap text-center mb-30",children:(0,z.jsx)(N.Button,{type:"link",className:"sidebar-trigger",style:{marginTop:0},onClick:H,children:U?(0,z.jsx)(g.Z,{}):(0,z.jsx)(x.Z,{})})}),(0,z.jsx)(i.Suspense,{fallback:(0,z.jsx)("div",{className:"spin",children:(0,z.jsx)(f.Z,{})}),children:(0,z.jsxs)(c.Z5,{children:[(0,z.jsx)(c.AW,{path:"all",element:(0,z.jsx)(A,{})}),(0,z.jsx)(c.AW,{path:"favourites",element:(0,z.jsx)(S,{})}),(0,z.jsx)(c.AW,{path:"completed",element:(0,z.jsx)(_,{})})]})})]})]}),(0,z.jsx)("span",{onKeyPress:function(){},role:"button",tabIndex:"0",className:U?"overlay-dark show":"overlay-dark",onClick:H})]})]})}},82536:function(n,e,t){t.r(e),t.d(e,{FixedSidebar:function(){return l},SidebarWrap:function(){return c},TaskListWrap:function(){return d}});var a,r,o,i=t(30168),s=t(70244),c=s.ZP.div(a||(a=(0,i.Z)(["\n    .ninjadash-taskApp-sidebar{\n        background-color: ",";\n        padding: 30px;\n        border-radius: 10px;\n        box-shadow: 0 5px 20px ","03;\n        min-height: 300px;\n        .ninjadash-btn-add{\n            width: 100%;\n            font-size: 14px;\n            font-weight: 500;\n            border-radius: 22px;\n            height: 44px;\n            margin-bottom: 20px;\n        }\n    }\n    .ninjadash-taskApp-sidebar__nav{\n        width: calc(100% + 30px);\n        position: relative;\n        ",": -15px;\n        .ninjadash-taskApp-sidebar__nav--item{\n            display: block;\n            .ninjadash-taskApp-sidebar__nav--link{\n                display: flex;\n                align-items: center;\n                font-size: 14px;\n                border-radius: 4px;\n                color: ",";\n                padding: 8px 15px;\n                &:hover{\n                    color: ",";\n                    background-color: ",";\n                    .nav-item-icon{\n                        i,\n                        svg{\n                            color: ",";\n                        }\n                    }\n                }\n                &.active{\n                    color: ",";\n                    background-color: ",";\n                    .nav-item-icon{\n                        i,\n                        svg{\n                            color: ",";\n                        }\n                    }\n                }\n                .nav-item-icon{\n                    line-height: 1;\n                    ",": 12px;\n                    i,\n                    svg{\n                        width: 16px;\n                        color: ",";\n                    }\n                }\n            }\n        }\n    }\n"])),(function(n){var e=n.theme;return e[e.mainContent]["white-background"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["menu-active"]}),(function(n){var e=n.theme;return e[e.mainContent]["menu-active-bg"]}),(function(n){var e=n.theme;return e[e.mainContent]["menu-active"]}),(function(n){var e=n.theme;return e[e.mainContent]["menu-active"]}),(function(n){var e=n.theme;return e[e.mainContent]["menu-active-bg"]}),(function(n){var e=n.theme;return e[e.mainContent]["menu-active"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){var e=n.theme;return e[e.mainContent]["extra-light-text"]})),d=s.ZP.div(r||(r=(0,i.Z)(["\n    .ninjadash-tasklist-wrap{\n        background-color: #fff;\n        border-radius: 10px;\n        box-shadow: 0 5px 20px rgba(#9299B8,.03);\n    }\n    .ninjadash-tasklist-head{\n        .ninjadash-tasklist-head__title{\n            font-size: 16px;\n            font-weight: 500;\n            padding: 15px 30px;\n            margin-bottom: 0;\n            color: ",";\n            border-bottom: 1px solid ",";\n        }\n    }\n    .ninjadash-tasklist-body{\n        .ninjadash-tasklist{\n            padding: 15px 30px;\n            .ninjadash-tasklist-item__title{\n                margin-bottom: 10px;\n            }\n        }\n    }\n"])),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["border-color-default"]})),l=s.ZP.div(o||(o=(0,i.Z)(["\n    position: fixed;\n    top: 0;\n    ",": 0px;\n    width: 280px;\n    height: 100vh;\n    z-index: 9999;\n    background-color: #fff;\n    overflow-y: auto;\n    transition: all .3s ease;\n    &.show{\n        transform: translateX(0px);\n    }\n    &.hide{\n        transform: translateX(-280px);\n    }\n    .trigger-close{\n        float: right;\n        margin-top: 15px;\n        ",": 15px;\n        svg,\n        i{\n            color: ","; \n        }\n    }\n    .ninjadash-taskApp-sidebar{\n        padding-top: 60px;\n    }\n"])),(function(n){return n.theme.rtl?"right":"left"}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme["danger-color"]}))},97448:function(n,e,t){t.r(e),t.d(e,{onCompleteUpdate:function(){return x},onStarUpdate:function(){return g},ontaskDelete:function(){return b},ontaskEdit:function(){return v},taskAddData:function(){return f}});var a=t(74165),r=t(15861),o=t(56954),i=o.default.taskReadBegin,s=o.default.taskReadSuccess,c=o.default.taskReadErr,d=o.default.starUpdateBegin,l=o.default.starUpdateSuccess,p=o.default.starUpdateErr,u=o.default.completeUpdateBegin,h=o.default.completeUpdateSuccess,m=o.default.completeUpdateErr,f=function(n){return function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t(i()),t(s(n))}catch(a){t(c(a))}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},g=function(n,e){return function(){var t=(0,r.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{r(d()),n.map((function(t){if(t.id===e){var a=t;a.favourite?t.favourite=!1:a.favourite=!0}return r(l(n))}))}catch(a){r(p(a))}case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},x=function(n,e){return function(){var t=(0,r.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{r(u()),n.map((function(t){if(t.id===e){var a=t;a.completed?t.completed=!1:a.completed=!0}return r(h(n))}))}catch(a){r(m(a))}case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},b=function(n){return function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t(i()),t(s(n))}catch(a){t(c(a))}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},v=function(n){return function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t(i()),t(s(n))}catch(a){t(c(a))}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}},40678:function(n,e,t){var a=t(1413),r=t(45987),o=t(61962),i=t(75192),s=t.n(i),c=["color","size"],d=function(n){var e=n.color,t=n.size,i=(0,r.Z)(n,c);return o.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:e},i),o.createElement("path",{d:"M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"}))};d.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},d.defaultProps={color:"currentColor",size:"24"},e.Z=d},55989:function(n,e,t){var a=t(1413),r=t(45987),o=t(61962),i=t(75192),s=t.n(i),c=["color","size"],d=function(n){var e=n.color,t=n.size,i=(0,r.Z)(n,c);return o.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:e},i),o.createElement("path",{d:"M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"}))};d.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},d.defaultProps={color:"currentColor",size:"24"},e.Z=d},60213:function(n,e,t){var a=t(1413),r=t(45987),o=t(61962),i=t(75192),s=t.n(i),c=["color","size"],d=function(n){var e=n.color,t=n.size,i=(0,r.Z)(n,c);return o.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:e},i),o.createElement("path",{d:"M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"}))};d.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},d.defaultProps={color:"currentColor",size:"24"},e.Z=d},57604:function(n,e,t){var a=t(1413),r=t(45987),o=t(61962),i=t(75192),s=t.n(i),c=["color","size"],d=function(n){var e=n.color,t=n.size,i=(0,r.Z)(n,c);return o.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:e},i),o.createElement("path",{d:"M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"}))};d.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},d.defaultProps={color:"currentColor",size:"24"},e.Z=d},42386:function(n,e,t){var a;function r(n){if("undefined"===typeof document)return 0;if(n||void 0===a){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var t=document.createElement("div"),r=t.style;r.position="absolute",r.top="0",r.left="0",r.pointerEvents="none",r.visibility="hidden",r.width="200px",r.height="150px",r.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var o=e.offsetWidth;t.style.overflow="scroll";var i=e.offsetWidth;o===i&&(i=t.clientWidth),document.body.removeChild(t),a=o-i}return a}function o(n){var e=n.match(/^(.*)px$/),t=Number(null===e||void 0===e?void 0:e[1]);return Number.isNaN(t)?r():t}function i(n){if("undefined"===typeof document||!n||!(n instanceof Element))return{width:0,height:0};var e=getComputedStyle(n,"::-webkit-scrollbar"),t=e.width,a=e.height;return{width:o(t),height:o(a)}}t.d(e,{Z:function(){return r},o:function(){return i}})},19990:function(n,e,t){t.d(e,{Z:function(){return c}});var a=t(1413),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),o="aria-",i="data-";function s(n,e){return 0===n.indexOf(e)}function c(n){var e,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,a.Z)({},t);var c={};return Object.keys(n).forEach((function(t){(e.aria&&("role"===t||s(t,o))||e.data&&s(t,i)||e.attr&&r.includes(t))&&(c[t]=n[t])})),c}}}]);