(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[67],{520:function(t,e,s){"use strict";s.r(e);var r=s(6),a=s.n(r),o=s(12),n=s(18),p=s(19),i=s(21),c=s(20),l=s(0),u=s.n(l),m=s(16),h=s(52),d=s(59),v=s(398),_=s(43),f=s(420),g=s(56),y=s.n(g),E=s(11),b=s(28),k=s(24),x=function(t){Object(i.a)(s,t);var e=Object(c.a)(s);function s(){var t;Object(n.a)(this,s);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={value:""},t}return Object(p.a)(s,[{key:"componentDidMount",value:function(){var t=Object(o.a)(a.a.mark((function t(){var e,s,r,o,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,s=this.context.telegram,r="sports",this.props.current_selected_sport.sport_id){t.next=17;break}if(this.props.remove_all_match(),!s){t.next=13;break}return t.next=8,this.props.getSportsListPlayer(1,E.a.matchType[r]);case 8:o=y.a.parse(this.props.location.search),(n=this.props.sport_list.data.findIndex((function(t){return String(t.sport_id)===o.sport_id})))>-1?this.position(this.props.sport_list.data[n]):this.props.getFeaturedEvents(),t.next=15;break;case 13:this.props.getSportsListPlayer(0,E.a.matchType[r]),this.props.getFeaturedEvents();case 15:t.next=18;break;case 17:this.props.getSportsListPlayer(1,E.a.matchType[r]);case 18:document.addEventListener("message",(function(t){var s=JSON.parse(t.data);switch(s.action){case"removeOneItem":e.props.removeItem(s.value);break;case"removeAllItem":case"bet":e.props.removeAllItem()}}),!1);case 19:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t){if(t.sport_list!==this.props.sport_list){var e=y.a.parse(k.a.location.search).event_name;if(e){var s=this.props.sport_list.data.filter((function(t){return t.sport_name===e}));s.length&&this.position(s[0])}}}},{key:"position",value:function(t){if(this.props.current_select_sport(t),this.props.countryChange(""),0===t.sport_id)this.props.getFeaturedEvents();else{var e={sportid:t.sport_id,EventStatus:this.props.current_tap.EventStatus};this.props.getSportsMatchPlayer(e)}k.a.push("?event_name=".concat(t.sport_name))}},{key:"render",value:function(){var t=this;return u.a.createElement("div",{className:"sports-background height-100"},u.a.createElement("div",{className:"w-100 memu-search"},u.a.createElement(h.a,{className:"position-relative has-icon-left mt-1"},u.a.createElement(d.a,{type:"text",className:"round",placeholder:"Search",value:this.state.value,onChange:function(e){return t.setState({value:e.target.value})}}),u.a.createElement("div",{className:"form-control-position px-1"},u.a.createElement(v.a,{size:15})))),u.a.createElement("div",{className:"overflow-auto menulist"},u.a.createElement("div",{className:"sport-1"},this.props.sport_list.data&&this.props.sport_list.data.length>0?this.props.sport_list.data.map((function(e,s){return u.a.createElement("div",{key:s,onClick:function(){return t.position(e)},className:"sport-2"},e.sport_id===t.props.current_selected_sport.sport_id?u.a.createElement("div",{className:"sports-tab-active-background"}):null,u.a.createElement("div",{className:"sports-tab-background sport-3 position-relative"},u.a.createElement("svg",{style:{color:e.color},width:"22",height:"22",viewBox:e.viewBox},u.a.createElement("path",{d:e.icon,fill:"currentColor"})),u.a.createElement("span",{className:"mkcount"},e.count)),u.a.createElement("div",{className:"sport-4".concat(e.sport_id===t.props.current_selected_sport.sport_id?" sports-4-active":"")},e.sport_name))})):null)),u.a.createElement(f.a,null))}}]),s}(u.a.Component);x.contextType=b.a;var N={getSportsListPlayer:_.l,getSportsMatchPlayer:_.m,current_select_sport:_.f,remove_all_match:_.r,getFeaturedEvents:_.i,countryChange:_.d,removeItem:_.q,removeAllItem:_.p};e.default=Object(m.b)((function(t){return{sport_list:t.sports.sports_list,current_selected_sport:t.sports.current_selected_sport,current_tap:t.sports.current_tap,all_sports_list:t.sports.all_sports_list}}),N)(x)}}]);