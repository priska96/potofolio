(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,a){},54:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a(0),n=a.n(i),c=a(11),r=a.n(c),o=(a(54),a.p+"static/media/logo.85a8dc3f.png"),l=(a(21),a(80)),d=a(78),h=a(69),b=function(e,t,a){this.toRotate=t,this.txtBatchToggle=!1,this.txtBatch=0,this.el=e,this.period=parseInt(a,10)||2e3,this.txt="",this.step=1,this.tick(),this.isDeleting=!1};b.prototype.tick=function(){var e=this.toRotate[this.txtBatch].join("<br/>");if(this.isDeleting)this.txt="";else if(13===this.txt.length&&0===this.txtBatch){var t=e.lastIndexOf("$");this.txt=e.substring(0,t+2),console.log(this.txt.length)}else this.txt=e.substring(0,this.txt.length+this.step);this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,s=200-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,s=500):(s=this.period,this.isDeleting=!0),""===this.txt&&(this.txtBatchToggle=!this.txtBatchToggle,this.txtBatch=(this.txtBatchToggle,0)),190===this.txt.length&&(s=700),setTimeout((function(){a.tick()}),s)};var m=function(){return Object(i.useEffect)((function(){window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var a=e[t].getAttribute("datatype");(a=JSON.parse(a))[0].push('<span><span style="color:lawngreen;">priska</span>:<span style="color:mediumslateblue;">~</span>$ clear');var s=e[t].getAttribute("data-period");a&&new b(e[t],a,s)}var i=document.createElement("style");i.type="text/css",i.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(i)}})),Object(s.jsx)("div",{className:"Home d-flex flex-column justify-content-center",children:Object(s.jsx)(h.a,{fluid:!0,className:"shell",children:Object(s.jsxs)("h1",{children:[Object(s.jsxs)("span",{className:"cl",children:[Object(s.jsx)("span",{className:"green",children:"priska"}),":",Object(s.jsx)("span",{className:"blue",children:"~"}),"$ "]}),Object(s.jsx)("a",{href:"/",className:"typewrite","data-period":"2000",datatype:'[["node hello.js", "Hello, World!", "I am Priska Kohnen.", "A full-stack Web Developer."]]',"aria-label":"node hello.js Hello, World! I am Priska Kohnen. A full-stack Web Developer. clear",children:Object(s.jsx)("span",{className:"wrap","aria-hidden":"true"})})]})})})},j=["node hello.js","Hello, World!","I am Priska Kohnen.","A full-stack Web Developer."];j[0].length;var p=a(29),u=a(30),g=a(13),x=a(34),f=a(33),O=a.p+"static/media/nutritionplanner_small.61e04493.png",w=a.p+"static/media/jabe_small.14da6f3d.png",v=a.p+"static/media/poilei_small.c2957bc8.png",k=a.p+"static/media/glowingkids_small.701dad9e.png",y=a.p+"static/media/pscore_small.8b599e66.png",N=a.p+"static/media/pscoreedu_small.246b5309.png",T=a.p+"static/media/munscr_small.f5c161f7.png",C=a.p+"static/media/twotickets_small.bbcbf354.png",I=a(71),_=a(74),S=a(81),P=a(73),B=a(70),A=a(79),W=a.p+"static/media/explain.33a1e896.mp4",D=a.p+"static/media/jabe.c2bbde83.png",L=a.p+"static/media/poilei_cookies.f4c1b98b.png",R=a.p+"static/media/glowingkids.6aae77ef.png",E=a.p+"static/media/pscore_abuse.6a89610f.png",M=a.p+"static/media/pscore_digital.d6da4eb1.png",G=a.p+"static/media/pscore_seminar.486f4c13.png",H=a.p+"static/media/pscore_workshop.6fc733af.png",K=(a.p,a.p+"static/media/pscoreedu_register.b715ecbf.png"),q=a.p+"static/media/pscoreedu_1.542f45de.png",F=a.p+"static/media/pscoreedu_2.62932cb2.png",V=a.p+"static/media/munscr.17fd36e7.png",z=a.p+"static/media/twotickets_redesign.afff2b16.png",J=a.p+"static/media/twotickets_filter.73ccdcbb.png",U=a.p+"static/media/twotickets_vattenfall_4.837f2a46.png",Q=a(76),Y=a(72),$=a.p+"static/media/me.b51d21f8.png",X=a(47),Z=(a(65),{nutritionplanner:{vid:W,cardTitle:"Meal Plan Generator",cardText:"The goal of this project was to create an algorithm to generate personalised meal plans, based on the users' input and to output them in a calendar overview as well as export them in a pdf file. These meal plans support typical diets and eating habits  and provide a suitable nutrition intake. To create the meal plans and to choose the right  foods in a healthy measurement, an optimization problem was set up and solved by linear programming. The focus was more set on the logic instead on the design, which is why the page has only minimal styling to make it usable. Besides Django (Python) jQuery, CSS and Bootstrap  were used to  implement this website."},jabe:{imgs:[D],cardTitle:"JABE",cardText:"The JABE is a Japanese restaurant I created the website for and maintained for some time. This eight month project is a static and plain HTML, CSS and jQuery website. It is solely used to present the restaurant, therefore the whole ordering process is outsourced. Besides I integrated the Facebook tracking pixel for marketing services."},poilei:{imgs:[L],cardTitle:"Poilei",cardText:"Poilei is an Italian shoe shop using Shopify. Since I maintain the page I mostly fix minor errors in the front-end and edit the layout for the pages as well as integrate tracking pixels like like the ones from Google or Facebook and added a cookies banner.",buttonWebsite:"https://poilei.com",buttonCode:""},glowingkids:{imgs:[R],cardTitle:"GlowingKids",cardText:"GlowingKids is a Shopify online shop selling children clothing. I maintain the front-end and adjust layouts of the pages. Besides I wrote a Python script to update the product database entries in terms of SEO matters.",buttonWebsite:"https://glowingkids.de",buttonCode:"https://github.com/priska96/glowingkids/blob/master/main.py"},pscore:{imgs:[E,M,H,G],cardTitle:"PSCORE",cardText:"PSCORE stands for People for Successful Corean REunification and is an NGO that fights for human rights in North Korea and helps North Korean defectors. I adjust the pages, ensure the usability and fix errors as well as design and add new pages. The content pages that I created are 'Child Abuse', 'Digital Life & Digital Rights', 'Online Seminar' and 'Online Workshop'.",buttonWebsite:"http://pscore.org/home",buttonCode:""},pscoreedu:{imgs:[q,F,K],cardTitle:"PSCORE EDU",cardText:"The education page from PSCORE is a WordPress website to provide tutoring classes for North Korean defectors. Students and tutors register on the page and are matched. I mostly update the 'Successful Tutoring Experiences' section. Besides, I added a PHP script to add the registrationdate to the database and make it visible in the WordPress admin overview.",buttonCode:"https://github.com/priska96/pscore/blob/master/member_registration_date.php"},munscr:{imgs:[V],cardTitle:"MUNSCR",cardText:"MUNSCR stands for Model United Nations for Succesful Corean Reunification. It is the newest project between PSCORE and me. It is a WordPress website that I designed and developed from scratch. The design was iteratively created and underwent some changes. The website is under development and is set to be finished around end of January.",buttonWebsite:"http://munscr.com",buttonCode:""},twotickets:{imgs:[z,J,U],cardTitle:"TwoTickets.de",cardText:"TwoTickets.de sells memberships to its users. Registered members can win a pair of tickets for any event, whose organizer collaborates with TwoTickets.de. I maintain the back- and the front-end in terms of bug fixing and adding new features. My main projects were a redesign of landing and event pages, optimizing the filter and search functions, a redesign of the iFrame version for an affiliate company (Vattenfall) and a current tech-stack update project. This website is build with Django in the back-end and Sass and jQuery in the front-end.",buttonAffiliate:"https://vattenfall.de/freikarten"}}),ee=function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).card=e.card,s.closeAction=e.closeAction,s.state={srcIndex:e.srcIndex,isOpen:e.isOpen,card:e.card},s}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({isOpen:e.isOpen,srcIndex:e.srcIndex,card:e.card})}},{key:"render",value:function(){var e=this,t=this.state,a=t.srcIndex,i=t.isOpen;if(!("imgs"in Z[this.card]))return!1;var n,c,r=Z[this.card].imgs;return r.length>1&&(n=r[(a+1)%r.length],c=r[(a+r.length-1)%r.length]),Object(s.jsx)("div",{children:i&&Object(s.jsx)(X.a,{mainSrc:r[a],nextSrc:n,prevSrc:c,onCloseRequest:function(){return e.props.closeAction()},onMovePrevRequest:function(){return e.setState({srcIndex:(a+r.length-1)%r.length})},onMoveNextRequest:function(){return e.setState({srcIndex:(a+1)%r.length})}})})}}]),a}(n.a.Component);ee.defaultProps={isOpen:!1,srcIndex:0,card:""};var te=function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(e){var s;return Object(p.a)(this,a),s=t.call(this,e),console.log(e),s.show=e.show,s.card=e.card,s.closeAction=e.closeAction,s.state={show:e.show,card:e.card,showLightBox:!1,srcIndex:0},s.handleClose=s.handleClose.bind(Object(g.a)(s)),s.viewLightbox=s.viewLightbox.bind(Object(g.a)(s)),s}return Object(u.a)(a,[{key:"handleClose",value:function(){this.setState({showLightBox:!1})}},{key:"componentWillReceiveProps",value:function(e){this.setState({show:e.show,card:e.card})}},{key:"viewLightbox",value:function(e){this.setState({showLightBox:!0,srcIndex:e})}},{key:"render",value:function(){var e=this;return this.state.card in Z?Object(s.jsx)(n.a.Fragment,{children:Object(s.jsxs)(Q.a,{show:this.state.show,onHide:this.handleClose,className:"modal-page",children:[Object(s.jsx)("div",{className:"text-right pr-3",children:Object(s.jsxs)(B.a,{variant:"back",onClick:this.props.closeAction,children:[Object(s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-chevron-double-left",viewBox:"0 0 30 30",children:[Object(s.jsx)("path",{fillRule:"evenodd",d:"M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}),Object(s.jsx)("path",{fillRule:"evenodd",d:"M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})]}),"Back"]})}),Object(s.jsxs)(I.a,{className:"img-container2 bg-transparent",children:[Object(s.jsx)("h1",{children:Z[this.state.card].cardTitle}),Object(s.jsxs)(h.a,{className:"d-flex flex-lg-row flex-column flex-wrap justify-content-lg-start align-items-lg-center justify-content-center align-items-start aboutme",children:["vid"in Z[this.state.card]?Object(s.jsxs)("video",{className:"project-video",controls:!0,children:[Object(s.jsx)("source",{src:Z[this.state.card].vid,type:"video/mp4"}),"Your browser does not support the video tag."]}):Object(s.jsx)("div",{className:"image-box",children:Z[this.state.card].imgs.map((function(t,a){return Object(s.jsxs)("div",{className:"project-img",onClick:function(){return e.viewLightbox(a)},children:[Object(s.jsx)("div",{className:"overlay-text",children:Object(s.jsx)("span",{children:"Click to enlarge"})}),Object(s.jsx)(Y.a,{src:t},a)]})}))}),Object(s.jsx)("div",{className:"project-desc",children:Object(s.jsx)("p",{children:Z[this.state.card].cardText})}),Z[this.state.card].buttonCode?Object(s.jsx)(P.a,{className:"justify-content-between",children:Object(s.jsx)(B.a,{variant:"loading",href:Z[this.state.card].buttonCode,target:"_blank",children:"View Code"})}):null,Z[this.state.card].buttonAffiliate?Object(s.jsx)(P.a,{className:"justify-content-between",children:Object(s.jsx)(B.a,{variant:"loading",href:Z[this.state.card].buttonAffiliate,target:"_blank",children:"View Affiliate Website"})}):null]})]}),Object(s.jsx)(ee,{isOpen:this.state.showLightBox,srcIndex:this.state.srcIndex,card:this.state.card,closeAction:this.handleClose})]})}):null}}]),a}(n.a.Component);te.defaultProps={show:!1,card:"nutritionplanner"};var ae=te,se=function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).cardsGroup=e.cardsGroup,s.cards=e.cards,s.state={show:!1,cardName:""},s.handleClose=s.handleClose.bind(Object(g.a)(s)),s.viewDetail=s.viewDetail.bind(Object(g.a)(s)),s.renderDetail=s.renderDetail.bind(Object(g.a)(s)),s}return Object(u.a)(a,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"viewDetail",value:function(e){this.setState({show:!0,cardName:e})}},{key:"renderDetail",value:function(){return""===this.state.cardName?null:Object(s.jsx)(ae,{show:this.state.show,card:this.state.cardName,closeAction:this.handleClose})}},{key:"render",value:function(){var e=this,t=!1,a=!1;return this.cards.length>1&&(t=!0,a=!0),Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)(I.a,{className:"project-group",children:Object(s.jsx)("h2",{children:this.cardsGroup})}),Object(s.jsx)(_.a,{className:"flex-row justify-content-around align-items-start visible-md",children:this.cards.map((function(t,a){return Object(s.jsxs)(S.a,{children:[Object(s.jsx)(S.a.Img,{variant:"top",src:t.img}),Object(s.jsx)("div",{className:"card-overlay bottom",children:Object(s.jsxs)(S.a.Body,{children:[Object(s.jsx)(S.a.Title,{children:t.cardTitle}),Object(s.jsx)(S.a.Text,{children:t.cardText}),Object(s.jsxs)(P.a,{className:"justify-content-between",children:[t.buttonWebsite?Object(s.jsx)(B.a,{variant:"loading",href:t.buttonWebsite,target:"_blank",children:"View Page"}):null,t.buttonCode?Object(s.jsx)(B.a,{variant:"loading",href:t.buttonCode,target:"_blank",children:"View Code"}):null,Object(s.jsx)(B.a,{variant:"loading",onClick:function(){return e.viewDetail(t.name)},children:"View Details"})]})]})})]},a)}))}),Object(s.jsx)(A.a,{className:"hidden-md",controls:t,indicators:a,children:this.cards.map((function(t,a){return Object(s.jsxs)(A.a.Item,{as:S.a,children:[Object(s.jsx)(S.a.Img,{variant:"top",src:t.img}),Object(s.jsx)("div",{className:"card-overlay bottom",children:Object(s.jsxs)(S.a.Body,{children:[Object(s.jsx)(S.a.Title,{children:t.cardTitle}),Object(s.jsx)(S.a.Text,{children:t.cardText}),Object(s.jsxs)(P.a,{className:"justify-content-between",children:[t.buttonWebsite?Object(s.jsx)(B.a,{variant:"loading",href:t.buttonWebsite,target:"_blank",children:"View Page"}):null,t.buttonCode?Object(s.jsx)(B.a,{variant:"loading",href:t.buttonCode,target:"_blank",children:"View Code"}):null,Object(s.jsx)(B.a,{variant:"loading",onClick:function(){return e.viewDetail(t.name)},children:"View Details"})]})]})})]},a)}))}),this.renderDetail()]})}}]),a}(n.a.Component);se.defaultProps={cardsGroup:"",cards:[]};var ie={content:{body:[{cardsGroup:"Bachelor Thesis",cards:[{name:"nutritionplanner",img:O,cardTitle:"Meal Plan Generator",cardText:"A Django website that automatically generates user-specific weekly meal plans (build from scratch).",buttonWebsite:"",buttonCode:"https://github.com/priska96/nutritionplanner"}]},{cardsGroup:"Freelance Projects",cards:[{name:"jabe",img:w,cardTitle:"JABE",cardText:"A plain HTML, CSS and jQuery restaurant website (build from scratch).",buttonWebsite:"http://jaberestaurant.de",buttonCode:"https://github.com/priska96/jaberestaurant"},{name:"poilei",img:v,cardTitle:"Poilei",cardText:"A Shopify online shop that sells Italian shoes (maintaining).",buttonWebsite:"https://poilei.com",buttonCode:""},{name:"glowingkids",img:k,cardTitle:"GlowingKids",cardText:"A Shopify online shop that sells clothes for children (maintaining).",buttonWebsite:"https://glowingkids.de",buttonCode:""}]},{cardsGroup:"Internship at PSCORE",cards:[{name:"pscore",img:y,cardTitle:"PSCORE",cardText:"A WordPress website about human rights in North Korea and North Korean defectors (maintaining).",buttonWebsite:"http://pscore.org/home",buttonCode:""},{name:"pscoreedu",img:N,cardTitle:"PSCORE EDU",cardText:"A WordPress website to provide tutoring classes for North Korean defectors (maintaining).",buttonWebsite:"http://edu.pscore.org/en/",buttonCode:""},{name:"munscr",img:T,cardTitle:"MUNSCR",cardText:"A WordPress website about a Model United Nations about successful Korean reunification (build from scratch).",buttonWebsite:"http://munscr.com",buttonCode:""}]},{cardsGroup:"TwoTicktes.de GmbH",cards:[{name:"twotickets",img:C,cardTitle:"TwoTickets.de",cardText:"A Django website, that sells memberships to its users. Members can win a pair of tickets for various events (maintaining).",buttonWebsite:"https://twotickets.de",buttonCode:""}]}]}};var ne=function(){return Object(s.jsx)("div",{className:"Projects",children:Object(s.jsxs)(I.a,{className:"px-0 bg-transparent",children:[Object(s.jsx)("h1",{children:"My Projects"}),ie.content.body.map((function(e,t){return Object(s.jsx)(se,{cardsGroup:e.cardsGroup,cards:e.cards},t)}))]})})},ce=a.p+"static/media/logo.6ce24c58.svg",re=a.p+"static/media/html-5.821ba738.svg",oe=a.p+"static/media/css3.5095e12b.svg",le=a.p+"static/media/sass-1.8aa78a83.svg",de=a.p+"static/media/javascript-4.13ceb963.svg",he=a.p+"static/media/jquery.065f616e.svg",be=a.p+"static/media/bootstrap-4.997c463d.svg",me=a.p+"static/media/python-3.13d5b230.svg",je=a.p+"static/media/django-community.17054aee.svg",pe=a.p+"static/media/wordpress-icon.761326cc.svg",ue=(a.p,a.p,a(75)),ge=new IntersectionObserver((function(e){if(!0===e[0].isIntersecting&&e[0].intersectionRatio>.6){var t=document.getElementsByClassName("skills");Array.from(t).forEach((function(e){e.classList.add("animate__rollIn"),e.classList.add("animated")}))}}),{threshold:[.6]});var xe=function(){return Object(i.useEffect)((function(){ge.observe(document.querySelector("#skillset"))})),Object(s.jsxs)("div",{className:"AboutMe",children:[Object(s.jsxs)(I.a,{className:"img-container2 bg-beige",children:[Object(s.jsx)("h1",{children:"About Me"}),Object(s.jsxs)(h.a,{className:"d-flex flex-lg-row flex-column justify-content-lg-start align-items-lg-center justify-content-center align-items-start aboutme",children:[Object(s.jsx)("div",{className:"me-image",children:Object(s.jsx)(Y.a,{src:$})}),Object(s.jsx)("div",{className:"about",children:Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{children:"I'm a Berlin based full-stack Web Developer, building easy to use and user-centric webpages."}),Object(s.jsx)("br",{}),"Since 2017 I am working as a Django developer for TwoTickets.de in Berlin, Germany, which is where my passion for design and development have their roots. I enjoy wandering between logical back-end problems and creativity needing front-end issues. I love visuals and animations, which originates probably in my hobbies being drawing and painting.",Object(s.jsx)("br",{}),"Having taken my first steps in freelance works paved me the way to experience Shopify and WordPress, which are fun to use, if you want something neat and quick. But building everything from scratch and choosing your programming environment is even better!",Object(s.jsx)("br",{}),"Being at the beginning of my career I can't wait to learn new technologies and concepts and see, where they take me to."]})})]})]}),Object(s.jsxs)(I.a,{id:"skillset",className:"skill-jumbotron",children:[Object(s.jsx)("h2",{children:"Skills"}),Object(s.jsxs)(h.a,{className:"skill-container",children:[Object(s.jsxs)(ue.a,{className:"p-3",children:[Object(s.jsx)(Y.a,{src:re,className:"skills animate__animated"}),Object(s.jsx)(Y.a,{src:oe,className:"skills animate__animated"}),Object(s.jsx)(Y.a,{src:de,className:"skills animate__animated"})]}),Object(s.jsxs)(ue.a,{className:"px-3",children:[Object(s.jsx)(Y.a,{src:le,className:"skills animate__animated"}),Object(s.jsx)(Y.a,{src:be,className:"skills animate__animated"}),Object(s.jsx)(Y.a,{src:he,className:"skills animate__animated"})]}),Object(s.jsxs)(ue.a,{className:"p-3",children:[Object(s.jsx)(Y.a,{src:ce,className:"skills animate__animated"}),Object(s.jsx)(Y.a,{src:je,className:"skills animate__animated"}),Object(s.jsx)(Y.a,{src:me,className:"skills animate__animated"}),Object(s.jsx)(Y.a,{src:pe,className:"skills animate__animated"})]})]})]})]})},fe=a(77);var Oe=function(){return Object(s.jsx)("div",{className:"Contact",children:Object(s.jsxs)(I.a,{className:"bg-beige",children:[Object(s.jsx)("h1",{children:"Contact"}),Object(s.jsxs)(h.a,{children:[Object(s.jsxs)("p",{className:"w-md-75 w-100 mx-auto contact-text",children:["If you want to get in touch with me, quickly fill out the form below. Let's talk about a project collaboration or just say Hi to me! Of course you can also send me an email directly to ",Object(s.jsx)("a",{href:"mailto:priskakohnen@gmail.com",className:"highlight",children:"priskakohnen@gmail.com"})]}),Object(s.jsxs)(fe.a,{className:"w-md-75 w-100 mx-auto",action:"https://formspree.io/f/xzbkkyjn",method:"POST",children:[Object(s.jsxs)(fe.a.Row,{className:"justify-content-between m-0",children:[Object(s.jsxs)(fe.a.Group,{controlId:"formEmail",children:[Object(s.jsx)(fe.a.Label,{children:"Your Email"}),Object(s.jsx)(fe.a.Control,{type:"email",name:"email",required:!0,placeholder:"Enter email"})]}),Object(s.jsxs)(fe.a.Group,{controlId:"formName",children:[Object(s.jsx)(fe.a.Label,{children:"Your Name"}),Object(s.jsx)(fe.a.Control,{type:"text",name:"name",required:!0,placeholder:"Enter full name"})]})]}),Object(s.jsxs)(fe.a.Group,{controlId:"formMessage",children:[Object(s.jsx)(fe.a.Label,{children:"Your Message"}),Object(s.jsx)(fe.a.Control,{as:"textarea",name:"message",required:!0,rows:3,placeholder:"Enter message"})]}),Object(s.jsx)(B.a,{variant:"loading",type:"submit",children:"Submit"})]})]})]})})};var we=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{className:"navigation",children:Object(s.jsx)("div",{className:"navigation-sub",children:Object(s.jsxs)(l.a,{bg:"light",expand:"md",fixed:"top",className:"bg-light justify-content-end pr-0",children:[Object(s.jsx)(l.a.Brand,{href:"/",className:"flex-grow-2 text-right",children:Object(s.jsx)("img",{src:o,className:"d-inline-block align-top logo",alt:"React Bootstrap logo"})}),Object(s.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(s.jsxs)(d.a,{className:"mr-auto flex-grow-1",children:[Object(s.jsx)(d.a.Link,{href:"#home",className:"flex-grow-1 text-center",children:"Home"}),Object(s.jsx)(d.a.Link,{href:"#about",className:"flex-grow-1 text-center",children:"About Me"}),Object(s.jsx)(d.a.Link,{href:"#projects",className:"flex-grow-1 text-center",children:"Projects"}),Object(s.jsx)(d.a.Link,{href:"#contact",className:"flex-grow-1 text-center",children:"Contact"})]})})]})})}),Object(s.jsx)("a",{className:"anchor",name:"home"}),Object(s.jsx)(m,{}),Object(s.jsx)("a",{className:"anchor",name:"about"}),Object(s.jsx)(xe,{}),Object(s.jsx)("a",{className:"anchor",name:"projects"}),Object(s.jsx)(ne,{}),Object(s.jsx)("div",{id:"project-details"}),Object(s.jsx)("a",{className:"anchor",name:"contact"}),Object(s.jsx)(Oe,{}),Object(s.jsxs)("footer",{children:[Object(s.jsx)("div",{id:"go-top",children:Object(s.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"bi bi-chevron-double-up",viewBox:"0 0 18 18",children:[Object(s.jsx)("path",{fillRule:"evenodd",d:"M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"}),Object(s.jsx)("path",{fillRule:"evenodd",d:"M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"})]})})}),Object(s.jsxs)("div",{className:"text-center p-3 bg-light",children:["\xa9 2020 Copyright: ",Object(s.jsx)("span",{className:"text-dark",children:"Priska Kohnen"})]})]})]})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,82)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),i(e),n(e),c(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(we,{})}),document.getElementById("root")),ve()}},[[67,1,2]]]);
//# sourceMappingURL=main.a68907c8.chunk.js.map