(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,n){"use strict";(function(e){var r=n(0),a=n.n(r),i=n(140),o=n(373),c=n(16),u=n(153);function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]);return l=function(){return e},e}Object(c.b)(l());var s=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){return a.a.createElement(o.a,null,a.a.createElement(u.a,null))},t}(r.Component);t.a=Object(i.hot)(e)(s)}).call(this,n(93)(e))},152:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(24),a=n(62),i=n(45);function o(t){var o=Object(r.compose)(Object(r.applyMiddleware)(a.apiMiddleware),window.devToolsExtension?window.devToolsExtension():function(e){return e})(r.createStore)(i.default,t);return e.hot.accept(45,function(e){i=n(45),function(){var e=n(45);o.replaceReducer(e)}()}),o}},153:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(16),o=n(86),c=n(151),u=n.n(c),l=(n(68),n(200),n(30)),s=n(145),p=n.n(s),d=n(146),m=n.n(d),f=n(147),h=n.n(f),v=n(22),g=n.n(v),b=n(148),y=n.n(b),E=n(149),w=n.n(E),x=n(46),O=n.n(x);n(201),n(218);var j=n(62),S=n(144),_=n.n(S),M=n(17);function C(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}var T=new _.a,k=(n(219),n(64)),R=function(e){return e.search},P=Object(k.createSelector)(R,function(e){var t;return null===(t=e.result)||void 0===t?void 0:t.item}),A=Object(k.createSelector)(R,function(e){return e.isFetching}),B=Object(k.createSelector)(R,function(e){var t,n,r,a;return{title:null===(t=e.result)||void 0===t?void 0:t.title,desc:null===(n=e.result)||void 0===n?void 0:n.description,link:null===(r=e.result)||void 0===r?void 0:r.link[0],image:null===(a=e.result)||void 0===a?void 0:a.image.url}});function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(){var e=H(["\n  text-align: center;\n  padding: 0 1em 1em 1em;\n  min-height: 152px;\n  margin-bottom: 12px;\n  box-shadow: 0px 6px 12px 2px rgba(0,0,0,0.15) !important;\n"]);return N=function(){return e},e}function I(){var e=H(["\n  font-size: calc(1rem + 3vw) !important;\n"]);return I=function(){return e},e}function L(){var e=H(["\n  //min-height: 83px;\n"]);return L=function(){return e},e}function W(){var e=H(["\n  margin-bottom: 1em;\n  text-align: center;\n"]);return W=function(){return e},e}function H(e,t){return t||(t=e.slice(0)),e.raw=t,e}i.a.div(W());var U=i.a.div(L()),K={marginBottom:"1.5em"},J=Object(i.a)(g.a)(I()),X=Object(i.a)(O.a)(N()),z=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return D(F(F(t=e.call.apply(e,[this].concat(r))||this)),"state",{timer:null,name:""}),D(F(F(t)),"getSearch",function(e,t){var n;return function(){clearTimeout(n),n=setTimeout(e,t)}}(function(){var e=t.props.searchOnMedium;""!==t.state.name&&(t.input.blur()||e(t.state.name))},2e3)),D(F(F(t)),"handleChange",function(e){return function(n){var r,a=n.currentTarget.value;t.setState(((r={})[e]=a,r))}}),D(F(F(t)),"handleClick",function(){t.getSearch()}),D(F(F(t)),"handleKeyDown",function(e){"Enter"===e.key&&t.getSearch()}),D(F(F(t)),"getRef",function(e){t.input=e}),t}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e=this.props,t=e.channel,n=e.isSearching,r=e.isLoaded;return a.a.createElement(X,null,a.a.createElement(p.a,{id:"name",label:"User account or feed",value:this.state.name,onChange:this.handleChange("name"),fullWidth:!0,margin:"normal",style:K,inputRef:this.getRef,onKeyDown:this.handleKeyDown,InputProps:{endAdornment:a.a.createElement(m.a,{position:"end"},a.a.createElement(h.a,{onClick:this.handleClick},a.a.createElement(y.a,null)))}}),a.a.createElement(U,null,!r&&!n&&a.a.createElement(J,{variant:"display1",gutterBottom:!0},"There is nothing yet"),n?a.a.createElement(w.a,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(J,{variant:"display1"},a.a.createElement("a",{href:t.link},t.title)),a.a.createElement(g.a,{variant:"subheading"},t.desc))))},t}(r.Component),G=Object(l.connect)(function(e){return{isSearching:A(e),channel:B(e),isLoaded:!!B(e).title}},{searchOnMedium:function(e){var t;return(t={})[j.RSAA]={types:[M.b+M.c,{type:M.b+M.d,payload:function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){C(i,r,a,o,c,"next",e)}function c(e){C(i,r,a,o,c,"throw",e)}o(void 0)})}}(regeneratorRuntime.mark(function e(t,n,r){var a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.text();case 2:return a=e.sent,i=T.xml2js(a).rss.channel,e.abrupt("return",{rss:i});case 5:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()},M.b+M.a],method:"GET",headers:{"Content-Type":"text/xml"},endpoint:"https://hidden-coast-36070.herokuapp.com:443/https://medium.com/feed/"+e},t}})(z),Y=(n(132),n(355),n(150)),q=n.n(Y),Q=(n(358),n(47)),V=n.n(Q),Z=n(88),$=n.n(Z);function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(){var e=ce(["\n  padding: 1em;\n  box-shadow: 0px 6px 12px 2px rgba(0,0,0,0.15) !important;\n"]);return ne=function(){return e},e}function re(){var e=ce(["\n  text-align: left;\n  ","\n  \n  ","\n  \n  ","\n  \n  img {\n    max-width: 100%;\n  }\n  \n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  \n  p {\n    margin-top: 0;\n  }\n"]);return re=function(){return e},e}function ae(){var e=ce(["\n  position: relative;\n"]);return ae=function(){return e},e}function ie(){var e=ce(["\n  min-height: 50px;\n  padding-bottom: 1em;\n"]);return ie=function(){return e},e}function oe(){var e=ce(["\n  position: absolute;\n  bottom: 0;\n  right: 1em;\n  text-decoration: underline;\n  padding-top: 1em;\n"]);return oe=function(){return e},e}function ce(e,t){return t||(t=e.slice(0)),e.raw=t,e}var ue=Object(i.a)(g.a)(oe()),le=Object(i.a)(g.a)(ie()),se=Object(i.a)(V.a)(ae()),pe=i.a.article(re(),function(e){return e.isMobile&&"\n    float: left;\n    position: relative;\n    padding: 1em 3em;\n  "},function(e){var t;return e.isPrev&&"\n    transform: translateX(calc("+-1*(null===(t=e.el)||void 0===t?void 0:t.clientWidth)+"px + 4em)) !important;\n  "},function(e){var t;return e.isNext&&"\n    transform: translateX(calc("+(null===(t=e.el)||void 0===t?void 0:t.clientWidth)+"px - 4em)) !important;\n  "}),de=Object(i.a)(O.a)(ne()),me=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return te(ee(ee(t=e.call.apply(e,[this].concat(r))||this)),"state",{width:null}),te(ee(ee(t)),"ots",function(e){var t=e.currentTarget.style.transform,n=t.match(/-?\d+/)[0],r=" rotate("+Math.round(.1*n/2)+"deg)";e.currentTarget.style.transform=t+r}),te(ee(ee(t)),"getRef",function(e){t.slide=e,t.setState({width:e.clientWidth})}),t}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e,t,n=this.props,r=n.title,i=n.pubDate,o=n.description,c=(n.creator,n.link),u=n.encoded,l=n.isMobile,s=n.isPrev,p=n.isNext,d=(new DOMParser).parseFromString(o||u,"text/html"),m=null===(e=d.getElementsByTagName("img")[0])||void 0===e?void 0:e.src.replace(/max\/\d*/,"max/400"),f=null===(t=d.getElementsByTagName("p")[1])||void 0===t?void 0:t.innerHTML,h=!/^https:\/\/medium\.com\//.test(m);return a.a.createElement(pe,{isMobile:l,onTouchMove:this.ots,isPrev:s,isNext:p,innerRef:this.getRef,el:this.slide,widht:this.state.width},a.a.createElement(de,null,a.a.createElement(V.a,{container:!0,spacing:16},a.a.createElement($.a,{smUp:!0},a.a.createElement(V.a,{item:!0,xs:12},a.a.createElement(g.a,{variant:"title",gutterBottom:!0},a.a.createElement("a",{href:c},r)))),h&&a.a.createElement(V.a,{item:!0,xs:12,sm:6},a.a.createElement("a",{href:c},a.a.createElement("img",{src:m,alt:r}))),a.a.createElement(se,{item:!0,xs:12,sm:h?6:12},a.a.createElement($.a,{xsDown:!0},a.a.createElement(g.a,{variant:"title",gutterBottom:!0},a.a.createElement("a",{href:c},r))),a.a.createElement(g.a,{variant:"caption",gutterBottom:!0},i),a.a.createElement(le,{gutterBottom:!0,dangerouslySetInnerHTML:{__html:f}}),a.a.createElement(ue,{align:"right",variant:"button"},a.a.createElement("a",{href:c},"Check it on medium >"))))))},t}(r.Component);function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  text-align: center;\n  transition: all 0.5s ease-in-out;\n  transform: translateY(",");\n  opacity: ",";\n  min-height: ",";\n"]);return ve=function(){return e},e}function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var be=function(e){var t=e.articles,n=e.isMobile,r=e.currentSlide;return t.map(function(e,t){return a.a.createElement(me,ge({},e,{isMobile:n,key:e.guid.toString(),isPrev:t===r-1,isNext:t===r+1}))})},ye=i.a.section(ve(),function(e){return e.loaded?0:"-100px"},function(e){return e.loaded?1:.01},function(e){return e.loaded?document.body.clientHeight-171+"px":0}),Ee=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return he(fe(fe(t=e.call.apply(e,[this].concat(r))||this)),"state",{currentSlide:0}),he(fe(fe(t)),"getCurrentSlide",function(e){t.setState({currentSlide:e})}),t}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e=this.props.articles,t=this.state.currentSlide,n=!!e,r=document.body.clientWidth<800;return a.a.createElement(ye,{loaded:n,isMobile:r},n&&(r?a.a.createElement("div",null,a.a.createElement(q.a,{key:null===e||void 0===e?void 0:e.length,swipeOptions:function(e){return{continuous:!1,callback:e}}(this.getCurrentSlide)},a.a.createElement(be,{articles:e,isMobile:r,currentSlide:t}))):a.a.createElement(be,{articles:e,isMobile:r})))},t}(r.Component),we=Object(l.connect)(function(e){return{articles:P(e)}},null)(Ee);function xe(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  width: auto;\n  max-width: 720px;\n  margin: 0 auto;\n  //padding: 1em;\n"]);return xe=function(){return e},e}var Oe=i.a.div(xe()),je=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){return a.a.createElement(Oe,null,a.a.createElement(u.a,null),a.a.createElement(G,null),a.a.createElement(we,null))},t}(r.Component);t.a=Object(o.a)(je)},154:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(19),o=n(30),c=(n(164),n(166),n(139)),u=n(152),l=Object(u.a)();Object(i.render)(a.a.createElement(o.Provider,{store:l},a.a.createElement(c.a,null)),document.getElementById("root"))},17:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var r="_START",a="_SUCCESS",i="_FAIL",o="SEARCH_ON_MEDIUM"},45:function(e,t,n){"use strict";n.r(t);var r=n(24),a=(n(372),{status:null}),i=(n(132),n(17)),o={status:null,result:null,isFetching:!1,isError:!1};t.default=Object(r.combineReducers)({app:function(e,t){void 0===e&&(e=a);t.type,t.payload,t.response,t.error;return e},search:function(e,t){void 0===e&&(e=o);var n=t.type,r=t.payload;t.response,t.error;switch(n){case i.b+i.c:return Object.assign({},e,{isFetching:!0});case i.b+i.a:return Object.assign({},o,{isFetching:!1,isError:!0});case i.b+i.d:return Object.assign({},e,{result:r.rss,isFetching:!1});default:return e}}})}},[[154,3,2,1]]]);