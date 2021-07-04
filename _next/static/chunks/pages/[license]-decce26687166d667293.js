(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[981],{3911:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return h}});var r=n(5893),i=(n(7294),n(6124)),s={useCommercially:{name:"Use Commercially",description:"use the software for commercial purposes."},distribute:{name:"Distribute",description:"distribute the software."},modify:{name:"Modify",description:"modify the software."},provideCopyright:{name:"Provide Copyright",description:"provide the copyright notice with the software."},provideLicense:{name:"Provide License",description:"provide the license with the software."},provideSource:{name:"Provide Source",description:"provide the source code of the software."},expectWarranty:{name:"Expect Warranty",description:"expect a warranty from the licensor."},sublicense:{name:"Sublicense",description:"sublicense the software."},holdLiable:{name:"Hold Liable",description:"hold the licensor liable for any damages."},documentChanges:{name:"Document Changes",description:"document any changes made to the software."}};function c(e){var t=e.title,n=e.children,i=s[n],c=i.name,o=i.description;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{className:"text-lg font-bold",children:c}),(0,r.jsx)("span",{children:"".concat(t," ").concat(o)})]})}function o(e){var t=e.title,n=e.children,i=e.borderColor,s=void 0===i?"border-gray-700":i,o=!n||0==n.length;return(0,r.jsxs)("div",{className:"p-4 border rounded ".concat(o&&"opacity-50"," ").concat(s),children:[(0,r.jsx)("h3",{className:"text-xl",children:t}),(0,r.jsx)("hr",{className:"my-4 ".concat(s)}),o?(0,r.jsx)("div",{className:"text-xl italic text-center text-gray-100",children:"Nothing to show..."}):(0,r.jsx)("ul",{className:"space-y-3",children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,r.jsx)("li",{children:(0,r.jsx)(c,{title:t,children:e})},n)}))})]})}function a(e){var t=e.may,n=e.mayNot,i=e.must;return(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3",children:[(0,r.jsx)(o,{title:"\u2714 You may",borderColor:"border-green-800",children:t}),(0,r.jsx)(o,{title:"\u274c You may not",borderColor:"border-red-800",children:n}),(0,r.jsx)(o,{title:"\u2696 You must",borderColor:"border-yellow-800",children:i})]})}var l=n(9008);function d(e){var t=e.children;return(0,r.jsx)("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t}})}var u=!0;function h(e){var t=e.licenses,n=e.name,s=e.may,c=e.mayNot,o=e.must,u=e.children,h=e.source,m=e.slug;return(0,r.jsxs)(i.default,{licenses:t,defaultLicenseSearchText:m,children:[(0,r.jsx)(l.default,{children:(0,r.jsxs)("title",{children:[n," - license.wiki"]})}),(0,r.jsxs)("div",{className:"container px-4 mx-auto",children:[(0,r.jsx)("h2",{className:"mb-4 text-5xl sm:text-6xl md:text-7xl",children:n}),(0,r.jsxs)("div",{className:"mb-6 space-x-4",children:[h&&(0,r.jsx)("a",{href:h,className:"button",children:"Source"}),(0,r.jsx)("a",{href:"".concat("https://github.com/sanny-io/licensewiki","/blob/").concat("main","/licenses/").concat(m,".md"),className:"button",children:"Edit on GitHub"})]}),(0,r.jsx)(d,{children:u}),(0,r.jsx)("hr",{className:"my-8"}),(0,r.jsx)(a,{may:s,mayNot:c,must:o})]})]})}},6124:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return o},default:function(){return a}});var r=n(5893),i=n(7294),s=n(1163),c=function(e,t){return e.find((function(e){return e.slug.toLowerCase()==t.toLowerCase()}))},o=!0;function a(e){var t=e.licenses,n=e.defaultLicenseSearchText,o=void 0===n?"":n,a=e.children,l=(0,i.useState)(o),d=l[0],u=l[1],h=(0,s.useRouter)();return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen",children:[(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=c(t,d);n&&h.push(n.slug)},className:"flex flex-col text-center py-9 gap-y-3",children:[(0,r.jsx)("h1",{className:"text-6xl sm:text-7xl md:text-8xl",children:"license.wiki"}),(0,r.jsx)("span",{className:"text-2xl text-gray-400",children:"Find the license that works for you."}),(0,r.jsx)("input",{type:"text",name:"license",placeholder:"Search licenses",list:"licenses",spellCheck:!1,value:d,onChange:function(e){u(e.target.value),e.nativeEvent instanceof InputEvent||h.push(c(t,e.target.value).slug)}}),(0,r.jsx)("datalist",{id:"licenses",children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,r.jsx)("option",{value:e.slug,children:e.name},t)}))})]}),a]})}},5922:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[license]",function(){return n(3911)}])},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=5922,e(e.s=t);var t}));var t=e.O();_N_E=t}]);