"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[5547],{82138:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1413),r=n(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=n(6476),c=function(e,t){return r.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};c.displayName="PlusOutlined";var l=r.forwardRef(c)},45547:function(e,t,n){n.d(t,{Z:function(){return me}});var a=n(4942),r=n(87462),o=n(11829),i=n(61033),c=n(82138),l=n(46123),u=n.n(l),s=n(1413),f=n(29439),d=n(71002),v=n(45987),m=n(47313),b=n(64394),p=n(10288),h=n(25266),y=(0,m.createContext)(null);var Z=m.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,r=e.style,o=e.id,i=e.active,c=e.tabKey,l=e.children;return m.createElement("div",{id:o&&"".concat(o,"-panel-").concat(c),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(c),"aria-hidden":!i,style:r,className:u()(n,i&&"".concat(n,"-active"),a),ref:t},l)})),g=["key","forceRender","style","className"];function E(e){var t=e.id,n=e.activeKey,o=e.animated,i=e.tabPosition,c=e.destroyInactiveTabPane,l=m.useContext(y),f=l.prefixCls,d=l.tabs,b=o.tabPane,p="".concat(f,"-tabpane");return m.createElement("div",{className:u()("".concat(f,"-content-holder"))},m.createElement("div",{className:u()("".concat(f,"-content"),"".concat(f,"-content-").concat(i),(0,a.Z)({},"".concat(f,"-content-animated"),b))},d.map((function(e){var a=e.key,i=e.forceRender,l=e.style,f=e.className,d=(0,v.Z)(e,g),y=a===n;return m.createElement(h.ZP,(0,r.Z)({key:a,visible:y,forceRender:i,removeOnLeave:!!c,leavedClassName:"".concat(p,"-hidden")},o.tabPaneMotion),(function(e,n){var o=e.style,i=e.className;return m.createElement(Z,(0,r.Z)({},d,{prefixCls:p,id:t,tabKey:a,animated:b,active:y,style:(0,s.Z)((0,s.Z)({},l),o),className:u()(f,i),ref:n}))}))}))))}var k=n(93433),x=n(25172),C=n(29978),w=n(95557),P=n(16945),N={width:0,height:0,left:0,top:0};function T(e,t){var n=m.useRef(e),a=m.useState({}),r=(0,f.Z)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var S=.1,I=.01,R=20,M=Math.pow(.995,R);var B=n(72846);function O(e){var t=(0,m.useState)(0),n=(0,f.Z)(t,2),a=n[0],r=n[1],o=(0,m.useRef)(0),i=(0,m.useRef)();return i.current=e,(0,B.o)((function(){var e;null===(e=i.current)||void 0===e||e.call(i)}),[a]),function(){o.current===a&&(o.current+=1,r(o.current))}}var L={width:0,height:0,left:0,top:0,right:0};function A(e){var t;return e instanceof Map?(t={},e.forEach((function(e,n){t[n]=e}))):t=e,JSON.stringify(t)}var D="TABS_DQ";function j(e){return String(e).replace(/"/g,D)}function K(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?m.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var q=m.forwardRef(K);var W=m.forwardRef((function(e,t){var n,a=e.position,r=e.prefixCls,o=e.extra;if(!o)return null;var i={};return"object"!==(0,d.Z)(o)||m.isValidElement(o)?i.right=o:i=o,"right"===a&&(n=i.right),"left"===a&&(n=i.left),n?m.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},n):null})),V=n(72799),z=n(74224),_=n(49242);function G(e,t){var n=e.prefixCls,r=e.id,o=e.tabs,i=e.locale,c=e.mobile,l=e.moreIcon,s=void 0===l?"More":l,d=e.moreTransitionName,v=e.style,b=e.className,p=e.editable,h=e.tabBarGutter,y=e.rtl,Z=e.removeAriaLabel,g=e.onTabClick,E=e.getPopupContainer,k=e.popupClassName,x=(0,m.useState)(!1),C=(0,f.Z)(x,2),w=C[0],P=C[1],N=(0,m.useState)(null),T=(0,f.Z)(N,2),S=T[0],I=T[1],R="".concat(r,"-more-popup"),M="".concat(n,"-dropdown"),B=null!==S?"".concat(R,"-").concat(S):null,O=null===i||void 0===i?void 0:i.dropdownAriaLabel;var L=m.createElement(z.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),P(!1)},prefixCls:"".concat(M,"-menu"),id:R,tabIndex:-1,role:"listbox","aria-activedescendant":B,selectedKeys:[S],"aria-label":void 0!==O?O:"expanded dropdown"},o.map((function(e){var t=p&&!1!==e.closable&&!e.disabled;return m.createElement(z.sN,{key:e.key,id:"".concat(R,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},m.createElement("span",null,e.label),t&&m.createElement("button",{type:"button","aria-label":Z||"remove",tabIndex:0,className:"".concat(M,"-menu-item-remove"),onClick:function(t){var n,a;t.stopPropagation(),n=t,a=e.key,n.preventDefault(),n.stopPropagation(),p.onEdit("remove",{key:a,event:n})}},e.closeIcon||p.removeIcon||"\xd7"))})));function A(e){for(var t=o.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===S}))||0,a=t.length,r=0;r<a;r+=1){var i=t[n=(n+e+a)%a];if(!i.disabled)return void I(i.key)}}(0,m.useEffect)((function(){var e=document.getElementById(B);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[S]),(0,m.useEffect)((function(){w||I(null)}),[w]);var D=(0,a.Z)({},y?"marginRight":"marginLeft",h);o.length||(D.visibility="hidden",D.order=1);var j=u()((0,a.Z)({},"".concat(M,"-rtl"),y)),K=c?null:m.createElement(V.Z,{prefixCls:M,overlay:L,trigger:["hover"],visible:!!o.length&&w,transitionName:d,onVisibleChange:P,overlayClassName:u()(j,k),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:E},m.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:D,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":R,id:"".concat(r,"-more"),"aria-expanded":w,onKeyDown:function(e){var t=e.which;if(w)switch(t){case _.Z.UP:A(-1),e.preventDefault();break;case _.Z.DOWN:A(1),e.preventDefault();break;case _.Z.ESC:P(!1);break;case _.Z.SPACE:case _.Z.ENTER:null!==S&&g(S,e)}else[_.Z.DOWN,_.Z.SPACE,_.Z.ENTER].includes(t)&&(P(!0),e.preventDefault())}},s));return m.createElement("div",{className:u()("".concat(n,"-nav-operations"),b),style:v,ref:t},K,m.createElement(q,{prefixCls:n,locale:i,editable:p}))}var H=m.memo(m.forwardRef(G),(function(e,t){return t.tabMoving}));var F=function(e){var t,n=e.prefixCls,r=e.id,o=e.active,i=e.tab,c=i.key,l=i.label,s=i.disabled,f=i.closeIcon,d=e.closable,v=e.renderWrapper,b=e.removeAriaLabel,p=e.editable,h=e.onClick,y=e.onFocus,Z=e.style,g="".concat(n,"-tab"),E=p&&!1!==d&&!s;function k(e){s||h(e)}var x=m.createElement("div",{key:c,"data-node-key":j(c),className:u()(g,(t={},(0,a.Z)(t,"".concat(g,"-with-remove"),E),(0,a.Z)(t,"".concat(g,"-active"),o),(0,a.Z)(t,"".concat(g,"-disabled"),s),t)),style:Z,onClick:k},m.createElement("div",{role:"tab","aria-selected":o,id:r&&"".concat(r,"-tab-").concat(c),className:"".concat(g,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function(e){e.stopPropagation(),k(e)},onKeyDown:function(e){[_.Z.SPACE,_.Z.ENTER].includes(e.which)&&(e.preventDefault(),k(e))},onFocus:y},l),E&&m.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(g,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),p.onEdit("remove",{key:c,event:t})}},f||p.removeIcon||"\xd7"));return v?v(x):x},X=function(e){var t=e.current||{},n=t.offsetWidth,a=void 0===n?0:n,r=t.offsetHeight;return[a,void 0===r?0:r]},Y=function(e,t){return e[t?0:1]};function J(e,t){var n,o=m.useContext(y),i=o.prefixCls,c=o.tabs,l=e.className,d=e.style,v=e.id,b=e.animated,p=e.activeKey,h=e.rtl,Z=e.extra,g=e.editable,E=e.locale,B=e.tabPosition,D=e.tabBarGutter,K=e.children,V=e.onTabClick,z=e.onTabScroll,_=(0,m.useRef)(),G=(0,m.useRef)(),J=(0,m.useRef)(),Q=(0,m.useRef)(),U=(0,m.useRef)(),$=(0,m.useRef)(),ee=(0,m.useRef)(),te="top"===B||"bottom"===B,ne=T(0,(function(e,t){te&&z&&z({direction:e>t?"left":"right"})})),ae=(0,f.Z)(ne,2),re=ae[0],oe=ae[1],ie=T(0,(function(e,t){!te&&z&&z({direction:e>t?"top":"bottom"})})),ce=(0,f.Z)(ie,2),le=ce[0],ue=ce[1],se=(0,m.useState)([0,0]),fe=(0,f.Z)(se,2),de=fe[0],ve=fe[1],me=(0,m.useState)([0,0]),be=(0,f.Z)(me,2),pe=be[0],he=be[1],ye=(0,m.useState)([0,0]),Ze=(0,f.Z)(ye,2),ge=Ze[0],Ee=Ze[1],ke=(0,m.useState)([0,0]),xe=(0,f.Z)(ke,2),Ce=xe[0],we=xe[1],Pe=function(e){var t=(0,m.useRef)([]),n=(0,m.useState)({}),a=(0,f.Z)(n,2)[1],r=(0,m.useRef)("function"===typeof e?e():e),o=O((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),o()}]}(new Map),Ne=(0,f.Z)(Pe,2),Te=Ne[0],Se=Ne[1],Ie=function(e,t,n){return(0,m.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||N,o=r.left+r.width,i=0;i<e.length;i+=1){var c,l=e[i].key,u=t.get(l);u||(u=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||N);var f=a.get(l)||(0,s.Z)({},u);f.right=o-f.left-f.width,a.set(l,f)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(c,Te,pe[0]),Re=Y(de,te),Me=Y(pe,te),Be=Y(ge,te),Oe=Y(Ce,te),Le=Re<Me+Be,Ae=Le?Re-Oe:Re-Be,De="".concat(i,"-nav-operations-hidden"),je=0,Ke=0;function qe(e){return e<je?je:e>Ke?Ke:e}te&&h?(je=0,Ke=Math.max(0,Me-Ae)):(je=Math.min(0,Ae-Me),Ke=0);var We=(0,m.useRef)(),Ve=(0,m.useState)(),ze=(0,f.Z)(Ve,2),_e=ze[0],Ge=ze[1];function He(){Ge(Date.now())}function Fe(){window.clearTimeout(We.current)}!function(e,t){var n=(0,m.useState)(),a=(0,f.Z)(n,2),r=a[0],o=a[1],i=(0,m.useState)(0),c=(0,f.Z)(i,2),l=c[0],u=c[1],s=(0,m.useState)(0),d=(0,f.Z)(s,2),v=d[0],b=d[1],p=(0,m.useState)(),h=(0,f.Z)(p,2),y=h[0],Z=h[1],g=(0,m.useRef)(),E=(0,m.useRef)(),k=(0,m.useRef)(null);k.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;o({x:n,y:a}),window.clearInterval(g.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,i=n.screenY;o({x:a,y:i});var c=a-r.x,s=i-r.y;t(c,s);var f=Date.now();u(f),b(f-l),Z({x:c,y:s})}},onTouchEnd:function(){if(r&&(o(null),Z(null),y)){var e=y.x/v,n=y.y/v,a=Math.abs(e),i=Math.abs(n);if(Math.max(a,i)<S)return;var c=e,l=n;g.current=window.setInterval((function(){Math.abs(c)<I&&Math.abs(l)<I?window.clearInterval(g.current):t((c*=M)*R,(l*=M)*R)}),R)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===E.current?n:a:o>i?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},m.useEffect((function(){function t(e){k.current.onTouchMove(e)}function n(e){k.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){k.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){k.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(Q,(function(e,t){function n(e,t){e((function(e){return qe(e+t)}))}return!!Le&&(te?n(oe,e):n(ue,t),Fe(),He(),!0)})),(0,m.useEffect)((function(){return Fe(),_e&&(We.current=window.setTimeout((function(){Ge(0)}),100)),Fe}),[_e]);var Xe=function(e,t,n,a,r,o,i){var c,l,u,s=i.tabs,f=i.tabPosition,d=i.rtl;return["top","bottom"].includes(f)?(c="width",l=d?"right":"left",u=Math.abs(n)):(c="height",l="top",u=-n),(0,m.useMemo)((function(){if(!s.length)return[0,0];for(var n=s.length,a=n,r=0;r<n;r+=1){var o=e.get(s[r].key)||L;if(o[l]+o[c]>u+t){a=r-1;break}}for(var i=0,f=n-1;f>=0;f-=1)if((e.get(s[f].key)||L)[l]<u){i=f+1;break}return[i,a]}),[e,t,a,r,o,u,f,s.map((function(e){return e.key})).join("_"),d])}(Ie,Ae,te?re:le,Me,Be,Oe,(0,s.Z)((0,s.Z)({},e),{},{tabs:c})),Ye=(0,f.Z)(Xe,2),Je=Ye[0],Qe=Ye[1],Ue=(0,C.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=Ie.get(e)||{width:0,height:0,left:0,right:0,top:0};if(te){var n=re;h?t.right<re?n=t.right:t.right+t.width>re+Ae&&(n=t.right+t.width-Ae):t.left<-re?n=-t.left:t.left+t.width>-re+Ae&&(n=-(t.left+t.width-Ae)),ue(0),oe(qe(n))}else{var a=le;t.top<-le?a=-t.top:t.top+t.height>-le+Ae&&(a=-(t.top+t.height-Ae)),oe(0),ue(qe(a))}})),$e={};"top"===B||"bottom"===B?$e[h?"marginRight":"marginLeft"]=D:$e.marginTop=D;var et=c.map((function(e,t){var n=e.key;return m.createElement(F,{id:v,prefixCls:i,key:n,tab:e,style:0===t?void 0:$e,closable:e.closable,editable:g,active:n===p,renderWrapper:K,removeAriaLabel:null===E||void 0===E?void 0:E.removeAriaLabel,onClick:function(e){V(n,e)},onFocus:function(){Ue(n),He(),Q.current&&(h||(Q.current.scrollLeft=0),Q.current.scrollTop=0)}})})),tt=function(){return Se((function(){var e=new Map;return c.forEach((function(t){var n,a=t.key,r=null===(n=U.current)||void 0===n?void 0:n.querySelector('[data-node-key="'.concat(j(a),'"]'));r&&e.set(a,{width:r.offsetWidth,height:r.offsetHeight,left:r.offsetLeft,top:r.offsetTop})})),e}))};(0,m.useEffect)((function(){tt()}),[c.map((function(e){return e.key})).join("_")]);var nt=O((function(){var e=X(_),t=X(G),n=X(J);ve([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=X(ee);Ee(a);var r=X($);we(r);var o=X(U);he([o[0]-a[0],o[1]-a[1]]),tt()})),at=c.slice(0,Je),rt=c.slice(Qe+1),ot=[].concat((0,k.Z)(at),(0,k.Z)(rt)),it=(0,m.useState)(),ct=(0,f.Z)(it,2),lt=ct[0],ut=ct[1],st=Ie.get(p),ft=(0,m.useRef)();function dt(){w.Z.cancel(ft.current)}(0,m.useEffect)((function(){var e={};return st&&(te?(h?e.right=st.right:e.left=st.left,e.width=st.width):(e.top=st.top,e.height=st.height)),dt(),ft.current=(0,w.Z)((function(){ut(e)})),dt}),[st,te,h]),(0,m.useEffect)((function(){Ue()}),[p,je,Ke,A(st),A(Ie),te]),(0,m.useEffect)((function(){nt()}),[h]);var vt,mt,bt,pt,ht=!!ot.length,yt="".concat(i,"-nav-wrap");return te?h?(mt=re>0,vt=re!==Ke):(vt=re<0,mt=re!==je):(bt=le<0,pt=le!==je),m.createElement(x.default,{onResize:nt},m.createElement("div",{ref:(0,P.x1)(t,_),role:"tablist",className:u()("".concat(i,"-nav"),l),style:d,onKeyDown:function(){He()}},m.createElement(W,{ref:G,position:"left",extra:Z,prefixCls:i}),m.createElement("div",{className:u()(yt,(n={},(0,a.Z)(n,"".concat(yt,"-ping-left"),vt),(0,a.Z)(n,"".concat(yt,"-ping-right"),mt),(0,a.Z)(n,"".concat(yt,"-ping-top"),bt),(0,a.Z)(n,"".concat(yt,"-ping-bottom"),pt),n)),ref:Q},m.createElement(x.default,{onResize:nt},m.createElement("div",{ref:U,className:"".concat(i,"-nav-list"),style:{transform:"translate(".concat(re,"px, ").concat(le,"px)"),transition:_e?"none":void 0}},et,m.createElement(q,{ref:ee,prefixCls:i,locale:E,editable:g,style:(0,s.Z)((0,s.Z)({},0===et.length?void 0:$e),{},{visibility:ht?"hidden":null})}),m.createElement("div",{className:u()("".concat(i,"-ink-bar"),(0,a.Z)({},"".concat(i,"-ink-bar-animated"),b.inkBar)),style:lt})))),m.createElement(H,(0,r.Z)({},e,{removeAriaLabel:null===E||void 0===E?void 0:E.removeAriaLabel,ref:$,prefixCls:i,tabs:ot,className:!ht&&De,tabMoving:!!_e})),m.createElement(W,{ref:J,position:"right",extra:Z,prefixCls:i})))}var Q=m.forwardRef(J),U=["renderTabBar"],$=["label","key"];function ee(e){var t=e.renderTabBar,n=(0,v.Z)(e,U),a=m.useContext(y).tabs;return t?t((0,s.Z)((0,s.Z)({},n),{},{panes:a.map((function(e){var t=e.label,n=e.key,a=(0,v.Z)(e,$);return m.createElement(Z,(0,r.Z)({tab:t,key:n,tabKey:n},a))}))}),Q):m.createElement(Q,n)}n(48240);var te=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],ne=0;function ae(e,t){var n,o=e.id,i=e.prefixCls,c=void 0===i?"rc-tabs":i,l=e.className,h=e.items,Z=e.direction,g=e.activeKey,k=e.defaultActiveKey,x=e.editable,C=e.animated,w=e.tabPosition,P=void 0===w?"top":w,N=e.tabBarGutter,T=e.tabBarStyle,S=e.tabBarExtraContent,I=e.locale,R=e.moreIcon,M=e.moreTransitionName,B=e.destroyInactiveTabPane,O=e.renderTabBar,L=e.onChange,A=e.onTabClick,D=e.onTabScroll,j=e.getPopupContainer,K=e.popupClassName,q=(0,v.Z)(e,te),W=m.useMemo((function(){return(h||[]).filter((function(e){return e&&"object"===(0,d.Z)(e)&&"key"in e}))}),[h]),V="rtl"===Z,z=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,s.Z)({inkBar:!0},"object"===(0,d.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(C),_=(0,m.useState)(!1),G=(0,f.Z)(_,2),H=G[0],F=G[1];(0,m.useEffect)((function(){F((0,b.Z)())}),[]);var X=(0,p.Z)((function(){var e;return null===(e=W[0])||void 0===e?void 0:e.key}),{value:g,defaultValue:k}),Y=(0,f.Z)(X,2),J=Y[0],Q=Y[1],U=(0,m.useState)((function(){return W.findIndex((function(e){return e.key===J}))})),$=(0,f.Z)(U,2),ae=$[0],re=$[1];(0,m.useEffect)((function(){var e,t=W.findIndex((function(e){return e.key===J}));-1===t&&(t=Math.max(0,Math.min(ae,W.length-1)),Q(null===(e=W[t])||void 0===e?void 0:e.key));re(t)}),[W.map((function(e){return e.key})).join("_"),J,ae]);var oe=(0,p.Z)(null,{value:o}),ie=(0,f.Z)(oe,2),ce=ie[0],le=ie[1];(0,m.useEffect)((function(){o||(le("rc-tabs-".concat(ne)),ne+=1)}),[]);var ue={id:ce,activeKey:J,animated:z,tabPosition:P,rtl:V,mobile:H},se=(0,s.Z)((0,s.Z)({},ue),{},{editable:x,locale:I,moreIcon:R,moreTransitionName:M,tabBarGutter:N,onTabClick:function(e,t){null===A||void 0===A||A(e,t);var n=e!==J;Q(e),n&&(null===L||void 0===L||L(e))},onTabScroll:D,extra:S,style:T,panes:null,getPopupContainer:j,popupClassName:K});return m.createElement(y.Provider,{value:{tabs:W,prefixCls:c}},m.createElement("div",(0,r.Z)({ref:t,id:o,className:u()(c,"".concat(c,"-").concat(P),(n={},(0,a.Z)(n,"".concat(c,"-mobile"),H),(0,a.Z)(n,"".concat(c,"-editable"),x),(0,a.Z)(n,"".concat(c,"-rtl"),V),n),l)},q),undefined,m.createElement(ee,(0,r.Z)({},se,{renderTabBar:O})),m.createElement(E,(0,r.Z)({destroyInactiveTabPane:B},ue,{animated:z}))))}var re=m.forwardRef(ae),oe=n(74714),ie=n(21631),ce=n(53553),le={motionAppear:!1,motionEnter:!0,motionLeave:!0};var ue=n(14903),se=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var fe=function(){return null},de=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function ve(e){var t,n=e.type,l=e.className,s=e.size,f=e.onEdit,v=e.hideAdd,b=e.centered,p=e.addIcon,h=e.children,y=e.items,Z=e.animated,g=de(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),E=g.prefixCls,k=g.moreIcon,x=void 0===k?m.createElement(i.Z,null):k,C=m.useContext(oe.E_),w=C.getPrefixCls,P=C.direction,N=C.getPopupContainer,T=w("tabs",E);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===f||void 0===f||f("add"===e?a:n,e)},removeIcon:m.createElement(o.Z,null),addIcon:p||m.createElement(c.Z,null),showAdd:!0!==v});var S=w(),I=function(e,t){return e||function(e){return e.filter((function(e){return e}))}((0,ue.Z)(t).map((function(e){if(m.isValidElement(e)){var t=e.key,n=e.props||{},a=n.tab,o=se(n,["tab"]);return(0,r.Z)((0,r.Z)({key:String(t)},o),{label:a})}return null})))}(y,h),R=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:(0,r.Z)({inkBar:!0},"object"===(0,d.Z)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,r.Z)((0,r.Z)({},le),{motionName:(0,ce.mL)(e,"switch")})),t}(T,Z);return m.createElement(ie.Z.Consumer,null,(function(e){var o,i=void 0!==s?s:e;return m.createElement(re,(0,r.Z)({direction:P,getPopupContainer:N,moreTransitionName:"".concat(S,"-slide-up")},g,{items:I,className:u()((o={},(0,a.Z)(o,"".concat(T,"-").concat(i),i),(0,a.Z)(o,"".concat(T,"-card"),["card","editable-card"].includes(n)),(0,a.Z)(o,"".concat(T,"-editable-card"),"editable-card"===n),(0,a.Z)(o,"".concat(T,"-centered"),b),o),l),editable:t,moreIcon:x,prefixCls:T,animated:R}))}))}ve.TabPane=fe;var me=ve}}]);