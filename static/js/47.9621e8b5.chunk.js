(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[47],{358:function(e,t,a){"use strict";a.d(t,"d",(function(){return k})),a.d(t,"a",(function(){return w})),a.d(t,"c",(function(){return P})),a.d(t,"b",(function(){return S}));var n=a(0),r=a.n(n),s=a(74),l=a(137),i=a(34),c=a(52),o=a(59),u=a(519),d=a(370),p=a(17),m=a(134),v=a.n(m),g=a(374),h=a(398),f=a(4),E=a.n(f),y=a(357),b=a.n(y),x=a(368),T=(a(369),a(367)),N=a(24),k=function(e){var t=function(t){console.log(t),e.user?(console.log(t),e.me.playsaccount(e.data,t)):"7"===e.data.LAUNCHURL?e.me.playsaccountguest(e.data):e.me.setloginpage({login:!0,register:!1})},a="";if(e.data){var n=e.data;a=n.image&&n.image.length>0?"https"===n.image.slice(0,5)?n.image:p.a.imageurl+n.image:""}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background",style:{backgroundImage:"url(".concat(a,")"),animation:x.animations.popIn}}),r.a.createElement("div",{className:"heart"}),r.a.createElement("div",{className:"casino-innor"},r.a.createElement("div",{className:"button-group"},r.a.createElement("div",null,e.data.WITHOUT.limits&&e.data.WITHOUT.limits.length>0?r.a.createElement(r.a.Fragment,null,e.data.WITHOUT.limits.slice(0,1).map((function(e,a){return r.a.createElement(s.a,{className:"real-play igamez-button",key:a,color:"success",onClick:function(){return t(e)}},"Real - Play")}))):r.a.createElement(s.a,{className:"real-play igamez-button",color:"success",onClick:function(){return t(null)}},"Real-Play"))),r.a.createElement("div",{className:"live-title-group"},r.a.createElement("span",{className:"left"},e.data&&e.data.TYPE?e.data.TYPE:"",r.a.createElement("br",null),r.a.createElement("small",null,e.data.NAME&&"undefined"!==e.data.NAME?e.data.NAME:"Dealer")),r.a.createElement("span",{className:"right"},e.data.star,r.a.createElement(u.a,{size:12,color:"yellow"})))),r.a.createElement(d.a,{className:"prev-icon",size:50}))},w=function(e){var t="";if(e.data){var a=e.data;t=a.image&&a.image.length>0?"https"===a.image.slice(0,5)?a.image:p.a.imageurl+a.image:""}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background",style:{backgroundImage:"url(".concat(t,")"),animation:x.animations.popIn}}),r.a.createElement("div",{className:"casino-innor"},r.a.createElement("div",{className:"button-group"},r.a.createElement("div",null,r.a.createElement(s.a,{className:"real-play igamez-button",color:"success",onClick:function(){console.log(e.user),e.user?e.me.playsaccount(e.data,!0):e.me.setloginpage({login:!0,register:!1})}},"PLAY FOR REAL"))),r.a.createElement("div",{className:"title-group"},r.a.createElement("span",{className:"left text-uppercase"},e.data&&e.data.TYPE?e.data.TYPE:""),r.a.createElement("span",{className:"right"},r.a.createElement(u.a,{size:12,color:"yellow"})))),r.a.createElement(d.a,{className:"prev-icon",size:50}))},P=function(e){var t={spaceBetween:60,effect:"fade",autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}};return r.a.createElement(r.a.Fragment,null,e.slider_images?r.a.createElement(l.a,{className:"casino-header-slider m-0"},r.a.createElement(v.a,t,e.slider_images.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(T.SlideDown,null,r.a.createElement("img",{className:"w-100 h-100",src:p.a.imageurl+t.image,alt:"swiper 1",onClick:function(){return function(t){t.data&&t.data.status&&t.data.link?N.a.push(t.data.link):t.gameid&&!e.player&&(e.user?e.playsaccount(t.gameid,!0):e.setloginpage({login:!0,register:!1}))}(t)}})))})))):r.a.createElement(y.SkeletonTheme,{color:"#202020",highlightColor:"#444"},r.a.createElement(b.a,{count:20})))},S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{sm:"12",md:"9",className:"d-flex align-items-center m-0 mt-1"},r.a.createElement(l.a,{className:"menu"},r.a.createElement(i.a,{md:"9",sm:"12",className:"d-flex align-items-center"},r.a.createElement("ul",null,e.types?e.types.map((function(t,a){return r.a.createElement("li",{key:a,value:t.value,label:t.label,onClick:function(){return e.typesActive(t.value)},className:E()({selected:t.value===e.typesactive})},t.label)})):null)),r.a.createElement(i.a,{md:"3",sm:"12",className:"search"},r.a.createElement(c.a,{className:"position-relative has-icon-left m-1"},r.a.createElement(o.a,{id:"search-game",type:"text",placeholder:"Search games here...",style:{borderRadius:"20px"},onChange:function(t){return e.handleFilter(t)}}),r.a.createElement("div",{className:"form-control-position"},r.a.createElement(h.a,{size:15})))))),r.a.createElement(i.a,{md:"3",sm:"12",className:"m-0  mt-1"},r.a.createElement("div",{className:"React casino-game-show-select"},r.a.createElement(g.a,{options:e.provider,className:"multi-select",classNamePrefix:"select",selectAllLabel:"ALL PROVIDER",hasSelectAll:"All",shouldToggleOnHover:!0,value:e.setprovider,overrideStrings:{allItemsAreSelected:"Select Provider"},focusSearchOnOpen:!0,onChange:function(t){return e.providerchange(t)},labelledBy:"Select Provider"}))))}},360:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(6),r=a.n(n),s=a(12),l=a(7),i=a(13),c=a(14),o=function(e,t,a,n){return function(){var i=Object(s.a)(r.a.mark((function s(i,o){var u,d,p,m,g,h,f,E,y,b,x,T,N;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i({type:c.b,bool:e}),u=o().casinolist.setprovider,d=o().casinolist.settype.value,r.next=5,Object(l.a)("firstpage/LivecasinoproviderLoad",{bool:e,type:t,selectprovider:u,params:n,TYPE:d},i,!0);case 5:if((p=r.sent).status){if(m=p.data.pdata,g=p.data.tdata,h=p.data.list,f=p.data.index,E=[],y=o().casinolist.settype.value,E="All"!==y?v(y,h):h,i({type:c.d,data:h,index:f,filteredData:E}),i({type:a,data:p.data.imgs}),x=[{label:"ALL",value:"All"}],b=[]){for(T=0;T<m.length;T++)b.push({label:m[T].provider.toLocaleUpperCase(),value:m[T].provider});i({type:c.f,data:b})}if(g){for(N=0;N<g.length;N++)x.push({label:g[N],value:g[N]});i({type:c.i,data:x})}}case 7:case"end":return r.stop()}}),s)})));return function(e,t){return i.apply(this,arguments)}}()},u=function(e,t,a){return function(){var n=Object(s.a)(r.a.mark((function n(s,o){var u,d,p;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=o().casinolist.settype.value,n.next=3,Object(l.a)("firstpage/LivecasinoProviderChange",{data:e,bool:t,params:a,TYPE:u},s,!0);case 3:(d=n.sent).status?(p=d.data,e.length>0&&window.sessionStorage.setItem("setprovider".concat(t),JSON.stringify(e)),s({type:c.g,setprovider:e}),s({type:c.d,data:p,filteredData:p})):i.b.error("server error");case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},d=function(e,t){return function(){var a=Object(s.a)(r.a.mark((function a(n,s){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:window.sessionStorage.setItem("settype".concat(t),JSON.stringify({label:e,value:e})),n({type:c.h,data:{label:e,value:e}});case 2:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},p=function(e,t,a){return function(){var n=Object(s.a)(r.a.mark((function n(s,i){var o,u,d,p;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=14;break}return o=i().casinolist.settype.value,n.next=4,Object(l.a)("firstpage/scroll_load",{data:e.value,params:a,TYPE:o},s,!0);case 4:if(!(u=n.sent).status){n.next=11;break}for(p in d=t,u.data)d.push(u.data[p]);s({type:c.d,data:d,filteredData:d}),n.next=12;break;case 11:return n.abrupt("return",!1);case 12:n.next=15;break;case 14:return n.abrupt("return",!1);case 15:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},m=function(e){return function(t){return t({type:c.c,value:e})}};function v(e,t){return"All"===e?t:t.filter((function(t){var a=t.TYPE?t.TYPE.toLowerCase().startsWith(e.toLowerCase()):null,n=t.TYPE?t.TYPE.toLowerCase().startsWith(e.toLowerCase()):null;return a||(!a&&n?n:null)}))}},535:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),s=a(12),l=a(18),i=a(19),c=a(21),o=a(20),u=a(0),d=a.n(u),p=a(137),m=a(34),v=a(16),g=a(360),h=a(29),f=a(358),E=a(114),y=a(357),b=a.n(y),x=a(28),T=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={casinoItems:[],index:1,data:[],allData:[],value:"",bool:!1,typesactive:0,scrollevent:!0,select:0,index1:0},e.listenToScroll=Object(s.a)(r.a.mark((function t(){var a,n,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.scrollevent){t.next=14;break}if(a=document.body.scrollTop||document.documentElement.scrollTop,n=document.documentElement.scrollHeight-document.documentElement.clientHeight,!((a+350)/n>=1)){t.next=14;break}if(s=24*(e.state.index+1),!(e.state.data.length<s)){t.next=13;break}return t.next=9,e.setState({scrollevent:!1,select:e.state.select+1});case 9:e.props.get_scrollevent_load(e.props.setprovider[e.state.select],e.props.dataList.allData,{TYPE:"Teen Patti"}),e.setState({scrollevent:!0,index:e.state.index+1}),t.next=14;break;case 13:e.setState({index:e.state.index+1});case 14:case"end":return t.stop()}}),t)}))),e.typesActive=function(t){e.props.gametypechange(t,E.j.TEENPATTI)},e.provider_change=function(t){e.props.providerchange(t,E.j.TEENPATTI,{TYPE:"Teen Patti"})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.data_load(E.j.TEENPATTI,"13","TEENPATTISLIDERS",{TYPE:"Teen Patti"}),window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"componentDidUpdate",value:function(){var e=Object(s.a)(r.a.mark((function e(t,a){var n,s,l,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.index&&a.index1!==this.props.index&&this.setState({index1:this.props.index,select:this.props.index}),t.settype.value===this.props.settype.value){e.next=5;break}return e.next=4,this.setState({index:1,select:0,index1:0});case 4:this.props.data_load(E.j.TEENPATTI,"13","TEENPATTISLIDERS",{TYPE:"Teen Patti"});case 5:a.index!==this.state.index&&(n=this.state,s=n.data,l=n.allData,i=n.value,c=i.length?l.slice(0,24*this.state.index):s.slice(0,24*this.state.index),24*this.state.index>c.length?this.setState({bool:!0}):this.setState({bool:!1}));case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleFilter",value:function(e){this.setState({value:e.target.value,index:1}),this.props.filterData(e.target.value)}},{key:"render",value:function(){var e=this,t=this.props.dataList.data.slice(0,24*this.state.index);!1===this.state.bool&&24*this.state.index>t.length&&this.setState({bool:!0});var a=this.context.user;return d.a.createElement(d.a.Fragment,null,d.a.createElement(f.c,Object.assign({slider_images:this.props.casinoSlider_images},this.props)),d.a.createElement(p.a,{className:"casino-select-picker"},d.a.createElement(f.b,{types:this.props.types,provider:this.props.provider,setprovider:this.props.setprovider,providerchange:this.provider_change,typesactive:this.props.settype.value,typesActive:this.typesActive,handleFilter:function(t){return e.handleFilter(t)}})),t&&t.length>0?d.a.createElement("div",{style:{minHeight:"25rem"}},d.a.createElement(p.a,{className:"casino-item-group"},t.map((function(t,n){return d.a.createElement(m.a,{key:n,className:"col-2-4 item",xs:"4",sm:"4",md:"3",lg:"2"},d.a.createElement(f.a,{user:a,data:t,me:e.props}))})))):d.a.createElement(y.SkeletonTheme,{color:"#202020",highlightColor:"#444"},d.a.createElement(b.a,{count:15})))}}]),a}(d.a.Component);T.contextType=x.a;t.default=Object(v.b)((function(e){return{casinoSlider_images:e.sliders.teenpatti_images,dataList:e.casinolist,provider:e.casinolist.providerData,types:e.casinolist.types,settype:e.casinolist.settype,index:e.casinolist.index,setprovider:e.casinolist.setprovider}}),{setloginpage:h.setloginpage,providerchange:g.e,gametypechange:g.c,filterData:g.b,playsaccount:h.playsaccount,data_load:g.a,playsaccountguest:h.playsaccountguest,get_scrollevent_load:g.d})(T)}}]);