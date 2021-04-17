(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(98)),o={title:"System Module"},l={unversionedId:"internal-variables-functions/internal-modules/system-module",id:"internal-variables-functions/internal-modules/system-module",isDocsHomePage:!1,title:"System Module",description:"This module contains system related variables and functions.",source:"@site/docs/internal-variables-functions/internal-modules/system-module.md",slug:"/internal-variables-functions/internal-modules/system-module",permalink:"/Templater/docs/internal-variables-functions/internal-modules/system-module",editUrl:"https://github.com/SilentVoid13/Templater/docs/edit/master/docs/internal-variables-functions/internal-modules/system-module.md",version:"current",sidebar:"docs",previous:{title:"Frontmatter Module",permalink:"/Templater/docs/internal-variables-functions/internal-modules/frontmatter-module"},next:{title:"Web module",permalink:"/Templater/docs/internal-variables-functions/internal-modules/web-module"}},c=[{value:"Documentation",id:"documentation",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This module contains system related variables and functions."),Object(i.b)("h2",{id:"documentation"},"Documentation"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Function documentation is using a specific syntax. More informations ",Object(i.b)("a",{parentName:"p",href:"../../syntax#function-documentation-syntax"},"here")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Internal Variable / Function"),Object(i.b)("th",{parentName:"tr",align:null},"Arguments"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Example Output"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"tp.file.clipboard()")),Object(i.b)("td",{parentName:"tr",align:null},"None"),Object(i.b)("td",{parentName:"tr",align:null},"Retrieves the clipboard's content"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"This is my copied text"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"tp.system.prompt(prompt_text?: string, default_value?: string)")),Object(i.b)("td",{parentName:"tr",align:null},"- ",Object(i.b)("inlineCode",{parentName:"td"},"prompt_text"),": Text placed above the input field",Object(i.b)("br",null),"- ",Object(i.b)("inlineCode",{parentName:"td"},"default_value"),": A default value for the input filed"),Object(i.b)("td",{parentName:"tr",align:null},"Spawns a prompt modal and returns the user's input."),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"A value I entered"))))),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'Clipboard content: <% tp.system.clipboard() %>\n\nEntered value: <% tp.system.prompt("Please enter a value") %>\nMood today: <% tp.system.prompt("What is your mood today ?", "happy") %>\n')))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);