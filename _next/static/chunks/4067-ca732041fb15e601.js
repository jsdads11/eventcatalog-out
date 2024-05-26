(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4067],{68497:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(85034),a=r(31373),s=r(24246),i=r(65218),c=r.n(i),o=(r(58684),c()(Promise.all([r.e(4270),r.e(10),r.e(1097),r.e(9035),r.e(2098),r.e(6553)]).then(r.bind(r,88653)),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}));function l(e){var n=e.spec,r=e.showTitle,i=void 0===r||r,c=e.url,l=(0,a.Z)(e,["spec","showTitle","url"]),d=i?"":"swagger-hide-title";return(0,s.jsxs)("div",{className:"my-4 border border-gray-300 border-dashed px-5 eventcatalog-swagger ".concat(d),children:[!i&&(0,s.jsx)("span",{className:"text-2xl block mt-10 font-bold -mb-8",children:"OpenAPI Specification"}),(0,s.jsx)(o,(0,t.Z)({spec:n,tryItOutEnabled:!1,url:c},l))]})}},23357:function(e,n,r){"use strict";r.d(n,{Z:function(){return f}});var t=r(24246),a=r(27378),s=r(20089),i=r(23892),c=r.n(i)()().publicRuntimeConfig,o=(void 0===c?{}:c).basePath,l=void 0===o?"":o,d=function(e){return e.length>"50"?"".concat(e.substring(0,"50"),"..."):e},u=function(e,n,r){var t="/".concat(r?"domains/".concat(r,"/"):"").concat(n,"/").concat(e);return l?"".concat(l).concat(t):t},m=function(e,n,r,t){return"flowchart LR\n\n".concat(n.map((function(n){return"l-".concat(n.id,"[").concat(n.name,"]:::producer--\x3e").concat(e.id,"[").concat(e.name,"]:::event\n")})).join(""),"\nclassDef event stroke:").concat(t,",stroke-width: 4px;\n\nclassDef producer stroke:#75d7b6,stroke-width: 2px;\n\nclassDef consumer stroke:#818cf8,stroke-width: 2px;\n\n").concat(r.map((function(n){return"".concat(e.id,"[").concat(e.name,"]:::event--\x3er-").concat(n.id,"[").concat(n.name,"]:::consumer\n")})).join(""),"\n").concat(n.map((function(e){return"click l-".concat(e.id,' href "').concat(e.link,'" "Go to ').concat(e.name,'" _self\n')})).join(""),"\n").concat(r.map((function(e){return"click r-".concat(e.id,' href "').concat(e.link,'" "Go to ').concat(e.name,'" _self\n')})).join(""),"\nclick ").concat(e.id,' href "').concat(e.link,'" "Go to ').concat(e.name,'" _self\n\n')};s.N.initialize({startOnLoad:!0,theme:"forest",securityLevel:"loose",flowchart:{useMaxWidth:!1},themeCSS:"\n  .node {\n      filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .2))\n  }\n  .mermaid svg {\n      width: 10000px\n  }\n  .node rect {\n      fill: white\n  }\n    ",fontFamily:"Fira Code"});var f=function(e){var n=e.data,r=e.source,i=void 0===r?"event":r,c=e.rootNodeColor,o=e.charts;if((0,a.useEffect)((function(){s.N.contentLoaded()}),[]),o)return(0,t.jsx)(t.Fragment,{children:o.map((function(e,n){return(0,t.jsx)("div",{className:"mermaid",children:e},"chart-".concat(n))}))});var l="event"===i?function(e){var n=e.name,r=e.producerNames,t=e.consumerNames,a=e.producers,s=void 0===a?[]:a,i=e.consumers,c=void 0===i?[]:i,o=e.domain,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#2563eb",f=r.map(d).map((function(e){var n;return{id:e.replace(/ /g,"_"),name:e,link:u(e,"services",null===(n=s.find((function(n){return n.name===e})))||void 0===n?void 0:n.domain)}})),x=t.map(d).map((function(e){var n;return{id:e.replace(/ /g,"_"),name:e,link:u(e,"services",null===(n=c.find((function(n){return n.name===e})))||void 0===n?void 0:n.domain)}})),h={id:d(n.replace(/ /g,"_")),name:n,link:u(n,"events",o)};return m(h,f,x,l)}(n,c):function(e){var n=e.publishes,r=e.subscribes,t=e.name,a=e.domain,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#2563eb",i=r.map((function(e){return{event:e,truncatedName:d(e.name)}})).map((function(e){var n=e.event,r=e.truncatedName;return{id:r.replace(/ /g,"_"),name:r,link:u(n.name,"events",n.domain)}})),c=n.map((function(e){return{event:e,truncatedName:d(e.name)}})).map((function(e){var n=e.event,r=e.truncatedName;return{id:r.replace(/ /g,"_"),name:r,link:u(n.name,"events",n.domain)}})),o={id:d(t.replace(/ /g,"_")),name:t,link:u(t,"services",a)};return m(o,i,c,s)}(n,c);return(0,t.jsx)("div",{className:"mermaid",children:l})}},24067:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return L},default:function(){return O}});var t=r(85034),a=r(70169),s=r(31373),i=r(24246),c=r(88038),o=r.n(c),l=r(17532),d=r(52835),u=r(68497),m=r(65218),f=r.n(m),x=(r(82884),f()(Promise.all([r.e(8033),r.e(7058),r.e(9713),r.e(10),r.e(6834),r.e(9035),r.e(5143),r.e(4042)]).then(r.bind(r,95143)),{loadableGenerated:{webpack:function(){return[95143]}},ssr:!1})),h={show:{errors:!1}};function v(e){var n=e.spec,r=e.url,t=r?{url:r}:n;return(0,i.jsx)("div",{className:"my-4 border border-gray-300 border-dashed px-5 ",children:(0,i.jsx)(x,{schema:t,config:h})})}var p=r(15651),g=r(23357),j=(r(27378),r(79894)),b=r.n(j),y=r(21135),N=r(96833),k=r(41978),w=r(42789),Z=r(89736),_=r(2175),A=r(49138),C=function(e){return e.domain?"/domains/".concat(e.domain,"/events/").concat(e.name):"/events/".concat(e.name)};var P=function(e){var n=e.service,r=n.owners,t=n.subscribes,a=n.publishes,s=n.repository,c=n.tags,o=void 0===c?[]:c,l=n.externalLinks,d=n.domain,u=s.language,m=s.url,f=[];u&&(f=Array.isArray(u)?u:[u]);var x="";return m&&(x=m.replace(/(^\w+:|^)\/\//,"")),(0,i.jsxs)("aside",{className:"hidden xl:block xl:pl-8 ",children:[(0,i.jsx)("h2",{className:"sr-only",children:"Details"}),a.length>0&&(0,i.jsx)(A.Z,{title:"Publishes Events (".concat(a.length,")"),titleIcon:{icon:y.Z,className:"text-indigo-400"},items:a.map((function(e){return{label:e.name,href:C(e),bgColor:"indigo"}}))}),t.length>0&&(0,i.jsx)(A.Z,{title:"Subscribes to Events (".concat(t.length,")"),titleIcon:{icon:y.Z,className:"text-green-400"},items:t.map((function(e){return{label:e.name,href:C(e),bgColor:"green"}}))}),d&&(0,i.jsx)("div",{className:"border-t border-gray-200 py-6 space-y-8",children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{className:"text-sm font-medium text-gray-500",children:[(0,i.jsx)(N.Z,{className:"h-5 w-5 text-yellow-400 inline-block mr-2","aria-hidden":"true"}),"Domain"]}),(0,i.jsx)("ul",{className:"mt-2 leading-8",children:(0,i.jsx)("li",{className:"inline",children:(0,i.jsx)(b(),{href:"/domains/".concat(d),children:(0,i.jsxs)("a",{href:"#",className:"relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5",children:[(0,i.jsx)("div",{className:"absolute flex-shrink-0 flex items-center justify-center",children:(0,i.jsx)("span",{className:"h-1.5 w-1.5 rounded-full bg-yellow-500 animate animate-pulse","aria-hidden":"true"})}),(0,i.jsx)("div",{className:"ml-3.5 text-sm font-medium text-gray-900",children:d})]})})},d)})]})}),r.length>0&&(0,i.jsx)(_.Z,{owners:r}),(null===s||void 0===s?void 0:s.url)&&(0,i.jsx)("div",{className:"border-t border-gray-200 py-6 space-y-8",children:(0,i.jsxs)("div",{className:"space-y-3",children:[(0,i.jsx)("h2",{className:"text-sm font-medium text-gray-500",children:"Repository"}),(0,i.jsx)("ul",{className:" leading-8 space-y-2",children:(0,i.jsx)("li",{className:"flex justify-start",children:(0,i.jsx)("a",{href:null===s||void 0===s?void 0:s.url,target:"_blank",className:"flex items-center space-x-3 text-blue-600 underline text-sm",rel:"noreferrer",children:x})})})]})}),f.length>0&&(0,i.jsx)("div",{className:"border-t border-gray-200 py-6 space-y-8",children:(0,i.jsxs)("div",{className:"space-y-3",children:[(0,i.jsx)("h2",{className:"text-sm font-medium text-gray-500",children:"Language"}),f.map((function(e){return(0,i.jsxs)("div",{className:"relative flex items-center mt-2",children:[(0,i.jsx)("div",{className:"absolute flex-shrink-0 flex items-center justify-center",children:(0,i.jsx)("span",{className:"h-2 w-2 rounded-full","aria-hidden":"true",style:{background:(0,k.Z)(e)}})}),(0,i.jsx)("div",{className:"ml-3.5 text-sm font-medium text-gray-900",children:e})]},e)}))]})}),(0,i.jsx)(b(),{href:"/visualiser?type=service&name=".concat(n.name),children:(0,i.jsx)("a",{className:"hidden w-full md:inline-flex h-10 justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200",children:(0,i.jsx)("span",{children:"View in Visualiser"})})}),l.length>0&&(0,i.jsx)(w.Z,{externalLinks:l}),o.length>0&&(0,i.jsx)(Z.Z,{tags:o})]})},S=r(52217),I=r(84061),D=r(90476),E=r(6010);function G(e){var n=e.title,r=e.service,t=e.charts;return(0,i.jsxs)("div",{className:"mx-auto w-full py-10",children:[n&&(0,i.jsx)("h2",{className:"text-lg font-medium text-gray-900 underline",children:n}),(0,i.jsx)(g.Z,{source:"service",data:r,rootNodeColor:(0,k.Z)(r.name),charts:t})]})}var L=!0;function O(e){var n=e.service,r=e.markdown,c=e.notFound,m=e.breadCrumbs,f=(0,D.ZR)().title,x=(0,D.wG)(),h=x.getEditUrl,g=x.hasEditUrl,j=function(){if(!g)return"";var e=n.domain?"/domains/".concat(n.domain,"/services/").concat(n.name,"/index.md"):"/services/".concat(n.name,"/index.md");return h(e)};if(c)return(0,i.jsx)(I.Z,{type:"service",name:n.name,editUrl:j()});var b=n.name,y=n.summary,N=n.draft,w=r.lastModifiedDate,Z=function(e){return{Admonition:p.Z,AsyncAPI:function(n){var r=n.url;return r?(0,i.jsx)(v,{url:r}):e.asyncAPISpec||r?(0,i.jsx)(v,{spec:e.asyncAPISpec}):null},OpenAPI:function(n){var r=n.url,a=(0,s.Z)(n,["url"]);return e.openAPISpec?(0,i.jsx)(u.Z,(0,t.Z)({spec:e.openAPISpec,url:r},a)):null},Mermaid:function(n){var r=n.title,t=n.charts;return(0,i.jsx)(G,{service:e,title:r,charts:t})},NodeGraph:function(n){var r=n.title,t=n.maxHeight,a=n.maxZoom,s=n.fitView,c=n.zoomOnScroll,o=n.isAnimated,l=n.isDraggable;return(0,i.jsxs)("div",{className:"mx-auto w-full",children:[r&&(0,i.jsx)("h2",{className:"text-lg font-medium text-gray-900 underline",children:r}),(0,i.jsx)(E.Z,{source:"service",data:e,rootNodeColor:(0,k.Z)(e.name),maxHeight:t,maxZoom:a,fitView:s,zoomOnScroll:c,isAnimated:o,isDraggable:l})]})}}}(n);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o(),{children:(0,i.jsxs)("title",{children:[f," - ",b]})}),(0,i.jsx)(d.Z,{title:b,editUrl:j(),subtitle:y,draft:N,lastModifiedDate:w,breadCrumbs:(0,i.jsx)(S.Z,{pages:m,homePath:"/services"}),sidebar:(0,i.jsx)(P,{service:n}),children:(0,i.jsx)(l.R,(0,a.Z)((0,t.Z)({},r.source),{components:Z}))})]})}},82884:function(){}}]);