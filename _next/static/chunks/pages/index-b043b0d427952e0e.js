(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},2717:function(e,t,r){"use strict";var n=r(930);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(o=r(1585))&&o.__esModule?o:{default:o},c=r(8e3),d=r(5850),l=r(5646);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,d=f.length;c<d;c++){var l=f[c];if(a.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?o=!1:r.add(l);else{var u=a.props[l],p=n[l]||new Set;"name"===l&&i||!p.has(u)?(p.add(u),n[l]=p):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}var m=function(e){var t=e.children,r=i.useContext(c.AmpStateContext),n=i.useContext(d.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:l.isInAmpMode(r)},t)};t.default=m},1585:function(e,t,r){"use strict";var n=r(7980),a=r(3227),o=r(8361),i=(r(2191),r(5971)),s=r(2715),c=r(1193);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var u=function(e){i(r,e);var t=d(r);function r(e){var o;return a(this,r),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=u},8482:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=[{name:"NFT Marketplace",description:"An NFT Marketplace for the Polygon network. Built with smart contracts and NextJS.",link:"",tags:["blockchain","nextJS","React","tailwindcss"]},{name:"Recipe app",description:"A showcase of API usage to find recipes.",link:"",tags:["API","nextJS","React","tailwindcss"]},{name:"Drum app",description:"A simple drum machine in React with claymorphism design principles.",link:"",tags:["HTML","CSS","Javascript","React"]},{name:"Project title",description:"",link:"",tags:["HTML","CSS","Javascript","React"]},{name:"Project title",description:"",link:"",tags:["HTML","CSS","Javascript","React"]},{name:"Project title",description:"",link:"",tags:["HTML","CSS","Javascript","React"]}],a=r(9008),o=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/public",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return t?"https://cdn.statically.io/img/ervandenbosch.github.io/h="+n+"/"+r+"/"+e:"https://cdn.statically.io/img/ervandenbosch.github.io/f=auto/"+r+"/"+e},i=r(9470),s=r.n(i),c=r(4803),d=r.n(c),l=r(5893);function u(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.default,{children:(0,l.jsx)("title",{children:"Ezra van den Bosch Portfolio "})}),(0,l.jsx)("div",{className:"homepage",children:(0,l.jsx)("main",{children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col",children:(0,l.jsxs)(s(),{left:!0,children:[(0,l.jsxs)("div",{className:"profile-image",children:[(0,l.jsxs)("h1",{children:["Hi,",(0,l.jsx)("br",{}),"I am Ezra"]}),(0,l.jsx)("img",{src:o("photo.png",!1,"")})]}),(0,l.jsx)("p",{className:"info",children:"I am an aspiring front-end developer with a preference for simple design, aesthetics while using the latest technologies."}),(0,l.jsxs)("p",{className:"icons",children:[(0,l.jsx)(d(),{delay:1e3,children:(0,l.jsx)("a",{href:"https://github.com/ervandenbosch",children:(0,l.jsx)("i",{className:"fa fa-github","aria-hidden":"true"})})}),(0,l.jsx)(d(),{delay:1e3,children:(0,l.jsx)("a",{href:"https://www.linkedin.com/in/ezravandenbosch/",children:(0,l.jsx)("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})})}),(0,l.jsx)(d(),{delay:1e3,children:(0,l.jsx)("a",{href:"mailto:ezravdb@gmail.com",children:(0,l.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"})})})]})]})}),(0,l.jsxs)("div",{className:"col",children:[(0,l.jsx)("h2",{children:"Projects"}),(0,l.jsx)("div",{className:"projects",children:n.map((function(e){return(0,l.jsx)(s(),{bottom:!0,children:(0,l.jsx)("a",{href:e.repo,className:"card",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"name",children:e.name}),(0,l.jsx)("div",{className:"info",children:e.description}),e.tags.map((function(e){return(0,l.jsx)("div",{className:"tag",children:e},e)}))]})})},e.name)}))})]})]})})})})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8482)}])},9008:function(e,t,r){e.exports=r(2717)},9470:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){var r=t.distance,n=t.left,a=t.right,o=t.up,i=t.down,s=t.top,d=t.bottom,l=t.big,u=t.mirror,f=t.opposite,h=(r?r.toString():0)+((n?1:0)|(a?2:0)|(s||i?4:0)|(d||o?8:0)|(u?16:0)|(f?32:0)|(e?64:0)|(l?128:0));if(p.hasOwnProperty(h))return p[h];var m=n||a||o||i||s||d,v=void 0,y=void 0;if(m){if(!u!=!(e&&f)){var g=[a,n,d,s,i,o];n=g[0],a=g[1],s=g[2],d=g[3],o=g[4],i=g[5]}var b=r||(l?"2000px":"100%");v=n?"-"+b:a?b:"0",y=i||s?"-"+b:o||d?b:"0"}return p[h]=(0,c.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),p[h]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.children,o=(e.out,e.forever),i=e.timeout,s=e.duration,d=void 0===s?c.defaults.duration:s,u=e.delay,p=void 0===u?c.defaults.delay:u,f=e.count,h=void 0===f?c.defaults.count:f,m=n(e,["children","out","forever","timeout","duration","delay","count"]),v={make:a,duration:void 0===i?d:i,delay:p,forever:o,count:h,style:{animationFillMode:"both"},reverse:m.left};return t?(0,l.default)(m,v,v,r):v}Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(5697),c=r(1017),d=r(2580),l=(i=d)&&i.__esModule?i:{default:i},u={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},p={};o.propTypes=u,t.default=o,e.exports=t.default}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);