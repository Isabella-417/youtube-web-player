(this["webpackJsonpyoutube-web-player"]=this["webpackJsonpyoutube-web-player"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(16),i=n.n(a),s=n(18),l=n(3),o=n(6),u=n(7),d=n.n(u),j=Object({NODE_ENV:"production",PUBLIC_URL:"/youtube-web-player",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyA7FS0BOtdOjQmdzI-gfvaG-bQ048U89Co",REACT_APP_URL_BASE:"https://www.googleapis.com/youtube/v3"}),p=j.REACT_APP_API_KEY,b=j.REACT_APP_URL_BASE,h=function(){var e=Object(o.a)(Object(l.a)().mark((function e(t){var n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat(b,"/search"),{params:{part:"snippet",key:p,maxResults:6,q:t}});case 2:return n=e.sent,e.next=5,n.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(Object(l.a)().mark((function e(t){var n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat(b,"/videos"),{params:{part:"snippet",key:p,maxResults:1,id:t}});case 2:return n=e.sent,e.next=5,n.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return e.map((function(e){return{key:e.id.videoId?e.id.videoId:e.id,label:e.snippet.title,image:e.snippet.thumbnails.high,url:"https://www.youtube.com/embed/".concat(e.id.videoId?e.id.videoId:e.id),description:e.snippet.description,title:e.snippet.title,channel_name:e.snippet.channelTitle}}))},y=n(0),x={playlist:[{}]},m=Object(r.createContext)(x),v=function(e){var t=e.children,n=Object(r.useState)(x),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(y.jsx)(m.Provider,{value:{video:a,setVideo:i,updatePlaylist:function(e){f(e).then((function(e){var t=O(e.items);i({playlist:t.concat(a.playlist.slice(1))})})).catch((function(e){console.error(e)}))}},children:t})},P=function(e){return Object(y.jsxs)("div",{className:e.style,children:[" ",e.children]})};P.defaultProps={type:"light"};var g=function(e){return"undefined"===typeof e?"":e.replaceAll("&amp;","&").replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&quot;",'"').replaceAll("&#039;","'")},A=(n(43),function(e){var t=e.text,n=e.size,r=e.handleSelect;return Object(y.jsxs)("figure",{className:e.alignment,onClick:r,children:[Object(y.jsx)("img",{src:e.src,alt:e.alt,className:n}),Object(y.jsx)("figcaption",{className:e.size,children:g(t)})]})});A.defaultProps={alignment:"horizontal",size:"medium"};var _=function(e){return Object(y.jsx)(y.Fragment,{children:e.data.map((function(t){return Object(y.jsx)(A,{text:t[e.renderKey],src:t.image.url,alt:t.label,handleSelect:function(){e.handleSelect(t.key)}},t.key)}))})};_.defaultProps={renderKey:"label",data:[],src:"",alt:"default image",handleSelect:function(){}};var S=function(e){var t=Object(r.useContext)(m).updatePlaylist;return Object(y.jsx)(P,{children:Object(y.jsx)(_,{data:e.data,handleSelect:t,renderKey:e.renderKey})})};S.defaultProps={renderKey:"label",data:[{}]};n(44);var w=n.p+"static/media/youtube.2331ae09.svg",K=function(e){return Object(y.jsx)("nav",{className:"navbar",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)("img",{src:w,height:50,width:100,alt:"youtube logo"})}),Array.isArray(e.children)&&e.children.map((function(e){return Object(y.jsx)("li",{children:e})})),!Array.isArray(e.children)&&Object(y.jsx)("li",{className:"center",children:e.children})]})})};K.defaultProps={title:"Youtube challenge",children:[]};n(45);var E=function(e){return Object(y.jsx)("div",{className:"video-container",children:Object(y.jsx)("iframe",{src:e.url,title:e.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"})})},C=(n(46),function(){var e=Object(r.useContext)(m).video.playlist[0],t=e.label,n=e.url,c=e.title,a=e.description,i=e.channel_name;return Object(y.jsxs)("div",{className:"container-video-details",children:[Object(y.jsx)("div",{className:"container-video",children:Object(y.jsx)(E,{url:n,title:t})}),Object(y.jsxs)("div",{className:"container-title",children:[Object(y.jsx)("h2",{children:g(c)}),Object(y.jsx)("h3",{children:i})]}),Object(y.jsx)("div",{className:"container-description",children:Object(y.jsx)("p",{children:a})})]})}),N=n(17),T=n.n(N),R=(n(47),function(e){return Object(y.jsx)("input",{className:e.color,type:e.type,placeholder:e.placeholder,onKeyPress:e.onKeyPress})});R.defaultProps={type:"text",placeholder:"Default",onKeyPress:function(){}};n(48);var k=function(e){return Object(y.jsx)(R,{placeholder:"Search",onKeyPress:e.onKeyPress})};R.defaultProps={onKeyPress:function(){}},R.propTypes={onKeyPress:T.a.func};n(51);var I=function(){var e=Object(r.useContext)(m),t=e.video,n=e.setVideo;return Object(r.useEffect)((function(){h("Das lyed").then((function(e){var t=O(e.items);n({playlist:t})})).catch((function(e){console.error(e)}))}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(K,{children:Object(y.jsx)(k,{onKeyPress:function(e){if(13===e.charCode){var t=e.target.value;h(t).then((function(e){var t=O(e.items);n({playlist:t})})).catch((function(e){console.error(e)}))}}})}),Object(y.jsxs)("div",{className:"main-container",children:[Object(y.jsx)("main",{children:Object(y.jsx)(C,{})}),Object(y.jsx)("aside",{children:Object(y.jsx)(S,{data:t.playlist.slice(1)})})]})]})},z=function(){return Object(y.jsx)(v,{children:Object(y.jsx)(I,{})})};n(52);i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(z,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.2ac93fb5.chunk.js.map