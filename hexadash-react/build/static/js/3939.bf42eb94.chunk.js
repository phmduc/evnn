"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[3939],{4377:function(n,t,e){e(47313);t.Z=e.p+"static/media/home.86b39a0ae5b4b6dd596b6963557ed8ed.svg"},3284:function(n,t,e){e.r(t),e.d(t,{BtnGroup:function(){return h},Button:function(){return s}});var r=e(1413),a=e(29439),o=e(45987),i=e(47313),c=e(71128),l=e(46417),d=["type","shape","icon","size","outlined","ghost","transparented","raised","squared","color","social","load","children"];function s(n){var t=n.type,e=n.shape,s=n.icon,h=n.size,p=n.outlined,u=n.ghost,m=n.transparented,f=n.raised,g=n.squared,x=n.color,b=n.social,v=n.load,y=n.children,w=(0,o.Z)(n,d),z=(0,i.useState)({loading:!1}),k=(0,a.Z)(z,2),j=k[0],Z=k[1];return(0,l.jsx)(c.ButtonStyled,(0,r.Z)((0,r.Z)({squared:g,outlined:p?1:0,ghost:u,transparent:m?1:0,raised:f?1:0,data:t,size:h,shape:e,type:t,icon:s,color:x,social:b,onClick:v&&function(){Z({loading:!0})},loading:j.loading},w),{},{children:y}))}function h(n){var t=n.children;return(0,l.jsx)(c.ButtonStyledGroup,{children:t})}s.defaultProps={type:"default"}},71128:function(n,t,e){e.r(t),e.d(t,{ButtonStyled:function(){return d},ButtonStyledGroup:function(){return s}});var r,a,o=e(30168),i=e(59491),c=e(70244),l=i.Z.Group,d=(0,c.ZP)(i.Z)(r||(r=(0,o.Z)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(function(n){var t=n.type,e=n.theme;return"default"!==t&&e["".concat(t,"-color")]}),(function(n){return"dashed"!==n.type?"solid":"dashed"}),(function(n){var t=n.theme;return"default"!==n.type?"#ffffff":t[t.mainContent]["gray-text"]}),(function(n){return n.shape?"40px":"4px"}),(function(n){var t=n.size,e=n.theme;return"default"!==t?e["btn-height-".concat(t)]:"44px"}),(function(n){var t=n.type,e=n.theme;return"default"!==t?e["white-color"]:e["light-color"]}),(function(n){var t=n.type,e=n.theme;return"default"!==t&&e["".concat(t,"-hover")]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var t=n.transparent,e=n.theme,r=n.type;return t&&function(n,t){return"\n        background: ".concat(n["".concat(t,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(n["".concat(t,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==t&&n["".concat(t,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==t&&n["".concat(t,"-hover")],"; \n        }\n    ")}(e,r)}),(function(n){var t=n.outlined,e=n.theme,r=n.type;return t&&function(n,t){return"\n        background: transparent;\n        border: 1px solid ".concat("light"!==t?n["".concat(t,"-color")]:n[n.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==t?n["".concat(t,"-color")]:n["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==t?n["".concat(t,"-hover")]:n["primary-color"],";\n          color: ").concat("light"!==t?n["".concat(t,"-color")]:n["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==t?n["".concat(t,"-color")]:n["primary-color"],";\n          }\n        }\n    ")}(e,r)}),(function(n){var t=n.ghost,e=n.theme;return t&&function(n){return"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(n["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(n["border-color-normal"]," !important;\n        }\n    ")}(e)}),(function(n){var t=n.raised,e=n.theme,r=n.type;return t&&function(n,t){return"\n        box-shadow: 0 8px 13px ".concat("white"!==t?n["".concat(t,"-color")]:n["light-color"],"20;\n    ")}(e,r)}),(function(n){var t=n.squared,e=n.theme,r=n.type;return t&&function(n,t){return"\n    background: ".concat("default"!==t&&n["".concat(t,"-color")],";\n    border: 1px solid ").concat("default"!==t?n["".concat(t,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==t&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==t&&n["".concat(t,"-hover")],";\n        border: 1px solid ").concat("default"!==t&&n["".concat(t,"-hover")],";\n        color: ").concat("default"!==t&&"#ffffff",";\n    }\n")}(e,r)}),(function(n){var t=n.squared,e=n.outlined,r=n.theme,a=n.type;return t&&e&&function(n,t){return"\n    background: transparent;\n    border: 1px solid ".concat("default"!==t?n["".concat(t,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==t&&n["".concat(t,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==t&&n["".concat(t,"-hover")],";\n        border: 1px solid ").concat("default"!==t&&n["".concat(t,"-hover")],";\n        color: ").concat((function(n){var t=n.theme;return"default"!==n.type&&t["white-color"]}),";\n    }\n")}(r,a)}),(function(n){var t=n.social,e=n.color,r=n.shape;return t&&function(n,t){return"\n    background: ".concat(n,";\n    background: ").concat(n,";\n    border: 1px solid ").concat(n,";\n    color: ").concat((function(n){return n.theme["white-color"]}),";\n    border-radius: ").concat(t?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(n,"90;\n        border: 1px solid ").concat(n,"90;\n        color: ").concat((function(n){return n.theme["white-color"]}),";\n    }\n")}(e,r)})),s=(0,c.ZP)(l)(a||(a=(0,o.Z)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(function(n){var t=n.theme;return t[t.mainContent].bgNormal}))},54987:function(n,t,e){e.r(t),e.d(t,{Cards:function(){return d}});var r=e(38537),a=(e(47313),e(2135)),o=e(24728),i=e(90722),c=e(33464),l=e(46417);function d(n){var t=n.title,e=n.children,d=n.more,s=n.moreText,h=n.size,p=n.headless,u=n.caption,m=n.isbutton,f=n.bodyStyle,g=n.headStyle,x=n.border,b=n.bodypadding,v=n.className;return(0,l.jsx)(l.Fragment,{children:p?(0,l.jsxs)(o.CardFrame,{bodypadding:b&&b,bodyStyle:f&&f,size:h,style:{width:"100%"},bordered:x,className:v,children:[t&&(0,l.jsx)(c.default,{as:"h4",children:t}),u&&(0,l.jsx)("p",{children:u}),e]}):(0,l.jsx)(o.CardFrame,{size:h,title:t,bodyStyle:f&&f,headStyle:g&&g,bordered:x,className:v,bodypadding:b&&b,extra:(0,l.jsxs)(l.Fragment,{children:[d&&(0,l.jsx)(i.Dropdown,{content:d,placement:"bottom",children:(0,l.jsx)(a.rU,{onClick:function(n){return n.preventDefault()},to:"#",children:s?"More":(0,l.jsx)(r.Z,{})})}),m&&m]}),style:{width:"100%"},children:e})})}d.defaultProps={border:!1}},24728:function(n,t,e){e.r(t),e.d(t,{CardFrame:function(){return c}});var r,a=e(30168),o=e(28080),i=e(70244),c=(0,i.ZP)(o.Z)(r||(r=(0,a.Z)(["\n\n  ","\n  margin-bottom: 25px !important;\n\n  background-color: ",";\n  .ant-card-head{\n    border-color: ",";\n    .ant-card-head-title{\n      padding: 18px 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: ",";\n    }\n  }\n  .ant-card-body{\n    padding: ",";\n    @media only screen and (max-width: 575px){\n      padding: ",";\n    }\n    table{\n      .ant-tag{\n        line-height: 18px;\n        border: 0 none;\n        text-transform: uppercase;\n        font-size: 10px;\n        color: #fff;\n        &.early{\n          background: ","\n        }\n        &.late{\n          background: ","\n        }\n        &.complete{\n          background: ","\n        }\n        &.progress{\n          background: ","\n        }\n      }\n    }\n  }\n  .ant-card-head-title .ant-page-header-heading-title{\n    font-weight: 500;\n  }\n  .ant-card.ant-card-bordered {\n      border-radius: 5px;\n      overflow: hidden;\n      border: none;\n  }\n  .custom-label {\n    font-size: 13px;\n    color: #868eae;\n    display: inline-flex;\n    align-items: center;\n  }\n  .custom-label:not(:last-child) {\n    "," : 20px;\n  }\n\n  .custom-label span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    ",": 7px;\n  }\n\n  .ant-card-extra  {\n    padding: 12px 0;\n    .ant-dropdown-trigger{\n      line-height: 0;\n      order: 1;\n      ",": 20px !important;\n      @media only screen and (max-width: 575px){\n        ",": 0 !important;\n      }\n    }\n  }\n\n  .growth-downward h1 sub,\n  .growth-upward h1 sub {\n    font-size: 14px;\n    font-weight: 600;\n    bottom: 0;\n    ",": 5px;\n  }\n \n"])),(function(n){var t=n.isbutton,e=n.theme;return t&&function(n){return"\n    .ant-card-head {\n      display: flex;\n      justify-content: space-evenly;\n      .ant-card-head-wrapper{\n        width: 100%;\n      }\n      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{\n        width: 100%;\n        display: block;\n      }\n      .ant-tabs-nav-scroll {\n        display: flex;\n        justify-content: flex-end;\n      }\n      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {\n        display: none !important;\n      }\n      .ant-tabs-nav .ant-tabs-tab {\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        ".concat(n.rtl?"margin-right":"margin-left",": -1px;\n        display: inline-flex;\n        align-items: center;\n        border: 1px solid ").concat(n["border-color-base"],";\n        background: #fff;\n        span svg {\n          ").concat(n.rtl?"padding-right":"padding-left",": 5px !important;\n        }\n      }\n      .ant-tabs-nav .ant-tabs-tab-active {\n        font-weight: 500;\n        border: 1px solid ").concat(n["primary-color"],";\n        background: ").concat(n["primary-color"],";\n        color: #fff;\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        display: inline-flex;\n        align-items: center;\n      }\n      .ant-tabs-bar {\n        border: none;\n      }\n      .ant-tabs-nav-wrap {\n        margin-bottom: 0px;\n        overflow: hidden;\n    }\n    }\n    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {\n      width: 100%;\n      display: block;\n      justify-content: flex-end;\n      height: 73px;\n      padding-top: 8px;\n  }\n")}(e)}),(function(n){var t=n.theme;return t[t.mainContent]["white-background"]}),(function(n){var t=n.theme;return t[t.mainContent]["border-color-default"]}),(function(n){var t=n.theme;return t[t.mainContent]["dark-text"]}),(function(n){var t=n.bodypadding;return t?"".concat(t," !important"):"25px !important"}),(function(n){var t=n.bodypadding;return t?"".concat(t," !important"):"15px !important"}),(function(n){return n.theme["primary-color"]}),(function(n){var t=n.theme;return t[t.mainContent].Warning}),(function(n){var t=n.theme;return t[t.mainContent].success}),(function(n){var t=n.theme;return t[t.mainContent].danger}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" right":" left"}))},24441:function(n,t,e){e.r(t),e.d(t,{PageHeader:function(){return l}});var r=e(28709),a=e(2135),o=e(79585),i=e(7489),c=e(46417);function l(n){var t=n.title,l=n.subTitle,d=n.routes,s=n.buttons,h=n.ghost,p=n.bgColor,u=n.className,m=d?(0,c.jsx)(r.Z,{separator:(0,c.jsx)("span",{className:"ninjadash-seperator"}),children:d.map((function(n,t){return t+1===d.length?(0,c.jsx)(r.Z.Item,{children:n.breadcrumbName},t):(0,c.jsxs)(r.Z.Item,{children:[(0,c.jsx)(o.Q,{src:e(4377).Z})," ",(0,c.jsx)(a.rU,{to:n.path,children:n.breadcrumbName})]},t)}))}):"";return(0,c.jsx)(i.HeaderWrapper,{bgColor:p,children:(0,c.jsx)(i.PageHeaderStyle,{className:u,title:t,subTitle:l,breadcrumb:m,extra:s,ghost:h})})}},7489:function(n,t,e){e.r(t),e.d(t,{HeaderWrapper:function(){return d},PageHeaderStyle:function(){return l}});var r,a,o=e(30168),i=e(94475),c=e(70244),l=(0,c.ZP)(i.Z)(r||(r=(0,o.Z)(["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"],["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"])),(function(n){var t=n.theme;return t[t.mainContent]["main-background-light"]}),(function(n){var t=n.theme;return t[t.mainContent]["main-background"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme["primary-color"]}),(function(n){var t=n.theme;return t[t.mainContent]["extra-light"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){var t=n.theme;return t[t.mainContent]["menu-active"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["light-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var t=n.theme;return t[t.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var t=n.theme;return t[t.mainContent]["gray-light-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["dark-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["dark-text"]})),d=c.ZP.div(a||(a=(0,o.Z)(["\n  background: ","};\n  border-radius: 5px;\n  .ant-page-header-heading-title{\n    color: ",";\n  }\n  .ant-page-header-heading-sub-title{\n    color: ",";\n  }\n"])),(function(n){var t=n.theme;return n.bgColor||t[t.mainContent]["main-background-light"]}),(function(n){var t=n.theme;return t[t.mainContent]["dark-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}))},23939:function(n,t,e){e.r(t);e(47313);var r=e(11843),a=e(68197),o=e(59624),i=e(46155),c=e(2642),l=e(80413),d=e(59857),s=e(84675),h=e(35182),p=e(24441),u=e(23008),m=e(54987),f=e(3284),g=e(46417);t.default=function(){var n=function(){},t=function(n){r.Z[n]({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})},e=function(n){r.Z.info({message:"Notification ".concat(n),description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",placement:n})};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.PageHeader,{className:"ninjadash-page-header-main",title:"Notifications",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Notifications"}]}),(0,g.jsx)(u.Main,{children:(0,g.jsxs)(a.Z,{gutter:15,children:[(0,g.jsx)(o.Z,{md:12,sm:12,xs:24,children:(0,g.jsx)(m.Cards,{title:"Basic",caption:"The simplest use of Notification",children:(0,g.jsx)(f.Button,{type:"primary",size:"small",onClick:function(){r.Z.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",onClick:function(){}})},children:"Open the notification box"})})}),(0,g.jsx)(o.Z,{md:12,sm:12,xs:24,children:(0,g.jsx)(m.Cards,{title:"Duration after which the notification box is closed",caption:"The simplest use of Notification",children:(0,g.jsx)(f.Button,{type:"primary",size:"small",onClick:function(){r.Z.open({message:"Notification Title",description:"I will never close automatically. I will be close automatically. I will never close automatically.",duration:0})},children:"Open the notification box"})})}),(0,g.jsx)(o.Z,{md:12,sm:12,xs:24,children:(0,g.jsx)(m.Cards,{title:"Custom close button",caption:"The simplest use of Notification",children:(0,g.jsx)(f.Button,{type:"primary",size:"small",onClick:function(){var t="open".concat(Date.now()),e=(0,g.jsx)(f.Button,{type:"primary",size:"small",onClick:function(){return r.Z.close(t)},children:"Confirm"});r.Z.open({message:"Notification Title",description:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',btn:e,key:t,onClose:n})},children:"Open the notification box"})})}),(0,g.jsx)(o.Z,{md:12,sm:12,xs:24,children:(0,g.jsx)(m.Cards,{title:"Notification with icon",caption:"The simplest use of Notification",children:(0,g.jsxs)(u.NotificationListWrapper,{children:[(0,g.jsx)(f.Button,{type:"success",size:"small",onClick:function(){return t("success")},children:"Success"}),(0,g.jsx)(f.Button,{type:"info",size:"small",onClick:function(){return t("info")},children:"Info"}),(0,g.jsx)(f.Button,{type:"warning",size:"small",onClick:function(){return t("warning")},children:"Warning"}),(0,g.jsx)(f.Button,{type:"error",size:"small",onClick:function(){return t("error")},children:"Error"})]})})}),(0,g.jsx)(o.Z,{md:12,sm:12,xs:24,children:(0,g.jsx)(m.Cards,{title:"Notification with custom icon",caption:"The simplest use of Notification",children:(0,g.jsx)(f.Button,{type:"primary",size:"small",onClick:function(){r.Z.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",icon:(0,g.jsx)(c.Z,{style:{color:"#108ee9"}})})},children:"Open the notification box"})})}),(0,g.jsx)(o.Z,{md:12,sm:12,xs:24,children:(0,g.jsxs)(m.Cards,{title:"Notification with custom Style",caption:"The simplest use of Notification",children:[(0,g.jsx)(f.Button,{type:"primary",size:"small",onClick:function(){r.Z.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",style:{width:600,marginLeft:-265}})},children:"Open the notification box"}),","]})}),(0,g.jsx)(o.Z,{md:12,sm:12,xs:24,children:(0,g.jsx)(m.Cards,{title:"Notification with placement",caption:"The simplest use of Notification",children:(0,g.jsxs)(u.NotificationListWrapper,{children:[(0,g.jsxs)(f.Button,{type:"primary",size:"small",onClick:function(){return e("topLeft")},children:[(0,g.jsx)(l.Z,{}),"topLeft"]}),(0,g.jsxs)(f.Button,{type:"primary",size:"small",onClick:function(){return e("topRight")},children:[(0,g.jsx)(d.Z,{}),"topRight"]}),(0,g.jsx)(i.Z,{}),(0,g.jsxs)(f.Button,{type:"primary",size:"small",onClick:function(){return e("bottomLeft")},children:[(0,g.jsx)(s.Z,{}),"bottomLeft"]}),(0,g.jsxs)(f.Button,{type:"primary",size:"small",onClick:function(){return e("bottomRight")},children:[(0,g.jsx)(h.Z,{}),"bottomRight"]})]})})})]})})]})}},84675:function(n,t,e){e.d(t,{Z:function(){return l}});var r=e(1413),a=e(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M712 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm2-696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM136 374h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0-174h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm752 624h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-230 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm230 624H358c-87.3 0-158-70.7-158-158V484c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v182c0 127 103 230 230 230h182c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"radius-bottomleft",theme:"outlined"},i=e(6476),c=function(n,t){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:t,icon:o}))};c.displayName="RadiusBottomleftOutlined";var l=a.forwardRef(c)},35182:function(n,t,e){e.d(t,{Z:function(){return l}});var r=e(1413),a=e(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M368 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-58-624h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm578 102h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm292 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm174 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm230 276h-56c-4.4 0-8 3.6-8 8v182c0 87.3-70.7 158-158 158H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h182c127 0 230-103 230-230V484c0-4.4-3.6-8-8-8z"}}]},name:"radius-bottomright",theme:"outlined"},i=e(6476),c=function(n,t){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:t,icon:o}))};c.displayName="RadiusBottomrightOutlined";var l=a.forwardRef(c)},80413:function(n,t,e){e.d(t,{Z:function(){return l}});var r=e(1413),a=e(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M656 200h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm58 624h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 650h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm696-696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-174 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm174-696H358c-127 0-230 103-230 230v182c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V358c0-87.3 70.7-158 158-158h182c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"radius-upleft",theme:"outlined"},i=e(6476),c=function(n,t){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:t,icon:o}))};c.displayName="RadiusUpleftOutlined";var l=a.forwardRef(c)},59857:function(n,t,e){e.d(t,{Z:function(){return l}});var r=e(1413),a=e(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M368 128h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-2 696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm522-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 128h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm174 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-48-696H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h182c87.3 0 158 70.7 158 158v182c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V358c0-127-103-230-230-230z"}}]},name:"radius-upright",theme:"outlined"},i=e(6476),c=function(n,t){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:t,icon:o}))};c.displayName="RadiusUprightOutlined";var l=a.forwardRef(c)},2642:function(n,t,e){e.d(t,{Z:function(){return l}});var r=e(1413),a=e(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"},i=e(6476),c=function(n,t){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:t,icon:o}))};c.displayName="SmileOutlined";var l=a.forwardRef(c)},38537:function(n,t,e){var r=e(1413),a=e(45987),o=e(61962),i=e(75192),c=e.n(i),l=["color","size"],d=function(n){var t=n.color,e=n.size,i=(0,a.Z)(n,l);return o.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:t},i),o.createElement("path",{d:"M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"}))};d.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},d.defaultProps={color:"currentColor",size:"24"},t.Z=d},46155:function(n,t,e){var r=e(87462),a=e(4942),o=e(46123),i=e.n(o),c=e(47313),l=e(74714),d=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(e[r[a]]=n[r[a]])}return e};t.Z=function(n){var t,e=c.useContext(l.E_),o=e.getPrefixCls,s=e.direction,h=n.prefixCls,p=n.type,u=void 0===p?"horizontal":p,m=n.orientation,f=void 0===m?"center":m,g=n.orientationMargin,x=n.className,b=n.children,v=n.dashed,y=n.plain,w=d(n,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),z=o("divider",h),k=f.length>0?"-".concat(f):f,j=!!b,Z="left"===f&&null!=g,C="right"===f&&null!=g,N=i()(z,"".concat(z,"-").concat(u),(t={},(0,a.Z)(t,"".concat(z,"-with-text"),j),(0,a.Z)(t,"".concat(z,"-with-text").concat(k),j),(0,a.Z)(t,"".concat(z,"-dashed"),!!v),(0,a.Z)(t,"".concat(z,"-plain"),!!y),(0,a.Z)(t,"".concat(z,"-rtl"),"rtl"===s),(0,a.Z)(t,"".concat(z,"-no-default-orientation-margin-left"),Z),(0,a.Z)(t,"".concat(z,"-no-default-orientation-margin-right"),C),t),x),T=(0,r.Z)((0,r.Z)({},Z&&{marginLeft:g}),C&&{marginRight:g});return c.createElement("div",(0,r.Z)({className:N},w,{role:"separator"}),b&&"vertical"!==u&&c.createElement("span",{className:"".concat(z,"-inner-text"),style:T},b))}}}]);