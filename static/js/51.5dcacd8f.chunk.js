(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[51],{414:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(16),i=n(36),o=n(66),l=n(74),s=n(434);t.a=function(){var e=Object(o.g)(),t=Object(c.d)((function(e){return e.betexch})),n=t.activematche,a=t.activeSport;return console.log(n),r.a.createElement(i.a,{queries:{small:"(max-width: 768px)",large:"(min-width: 769px)"}},(function(t){return r.a.createElement(r.a.Fragment,null,t.small&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"category d-flex align-items-center justify-content-between"},r.a.createElement("h5",null,n&&n.competition?n.competition.name:"Select Matches"),r.a.createElement(l.a.Ripple,{color:"flat-warning",onClick:function(){return e.push("/newbetexchmain?eventname=".concat(a.name,"&inplay=true"))}},r.a.createElement(s.a,{size:14}),r.a.createElement("span",{className:"align-middle ml-25"},"BACk")))),t.large&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"category d-flex align-items-center justify-content-between"},r.a.createElement("h4",null,n&&n.competition?n.competition.name:"Select Matches"),r.a.createElement(l.a.Ripple,{color:"flat-warning",onClick:function(){return e.push("/newbetexchmain?eventname=".concat(a.name,"&inplay=true"))}},r.a.createElement(s.a,{size:14}),r.a.createElement("span",{className:"align-middle ml-25"},"BACk")))))}))}},434:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),i=n.n(c);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,c=e.size,i=void 0===c?24:c,s=l(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("polyline",{points:"10 9 15 4 20 9"}),r.a.createElement("path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="CornerRightUp",t.a=s},564:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),c=n(12),i=n(0),o=n.n(i),l=n(66),s=n(377),u=n(51),m=n(414),p=n(436),f=n(56),b=n.n(f),d=n(16),h=n(408);t.default=function(){var e=Object(l.g)(),t=Object(i.useContext)(u.a),n=t.showLoading,a=t.hideLoading,f=Object(d.d)((function(e){return e.betexch})),v=f.activeSport,g=f.Sportlist,O=f.Inplay,j=Object(d.c)(),w=function(){var t=Object(c.a)(r.a.mark((function t(){var c,i,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(g.length){t.next=9;break}return n(),t.next=4,Object(h.a)();case 4:(c=t.sent).status&&((i=b.a.parse(e.location.search).eventname)?(o=c.data.find((function(e){return i===e.name})),j(o?Object(s.k)(o):Object(s.k)(O))):j(Object(s.k)(O)),j(Object(s.j)(c.data))),a(),t.next=9;break;case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.next=3,Object(h.b)({row:v});case 3:(t=e.sent).status&&(j(Object(s.n)(t.data)),j(Object(s.l)(t.data))),a();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){v&&Object.keys(v).length&&y()}),[v]),Object(i.useEffect)((function(){w()}),[]),o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:"betexchmain"},o.a.createElement(m.a,null),o.a.createElement(p.a,null)))}}}]);