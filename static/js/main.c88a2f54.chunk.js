(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/insta.03c1fcb5.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),o=a.n(r),c=(a(11),a(2)),i=a(3),s=a(1),m=function(){return l.a.createElement("div",{className:"anchor-to-top",onClick:function(e){window.scroll({top:0,behavior:"smooth"})}},l.a.createElement("p",null))},d=function(e){var t=e.name,a=e.value,n=e.nameColor,r=void 0===n?null:n,o=e.valColor,i=void 0===o?null:o,s=(e.width,e.height,e.parentClass),m=void 0===s?null:s,d=e.seconds,u=void 0===d?null:d,E=l.a.useState(!1),p=Object(c.a)(E,2),h=p[0],f=p[1];return l.a.useEffect((function(){m&&window.addEventListener("scroll",(function(){var e=window.scrollY,t=document.querySelector(".".concat(m)).getClientRects()[0];e>t.top&&e<t.bottom&&!1===h&&f(!0)}))}),[h,m]),l.a.createElement("div",{className:"radial-progress"},l.a.createElement("div",{className:"percent"},l.a.createElement("svg",null,l.a.createElement("circle",{cx:"70",cy:"70",r:"70",shapeRendering:"auto"}),m?l.a.createElement("circle",{cx:"70",cy:"70",r:"70",shapeRendering:"auto",style:{stroke:i||"#03a9f4",strokeDashoffset:h?"calc(440 - ((440 * ".concat(a,") / 100))"):"calc(440 - ((440 * 0) / 100))",transition:u?'"stroke-dashoffset '.concat(u,'s linear"'):"stroke-dashoffset 3s linear"}}):l.a.createElement("circle",{cx:"70",cy:"70",r:"70",shapeRendering:"auto",style:{stroke:i||"#03a9f4",strokeDashoffset:"calc(440 - ((440 * ".concat(a,") / 100))"),transition:"stroke-dashoffset 1s linear"}})),l.a.createElement("div",{className:"number",style:{color:r||"#999"}},l.a.createElement("h2",null,a,l.a.createElement("span",null,"%")))),l.a.createElement("h2",{style:{color:r||"#000"}},t))},u=function(e){var t=e.title,a=e.style;return l.a.createElement("header",{className:"side-header",style:Object(s.a)({},a)},t)},E=function(e){var t=e.title,a=e.bodyStyle,n=e.className,r=Object(i.a)(e,["title","bodyStyle","className"]),o=l.a.useState(!1),s=Object(c.a)(o,2),m=s[0],d=s[1];return l.a.useEffect((function(){window.addEventListener("scroll",(function(){var e=window.scrollY,a=document.querySelector(".".concat(n||t.split(" ")[0])).getClientRects()[0];e>a.top&&e<a.bottom&&!1===m&&d(!0)}))}),[m]),l.a.createElement("div",{className:m?"vertical-section ".concat(n||t.split(" ")[0]," fadein"):"vertical-section ".concat(n||t.split(" ")[0])},l.a.createElement(u,{title:t}),l.a.createElement("div",{className:"content",style:a},r.children))},p=function(e){var t=e.height,a=void 0===t?null:t,n=e.width,r=void 0===n?null:n,o=e.bordered,c=e.bodyStyle,s=Object(i.a)(e,["height","width","bordered","bodyStyle"]);return l.a.createElement("div",{className:"box-highlighted",style:c},l.a.createElement("span",{className:"box-anim",style:{height:a?"".concat(a,"px"):"100%",width:r?"".concat(r,"px"):"100%",border:o?"0.1px solid rgba(255,255,255,0.1)":"none"}},s.children))},h=function(e){var t=e.color,a=void 0===t?null:t,n=e.bodyStyle,r=e.width,o=e.height,c=Object(i.a)(e,["color","bodyStyle","width","height"]);return l.a.createElement("div",{className:"card",style:Object(s.a)({borderTop:a?"5px solid ".concat(a):"none",width:r?"".concat(r,"px"):"100%",height:o?"".concat(o,"px"):"100%"},n)},c.children)},f=function(e){var t=e.bodyStyle,a=e.width,n=e.height,r=Object(i.a)(e,["bodyStyle","width","height"]);return l.a.createElement(p,{bodyStyle:{margin:"20px"}},l.a.createElement("div",{className:"bordered-card",style:Object(s.a)({border:"0.02px solid rgba(255,255,255,0.1)",backgroundColor:"rgba(255,255,255,0.01)",width:a?"".concat(a,"px"):"100%",height:n?"".concat(n,"px"):"100%"},t)},r.children))},v=function(e){var t=e.color,a=e.widthPercent;return l.a.createElement("hr",{style:{margin:"10px 0",borderWidth:"2px",borderStyle:"solid",width:a?"".concat(a,"%"):"unset",borderColor:t||"unset"}})},g=function(){var e=l.a.useState({scrolled:!0,percentage:0}),t=Object(c.a)(e,2),a=t[0],n=t[1];return l.a.useEffect((function(){window.addEventListener("scroll",(function(){var e=window.scrollY<10,t=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;n(e?{scrolled:!0,percentage:Math.floor(t)}:{scrolled:!1,percentage:Math.floor(t)})}))}),[]),l.a.createElement("div",{className:a.scrolled?"header":"header scrolled"},l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("b",null,"ANDRU"),a.scrolled?l.a.createElement("i",null,"Developer"):null),l.a.createElement("span",{className:"menu-btn",onClick:function(e){return console.log("header clicked")}},"MENU")),a.scrolled?null:l.a.createElement("div",{className:"progress-container"},l.a.createElement("div",{className:"progress-bar",style:{width:"".concat(a.percentage,"%")}})),a.scrolled?null:l.a.createElement(m,null))},y=(a(12),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"main-bg"}),l.a.createElement("div",{className:"main-darken"}),l.a.createElement("div",{className:"main-content"},l.a.createElement("span",{className:"main-topic"},"developer")),l.a.createElement("div",{className:"mouse"},l.a.createElement("span",null))))}),b=function(){return l.a.createElement(E,{title:"About Me",className:"about",bodyStyle:{justifyContent:"space-between"}},l.a.createElement(p,{bordered:!0,height:"400",width:"300",bodyStyle:{margin:"45px",marginLeft:0}}),l.a.createElement("span",{className:"about-text"},l.a.createElement("h1",null,"Hello, I'm Andruraj"),l.a.createElement("p",null,"Experienced Programmer with a demonstrated history of working in the information technology and services industry. Skilled in React.js, Node.js, Python, Django, Core Java, and MySQL, MangoDB. Web Developer and passionate in App development and programming.")))},w=function(){var e=l.a.useState({username:"",email:"",mobile:"",message:""}),t=Object(c.a)(e,2),a=t[0],n=t[1];return l.a.createElement(E,{title:"Contact Me",className:"contact"},l.a.createElement(p,null,l.a.createElement("div",{className:"contact-info"},l.a.createElement("span",null,l.a.createElement("b",null,"EMAIL"),l.a.createElement("p",null,"andruraj05@gmail.com"),l.a.createElement("p",null,"andruraj0511@gmail.com"),l.a.createElement("br",null),l.a.createElement("b",null,"CALL ME"),l.a.createElement("p",null,"+91 7418412712"),l.a.createElement("br",null),l.a.createElement("b",null,"LOCATION"),l.a.createElement("p",null,"Chennai")))),l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"identity"},l.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:a.username,onChange:function(e){return n(Object(s.a)(Object(s.a)({},a),{},{username:e.target.value}))}}),l.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:function(e){return n(Object(s.a)(Object(s.a)({},a),{},{email:e.target.value}))}}),l.a.createElement("input",{type:"text",pattern:"\\d*",maxLength:"10",name:"mobile",placeholder:"Mobile Number",value:a.mobile,onChange:function(e){n(Object(s.a)(Object(s.a)({},a),{},{mobile:e.target.value}))}})),l.a.createElement("div",{className:"message"},l.a.createElement("textarea",{name:"message",cols:"80",rows:"10",placeholder:"Enter your message here...",value:a.message,onChange:function(e){return n(Object(s.a)(Object(s.a)({},a),{},{message:e.target.value}))}})),l.a.createElement("div",{className:"button-anim"},l.a.createElement("button",null,"Send Message"))))},N=function(){return l.a.createElement("footer",null,l.a.createElement("span",null,"\xa9 2020. All Rights Reserved"))},S=function(){return l.a.createElement(E,{title:"Skills",className:"skills",bodyStyle:{justifyContent:"space-evenly",flexFlow:"wrap"}},l.a.createElement(h,{color:"deepskyblue",height:"200",width:"400",bodyStyle:{display:"flex",justifyContent:"space-between"}},l.a.createElement("span",null,l.a.createElement("h1",null,"React JS"),l.a.createElement("p",null,"Professional React Developer with 2+ yrs of Experience")),l.a.createElement(d,{name:"React JS",value:"90",nameColor:"#fff",valColor:"red",parentClass:"skills"})),l.a.createElement(h,{color:"deepskyblue",height:"200",width:"400",bodyStyle:{display:"flex",justifyContent:"space-between"}},l.a.createElement("span",null,l.a.createElement("h1",null,"Node JS"),l.a.createElement("p",null,"Professional Node JS Developer with 2+ yrs of Experience")),l.a.createElement(d,{name:"Node JS",value:"75",nameColor:"#fff",valColor:"red",parentClass:"skills"})),l.a.createElement(f,{height:"200",width:"400",bodyStyle:{display:"flex"}},l.a.createElement("span",null,l.a.createElement("h1",null,"Python"),l.a.createElement("p",null,"Well-versed in Django, Data Structures and Machine Learning")),l.a.createElement(d,{name:"Python",value:"85",nameColor:"#fff",valColor:"red",parentClass:"skills"})),l.a.createElement(f,{height:"200",width:"400",bodyStyle:{display:"flex"}},l.a.createElement("span",null,l.a.createElement("h1",null,"MySQL"),l.a.createElement("p",null,"Worked with SQL server, Oracle, SQLite and PySQL")),l.a.createElement(d,{name:"MySQL",value:"80",nameColor:"#fff",valColor:"red",parentClass:"skills"})))},C=function(){return l.a.createElement(E,{className:"services",title:"Services"},l.a.createElement(f,{width:"300"},l.a.createElement("h2",null,"Website Development"),l.a.createElement("p",null,"Do you want to build an interactive website, quick and easy? Come to us.")),l.a.createElement("span",{style:{marginTop:"50px"}},l.a.createElement(f,{width:"300",bodyStyle:{backgroundColor:"rgba(255,255,255,0.05)"}},l.a.createElement("h2",null,"Coaching"),l.a.createElement("p",null,"Do you want to become a powerful programmer? Come to us."))),l.a.createElement(f,{width:"300"},l.a.createElement("h2",null,"Mobile Apps"),l.a.createElement("p",null,"Do you want to build an Android Application, quick and easy. Come to us.")))},k=function(){return l.a.createElement(E,{className:"resume",title:"Resume"},l.a.createElement(h,{color:"coral",width:"300"},l.a.createElement("div",null,l.a.createElement("p",{className:"head1"},"Experience"),l.a.createElement("p",null,"Experienced Programmer with a demonstrated history of working in the information technology and services industry. Skilled in React.js, Node.js, Python, Django, Core Java, and MySQL, MangoDB.")),l.a.createElement(v,{color:"coral",widthPercent:"35"}),l.a.createElement("div",null,l.a.createElement("p",{className:"head2"},"MiraMedAjuba"),l.a.createElement("p",null,"Full Stack Developer 2019-Present")),l.a.createElement("div",null,l.a.createElement("p",{className:"head2"},"Cognizant"),l.a.createElement("p",null,"React Developer 2017-2019"))),l.a.createElement(h,{color:"yellow",width:"300",bodyStyle:{backgroundColor:"rgba(255,255,255,0.05)",marginTop:"70px"}},l.a.createElement("div",null,l.a.createElement("p",{className:"head1"},"Education"),l.a.createElement("p",null,"A Professional Engineer entitled with a Bachelor Degree in Electronics and Communications Engineering.")),l.a.createElement(v,{color:"yellow",widthPercent:"35"}),l.a.createElement("div",null,l.a.createElement("p",{className:"head2"},"B.E.ECE"),l.a.createElement("p",null,"GKM College of Engg 2012 - 2016")),l.a.createElement("div",null,l.a.createElement("p",{className:"head2"},"HSC"),l.a.createElement("p",null,"Zion Mat. Hr. Sec. School 2010 - 2012")),l.a.createElement("div",null,l.a.createElement("p",{className:"head2"},"10th"),l.a.createElement("p",null,"SDA Mat. SChool 2009 - 2010"))),l.a.createElement(h,{color:"deepskyblue",width:"300"},l.a.createElement("p",{className:"head1"},"Achievements"),l.a.createElement(v,{color:"deepskyblue",widthPercent:"35"}),l.a.createElement("p",{className:"head2"},"Task Management System"),l.a.createElement("p",null,"Web Application to allot, monitor and track tasks and productivity."),l.a.createElement("p",{className:"head2"},"Cards Drag and Drop"),l.a.createElement("p",null,"Developed an intuitive Application of card data with nested Drag and Drop functionality"),l.a.createElement("p",{className:"head2"},"IDE"),l.a.createElement("p",null,"Developed an IDE for XML with dynamic preview")))},x=function(){return l.a.useEffect((function(){void 0!==document.querySelector("#root")&&window.scrollTo({top:0,behavior:"smooth"})}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement(y,null),l.a.createElement(b,null),l.a.createElement(S,null),l.a.createElement(C,null),l.a.createElement(k,null),l.a.createElement(w,null),l.a.createElement(N,null))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Portfolio","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.c88a2f54.chunk.js.map