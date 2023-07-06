"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[2701],{4377:function(n,t,e){e(47313);t.Z=e.p+"static/media/home.86b39a0ae5b4b6dd596b6963557ed8ed.svg"},3284:function(n,t,e){e.r(t),e.d(t,{BtnGroup:function(){return p},Button:function(){return l}});var r=e(1413),a=e(29439),i=e(45987),o=e(47313),s=e(71128),c=e(46417),d=["type","shape","icon","size","outlined","ghost","transparented","raised","squared","color","social","load","children"];function l(n){var t=n.type,e=n.shape,l=n.icon,p=n.size,h=n.outlined,u=n.ghost,x=n.transparented,g=n.raised,m=n.squared,f=n.color,b=n.social,y=n.load,j=n.children,v=(0,i.Z)(n,d),k=(0,o.useState)({loading:!1}),w=(0,a.Z)(k,2),L=w[0],B=w[1];return(0,c.jsx)(s.ButtonStyled,(0,r.Z)((0,r.Z)({squared:m,outlined:h?1:0,ghost:u,transparent:x?1:0,raised:g?1:0,data:t,size:p,shape:e,type:t,icon:l,color:f,social:b,onClick:y&&function(){B({loading:!0})},loading:L.loading},v),{},{children:j}))}function p(n){var t=n.children;return(0,c.jsx)(s.ButtonStyledGroup,{children:t})}l.defaultProps={type:"default"}},71128:function(n,t,e){e.r(t),e.d(t,{ButtonStyled:function(){return d},ButtonStyledGroup:function(){return l}});var r,a,i=e(30168),o=e(59491),s=e(70244),c=o.Z.Group,d=(0,s.ZP)(o.Z)(r||(r=(0,i.Z)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(function(n){var t=n.type,e=n.theme;return"default"!==t&&e["".concat(t,"-color")]}),(function(n){return"dashed"!==n.type?"solid":"dashed"}),(function(n){var t=n.theme;return"default"!==n.type?"#ffffff":t[t.mainContent]["gray-text"]}),(function(n){return n.shape?"40px":"4px"}),(function(n){var t=n.size,e=n.theme;return"default"!==t?e["btn-height-".concat(t)]:"44px"}),(function(n){var t=n.type,e=n.theme;return"default"!==t?e["white-color"]:e["light-color"]}),(function(n){var t=n.type,e=n.theme;return"default"!==t&&e["".concat(t,"-hover")]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var t=n.transparent,e=n.theme,r=n.type;return t&&function(n,t){return"\n        background: ".concat(n["".concat(t,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(n["".concat(t,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==t&&n["".concat(t,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==t&&n["".concat(t,"-hover")],"; \n        }\n    ")}(e,r)}),(function(n){var t=n.outlined,e=n.theme,r=n.type;return t&&function(n,t){return"\n        background: transparent;\n        border: 1px solid ".concat("light"!==t?n["".concat(t,"-color")]:n[n.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==t?n["".concat(t,"-color")]:n["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==t?n["".concat(t,"-hover")]:n["primary-color"],";\n          color: ").concat("light"!==t?n["".concat(t,"-color")]:n["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==t?n["".concat(t,"-color")]:n["primary-color"],";\n          }\n        }\n    ")}(e,r)}),(function(n){var t=n.ghost,e=n.theme;return t&&function(n){return"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(n["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(n["border-color-normal"]," !important;\n        }\n    ")}(e)}),(function(n){var t=n.raised,e=n.theme,r=n.type;return t&&function(n,t){return"\n        box-shadow: 0 8px 13px ".concat("white"!==t?n["".concat(t,"-color")]:n["light-color"],"20;\n    ")}(e,r)}),(function(n){var t=n.squared,e=n.theme,r=n.type;return t&&function(n,t){return"\n    background: ".concat("default"!==t&&n["".concat(t,"-color")],";\n    border: 1px solid ").concat("default"!==t?n["".concat(t,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==t&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==t&&n["".concat(t,"-hover")],";\n        border: 1px solid ").concat("default"!==t&&n["".concat(t,"-hover")],";\n        color: ").concat("default"!==t&&"#ffffff",";\n    }\n")}(e,r)}),(function(n){var t=n.squared,e=n.outlined,r=n.theme,a=n.type;return t&&e&&function(n,t){return"\n    background: transparent;\n    border: 1px solid ".concat("default"!==t?n["".concat(t,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==t&&n["".concat(t,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==t&&n["".concat(t,"-hover")],";\n        border: 1px solid ").concat("default"!==t&&n["".concat(t,"-hover")],";\n        color: ").concat((function(n){var t=n.theme;return"default"!==n.type&&t["white-color"]}),";\n    }\n")}(r,a)}),(function(n){var t=n.social,e=n.color,r=n.shape;return t&&function(n,t){return"\n    background: ".concat(n,";\n    background: ").concat(n,";\n    border: 1px solid ").concat(n,";\n    color: ").concat((function(n){return n.theme["white-color"]}),";\n    border-radius: ").concat(t?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(n,"90;\n        border: 1px solid ").concat(n,"90;\n        color: ").concat((function(n){return n.theme["white-color"]}),";\n    }\n")}(e,r)})),l=(0,s.ZP)(c)(a||(a=(0,i.Z)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(function(n){var t=n.theme;return t[t.mainContent].bgNormal}))},54987:function(n,t,e){e.r(t),e.d(t,{Cards:function(){return d}});var r=e(38537),a=(e(47313),e(2135)),i=e(24728),o=e(90722),s=e(33464),c=e(46417);function d(n){var t=n.title,e=n.children,d=n.more,l=n.moreText,p=n.size,h=n.headless,u=n.caption,x=n.isbutton,g=n.bodyStyle,m=n.headStyle,f=n.border,b=n.bodypadding,y=n.className;return(0,c.jsx)(c.Fragment,{children:h?(0,c.jsxs)(i.CardFrame,{bodypadding:b&&b,bodyStyle:g&&g,size:p,style:{width:"100%"},bordered:f,className:y,children:[t&&(0,c.jsx)(s.default,{as:"h4",children:t}),u&&(0,c.jsx)("p",{children:u}),e]}):(0,c.jsx)(i.CardFrame,{size:p,title:t,bodyStyle:g&&g,headStyle:m&&m,bordered:f,className:y,bodypadding:b&&b,extra:(0,c.jsxs)(c.Fragment,{children:[d&&(0,c.jsx)(o.Dropdown,{content:d,placement:"bottom",children:(0,c.jsx)(a.rU,{onClick:function(n){return n.preventDefault()},to:"#",children:l?"More":(0,c.jsx)(r.Z,{})})}),x&&x]}),style:{width:"100%"},children:e})})}d.defaultProps={border:!1}},24728:function(n,t,e){e.r(t),e.d(t,{CardFrame:function(){return s}});var r,a=e(30168),i=e(28080),o=e(70244),s=(0,o.ZP)(i.Z)(r||(r=(0,a.Z)(["\n\n  ","\n  margin-bottom: 25px !important;\n\n  background-color: ",";\n  .ant-card-head{\n    border-color: ",";\n    .ant-card-head-title{\n      padding: 18px 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: ",";\n    }\n  }\n  .ant-card-body{\n    padding: ",";\n    @media only screen and (max-width: 575px){\n      padding: ",";\n    }\n    table{\n      .ant-tag{\n        line-height: 18px;\n        border: 0 none;\n        text-transform: uppercase;\n        font-size: 10px;\n        color: #fff;\n        &.early{\n          background: ","\n        }\n        &.late{\n          background: ","\n        }\n        &.complete{\n          background: ","\n        }\n        &.progress{\n          background: ","\n        }\n      }\n    }\n  }\n  .ant-card-head-title .ant-page-header-heading-title{\n    font-weight: 500;\n  }\n  .ant-card.ant-card-bordered {\n      border-radius: 5px;\n      overflow: hidden;\n      border: none;\n  }\n  .custom-label {\n    font-size: 13px;\n    color: #868eae;\n    display: inline-flex;\n    align-items: center;\n  }\n  .custom-label:not(:last-child) {\n    "," : 20px;\n  }\n\n  .custom-label span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    ",": 7px;\n  }\n\n  .ant-card-extra  {\n    padding: 12px 0;\n    .ant-dropdown-trigger{\n      line-height: 0;\n      order: 1;\n      ",": 20px !important;\n      @media only screen and (max-width: 575px){\n        ",": 0 !important;\n      }\n    }\n  }\n\n  .growth-downward h1 sub,\n  .growth-upward h1 sub {\n    font-size: 14px;\n    font-weight: 600;\n    bottom: 0;\n    ",": 5px;\n  }\n \n"])),(function(n){var t=n.isbutton,e=n.theme;return t&&function(n){return"\n    .ant-card-head {\n      display: flex;\n      justify-content: space-evenly;\n      .ant-card-head-wrapper{\n        width: 100%;\n      }\n      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{\n        width: 100%;\n        display: block;\n      }\n      .ant-tabs-nav-scroll {\n        display: flex;\n        justify-content: flex-end;\n      }\n      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {\n        display: none !important;\n      }\n      .ant-tabs-nav .ant-tabs-tab {\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        ".concat(n.rtl?"margin-right":"margin-left",": -1px;\n        display: inline-flex;\n        align-items: center;\n        border: 1px solid ").concat(n["border-color-base"],";\n        background: #fff;\n        span svg {\n          ").concat(n.rtl?"padding-right":"padding-left",": 5px !important;\n        }\n      }\n      .ant-tabs-nav .ant-tabs-tab-active {\n        font-weight: 500;\n        border: 1px solid ").concat(n["primary-color"],";\n        background: ").concat(n["primary-color"],";\n        color: #fff;\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        display: inline-flex;\n        align-items: center;\n      }\n      .ant-tabs-bar {\n        border: none;\n      }\n      .ant-tabs-nav-wrap {\n        margin-bottom: 0px;\n        overflow: hidden;\n    }\n    }\n    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {\n      width: 100%;\n      display: block;\n      justify-content: flex-end;\n      height: 73px;\n      padding-top: 8px;\n  }\n")}(e)}),(function(n){var t=n.theme;return t[t.mainContent]["white-background"]}),(function(n){var t=n.theme;return t[t.mainContent]["border-color-default"]}),(function(n){var t=n.theme;return t[t.mainContent]["dark-text"]}),(function(n){var t=n.bodypadding;return t?"".concat(t," !important"):"25px !important"}),(function(n){var t=n.bodypadding;return t?"".concat(t," !important"):"15px !important"}),(function(n){return n.theme["primary-color"]}),(function(n){var t=n.theme;return t[t.mainContent].Warning}),(function(n){var t=n.theme;return t[t.mainContent].success}),(function(n){var t=n.theme;return t[t.mainContent].danger}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" right":" left"}))},24441:function(n,t,e){e.r(t),e.d(t,{PageHeader:function(){return c}});var r=e(28709),a=e(2135),i=e(79585),o=e(7489),s=e(46417);function c(n){var t=n.title,c=n.subTitle,d=n.routes,l=n.buttons,p=n.ghost,h=n.bgColor,u=n.className,x=d?(0,s.jsx)(r.Z,{separator:(0,s.jsx)("span",{className:"ninjadash-seperator"}),children:d.map((function(n,t){return t+1===d.length?(0,s.jsx)(r.Z.Item,{children:n.breadcrumbName},t):(0,s.jsxs)(r.Z.Item,{children:[(0,s.jsx)(i.Q,{src:e(4377).Z})," ",(0,s.jsx)(a.rU,{to:n.path,children:n.breadcrumbName})]},t)}))}):"";return(0,s.jsx)(o.HeaderWrapper,{bgColor:h,children:(0,s.jsx)(o.PageHeaderStyle,{className:u,title:t,subTitle:c,breadcrumb:x,extra:l,ghost:p})})}},7489:function(n,t,e){e.r(t),e.d(t,{HeaderWrapper:function(){return d},PageHeaderStyle:function(){return c}});var r,a,i=e(30168),o=e(94475),s=e(70244),c=(0,s.ZP)(o.Z)(r||(r=(0,i.Z)(["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"],["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"])),(function(n){var t=n.theme;return t[t.mainContent]["main-background-light"]}),(function(n){var t=n.theme;return t[t.mainContent]["main-background"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme["primary-color"]}),(function(n){var t=n.theme;return t[t.mainContent]["extra-light"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){var t=n.theme;return t[t.mainContent]["menu-active"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["light-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var t=n.theme;return t[t.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var t=n.theme;return t[t.mainContent]["gray-light-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["dark-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["dark-text"]})),d=s.ZP.div(a||(a=(0,i.Z)(["\n  background: ","};\n  border-radius: 5px;\n  .ant-page-header-heading-title{\n    color: ",";\n  }\n  .ant-page-header-heading-sub-title{\n    color: ",";\n  }\n"])),(function(n){var t=n.theme;return n.bgColor||t[t.mainContent]["main-background-light"]}),(function(n){var t=n.theme;return t[t.mainContent]["dark-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}))},53418:function(n,t,e){e.r(t),e.d(t,{List:function(){return o}});var r=e(2037),a=(e(47313),e(35086)),i=e(46417);function o(n){var t=n.text;return(0,i.jsxs)(a.ListStyle,{className:"list-single",children:[(0,i.jsx)("span",{className:"icon",children:(0,i.jsx)(r.Z,{})}),(0,i.jsx)("span",{children:t})]})}},35086:function(n,t,e){e.r(t),e.d(t,{ListStyle:function(){return i}});var r,a=e(30168),i=e(70244).ZP.div(r||(r=(0,a.Z)(["\n  .icon {\n    color: ","\n  }\n"])),(function(n){return n.theme["success-color"]}))},22701:function(n,t,e){e.r(t);e(47313);var r=e(68197),a=e(59624),i=e(78642),o=e(24441),s=e(23008),c=e(33464),d=e(53418),l=e(3284),p=e(54987),h=e(46417);t.default=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.PageHeader,{className:"ninjadash-page-header-main",title:"Pricing Table",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Pricing Table"}]}),(0,h.jsxs)(s.Main,{children:[(0,h.jsxs)(r.Z,{gutter:25,children:[(0,h.jsx)(a.Z,{xxl:6,lg:8,sm:12,xs:24,children:(0,h.jsxs)(i.PricingCard,{style:{marginBottom:30},children:[(0,h.jsx)(i.Badge,{className:"pricing-badge badge-dark",type:"dark",children:"Free Forever"}),(0,h.jsx)(c.default,{className:"pricing-title",as:"h3",children:"Free"}),(0,h.jsx)("span",{className:"package-user-type",children:"For Individuals"}),(0,h.jsxs)(i.ListGroup,{children:[(0,h.jsx)(d.List,{text:"100MB File Space"}),(0,h.jsx)(d.List,{text:"2 Active Projects"}),(0,h.jsx)(d.List,{text:"Limited Boards"}),(0,h.jsx)(d.List,{text:"Basic Project Management"})]}),(0,h.jsx)(l.Button,{size:"default",type:"white",children:"Current Plan"})]})}),(0,h.jsx)(a.Z,{xxl:6,lg:8,sm:12,xs:24,children:(0,h.jsxs)(i.PricingCard,{style:{marginBottom:30},children:[(0,h.jsx)(i.Badge,{className:"pricing-badge",type:"primary",children:"Basic Plan"}),(0,h.jsxs)(c.default,{className:"price-amount",as:"h3",children:[(0,h.jsx)("sup",{className:"currency",children:"$"}),"19 ",(0,h.jsx)("sub",{className:"pricing-validity",children:"Per month"})]}),(0,h.jsx)("span",{className:"package-user-type",children:"For 2 Users"}),(0,h.jsxs)(i.ListGroup,{children:[(0,h.jsx)(d.List,{text:"100GB File Space"}),(0,h.jsx)(d.List,{text:"300 Projects"}),(0,h.jsx)(d.List,{text:"Limited Boards"}),(0,h.jsx)(d.List,{text:"Basic Project Management"}),(0,h.jsx)(d.List,{text:"Custom Post Types"})]}),(0,h.jsx)(l.Button,{size:"default",type:"primary",children:"Get Started"})]})}),(0,h.jsx)(a.Z,{xxl:6,lg:8,sm:12,xs:24,children:(0,h.jsxs)(i.PricingCard,{style:{marginBottom:30},children:[(0,h.jsx)(i.Badge,{className:"pricing-badge",type:"secondary",children:"Business"}),(0,h.jsxs)(c.default,{className:"price-amount",as:"h3",children:[(0,h.jsx)("sup",{className:"currency",children:"$"}),"39 ",(0,h.jsx)("sub",{className:"pricing-validity",children:"Per month"})]}),(0,h.jsx)("span",{className:"package-user-type",children:"For 10 Users"}),(0,h.jsxs)(i.ListGroup,{children:[(0,h.jsx)(d.List,{text:"100GB File Space"}),(0,h.jsx)(d.List,{text:"300 Projects"}),(0,h.jsx)(d.List,{text:"Limited Boards"}),(0,h.jsx)(d.List,{text:"Basic Project Management"}),(0,h.jsx)(d.List,{text:"Custom Post Types"}),(0,h.jsx)(d.List,{text:"Subtasks"})]}),(0,h.jsx)(l.Button,{size:"default",type:"secondary",children:"Get Started"})]})}),(0,h.jsx)(a.Z,{xxl:6,lg:8,sm:12,xs:24,children:(0,h.jsxs)(i.PricingCard,{style:{marginBottom:30},children:[(0,h.jsx)(i.Badge,{className:"pricing-badge",type:"success",children:"Enterprise"}),(0,h.jsxs)(c.default,{className:"price-amount",as:"h3",children:[(0,h.jsx)("sup",{className:"currency",children:"$"}),"79 ",(0,h.jsx)("sub",{className:"pricing-validity",children:"Per month"})]}),(0,h.jsx)("span",{className:"package-user-type",children:"For 50 Users"}),(0,h.jsxs)(i.ListGroup,{children:[(0,h.jsx)(d.List,{text:"100GB File Space"}),(0,h.jsx)(d.List,{text:"300 Projects"}),(0,h.jsx)(d.List,{text:"Limited Boards"}),(0,h.jsx)(d.List,{text:"Basic Project Management"}),(0,h.jsx)(d.List,{text:"Custom Post Types"}),(0,h.jsx)(d.List,{text:"Subtasks"})]}),(0,h.jsx)(l.Button,{size:"default",type:"success",children:"Get Started"})]})})]}),(0,h.jsx)(r.Z,{gutter:25,children:(0,h.jsx)(a.Z,{xs:24,children:(0,h.jsx)(p.Cards,{headless:!0,children:(0,h.jsxs)(r.Z,{gutter:25,children:[(0,h.jsx)(a.Z,{xxl:6,lg:8,sm:12,xs:24,children:(0,h.jsxs)(i.PricingCard,{style:{marginBottom:30},children:[(0,h.jsx)(i.Badge,{className:"pricing-badge badge-dark",type:"dark",children:"Free Forever"}),(0,h.jsx)(c.default,{className:"price-amount",as:"h3",children:"Free"}),(0,h.jsx)("span",{className:"package-user-type",children:"For Individuals"}),(0,h.jsxs)(i.ListGroup,{children:[(0,h.jsx)(d.List,{text:"100MB File Space"}),(0,h.jsx)(d.List,{text:"2 Active Projects"}),(0,h.jsx)(d.List,{text:"Limited Boards"}),(0,h.jsx)(d.List,{text:"Basic Project Management"})]}),(0,h.jsx)(l.Button,{size:"default",type:"white",children:"Current Plan"})]})}),(0,h.jsx)(a.Z,{xxl:6,lg:8,sm:12,xs:24,children:(0,h.jsxs)(i.PricingCard,{style:{marginBottom:30},children:[(0,h.jsx)(i.Badge,{className:"pricing-badge",type:"primary",children:"Basic Plan"}),(0,h.jsxs)(c.default,{as:"h3",children:[(0,h.jsx)("sup",{className:"currency",children:"$"})," 19 ",(0,h.jsx)("sub",{className:"pricing-validity",children:"Per month"})]}),(0,h.jsx)("span",{className:"package-user-type",children:"For 2 Users"}),(0,h.jsxs)(i.ListGroup,{children:[(0,h.jsx)(d.List,{text:"100GB File Space"}),(0,h.jsx)(d.List,{text:"300 Projects"}),(0,h.jsx)(d.List,{text:"Limited Boards"}),(0,h.jsx)(d.List,{text:"Basic Project Management"}),(0,h.jsx)(d.List,{text:"Custom Post Types"})]}),(0,h.jsx)(l.Button,{size:"default",type:"primary",children:"Get Started"})]})}),(0,h.jsx)(a.Z,{xxl:6,lg:8,sm:12,xs:24,children:(0,h.jsxs)(i.PricingCard,{style:{marginBottom:30},children:[(0,h.jsx)(i.Badge,{className:"pricing-badge",type:"secondary",children:"Business"}),(0,h.jsxs)(c.default,{as:"h3",children:[(0,h.jsx)("sup",{className:"currency",children:"$"}),"39 ",(0,h.jsx)("sub",{className:"pricing-validity",children:"Per month"})]}),(0,h.jsx)("span",{className:"package-user-type",children:"For 10 Users"}),(0,h.jsxs)(i.ListGroup,{children:[(0,h.jsx)(d.List,{text:"100GB File Space"}),(0,h.jsx)(d.List,{text:"300 Projects"}),(0,h.jsx)(d.List,{text:"Limited Boards"}),(0,h.jsx)(d.List,{text:"Basic Project Management"}),(0,h.jsx)(d.List,{text:"Custom Post Types"}),(0,h.jsx)(d.List,{text:"Subtasks"})]}),(0,h.jsx)(l.Button,{size:"default",type:"secondary",children:"Get Started"})]})}),(0,h.jsx)(a.Z,{xxl:6,lg:8,sm:12,xs:24,children:(0,h.jsxs)(i.PricingCard,{children:[(0,h.jsx)(i.Badge,{className:"pricing-badge",type:"success",children:"Enterprise"}),(0,h.jsxs)(c.default,{as:"h3",children:[(0,h.jsx)("sup",{className:"currency",children:"$"}),"79 ",(0,h.jsx)("sub",{className:"pricing-validity",children:"Per month"})]}),(0,h.jsx)("span",{className:"package-user-type",children:"For 50 Users"}),(0,h.jsxs)(i.ListGroup,{children:[(0,h.jsx)(d.List,{text:"100GB File Space"}),(0,h.jsx)(d.List,{text:"300 Projects"}),(0,h.jsx)(d.List,{text:"Limited Boards"}),(0,h.jsx)(d.List,{text:"Basic Project Management"}),(0,h.jsx)(d.List,{text:"Custom Post Types"}),(0,h.jsx)(d.List,{text:"Subtasks"})]}),(0,h.jsx)(l.Button,{size:"default",type:"success",children:"Get Started"})]})})]})})})})]})]})}},38537:function(n,t,e){var r=e(1413),a=e(45987),i=e(61962),o=e(75192),s=e.n(o),c=["color","size"],d=function(n){var t=n.color,e=n.size,o=(0,a.Z)(n,c);return i.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:t},o),i.createElement("path",{d:"M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"}))};d.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},d.defaultProps={color:"currentColor",size:"24"},t.Z=d}}]);