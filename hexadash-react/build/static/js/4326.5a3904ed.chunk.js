"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[4326],{4377:function(n,e,t){t(47313);e.Z=t.p+"static/media/home.86b39a0ae5b4b6dd596b6963557ed8ed.svg"},3284:function(n,e,t){t.r(e),t.d(e,{BtnGroup:function(){return p},Button:function(){return s}});var r=t(1413),a=t(29439),o=t(45987),i=t(47313),c=t(71128),d=t(46417),l=["type","shape","icon","size","outlined","ghost","transparented","raised","squared","color","social","load","children"];function s(n){var e=n.type,t=n.shape,s=n.icon,p=n.size,u=n.outlined,h=n.ghost,m=n.transparented,g=n.raised,f=n.squared,x=n.color,b=n.social,y=n.load,v=n.children,w=(0,o.Z)(n,l),k=(0,i.useState)({loading:!1}),C=(0,a.Z)(k,2),j=C[0],M=C[1];return(0,d.jsx)(c.ButtonStyled,(0,r.Z)((0,r.Z)({squared:f,outlined:u?1:0,ghost:h,transparent:m?1:0,raised:g?1:0,data:e,size:p,shape:t,type:e,icon:s,color:x,social:b,onClick:y&&function(){M({loading:!0})},loading:j.loading},w),{},{children:v}))}function p(n){var e=n.children;return(0,d.jsx)(c.ButtonStyledGroup,{children:e})}s.defaultProps={type:"default"}},71128:function(n,e,t){t.r(e),t.d(e,{ButtonStyled:function(){return l},ButtonStyledGroup:function(){return s}});var r,a,o=t(30168),i=t(59491),c=t(70244),d=i.Z.Group,l=(0,c.ZP)(i.Z)(r||(r=(0,o.Z)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(function(n){var e=n.type,t=n.theme;return"default"!==e&&t["".concat(e,"-color")]}),(function(n){return"dashed"!==n.type?"solid":"dashed"}),(function(n){var e=n.theme;return"default"!==n.type?"#ffffff":e[e.mainContent]["gray-text"]}),(function(n){return n.shape?"40px":"4px"}),(function(n){var e=n.size,t=n.theme;return"default"!==e?t["btn-height-".concat(e)]:"44px"}),(function(n){var e=n.type,t=n.theme;return"default"!==e?t["white-color"]:t["light-color"]}),(function(n){var e=n.type,t=n.theme;return"default"!==e&&t["".concat(e,"-hover")]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var e=n.transparent,t=n.theme,r=n.type;return e&&function(n,e){return"\n        background: ".concat(n["".concat(e,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(n["".concat(e,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==e&&n["".concat(e,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==e&&n["".concat(e,"-hover")],"; \n        }\n    ")}(t,r)}),(function(n){var e=n.outlined,t=n.theme,r=n.type;return e&&function(n,e){return"\n        background: transparent;\n        border: 1px solid ".concat("light"!==e?n["".concat(e,"-color")]:n[n.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==e?n["".concat(e,"-color")]:n["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==e?n["".concat(e,"-hover")]:n["primary-color"],";\n          color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          }\n        }\n    ")}(t,r)}),(function(n){var e=n.ghost,t=n.theme;return e&&function(n){return"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(n["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(n["border-color-normal"]," !important;\n        }\n    ")}(t)}),(function(n){var e=n.raised,t=n.theme,r=n.type;return e&&function(n,e){return"\n        box-shadow: 0 8px 13px ".concat("white"!==e?n["".concat(e,"-color")]:n["light-color"],"20;\n    ")}(t,r)}),(function(n){var e=n.squared,t=n.theme,r=n.type;return e&&function(n,e){return"\n    background: ".concat("default"!==e&&n["".concat(e,"-color")],";\n    border: 1px solid ").concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat("default"!==e&&"#ffffff",";\n    }\n")}(t,r)}),(function(n){var e=n.squared,t=n.outlined,r=n.theme,a=n.type;return e&&t&&function(n,e){return"\n    background: transparent;\n    border: 1px solid ".concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat((function(n){var e=n.theme;return"default"!==n.type&&e["white-color"]}),";\n    }\n")}(r,a)}),(function(n){var e=n.social,t=n.color,r=n.shape;return e&&function(n,e){return"\n    background: ".concat(n,";\n    background: ").concat(n,";\n    border: 1px solid ").concat(n,";\n    color: ").concat((function(n){return n.theme["white-color"]}),";\n    border-radius: ").concat(e?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(n,"90;\n        border: 1px solid ").concat(n,"90;\n        color: ").concat((function(n){return n.theme["white-color"]}),";\n    }\n")}(t,r)})),s=(0,c.ZP)(d)(a||(a=(0,o.Z)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(function(n){var e=n.theme;return e[e.mainContent].bgNormal}))},54987:function(n,e,t){t.r(e),t.d(e,{Cards:function(){return l}});var r=t(38537),a=(t(47313),t(2135)),o=t(24728),i=t(90722),c=t(33464),d=t(46417);function l(n){var e=n.title,t=n.children,l=n.more,s=n.moreText,p=n.size,u=n.headless,h=n.caption,m=n.isbutton,g=n.bodyStyle,f=n.headStyle,x=n.border,b=n.bodypadding,y=n.className;return(0,d.jsx)(d.Fragment,{children:u?(0,d.jsxs)(o.CardFrame,{bodypadding:b&&b,bodyStyle:g&&g,size:p,style:{width:"100%"},bordered:x,className:y,children:[e&&(0,d.jsx)(c.default,{as:"h4",children:e}),h&&(0,d.jsx)("p",{children:h}),t]}):(0,d.jsx)(o.CardFrame,{size:p,title:e,bodyStyle:g&&g,headStyle:f&&f,bordered:x,className:y,bodypadding:b&&b,extra:(0,d.jsxs)(d.Fragment,{children:[l&&(0,d.jsx)(i.Dropdown,{content:l,placement:"bottom",children:(0,d.jsx)(a.rU,{onClick:function(n){return n.preventDefault()},to:"#",children:s?"More":(0,d.jsx)(r.Z,{})})}),m&&m]}),style:{width:"100%"},children:t})})}l.defaultProps={border:!1}},24728:function(n,e,t){t.r(e),t.d(e,{CardFrame:function(){return c}});var r,a=t(30168),o=t(28080),i=t(70244),c=(0,i.ZP)(o.Z)(r||(r=(0,a.Z)(["\n\n  ","\n  margin-bottom: 25px !important;\n\n  background-color: ",";\n  .ant-card-head{\n    border-color: ",";\n    .ant-card-head-title{\n      padding: 18px 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: ",";\n    }\n  }\n  .ant-card-body{\n    padding: ",";\n    @media only screen and (max-width: 575px){\n      padding: ",";\n    }\n    table{\n      .ant-tag{\n        line-height: 18px;\n        border: 0 none;\n        text-transform: uppercase;\n        font-size: 10px;\n        color: #fff;\n        &.early{\n          background: ","\n        }\n        &.late{\n          background: ","\n        }\n        &.complete{\n          background: ","\n        }\n        &.progress{\n          background: ","\n        }\n      }\n    }\n  }\n  .ant-card-head-title .ant-page-header-heading-title{\n    font-weight: 500;\n  }\n  .ant-card.ant-card-bordered {\n      border-radius: 5px;\n      overflow: hidden;\n      border: none;\n  }\n  .custom-label {\n    font-size: 13px;\n    color: #868eae;\n    display: inline-flex;\n    align-items: center;\n  }\n  .custom-label:not(:last-child) {\n    "," : 20px;\n  }\n\n  .custom-label span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    ",": 7px;\n  }\n\n  .ant-card-extra  {\n    padding: 12px 0;\n    .ant-dropdown-trigger{\n      line-height: 0;\n      order: 1;\n      ",": 20px !important;\n      @media only screen and (max-width: 575px){\n        ",": 0 !important;\n      }\n    }\n  }\n\n  .growth-downward h1 sub,\n  .growth-upward h1 sub {\n    font-size: 14px;\n    font-weight: 600;\n    bottom: 0;\n    ",": 5px;\n  }\n \n"])),(function(n){var e=n.isbutton,t=n.theme;return e&&function(n){return"\n    .ant-card-head {\n      display: flex;\n      justify-content: space-evenly;\n      .ant-card-head-wrapper{\n        width: 100%;\n      }\n      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{\n        width: 100%;\n        display: block;\n      }\n      .ant-tabs-nav-scroll {\n        display: flex;\n        justify-content: flex-end;\n      }\n      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {\n        display: none !important;\n      }\n      .ant-tabs-nav .ant-tabs-tab {\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        ".concat(n.rtl?"margin-right":"margin-left",": -1px;\n        display: inline-flex;\n        align-items: center;\n        border: 1px solid ").concat(n["border-color-base"],";\n        background: #fff;\n        span svg {\n          ").concat(n.rtl?"padding-right":"padding-left",": 5px !important;\n        }\n      }\n      .ant-tabs-nav .ant-tabs-tab-active {\n        font-weight: 500;\n        border: 1px solid ").concat(n["primary-color"],";\n        background: ").concat(n["primary-color"],";\n        color: #fff;\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        display: inline-flex;\n        align-items: center;\n      }\n      .ant-tabs-bar {\n        border: none;\n      }\n      .ant-tabs-nav-wrap {\n        margin-bottom: 0px;\n        overflow: hidden;\n    }\n    }\n    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {\n      width: 100%;\n      display: block;\n      justify-content: flex-end;\n      height: 73px;\n      padding-top: 8px;\n  }\n")}(t)}),(function(n){var e=n.theme;return e[e.mainContent]["white-background"]}),(function(n){var e=n.theme;return e[e.mainContent]["border-color-default"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.bodypadding;return e?"".concat(e," !important"):"25px !important"}),(function(n){var e=n.bodypadding;return e?"".concat(e," !important"):"15px !important"}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent].Warning}),(function(n){var e=n.theme;return e[e.mainContent].success}),(function(n){var e=n.theme;return e[e.mainContent].danger}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" right":" left"}))},81230:function(n,e,t){t.r(e),t.d(e,{Modal:function(){return i},alertModal:function(){return c}});t(47313);var r=t(75895),a=t(3284),o=t(46417);function i(n){var e=n.onCancel,t=n.className,i=n.onOk,c=n.visible,d=n.title,l=n.type,s=n.color,p=n.footer,u=n.width,h=n.children;return(0,o.jsx)(r.ModalStyled,{title:d,visible:c,onOk:i,onCancel:e,type:!!s&&l,width:u,className:t,footer:p||null===p?p:[(0,o.jsx)(a.Button,{type:"secondary",onClick:e,children:"Cancel"},"back"),(0,o.jsx)(a.Button,{type:l,onClick:i,children:"Save Change"},"submit")],children:h})}i.defaultProps={width:620,className:"atbd-modal"};var c=r.ModalStyled},75895:function(n,e,t){t.r(e),t.d(e,{ModalStyled:function(){return d},ModalStyledColord:function(){return c}});var r,a=t(30168),o=t(20870),i=t(70244),c=function(n,e){return"\n  .ant-modal-content, .ant-modal-header {\n    background-color: ".concat("default"!==n&&e["".concat(n,"-color")]," !important;\n  }\n  .ant-modal-title {\n    color: #fff;\n  }\n  .ant-modal-content{\n    .ant-modal-close-x{\n      svg{\n        color: #fff;\n      }\n    }\n    p{\n      color: #fff;\n    }\n  }\n  .ant-modal-footer button {\n    background: #fff;\n    color: #999;\n    border: 1px solid #ffff;\n  }\n")},d=(0,i.ZP)(o.Z)(r||(r=(0,a.Z)(["    \n  ","\n"])),(function(n){var e=n.theme,t=n.type;return t&&c(t,e)}))},24441:function(n,e,t){t.r(e),t.d(e,{PageHeader:function(){return d}});var r=t(28709),a=t(2135),o=t(79585),i=t(7489),c=t(46417);function d(n){var e=n.title,d=n.subTitle,l=n.routes,s=n.buttons,p=n.ghost,u=n.bgColor,h=n.className,m=l?(0,c.jsx)(r.Z,{separator:(0,c.jsx)("span",{className:"ninjadash-seperator"}),children:l.map((function(n,e){return e+1===l.length?(0,c.jsx)(r.Z.Item,{children:n.breadcrumbName},e):(0,c.jsxs)(r.Z.Item,{children:[(0,c.jsx)(o.Q,{src:t(4377).Z})," ",(0,c.jsx)(a.rU,{to:n.path,children:n.breadcrumbName})]},e)}))}):"";return(0,c.jsx)(i.HeaderWrapper,{bgColor:u,children:(0,c.jsx)(i.PageHeaderStyle,{className:h,title:e,subTitle:d,breadcrumb:m,extra:s,ghost:p})})}},7489:function(n,e,t){t.r(e),t.d(e,{HeaderWrapper:function(){return l},PageHeaderStyle:function(){return d}});var r,a,o=t(30168),i=t(94475),c=t(70244),d=(0,c.ZP)(i.Z)(r||(r=(0,o.Z)(["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"],["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"])),(function(n){var e=n.theme;return e[e.mainContent]["main-background-light"]}),(function(n){var e=n.theme;return e[e.mainContent]["main-background"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent]["extra-light"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){var e=n.theme;return e[e.mainContent]["menu-active"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["light-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var e=n.theme;return e[e.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-light-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]})),l=c.ZP.div(a||(a=(0,o.Z)(["\n  background: ","};\n  border-radius: 5px;\n  .ant-page-header-heading-title{\n    color: ",";\n  }\n  .ant-page-header-heading-sub-title{\n    color: ",";\n  }\n"])),(function(n){var e=n.theme;return n.bgColor||e[e.mainContent]["main-background-light"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}))},93789:function(n,e,t){t.r(e);var r=t(29439),a=t(47313),o=t(68197),i=t(59624),c=t(24441),d=t(23008),l=t(54987),s=t(3284),p=t(81230),u=t(46417),h=function(){p.alertModal.info({title:"This is a notification message",content:(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{children:"some messages...some messages..."}),(0,u.jsx)("p",{children:"some messages...some messages..."})]}),onOk:function(){}})},m=function(){p.alertModal.success({content:"some messages...some messages..."})},g=function(){p.alertModal.error({title:"This is an error message",content:"some messages...some messages..."})},f=function(){p.alertModal.warning({title:"This is a warning message",content:"some messages...some messages..."})},x=function(){var n=5,e=p.alertModal.success({title:"This is a notification message",content:"This modal will be destroyed after ".concat(n," second.")}),t=setInterval((function(){n-=1,e.update({content:"This modal will be destroyed after ".concat(n," second.")})}),1e3);setTimeout((function(){clearInterval(t),e.destroy()}),1e3*n)},b=function(){p.alertModal.confirm({title:"Do you want to delete these items?",content:"When clicked the OK button, this dialog will be closed after 1 second",onOk:function(){return new Promise((function(n,e){setTimeout(Math.random()>.5?n:e,1e3)})).catch((function(){}))},onCancel:function(){}})};e.default=function(){var n=(0,a.useState)({visible:!1,modalType:"primary",colorModal:!1}),e=(0,r.Z)(n,2),t=e[0],y=e[1],v=function(n){y({visible:!0,modalType:n})},w=function(n){y({colorModal:!0,modalType:n})},k=function(){y({visible:!1,colorModal:!1})},C=function(){y({visible:!1,colorModal:!1})};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.PageHeader,{className:"ninjadash-page-header-main",title:"Modals",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Modals"}]}),(0,u.jsx)(d.Main,{children:(0,u.jsxs)(o.Z,{gutter:15,children:[(0,u.jsxs)(i.Z,{md:12,children:[(0,u.jsxs)(p.Modal,{type:t.modalType,title:"Basic Modal",visible:t.visible,onOk:k,onCancel:C,children:[(0,u.jsx)("p",{children:"Some contents..."}),(0,u.jsx)("p",{children:"Some contents..."}),(0,u.jsx)("p",{children:"Some contents..."})]}),(0,u.jsxs)(l.Cards,{title:"Default Modal",size:"large",caption:"Default Ant Design Modal",children:[(0,u.jsx)("p",{children:"When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information. Additionally"}),(0,u.jsxs)("div",{className:"modal-btns-wrap",children:[(0,u.jsx)(s.Button,{onClick:function(){return v("primary")},type:"primary",style:{margin:"5px"},children:"Primary"}),(0,u.jsx)(s.Button,{onClick:function(){return v("success")},type:"success",style:{margin:"5px"},children:"Success"}),(0,u.jsx)(s.Button,{onClick:function(){return v("danger")},type:"danger",style:{margin:"5px"},children:"Danger"}),(0,u.jsx)(s.Button,{onClick:function(){return v("warning")},type:"warning",style:{margin:"5px"},children:"Warning"})]})]})]}),(0,u.jsxs)(i.Z,{md:12,children:[(0,u.jsxs)(p.Modal,{type:t.modalType,color:!0,title:"Basic Modal",visible:t.colorModal,onOk:k,onCancel:C,children:[(0,u.jsx)("p",{children:"Some contents..."}),(0,u.jsx)("p",{children:"Some contents..."}),(0,u.jsx)("p",{children:"Some contents..."})]}),(0,u.jsxs)(l.Cards,{title:"Color Modal",size:"large",caption:"Color Ant Design Modal",children:[(0,u.jsx)("p",{children:"When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information. Additionally"}),(0,u.jsxs)("div",{className:"modal-btns-wrap",children:[(0,u.jsx)(s.Button,{onClick:function(){return w("primary")},type:"primary",style:{margin:"5px"},children:"Primary"}),(0,u.jsx)(s.Button,{onClick:function(){return w("success")},type:"success",style:{margin:"5px"},children:"Success"}),(0,u.jsx)(s.Button,{onClick:function(){return w("danger")},type:"danger",style:{margin:"5px"},children:"Danger"}),(0,u.jsx)(s.Button,{onClick:function(){return w("warning")},type:"warning",style:{margin:"5px"},children:"Warning"})]})]})]}),(0,u.jsx)(i.Z,{md:12,children:(0,u.jsxs)(l.Cards,{title:"Information Modal",size:"large",caption:"Notification Ant Design Modal",children:[(0,u.jsx)("p",{children:"When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information. Additionally"}),(0,u.jsxs)("div",{className:"modal-btns-wrap",children:[(0,u.jsx)(s.Button,{onClick:m,type:"success",style:{margin:"5px"},children:"Success"}),(0,u.jsx)(s.Button,{onClick:g,type:"error",style:{margin:"5px"},children:"Error"}),(0,u.jsx)(s.Button,{onClick:f,type:"warning",style:{margin:"5px"},children:"Warning"}),(0,u.jsx)(s.Button,{onClick:h,type:"info",style:{margin:"5px"},children:"Info"}),(0,u.jsx)(s.Button,{onClick:x,type:"primary",style:{margin:"5px"},children:"Modal Self Destroyed"}),(0,u.jsx)(s.Button,{onClick:b,type:"primary",style:{margin:"5px"},children:"Confirm"})]})]})})]})})]})}},38537:function(n,e,t){var r=t(1413),a=t(45987),o=t(61962),i=t(75192),c=t.n(i),d=["color","size"],l=function(n){var e=n.color,t=n.size,i=(0,a.Z)(n,d);return o.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:e},i),o.createElement("path",{d:"M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"}))};l.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},l.defaultProps={color:"currentColor",size:"24"},e.Z=l},42386:function(n,e,t){var r;function a(n){if("undefined"===typeof document)return 0;if(n||void 0===r){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var t=document.createElement("div"),a=t.style;a.position="absolute",a.top="0",a.left="0",a.pointerEvents="none",a.visibility="hidden",a.width="200px",a.height="150px",a.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var o=e.offsetWidth;t.style.overflow="scroll";var i=e.offsetWidth;o===i&&(i=t.clientWidth),document.body.removeChild(t),r=o-i}return r}function o(n){var e=n.match(/^(.*)px$/),t=Number(null===e||void 0===e?void 0:e[1]);return Number.isNaN(t)?a():t}function i(n){if("undefined"===typeof document||!n||!(n instanceof Element))return{width:0,height:0};var e=getComputedStyle(n,"::-webkit-scrollbar"),t=e.width,r=e.height;return{width:o(t),height:o(r)}}t.d(e,{Z:function(){return a},o:function(){return i}})},19990:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(1413),a="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),o="aria-",i="data-";function c(n,e){return 0===n.indexOf(e)}function d(n){var e,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,r.Z)({},t);var d={};return Object.keys(n).forEach((function(t){(e.aria&&("role"===t||c(t,o))||e.data&&c(t,i)||e.attr&&a.includes(t))&&(d[t]=n[t])})),d}}}]);