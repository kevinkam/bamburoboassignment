!function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],s=0,p=[];s<u.length;s++)i=u[s],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=l;a.push([380,0]),n()}({145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(10)),o=i(n(68)),a=i(n(106));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}function p(e){return(p=Object.getPrototypeOf||function(e){return e.__proto__})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  .mask {\n    content: "";\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n  }\n  .content {\n    position: absolute;\n    width: 500px;\n    height: 300px;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    background: #fff;\n    overflow-y: scroll;\n    .modal-title {\n      font-size: 18px;\n      color: #333;\n      margin: 0;\n      padding: 10px;\n      border-bottom: 1px #ddd solid;\n    }\n    .modal-body {\n      padding: 10px;\n      .field {\n        margin-bottom: 8px;\n        display: flex;\n        .label {\n          margin-right: 10px;\n        }\n      }\n    }\n  }\n']);return y=function(){return e},e}var v=o.default.div(y()),m=[{label:"Gender",value:"gender"},{label:"Height",value:"height",postfix:"cm"},{label:"Mass",value:"mass",postfix:"kg"},{label:"Birth Year",value:"birth_year"},{label:"Hair Color",value:"hair_color"},{label:"Eye Color",value:"eye_color"},{label:"Skin Color",value:"skin_color"},{label:"Films",value:"films"},{label:"Home World",value:"homeworld"},{label:"Species",value:"species"},{label:"Star Ships",value:"starships"},{label:"Vehicles",value:"vehicles"}],h=["films","homeworld","species","starships","vehicles"],g=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return s(r,(n=r=s(this,(e=p(t)).call.apply(e,[this].concat(i))),b(d(d(r)),"state",{data:{}}),b(d(d(r)),"getData",function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e,t){try{var n=a[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(u,l)}function u(e){i("next",e)}function l(e){i("throw",e)}u()})}}(regeneratorRuntime.mark(function e(){var t,n,o,i,u,c,f,s,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.data,n=[],h.forEach(function(e){var r=t[e];n=Array.isArray(r)?n.concat(Promise.all(r.map(function(e){return new Promise(function(t,n){try{a.default.get(e).then(function(e){t(e.data)})}catch(e){n(e)}})}))):n.concat(new Promise(function(e,t){try{a.default.get(r).then(function(t){e(t.data)})}catch(e){t(e)}}))}),e.next=5,Promise.all(n);case 5:o=e.sent,i=l(o,5),u=i[0],c=i[1],f=i[2],s=i[3],p=i[4],r.setState({data:Object.assign({},t,{films:u.map(function(e){return e.title}).join(", "),homeworld:c.name,species:f.map(function(e){return e.name}).join(", "),starships:s.map(function(e){return e.name}).join(", "),vehicles:p.map(function(e){return e.name}).join(", ")})});case 13:case"end":return e.stop()}},e,this)}))),n))}var n,o,i;return n=t,(o=[{key:"componentDidUpdate",value:function(e){var t=e.visible,n=this.props.visible;n!==t&&(n?this.getData():this.setState({data:{}}))}},{key:"render",value:function(){var e=this.state.data,t=this.props,n=t.visible,o=t.closeModal;return r.createElement(v,{style:{display:n?"block":"none"}},r.createElement("div",{className:"mask",onClick:o}),r.createElement("div",{className:"content"},r.createElement("h2",{className:"modal-title"},e.name),r.createElement("div",{className:"modal-body"},m.map(function(t){var n=t.label,o=t.value,a=t.postfix;return r.createElement("div",{className:"field",key:o},r.createElement("div",{className:"label"},n,":"),r.createElement("div",{className:"details"},e[o],a))}))))}}])&&f(n.prototype,o),i&&f(n,i),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");c(e.prototype,t&&t.prototype),t&&c(e,t)}(t,e),t}(r.PureComponent);t.default=g},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(10));function a(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  span,\n  button {\n    margin-right: 8px;\n  }\n  button {\n    border: 0;\n    cursor: pointer;\n    background-color: rgb(66, 133, 244);\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    color: #fff;\n    padding: 5px;\n    font-size: 12px;\n    outline: none;\n  }\n  button[disabled] {\n    opacity: 0.5;\n  }\n"]);return a=function(){return e},e}var i=((r=n(68))&&r.__esModule?r:{default:r}).default.div(a());t.default=function(e){var t=e.page,n=e.count,r=void 0===n?0:n,a=e.next,u=e.previous,l=e.goNextPage,c=e.goPrevPage;return o.createElement(i,null,o.createElement("span",null,"Page: ",t),o.createElement("button",{disabled:null===u,onClick:c},"Previous"),o.createElement("button",{disabled:null===a,onClick:l},"Next"),o.createElement("span",null,"Total: ",r))}},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(10)),o=u(n(106)),a=u(n(151)),i=u(n(145));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?b(e):t}function d(e){return(d=Object.getPrototypeOf||function(e){return e.__proto__})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  border-spacing: 0;\n  margin-bottom: 10px;\n  thead {\n    background: #666;\n    color: #fff;\n  }\n  td {\n    padding: 10px;\n  }\n  tbody {\n    tr:hover {\n      background: #ddd;\n    }\n    td {\n      border-bottom: 1px #666 solid;\n      button {\n        cursor: pointer;\n        border: 0;\n        padding: 8px;\n        background: #ffa500;\n        -webkit-border-radius: 3px;\n        -moz-border-radius: 3px;\n        border-radius: 3px;\n        color: #fff;\n      }\n    }\n  }\n"]);return v=function(){return e},e}var m=u(n(68)).default.table(v()),h=[{label:"Name",value:"name"},{label:"Gender",value:"gender"},{label:"Birth Year",value:"birth_year"}],g=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return p(r,(n=r=p(this,(e=d(t)).call.apply(e,[this].concat(i))),y(b(b(r)),"state",{isLoading:!0,page:1,data:{results:[]},modal:{visible:!1,data:{}}}),y(b(b(r)),"getData",function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e,t){try{var n=a[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(u,l)}function u(e){i("next",e)}function l(e){i("throw",e)}u()})}}(regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.state.page,e.next=3,o.default.get("https://swapi.co/api/people",{params:{page:t},timeout:12e4});case 3:n=e.sent,a=n.data,r.setState({data:a,isLoading:!1});case 6:case"end":return e.stop()}},e,this)}))),y(b(b(r)),"showModal",function(e){r.setState({modal:{visible:!0,data:e}})}),y(b(b(r)),"closeModal",function(){r.setState({modal:{visible:!1,data:{}}})}),y(b(b(r)),"nextPage",function(){r.setState(function(e){return{page:e.page+1}})}),y(b(b(r)),"prevPage",function(){r.setState(function(e){return{page:e.page-1}})}),n))}var n,u,l;return n=t,(u=[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var n=t.page;this.state.page!==n&&(this.setState({isLoading:!0}),this.getData())}},{key:"render",value:function(){var e=this,t=this.state,n=t.modal,o=t.page,u=t.isLoading,l=t.data,f=l.results,s=l.count,p=l.next,d=l.previous;return r.createElement(r.Fragment,null,u?"Loading":r.createElement(m,null,r.createElement("thead",null,r.createElement("tr",null,h.map(function(e){var t=e.label;return r.createElement("td",{key:t},t)}),r.createElement("td",null,"Details"))),r.createElement("tbody",null,f.map(function(t,n){return r.createElement("tr",{key:n},h.map(function(e){var n=e.value;return r.createElement("td",{key:n},t[n])}),r.createElement("td",null,r.createElement("button",{onClick:e.showModal.bind(null,t)},"Show")))}))),r.createElement(a.default,{page:o,count:s,next:p,previous:d,goNextPage:this.nextPage,goPrevPage:this.prevPage}),r.createElement(i.default,c({},n,{closeModal:this.closeModal})))}}])&&s(n.prototype,u),l&&s(n,l),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");f(e.prototype,t&&t.prototype),t&&f(e,t)}(t,e),t}(r.PureComponent);t.default=g},380:function(e,t,n){"use strict";n(379);var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(10)),o=i(n(178)),a=i(n(170));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,s(t).apply(this,arguments))}var n,o,i;return n=t,(o=[{key:"render",value:function(){return r.createElement(a.default,null)}}])&&c(n.prototype,o),i&&c(n,i),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");l(e.prototype,t&&t.prototype),t&&l(e,t)}(t,e),t}(r.PureComponent);o.default.render(r.createElement(p,null),document.getElementById("root"))}});