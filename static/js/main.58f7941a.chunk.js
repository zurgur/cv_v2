(this.webpackJsonpcv_v2=this.webpackJsonpcv_v2||[]).push([[0],[,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),i=a.n(r),c=(a(9),a(1)),o=(a(10),a(11),function(e){return l.a.createElement("header",{className:"intro"},l.a.createElement("label",{id:"switch",className:"switch"},l.a.createElement("input",{type:"checkbox",onChange:function(t){return e.toggleTheme(t)},id:"slider"}),l.a.createElement("span",{className:"slider round"})),l.a.createElement("h1",null,"Hello !"),l.a.createElement("h2",null,"My name is ",l.a.createElement("span",{className:"name"},"Alexander Freyr Sveinsson")," I am a software engineer focusing on creating beautiful and intuitive tools"),l.a.createElement("h3",null,"Get in touch ",l.a.createElement("a",{href:"mailto:alexfreyrs@gmail.com"},"alexfreyrs@gmail.com")))}),s=(a(12),function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"social_links"},l.a.createElement("a",{href:"mailto:alexanderfreyrs@gmail.com"},"Email"),l.a.createElement("a",{href:"https://www.instagram.com/zurgur/"},"Instagram"),l.a.createElement("a",{href:"https://github.com/zurgur"},"Github"),l.a.createElement("a",{href:"https://www.linkedin.com/in/alexander-sveinsson-a36715139/"},"Linkedin")))}),m=(a(13),a(14),function(e){var t=l.a.createRef(),a=Object(n.useState)("fade_section"),r=Object(c.a)(a,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){var e=new IntersectionObserver((function(e){Object(c.a)(e,1)[0].intersectionRatio>=.01&&o("fade_section visible")}),{root:null,rootMargin:"0px",threshold:.01});t.current&&e.observe(t.current)}),[t]),l.a.createElement("section",{className:i,ref:t},e.children.map((function(e){return e})))}),u=function(){return l.a.createElement(m,null,l.a.createElement("h2",{className:"section_name"},"Background"),l.a.createElement("div",{className:"section_info_background"},l.a.createElement("div",{className:"text"},"I am currently a front end developer at ",l.a.createElement("a",{href:"http://annata.net/"},"Annata")," building a portal for the automotive industry, with some awesome people. I recently graduated from the ",l.a.createElement("a",{href:"https://english.hi.is/university_of_iceland"},"University of Iceland")," with B.Sc. degree in computer science."),l.a.createElement("div",{className:"text"},"At Annata, I work as a part of the innovation team where I have been building a React website to connect dealerships to car companies. I have made games in Unity as well as in JavaScript with HTML5 Canvas. I took a course in Computer Gaming, at the University of Iceland, where I learned to create games from scratch."),l.a.createElement("div",{className:"text"},"My interests include playing board and video games with friends and cooking.")))},d=(a(15),function(){return l.a.createElement(m,null,l.a.createElement("h2",{className:"section_name"},"Skils"),l.a.createElement("div",{className:"slillz_info"},l.a.createElement("div",{className:"categoty_skillz"},l.a.createElement("div",{className:"category_name"},"Language"),l.a.createElement("p",null,"Javascript"),l.a.createElement("p",null,"Typescript"),l.a.createElement("p",null,"Python"),l.a.createElement("p",null,"C#"),l.a.createElement("p",null,"C++"),l.a.createElement("p",null,"Java"),l.a.createElement("p",null,"SQL"),l.a.createElement("p",null,"HTML"),l.a.createElement("p",null,"(s)CSS")),l.a.createElement("div",null,l.a.createElement("div",{className:"categoty_skillz"},l.a.createElement("div",{className:"category_name"},"Framworks"),l.a.createElement("p",null,"ReactJS"),l.a.createElement("p",null,"Node"),l.a.createElement("p",null,"Express"),l.a.createElement("p",null,"Spring boot"),l.a.createElement("p",null,"Hibernate"),l.a.createElement("p",null,".NET"),l.a.createElement("p",null,"Redux"),l.a.createElement("p",null,"Mobx state tree"))),l.a.createElement("div",null,l.a.createElement("div",{className:"categoty_skillz"},l.a.createElement("div",{className:"category_name"},"Tools"),l.a.createElement("p",null,"GIT"),l.a.createElement("p",null,"DevOps"),l.a.createElement("p",null,"Unity")))))}),p=(a(16),function(){return l.a.createElement("section",{className:"download_section"},l.a.createElement("a",{href:"/Resume.pdf",tragt:"_blank",download:"Alexander_Freyr_Sveinsson.pdf",className:"button"},"Grab my CV"))}),h=(a(17),function(){return l.a.createElement(m,null,l.a.createElement("h2",{className:"section_name"},"Expirence"),l.a.createElement("div",{className:"Job_info"},[{tittle:"Developer at Annata",date:"2018 - ",info:"I work as a part of an innovation team. The solutions we work with are all created for the Microsoft Dynamics platform along with custom web solutions, including React.",link:"https://annata.net/"},{tittle:"Assistant teacher at University of Iceland",date:"2018",info:"Assistant teacher in Mathematics and calculus for Steinn Gu\xf0mundsson",link:"https://www.hi.is/staff/steinng"},{tittle:"University of Iceland",date:"2016 - 2018",info:"Computer science",link:"https://www.hi.is/"}].map((function(e){return l.a.createElement("div",{className:"Job",key:e.tittle},l.a.createElement("div",{className:"Actnames"},l.a.createElement("div",{className:"titleAndInf"},l.a.createElement("a",{href:e.link,tragt:"_blank",className:"title"},e.tittle),l.a.createElement("p",null,e.date),l.a.createElement("p",{className:"info"},e.info))))}))))}),f=(a(18),a(19),function(){return l.a.createElement(m,null,l.a.createElement("h2",{className:"section_name"},"Featured projects"),l.a.createElement("div",{className:"Job_info"},[{tittle:"Dealer portal",info:"The Annata Dealer Portal provides a web interface that seamlessly integrates with Microsoft Dynamics 365 Finance & Operations platform to facilitate better communication between the manufacturer, dealer and importer.",link:"https://annata.net/",image:"./DealerPortal.png",technology:["ReactJs","TypeScript","Mobx state tree",".Net Core","Azure","Dev Ops","git","Dynamics 365"]},{tittle:"Laxness",info:"Worked on this project in collaboration with Glj\xfafrastein good experience to learn how to work with a customer. The project was originally made in android native but we later decided to port it over to react native.",git:[{link:"https://github.com/mimiqkz/Laxness",name:"Android"},{link:"https://github.com/mimiqkz/laxness-react",name:"React Native"}],image:"./laxness.png",technology:["Android Native","React Native","Express","Node","PostgreSQL","Java","JavaScript","git","gitHub"]},{tittle:"Cv version 1",info:"React site I made when applying for jobs after school",git:"https://github.com/zurgur/CV",link:"https://zurgur.github.io/CV/",image:"./Cv_version1.png",technology:["ReactJs","JavaSqript","node","git","GitHub"]},{tittle:"Kassistant",info:"A project made in software engineering class 1 made with Spring boot and with a Postgres database. my main job was to make the back end, make the database with AWS and connect it to the front end.",link:"https://kassistant.herokuapp.com/",git:"https://github.com/mimiqkz/kassistant",image:"./kassistant2.png",technology:["PostgreSQL","Java","HTML","git","gitHub"]}].map((function(e){var t,a;return l.a.createElement("div",{className:"pro",key:e.tittle},l.a.createElement("div",{className:"pro_img_text"},l.a.createElement("div",{className:"pro_text"},l.a.createElement("a",{href:e.link,tragt:"_blank",className:"title"},e.tittle),l.a.createElement("p",{className:"info"},e.info),l.a.createElement("div",{className:"src_container"},"string"===typeof(null===e||void 0===e?void 0:e.git)?l.a.createElement("a",{href:e.git},"source code"):null===(t=e.git)||void 0===t?void 0:t.map((function(e){return l.a.createElement("a",{className:"cusrom_src",key:e.link,href:e.link},e.name,l.a.createElement("b",null," source code"))}))),l.a.createElement("div",{className:"tec_container"},null===(a=e.technology)||void 0===a?void 0:a.map((function(e){return l.a.createElement("div",{className:"technology",key:e},e)})))),l.a.createElement("div",{className:"pro_figure"},l.a.createElement("img",{src:e.image,alt:"progect ".concat(e.tittle),className:"pro_image"}))))}))))});var g=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"App ".concat(a)},l.a.createElement(o,{toggleTheme:function(){r(""===a?"dark":"")}}),l.a.createElement(u,null),l.a.createElement(d,null),l.a.createElement(h,null),l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.58f7941a.chunk.js.map