(self.webpackChunk=self.webpackChunk||[]).push([[200],{56114:function(_,a,e){"use strict";e.r(a),e.d(a,{default:function(){return h}});var d=e(42122),o=e.n(d),r=e(70215),n=e.n(r),i=e(27424),c=e.n(i),l=e(62435),u=e(86074),f=["carouselItems"];function s(t){var m=l.useState(0),v=c()(m,2),b=v[0],P=v[1],p={carousel:{position:"relative"},carouselItem:{position:"absolute",visibility:"hidden"},visible:{visibility:"visible"}};l.useEffect(function(){setTimeout(function(){var E=t.carouselItems;P((b+1)%E.length)},1e3)});var y=t.carouselItems,j=n()(t,f);return(0,u.jsx)("div",{style:p.carousel,children:y.map(function(E,O){var C=b===O?p.visible:{};return l.cloneElement(E,o()(o()({},j),{},{style:o()(o()({},p.carouselItem),C),key:O}))})})}function h(){return(0,u.jsx)(s,{carouselItems:[(0,u.jsx)("div",{children:"carousel item 1"},"item1"),(0,u.jsx)("div",{children:"carousel item 2"},"item2"),(0,u.jsx)("div",{children:"carousel item 3"},"item3")]})}},52841:function(_,a,e){"use strict";var d;var o=e(62435),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,s,h){var t,m={},v=null,b=null;h!==void 0&&(v=""+h),s.key!==void 0&&(v=""+s.key),s.ref!==void 0&&(b=s.ref);for(t in s)i.call(s,t)&&!l.hasOwnProperty(t)&&(m[t]=s[t]);if(f&&f.defaultProps)for(t in s=f.defaultProps,s)m[t]===void 0&&(m[t]=s[t]);return{$$typeof:r,type:f,key:v,ref:b,props:m,_owner:c.current}}d=n,a.jsx=u,a.jsxs=u},86074:function(_,a,e){"use strict";_.exports=e(52841)},70215:function(_,a,e){var d=e(7071);function o(r,n){if(r==null)return{};var i=d(r,n),c,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(l=0;l<u.length;l++)c=u[l],!(n.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(i[c]=r[c])}return i}_.exports=o,_.exports.__esModule=!0,_.exports.default=_.exports},7071:function(_){function a(e,d){if(e==null)return{};var o={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(d.indexOf(n)>=0)&&(o[n]=e[n]);return o}_.exports=a,_.exports.__esModule=!0,_.exports.default=_.exports}}]);
