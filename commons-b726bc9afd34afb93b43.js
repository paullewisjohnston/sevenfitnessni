(self.webpackChunksevenfitnessni=self.webpackChunksevenfitnessni||[]).push([[351],{3204:function(e){"use strict";const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,r=!1;for(let a=0;a<e.length;a++){const i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n;var n};e.exports=t,e.exports.default=t},6467:function(e,t,n){"use strict";var r=n(929);t.Gc=r.useBreakpoint,r.BreakpointProvider,r.BreakpointContext,n(5701).withBreakpoints},5701:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.withBreakpoints=void 0;var a=r(n(434)),i=r(n(7294)),s=n(929);t.withBreakpoints=e=>t=>{const n=(0,s.useBreakpoint)();return i.default.createElement(e,(0,a.default)({breakpoints:n},t))}},3723:function(e,t,n){"use strict";n.d(t,{L:function(){return m},M:function(){return v},P:function(){return w},S:function(){return A},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return d},h:function(){return l}});var r=n(7294),a=(n(3204),n(5697)),i=n.n(a);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n,r,a){return void 0===a&&(a={}),s({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},a,{opacity:t?1:0})})}function d(e,t,n,r,a,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===n?(c.width=r,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,n=o(e,u);return r.createElement(r.Fragment,null,r.createElement(p,s({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:n,loading:a,alt:i="",shouldLoad:l}=e,c=o(e,g);return r.createElement("img",s({},c,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:i}))},y=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,i=o(e,f);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(h,s({},i,t,{sizes:l,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+n,type:i,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:l})})),c):c};var b;h.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},y.displayName="Picture",y.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const x=["fallback"],w=function(e){let{fallback:t}=e,n=o(e,x);return t?r.createElement(y,s({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},n))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const v=function(e){return r.createElement(r.Fragment,null,r.createElement(y,s({},e)),r.createElement("noscript",null,r.createElement(y,s({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=y.propTypes;const E=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),s=3;s<r;s++)a[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:E},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],L=new Set;let M,O;const _=function(e){let{as:t="div",image:a,style:i,backgroundColor:c,className:d,class:u,onStartLoad:p,onLoad:m,onError:g}=e,f=o(e,C);const{width:h,height:y,layout:b}=a,x=function(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(h,y,b),{style:w,className:v}=x,E=o(x,S),k=(0,r.useRef)(),_=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);u&&(d=u);const I=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,h,y);return(0,r.useEffect)((()=>{M||(M=Promise.all([n.e(774),n.e(223)]).then(n.bind(n,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(_);if(O&&L.has(_))return;let t,r;return M.then((e=>{let{renderImageToString:n,swapPlaceholderImage:o}=e;k.current&&(k.current.innerHTML=n(s({isLoading:!0,isLoaded:L.has(_),image:a},f)),L.has(_)||(t=requestAnimationFrame((()=>{k.current&&(r=o(k.current,_,L,i,p,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{L.has(_)&&O&&(k.current.innerHTML=O(s({isLoading:L.has(_),isLoaded:L.has(_),image:a},f)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,r.createElement)(t,s({},E,{style:s({},w,i,{backgroundColor:c}),className:v+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));I.propTypes=k,I.displayName="GatsbyImage";const F=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],T=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},j=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:E,width:T,height:T,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!j.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(W=I,function(e){let{src:t,__imageData:n,__error:a}=e,i=o(e,F);return a&&console.warn(a),n?r.createElement(W,s({image:n},i)):(console.warn("Image not loaded",t),null)});var W;A.displayName="StaticImage",A.propTypes=z},7672:function(e,t,n){"use strict";n.d(t,{A:function(){return T}});var r=n(7294),a=n(1883),i=n(3723);const s={backgroundColor:"rgb(0,0,0,0.8)",width:"100%",position:"fixed",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",top:0,zIndex:99},o={display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:"800px",height:"48px",listStyle:"none",padding:"0px 22px",margin:"auto"},l={justifyContent:"center",padding:"0px 8px",margin:0,listStyle:"none"},c={color:"#f5f5f7",fontSize:15,textDecoration:"none",margin:0},d=e=>r.createElement(r.Fragment,null,r.createElement("nav",{style:s},r.createElement("ul",{style:o},r.createElement("li",{key:"home-link-logo",style:l},r.createElement(a.Link,{style:c,to:"/"},r.createElement(i.S,{src:"../images/icon.png",alt:"logo",width:24,height:24,__imageData:n(8290)}))),e.links.map((e=>r.createElement("li",{key:e.text,style:{...l,color:e.color}},r.createElement(a.Link,{style:c,to:e.url},e.text))))))),u={backgroundColor:"rgb(0,0,0,0.8)",width:"100%",position:"fixed",WebkitBackdropFilter:"blur(80px)",backdropFilter:"blur(80px)",top:0,zIndex:99},p={width:"100%",height:"100vh",position:"fixed",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",top:0},m={backgroundColor:"rgb(0,0,0)",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",maxWidth:"980px",height:"50vh",listStyle:"none",padding:"0px 22px",margin:"auto"},g={display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:"980px",height:"48px",listStyle:"none",padding:"0px 22px",margin:"auto",background:"rgb(0,0,0)"},f={justifyContent:"center",padding:"0px 8px",margin:0,listStyle:"none"},h={display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:"980px",height:"48px",listStyle:"none",padding:"0px 22px",margin:"auto"},y={justifyContent:"center",padding:"0px 8px",margin:0,listStyle:"none"},b={color:"#f5f5f7",fontSize:15,textDecoration:"none",margin:0},x={all:"unset",color:"#f5f5f7",cursor:"pointer",fontSize:15,textDecoration:"none",margin:0},w=e=>{const t=e.openMenu?"Close":"Menu",s=e.openMenu?g:h;return r.createElement(r.Fragment,null,r.createElement("ul",{style:s},r.createElement("li",{key:"home-link-logo",style:y},r.createElement(a.Link,{style:b,to:"/"},r.createElement(i.S,{src:"../images/icon.png",alt:"logo",width:24,height:24,__imageData:n(8290)}))),r.createElement("li",{key:"mobile-menu",style:y},r.createElement("button",{style:x,onClick:()=>e.setOpenMenu(!e.openMenu)},t))))},v=e=>r.createElement(r.Fragment,null,r.createElement("nav",{style:p},r.createElement(w,{openMenu:e.openMenu,setOpenMenu:e.setOpenMenu}),r.createElement("ul",{style:m},e.links.map((e=>r.createElement("li",{key:e.text,style:{...f,color:e.color}},r.createElement(a.Link,{style:b,to:e.url},e.text))))))),E=e=>{const{0:t,1:n}=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("nav",{style:u},r.createElement(w,{openMenu:t,setOpenMenu:n}),t&&r.createElement(v,{links:e.links,openMenu:t,setOpenMenu:n})))},k=[{text:"About",url:"/about"},{text:"Schedule",url:"/schedule"},{text:"FAQ",url:"/faq"},{text:"PAR-Q",url:"/parq"},{text:"Contact",url:"/contact"}],C=e=>{const t=e.isMobile;return r.createElement(r.Fragment,null,t?r.createElement(E,{links:k}):r.createElement(d,{links:k}))},S={backgroundColor:"rgb(0,0,0,0.8)",width:"100%",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)"},L={display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",maxWidth:"980px",listStyle:"none",padding:"8px 22px",margin:"auto"},M={padding:"8px 20px",margin:0,listStyle:"none"},O={fontSize:15,color:"#f5f5f7",textDecoration:"none",margin:0},_=[{text:"About",url:"/about"},{text:"Schedule",url:"/schedule"},{text:"FAQ",url:"/faq"},{text:"PAR-Q",url:"/parq"},{text:"Contact",url:"/contact"}],I=e=>{const t=e.isMobile?"column":"row";return r.createElement("footer",null,r.createElement("nav",{style:S},r.createElement("ul",{style:{...L,flexDirection:t}},r.createElement("li",{key:"copyright-statement",style:M},r.createElement("span",{style:O},"Seven Fitness NI © 2022")),_.map((e=>r.createElement("li",{key:e.text,style:{...M,color:e.color}},r.createElement(a.Link,{style:O,to:e.url},e.text)))))))};var F=n(6467);const T=e=>{let{children:t}=e;const n=(0,F.Gc)().sm;return r.createElement(r.Fragment,null,r.createElement(C,{isMobile:n}),t,r.createElement(I,{isMobile:n}))}},1707:function(e,t,n){"use strict";n.d(t,{p:function(){return i}});var r=n(7294),a=n(1883);const i=e=>{let{title:t,description:n,pathname:i,children:s}=e;const{title:o,description:l,image:c,siteUrl:d,twitterUsername:u}=(0,a.useStaticQuery)("1865044719").site.siteMetadata,p={title:t||o,description:n||l,image:""+d+c,url:""+d+(i||""),twitterUsername:u};return r.createElement(r.Fragment,null,r.createElement("title",null,p.title),r.createElement("meta",{name:"description",content:p.description}),r.createElement("meta",{name:"image",content:p.image}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:p.title}),r.createElement("meta",{name:"twitter:url",content:p.url}),r.createElement("meta",{name:"twitter:description",content:p.description}),r.createElement("meta",{name:"twitter:image",content:p.image}),r.createElement("meta",{name:"twitter:creator",content:p.twitterUsername}),r.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),s)}},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},8290:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/sevenfitnessni/static/226bd7bea8eceddb6f9d9dc50c05f434/2391d/icon.png","srcSet":"/sevenfitnessni/static/226bd7bea8eceddb6f9d9dc50c05f434/47ee7/icon.png 6w,\\n/sevenfitnessni/static/226bd7bea8eceddb6f9d9dc50c05f434/29278/icon.png 12w,\\n/sevenfitnessni/static/226bd7bea8eceddb6f9d9dc50c05f434/2391d/icon.png 24w,\\n/sevenfitnessni/static/226bd7bea8eceddb6f9d9dc50c05f434/fcdb9/icon.png 48w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/sevenfitnessni/static/226bd7bea8eceddb6f9d9dc50c05f434/eee53/icon.webp 6w,\\n/sevenfitnessni/static/226bd7bea8eceddb6f9d9dc50c05f434/30aa9/icon.webp 12w,\\n/sevenfitnessni/static/226bd7bea8eceddb6f9d9dc50c05f434/4e704/icon.webp 24w,\\n/sevenfitnessni/static/226bd7bea8eceddb6f9d9dc50c05f434/e78b1/icon.webp 48w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')}}]);
//# sourceMappingURL=commons-b726bc9afd34afb93b43.js.map