(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,n){"use strict";(function(e){var r=n(0),a=n.n(r),o=n(138),i=n(369),c=n(17),u=n(151);function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]);return l=function(){return e},e}Object(c.b)(l());var s=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){return a.a.createElement(i.a,null,a.a.createElement(u.a,null))},t}(r.Component);t.a=Object(o.hot)(e)(s)}).call(this,n(93)(e))},150:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(24),a=n(60),o=n(44);function i(t){var i=Object(r.compose)(Object(r.applyMiddleware)(a.apiMiddleware),window.devToolsExtension?window.devToolsExtension():function(e){return e})(r.createStore)(o.default,t);return e.hot.accept(44,function(e){o=n(44),function(){var e=n(44);i.replaceReducer(e)}()}),i}},151:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(17),i=n(133),c=n(149),u=n.n(c),l=n(85),s=n.n(l),m=(n(65),n(198),n(28)),p=n(143),d=n.n(p),f=n(144),h=n.n(f),v=n(145),g=n.n(v),E=n(21),b=n.n(E),y=n(146),w=n.n(y),O=n(148),x=n.n(O),j=n(147),_=n.n(j);n(199),n(216);var S=n(60),C=n(142),T=n.n(C),k=n(16);function B(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}var M=new T.a,F=(n(217),n(62)),R=function(e){return e.search},A=Object(F.createSelector)(R,function(e){var t;return null===(t=e.result)||void 0===t?void 0:t.item}),P=Object(F.createSelector)(R,function(e){return e.isFetching}),I=Object(F.createSelector)(R,function(e){var t,n,r,a;return{title:null===(t=e.result)||void 0===t?void 0:t.title,desc:null===(n=e.result)||void 0===n?void 0:n.description,link:null===(r=e.result)||void 0===r?void 0:r.link[0],image:null===(a=e.result)||void 0===a?void 0:a.image.url}});function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(){var e=N(["\n  //min-height: 83px;\n"]);return U=function(){return e},e}function H(){var e=N(["\n  margin-bottom: 1em;\n  text-align: center;\n"]);return H=function(){return e},e}function N(e,t){return t||(t=e.slice(0)),e.raw=t,e}var J=o.a.div(H()),G=o.a.div(U()),W={marginBottom:"1.5em"},Y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return D(L(L(t=e.call.apply(e,[this].concat(r))||this)),"state",{timer:null,name:""}),D(L(L(t)),"getSearch",function(e,t){var n;return function(){clearTimeout(n),n=setTimeout(e,t)}}(function(){var e=t.props.searchOnMedium;""!==t.state.name&&e(t.state.name)},1e3)),D(L(L(t)),"handleChange",function(e){return function(n){var r,a=n.currentTarget.value;t.setState(((r={})[e]=a,r),t.getSearch)}}),D(L(L(t)),"handleClick",function(e){t.getSearch()}),t}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e=this.props,t=e.channel,n=e.isSearching,r=e.isLoaded;return a.a.createElement(J,null,a.a.createElement(d.a,{id:"name",label:"User account or feed",value:this.state.name,onChange:this.handleChange("name"),fullWidth:!0,margin:"normal",style:W,InputProps:{endAdornment:a.a.createElement(h.a,{position:"end"},a.a.createElement(g.a,{onClick:this.handleClick},a.a.createElement(w.a,null)))}}),a.a.createElement(G,null,!r&&!n&&a.a.createElement(b.a,{variant:"display1",gutterBottom:!0},"There is nothing yet"),n?a.a.createElement(_.a,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(b.a,{variant:"display2"},a.a.createElement("a",{href:t.link},t.title)),a.a.createElement(b.a,{variant:"headline"},t.desc))),r&&a.a.createElement(x.a,null))},t}(r.Component),q=Object(m.connect)(function(e){return{isSearching:P(e),channel:I(e),isLoaded:!!I(e).title}},{searchOnMedium:function(e){var t;return(t={})[S.RSAA]={types:[k.b+k.c,{type:k.b+k.d,payload:function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){B(o,r,a,i,c,"next",e)}function c(e){B(o,r,a,i,c,"throw",e)}i(void 0)})}}(regeneratorRuntime.mark(function e(t,n,r){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.text();case 2:return a=e.sent,o=M.xml2js(a).rss.channel,e.abrupt("return",{rss:o});case 5:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()},k.b+k.a],method:"GET",headers:{"Content-Type":"text/xml"},endpoint:"https://hidden-coast-36070.herokuapp.com:443/https://medium.com/feed/"+e},t}})(Y),z=(n(130),n(45)),K=n.n(z),Q=n(87),V=n.n(Q);function X(){var e=te(["\n  position: relative;\n"]);return X=function(){return e},e}function Z(){var e=te(["\n  min-height: 50px;\n  padding-bottom: 1em;\n"]);return Z=function(){return e},e}function $(){var e=te(["\n  position: absolute;\n  bottom: 0;\n  right: 1em;\n  text-decoration: underline;\n  padding-top: 1em;\n"]);return $=function(){return e},e}function ee(){var e=te(["\n  text-align: left;\n  margin-bottom: 2em;\n  \n  img {\n    max-width: 100%;\n  }\n  \n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  \n  p {\n    margin-top: 0;\n  }\n"]);return ee=function(){return e},e}function te(e,t){return t||(t=e.slice(0)),e.raw=t,e}var ne=o.a.article(ee()),re=Object(o.a)(b.a)($()),ae=Object(o.a)(b.a)(Z()),oe=Object(o.a)(K.a)(X()),ie=function(e){var t,n,r=e.title,o=e.pubDate,i=e.description,c=(e.creator,e.link),u=e.encoded,l=(new DOMParser).parseFromString(i||u,"text/html"),s=null===(t=l.getElementsByTagName("img")[0])||void 0===t?void 0:t.src.replace(/max\/\d*/,"max/336"),m=null===(n=l.getElementsByTagName("p")[1])||void 0===n?void 0:n.innerHTML,p=!/^https:\/\/medium\.com\//.test(s);return a.a.createElement(ne,null,a.a.createElement(K.a,{container:!0,spacing:16},a.a.createElement(V.a,{smUp:!0},a.a.createElement(K.a,{item:!0,xs:12},a.a.createElement(b.a,{variant:"title",gutterBottom:!0},a.a.createElement("a",{href:c},r)))),p&&a.a.createElement(K.a,{item:!0,xs:12,sm:6},a.a.createElement("a",{href:c},a.a.createElement("img",{src:s,alt:r}))),a.a.createElement(oe,{item:!0,xs:12,sm:p?6:12},a.a.createElement(V.a,{xsDown:!0},a.a.createElement(b.a,{variant:"title",gutterBottom:!0},a.a.createElement("a",{href:c},r))),a.a.createElement(b.a,{variant:"caption",gutterBottom:!0},o),a.a.createElement(ae,{gutterBottom:!0,dangerouslySetInnerHTML:{__html:m}}),a.a.createElement(re,{align:"right",variant:"button"},a.a.createElement("a",{href:c},"Check it on medium >")))))};function ce(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  text-align: center;\n  transition: all 0.5s ease-in-out;\n  transform: translateY(",");\n  opacity: ",";\n  min-height: ",";\n"]);return ce=function(){return e},e}function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var le=function(e){return e.articles.map(function(e){return a.a.createElement(ie,ue({key:e.guid},e))})},se=o.a.section(ce(),function(e){return e.loaded?0:"-100px"},function(e){return e.loaded?1:.01},function(e){return e.loaded?100*e.children.props.articles.length+"px":0}),me=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e=this.props.articles,t=!!e;return a.a.createElement(se,{loaded:t},t&&a.a.createElement(le,{articles:e}))},t}(r.Component),pe=Object(m.connect)(function(e){return{articles:A(e)}},null)(me);function de(){var e=he(["\n  padding: 0 1em 1em 1em;\n  min-height: 152px;\n"]);return de=function(){return e},e}function fe(){var e=he(["\n  width: auto;\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1em;\n"]);return fe=function(){return e},e}function he(e,t){return t||(t=e.slice(0)),e.raw=t,e}var ve=o.a.div(fe()),ge=Object(o.a)(s.a)(de()),Ee=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){this.props.location;return a.a.createElement(ve,null,a.a.createElement(u.a,null),a.a.createElement(ge,null,a.a.createElement(q,null),a.a.createElement(pe,null)))},t}(r.Component);t.a=Object(i.a)(Ee)},152:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(19),i=n(28),c=(n(162),n(164),n(137)),u=n(150),l=Object(u.a)();Object(o.render)(a.a.createElement(i.Provider,{store:l},a.a.createElement(c.a,null)),document.getElementById("root"))},16:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var r="_START",a="_SUCCESS",o="_FAIL",i="SEARCH_ON_MEDIUM"},44:function(e,t,n){"use strict";n.r(t);var r=n(24),a=(n(368),{status:null}),o=(n(130),n(16)),i={status:null,result:null,isFetching:!1,isError:!1};t.default=Object(r.combineReducers)({app:function(e,t){void 0===e&&(e=a);t.type,t.payload,t.response,t.error;return e},search:function(e,t){void 0===e&&(e=i);var n=t.type,r=t.payload;t.response,t.error;switch(n){case o.b+o.c:return Object.assign({},e,{isFetching:!0});case o.b+o.a:return Object.assign({},i,{isFetching:!1,isError:!0});case o.b+o.d:return Object.assign({},e,{result:r.rss,isFetching:!1});default:return e}}})}},[[152,3,2,1]]]);