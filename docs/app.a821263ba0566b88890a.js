(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,n){"use strict";(function(e){var r=n(0),a=n.n(r),i=n(140),o=n(373),c=n(15),u=n(153);function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]);return l=function(){return e},e}Object(c.b)(l());var s=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){return a.a.createElement(o.a,null,a.a.createElement(u.a,null))},t}(r.Component);t.a=Object(i.hot)(e)(s)}).call(this,n(93)(e))},152:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(24),a=n(62),i=n(45);function o(t){var o=Object(r.compose)(Object(r.applyMiddleware)(a.apiMiddleware),window.devToolsExtension?window.devToolsExtension():function(e){return e})(r.createStore)(i.default,t);return e.hot.accept(45,function(e){i=n(45),function(){var e=n(45);o.replaceReducer(e)}()}),o}},153:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(15),o=n(86),c=n(151),u=n.n(c),l=(n(68),n(200),n(30)),s=n(145),d=n.n(s),p=n(146),m=n.n(p),f=n(147),h=n.n(f),v=n(21),g=n.n(v),b=n(148),y=n.n(b),E=n(149),w=n.n(E),x=n(46),O=n.n(x);n(201),n(218);var j=n(62),_=n(144),S=n.n(_),M=n(17);function C(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}var T=new S.a,k=(n(219),n(64)),R=function(e){return e.search},P=Object(k.createSelector)(R,function(e){var t;return null===(t=e.result)||void 0===t?void 0:t.item}),A=Object(k.createSelector)(R,function(e){return e.isFetching}),B=Object(k.createSelector)(R,function(e){var t,n,r,a;return{title:null===(t=e.result)||void 0===t?void 0:t.title,desc:null===(n=e.result)||void 0===n?void 0:n.description,link:null===(r=e.result)||void 0===r?void 0:r.link[0],image:null===(a=e.result)||void 0===a?void 0:a.image.url}});function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(){var e=U(["\n  text-align: right;\n  a {\n    text-decoration: underline;\n  }\n"]);return N=function(){return e},e}function L(){var e=U(["\n  text-align: center;\n  padding: 0 1em 1em 1em;\n  min-height: 152px;\n  margin-bottom: 12px;\n  box-shadow: 0px 6px 12px 2px rgba(0,0,0,0.15) !important;\n"]);return L=function(){return e},e}function I(){var e=U(["\n  font-size: calc(1rem + 3vw) !important;\n"]);return I=function(){return e},e}function W(){var e=U(["\n  //min-height: 83px;\n"]);return W=function(){return e},e}function H(){var e=U(["\n  margin-bottom: 1em;\n  text-align: center;\n"]);return H=function(){return e},e}function U(e,t){return t||(t=e.slice(0)),e.raw=t,e}i.a.div(H());var K=i.a.div(W()),J={marginBottom:"1.5em"},X=Object(i.a)(g.a)(I()),z=Object(i.a)(O.a)(L()),G=Object(i.a)(g.a)(N()),V=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return D(F(F(t=e.call.apply(e,[this].concat(r))||this)),"state",{timer:null,name:""}),D(F(F(t)),"getSearch",function(e,t){var n;return function(){clearTimeout(n),n=setTimeout(e,t)}}(function(){var e=t.props.searchOnMedium;""!==t.state.name&&(t.input.blur()||e(t.state.name))},2e3)),D(F(F(t)),"handleChange",function(e){return function(n){var r,a=n.currentTarget.value;t.setState(((r={})[e]=a,r))}}),D(F(F(t)),"handleClick",function(){t.getSearch()}),D(F(F(t)),"handleKeyDown",function(e){"Enter"===e.key&&t.getSearch()}),D(F(F(t)),"getRef",function(e){t.input=e}),t}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e=this.props,t=e.channel,n=e.isSearching,r=e.isLoaded;return a.a.createElement(z,null,a.a.createElement(G,{variant:"subheading"},a.a.createElement("a",{href:"https://github.com/Leerat/medium_rss_viewer"},"View source >")),a.a.createElement(d.a,{id:"name",label:"User account or feed",value:this.state.name,onChange:this.handleChange("name"),fullWidth:!0,margin:"normal",style:J,inputRef:this.getRef,onKeyDown:this.handleKeyDown,InputProps:{endAdornment:a.a.createElement(m.a,{position:"end"},a.a.createElement(h.a,{onClick:this.handleClick},a.a.createElement(y.a,null)))}}),a.a.createElement(K,null,!r&&!n&&a.a.createElement(X,{variant:"display1",gutterBottom:!0},"There is nothing yet"),n?a.a.createElement(w.a,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(X,{variant:"display1"},a.a.createElement("a",{href:t.link},t.title)),a.a.createElement(g.a,{variant:"subheading"},t.desc))))},t}(r.Component),Y=Object(l.connect)(function(e){return{isSearching:A(e),channel:B(e),isLoaded:!!B(e).title}},{searchOnMedium:function(e){var t;return(t={})[j.RSAA]={types:[M.b+M.c,{type:M.b+M.d,payload:function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){C(i,r,a,o,c,"next",e)}function c(e){C(i,r,a,o,c,"throw",e)}o(void 0)})}}(regeneratorRuntime.mark(function e(t,n,r){var a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.text();case 2:return a=e.sent,i=T.xml2js(a).rss.channel,e.abrupt("return",{rss:i});case 5:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()},M.b+M.a],method:"GET",headers:{"Content-Type":"text/xml"},endpoint:"https://hidden-coast-36070.herokuapp.com:443/https://medium.com/feed/"+e},t}})(V),q=(n(132),n(355),n(150)),Q=n.n(q),Z=(n(358),n(47)),$=n.n(Z),ee=n(88),te=n.n(ee);function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(){var e=le(["\n  padding: 1em;\n  box-shadow: 0px 6px 12px 2px rgba(0,0,0,0.15) !important;\n"]);return ae=function(){return e},e}function ie(){var e=le(["\n  text-align: left;\n  ","\n  \n  ","\n  \n  ","\n  \n  img {\n    max-width: 100%;\n  }\n  \n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  \n  p {\n    margin-top: 0;\n  }\n"]);return ie=function(){return e},e}function oe(){var e=le(["\n  position: relative;\n"]);return oe=function(){return e},e}function ce(){var e=le(["\n  min-height: 50px;\n  padding-bottom: 1em;\n"]);return ce=function(){return e},e}function ue(){var e=le(["\n  position: absolute;\n  bottom: 0;\n  right: 1em;\n  text-decoration: underline;\n  padding-top: 1em;\n"]);return ue=function(){return e},e}function le(e,t){return t||(t=e.slice(0)),e.raw=t,e}var se=Object(i.a)(g.a)(ue()),de=Object(i.a)(g.a)(ce()),pe=Object(i.a)($.a)(oe()),me=i.a.article(ie(),function(e){return e.isMobile&&"\n    float: left;\n    position: relative;\n    padding: 1em 3em;\n  "},function(e){var t;return e.isPrev&&"\n    transform: translateX(calc("+-1*(null===(t=e.el)||void 0===t?void 0:t.clientWidth)+"px + 4em)) !important;\n  "},function(e){var t;return e.isNext&&"\n    transform: translateX(calc("+(null===(t=e.el)||void 0===t?void 0:t.clientWidth)+"px - 4em)) !important;\n  "}),fe=Object(i.a)(O.a)(ae()),he=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return re(ne(ne(t=e.call.apply(e,[this].concat(r))||this)),"state",{width:null}),re(ne(ne(t)),"otm",function(e){var t=e.currentTarget.style.transform,n=t.match(/-?\d+/)[0],r=" rotate("+Math.round(.1*n/2)+"deg)";e.currentTarget.style.transform=t+r}),re(ne(ne(t)),"getRef",function(e){t.slide=e,t.setState({width:e.clientWidth})}),t}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e,t,n=this.props,r=n.title,i=n.pubDate,o=n.description,c=(n.creator,n.link),u=n.encoded,l=n.isMobile,s=n.isPrev,d=n.isNext,p=(new DOMParser).parseFromString(o||u,"text/html"),m=null===(e=p.getElementsByTagName("img")[0])||void 0===e?void 0:e.src.replace(/max\/\d*/,"max/400"),f=null===(t=p.getElementsByTagName("p")[1])||void 0===t?void 0:t.innerHTML,h=!/^https:\/\/medium\.com\//.test(m);return a.a.createElement(me,{isMobile:l,onTouchMove:this.otm,isPrev:s,isNext:d,innerRef:this.getRef,el:this.slide,widht:this.state.width},a.a.createElement(fe,null,a.a.createElement($.a,{container:!0,spacing:16},a.a.createElement(te.a,{smUp:!0},a.a.createElement($.a,{item:!0,xs:12},a.a.createElement(g.a,{variant:"title",gutterBottom:!0},a.a.createElement("a",{href:c},r)))),h&&a.a.createElement($.a,{item:!0,xs:12,sm:6},a.a.createElement("a",{href:c},a.a.createElement("img",{src:m,alt:r}))),a.a.createElement(pe,{item:!0,xs:12,sm:h?6:12},a.a.createElement(te.a,{xsDown:!0},a.a.createElement(g.a,{variant:"title",gutterBottom:!0},a.a.createElement("a",{href:c},r))),a.a.createElement(g.a,{variant:"caption",gutterBottom:!0},i),a.a.createElement(de,{gutterBottom:!0,dangerouslySetInnerHTML:{__html:f}}),a.a.createElement(se,{align:"right",variant:"button"},a.a.createElement("a",{href:c},"Check it on medium >"))))))},t}(r.Component);function ve(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  text-align: center;\n  transition: all 0.5s ease-in-out;\n  transform: translateY(",");\n  opacity: ",";\n  min-height: ",";\n"]);return be=function(){return e},e}function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ee=function(e){var t=e.articles,n=e.isMobile,r=e.currentSlide;return t.map(function(e,t){return a.a.createElement(he,ye({},e,{isMobile:n,key:e.guid.toString(),isPrev:t===r-1,isNext:t===r+1}))})},we=i.a.section(be(),function(e){return e.loaded?0:"-100px"},function(e){return e.loaded?1:.01},function(e){return e.loaded?document.body.clientHeight-171+"px":0}),xe=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return ge(ve(ve(t=e.call.apply(e,[this].concat(r))||this)),"state",{currentSlide:0}),ge(ve(ve(t)),"getCurrentSlide",function(e){t.setState({currentSlide:e})}),t}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e=this.props.articles,t=this.state.currentSlide,n=!!e,r=document.body.clientWidth<800;return a.a.createElement(we,{loaded:n,isMobile:r},n&&(r?a.a.createElement("div",null,a.a.createElement(Q.a,{key:null===e||void 0===e?void 0:e.length,swipeOptions:function(e){return{continuous:!1,callback:e}}(this.getCurrentSlide)},a.a.createElement(Ee,{articles:e,isMobile:r,currentSlide:t}))):a.a.createElement(Ee,{articles:e,isMobile:r})))},t}(r.Component),Oe=Object(l.connect)(function(e){return{articles:P(e)}},null)(xe);function je(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  width: auto;\n  max-width: 720px;\n  margin: 0 auto;\n  padding-bottom: 1em;\n"]);return je=function(){return e},e}var _e=i.a.div(je()),Se=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){return a.a.createElement(_e,null,a.a.createElement(u.a,null),a.a.createElement(Y,null),a.a.createElement(Oe,null))},t}(r.Component);t.a=Object(o.a)(Se)},154:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(19),o=n(30),c=(n(164),n(166),n(139)),u=n(152),l=Object(u.a)();Object(i.render)(a.a.createElement(o.Provider,{store:l},a.a.createElement(c.a,null)),document.getElementById("root"))},17:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var r="_START",a="_SUCCESS",i="_FAIL",o="SEARCH_ON_MEDIUM"},45:function(e,t,n){"use strict";n.r(t);var r=n(24),a=(n(372),{status:null}),i=(n(132),n(17)),o={status:null,result:null,isFetching:!1};t.default=Object(r.combineReducers)({app:function(e,t){void 0===e&&(e=a);t.type,t.payload,t.response,t.error;return e},search:function(e,t){void 0===e&&(e=o);var n=t.type,r=t.payload;t.response,t.error;switch(n){case i.b+i.c:return Object.assign({},e,{isFetching:!0});case i.b+i.a:return Object.assign({},o,{isFetching:!1});case i.b+i.d:return Object.assign({},e,{result:r.rss,isFetching:!1});default:return e}}})}},[[154,3,2,1]]]);