(this["webpackJsonpgoogle-engine"]=this["webpackJsonpgoogle-engine"]||[]).push([[0],{64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s(0),a=s.n(n),i=s(19),r=s.n(i),l=(s(64),s(4)),o=(s(65),s(66),s(90)),j=s(92),d=s(47),h=s.n(d),b=s(6),u=s.p+"static/media/Google.8954abfb.png",O=s(22),m=s(31),x=s.n(m),_=s(46),p=s.n(_),v=s(91),f=(s(67),s(24)),g="SETSEARCHTERM",N=Object(f.b)(null,(function(e){return{setSerach:function(t){e(function(e){return{type:g,term:e}}(t))}}}))(Object(l.g)((function(e){var t=Object(n.useState)(""),s=Object(O.a)(t,2),a=s[0],i=s[1],r=function(t){t.preventDefault(),""!==a.trim()&&(e.history.push("/search"),e.setSerach(a))};return Object(c.jsxs)("div",{className:"search",children:[Object(c.jsxs)("div",{className:"search__input",children:[Object(c.jsx)(o.a,{onClick:function(e){return r(e)},children:Object(c.jsx)(x.a,{})}),Object(c.jsx)("input",{onKeyDown:function(e){"Enter"===e.key&&r(e)},onChange:function(e){i(e.target.value)},placeholder:"Search Google",value:a}),Object(c.jsx)(o.a,{children:Object(c.jsx)(p.a,{})})]}),e.showicons&&Object(c.jsxs)("div",{className:"search__buttons",children:[Object(c.jsx)(v.a,{onClick:function(e){return r(e)},variant:"outlined",children:"Google Search"}),Object(c.jsx)(v.a,{variant:"outlined",children:"I'm Feeling Lucky"})]})]})}))),R=function(){return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsxs)("div",{className:"home__header",children:[Object(c.jsxs)("div",{className:"home__header__left",children:[Object(c.jsx)(b.b,{to:"/about",children:"About"}),Object(c.jsx)(b.b,{to:"/store",children:"Store"})]}),Object(c.jsxs)("div",{className:"home__header__right",children:[Object(c.jsx)(b.b,{to:"/mails",children:"Gmail"}),Object(c.jsx)(b.b,{to:"/Images",children:"Images"}),Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)(o.a,{children:Object(c.jsx)(h.a,{})})}),Object(c.jsx)(j.a,{src:"",alt:"avatar"})]})]}),Object(c.jsxs)("div",{className:"home__body",children:[Object(c.jsx)("img",{src:u,alt:"GOOGLE"}),Object(c.jsx)(N,{showicons:!0})]})]})},y=s(36),S=s.n(y),w=s(48),T=function(e){var t=Object(n.useState)(null),s=Object(O.a)(t,2),c=s[0],a=s[1],i=Object(n.useState)(!1),r=Object(O.a)(i,2),l=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var t=Object(w.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o(!0),fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyAb2otvDfyDRmUezdW5jbc_FelZ1Wg0tp4","&cx=").concat("9bb4b245cc03d35b6","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){a(e),o(!1)})).catch((function(e){alert(e.message),o(!1)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),{data:c,loading:l}},L=(s(75),s(76),s(49)),E=s.n(L),I=s(50),k=s.n(I),C=s(51),A=s.n(C),G=s(52),D=s.n(G),F=s(53),M=s.n(F),B=function(){return Object(c.jsxs)("div",{className:"searchResultsOptions",children:[Object(c.jsxs)("div",{className:"searchResultsOptions__Left",children:[Object(c.jsxs)("div",{className:"searchResultsOptions__Left__option",children:[Object(c.jsx)(x.a,{}),Object(c.jsx)(b.b,{to:"/all",children:"ALL"})]}),Object(c.jsxs)("div",{className:"searchResultsOptions__Left__option",children:[Object(c.jsx)(E.a,{}),Object(c.jsx)(b.b,{to:"/news",children:"News"})]}),Object(c.jsxs)("div",{className:"searchResultsOptions__Left__option",children:[Object(c.jsx)(k.a,{}),Object(c.jsx)(b.b,{to:"/images",children:"Images"})]}),Object(c.jsxs)("div",{className:"searchResultsOptions__Left__option",children:[Object(c.jsx)(A.a,{}),Object(c.jsx)(b.b,{to:"/shopping",children:"Shopping"})]}),Object(c.jsxs)("div",{className:"searchResultsOptions__Left__option",children:[Object(c.jsx)(D.a,{}),Object(c.jsx)(b.b,{to:"/maps",children:"Maps"})]}),Object(c.jsxs)("div",{className:"searchResultsOptions__Left__option",children:[Object(c.jsx)(M.a,{}),Object(c.jsx)(b.b,{to:"/more",children:"more"})]})]}),Object(c.jsxs)("div",{className:"searchResultsOptions__right",children:[Object(c.jsx)("div",{className:"searchResultsOptions__right__option",children:Object(c.jsx)(b.b,{to:"/settings",children:"Settings"})}),Object(c.jsx)("div",{className:"searchResultsOptions__right__option",children:Object(c.jsx)(b.b,{to:"/tools",children:"Tools"})})]})]})},P=(s(77),function(){return Object(c.jsx)("div",{className:"loader"})}),X=Object(f.b)((function(e){return{searchedTerm:e.term.serachTerm}}),null)((function(e){var t,s,n=T(e.searchedTerm),i=n.data,r=n.loading;return Object(c.jsxs)("div",{className:"searchResults",children:[Object(c.jsx)("div",{style:{display:"flex",overflowX:"hidden",justifyContent:"center",borderBottom:"1px solid lightgray"},children:Object(c.jsxs)("div",{className:"searchResults__header",children:[Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)("img",{src:u,className:"searchResults__logo",alt:"GOOGLE SEARCH"})}),Object(c.jsxs)("div",{className:"searchResults__body",children:[Object(c.jsx)(N,{showicons:!1}),Object(c.jsx)(B,{})]})]})}),r?Object(c.jsx)("div",{style:{display:"grid",placeItems:"center"},children:Object(c.jsx)(P,{})}):Object(c.jsx)(a.a.Fragment,{children:e.searchedTerm&&Object(c.jsxs)("div",{className:"searchResults__results",children:[Object(c.jsxs)("p",{className:"searchResults__results__deatials",children:["About ",null===i||void 0===i||null===(t=i.searchInformation)||void 0===t?void 0:t.formattedTotalResults," results in (",null===i||void 0===i||null===(s=i.searchInformation)||void 0===s?void 0:s.formattedSearchTime,") seconds for ",e.searchedTerm]}),null===i||void 0===i?void 0:i.items.map((function(e,t){var s,n,a,i,r,l;return Object(c.jsxs)("div",{className:"searchResults__result",children:[Object(c.jsxs)("a",{style:{display:"flex",alignContent:"center"},href:e.link,children:[(null===(s=e.pagemap)||void 0===s||null===(n=s.cse_image)||void 0===n?void 0:n.length)>0&&(null===(a=e.pagemap)||void 0===a||null===(i=a.cse_image[0])||void 0===i?void 0:i.src)&&Object(c.jsx)("img",{className:"searchResults__resultImage",src:null===(r=e.pagemap)||void 0===r||null===(l=r.cse_image[0])||void 0===l?void 0:l.src,alt:"Images"}),e.displayLink]}),Object(c.jsx)("a",{href:e.link,className:"searchResults__resultTitle",children:Object(c.jsx)("h2",{children:e.title})}),Object(c.jsx)("p",{className:"searchResults__resultSnippet",children:e.snippet})]},t)}))]})})]})}));var z=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{path:"/search",children:Object(c.jsx)(X,{})}),Object(c.jsx)(l.b,{path:"/",exact:!0,children:Object(c.jsx)(R,{})}),Object(c.jsx)(l.a,{to:"/"})]})})},H=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,93)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))},J=s(23),U=s(54),W=s(37),q={serachTerm:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(W.a)(Object(W.a)({},e),{},{serachTerm:t.term});default:return e}},V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,Z=Object(J.c)({term:K}),Q=Object(J.e)(Z,V(Object(J.a)(U.a))),Y=Object(c.jsx)(b.a,{children:Object(c.jsx)(f.a,{store:Q,children:Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(z,{})})})});r.a.render(Y,document.getElementById("root")),H()}},[[78,1,2]]]);
//# sourceMappingURL=main.8a3805cf.chunk.js.map