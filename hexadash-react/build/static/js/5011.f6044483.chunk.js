"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[5011],{51233:function(a,e,s){s.r(e);var t=s(29439),i=s(27554),r=s(36974),n=s(28080),l=s(47313),o=s(87977),c=s(58467),d=s(79585),h=s(50486),u=s(46417);function f(a){var e=a.data,f=a.className,x=a.bottomStatus,m=a.contentFirst,v=a.halfCircleIcon,p=(0,l.useState)(!1),j=(0,t.Z)(p,2),w=j[0],b=j[1],g=(0,c.TH)().pathname;(0,l.useEffect)((function(){b(!0)}),[g]);var N=e.type,y=e.icon,S=e.label,P=e.total,_=e.status,R=e.statusRate,C=e.dataPeriod,Z=e.suffix,T=e.prefix,k=e.decimels,F=e.separator,O=Number(P);return(0,u.jsx)(h.OverviewCardWrap,{className:f,children:(0,u.jsx)(n.Z,{bordered:!1,className:v?"ninjadash-overview-halfCircle-card":null,children:(0,u.jsxs)("div",{className:"ninjadash-overview-card ninjadash-overview-card-".concat(N),children:[(0,u.jsxs)("div",{className:m?"ninjadash-overview-card__top d-flex justify-content-between ninjadash-overview-card-theme-2":"ninjadash-overview-card__top d-flex justify-content-between",children:[(0,u.jsx)("div",{className:"ninjadash-overview-card__top--icon ninjadash-".concat(N),children:(0,u.jsx)(d.Q,{src:s(34542)("./".concat(y))})}),(0,u.jsx)("div",{className:m?"ninjadash-overview-card__top--content":"ninjadash-overview-card__top--content text-right",children:v?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:"ninjadahs-overview-label",children:S}),(0,u.jsx)("h4",{className:"ninjadash-overview-total",children:(0,u.jsx)(o.ZP,{start:0,end:w?O:0,suffix:Z,prefix:T,delay:.5,decimals:k,separator:F,duration:2})})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h4",{className:"ninjadash-overview-total",children:(0,u.jsx)(o.ZP,{start:0,end:w?O:0,suffix:Z,prefix:T,delay:.5,decimals:k,separator:F,duration:2})}),(0,u.jsx)("span",{className:"ninjadahs-overview-label",children:S})]})})]}),x?(0,u.jsx)("div",{className:"ninjadash-overview-card__bottom",children:(0,u.jsxs)("span",{className:"ninjadash-overview-status ninjadash-status-".concat(_),children:[(0,u.jsxs)("span",{className:"ninjadash-status-rate",children:["growth"===_?(0,u.jsx)(r.Z,{}):(0,u.jsx)(i.Z,{}),R,"%"]}),(0,u.jsx)("span",{className:"ninjadash-status-label",children:C})]})}):""]})})})}f.defaultProps={data:{},className:"ninjadash-overview-card-box",bottomStatus:!0,contentFirst:!1,halfCircleIcon:!1},e.default=f},85011:function(a,e,s){s.r(e);var t=s(47313),i=s(68197),r=s(59624),n=s(51233),l=s(48949),o=s(39081),c=s(46417),d=t.memo((function(){var a=o.slice(Math.max(o.length-4,1));return(0,c.jsx)(l.OverviewDataStyleWrap,{children:(0,c.jsx)(i.Z,{gutter:25,children:a.map((function(a,e){return(0,c.jsx)(r.Z,{xxl:6,sm:12,xs:24,children:(0,c.jsx)(n.default,{data:a})},e)}))})})}));e.default=d},39081:function(a){a.exports=JSON.parse('[{"id":1,"type":"primary","icon":"briefcase.svg","label":"Total Products","total":"100","suffix":"+","prefix":"","status":"growth","statusRate":"25.36","decimel":0,"dataPeriod":"Since last month"},{"id":2,"type":"info","icon":"shopping-cart.svg","label":"Total Orders","total":"30825","suffix":"","prefix":"","status":"growth","statusRate":"25.36","decimels":0,"separator":",","dataPeriod":"Since last month"},{"id":3,"type":"secondary","icon":"dollar-circle.svg","label":"Total Sales","total":"30825","suffix":"","prefix":"$","status":"down","statusRate":"25.36","decimels":0,"separator":",","dataPeriod":"Since last month"},{"id":4,"type":"warning","icon":"users-alt.svg","label":"New Customers","total":"30825","suffix":"+","prefix":"","status":"growth","statusRate":"25.36","decimels":0,"separator":",","dataPeriod":"Since last month"},{"id":5,"type":"primary","icon":"arrow-growth.svg","label":"Total Traffic","total":"30825","suffix":"","prefix":"","status":"growth","statusRate":"25.36","decimels":0,"separator":",","dataPeriod":"Since last month"},{"id":6,"type":"secondary","icon":"users-alt.svg","label":"New Customers","total":"2850","suffix":"","prefix":"","status":"growth","statusRate":"9.87","decimels":0,"dataPeriod":"Since last month"},{"id":7,"type":"success","icon":"dollar-circle.svg","label":"Sales","total":"529","suffix":"","prefix":"","status":"down","statusRate":"12.36","decimels":0,"dataPeriod":"Since last month"},{"id":8,"type":"info","icon":"speed-meter.svg","label":"Performance","total":"28.50","suffix":"%","prefix":"","status":"growth","statusRate":"9.87","decimels":2,"dataPeriod":"Since last month"}]')}}]);