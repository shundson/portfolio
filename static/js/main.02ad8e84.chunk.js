(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var n,s,a,i=c(2),o=c.n(i),r=c(32),j=c.n(r),l=(c(60),c(61),c(62),c(16)),d=c(6),b=c(35),m=c(36),x=c(1),h=function(e){var t=e.kansu;return Object(x.jsx)("div",{id:"hamburgerbg",children:Object(x.jsx)("nav",{id:"nav",className:"navv",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{onClick:t,children:Object(x.jsx)(l.b,{to:"/",children:"TOP"})}),Object(x.jsx)("li",{onClick:t,children:Object(x.jsx)(l.b,{to:"/works",children:"WORKS"})}),Object(x.jsx)("li",{onClick:t,children:Object(x.jsx)(l.b,{to:"/skills",children:"SKILS"})}),Object(x.jsx)("li",{onClick:t,children:Object(x.jsx)(l.b,{to:"/about",children:"ABOUT"})})]})})})},u=function(e){var t=e.kansu;return Object(x.jsxs)("div",{class:"hamburger",onClick:t,id:"hanhan",children:[Object(x.jsx)("span",{class:"inner_line",id:"line1"}),Object(x.jsx)("span",{class:"inner_line",id:"line2"}),Object(x.jsx)("span",{class:"inner_line",id:"line3"})]})},O=function(){var e=function(){document.getElementById("nav").classList.toggle("in"),document.getElementById("line1").classList.toggle("batu1"),document.getElementById("line3").classList.toggle("batu2"),document.getElementById("line2").classList.toggle("shokyo"),document.getElementById("hanhan").classList.toggle("mae"),document.getElementsByTagName("body")[0].classList.toggle("fixed")};return Object(x.jsx)(g,{children:Object(x.jsxs)("div",{className:"menuwrap",children:[Object(x.jsxs)("div",{className:"wrapper SpaceBetween flex",children:[Object(x.jsx)("h1",{className:"logo",children:"shunD's PortFolio"}),Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{className:"Headernav flex",children:[Object(x.jsx)(p,{children:Object(x.jsx)(f,{to:"/",children:"TOP"})}),Object(x.jsx)(p,{children:Object(x.jsx)(f,{to:"/works",children:"WORKS"})}),Object(x.jsx)(p,{children:Object(x.jsx)(f,{to:"/skills",children:"SKILLS"})}),Object(x.jsx)(p,{children:Object(x.jsx)(f,{to:"/about",children:"ABOUT"})})]})}),Object(x.jsx)(u,{kansu:e})]}),Object(x.jsx)(h,{kansu:e})]})})},g=m.a.header(n||(n=Object(b.a)(["\n  background-color: #5dbeff;\n  color: #fff;\n  font-weight: 600;\n  height: 80px;\n"]))),p=m.a.li(s||(s=Object(b.a)(["\n  background-color: #5dbeff;\n  margin-left: 80px;\n"]))),f=Object(m.a)(l.b)(a||(a=Object(b.a)(["\n  color: white;\n"]))),v=function(e){var t=e.IconName,c=e.monid;return Object(x.jsx)("div",{children:Object(x.jsx)("img",{className:"".concat(c),src:"".concat("/portfolio","/images/").concat(t,".png"),alt:t})})},N=function(){return Object(x.jsxs)("div",{className:"mainvisual",children:[Object(x.jsx)("div",{className:"kuroku"}),Object(x.jsx)(v,{IconName:"monster1",monid:"mon1"}),Object(x.jsx)(v,{IconName:"monster2",monid:"mon2"}),Object(x.jsx)(v,{IconName:"monster3",monid:"mon3"}),Object(x.jsx)(v,{IconName:"monster4",monid:"mon4"}),Object(x.jsx)(v,{IconName:"monster5",monid:"mon5"}),Object(x.jsx)(v,{IconName:"monster6",monid:"mon6"}),Object(x.jsx)("h1",{class:"port",children:"shunD's Portfolio Site"})]})},y=function(){return Object(x.jsx)("div",{className:"top",children:Object(x.jsx)(N,{})})},I=c(43),k=function(e){var t=Object(I.useSpring)({to:{opacity:1,color:"#ffaaee"},from:{opacity:0,color:"red"}}),c=e.children;return Object(x.jsx)(I.animated.div,{style:t,children:c})},B=c(8),w=Object(i.memo)((function(e){var t=e.setinfo,c=e.content;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"modalwindow",id:"window".concat(c.id),children:[Object(x.jsx)("div",{className:"back",onClick:t}),Object(x.jsxs)("div",{className:"modalContent",children:[Object(x.jsx)("img",{src:c.image,alt:""}),Object(x.jsxs)("div",{className:"Mtext",children:[Object(x.jsx)("p",{className:"Mname",children:c.name}),Object(x.jsx)("p",{className:"Mdesc",children:c.desc}),Object(x.jsxs)("p",{className:"Murl",children:["URL:",Object(x.jsx)("a",{href:c.url,children:c.url})]})]})]})]})})})),E=function(e){var t=e.content;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("img",{src:t.image,alt:"\u4f5c\u54c1",width:"100%"}),Object(x.jsx)("p",{className:"worksname",children:t.name})]})},L=[{id:0,name:"\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8",image:"".concat("/portfolio","/images/sakuhin.jpg"),desc:"React\u3092\u7528\u3044\u305f\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8",url:"https://shundson.netlify.app"},{id:1,name:"\u30ab\u30d5\u30a7\u306e\u30b5\u30a4\u30c8",image:"".concat("/portfolio","/images/sakuhin2.jpg"),desc:"jQuery\u3092\u7528\u3044\u305f\u30ab\u30d5\u30a7\u306e\u67b6\u7a7a\u30b5\u30a4\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002\u30d5\u30a7\u30fc\u30c9\u30a4\u30f3\u30a2\u30a6\u30c8\u3001\u30b9\u30e9\u30a4\u30c9\u30b7\u30e7\u30fc\u306a\u3069\u3092\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002\u203b\u30b9\u30de\u30db\u975e\u5bfe\u5fdc",url:"https://sad-fermi-d92830.netlify.app"},{id:2,name:"QiitaAPI\u3092\u4f7f\u3063\u305f\u8a18\u4e8b\u691c\u7d22\u30a2\u30d7\u30ea",image:"".concat("/portfolio","/images/sakuhin3.jpg"),desc:"QiitaAPI\u3092\u4f7f\u3044\u3001Qiita\u306e\u8a18\u4e8b\u3092\u691c\u7d22\u3067\u304d\u308b\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u305f\u3002React/QiitaAPI/bootstrap/\u4f7f\u7528",url:"https://shundson.github.io/react-axcios-qiita/"},{id:3,name:"\u30c4\u30a4\u30fc\u30c8\u30a2\u30d7\u30ea",image:"".concat("/portfolio","/images/sakuhin4.jpg"),desc:"\u30c4\u30a4\u30fc\u30c8\u6a5f\u80fd\u304c\u3064\u3044\u3066\u3044\u308b\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u3092\u5236\u4f5c\u3057\u305f\u3002React/Redux toolkit/Firebase/\u4f7f\u7528",url:"https://react-sns-f92b5.web.app/"},{id:4,name:"name5",image:"".concat("/portfolio","/images/sakuhin.jpg"),desc:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",url:"https://google.com"},{id:5,name:"name6",image:"".concat("/portfolio","/images/sakuhin.jpg"),desc:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",url:"https://google.com"},{id:6,name:"name7",image:"".concat("/portfolio","/images/sakuhin.jpg"),desc:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",url:"https://google.com"},{id:7,name:"name8",image:"".concat("/portfolio","/images/sakuhin.jpg"),desc:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",url:"https://google.com"}],S=function(){var e=Object(i.useState)({admin:!1,id:null}),t=Object(B.a)(e,2),c=t[0],n=t[1],s=["#E15B5B","#AB5BE1","#5B6DE1","#5BCFE1","#D8E15B","#5BE16D"];return Object(x.jsxs)(x.Fragment,{children:[c.admin&&Object(x.jsx)(w,{setinfo:n,content:L[c.id]}),Object(x.jsx)("div",{className:"WorksFlex flex wrapper",children:L.map((function(e){return Object(x.jsx)("div",{style:{backgroundColor:"".concat(s[e.id%6]),border:"solid 10px ".concat(s[e.id%6])},className:"workscard",onClick:function(){return t=e.id,void n({admin:!c.admin,id:t});var t},children:Object(x.jsx)(E,{content:e})},e.id)}))})]})},C=function(){return Object(x.jsxs)("div",{className:"WorksPage",children:[Object(x.jsx)(k,{children:Object(x.jsx)("h2",{className:"worksh2",children:"WORKS"})}),Object(x.jsx)(v,{IconName:"monster4",monid:"monfix1"}),Object(x.jsx)(v,{IconName:"monster6",monid:"monfix2"}),Object(x.jsx)(S,{})]})},F=c(3),T=c(55),P=c.n(T),R=(c(50),c(51),function(e){var t=e.style,c=e.IconName,n=e.name;return Object(x.jsxs)("div",{style:t,className:"slidewrap",children:[Object(x.jsx)("img",{className:"slideicon",src:"".concat("/portfolio","/images/").concat(c,".png"),alt:c}),Object(x.jsx)("p",{className:"slidename",children:n})]})});function A(){var e={dots:!0,infinite:!0,speed:700,slidesToShow:3,slidesToScroll:1};return window.matchMedia("(max-width: 768px)").matches&&(e={dots:!0,infinite:!0,speed:700,slidesToShow:1,slidesToScroll:1}),Object(x.jsxs)(P.a,Object(F.a)(Object(F.a)({},e),{},{children:[Object(x.jsx)("div",{children:Object(x.jsx)(R,{style:{margin:40,height:300,color:"#fff",background:"#5B6DE1"},IconName:"html",name:"HTML/CSS"})}),Object(x.jsx)("div",{children:Object(x.jsx)(R,{style:{margin:40,height:300,color:"#fff",background:"#5BCFE1"},IconName:"react",name:"React"})}),Object(x.jsx)("div",{children:Object(x.jsx)(R,{style:{margin:40,height:300,color:"#fff",background:"#AB5BE1"},IconName:"ruby",name:"Ruby on Rails"})}),Object(x.jsx)("div",{children:Object(x.jsx)(R,{style:{margin:40,height:300,color:"#fff",background:"#D8E15B"},IconName:"jquery",name:"jQuery"})}),Object(x.jsx)("div",{children:Object(x.jsx)(R,{style:{margin:40,height:300,color:"#fff",background:"#E15B5B"},IconName:"adobexd",name:"Adobe XD"})}),Object(x.jsx)("div",{children:Object(x.jsx)(R,{style:{margin:40,height:300,color:"#fff",background:"#5BE16D"},IconName:"photoshop",name:"Adobe Photoshop"})})]}))}var D=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{IconName:"monster3",monid:"monfix1"}),Object(x.jsx)(v,{IconName:"monster5",monid:"monfix2"}),Object(x.jsxs)("div",{className:"SkillsPage wrapper",children:[Object(x.jsx)("h2",{className:"worksh2",children:"SKILLS"}),Object(x.jsx)(A,{}),Object(x.jsxs)("div",{className:"skilldesc",children:[Object(x.jsx)("p",{children:"HTML/CSS\u3092\u306f\u3058\u3081\u3001jQuery\u3084React\u3092\u7528\u3044\u305f\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u306e\u5236\u4f5c"}),Object(x.jsx)("p",{children:"Adobe Photoshop\u3084AdobeXD\u3092\u7528\u3044\u305f\u30c7\u30b6\u30a4\u30f3"}),Object(x.jsx)("p",{children:"Ruby on Rails \u3067\u306e\u30a2\u30d7\u30ea\u5236\u4f5c"}),Object(x.jsx)("p",{children:"\u305d\u306e\u4ed6\u304a\u6c17\u8efd\u306b\u3054\u76f8\u8ac7\u304f\u3060\u3055\u3044"})]})]})]})},M=function(){return Object(x.jsx)("footer",{children:Object(x.jsx)("div",{className:"footerwith",children:Object(x.jsx)("a",{href:"https://icons8.com",children:"Icons by Icons8"})})})},Q=Object(i.createContext)(1),K=function(e){var t=e.children,c=Object(i.useState)(1),n=Object(B.a)(c,2),s=n[0],a=n[1];return Object(x.jsx)(Q.Provider,{value:{tabInfo:s,setTab:a},children:t})},q=function(e){var t=Object(i.useContext)(Q).setTab,c=e.name,n=e.tabNo;return Object(x.jsx)("li",{className:"tabbutton",onClick:function(){t(n)},children:Object(x.jsx)("a",{id:"tabbutton".concat(n),children:c})})},U=function(){return Object(x.jsxs)("ul",{className:"flex",children:[Object(x.jsx)(q,{name:"\u81ea\u5df1\u7d39\u4ecb",tabNo:1}),Object(x.jsx)(q,{name:"Github",tabNo:2}),Object(x.jsx)(q,{name:"\u30b3\u30f3\u30bf\u30af\u30c8",tabNo:3})]})},W=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"namewithimage",children:[Object(x.jsx)("img",{width:"230px",className:"profileimage",src:"".concat("/portfolio","/images/myicon.jpg"),alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf"}),Object(x.jsx)("p",{className:"shunD",style:{margin:0},children:"\u3057\u3085\u3093\u3067\u3043\u30fc"})]})})},_=function(e){var t=e.tabid,c=e.children;return Object(x.jsx)("div",{id:t,className:"tabcontent",children:c})},H=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{className:"form",action:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSdt6gax_puckd-7PPtVrEsxYiG3iLsMC-KS14pFr2zBRDuekg/formResponse",children:[Object(x.jsx)("label",{for:"form-name",children:"\u304a\u540d\u524d"}),Object(x.jsx)("p",{children:Object(x.jsx)("input",{className:"inputarea",id:"form-name",type:"text",name:"entry.2017160994",placeholder:"\u540d\u524d",required:""})}),Object(x.jsx)("label",{for:"form-mail",children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(x.jsx)("p",{children:Object(x.jsx)("input",{className:"inputarea",id:"form-mail",type:"email",name:"entry.1782306178",placeholder:"example@mail.co.jp",required:""})}),Object(x.jsx)("label",{for:"form-detail",children:"\u304a\u554f\u3044\u5408\u308f\u305b\u8a73\u7d30"}),Object(x.jsx)("p",{children:Object(x.jsx)("textarea",{className:"inputarea",id:"form-detail",name:"entry.1363619119",placeholder:"\u3054\u81ea\u7531\u306b\u3054\u8a18\u8f09\u4e0b\u3055\u3044\u3002",required:""})}),Object(x.jsx)("p",{children:Object(x.jsx)("button",{type:"submit",name:"button",value:"\u9001\u4fe1\u3059\u308b",children:"\u9001\u4fe1\u3059\u308b"})})]}),Object(x.jsx)("a",{className:"SNS",href:"#",children:Object(x.jsx)("img",{width:"60px",src:"".concat("/portfolio","/images/twitter.png"),alt:"\u30c4\u30a4\u30c3\u30bf\u30fc\u30a2\u30a4\u30b3\u30f3"})}),Object(x.jsx)("a",{className:"SNS",href:"#",children:Object(x.jsx)("img",{width:"50px",src:"".concat("/portfolio","/images/insta.png"),alt:"\u30a4\u30f3\u30b9\u30bf\u30b0\u30e9\u30e0\u30a2\u30a4\u30b3\u30f3"})})]})},G=function(){var e=Object(i.useContext)(Q).tabInfo;return Object(x.jsxs)(x.Fragment,{children:[1===e&&Object(x.jsx)(_,{tabid:"tab1",children:Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)(W,{}),Object(x.jsxs)("div",{className:"procontent",children:[Object(x.jsx)("p",{children:"\u9ad8\u5c02\u51fa\u8eab\u306e\u30c7\u30b8\u30bf\u30eb\u30af\u30ea\u30a8\u30a4\u30bf\u30fc\u3067\u3059\uff01"}),Object(x.jsx)("p",{children:"\u5b66\u751f\u6642\u4ee3\u306f\u8da3\u5473\u306e\u6f14\u5287\u306b\u71b1\u4e2d\u3057\u3001\u6210\u7e3e\u3092\u4e0b\u304b\u3089\uff15\u756a\u76ee\u307e\u3067\u4e0b\u3052\u307e\u3057\u305f\u3002"}),Object(x.jsx)("p",{children:"\u3057\u304b\u3057\u5c31\u6d3b\u3092\u6a5f\u306b\u5fc3\u3092\u5165\u308c\u66ff\u3048\u3001\u6700\u7d42\u7684\u306b\u30af\u30e9\u30b9\uff11\uff16\u4f4d\u307e\u3067\u3082\u3069\u3057\u307e\u3057\u305f\uff01\uff08\u305d\u3093\u306a\u9ad8\u304f\u306a\u3044\uff09"}),Object(x.jsx)("p",{children:"\u4eca\u306f\u30af\u30ea\u30a8\u30a4\u30bf\u30fc\u3068\u3057\u3066\u6d3b\u8e8d\u3059\u308b\u305f\u3081\u3001\u52c9\u5f37\u4e2d\u3067\u3059\uff01"}),Object(x.jsx)("p",{children:"\u30a6\u30a7\u30d6\u5236\u4f5c\u3092\u901a\u3057\u3066\u3001\u4f01\u696d\u3084\u4eba\u306e\u60f3\u3044\u3092\u4e16\u306b\u4f1d\u3048\u3001\u300c\u30d5\u30a1\u30f3\u300d\u3092\u4f5c\u308b\u624b\u52a9\u3051\u304c\u3067\u304d\u308b\u3088\u3046\u306a\u30af\u30ea\u30a8\u30a4\u30bf\u30fc\u306b\u306a\u308b\u306e\u304c\u5922\u3002"})]})]})}),2===e&&Object(x.jsx)(_,{tabid:"tab2",children:Object(x.jsx)("p",{className:"comingsoon",children:"Coming Soon!!"})}),3===e&&Object(x.jsx)(_,{tabid:"tab3",children:Object(x.jsx)(H,{})})]})},J=function(){var e=Object(i.useContext)(Q).tabInfo;return Object(i.useEffect)((function(){1===e?(document.getElementById("tabbutton1").classList.add("maintab"),document.getElementById("tabbutton1").classList.remove("subtab"),document.getElementById("tabbutton2").classList.add("subtab"),document.getElementById("tabbutton2").classList.remove("maintab"),document.getElementById("tabbutton3").classList.add("subtab"),document.getElementById("tabbutton3").classList.remove("maintab")):2===e?(document.getElementById("tabbutton1").classList.add("subtab"),document.getElementById("tabbutton1").classList.remove("maintab"),document.getElementById("tabbutton2").classList.add("maintab"),document.getElementById("tabbutton2").classList.remove("subtab"),document.getElementById("tabbutton3").classList.add("subtab"),document.getElementById("tabbutton3").classList.remove("maintab")):3===e&&(document.getElementById("tabbutton1").classList.add("subtab"),document.getElementById("tabbutton1").classList.remove("maintab"),document.getElementById("tabbutton2").classList.add("subtab"),document.getElementById("tabbutton2").classList.remove("maintab"),document.getElementById("tabbutton3").classList.add("maintab"),document.getElementById("tabbutton3").classList.remove("subtab"))})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(U,{}),Object(x.jsx)(G,{})]})},X=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{IconName:"monster1",monid:"monfix1"}),Object(x.jsx)(v,{IconName:"monster2",monid:"monfix2"}),Object(x.jsxs)("div",{className:"wrapper ",children:[Object(x.jsx)("h2",{className:"worksh2",children:"ABOUT"}),Object(x.jsx)(J,{})]})]})},z=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"wrapper resabout",children:[Object(x.jsx)("h2",{className:"worksh2",children:"ABOUT"}),Object(x.jsx)(W,{}),Object(x.jsx)("p",{children:"\u9ad8\u5c02\u51fa\u8eab\u306e\u30c7\u30b8\u30bf\u30eb\u30af\u30ea\u30a8\u30a4\u30bf\u30fc\u3067\u3059\uff01"}),Object(x.jsx)("p",{children:"\u5b66\u751f\u6642\u4ee3\u306f\u8da3\u5473\u306e\u6f14\u5287\u306b\u71b1\u4e2d\u3057\u3001\u6210\u7e3e\u3092\u4e0b\u304b\u3089\uff15\u756a\u76ee\u307e\u3067\u4e0b\u3052\u307e\u3057\u305f\u3002"}),Object(x.jsx)("p",{children:"\u3057\u304b\u3057\u5c31\u6d3b\u3092\u6a5f\u306b\u5fc3\u3092\u5165\u308c\u66ff\u3048\u3001\u6700\u7d42\u7684\u306b\u30af\u30e9\u30b9\uff11\uff16\u4f4d\u307e\u3067\u3082\u3069\u3057\u307e\u3057\u305f\uff01\uff08\u305d\u3093\u306a\u9ad8\u304f\u306a\u3044\uff09"}),Object(x.jsx)("p",{children:"\u4eca\u306f\u30af\u30ea\u30a8\u30a4\u30bf\u30fc\u3068\u3057\u3066\u6d3b\u8e8d\u3059\u308b\u305f\u3081\u3001\u52c9\u5f37\u4e2d\u3067\u3059\uff01"}),Object(x.jsx)("p",{children:"\u30a6\u30a7\u30d6\u5236\u4f5c\u3092\u901a\u3057\u3066\u3001\u4f01\u696d\u3084\u4eba\u306e\u60f3\u3044\u3092\u4e16\u306b\u4f1d\u3048\u3001\u300c\u30d5\u30a1\u30f3\u300d\u3092\u4f5c\u308b\u624b\u52a9\u3051\u304c\u3067\u304d\u308b\u3088\u3046\u306a\u30af\u30ea\u30a8\u30a4\u30bf\u30fc\u306b\u306a\u308b\u306e\u304c\u5922\u3002"}),Object(x.jsx)(H,{})]})})},V=function(){var e=!0;return window.matchMedia("(max-width: 768px)").matches&&(e=!1),Object(x.jsx)(l.a,{basename:"/portfolio",children:Object(x.jsxs)(d.c,{children:[Object(x.jsxs)(d.a,{exact:!0,path:"/",children:[Object(x.jsx)(O,{}),Object(x.jsx)(y,{})]}),Object(x.jsxs)(d.a,{exact:!0,path:"/works",children:[Object(x.jsx)(O,{}),Object(x.jsx)(C,{})]}),Object(x.jsxs)(d.a,{exact:!0,path:"/skills",children:[Object(x.jsx)(O,{}),Object(x.jsx)(D,{}),Object(x.jsx)(M,{})]}),Object(x.jsxs)(d.a,{exact:!0,path:"/about",children:[Object(x.jsx)(O,{}),e&&Object(x.jsx)(X,{}),!e&&Object(x.jsx)(z,{})]})]})})};var Y=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(K,{children:Object(x.jsx)(V,{})})})},Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};j.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[85,1,2]]]);
//# sourceMappingURL=main.02ad8e84.chunk.js.map