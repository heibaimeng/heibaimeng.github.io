"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[439],{85212:function(D,d,n){n.r(d),n.d(d,{default:function(){return y}});var _=n(27424),p=n.n(_),s=n(62435),o={filedrop:"filedrop___lHuEj",drag:"drag___j1FMz",ready:"ready___UOCbO"},l=n(86074);function m(g){var f=s.useState(!1),r=p()(f,2),c=r[0],a=r[1],i=s.useState(""),u=p()(i,2),v=u[0],S=u[1],E=s.createRef(),h=0,O=function(e){e.preventDefault(),e.stopPropagation()},T=function(e){e.preventDefault(),e.stopPropagation(),h++,e.dataTransfer.items&&e.dataTransfer.items.length>0&&a(!0)},L=function(e){e.preventDefault(),e.stopPropagation(),h--,h===0&&a(!1)},R=function(e){e.preventDefault(),e.stopPropagation(),a(!1),e.dataTransfer.files&&e.dataTransfer.files.length>0&&(g.handleDrop(e.dataTransfer.files[0]),S(e.dataTransfer.files[0].name),e.dataTransfer.clearData(),h=0)};return s.useEffect(function(){var t=E.current;return t.addEventListener("dragenter",T),t.addEventListener("dragleave",L),t.addEventListener("dragover",O),t.addEventListener("drop",R),function(){t.removeEventListener("dragenter",T),t.removeEventListener("dragleave",L),t.removeEventListener("dragover",O),t.removeEventListener("drop",R)}}),(0,l.jsx)("div",{ref:E,className:c?"".concat(o.filedrop," ").concat(o.drag):v?"".concat(o.filedrop," ").concat(o.ready):o.filedrop,children:v&&!c?(0,l.jsx)("div",{children:v}):(0,l.jsx)("div",{children:"Drop files here!"})})}function y(){return(0,l.jsx)(m,{handleDrop:console.log})}},52841:function(D,d,n){var _;var p=n(62435),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,m=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function g(f,r,c){var a,i={},u=null,v=null;c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),r.ref!==void 0&&(v=r.ref);for(a in r)l.call(r,a)&&!y.hasOwnProperty(a)&&(i[a]=r[a]);if(f&&f.defaultProps)for(a in r=f.defaultProps,r)i[a]===void 0&&(i[a]=r[a]);return{$$typeof:s,type:f,key:u,ref:v,props:i,_owner:m.current}}_=o,d.jsx=g,d.jsxs=g},86074:function(D,d,n){D.exports=n(52841)}}]);
