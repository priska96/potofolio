(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(e,t,s){},41:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(0),c=s.n(i),n=s(15),r=s.n(n),l=(s(41),s.p+"static/media/logo.85a8dc3f.png"),o=(s(16),s(57)),d=s(55),h=s(47),j=function(e,t,s){this.toRotate=t,this.txtBatchToggle=!1,this.txtBatch=0,this.el=e,this.period=parseInt(s,10)||2e3,this.txt="",this.step=1,this.tick(),this.isDeleting=!1};j.prototype.tick=function(){var e=this.toRotate[this.txtBatch].join("<br/>");if(this.isDeleting)this.txt="";else if(13===this.txt.length&&0===this.txtBatch){var t=e.lastIndexOf("$");this.txt=e.substring(0,t+2),console.log(this.txt.length)}else this.txt=e.substring(0,this.txt.length+this.step);this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var s=this,a=200-100*Math.random();this.isDeleting&&(a/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,a=500):(a=this.period,this.isDeleting=!0),""===this.txt&&(this.txtBatchToggle=!this.txtBatchToggle,this.txtBatch=(this.txtBatchToggle,0)),190===this.txt.length&&(a=700),setTimeout((function(){s.tick()}),a)};var b=function(){return Object(i.useEffect)((function(){window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var s=e[t].getAttribute("datatype");(s=JSON.parse(s))[0].push('<span><span style="color:lawngreen;">priska</span>:<span style="color:mediumslateblue;">~</span>$ clear');var a=e[t].getAttribute("data-period");s&&new j(e[t],s,a)}var i=document.createElement("style");i.type="text/css",i.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(i)}})),Object(a.jsx)("div",{className:"Home d-flex flex-column justify-content-center",children:Object(a.jsx)(h.a,{fluid:!0,className:"shell",children:Object(a.jsxs)("h1",{children:[Object(a.jsxs)("span",{className:"cl",children:[Object(a.jsx)("span",{className:"green",children:"priska"}),":",Object(a.jsx)("span",{className:"blue",children:"~"}),"$ "]}),Object(a.jsx)("a",{href:"/",className:"typewrite","data-period":"2000",datatype:'[["node hello.js", "Hello, World!", "I am Priska Kohnen.", "A full-stack Web Developer."]]',"aria-label":"node hello.js Hello, World! I am Priska Kohnen. A full-stack Web Developer. clear",children:Object(a.jsx)("span",{className:"wrap","aria-hidden":"true"})})]})})})},m=["node hello.js","Hello, World!","I am Priska Kohnen.","A full-stack Web Developer."];m[0].length;var u=s(29),p=s(30),g=s(20),x=s(35),O=s(34),f=s.p+"static/media/nutritionplanner_small.61e04493.png",v=s.p+"static/media/jabe_small.14da6f3d.png",w=s.p+"static/media/poilei_small.c2957bc8.png",N=s.p+"static/media/glowingkids_small.701dad9e.png",k=s.p+"static/media/pscore_small.8b599e66.png",y=s.p+"static/media/pscoreedu_small.246b5309.png",T=s.p+"static/media/munscr_small.f5c161f7.png",C=s.p+"static/media/twotickets_small.bbcbf354.png",B=s(48),P=s(49),I=s(58),W=s(50),D=s(51),A=s(56),G=function(e){Object(x.a)(s,e);var t=Object(O.a)(s);function s(e){var a;return Object(u.a)(this,s),(a=t.call(this,e)).cardsGroup=e.cardsGroup,a.cards=e.cards,a.viewDetail=a.viewDetail.bind(Object(g.a)(a)),a}return Object(p.a)(s,[{key:"viewDetail",value:function(){}},{key:"render",value:function(){var e=!1,t=!1;return this.cards.length>1&&(e=!0,t=!0),Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(B.a,{className:"project-group",children:Object(a.jsx)("h2",{children:this.cardsGroup})}),Object(a.jsx)(P.a,{className:"flex-row justify-content-around align-items-start visible-md",children:this.cards.map((function(e,t){return Object(a.jsxs)(I.a,{children:[Object(a.jsx)(I.a.Img,{variant:"top",src:e.img}),Object(a.jsx)("div",{className:"card-overlay bottom",children:Object(a.jsxs)(I.a.Body,{children:[Object(a.jsx)(I.a.Title,{children:e.cardTitle}),Object(a.jsx)(I.a.Text,{children:e.cardText}),Object(a.jsxs)(W.a,{className:"justify-content-between",children:[Object(a.jsx)(D.a,{variant:"loading",href:e.buttonWebsite,target:"_blank",children:"View Page"}),e.buttonCode?Object(a.jsx)(D.a,{variant:"loading",href:e.buttonCode,target:"_blank",children:"View Code"}):null]})]})})]},t)}))}),Object(a.jsx)(A.a,{className:"hidden-md",controls:e,indicators:t,children:this.cards.map((function(e,t){return Object(a.jsxs)(A.a.Item,{as:I.a,children:[Object(a.jsx)(I.a.Img,{variant:"top",src:e.img}),Object(a.jsx)("div",{className:"card-overlay bottom",children:Object(a.jsxs)(I.a.Body,{children:[Object(a.jsx)(I.a.Title,{children:e.cardTitle}),Object(a.jsx)(I.a.Text,{children:e.cardText}),Object(a.jsxs)(W.a,{className:"justify-content-between",children:[Object(a.jsx)(D.a,{variant:"loading",href:e.buttonWebsite,target:"_blank",children:"View Page"}),e.buttonCode?Object(a.jsx)(D.a,{variant:"loading",href:e.buttonCode,target:"_blank",children:"View Code"}):null]})]})})]})}))})]})}}]),s}(c.a.Component);G.defaultProps={cardsGroup:"",cards:[]};var M={content:{body:[{cardsGroup:"Bachelor Thesis",cards:[{img:f,cardTitle:"Mealplan Generator",cardText:"A Django website that automatically generates user-specific weekly meal plans (build from scratch).",buttonWebsite:"",buttonCode:"https://github.com/priska96/nutritionplanner"}]},{cardsGroup:"Freelance Projects",cards:[{img:v,cardTitle:"JABE",cardText:"A plain HTML, CSS and jQuery restaurant website (build from scratch).",buttonWebsite:"https://jaberestaurant.de",buttonCode:"https://github.com/priska96/jaberestaurant"},{img:w,cardTitle:"Poilei",cardText:"A Shopify online shop that sells Italian shoes (maintaining).",buttonWebsite:"https://poilei.com",buttonCode:""},{img:N,cardTitle:"GlowingKids",cardText:"A Shopify online shop that sells clothes for children (maintaining).",buttonWebsite:"https://glowingkids.de",buttonCode:""}]},{cardsGroup:"Internship at PSCORE",cards:[{img:k,cardTitle:"PSCORE",cardText:"A WordPress website about human rights in North Korea and North Korean defectors (maintaining).",buttonWebsite:"http://pscore.org/home",buttonCode:""},{img:y,cardTitle:"PSCORE EDU",cardText:"A WordPress website to provide tutoring classes for North Korean defectors (maintaining).",buttonWebsite:"http://edu.pscore.org/en/",buttonCode:""},{img:T,cardTitle:"MUNSCR",cardText:"A WordPress website about a Model United Nations about successful Korean reunification (build from scratch).",buttonWebsite:"http://munscr.com",buttonCode:""}]},{cardsGroup:"TwoTicktes.de GmbH",cards:[{img:C,cardTitle:"TwoTickets.de",cardText:"A Django website, that sells memberships to its users. Members can win a pair of tickets for various events (maintaining).",buttonWebsite:"https://twotickets.de",buttonCode:""}]}]}};var S=function(){return Object(a.jsx)("div",{className:"Projects",children:Object(a.jsxs)(B.a,{className:"px-0 bg-transparent",children:[Object(a.jsx)("h1",{children:"My Projects"}),M.content.body.map((function(e){return Object(a.jsx)(G,{cardsGroup:e.cardsGroup,cards:e.cards})}))]})})},L=s.p+"static/media/logo.6ce24c58.svg",E=s.p+"static/media/html-5.821ba738.svg",_=s.p+"static/media/css3.5095e12b.svg",H=s.p+"static/media/sass-1.8aa78a83.svg",R=s.p+"static/media/javascript-4.13ceb963.svg",K=s.p+"static/media/jquery.065f616e.svg",q=s.p+"static/media/bootstrap-4.997c463d.svg",F=s.p+"static/media/python-3.13d5b230.svg",J=s.p+"static/media/django-community.17054aee.svg",V=s.p+"static/media/wordpress-icon.761326cc.svg",z=(s.p,s.p,s.p+"static/media/me.b51d21f8.png"),U=s(52),Y=s(53);var $=function(){return Object(a.jsxs)("div",{className:"AboutMe",children:[Object(a.jsxs)(B.a,{className:"img-container2 bg-beige",children:[Object(a.jsx)("h1",{children:"About Me"}),Object(a.jsxs)(h.a,{className:"d-flex flex-lg-row flex-column justify-content-lg-start align-items-lg-center justify-content-center align-items-start aboutme",children:[Object(a.jsx)("div",{className:"me-image",children:Object(a.jsx)(U.a,{src:z})}),Object(a.jsx)("div",{className:"about",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"I'm a Berlin based full-stack Web Developer, building easy to use and user-centric webpages."}),Object(a.jsx)("br",{}),"Since 2017 I am working as a Django developer for TwoTickets.de in Berlin, Germany, which is where my passion for design and development have their roots. I enjoy wandering between logical back-end problems and creativity needing front-end issues. I love visuals and animations, which originates probably in my hobbies being drawing and painting.",Object(a.jsx)("br",{}),"Having taken my first steps in freelance works paved me the way to experience Shopify and WordPress, which are fun to use, if you want something neat and quick. But building everything from scratch and choosing your programming environment is even better!",Object(a.jsx)("br",{}),"Being at the beginning of my career I can't wait to learn new technologies and concepts and see, where they take me to."]})})]})]}),Object(a.jsxs)(B.a,{className:"skill-jumbotron",children:[Object(a.jsx)("h2",{children:"Skills"}),Object(a.jsxs)(h.a,{className:"skill-container",children:[Object(a.jsxs)(Y.a,{className:"p-3",children:[Object(a.jsx)(U.a,{src:E,className:"skills left"}),Object(a.jsx)(U.a,{src:_,className:"skills left"}),Object(a.jsx)(U.a,{src:R,className:"skills right"})]}),Object(a.jsxs)(Y.a,{className:"px-3",children:[Object(a.jsx)(U.a,{src:H,className:"skills right"}),Object(a.jsx)(U.a,{src:q,className:"skills left"}),Object(a.jsx)(U.a,{src:K,className:"skills right"})]}),Object(a.jsxs)(Y.a,{className:"p-3",children:[Object(a.jsx)(U.a,{src:L,className:"skills left"}),Object(a.jsx)(U.a,{src:J,className:"skills right"}),Object(a.jsx)(U.a,{src:F,className:"skills left"}),Object(a.jsx)(U.a,{src:V,className:"skills right"})]})]})]})]})},Q=s(54);var X=function(){return Object(a.jsx)("div",{className:"Contact",children:Object(a.jsxs)(B.a,{className:"bg-beige",children:[Object(a.jsx)("h1",{children:"Contact"}),Object(a.jsxs)(h.a,{children:[Object(a.jsxs)("p",{className:"w-md-75 w-100 mx-auto contact-text",children:["If you want to get in touch with me, quickly fill out the form below. Let's talk about a project collaboration or just say Hi to me! Of course you can also send me an email directly to ",Object(a.jsx)("a",{href:"mailto:priskakohnen@gmail.com",className:"highlight",children:"priskakohnen@gmail.com"})]}),Object(a.jsxs)(Q.a,{className:"w-md-75 w-100 mx-auto",action:"https://formspree.io/f/xzbkkyjn",method:"POST",children:[Object(a.jsxs)(Q.a.Row,{className:"justify-content-between m-0",children:[Object(a.jsxs)(Q.a.Group,{controlId:"formEmail",children:[Object(a.jsx)(Q.a.Label,{children:"Your Email"}),Object(a.jsx)(Q.a.Control,{type:"email",name:"email",required:"true",placeholder:"Enter email"})]}),Object(a.jsxs)(Q.a.Group,{controlId:"formName",children:[Object(a.jsx)(Q.a.Label,{children:"Your Name"}),Object(a.jsx)(Q.a.Control,{type:"text",name:"name",required:"true",placeholder:"Enter full name"})]})]}),Object(a.jsxs)(Q.a.Group,{controlId:"formMessage",children:[Object(a.jsx)(Q.a.Label,{children:"Your Message"}),Object(a.jsx)(Q.a.Control,{as:"textarea",name:"message",required:"true",rows:3,placeholder:"Enter message"})]}),Object(a.jsx)(D.a,{variant:"loading",type:"submit",children:"Submit"})]})]})]})})};var Z=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"navigation",children:Object(a.jsx)("div",{className:"navigation-sub",children:Object(a.jsxs)(o.a,{bg:"light",expand:"md",fixed:"top",className:"bg-light justify-content-end pr-0",children:[Object(a.jsx)(o.a.Brand,{href:"/",className:"flex-grow-2 text-right",children:Object(a.jsx)("img",{src:l,className:"d-inline-block align-top logo",alt:"React Bootstrap logo"})}),Object(a.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(d.a,{className:"mr-auto flex-grow-1",children:[Object(a.jsx)(d.a.Link,{href:"#home",className:"flex-grow-1 text-center",children:"Home"}),Object(a.jsx)(d.a.Link,{href:"#about",className:"flex-grow-1 text-center",children:"About Me"}),Object(a.jsx)(d.a.Link,{href:"#projects",className:"flex-grow-1 text-center",children:"Projects"}),Object(a.jsx)(d.a.Link,{href:"#contact",className:"flex-grow-1 text-center",children:"Contact"})]})})]})})}),Object(a.jsx)("a",{className:"anchor",name:"home"}),Object(a.jsx)(b,{}),Object(a.jsx)("a",{className:"anchor",name:"about"}),Object(a.jsx)($,{}),Object(a.jsx)("a",{className:"anchor",name:"projects"}),Object(a.jsx)(S,{}),Object(a.jsx)("a",{className:"anchor",name:"contact"}),Object(a.jsx)(X,{}),Object(a.jsxs)("footer",{children:[Object(a.jsx)("div",{id:"go-top",children:Object(a.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"bi bi-chevron-double-up",viewBox:"0 0 18 18",children:[Object(a.jsx)("path",{fillRule:"evenodd",d:"M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"}),Object(a.jsx)("path",{fillRule:"evenodd",d:"M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"})]})})}),Object(a.jsxs)("div",{className:"text-center p-3 bg-light",children:["\xa9 2020 Copyright: ",Object(a.jsx)("span",{className:"text-dark",children:"Priska Kohnen"})]})]})]})},ee=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,59)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),i(e),c(e),n(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Z,{})}),document.getElementById("root")),ee()}},[[45,1,2]]]);
//# sourceMappingURL=main.f932d87a.chunk.js.map