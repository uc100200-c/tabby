(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[357],{51848:function(e,t,r){Promise.resolve().then(r.bind(r,54529))},54529:function(e,t,r){"use strict";r.r(t),r.d(t,{SourceCodeBrowser:function(){return Q},SourceCodeBrowserContext:function(){return K},getFileViewType:function(){return X}});var n=r(57437),l=r(2265),i=r(30415),a=r.n(i),o=r(91713),s=r(72999),c=r(16630),u=r(1589),d=r(52485),f=r(1592),h=r(39311),v=r(61574);let x=e=>{let{className:t,...r}=e;return(0,n.jsx)(v.eh,{className:(0,h.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",t),...r})},m=v.s_,p=e=>{let{withHandle:t,className:r,...l}=e;return(0,n.jsx)(v.OT,{className:(0,h.cn)("border-bg relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",r),...l,children:t&&(0,n.jsx)("div",{className:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border"})})};var g=r(33555);let j=e=>{let{className:t}=e,{currentFileRoutes:r,setActivePath:i,activePath:a}=l.useContext(K);return(0,n.jsxs)("div",{className:(0,h.cn)("flex flex-nowrap items-center gap-1 leading-8",t),children:[(0,n.jsx)("div",{className:"cursor-pointer font-medium text-primary hover:underline",onClick:e=>i(void 0),children:"Repositories"}),(0,n.jsx)("div",{children:"/"}),null==r?void 0:r.map((e,t)=>{let a=0===t&&(null==r?void 0:r.length)>1,o=t===r.length-1;return(0,n.jsxs)(l.Fragment,{children:[(0,n.jsx)("div",{className:(0,h.cn)(a||o?"font-bold":"font-medium",o?"":"cursor-pointer text-primary hover:underline",a?"hover:underline":void 0),onClick:t=>i(e.fullPath),children:e.name}),"file"!==e.file.kind&&(0,n.jsx)("div",{children:"/"})]},e.fullPath)}),!!(null==r?void 0:r.length)&&!!a&&(0,n.jsx)(g.q,{value:a})]})};var b=r(83390),y=r(95376),N=r(12897),w=r(84168),k=r(25645),C=r(32553),S=r(24144);function P(e){var t;return e?null===(t=e.split("/"))||void 0===t?void 0:t[0]:""}function R(e){return e?e.split("/").slice(1).join("/"):""}function E(e){if(!e)return"";let t=e.split("/");return t[t.length-1]}function F(e,t){if((0,S.Z)(e))return[];let r=[""],n=e.split("/"),l=t?n.length:n.length-1;for(let e=0;e<l;e++)r.push(n.slice(0,e+1).join("/"));return r}let T=e=>{let{className:t,loading:r,initialized:i}=e,{activePath:a,currentFileRoutes:o,setActivePath:s,fileTreeData:c}=l.useContext(K),u=l.useMemo(()=>(function(e,t){if(!(null==e?void 0:e.length))return[];if(t){let r=t.split("/"),n=e;for(;r.length;){let e=r.shift(),t=(0,b.Z)(n,t=>t.name===e);if(null==t||!t.children)return[];n=null==t?void 0:t.children}return(null==n?void 0:n.map(e=>(0,y.Z)(e,"children")))||[]}{let t=e.map(e=>(0,y.Z)(e,"children"))||[];return t}})(c,a),[c,a]),[d]=(0,N.n)(r,300),f=(null==o?void 0:o.length)>0,v=()=>{var e;let t=null===(e=o[(null==o?void 0:o.length)-2])||void 0===e?void 0:e.fullPath;s(t)},x=e=>{s(e.fullPath)};return(0,n.jsx)("div",{className:(0,h.cn)("text-base",t),children:d||!i?(0,n.jsx)(Z,{}):(null==c?void 0:c.length)?(0,n.jsx)(C.iA,{children:(0,n.jsxs)(C.RM,{children:[f&&(0,n.jsx)(C.SC,{className:"cursor-pointer",onClick:e=>v(),children:(0,n.jsx)(C.pj,{className:"p-1 px-4",children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("div",{className:"shrink-0",children:(0,n.jsx)(w.IconDirectorySolid,{style:{color:"rgb(84, 174, 255)"}})}),(0,n.jsx)("span",{className:"px-1 py-2",children:".."})]})})}),(0,n.jsx)(n.Fragment,{children:u.map(e=>(0,n.jsx)(C.SC,{children:(0,n.jsx)(C.pj,{className:"p-1 px-4 text-base",children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("div",{className:"shrink-0",children:"dir"===e.file.kind?(0,n.jsx)(w.IconDirectorySolid,{style:{color:"rgb(84, 174, 255)"}}):(0,n.jsx)(w.IconFile,{})}),(0,n.jsx)("span",{onClick:t=>x(e),className:"cursor-pointer px-1 py-2 hover:text-primary hover:underline",children:E(e.fullPath)})]})})},e.fullPath))})]})}):(0,n.jsx)("div",{className:"flex justify-center py-8",children:"No indexed repository yet"})})};function Z(){return(0,n.jsxs)("ul",{className:"space-y-3 p-2",children:[(0,n.jsx)(k.O,{}),(0,n.jsx)(k.O,{}),(0,n.jsx)(k.O,{}),(0,n.jsx)(k.O,{})]})}let O=l.createContext({}),M=e=>{let{onSelectTreeNode:t,children:r,activePath:l,fileMap:i,updateFileMap:a,expandedKeys:o,toggleExpandedKey:s,initialized:c,fileTreeData:u}=e;return(0,n.jsx)(O.Provider,{value:{onSelectTreeNode:t,fileTreeData:u,expandedKeys:o,toggleExpandedKey:s,activePath:l,fileMap:i,updateFileMap:a,initialized:c},children:r})},z=e=>{let{level:t}=e,r=l.useMemo(()=>Array(t).fill(1),[t]);return(0,n.jsx)("div",{className:"flex h-full shrink-0 items-stretch",children:r.map((e,t)=>(0,n.jsx)("div",{className:"flex h-8 w-2 border-r border-transparent transition-colors duration-300 group-hover/filetree:border-border"},t))})},I=()=>(0,n.jsx)("div",{className:"absolute -left-2 h-8 w-1 rounded-md bg-primary"}),D=e=>{let{isActive:t,level:r,children:l,className:i,...a}=e;return(0,n.jsxs)("div",{className:(0,h.cn)("relative flex cursor-pointer items-stretch rounded-sm hover:bg-accent focus:bg-accent focus:text-accent-foreground",t&&"bg-accent",i),...a,children:[t&&(0,n.jsx)(I,{}),(0,n.jsx)(z,{level:r}),(0,n.jsxs)("div",{className:"flex flex-nowrap items-center gap-2 truncate whitespace-nowrap",children:[(0,n.jsx)("div",{className:"h-4 w-4 shrink-0"}),l]})]})},A=e=>{let{children:t,level:r,isActive:l,className:i,...a}=e;return(0,n.jsxs)("div",{className:(0,h.cn)("relative flex cursor-pointer items-stretch rounded-sm hover:bg-accent focus:bg-accent focus:text-accent-foreground",l?"bg-accent text-accent-foreground":void 0,i),...a,children:[l&&(0,n.jsx)(I,{}),(0,n.jsx)(z,{level:r}),(0,n.jsx)("div",{className:"flex flex-nowrap items-center gap-2 truncate whitespace-nowrap",children:t})]})},_=e=>{let{node:t,level:r}=e,{onSelectTreeNode:i,activePath:a}=l.useContext(O),o="file"===t.file.kind,s=t.fullPath===a;return(0,n.jsxs)(D,{level:r,onClick:e=>{o&&(null==i||i(t))},isActive:s,children:[(0,n.jsx)(w.IconFile,{className:"shrink-0"}),(0,n.jsx)("div",{className:"truncate",children:null==t?void 0:t.name})]})},L=e=>{var t,r,i;let{node:a,level:o,root:s}=e,{fileMap:c,updateFileMap:d,expandedKeys:h,toggleExpandedKey:v,onSelectTreeNode:x,activePath:m}=l.useContext(O),p=l.useRef(!1),g=l.useMemo(()=>P(a.fullPath),[a.fullPath]),j=s?"":a.file.basename,b=h.has(a.fullPath),y="dir"===a.file.kind&&!(null==c?void 0:null===(t=c[a.fullPath])||void 0===t?void 0:t.treeExpanded)&&b,{data:k,isLoading:C}=(0,u.Z)(y?"/repositories/".concat(g,"/resolve/").concat(j):null,f.Z,{revalidateIfStale:!1});l.useEffect(()=>{var e;if(!p.current&&(null==k?void 0:null===(e=k.entries)||void 0===e?void 0:e.length)){let e=k.entries.reduce((e,t)=>{let r="".concat(g,"/").concat(t.basename);return{...e,[r]:{file:t,name:E(r),fullPath:r,treeExpanded:!1}}},{});d(e),p.current=!0}},[k]);let[S]=(0,N.n)(C,300),R=!!(null==a?void 0:null===(r=a.children)||void 0===r?void 0:r.length);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(A,{level:o,onClick:e=>{null==x||x(a)},isActive:m===a.fullPath,children:[(0,n.jsx)("div",{className:"flex h-8 shrink-0 items-center hover:bg-primary/10 hover:text-popover-foreground",onClick:e=>{S||(v(a.fullPath),e.stopPropagation())},children:S&&!p.current?(0,n.jsx)(w.IconSpinner,{}):b?(0,n.jsx)(w.IconChevronDown,{}):(0,n.jsx)(w.IconChevronRight,{})}),(0,n.jsx)("div",{className:"shrink-0",style:{color:"rgb(84, 174, 255)"},children:b?(0,n.jsx)(w.IconDirectoryExpandSolid,{}):(0,n.jsx)(w.IconDirectorySolid,{})}),(0,n.jsx)("div",{className:"truncate",children:null==a?void 0:a.name})]}),(0,n.jsx)(n.Fragment,{children:b&&R?(0,n.jsx)(n.Fragment,{children:null===(i=a.children)||void 0===i?void 0:i.map(e=>{let t=e.file.basename;return"dir"===e.file.kind?(0,n.jsx)(L,{node:e,level:o+1},t):(0,n.jsx)(_,{node:e,level:o+1},t)})}):null})]})},B=()=>{let{fileTreeData:e,initialized:t}=l.useContext(O);return t?(null==e?void 0:e.length)?(0,n.jsx)(n.Fragment,{children:null==e?void 0:e.map(e=>(0,n.jsx)(L,{root:!0,level:0,node:e},e.fullPath))}):(0,n.jsx)("div",{className:"flex h-full items-center justify-center",children:"No Data"}):(0,n.jsx)(W,{})},U=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,h.cn)("group/filetree",t),children:(0,n.jsx)(M,{...r,children:(0,n.jsx)(B,{})})})};function W(){return(0,n.jsxs)("div",{className:"space-y-3 p-2",children:[(0,n.jsx)(k.O,{}),(0,n.jsx)(k.O,{className:"ml-4"}),(0,n.jsx)(k.O,{className:"ml-4"}),(0,n.jsx)(k.O,{}),(0,n.jsx)(k.O,{className:"ml-4"})]})}let q=e=>{let{className:t,blob:r,isImage:i}=e,{activePath:a}=(0,l.useContext)(K);return(0,n.jsx)("div",{className:(0,h.cn)("text-center",t),children:i?(0,n.jsx)("img",{className:"mx-auto",src:URL.createObjectURL(r)}):(0,n.jsx)("a",{className:"text-primary hover:underline",download:E(null!=a?a:""),href:URL.createObjectURL(r),target:"_blank",children:"View raw"})})},H=a()(()=>Promise.all([r.e(8301),r.e(6401),r.e(5344),r.e(3830)]).then(r.bind(r,53830)),{loadableGenerated:{webpack:()=>[53830]},ssr:!1}),K=l.createContext({}),V=e=>{let{children:t}=e,{searchParams:r,updateSearchParams:i}=(0,d.Z)(),a=l.useMemo(()=>{var e,t;return null!==(t=null===(e=r.get("path"))||void 0===e?void 0:e.toString())&&void 0!==t?t:""},[r]),[o,c]=l.useState(!1),[u,f]=l.useState({}),[h,v]=l.useState(new Set),x=l.useMemo(()=>{if(!a)return[];let e=[],t=a.split("/");for(let r=0;r<t.length;r++){let n=t.slice(0,r+1).join("/");e.push(null==u?void 0:u[n])}return(0,s.Z)(e)},[a,u]),m=l.useMemo(()=>(function e(t){if(!t.length)return[];for(let r of(t.sort((e,t)=>{let r="file"===e.file.kind?1:0,n="file"===t.file.kind?1:0;return r-n||e.name.localeCompare(t.name)}),t))(null==r?void 0:r.children)&&e(r.children);return t})(function(e){let t=[];if(!e)return t;let r=Object.keys(e);for(let n of r){let r=e[n],l=n.split("/"),i=t;for(let e=0;e<l.length;e++){let t=l[e],a=null==i?void 0:i.find(e=>e.name===t);if(a)i=a.children||[];else{let e={file:r.file,name:t,fullPath:n,children:[]};i.push(e),i=e.children}}}return t}(u)),[u]);return(0,n.jsx)(K.Provider,{value:{initialized:o,setInitialized:c,activePath:a,setActivePath:e=>{e?i({set:{path:e}}):i({del:"path"})},fileMap:u,updateFileMap:e=>{e&&f(t=>({...t,...e}))},expandedKeys:h,setExpandedKeys:v,toggleExpandedKey:e=>{let t=h.has(e),r=new Set(h);t?r.delete(e):r.add(e),v(r)},currentFileRoutes:x,fileTreeData:m},children:t})},G=e=>{var t,r,i;let{className:a}=e,{activePath:o,setActivePath:s,updateFileMap:c,fileMap:d,initialized:v,setInitialized:g,expandedKeys:b,toggleExpandedKey:y,setExpandedKeys:N,fileTreeData:w}=l.useContext(K),k=l.useMemo(()=>P(o),[o]),C=l.useMemo(()=>R(o),[o]),[S,Z]=l.useState(),O=o&&(null==d?void 0:null===(r=d[o])||void 0===r?void 0:null===(t=r.file)||void 0===t?void 0:t.kind)==="file",M=o?null==d?void 0:null===(i=d[o])||void 0===i?void 0:i.file:void 0,z=l.useMemo(()=>{var e,t,r;if(!v)return!1;let n=o&&(null==d?void 0:null===(t=d[o])||void 0===t?void 0:null===(e=t.file)||void 0===e?void 0:e.kind)==="dir";return n&&!(null==d?void 0:null===(r=d[o])||void 0===r?void 0:r.treeExpanded)},[o,d,v]),{data:I}=(0,u.Z)(O?"/repositories/".concat(k,"/resolve/").concat(C):null,e=>(0,f.Z)(e,{responseFormat:"blob"})),{data:D}=(0,u.Z)(O?"/repositories/".concat(k,"/meta/").concat(C):null,f.Z),{data:A,isLoading:_}=(0,u.Z)(z?"/repositories/".concat(k,"/resolve/").concat(C):null,f.Z),L=(null==M?void 0:M.kind)==="dir"||""===o;return l.useEffect(()=>{let e=async()=>{let{patchMap:e,expandedKeys:t}=await J(o);e&&c(e),(null==t?void 0:t.length)&&N(new Set(t)),g(!0)};e()},[]),l.useEffect(()=>{(()=>{var e;if((null==A?void 0:null===(e=A.entries)||void 0===e?void 0:e.length)&&o){let e=P(o),t={};for(let r of A.entries){let n="".concat(e,"/").concat(r.basename);t[n]={file:r,name:E(n),fullPath:n,treeExpanded:!1}}c(t);let r=F(o,!0);(null==r?void 0:r.length)&&N(e=>{let t=new Set(e);for(let e of r)t.add(e);return t})}})()},[A]),l.useEffect(()=>{let e=async()=>{let e=await X(null!=o?o:"",I);Z(e)};O?e():Z("")},[o,O,I]),(0,n.jsxs)(x,{direction:"horizontal",className:(0,h.cn)(a),children:[(0,n.jsx)(m,{defaultSize:20,minSize:20,children:(0,n.jsx)("div",{className:"h-full overflow-hidden py-2",children:(0,n.jsx)(U,{className:"h-full overflow-y-auto overflow-x-hidden px-4",onSelectTreeNode:e=>{s(e.fullPath)},activePath:o,fileMap:d,updateFileMap:c,expandedKeys:b,toggleExpandedKey:y,initialized:v,fileTreeData:w})})}),(0,n.jsx)(p,{className:"w-1 hover:bg-card active:bg-card"}),(0,n.jsx)(m,{defaultSize:80,minSize:30,children:(0,n.jsxs)("div",{className:"flex h-full flex-col overflow-y-auto px-4 pb-4",children:[(0,n.jsx)(j,{className:"sticky top-0 z-10 bg-background py-4"}),(0,n.jsxs)("div",{className:"flex-1",children:[L&&(0,n.jsx)(T,{loading:_,initialized:v,className:"rounded-lg border"}),"text"===S&&(0,n.jsx)(H,{className:"rounded-lg border py-2",blob:I,meta:D}),("image"===S||"raw"===S)&&I&&(0,n.jsx)(q,{className:"rounded-lg border py-2",blob:I,isImage:"image"===S})]})]})})]})},Q=e=>(0,n.jsx)(V,{children:(0,n.jsx)(G,{className:"source-code-browser",...e})});async function J(e){let t=P(e),r=R(e);try{let e=await n(),{defaultEntries:r,expandedDir:l}=await i(e),a={};for(let r of e)a[r.basename]={file:r,name:r.basename,fullPath:r.basename,treeExpanded:r.basename===t};for(let e of r){let r="".concat(t,"/").concat(e.basename);a[r]={file:e,name:E(r),fullPath:r,treeExpanded:l.includes(e.basename)}}let o=l.map(e=>[t,e].filter(Boolean).join("/"));return{patchMap:a,expandedKeys:o}}catch(e){return console.error(e),{}}async function n(){try{let e=await (0,f.Z)("/repositories/resolve/");return null==e?void 0:e.entries}catch(e){return[]}}async function l(e){try{if(!t)return;let l=(0,c.Z)(e,e=>e.basename===t);if(l<0)return;let i=F(r),a=i.map(e=>()=>(0,f.Z)("/repositories/".concat(t,"/resolve/").concat(e))),o=await Promise.all(a.map(e=>e())),s=[];for(let e of o){var n;(null===(n=e.entries)||void 0===n?void 0:n.length)&&(s=[...s,...e.entries])}return s}catch(e){console.error(e)}}async function i(e){let n={defaultEntries:[],expandedDir:[]};try{if(t&&(null==e?void 0:e.length)){let t=await l(e),i=F(r);(null==t?void 0:t.length)&&(n.defaultEntries=t),(null==i?void 0:i.length)&&(n.expandedDir=i)}}catch(e){console.error(e)}return n}}async function X(e,t){var r;if(!t)return"";let n=null==t?void 0:t.type,l=null===(r=(0,o.Z)(e))||void 0===r?void 0:r[0];if(null==n?void 0:n.startsWith("image"))return"image";if(l||(null==n?void 0:n.startsWith("text")))return"text";let i=await new Promise((e,r)=>{let n=t.slice(0,1024),l=new FileReader;l.onloadend=function(t){var r;if((null==t?void 0:null===(r=t.target)||void 0===r?void 0:r.readyState)===FileReader.DONE){let r=t.target.result;"string"!=typeof r?e(!1):/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/.test(r)?e(!1):e(!0)}},l.onerror=function(){e(!1)},l.readAsText(n,"UTF-8")});return i?"text":"raw"}},33555:function(e,t,r){"use strict";r.d(t,{q:function(){return o}});var n=r(57437);r(2265);var l=r(77723),i=r(93023),a=r(84168);function o(e){let{className:t,value:r,...o}=e,{isCopied:s,copyToClipboard:c}=(0,l.m)({timeout:2e3});return r?(0,n.jsxs)(i.z,{variant:"ghost",size:"icon",className:t,onClick:()=>{s||c(r)},...o,children:[s?(0,n.jsx)(a.IconCheck,{className:"text-green-600"}):(0,n.jsx)(a.IconCopy,{}),(0,n.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},93023:function(e,t,r){"use strict";r.d(t,{d:function(){return s},z:function(){return c}});var n=r(57437),l=r(2265),i=r(67256),a=r(7404),o=r(39311);let s=(0,a.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),c=l.forwardRef((e,t)=>{let{className:r,variant:l,size:a,asChild:c=!1,...u}=e,d=c?i.g7:"button";return(0,n.jsx)(d,{className:(0,o.cn)(s({variant:l,size:a,className:r})),ref:t,...u})});c.displayName="Button"},25645:function(e,t,r){"use strict";r.d(t,{O:function(){return i}});var n=r(57437),l=r(39311);function i(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,l.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...r})}},32553:function(e,t,r){"use strict";r.d(t,{RM:function(){return s},SC:function(){return u},iA:function(){return a},pj:function(){return f},ss:function(){return d},xD:function(){return o}});var n=r(57437),l=r(2265),i=r(39311);let a=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("table",{ref:t,className:(0,i.cn)("w-full caption-bottom text-sm",r),...l})});a.displayName="Table";let o=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("thead",{ref:t,className:(0,i.cn)("[&_tr]:border-b",r),...l})});o.displayName="TableHeader";let s=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,i.cn)("[&_tr:last-child]:border-0",r),...l})});s.displayName="TableBody";let c=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...l})});c.displayName="TableFooter";let u=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("tr",{ref:t,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...l})});u.displayName="TableRow";let d=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("th",{ref:t,className:(0,i.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...l})});d.displayName="TableHead";let f=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("td",{ref:t,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...l})});f.displayName="TableCell";let h=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("caption",{ref:t,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",r),...l})});h.displayName="TableCaption"},77723:function(e,t,r){"use strict";r.d(t,{m:function(){return o}});var n=r(2265),l=r(2390),i=r.n(l),a=r(71424);function o(e){let{timeout:t=2e3,onError:r}=e,[l,o]=n.useState(!1),s=()=>{o(!0),setTimeout(()=>{o(!1)},t)},c=e=>{if("function"==typeof r){null==r||r(e);return}a.A.error("Failed to copy.")};return{isCopied:l,copyToClipboard:e=>{var t;if(e){if(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)navigator.clipboard.writeText(e).then(s).catch(c);else{let t=i()(e);t?s():c()}}}}}},12897:function(e,t,r){"use strict";r.d(t,{S:function(){return o},n:function(){return s}});var n=r(2265),l=r(50976);function i(e){let t=n.useRef(e);return t.current=e,t}let a=e=>{let t=i(e);n.useEffect(()=>()=>{t.current()},[])};function o(e,t,r){let o=i(e),s=n.useMemo(()=>(0,l.Z)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.current(...t)},t,r),[]);return a(()=>s.cancel()),{run:s,cancel:s.cancel,flush:s.flush}}function s(e,t,r){let[l,i]=n.useState(e),{run:a}=o(()=>{i(e)},t,r);return n.useEffect(()=>{a()},[e]),[l,i]}},52485:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(24033);function l(){let e=(0,n.usePathname)(),t=(0,n.useRouter)(),r=(0,n.useSearchParams)();return{pathname:e,router:t,searchParams:r,updateSearchParams:n=>{let{set:l,del:i,replace:a,getNewPath:o}=n,s=new URLSearchParams(r);l&&Object.entries(l).forEach(e=>{let[t,r]=e;return s.set(t,r)}),i&&(Array.isArray(i)?i.forEach(e=>s.delete(e)):s.delete(i));let c=s.toString(),u="".concat(e).concat(c.length>0?"?".concat(c):"");if(o)return u;a?t.replace(u):t.push(u)},getQueryString:e=>{let t=new URLSearchParams(r);e&&Object.entries(e).forEach(e=>{let[r,n]=e;return t.set(r,n)});let n=t.toString();return n.length>0?"?".concat(n):""}}}},1592:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(34084),l=r(58001),i=r(7820);let a=!1,o=[];async function s(e,t){var r,n,i;let s=null!==(r=null==t?void 0:t.customFetch)&&void 0!==r?r:window.fetch,h=await s(e,c(t));if(401!==h.status)return f(h,t);{if(a)return new Promise(r=>{o.push({url:e,options:t,resolve:r})});let r=null===(n=(0,l.bW)())||void 0===n?void 0:n.refreshToken;if(!r){(0,l.Rn)();return}a=!0;let s=await u(r),c=null==s?void 0:null===(i=s.data)||void 0===i?void 0:i.refreshToken;if(c){for((0,l.pC)({accessToken:c.accessToken,refreshToken:c.refreshToken}),a=!1;o.length;){let e=o.shift();null==e||e.resolve(d(e.url,e.options))}return d(e,t)}a=!1,o.length=0,(0,l.Rn)()}}function c(e){var t;let r=new Headers(null==e?void 0:e.headers);return r.append("authorization","Bearer ".concat(null===(t=(0,l.bW)())||void 0===t?void 0:t.accessToken)),{...e||{},headers:r}}async function u(e){let t=i.Lp.createRequestOperation("mutation",(0,n.h)(l.Dp,{refreshToken:e}));return i.Lp.executeMutation(t)}function d(e,t){var r;let n=null!==(r=null==t?void 0:t.customFetch)&&void 0!==r?r:window.fetch;return n(e,c(t)).then(e=>f(e,t))}function f(e,t){return(null==t?void 0:t.responseFormatter)?t.responseFormatter(e):(null==t?void 0:t.responseFormat)==="blob"?e.blob():e.json()}}},function(e){e.O(0,[3529,4762,1424,6410,6630,713,6682,7753,4168,2445,2971,7864,1744],function(){return e(e.s=51848)}),_N_E=e.O()}]);