(this.webpackJsonpprojet_final_pwa=this.webpackJsonpprojet_final_pwa||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/banner_error_404.29ae1727.jpg"},105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=a(12),s=a(13),m=a(15),i=a(14),u=a(108),p=a(109),d=a(40),E=a(37),f=a(9),g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(u.a,{expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(f.b,{to:"/"},r.a.createElement(u.a.Brand,null,"Projet Final PWA")),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto navbar-a"},r.a.createElement(f.b,{to:"/Films"},"Films"),r.a.createElement(f.b,{to:"/ajouterFilm"},"Ajouter un Film"),r.a.createElement(f.b,{to:"/About"},"\xc0 Propos"))),r.a.createElement(d.a,{variant:"dark",id:"boutonInstall"},"Installer l'application"))))}}]),a}(r.a.Component),h=a(7),b=a(11),v=a.n(b),y=a(20),j=a(21),x=a(30),w=a(8),N=a(34),O=(a(83),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{lg:"3",md:"4",xs:"12",className:"my-2"},r.a.createElement(N.a,null,r.a.createElement("div",{className:"card-grid-view"},r.a.createElement(N.a.Img,{src:this.props.photo,className:"img-fluid"})),r.a.createElement(N.a.Body,null,r.a.createElement("div",{className:"title"},this.props.nom),r.a.createElement("div",{className:"card-text my-2"},this.props.resume.slice(0,50),"...")),r.a.createElement("div",{className:"details"},r.a.createElement("div",null,this.props.genre1,", ",this.props.genre2),r.a.createElement("div",null,this.props.annee)),r.a.createElement(N.a.Footer,null,r.a.createElement(x.a,null,r.a.createElement(w.a,{className:"d-flex justify-content-around"},r.a.createElement(f.b,{to:"/VoirFilm/"+this.props.nom+"?id="+this.props.id},r.a.createElement("button",{className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-eye fa-1x"}))),r.a.createElement(f.b,{to:"/Films/"+this.props.nom+"?id="+this.props.id},r.a.createElement("button",{className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-edit fa-1x"})," "))))))))}}]),a}(r.a.Component)),k="https://jsonserv.herokuapp.com/",I=a(26);a(84);var F=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],l=t[1];function c(){return(c=Object(y.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(k+"films/");case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,l(a),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[a.join(",")]),r.a.createElement(E.a,null,r.a.createElement(x.a,null,r.a.createElement(w.a,{lg:"12",md:"12",xs:"12"},r.a.createElement("h3",{className:"mt-2 text-center"},"Bienvenue sur Prime")),r.a.createElement(I.a,{hideProgressBar:!0}),r.a.createElement(w.a,{lg:"12",xs:"12",md:"12",className:"text-right my-2"},r.a.createElement(f.b,{to:"/ajouterFilm"},r.a.createElement("button",{className:"btn btn-primary"},r.a.createElement("i",{className:"fa fa-plus-square-o"})," Ajout Film")))),r.a.createElement(x.a,null,a.map((function(e,t){return r.a.createElement(O,{nom:e.titre,id:e.id,key:e.id,toutLobjet:e,acteur1:e.acteurs[0].name,resume:e.resume,acteur2:e.acteurs[1].name,genre1:e.genre[0].nom_genre,genre2:e.genre[1].nom_genre,annee:e.annee_parution,photo:e.picture})}))))},_=a(5),C=a(29),L=a(60),A=a.n(L);var S=function(e){var t=Object(n.useState)({titre:"",genre:["",""],annee_parution:"",resume:"",acteurs:["",""],name:"",picture:""}),a=Object(j.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(e.location.search.substring(4,e.location.search.length)),s=Object(j.a)(o,2),m=s[0],i=s[1],u=Object(n.useState)(""),p=Object(j.a)(u,2),g=p[0],h=p[1],b=Object(n.useState)(""),N=Object(j.a)(b,1)[0];function O(){return(O=Object(y.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(k+"films/"+m);case 3:return t=e.sent,i(m),console.log(i),e.next=8,t.json();case 8:if(a=e.sent,c(a),t.ok){e.next=12;break}throw Error(t.statusText);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function F(){return(F=Object(y.a)(v.a.mark((function t(a,n,r,l,c,o,s,i){var u;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(k+"films/"+m,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:m,titre:a,genre:[{nom_genre:n},{nom_genre:r}],annee_parution:c,resume:l,acteurs:[{name:o},{name:s}],picture:i})});case 3:if(!(u=t.sent).ok){t.next=8;break}return e.history.push("/Films"),I.b.success("Modification du film "+a+" effectu\xe9 avec succ\xe8s"),t.abrupt("return",u);case 8:throw new Error("Request failed!");case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function L(){return(L=Object(y.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(k+"films/"+m,{method:"delete"});case 3:if(!(a=t.sent).ok){t.next=8;break}return e.history.push("/Films"),I.b.warn("Suppression du film effectu\xe9 avec succ\xe8s"),t.abrupt("return",a);case 8:throw new Error("Request failed!");case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(x.a,null,r.a.createElement(w.a,{lg:"12",className:"mt-3"},r.a.createElement(f.b,{to:"/Films"},r.a.createElement("button",{className:"btn btn-primary"},"Retourner aux films")),r.a.createElement("h5",{className:"my-3 pb-3 text-center"},"\xc9dition du film ",r.a.createElement("i",null,l.titre)))),r.a.createElement(x.a,null,r.a.createElement(w.a,{lg:"3",className:"my-3"},""!==l.picture&&r.a.createElement(C.a,{src:g,rounded:!0,className:"img-fluid"}),r.a.createElement(w.a,{className:"my-4 text-center"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return L.apply(this,arguments)}},"Supprimer le film"))),r.a.createElement(_.a,{className:"col-lg-8"},r.a.createElement(_.a.Group,{controlId:"photoFilm"},r.a.createElement(_.a.Label,null,"URL de la pochette"),r.a.createElement(_.a.Control,{type:"text",placeholder:"Entrer une URL valide",className:"col-lg-12",onBlur:function(e){h(e.target.value)},defaultValue:l.picture})),r.a.createElement(_.a.Group,{controlId:"titre"},r.a.createElement(_.a.Label,null,"Titre"),r.a.createElement(_.a.Control,{type:"text",defaultValue:l.titre})),r.a.createElement(_.a.Group,{controlId:"resume"},r.a.createElement(_.a.Label,null,"R\xe9sum\xe9"),r.a.createElement(_.a.Control,{as:"textarea",rows:"3",type:"text",defaultValue:l.resume})),r.a.createElement("h5",{className:"mt-1"},"Genres"),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Group,{as:w.a,controlId:"genre1"},r.a.createElement(_.a.Label,null,"Genre 1"),r.a.createElement(_.a.Control,{type:"text",defaultValue:l.genre[0].nom_genre})),r.a.createElement(_.a.Group,{as:w.a,controlId:"genre2"},r.a.createElement(_.a.Label,null,"Genre 2:"),r.a.createElement(_.a.Control,{type:"text",defaultValue:l.genre[1].nom_genre}))),r.a.createElement("h5",{className:"mt-1"},"Acteurs"),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Group,{as:w.a,controlId:"acteur1"},r.a.createElement(_.a.Label,null,"Acteur 1"),r.a.createElement(_.a.Control,{type:"text",defaultValue:l.acteurs[0].name})),r.a.createElement(_.a.Group,{as:w.a,controlId:"acteur2"},r.a.createElement(_.a.Label,null,"Acteur 2"),r.a.createElement(_.a.Control,{type:"text",defaultValue:l.acteurs[1].name}))),r.a.createElement(_.a.Group,{controlId:"annee_parution"},r.a.createElement(_.a.Label,null,"Ann\xe9e parution"),r.a.createElement(A.a,{value:l.annee_parution,id:"annee_parution",options:{date:!0,datePattern:["Y"]},onChange:function(e){var t=N(e.target.rawValue);N(t)},className:"form-control"})),r.a.createElement(d.a,{variant:"primary",type:"submit",className:"mb-2",onClick:function(e){e.preventDefault(),function(e,t,a,n,r,l,c,o){F.apply(this,arguments)}(document.getElementById("titre").value,document.getElementById("genre1").value,document.getElementById("genre2").value,document.getElementById("resume").value,document.getElementById("annee_parution").value,document.getElementById("acteur1").value,document.getElementById("acteur2").value,document.getElementById("photoFilm").value)}},"Enregistrer")))))},B=a(16),G=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={photo:"https://via.placeholder.com/400",setErrors:{}},n.handleSave=n.handleSave.bind(Object(B.a)(n)),n.handlePhoto=n.handlePhoto.bind(Object(B.a)(n)),n}return Object(s.a)(a,[{key:"saveFilm",value:function(){var e=Object(y.a)(v.a.mark((function e(t,a,n,r,l,c,o,s){var m,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonserv.herokuapp.com/films",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,titre:t,genre:[{nom_genre:a},{nom_genre:n}],annee_parution:r,resume:l,acteurs:[{name:c},{name:o}],picture:s})});case 3:if(!(m=e.sent).ok){e.next=11;break}return e.next=7,m.json();case 7:return i=e.sent,this.props.history.push("/Films"),I.b.success("Ajout du film "+t+" avec succ\xe8s"),e.abrupt("return",i);case 11:throw new Error("Request failed!");case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t,a,n,r,l,c,o,s){return e.apply(this,arguments)}}()},{key:"formIsValid",value:function(e,t,a,n,r,l,c,o){var s={};return e||(s.nom="Le nom est obligatoire"),t||(s.nom="Le genre est obligatoire"),a||(s.nom="Le genre est obligatoire"),n||(s.nom="L'acteur 1 est obligatoire"),r||(s.nom="L'acteur 2 est obligatoire"),o||(s.photo="La photo est obligatoire"),this.setState({setErrors:s}),0===Object.keys(s).length}},{key:"handleSave",value:function(e){e.preventDefault();var t=document.getElementById("titre").value,a=document.getElementById("genre1").value,n=document.getElementById("genre2").value,r=document.getElementById("resume").value,l=document.getElementById("annee_parution").value,c=document.getElementById("acteur1").value,o=document.getElementById("acteur2").value,s=document.getElementById("photoFilm").value;console.log(t),console.log(s),console.log(a),console.log(n),console.log(r),this.formIsValid(t,a,n,r,l,c,o,s)&&this.saveFilm(t,a,n,l,r,c,o,s)}},{key:"handlePhoto",value:function(e){var t=document.getElementById("photoFilm").value;this.setState({photo:t})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(w.a,{className:"mt-1 p-0"},r.a.createElement(f.b,{to:"/Films"},r.a.createElement("button",{className:"btn btn-primary"},"Retourner aux films"))),r.a.createElement(x.a,null,r.a.createElement(w.a,{lg:"12",className:"my-2"},r.a.createElement("h3",{className:"text-center my-2"},"Ajouter un nouveau film"))),r.a.createElement(x.a,null,r.a.createElement(w.a,{lg:"4"},""!==this.state.photo&&r.a.createElement(C.a,{src:this.state.photo,rounded:!0,className:"img-fluid"})),r.a.createElement(_.a,{className:"col-lg-8 mt-2"},r.a.createElement(_.a.Group,{controlId:"photoFilm"},r.a.createElement(_.a.Label,null,"URL de la pochette"),r.a.createElement(_.a.Control,{type:"text",placeholder:"Entrer une URL valide",className:"col-lg-12",onBlur:this.handlePhoto})),r.a.createElement(_.a.Group,{controlId:"titre"},r.a.createElement(_.a.Label,null,"Titre"),r.a.createElement(_.a.Control,{type:"text",placeholder:"Entrez le titre du film"})),r.a.createElement(_.a.Group,{controlId:"resume"},r.a.createElement(_.a.Label,null,"R\xe9sum\xe9"),r.a.createElement(_.a.Control,{as:"textarea",rows:"3",type:"text"})),r.a.createElement("h5",{className:"mt-1"},"Genres"),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Group,{as:w.a,controlId:"genre1"},r.a.createElement(_.a.Label,null,"Genre 1"),r.a.createElement(_.a.Control,{type:"text"})),r.a.createElement(_.a.Group,{as:w.a,controlId:"genre2"},r.a.createElement(_.a.Label,null,"Genre 2:"),r.a.createElement(_.a.Control,{type:"text"}))),r.a.createElement("h5",{className:"mt-1"},"Acteurs"),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Group,{as:w.a,controlId:"acteur1"},r.a.createElement(_.a.Label,null,"Acteur 1"),r.a.createElement(_.a.Control,{type:"text"})),r.a.createElement(_.a.Group,{as:w.a,controlId:"acteur2"},r.a.createElement(_.a.Label,null,"Acteur 2"),r.a.createElement(_.a.Control,{type:"text"}))),r.a.createElement(_.a.Group,{controlId:"annee_parution"},r.a.createElement(_.a.Label,null,"Ann\xe9e parution"),r.a.createElement(_.a.Control,{type:"number",maxlenght:"4"})),r.a.createElement(d.a,{variant:"primary",type:"submit",onClick:this.handleSave},"Enregistrer")))))}}]),a}(r.a.Component),R=a(33),P=a(61),T=a.n(P),V=a(62),W=a.n(V),U=a(63),D=a.n(U),q=a(64),J=a.n(q),Q=a(65),z=a.n(Q),M=a(66),H=a.n(M),K=a(67),Y=a.n(K),$=a(68),X=a.n($),Z=a(69),ee=a.n(Z),te=a(70),ae=a.n(te),ne=(a(86),a(87),a(71)),re=a.n(ne),le=a(49),ce=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=[{src:"https://i.imgur.com/RVQB2Cd.jpg",width:3,height:4},{src:"https://i.imgur.com/2zufAty.jpg",width:3,height:2},{src:"https://i.imgur.com/fQRLFw1.jpg",width:3,height:4}],t=[{src:"https://www.disneyphile.fr/wp-content/uploads/2019/09/mal%C3%A9fique-2-d23-expo.jpg",width:4,height:2},{src:"https://i.imgur.com/FEt1iQS.jpg",width:4,height:2}],a=function(){return r.a.createElement(le.a,{photos:e,direction:"row"})},n=function(){return r.a.createElement(le.a,{photos:t})},l={dots:!0,adaptiveHeight:!0,arrows:!1,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(x.a,null,r.a.createElement(w.a,{lg:"12",md:"12",xs:"12",className:"text-center my-4"},r.a.createElement("h4",null,"Bienvenue sur PWA Films ! "))),r.a.createElement(re.a,l,r.a.createElement(w.a,null,r.a.createElement("img",{src:ee.a,alt:"Deep BLue Sea 3",className:"img-fluid"})),r.a.createElement(w.a,null,r.a.createElement("img",{src:z.a,alt:"Ava",className:"img-fluid"})),r.a.createElement(w.a,null,r.a.createElement("img",{src:H.a,alt:"Ghostbusters 1-2",className:"img-fluid"})),r.a.createElement(w.a,null,r.a.createElement("img",{src:Y.a,alt:"Primal",className:"img-fluid"})),r.a.createElement(w.a,null,r.a.createElement("img",{src:X.a,alt:"Stephen King",className:"img-fluid"})),r.a.createElement(w.a,null,r.a.createElement("img",{src:ae.a,alt:"Shuuter Island",className:"img-fluid"}))),r.a.createElement(x.a,{className:"mt-5"},r.a.createElement(w.a,{lg:"3",xs:"6"},r.a.createElement(R.a,{src:T.a,animation:"blurIn",animationDuration:"1s",alt:"Abominable",className:"img-fluid mb-2 img-thumbnail"})),r.a.createElement(w.a,{lg:"3",xs:"6"},r.a.createElement(R.a,{src:W.a,animation:"blurIn",animationDuration:"1s",alt:"Jaws",className:"img-fluid img-thumbnail"})),r.a.createElement(w.a,{lg:"3",xs:"6"},r.a.createElement(R.a,{animation:"blurIn",animationDuration:"1s",src:D.a,alt:"Fast And Furious",className:"img-fluid img-thumbnail"})),r.a.createElement(w.a,{lg:"3",xs:"6"},r.a.createElement(R.a,{src:J.a,animation:"blurIn",animationDuration:"1s",alt:"Outpost",className:"img-fluid img-thumbnail"}))),r.a.createElement(a,null),r.a.createElement(n,null)))}}]),a}(r.a.Component),oe=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(x.a,null,r.a.createElement(w.a,{lg:"12",sm:"12",className:"my-2"},r.a.createElement("h4",{className:"text-center my-5"},"\xc0 propos"),r.a.createElement("p",null,"Projet Final PWA \xe0 pour ojectif de maintenir une base de donn\xe9es avec plusieurs films ainsi que d'en pr\xe9senter la plupart sur la page d'accueil. Pour ce faire, nous avons d\xfbe utiliser plusieurs images provenants de diff\xe9rentes sources. Nous tenons ainsi \xe0 les remercier"))),r.a.createElement(x.a,null,r.a.createElement(w.a,{lg:"12",sm:"12",className:"mt-1 mb-2"},r.a.createElement("h6",{className:"text-center mb-4"},"Source pour les images de ce projet: "))),r.a.createElement(x.a,null,r.a.createElement(w.a,{lg:"6",sm:"6",md:"6",xs:"6"},r.a.createElement("img",{src:"https://www.archambault.ca/images/logo.svg",className:"img-fluid",alt:"Archambault"})),r.a.createElement(w.a,{lg:"6",sm:"6",md:"6",xs:"6"},r.a.createElement("img",{src:"https://www.cinoche.com/img/fb-share-ab0662e983.jpg",className:"img-fluid",alt:"Cinoche"})))))}}]),a}(r.a.Component);var se=function(e){var t=Object(n.useState)({titre:"",genre:["",""],annee_parution:"",resume:"",acteurs:["",""],picture:""}),a=Object(j.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(e.location.search.substring(4,e.location.search.length)),s=Object(j.a)(o,2),m=s[0],i=s[1];function u(){return(u=Object(y.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(k+"films/"+m);case 3:return t=e.sent,i(m),e.next=7,t.json();case 7:if(a=e.sent,c(a),t.ok){e.next=11;break}throw Error(t.statusText);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(x.a,null,r.a.createElement(w.a,{lg:"12",sm:"12",md:"12",className:"my-3"},r.a.createElement(f.b,{to:"/Films"},r.a.createElement("button",{className:"btn btn-primary"},"Retourner aux films")),r.a.createElement("h5",{className:"mt-4 text-center"},"Informations du film ",r.a.createElement("i",null,l.titre)))),r.a.createElement(x.a,null,r.a.createElement(w.a,{lg:"3",md:"3",sm:"6",className:"my-2 text-center"},""!==l.picture&&r.a.createElement(C.a,{src:l.picture,rounded:!0,className:"img-fluid"}),r.a.createElement(w.a,{className:"my-4 text-center"})),r.a.createElement(w.a,{lg:"9",sm:"6",className:"my-3"},r.a.createElement("b",null,"Titre")," ",r.a.createElement("p",null,l.titre),r.a.createElement("b",null,"R\xe9sum\xe9"),r.a.createElement("p",null,l.resume),r.a.createElement("b",null,"Ann\xe9e de parution"),r.a.createElement("p",null,l.annee_parution),r.a.createElement("b",null,"Genres: "),r.a.createElement("p",null,l.genre[0].nom_genre,r.a.createElement("br",null),l.genre[1].nom_genre),r.a.createElement("b",null,"Acteurs: "),r.a.createElement("p",null,l.acteurs[0].name,r.a.createElement("br",null),l.acteurs[1].name)))))},me=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{className:"text-center"},r.a.createElement("img",{src:a(102),alt:"Page not found",className:"py-3"})))}}]),n}(r.a.Component);var ie=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:ce}),r.a.createElement(h.a,{exact:!0,path:"/Films",component:F}),r.a.createElement(h.a,{path:"/Films/:id",component:S}),r.a.createElement(h.a,{path:"/VoirFilm",component:se}),r.a.createElement(h.a,{path:"/ajouterFilm",component:G}),r.a.createElement(h.a,{path:"/About",component:oe}),r.a.createElement(h.a,{component:me})))},ue=(a(103),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function pe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(104);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,null,r.a.createElement(ie,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");ue?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):pe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):pe(t,e)}))}}()},61:function(e,t,a){e.exports=a.p+"static/media/abominable.284faf97.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/jaws_movie_collection.ec52ebe9.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/fast_furious.81bc23a2.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/outpost.1e58bf53.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/ava_br.20fdda8f.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/gb12.e4ed3fbd.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/primal.c628fdd6.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/stephen_king_br.fdf0a001.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/dbs3.8799114a.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/shutter_island_br.221ddf0d.jpg"},72:function(e,t,a){e.exports=a(105)},83:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.952124f0.chunk.js.map