(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,t,s){},47:function(e,t,s){},54:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(0),c=s.n(i),n=s(16),r=s.n(n),l=(s(47),s.p+"static/media/logo.85a8dc3f.png"),o=(s(17),s(66)),d=s(64),j=s(39),b=s(56),h=function(e,t,s){this.toRotate=t,this.txtBatchToggle=!1,this.txtBatch=0,this.el=e,this.period=parseInt(s,10)||2e3,this.txt="",this.step=1,this.tick(),this.isDeleting=!1};h.prototype.tick=function(){var e=this.toRotate[this.txtBatch].join("<br/>");if(this.isDeleting)this.txt="";else if(13===this.txt.length&&0===this.txtBatch){var t=e.lastIndexOf("$");this.txt=e.substring(0,t+2),console.log(this.txt.length)}else this.txt=e.substring(0,this.txt.length+this.step);this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var s=this,a=200-100*Math.random();this.isDeleting&&(a/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,a=500):(a=this.period,this.isDeleting=!0),""===this.txt&&(this.txtBatchToggle=!this.txtBatchToggle,this.txtBatch=(this.txtBatchToggle,0)),190===this.txt.length&&(a=700),setTimeout((function(){s.tick()}),a)};var m=function(){return Object(i.useEffect)((function(){window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var s=e[t].getAttribute("datatype");(s=JSON.parse(s))[0].push('<span><span style="color:lawngreen;">priska</span>:<span style="color:mediumslateblue;">~</span>$ clear');var a=e[t].getAttribute("data-period");s&&new h(e[t],s,a)}var i=document.createElement("style");i.type="text/css",i.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(i)}})),Object(a.jsxs)("div",{className:"Home d-flex flex-column justify-content-center",children:[Object(a.jsx)("a",{name:"home"}),Object(a.jsx)(b.a,{fluid:!0,className:"shell",children:Object(a.jsxs)("h1",{children:[Object(a.jsxs)("span",{className:"cl",children:[Object(a.jsx)("span",{className:"green",children:"priska"}),":",Object(a.jsx)("span",{className:"blue",children:"~"}),"$ "]}),Object(a.jsx)("a",{href:"/",className:"typewrite","data-period":"2000",datatype:'[["node hello.js", "Hello, World!", "I am Priska Kohnen.", "A full-stack Web Developer."]]',children:Object(a.jsx)("span",{className:"wrap"})})]})})]})},u=["node hello.js","Hello, World!","I am Priska Kohnen.","A full-stack Web Developer."];u[0].length;var p=s(33),g=s(34),x=s(21),f=s(41),O=s(40),v=s.p+"static/media/nutritionplanner_small.61e04493.png",w=s.p+"static/media/jabe_small.14da6f3d.png",y=s.p+"static/media/poilei_small.c2957bc8.png",N=s.p+"static/media/glowingkids_small.701dad9e.png",k=s.p+"static/media/pscore_small.8b599e66.png",T=s.p+"static/media/pscoreedu_small.246b5309.png",C=s.p+"static/media/munscr_small.f5c161f7.png",B=s.p+"static/media/twotickets_small.bbcbf354.png",I=s(57),P=s(58),W=s(67),D=s(59),G=s(60),A=s(65),E=function(e){Object(f.a)(s,e);var t=Object(O.a)(s);function s(e){var a;return Object(p.a)(this,s),(a=t.call(this,e)).cardsGroup=e.cardsGroup,a.cards=e.cards,a.viewDetail=a.viewDetail.bind(Object(x.a)(a)),a}return Object(g.a)(s,[{key:"viewDetail",value:function(){}},{key:"render",value:function(){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(I.a,{className:"project-group",children:Object(a.jsx)("h2",{children:this.cardsGroup})}),Object(a.jsx)(P.a,{className:"flex-row justify-content-around align-items-start visible-lg",children:this.cards.map((function(e,t){return Object(a.jsxs)(W.a,{children:[Object(a.jsx)(W.a.Img,{variant:"top",src:e.img}),Object(a.jsx)("div",{className:"card-overlay bottom",children:Object(a.jsxs)(W.a.Body,{children:[Object(a.jsx)(W.a.Title,{children:e.cardTitle}),Object(a.jsx)(W.a.Text,{children:e.cardText}),Object(a.jsxs)(D.a,{className:"justify-content-between",children:[Object(a.jsx)(G.a,{variant:"loading",href:e.buttonWebsite,children:"View Page"}),e.buttonCode?Object(a.jsx)(G.a,{variant:"loading",href:e.buttonCode,children:"View Code"}):null]})]})})]},t)}))}),Object(a.jsx)(A.a,{className:"hidden-lg",children:this.cards.map((function(e,t){return Object(a.jsxs)(A.a.Item,{as:W.a,children:[Object(a.jsx)(W.a.Img,{variant:"top",src:e.img}),Object(a.jsx)("div",{className:"card-overlay bottom",children:Object(a.jsxs)(W.a.Body,{children:[Object(a.jsx)(W.a.Title,{children:e.cardTitle}),Object(a.jsx)(W.a.Text,{children:e.cardText}),Object(a.jsxs)(D.a,{className:"justify-content-between",children:[Object(a.jsx)(G.a,{variant:"loading",href:e.buttonWebsite,children:"View Page"}),e.buttonCode?Object(a.jsx)(G.a,{variant:"loading",href:e.buttonCode,children:"View Code"}):null]})]})})]})}))})]})}}]),s}(c.a.Component);E.defaultProps={cardsGroup:"",cards:[]};var M={content:{body:[{cardsGroup:"Bachelor Thesis",cards:[{img:v,cardTitle:"Mealplan Generator",cardText:"A Django website that automatically generates user-specific weekly meal plans (build from scratch).",buttonWebsite:"https://jaberestaurant.de",buttonCode:"https://github.com/priska96/nutritionplanner"}]},{cardsGroup:"Freelance Projects",cards:[{img:w,cardTitle:"JABE",cardText:"A plain HTML, CSS and jQuery restaurant website (build from scratch).",buttonWebsite:"https://jaberestaurant.de",buttonCode:"https://github.com/priska96/jaberestaurant"},{img:y,cardTitle:"Poilei",cardText:"A Shopify online shop that sells Italian shoes (maintaining).",buttonWebsite:"https://poilei.com",buttonCode:""},{img:N,cardTitle:"GlowingKids",cardText:"A Shopify online shop that sells clothes for children (maintaining).",buttonWebsite:"https://glowingkids.de",buttonCode:""}]},{cardsGroup:"Internship at PSCORE",cards:[{img:k,cardTitle:"PSCORE",cardText:"A WordPress website (maintaining).",buttonWebsite:"http://pscore.org/home",buttonCode:""},{img:T,cardTitle:"PSCORE EDU",cardText:"A WordPress website (maintaining).",buttonWebsite:"http://edu.pscore.org/en/",buttonCode:""},{img:C,cardTitle:"MUNSCR",cardText:"A WordPress website (build from scratch).",buttonWebsite:"http://munscr.com",buttonCode:""}]},{cardsGroup:"TwoTicktes.de GmbH",cards:[{img:B,cardTitle:"TwoTickets.de",cardText:"A Django website, that sells memberships to its users. Members can win a pair of tickets various events (maintaining).",buttonWebsite:"http://pscore.org/home",buttonCode:""}]}]}};var S=function(){return Object(a.jsxs)("div",{className:"Projects",children:[Object(a.jsx)("a",{name:"projects"}),Object(a.jsx)(b.a,{className:"d-flex justify-content-center align-items-center aboutme-header",children:Object(a.jsx)("h1",{children:"My Projects"})}),M.content.body.map((function(e){return Object(a.jsx)(E,{cardsGroup:e.cardsGroup,cards:e.cards})}))]})},L=s.p+"static/media/logo.6ce24c58.svg",H=s.p+"static/media/html-5.821ba738.svg",R=s.p+"static/media/css3.5095e12b.svg",_=s.p+"static/media/sass-1.8aa78a83.svg",F=s.p+"static/media/javascript-4.13ceb963.svg",J=s.p+"static/media/jquery.065f616e.svg",V=s.p+"static/media/bootstrap-4.997c463d.svg",q=s.p+"static/media/python-3.13d5b230.svg",K=s.p+"static/media/django-community.17054aee.svg",Y=s.p+"static/media/wordpress-icon.761326cc.svg",$=(s.p,s.p,s.p+"static/media/me.b51d21f8.png"),U=s(61),Q=s(62);var z=function(){return Object(a.jsxs)("div",{className:"AboutMe",children:[Object(a.jsx)("a",{name:"about"}),Object(a.jsx)(b.a,{className:"d-flex justify-content-center align-items-center aboutme-header",children:Object(a.jsx)("h1",{children:"About Me"})}),Object(a.jsxs)(I.a,{className:"d-flex flex-xl-row flex-column justify-content-xl-start align-items-xl-center justify-content-center align-items-start img-container2 bg-beige",children:[Object(a.jsx)("div",{className:"me-image",children:Object(a.jsx)(U.a,{src:$})}),Object(a.jsx)("div",{className:"about flex-grow-1",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"I'm a Berlin based full-stack Web Developer, building easy to use and user-centric webpages."}),Object(a.jsx)("br",{}),"I currently work as a Django developer for TwoTickets.de in Berlin, Germany, which is where my passion for design and development has its roots. During my studies in 2017 I joined the IT team and finished various projects. Wandering between logical back-end problems and creativity needing front-end issues brings me joy and keeps me at ease. I love visuals and animations, what perhaps comes from my hobbies being drawing and painting, as well as the hours spent playing video games and creating RPGs in my younger years.",Object(a.jsx)("br",{}),"Taking first steps in freelance works paved me the way to experience Shopify and WordPress, which are fun to use, if you want something neat and quick. But building everything from scratch and choosing your programming environment is even better!",Object(a.jsx)("br",{}),"Being at the beginning of my career I can't wait to learn new technologies and concepts and see, where they take me to."]})})]}),Object(a.jsx)(b.a,{className:"d-flex justify-content-center align-items-center aboutme-header",children:Object(a.jsx)("h2",{children:"Skills"})}),Object(a.jsxs)(b.a,{children:[Object(a.jsxs)(Q.a,{className:"p-3",children:[Object(a.jsx)(U.a,{src:H,className:"skills left"}),Object(a.jsx)(U.a,{src:R,className:"skills left"}),Object(a.jsx)(U.a,{src:F,className:"skills right"})]}),Object(a.jsxs)(Q.a,{className:"px-3",children:[Object(a.jsx)(U.a,{src:_,className:"skills right"}),Object(a.jsx)(U.a,{src:V,className:"skills left"}),Object(a.jsx)(U.a,{src:J,className:"skills right"})]}),Object(a.jsxs)(Q.a,{className:"p-3",children:[Object(a.jsx)(U.a,{src:L,className:"skills left"}),Object(a.jsx)(U.a,{src:K,className:"skills right"}),Object(a.jsx)(U.a,{src:q,className:"skills left"}),Object(a.jsx)(U.a,{src:Y,className:"skills right"})]})]})]})},X=s(63);var Z=function(){return Object(a.jsxs)("div",{className:"Contact",children:[Object(a.jsx)("a",{name:"contact"}),Object(a.jsx)(b.a,{className:"d-flex justify-content-center align-items-center aboutme-header",children:Object(a.jsx)("h1",{children:"Contact"})}),Object(a.jsxs)(I.a,{className:"bg-beige",children:[Object(a.jsxs)("p",{className:"w-lg-50 w-75 mx-auto",children:["If you want to get in touch with me, quickly fill out the form below. Let's talk about a project collaboration or just say Hi to me! Of course you can also send me an email directly to ",Object(a.jsx)("a",{href:"mailto:priskakohnen@gmail.com",className:"highlight",children:"priskakohnen@gmail.com"})]}),Object(a.jsxs)(X.a,{className:"w-lg-50 w-75 mx-auto",children:[Object(a.jsxs)(X.a.Row,{className:"justify-content-between m-0",children:[Object(a.jsxs)(X.a.Group,{controlId:"formEmail",children:[Object(a.jsx)(X.a.Label,{children:"Your Email"}),Object(a.jsx)(X.a.Control,{type:"email",placeholder:"Enter email"})]}),Object(a.jsxs)(X.a.Group,{controlId:"formName",children:[Object(a.jsx)(X.a.Label,{children:"Your Name"}),Object(a.jsx)(X.a.Control,{type:"text",placeholder:"Enter full name"})]})]}),Object(a.jsxs)(X.a.Group,{controlId:"formMessage",children:[Object(a.jsx)(X.a.Label,{children:"Your Message"}),Object(a.jsx)(X.a.Control,{as:"textarea",rows:3,placeholder:"Enter message"})]}),Object(a.jsx)(G.a,{variant:"loading",type:"submit",className:"btn-big",children:"Submit"})]})]})]})};var ee=function(){return Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"navigation",children:Object(a.jsx)("div",{className:"navigation-sub",children:Object(a.jsxs)(o.a,{bg:"light",expand:"md",fixed:"top",className:"bg-light justify-content-end",children:[Object(a.jsx)(o.a.Brand,{href:"/",className:"flex-grow-2 text-right",children:Object(a.jsx)("img",{src:l,className:"d-inline-block align-top logo",alt:"React Bootstrap logo"})}),Object(a.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(d.a,{className:"mr-auto flex-grow-1",children:[Object(a.jsx)(d.a.Link,{href:"#home",className:"flex-grow-1 text-center",children:"Home"}),Object(a.jsx)(d.a.Link,{href:"#about",className:"flex-grow-1 text-center",children:"About Me"}),Object(a.jsx)(d.a.Link,{href:"#projects",className:"flex-grow-1 text-center",children:"Projects"}),Object(a.jsx)(d.a.Link,{href:"#contact",className:"flex-grow-1 text-center",children:"Contact"})]})})]})})}),Object(a.jsx)(m,{}),Object(a.jsx)(z,{}),Object(a.jsx)(S,{}),Object(a.jsx)(Z,{})]})})},te=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,68)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),i(e),c(e),n(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ee,{})}),document.getElementById("root")),te()}},[[54,1,2]]]);
//# sourceMappingURL=main.205079c5.chunk.js.map