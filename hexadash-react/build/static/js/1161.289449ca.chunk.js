"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[1161,1776],{4377:function(n,e,t){t(47313);e.Z=t.p+"static/media/home.86b39a0ae5b4b6dd596b6963557ed8ed.svg"},94042:function(n,e,t){t.r(e),t.d(e,{AutoComplete:function(){return u}});var r=t(4942),a=t(40765),o=t(66672),i=t(59491),l=t(47313),d=t(1084),c=t(74805),s=t(46417),p=function(){},h=function(n,e){return{value:n,label:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[n,e]})}},u=l.memo((function(n){var e=(0,d.v9)((function(n){return{rtl:n.ChangeLayoutMode.rtlData}})).rtl,t=n.customComponent,l=n.patterns,u=n.patternButtons,m=n.width,g=n.onSearch,f=n.options,x=n.placeholder,b=(null===f||void 0===f?void 0:f.length)>0&&f.map((function(n){var e=n.title,t=n.count;return{label:e,options:[h(e,(0,s.jsxs)("span",{className:"certain-search-item-count",children:[t," people"]}))]}})),v=function(n){g(n)};return t?(0,s.jsx)(c.AutoCompleteStyled,{options:f,style:{width:m},onSelect:p,onSearch:v,children:t}):l?(0,s.jsx)(c.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:m},options:b,placeholder:x,onSearch:v,children:(0,s.jsx)(o.Z,{suffix:u?(0,s.jsx)(i.Z,{className:"search-btn",style:(0,r.Z)({},e?"marginLeft":"marginRight",-20),type:"primary",children:(0,s.jsx)(a.Z,{})}):(0,s.jsx)(a.Z,{})})}):(0,s.jsx)(c.AutoCompleteStyled,{options:f,style:{width:m},onSelect:p,onSearch:v,placeholder:x})}));u.defaultProps={width:"350px",placeholder:"Input here"}},74805:function(n,e,t){t.r(e),t.d(e,{AutoCompleteStyled:function(){return w}});var r=t(30168),a=t(87462),o=t(71002),i=t(29439),l=t(46123),d=t.n(l),c=t(14903),s=t(205),p=t(47313),h=t(74714),u=t(74294),m=t(48138),g=u.Z.Option;function f(n){return n&&n.type&&(n.type.isSelectOption||n.type.isSelectOptGroup)}var x=function(n,e){var t,r=n.prefixCls,l=n.className,x=n.popupClassName,b=n.dropdownClassName,v=n.children,y=n.dataSource,w=(0,c.Z)(v);if(1===w.length&&(0,m.l$)(w[0])&&!f(w[0])){var C=(0,i.Z)(w,1);t=C[0]}var Z,j=t?function(){return t}:void 0;return Z=w.length&&f(w[0])?v:y?y.map((function(n){if((0,m.l$)(n))return n;switch((0,o.Z)(n)){case"string":return p.createElement(g,{key:n,value:n},n);case"object":var e=n.value;return p.createElement(g,{key:e,value:e},n.text);default:return}})):[],p.createElement(h.C,null,(function(t){var o=(0,t.getPrefixCls)("select",r);return p.createElement(u.Z,(0,a.Z)({ref:e},(0,s.Z)(n,["dataSource"]),{prefixCls:o,popupClassName:x||b,className:d()("".concat(o,"-auto-complete"),l),mode:u.Z.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:j}),Z)}))},b=p.forwardRef(x);b.Option=g;var v,y=b,w=(0,t(70244).ZP)(y)(v||(v=(0,r.Z)(["\n    display: block !important;\n    .ant-select-selection-placeholder{\n        padding: 0 20px !important;\n        text-align: ",";\n        ",": 2px !important;\n    }\n    &.ant-select{\n        .ant-select-selector{\n            display: flex;\n            align-items: center;\n            height: 37px;\n            border-radius: 23px;\n            padding: 0 !important;\n            background-color: ",";\n            border-color: "," !important;\n            .ant-select-selection-search{\n                .ant-input-affix-wrapper{\n                    padding: 0 20px;\n                    background-color: ",";\n                    border-color: ",";\n                    input{\n                        background-color: ",";\n                    }\n                }\n                .ant-input-suffix{\n                    svg,\n                    i{\n                        color: ",";\n                    }\n                }\n            }\n            textarea{\n                background-color: ",";\n                border-color: ",";\n            }\n        }\n    }\n    \n    .ant-select-selector input{\n        height: 33px !important;\n        ",": 0 !important;\n    }\n    .ant-select-selection-search{\n        ",": 20px;\n        width: auto;\n        @media only screen and (max-width: 575px){\n            width: 100% !important;\n        }\n        textarea.ant-input{\n            padding: 12px 20px;\n        }\n    }\n    .ant-input-affix-wrapper{\n        padding: 0 20px;\n        input{\n            height: 38px !important;\n        }\n        .ant-input-suffix{\n            height: auto;\n            border-radius: ","; \n            svg,\n            i{\n                color: ",";\n            }\n            .search-btn{\n                height: 38px;\n                border-radius: 0px 4px 4px 0px;\n                svg,\n                i{\n                    color: #fff !important;\n                }\n            }\n        }\n    }\n"])),(function(n){return n.theme.rtl?"right":"left"}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){var e=n.theme;return e[e.mainContent]["white-background"]}),(function(n){var e=n.theme;return e[e.mainContent]["border-color-default"]}),(function(n){var e=n.theme;return e[e.mainContent]["white-background"]}),(function(n){var e=n.theme;return e[e.mainContent]["border-color-default"]}),(function(n){var e=n.theme;return e[e.mainContent]["white-background"]}),(function(n){var e=n.theme;return e[e.mainContent]["extra-light-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["white-background"]}),(function(n){var e=n.theme;return e[e.mainContent]["border-color-secondary"]}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){return n.theme.rtl?"4px 0 0 4px":"0 4px 4px 0"}),(function(n){var e=n.theme;return e[e.mainContent]["extra-light-text"]}))},54987:function(n,e,t){t.r(e),t.d(e,{Cards:function(){return c}});var r=t(38537),a=(t(47313),t(2135)),o=t(24728),i=t(90722),l=t(33464),d=t(46417);function c(n){var e=n.title,t=n.children,c=n.more,s=n.moreText,p=n.size,h=n.headless,u=n.caption,m=n.isbutton,g=n.bodyStyle,f=n.headStyle,x=n.border,b=n.bodypadding,v=n.className;return(0,d.jsx)(d.Fragment,{children:h?(0,d.jsxs)(o.CardFrame,{bodypadding:b&&b,bodyStyle:g&&g,size:p,style:{width:"100%"},bordered:x,className:v,children:[e&&(0,d.jsx)(l.default,{as:"h4",children:e}),u&&(0,d.jsx)("p",{children:u}),t]}):(0,d.jsx)(o.CardFrame,{size:p,title:e,bodyStyle:g&&g,headStyle:f&&f,bordered:x,className:v,bodypadding:b&&b,extra:(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(i.Dropdown,{content:c,placement:"bottom",children:(0,d.jsx)(a.rU,{onClick:function(n){return n.preventDefault()},to:"#",children:s?"More":(0,d.jsx)(r.Z,{})})}),m&&m]}),style:{width:"100%"},children:t})})}c.defaultProps={border:!1}},24728:function(n,e,t){t.r(e),t.d(e,{CardFrame:function(){return l}});var r,a=t(30168),o=t(28080),i=t(70244),l=(0,i.ZP)(o.Z)(r||(r=(0,a.Z)(["\n\n  ","\n  margin-bottom: 25px !important;\n\n  background-color: ",";\n  .ant-card-head{\n    border-color: ",";\n    .ant-card-head-title{\n      padding: 18px 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: ",";\n    }\n  }\n  .ant-card-body{\n    padding: ",";\n    @media only screen and (max-width: 575px){\n      padding: ",";\n    }\n    table{\n      .ant-tag{\n        line-height: 18px;\n        border: 0 none;\n        text-transform: uppercase;\n        font-size: 10px;\n        color: #fff;\n        &.early{\n          background: ","\n        }\n        &.late{\n          background: ","\n        }\n        &.complete{\n          background: ","\n        }\n        &.progress{\n          background: ","\n        }\n      }\n    }\n  }\n  .ant-card-head-title .ant-page-header-heading-title{\n    font-weight: 500;\n  }\n  .ant-card.ant-card-bordered {\n      border-radius: 5px;\n      overflow: hidden;\n      border: none;\n  }\n  .custom-label {\n    font-size: 13px;\n    color: #868eae;\n    display: inline-flex;\n    align-items: center;\n  }\n  .custom-label:not(:last-child) {\n    "," : 20px;\n  }\n\n  .custom-label span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    ",": 7px;\n  }\n\n  .ant-card-extra  {\n    padding: 12px 0;\n    .ant-dropdown-trigger{\n      line-height: 0;\n      order: 1;\n      ",": 20px !important;\n      @media only screen and (max-width: 575px){\n        ",": 0 !important;\n      }\n    }\n  }\n\n  .growth-downward h1 sub,\n  .growth-upward h1 sub {\n    font-size: 14px;\n    font-weight: 600;\n    bottom: 0;\n    ",": 5px;\n  }\n \n"])),(function(n){var e=n.isbutton,t=n.theme;return e&&function(n){return"\n    .ant-card-head {\n      display: flex;\n      justify-content: space-evenly;\n      .ant-card-head-wrapper{\n        width: 100%;\n      }\n      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{\n        width: 100%;\n        display: block;\n      }\n      .ant-tabs-nav-scroll {\n        display: flex;\n        justify-content: flex-end;\n      }\n      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {\n        display: none !important;\n      }\n      .ant-tabs-nav .ant-tabs-tab {\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        ".concat(n.rtl?"margin-right":"margin-left",": -1px;\n        display: inline-flex;\n        align-items: center;\n        border: 1px solid ").concat(n["border-color-base"],";\n        background: #fff;\n        span svg {\n          ").concat(n.rtl?"padding-right":"padding-left",": 5px !important;\n        }\n      }\n      .ant-tabs-nav .ant-tabs-tab-active {\n        font-weight: 500;\n        border: 1px solid ").concat(n["primary-color"],";\n        background: ").concat(n["primary-color"],";\n        color: #fff;\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        display: inline-flex;\n        align-items: center;\n      }\n      .ant-tabs-bar {\n        border: none;\n      }\n      .ant-tabs-nav-wrap {\n        margin-bottom: 0px;\n        overflow: hidden;\n    }\n    }\n    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {\n      width: 100%;\n      display: block;\n      justify-content: flex-end;\n      height: 73px;\n      padding-top: 8px;\n  }\n")}(t)}),(function(n){var e=n.theme;return e[e.mainContent]["white-background"]}),(function(n){var e=n.theme;return e[e.mainContent]["border-color-default"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.bodypadding;return e?"".concat(e," !important"):"25px !important"}),(function(n){var e=n.bodypadding;return e?"".concat(e," !important"):"15px !important"}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent].Warning}),(function(n){var e=n.theme;return e[e.mainContent].success}),(function(n){var e=n.theme;return e[e.mainContent].danger}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" right":" left"}))},24441:function(n,e,t){t.r(e),t.d(e,{PageHeader:function(){return d}});var r=t(28709),a=t(2135),o=t(79585),i=t(7489),l=t(46417);function d(n){var e=n.title,d=n.subTitle,c=n.routes,s=n.buttons,p=n.ghost,h=n.bgColor,u=n.className,m=c?(0,l.jsx)(r.Z,{separator:(0,l.jsx)("span",{className:"ninjadash-seperator"}),children:c.map((function(n,e){return e+1===c.length?(0,l.jsx)(r.Z.Item,{children:n.breadcrumbName},e):(0,l.jsxs)(r.Z.Item,{children:[(0,l.jsx)(o.Q,{src:t(4377).Z})," ",(0,l.jsx)(a.rU,{to:n.path,children:n.breadcrumbName})]},e)}))}):"";return(0,l.jsx)(i.HeaderWrapper,{bgColor:h,children:(0,l.jsx)(i.PageHeaderStyle,{className:u,title:e,subTitle:d,breadcrumb:m,extra:s,ghost:p})})}},7489:function(n,e,t){t.r(e),t.d(e,{HeaderWrapper:function(){return c},PageHeaderStyle:function(){return d}});var r,a,o=t(30168),i=t(94475),l=t(70244),d=(0,l.ZP)(i.Z)(r||(r=(0,o.Z)(["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"],["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"])),(function(n){var e=n.theme;return e[e.mainContent]["main-background-light"]}),(function(n){var e=n.theme;return e[e.mainContent]["main-background"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent]["extra-light"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){var e=n.theme;return e[e.mainContent]["menu-active"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["light-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var e=n.theme;return e[e.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-light-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]})),c=l.ZP.div(a||(a=(0,o.Z)(["\n  background: ","};\n  border-radius: 5px;\n  .ant-page-header-heading-title{\n    color: ",";\n  }\n  .ant-page-header-heading-sub-title{\n    color: ",";\n  }\n"])),(function(n){var e=n.theme;return n.bgColor||e[e.mainContent]["main-background-light"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}))},26434:function(n,e,t){t.r(e);var r=t(1413),a=t(29439),o=t(47313),i=t(1084),l=t(68197),d=t(59624),c=t(87458),s=t(60213),p=t(18567),h=t(29800),u=t(23350),m=t(2135),g=t(24441),f=t(23008),x=t(94042),b=t(54987),v=t(46417);e.default=function(){var n=(0,i.v9)((function(n){return{searchData:n.headerSearchData,team:n.team.data}})),e=n.searchData,y=n.team,w=(0,o.useState)({notData:e}),C=(0,a.Z)(w,2),Z=C[0],j=C[1],k=Z.notData,S=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(m.rU,{to:"#",children:[(0,v.jsx)(p.Z,{}),(0,v.jsx)("span",{children:"View"})]}),(0,v.jsxs)(m.rU,{to:"#",children:[(0,v.jsx)(h.Z,{}),(0,v.jsx)("span",{children:"Edit"})]}),(0,v.jsxs)(m.rU,{to:"#",children:[(0,v.jsx)(u.Z,{}),(0,v.jsx)("span",{children:"Delete"})]})]});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.CardToolbox,{children:(0,v.jsx)(g.PageHeader,{className:"ninjadash-page-header-main",backIcon:!1,title:"Team Members",subTitle:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{className:"title-counter",children:"274 Users"}),(0,v.jsx)(x.AutoComplete,{onSearch:function(n){var t=e.filter((function(e){return e.title.toUpperCase().startsWith(n.toUpperCase())}));j((0,r.Z)((0,r.Z)({},Z),{},{notData:t}))},dataSource:k,width:"100%",placeholder:"Search by Name",patterns:!0})]}),buttons:[(0,v.jsxs)(m.rU,{to:"/admin/users/add-user/info",className:"btn-add_new",children:[(0,v.jsx)(s.Z,{})," Add New Member"]})]})}),(0,v.jsx)(f.Main,{children:(0,v.jsx)(l.Z,{gutter:25,children:y.map((function(n){var e=(0,o.lazy)((function(){return Promise.all([t.e(646),t.e(5408),t.e(8805),t.e(506),t.e(405),t.e(1874),t.e(5192),t.e(3393),t.e(870),t.e(1723),t.e(7605),t.e(7127),t.e(9483),t.e(5268),t.e(4181),t.e(7238),t.e(955),t.e(6018),t.e(3006),t.e(2029),t.e(5010),t.e(9119),t.e(913),t.e(8361),t.e(5407),t.e(4450),t.e(2741),t.e(1181),t.e(4312),t.e(980),t.e(6706),t.e(8458),t.e(1110),t.e(2950),t.e(2358),t.e(9566),t.e(4762),t.e(961),t.e(8949),t.e(8642),t.e(4890),t.e(2116),t.e(2034),t.e(482),t.e(1137),t.e(8695),t.e(5839),t.e(3505),t.e(3811),t.e(2578),t.e(6976),t.e(8790),t.e(1096),t.e(4029),t.e(6909)]).then(t.bind(t,12044))})),r=n.id;return(0,v.jsx)(d.Z,{xxl:6,lg:8,sm:12,xs:24,children:(0,v.jsx)(o.Suspense,{fallback:(0,v.jsx)(b.Cards,{headless:!0,children:(0,v.jsx)(c.Z,{avatar:!0,active:!0})}),children:(0,v.jsx)(e,{actions:S,user:n})})},r)}))})})]})}},43681:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(1413),a=t(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},i=t(6476),l=function(n,e){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:e,icon:o}))};l.displayName="CheckOutlined";var d=a.forwardRef(l)},38537:function(n,e,t){var r=t(1413),a=t(45987),o=t(61962),i=t(75192),l=t.n(i),d=["color","size"],c=function(n){var e=n.color,t=n.size,i=(0,a.Z)(n,d);return o.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:e},i),o.createElement("path",{d:"M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"}))};c.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},c.defaultProps={color:"currentColor",size:"24"},e.Z=c},18567:function(n,e,t){var r=t(1413),a=t(45987),o=t(61962),i=t(75192),l=t.n(i),d=["color","size"],c=function(n){var e=n.color,t=n.size,i=(0,a.Z)(n,d);return o.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:e},i),o.createElement("path",{d:"M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"}))};c.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},c.defaultProps={color:"currentColor",size:"24"},e.Z=c},60213:function(n,e,t){var r=t(1413),a=t(45987),o=t(61962),i=t(75192),l=t.n(i),d=["color","size"],c=function(n){var e=n.color,t=n.size,i=(0,a.Z)(n,d);return o.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:e},i),o.createElement("path",{d:"M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"}))};c.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},c.defaultProps={color:"currentColor",size:"24"},e.Z=c},23350:function(n,e,t){var r=t(1413),a=t(45987),o=t(61962),i=t(75192),l=t.n(i),d=["color","size"],c=function(n){var e=n.color,t=n.size,i=(0,a.Z)(n,d);return o.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:e},i),o.createElement("path",{d:"M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"}))};c.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},c.defaultProps={color:"currentColor",size:"24"},e.Z=c},74294:function(n,e,t){var r=t(4942),a=t(87462),o=t(46123),i=t.n(o),l=t(61310),d=t(205),c=t(47313),s=t(74714),p=t(82926),h=t(98438),u=t(21631),m=t(4431),g=t(53553),f=t(55681),x=t(87632),b=t(45531),v=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]])}return t},y="SECRET_COMBOBOX_MODE_DO_NOT_USE",w=function(n,e){var t,o,w=n.prefixCls,C=n.bordered,Z=void 0===C||C,j=n.className,k=n.getPopupContainer,S=n.dropdownClassName,O=n.popupClassName,N=n.listHeight,z=void 0===N?256:N,E=n.placement,M=n.listItemHeight,P=void 0===M?24:M,H=n.size,I=n.disabled,A=n.notFoundContent,T=n.status,D=n.showArrow,F=v(n,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),_=c.useContext(s.E_),B=_.getPopupContainer,U=_.getPrefixCls,V=_.renderEmpty,R=_.direction,W=_.virtual,L=_.dropdownMatchSelectWidth,X=c.useContext(u.Z),G=U("select",w),Y=U(),$=(0,b.ri)(G,R),q=$.compactSize,Q=$.compactItemClassnames,J=c.useMemo((function(){var n=F.mode;if("combobox"!==n)return n===y?"combobox":n}),[F.mode]),K="multiple"===J||"tags"===J,nn=void 0!==D?D:F.loading||!(K||"combobox"===J),en=(0,c.useContext)(m.aM),tn=en.status,rn=en.hasFeedback,an=en.isFormItemInput,on=en.feedbackIcon,ln=(0,f.F)(tn,T);o=void 0!==A?A:"combobox"===J?null:(V||p.Z)("Select");var dn=(0,x.Z)((0,a.Z)((0,a.Z)({},F),{multiple:K,hasFeedback:rn,feedbackIcon:on,showArrow:nn,prefixCls:G})),cn=dn.suffixIcon,sn=dn.itemIcon,pn=dn.removeIcon,hn=dn.clearIcon,un=(0,d.Z)(F,["suffixIcon","itemIcon"]),mn=i()(O||S,(0,r.Z)({},"".concat(G,"-dropdown-").concat(R),"rtl"===R)),gn=q||H||X,fn=c.useContext(h.Z),xn=null!==I&&void 0!==I?I:fn,bn=i()((t={},(0,r.Z)(t,"".concat(G,"-lg"),"large"===gn),(0,r.Z)(t,"".concat(G,"-sm"),"small"===gn),(0,r.Z)(t,"".concat(G,"-rtl"),"rtl"===R),(0,r.Z)(t,"".concat(G,"-borderless"),!Z),(0,r.Z)(t,"".concat(G,"-in-form-item"),an),t),(0,f.Z)(G,ln,rn),Q,j);return c.createElement(l.ZP,(0,a.Z)({ref:e,virtual:W,dropdownMatchSelectWidth:L},un,{transitionName:(0,g.mL)(Y,(0,g.q0)(E),F.transitionName),listHeight:z,listItemHeight:P,mode:J,prefixCls:G,placement:void 0!==E?E:"rtl"===R?"bottomRight":"bottomLeft",direction:R,inputIcon:cn,menuItemSelectedIcon:sn,removeIcon:pn,clearIcon:hn,notFoundContent:o,className:bn,getPopupContainer:k||B,dropdownClassName:mn,showArrow:rn||D,disabled:xn}))},C=c.forwardRef(w);C.SECRET_COMBOBOX_MODE_DO_NOT_USE=y,C.Option=l.Wx,C.OptGroup=l.Xo,e.Z=C}}]);