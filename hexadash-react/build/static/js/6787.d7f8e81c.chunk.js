"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[6787],{36787:function(e,t,r){r.d(t,{kL:function(){return S}});var o=r(97326),n=r(37762),a=r(93433),i=r(1413),l=r(15671),s=r(43144),c=r(60136),u=r(29388),p=r(74165),d=r(15861),h=r(45987),g=r(29439),v=r(47313),f=["onLoad","onError"];function m(e){var t,r,o,n=e.chartVersion,a=void 0===n?"current":n,i=e.chartPackages,l=void 0===i?["corechart","controls"]:i,s=e.chartLanguage,c=void 0===s?"en":s,u=e.mapsApiKey,p=(0,v.useState)(null),d=(0,g.Z)(p,2),h=d[0],f=d[1],m=(0,v.useState)(!1),C=(0,g.Z)(m,2),y=C[0],b=C[1];return t="https://www.gstatic.com/charts/loader.js",r=function(){var e=null===window||void 0===window?void 0:window.google;e&&(e.charts.load(a,{packages:l,language:c,mapsApiKey:u}),e.charts.setOnLoadCallback((function(){f(e)})))},o=function(){b(!0)},(0,v.useEffect)((function(){if(document){var e=document.querySelector('script[src="'.concat(t,'"]'));if(!(null===e||void 0===e?void 0:e.dataset.loaded)){var n=e||document.createElement("script");e||(n.src=t);var a=function(){n.dataset.loaded="1",null===r||void 0===r||r()};return n.addEventListener("load",a),o&&n.addEventListener("error",o),e||document.head.append(n),function(){n.removeEventListener("load",a),o&&n.removeEventListener("error",o)}}null===r||void 0===r||r()}}),[]),[h,y]}function C(e){var t=e.onLoad,r=e.onError,o=m((0,h.Z)(e,f)),n=(0,g.Z)(o,2),a=n[0],i=n[1];return(0,v.useEffect)((function(){a&&t&&t(a)}),[a]),(0,v.useEffect)((function(){i&&r&&r()}),[i]),null}var y,b={legend_toggle:!1,options:{},legendToggle:!1,getChartWrapper:function(){},spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{}},w=0,D=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],E=function(){var e=(0,d.Z)((0,p.Z)().mark((function e(t,r){var o,n=arguments;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.length>2&&void 0!==n[2]?n[2]:{},e.abrupt("return",new Promise((function(e,n){var a="".concat(o.headers?"headers=".concat(o.headers):"headers=0"),i="".concat(o.query?"&tq=".concat(encodeURIComponent(o.query)):""),l="".concat(o.gid?"&gid=".concat(o.gid):""),s="".concat(o.sheet?"&sheet=".concat(o.sheet):""),c="".concat(o.access_token?"&access_token=".concat(o.access_token):""),u="".concat(a).concat(l).concat(s).concat(i).concat(c),p="".concat(r,"/gviz/tq?").concat(u);new t.visualization.Query(p).send((function(t){t.isError()?n("Error in query:  ".concat(t.getMessage()," ").concat(t.getDetailedMessage())):e(t.getDataTable())}))})));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Z=v.createContext(b),k=Z.Provider,T=Z.Consumer,z=function(e){var t=e.children,r=e.value;return v.createElement(k,{value:r},t)},W=function(e){var t=e.render;return v.createElement(T,null,(function(e){return t(e)}))},L=function(e){(0,c.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;(0,l.Z)(this,r);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={hiddenColumns:[]},e.listenToLegendToggle=function(){var t=e.props,r=t.google,o=t.googleChartWrapper;r.visualization.events.addListener(o,"select",(function(){var t=o.getChart().getSelection(),r=o.getDataTable();if(0!==t.length&&!t[0].row&&r){var n=t[0].column,l=e.getColumnID(r,n);e.state.hiddenColumns.includes(l)?e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{hiddenColumns:(0,a.Z)(e.hiddenColumns.filter((function(e){return e!==l})))})})):e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{hiddenColumns:[].concat((0,a.Z)(e.hiddenColumns),[l])})}))}}))},e.applyFormatters=function(t,r){var o,i=e.props.google,l=(0,n.Z)(r);try{for(l.s();!(o=l.n()).done;){var s=o.value;switch(s.type){case"ArrowFormat":new i.visualization.ArrowFormat(s.options).format(t,s.column);break;case"BarFormat":new i.visualization.BarFormat(s.options).format(t,s.column);break;case"ColorFormat":var c,u=new i.visualization.ColorFormat(s.options),p=s.ranges,d=(0,n.Z)(p);try{for(d.s();!(c=d.n()).done;){var h=c.value;u.addRange.apply(u,(0,a.Z)(h))}}catch(g){d.e(g)}finally{d.f()}u.format(t,s.column);break;case"DateFormat":new i.visualization.DateFormat(s.options).format(t,s.column);break;case"NumberFormat":new i.visualization.NumberFormat(s.options).format(t,s.column);break;case"PatternFormat":new i.visualization.PatternFormat(s.options).format(t,s.column)}}}catch(g){l.e(g)}finally{l.f()}},e.getColumnID=function(e,t){return e.getColumnId(t)||e.getColumnLabel(t)},e.draw=function(){var t=(0,d.Z)((0,p.Z)().mark((function t(r){var o,n,i,l,s,c,u,d,h,g,v,f,m,C,y,b,w,D,Z,k,T,z,W,L,A;return(0,p.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=r.data,n=r.diffdata,i=r.rows,l=r.columns,s=r.options,c=r.legend_toggle,u=r.legendToggle,d=r.chartType,h=r.formatters,g=r.spreadSheetUrl,v=r.spreadSheetQueryParameters,f=e.props,m=f.google,C=f.googleChartWrapper,b=null,n&&(w=m.visualization.arrayToDataTable(n.old),D=m.visualization.arrayToDataTable(n.new),b=m.visualization[d].prototype.computeDiff(w,D)),null===o){t.next=8;break}y=Array.isArray(o)?m.visualization.arrayToDataTable(o):new m.visualization.DataTable(o),t.next=19;break;case 8:if(!i||!l){t.next=12;break}y=m.visualization.arrayToDataTable([l].concat((0,a.Z)(i))),t.next=19;break;case 12:if(!g){t.next=18;break}return t.next=15,E(m,g,v);case 15:y=t.sent,t.next=19;break;case 18:y=m.visualization.arrayToDataTable([]);case 19:for(Z=y.getNumberOfColumns(),k=0;k<Z;k+=1)T=e.getColumnID(y,k),e.state.hiddenColumns.includes(T)&&(z=y.getColumnLabel(k),W=y.getColumnId(k),L=y.getColumnType(k),y.removeColumn(k),y.addColumn({label:z,id:W,type:L}));return A=C.getChart(),"Timeline"===C.getChartType()&&A&&A.clearChart(),C.setChartType(d),C.setOptions(s||{}),C.setDataTable(y),C.draw(),null!==e.props.googleChartDashboard&&e.props.googleChartDashboard.draw(y),b&&(C.setDataTable(b),C.draw()),h&&(e.applyFormatters(y,h),C.setDataTable(y),C.draw()),!0!==u&&!0!==c||e.grayOutHiddenColumns({options:s}),t.abrupt("return");case 32:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.grayOutHiddenColumns=function(t){var r=t.options,o=e.props.googleChartWrapper,n=o.getDataTable();if(n){var a=n.getNumberOfColumns();if(!1!==e.state.hiddenColumns.length>0){var l=Array.from({length:a-1}).map((function(t,o){var a=e.getColumnID(n,o+1);return e.state.hiddenColumns.includes(a)?"#CCCCCC":r&&r.colors?r.colors[o]:D[o]}));o.setOptions((0,i.Z)((0,i.Z)({},r),{},{colors:l})),o.draw()}}},e.onResize=function(){e.props.googleChartWrapper.draw()},e}return(0,s.Z)(r,[{key:"componentDidMount",value:function(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.google,r=e.googleChartWrapper;window.removeEventListener("resize",this.onResize),t.visualization.events.removeAllListeners(r),"Timeline"===r.getChartType()&&r.getChart()&&r.getChart().clearChart()}},{key:"componentDidUpdate",value:function(){this.draw(this.props)}},{key:"render",value:function(){return null}}]),r}(v.Component),A=function(e){(0,c.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,l.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this.props,t=e.google,r=e.googleChartWrapper,o=e.googleChartDashboard;return v.createElement(W,{render:function(e){return v.createElement(L,Object.assign({},e,{google:t,googleChartWrapper:r,googleChartDashboard:o}))}})}}]),r}(v.Component),I=function(e){(0,c.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,l.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"listenToEvents",value:function(e){var t=this,r=e.chartEvents,o=e.google,a=e.googleChartWrapper;if(r){o.visualization.events.removeAllListeners(a);var i,l=(0,n.Z)(r);try{var s=function(){var e=i.value;c=t;var r=e.eventName,n=e.callback;o.visualization.events.addListener(a,r,(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n({chartWrapper:a,props:c.props,google:o,eventArgs:t})}))};for(l.s();!(i=l.n()).done;){var c;s()}}catch(u){l.e(u)}finally{l.f()}}}},{key:"render",value:function(){var e=this,t=this.props,r=t.google,o=t.googleChartWrapper;return v.createElement(W,{render:function(t){return e.listenToEvents({chartEvents:t.chartEvents||null,google:r,googleChartWrapper:o}),null}})}}]),r}(v.Component),P=0,F=function(e){(0,c.Z)(r,e);var t=(0,u.Z)(r);function r(){for(var e,a,s=arguments.length,c=new Array(s),u=0;u<s;u++)c[u]=arguments[u];return(0,l.Z)(this,r),e=t.call(this),a=(0,o.Z)(e),e.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},e.graphID=null,e.dashboard_ref=v.createRef(),e.toolbar_ref=v.createRef(),e.getGraphID=function(){var t,r=e.props,o=r.graphID,n=r.graph_id;return t=o||n?o&&!n?o:n&&!o?n:o:e.graphID?e.graphID:"reactgooglegraph-".concat(w+=1),e.graphID=t,e.graphID},e.getControlID=function(e,t){return P+=1,"undefined"===typeof e?"googlechart-control-".concat(t,"-").concat(P):e},e.addControls=function(t,r){var a=e.props,l=a.google,s=a.controls,c=s?s.map((function(t,r){var o=t.controlID,n=t.controlType,a=t.options,s=t.controlWrapperParams,c=e.getControlID(o,r);return{controlProp:t,control:new l.visualization.ControlWrapper((0,i.Z)({containerId:c,controlType:n,options:a},s))}})):null;if(!c)return null;r.bind(c.map((function(e){return e.control})),t);var u,p=(0,n.Z)(c);try{var d=function(){var r,a=u.value,i=a.control,s=a.controlProp.controlEvents,c=void 0===s?[]:s,p=(0,n.Z)(c);try{var d=function(){var n=r.value;h=(0,o.Z)(e);var a=n.callback,s=n.eventName;l.visualization.events.removeListener(i,s,a),l.visualization.events.addListener(i,s,(function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];a({chartWrapper:t,controlWrapper:i,props:h.props,google:l,eventArgs:r})}))};for(p.s();!(r=p.n()).done;)d()}catch(g){p.e(g)}finally{p.f()}};for(p.s();!(u=p.n()).done;){var h;d()}}catch(g){p.e(g)}finally{p.f()}return c},e.renderChart=function(){var t=e.props,r=t.width,o=t.height,n=t.options,a=t.style,l=t.className,s=t.rootProps,c=t.google,u=(0,i.Z)({height:o||n&&n.height,width:r||n&&n.width},a);return v.createElement("div",Object.assign({id:e.getGraphID(),style:u,className:l},s),e.state.isReady&&null!==e.state.googleChartWrapper?v.createElement(v.Fragment,null,v.createElement(A,{googleChartWrapper:e.state.googleChartWrapper,google:c,googleChartDashboard:e.state.googleChartDashboard}),v.createElement(I,{googleChartWrapper:e.state.googleChartWrapper,google:c})):null)},e.renderControl=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return!0};return a.state.isReady&&null!==a.state.googleChartControls?v.createElement(v.Fragment,null,a.state.googleChartControls.filter((function(t){var r=t.controlProp,o=t.control;return e({control:o,controlProp:r})})).map((function(e){var t=e.control;e.controlProp;return v.createElement("div",{key:t.getContainerId(),id:t.getContainerId()})}))):null},e.renderToolBar=function(){return e.props.toolbarItems?v.createElement("div",{ref:e.toolbar_ref}):null},e}return(0,s.Z)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.options,r=e.google,o=e.chartType,n=e.chartWrapperParams,a=e.toolbarItems,l=e.getChartEditor,s=e.getChartWrapper,c=(0,i.Z)({chartType:o,options:t,containerId:this.getGraphID()},n),u=new r.visualization.ChartWrapper(c);u.setOptions(t||{}),s&&s(u,r);var p=new r.visualization.Dashboard(this.dashboard_ref),d=this.addControls(u,p);a&&r.visualization.drawToolbar(this.toolbar_ref.current,a);var h=null;l&&l({chartEditor:h=new r.visualization.ChartEditor,chartWrapper:u,google:r}),this.setState({googleChartEditor:h,googleChartControls:d,googleChartDashboard:p,googleChartWrapper:u,isReady:!0})}},{key:"componentDidUpdate",value:function(){if(this.state.googleChartWrapper&&this.state.googleChartDashboard&&this.state.googleChartControls){var e=this.props.controls;if(e)for(var t=0;t<e.length;t+=1){var r=e[t],o=r.controlType,n=r.options,a=r.controlWrapperParams;a&&"state"in a&&this.state.googleChartControls[t].control.setState(a.state),this.state.googleChartControls[t].control.setOptions(n),this.state.googleChartControls[t].control.setControlType(o)}}}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.isReady!==t.isReady||e.controls!==this.props.controls}},{key:"render",value:function(){var e=this.props,t=e.width,r=e.height,o=e.options,n=e.style,a=(0,i.Z)({height:r||o&&o.height,width:t||o&&o.width},n);return this.props.render?v.createElement("div",{ref:this.dashboard_ref,style:a},v.createElement("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):v.createElement("div",{ref:this.dashboard_ref,style:a},this.renderControl((function(e){return"bottom"!==e.controlProp.controlPosition})),this.renderChart(),this.renderControl((function(e){return"bottom"===e.controlProp.controlPosition})),this.renderToolBar())}}]),r}(v.Component),S=function(e){(0,c.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;(0,l.Z)(this,r);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n)))._isMounted=!1,e.state={loadingStatus:"loading",google:null},e.onLoad=function(t){if(e.props.onLoad&&e.props.onLoad(t),e.isFullyLoaded(t))e.onSuccess(t);else var r=setInterval((function(){var t=window.google;e._isMounted?t&&e.isFullyLoaded(t)&&(clearInterval(r),e.onSuccess(t)):clearInterval(r)}),1e3)},e.onSuccess=function(t){e.setState({loadingStatus:"ready",google:t})},e.onError=function(){e.setState({loadingStatus:"errored"})},e}return(0,s.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.chartLanguage,r=e.chartPackages,o=e.chartVersion,n=e.mapsApiKey,a=e.loader,i=e.errorElement;return v.createElement(z,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?v.createElement(F,Object.assign({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&i?i:a,v.createElement(C,{chartLanguage:t,chartPackages:r,chartVersion:o,mapsApiKey:n,onLoad:this.onLoad,onError:this.onError}))}},{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"isFullyLoaded",value:function(e){var t=this.props,r=t.controls,o=t.toolbarItems,n=t.getChartEditor;return e&&e.visualization&&e.visualization.ChartWrapper&&e.visualization.Dashboard&&(!r||e.visualization.ChartWrapper)&&(!n||e.visualization.ChartEditor)&&(!o||e.visualization.drawToolbar)}}]),r}(v.Component);S.defaultProps=b,function(e){e.annotation="annotation",e.annotationText="annotationText",e.certainty="certainty",e.emphasis="emphasis",e.interval="interval",e.scope="scope",e.style="style",e.tooltip="tooltip",e.domain="domain"}(y||(y={}))}}]);