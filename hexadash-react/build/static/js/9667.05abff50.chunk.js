"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[9667],{85213:function(e,t,n){n.r(t);var a=n(1413),o=n(45987),r=n(93393),s=n(47313),i=n(78142),c=n(46417),l=["type","height","width","scales","labels","id","datasets","tooltip","layout","legend","elements","option"];function d(e){var t=e.type,n=e.height,d=e.width,h=e.scales,u=e.labels,p=e.id,v=e.datasets,f=e.tooltip,m=e.layout,x=e.legend,g=e.elements,b=e.option,j=(0,o.Z)(e,l);return(0,s.useEffect)((function(){var e=null,n=!1;return n||(e=new r.kL(document.getElementById(p).getContext("2d"),{type:t,data:{labels:u,datasets:v},options:(0,a.Z)({responsive:!0,maintainAspectRatio:!0,layout:m,hover:{mode:"index",intersect:!1},plugins:{legend:x,tooltip:(0,a.Z)({yAlign:"bottom",xAlign:"right",mode:"index",intersect:!1,backgroundColor:"#ffffff",boxShadow:"0 8px 5px #ADB5D915",position:"nearest",titleColor:"#ADB5D9",color:"#ADB5D9",titleFontSize:12,titleSpacing:10,bodyColor:"#525768",bodyFontSize:11,bodyFontStyle:"normal",bodyFontFamily:"'Jost', sans-serif",borderColor:"#F1F2F6",usePointStyle:!0,borderWidth:1,bodySpacing:10,padding:{x:10,y:8},z:999999,enabled:!1,external:i.customTooltips},f)},elements:g,scales:h},b)})),function(){e.destroy(),n=!0}}),[t,v,u,p,m,x,g,h,f,b]),(0,c.jsx)("canvas",(0,a.Z)({width:d,height:n,id:p},j))}r.kL.register(r.qi,r.jn,r.ZL,r.od,r.vn,r.N0,r.jI,r.ST,r.tt,r.CV,r.Xi,r.ho,r.uw,r.f$,r.WV,r.l7,r.FB,r.RM,r.WY,r.Gu,r.De,r.Dx,r.u,r.DK),d.defaultProps={height:479,type:"line",width:null,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],borderColor:"#001737",borderWidth:1,fill:!1},{data:[10,40,30,40,60,55,45,35,30,20,15,20],borderColor:"#1ce1ac",borderWidth:1,fill:!1}],layout:{},legend:{display:!1,labels:{display:!1,position:"center"}},id:"myChart",elements:{line:{tension:.6,borderCapStyle:"round",borderJoinStyle:"round",capBezierPoints:!0},point:{radius:0,z:5}},scales:{y:{beginAtZero:!0,grid:{color:"#485e9029",borderDash:[3,3],zeroLineColor:"#485e9029",zeroLineWidth:1},ticks:{beginAtZero:!0,fontSize:14,fontFamily:"Jost",color:"#8C90A4",max:80,stepStartValue:5,stepSize:20,padding:10,callback:function(e){return"".concat(e,"k")}}},x:{grid:{display:!1,drawBorder:!1,zeroLineWidth:0,color:"transparent",z:1},ticks:{beginAtZero:!0,fontSize:14,fontFamily:"Jost",color:"#8C90A4"}}},tooltip:{callbacks:{label:function(e){var t=e.dataset.label,n=e.formattedValue;return"  ".concat(n," ").concat(t)},labelColor:function(e){return{backgroundColor:e.dataset.backgroundColor,borderColor:"transparent"}}}},option:{}},t.default=d},78142:function(e,t,n){n.r(t),n.d(t,{chartLinearGradient:function(){return o},customTooltips:function(){return r},textRefactor:function(){return a}});var a=function(e,t){return"".concat(e.split(" ").slice(0,t).join(" "),"...")},o=function(e,t,n){var a=e.getContext("2d").createLinearGradient(0,0,0,t);return a.addColorStop(0,"".concat(n.start)),a.addColorStop(1,"".concat(n.end)),a},r=function(e){var t=document.querySelector(".chartjs-tooltip"),n=this._chart.canvas.closest(".ninjadash-chart-container");if(n&&!n.contains(t)&&((t=document.createElement("div")).className="chartjs-tooltip",t.innerHTML="<table></table>",document.querySelectorAll(".ninjadash-chart-container").forEach((function(e){e.contains(t)&&t.remove()})),n.appendChild(t)),null!==t){var a=e.tooltip;if(0===a.opacity)return void(t.style.opacity=0);if(t.classList.remove("above","below","no-transform"),a.yAlign?t.classList.add(a.yAlign):t.classList.add("no-transform"),a.body){var o=a.title||[],r=a.body.map((function(e){return e.lines})),s="<thead>";o.forEach((function(e){s+="<div class='tooltip-title'>".concat(e,"</div>")})),s+="</thead><tbody>",r.forEach((function(e,t){var n=a.labelColors[t],o="background:".concat(n.backgroundColor);o+="; border-color:".concat(n.borderColor),o+="; border-width: 2px";var r='<span class="chartjs-tooltip-key" style="'.concat(o+="; border-radius: 30px",'"></span>');s+="<tr><td>".concat(r).concat(e,"</td></tr>")})),s+="</tbody>",t.querySelector("table").innerHTML=s}var i=this._chart.canvas.offsetTop,c=this._chart.canvas.offsetLeft,l=document.querySelector(".chartjs-tooltip").clientHeight;t.style.opacity=1,t.style.left="".concat(c+a.caretX,"px"),t.style.top="".concat(i+a.caretY-(a.caretY>10?l>100?l+5:l+15:70),"px"),t.style.fontFamily=a.options.bodyFontFamily,t.style.fontSize="".concat(a.options.bodyFontSize,"px"),t.style.fontStyle=a.options.bodyFontStyle,t.style.padding="".concat(a.yPadding,"px ").concat(a.xPadding,"px")}}},59667:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(1413),o=n(47313),r=n(1084),s=n(2135),i=n(79585),c=n(43387),l=n(48866),d=n(27823),h=n(75784),u=n(34794),p=n(15486),v=n(63451);var f=n.p+"static/media/google-customIcon.d3641275457c11f70518e20ff287dfb7.svg",m=n(1805),x=n(23008),g=n(48949),b=n(54987),j=n(85213),y=n(46417),w=o.memo((function(){var e=(0,r.v9)((function(e){return{mainContent:e.ChangeLayoutMode.mode}})).mainContent,t=m.default.themeColor,n={height:window.innerWidth<=1699?window.innerWidth<=991?300:200:300,width:window.innerWidth<=1699?window.innerWidth<=991?300:200:300,labels:["Twitter","Google","Facebook"],datasets:[{data:[1540,1540,5346],backgroundColor:["#00AAFF","#8231D3","#5840FF"]}],scales:{x:{display:!1},y:{display:!1}},option:{borderColor:t[e]["white-background"],maintainAspectRatio:!0,responsive:!1},tooltip:{mode:"index",callbacks:{label:function(e){var t=e.dataset,n=e.label,a=e.dataIndex;return"  ".concat(n," ").concat(t.data[a])},labelColor:function(e){var t=e.dataIndex;return{backgroundColor:e.dataset.backgroundColor[t],borderColor:"transparent"}}}}},o=(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(s.OL,{to:"#",children:[(0,y.jsx)(h.Z,{}),(0,y.jsx)("span",{children:"Printer"})]}),(0,y.jsxs)(s.OL,{to:"#",children:[(0,y.jsx)(c.Z,{}),(0,y.jsx)("span",{children:"PDF"})]}),(0,y.jsxs)(s.OL,{to:"#",children:[(0,y.jsx)(d.Z,{}),(0,y.jsx)("span",{children:"Google Sheets"})]}),(0,y.jsxs)(s.OL,{to:"#",children:[(0,y.jsx)(u.Z,{}),(0,y.jsx)("span",{children:"Excel (XLSX)"})]}),(0,y.jsxs)(s.OL,{to:"#",children:[(0,y.jsx)(l.Z,{}),(0,y.jsx)("span",{children:"CSV"})]})]});return(0,y.jsx)(x.BorderLessHeading,{children:(0,y.jsx)(g.RevenueGeneratedWrapper,{children:(0,y.jsx)(b.Cards,{title:"Source Of Revenue Generated",size:"large",more:o,children:(0,y.jsxs)("div",{className:"ninjadsh-revenue-wrap",children:[(0,y.jsx)("div",{className:"ninjadsh-revenue-chart",children:(0,y.jsx)(g.ChartContainer,{className:"ninjadash-chart-pie",children:(0,y.jsx)("div",{className:"ninjadash-chart-container",children:(0,y.jsx)(j.default,(0,a.Z)((0,a.Z)({},n),{},{type:"pie",id:"pieChart"}))})})}),(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source",children:[(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source__single",children:[(0,y.jsx)("div",{className:"ninjadsh-revenue-chart-source__icon ninjadash-twitter",children:(0,y.jsx)(v.Z,{})}),(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source__text",children:[(0,y.jsx)("span",{className:"ninjadsh-revenue-chart-source__title",children:n.labels[0]}),(0,y.jsxs)("span",{className:"ninjadsh-revenue-chart-source__count",children:["$",n.datasets[0].data[0]]})]})]}),(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source__single",children:[(0,y.jsx)("div",{className:"ninjadsh-revenue-chart-source__icon ninjadash-google",children:(0,y.jsx)(i.Q,{src:f})}),(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source__text",children:[(0,y.jsx)("span",{className:"ninjadsh-revenue-chart-source__title",children:n.labels[1]}),(0,y.jsxs)("span",{className:"ninjadsh-revenue-chart-source__count",children:["$",n.datasets[0].data[1]]})]})]}),(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source__single",children:[(0,y.jsx)("div",{className:"ninjadsh-revenue-chart-source__icon ninjadash-facebook",children:(0,y.jsx)(p.Z,{})}),(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source__text",children:[(0,y.jsx)("span",{className:"ninjadsh-revenue-chart-source__title",children:n.labels[2]}),(0,y.jsxs)("span",{className:"ninjadsh-revenue-chart-source__count",children:["$",n.datasets[0].data[2]]})]})]})]})]})})})})}))},15486:function(e,t,n){var a=n(1413),o=n(45987),r=n(61962),s=n(75192),i=n.n(s),c=["color","size"],l=function(e){var t=e.color,n=e.size,s=(0,o.Z)(e,c);return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t},s),r.createElement("path",{d:"M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"}))};l.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},l.defaultProps={color:"currentColor",size:"24"},t.Z=l},27823:function(e,t,n){var a=n(1413),o=n(45987),r=n(61962),s=n(75192),i=n.n(s),c=["color","size"],l=function(e){var t=e.color,n=e.size,s=(0,o.Z)(e,c);return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t},s),r.createElement("path",{d:"M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"}))};l.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},l.defaultProps={color:"currentColor",size:"24"},t.Z=l},75784:function(e,t,n){var a=n(1413),o=n(45987),r=n(61962),s=n(75192),i=n.n(s),c=["color","size"],l=function(e){var t=e.color,n=e.size,s=(0,o.Z)(e,c);return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t},s),r.createElement("path",{d:"M7,10a1,1,0,1,0,1,1A1,1,0,0,0,7,10ZM19,6H18V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H6v3a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V18h1a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM8,4h8V6H8Zm8,16H8V16h8Zm4-5a1,1,0,0,1-1,1H18V15a1,1,0,0,0-1-1H7a1,1,0,0,0-1,1v1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z"}))};l.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},l.defaultProps={color:"currentColor",size:"24"},t.Z=l},63451:function(e,t,n){var a=n(1413),o=n(45987),r=n(61962),s=n(75192),i=n.n(s),c=["color","size"],l=function(e){var t=e.color,n=e.size,s=(0,o.Z)(e,c);return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t},s),r.createElement("path",{d:"M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"}))};l.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},l.defaultProps={color:"currentColor",size:"24"},t.Z=l}}]);