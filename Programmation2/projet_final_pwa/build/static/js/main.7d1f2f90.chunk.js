(this.webpackJsonpprojet_final_pwa=this.webpackJsonpprojet_final_pwa||[]).push([[0],{110:function(e,a,t){e.exports=t.p+"static/media/banner_error_404.29ae1727.jpg"},113:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),m=(t(83),t(11)),o=t(12),s=t(14),i=t(13),u=t(116),p=t(117),E=t(37),d=t(19),g=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(u.a,{expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(d.b,{to:"/"},r.a.createElement(u.a.Brand,null,"Projet Final PWA")),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(d.b,{to:"/Films"},"Films"),r.a.createElement(d.b,{to:"/ajouterFilm",className:"mr-auto"},"Ajouter un Film"),r.a.createElement(d.b,{to:"/About",className:"mr-auto"},"\xc0 Propos"))))))}}]),t}(r.a.Component),f=t(7),b=t(10),h=t.n(b),v=t(21),x=t(22),j=t(31),y=t(8),N=t(34),w=(t(90),function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{lg:"3",md:"4",xs:"12",className:"my-2"},r.a.createElement(N.a,null,r.a.createElement("div",{className:"card-grid-view"},r.a.createElement(N.a.Img,{src:this.props.photo,className:"img-fluid"})),r.a.createElement(N.a.Body,null,r.a.createElement("div",{className:"title"},this.props.nom),r.a.createElement("div",{className:"card-text my-2"},this.props.resume.slice(0,50),"...")),r.a.createElement("div",{className:"details"},r.a.createElement("div",null,this.props.genre1,", ",this.props.genre2),r.a.createElement("div",null,this.props.annee)),r.a.createElement(N.a.Footer,null,r.a.createElement(j.a,null,r.a.createElement(y.a,{className:"d-flex justify-content-around"},r.a.createElement(d.b,{to:"/VoirFilm/"+this.props.nom+"?id="+this.props.id},r.a.createElement("button",{className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-eye fa-1x"}))),r.a.createElement(d.b,{to:"/Films/"+this.props.nom+"?id="+this.props.id},r.a.createElement("button",{className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-edit fa-1x"})," "))))))))}}]),t}(r.a.Component)),O="https://jsonserv.herokuapp.com/",I=t(27);t(91);var k=function(){var e=Object(n.useState)([]),a=Object(x.a)(e,2),t=a[0],l=a[1];function c(){return(c=Object(v.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(O+"films/");case 3:return a=e.sent,e.next=6,a.json();case 6:if(t=e.sent,l(t),a.ok){e.next=10;break}throw Error(a.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[t.join(",")]),r.a.createElement(E.a,null,r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"12",md:"12",xs:"12"},r.a.createElement("h3",{className:"mt-2 text-center"},"Bienvenue sur Prime")),r.a.createElement(I.a,null),r.a.createElement(y.a,{lg:"12",xs:"12",md:"12",className:"text-right my-2"},r.a.createElement("a",{href:"/ajouterFilm"},r.a.createElement("button",{className:"btn btn-primary"},r.a.createElement("i",{className:"fa fa-plus-square-o"})," Ajout Film")))),r.a.createElement(j.a,null,t.map((function(e,a){return r.a.createElement(w,{nom:e.titre,id:e.id,key:e.id,toutLobjet:e,acteur1:e.acteurs[0].name,resume:e.resume,acteur2:e.acteurs[1].name,genre1:e.genre[0].nom_genre,genre2:e.genre[1].nom_genre,annee:e.annee_parution,photo:e.picture})}))))},_=t(4),F=t(40),C=t(30),B=t(58),L=t.n(B);var S=function(e){var a=Object(n.useState)({titre:"",genre:["",""],annee_parution:"",resume:"",acteurs:["",""],name:"",picture:""}),t=Object(x.a)(a,2),l=t[0],c=t[1],m=Object(n.useState)(e.location.search.substring(4,e.location.search.length)),o=Object(x.a)(m,2),s=o[0],i=o[1],u=Object(n.useState)(""),p=Object(x.a)(u,2),d=p[0],g=p[1],f=Object(n.useState)(""),b=Object(x.a)(f,1)[0];function N(){return(N=Object(v.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(O+"films/"+s);case 3:return a=e.sent,i(s),console.log(i),e.next=8,a.json();case 8:if(t=e.sent,c(t),a.ok){e.next=12;break}throw Error(a.statusText);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function w(){return(w=Object(v.a)(h.a.mark((function a(t,n,r,l,c,m,o,i){var u;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(O+"films/"+s,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:s,titre:t,genre:[{nom_genre:n},{nom_genre:r}],annee_parution:c,resume:l,acteurs:[{name:m},{name:o}],picture:i})});case 3:if(!(u=a.sent).ok){a.next=8;break}return e.history.push("/Films"),I.b.success("Modification du film "+t+" effectu\xe9 avec succ\xe8s"),a.abrupt("return",u);case 8:throw new Error("Request failed!");case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))).apply(this,arguments)}function k(){return(k=Object(v.a)(h.a.mark((function a(){var t;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(O+"films/"+s,{method:"delete"});case 3:if(!(t=a.sent).ok){a.next=8;break}return e.history.push("/Films"),I.b.warn("Suppression du film effectu\xe9 avec succ\xe8s"),a.abrupt("return",t);case 8:throw new Error("Request failed!");case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){N.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"12",className:"mt-3"},r.a.createElement("a",{href:"/Films"},r.a.createElement("button",{className:"btn btn-primary"},"Retourner aux films")),r.a.createElement("h5",{className:"my-3 pb-3 text-center"},"\xc9dition du film ",r.a.createElement("i",null,l.titre)))),r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"3",className:"my-3"},""!==l.picture&&r.a.createElement(C.a,{src:d,rounded:!0,className:"img-fluid"}),r.a.createElement(y.a,{className:"my-4 text-center"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return k.apply(this,arguments)}},"Supprimer le film"))),r.a.createElement(_.a,{className:"col-lg-8"},r.a.createElement(_.a.Group,{controlId:"photoFilm"},r.a.createElement(_.a.Label,null,"URL de la pochette"),r.a.createElement(_.a.Control,{type:"text",placeholder:"Entrer une URL valide",className:"col-lg-12",onBlur:function(e){g(e.target.value)},defaultValue:l.picture})),r.a.createElement(_.a.Group,{controlId:"titre"},r.a.createElement(_.a.Label,null,"Titre"),r.a.createElement(_.a.Control,{type:"text",defaultValue:l.titre})),r.a.createElement(_.a.Group,{controlId:"resume"},r.a.createElement(_.a.Label,null,"R\xe9sum\xe9"),r.a.createElement(_.a.Control,{as:"textarea",rows:"3",type:"text",defaultValue:l.resume})),r.a.createElement("h5",{className:"mt-1"},"Genres"),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Group,{as:y.a,controlId:"genre1"},r.a.createElement(_.a.Label,null,"Genre 1"),r.a.createElement(_.a.Control,{type:"text",defaultValue:l.genre[0].nom_genre})),r.a.createElement(_.a.Group,{as:y.a,controlId:"genre2"},r.a.createElement(_.a.Label,null,"Genre 2:"),r.a.createElement(_.a.Control,{type:"text",defaultValue:l.genre[1].nom_genre}))),r.a.createElement("h5",{className:"mt-1"},"Acteurs"),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Group,{as:y.a,controlId:"acteur1"},r.a.createElement(_.a.Label,null,"Acteur 1"),r.a.createElement(_.a.Control,{type:"text",defaultValue:l.acteurs[0].name})),r.a.createElement(_.a.Group,{as:y.a,controlId:"acteur2"},r.a.createElement(_.a.Label,null,"Acteur 2"),r.a.createElement(_.a.Control,{type:"text",defaultValue:l.acteurs[1].name}))),r.a.createElement(_.a.Group,{controlId:"annee_parution"},r.a.createElement(_.a.Label,null,"Ann\xe9e parution"),r.a.createElement(L.a,{value:l.annee_parution,id:"annee_parution",options:{date:!0,datePattern:["Y"]},onChange:function(e){var a=b(e.target.rawValue);b(a)},className:"form-control"})),r.a.createElement(F.a,{variant:"primary",type:"submit",className:"mb-2",onClick:function(e){e.preventDefault(),function(e,a,t,n,r,l,c,m){w.apply(this,arguments)}(document.getElementById("titre").value,document.getElementById("genre1").value,document.getElementById("genre2").value,document.getElementById("resume").value,document.getElementById("annee_parution").value,document.getElementById("acteur1").value,document.getElementById("acteur2").value,document.getElementById("photoFilm").value)}},"Enregistrer")))))},A=t(15),G=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={photo:"https://via.placeholder.com/400",setErrors:{}},n.handleSave=n.handleSave.bind(Object(A.a)(n)),n.handlePhoto=n.handlePhoto.bind(Object(A.a)(n)),n}return Object(o.a)(t,[{key:"saveFilm",value:function(){var e=Object(v.a)(h.a.mark((function e(a,t,n,r,l,c,m,o){var s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonserv.herokuapp.com/films",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a,titre:a,genre:[{nom_genre:t},{nom_genre:n}],annee_parution:r,resume:l,acteurs:[{name:c},{name:m}],picture:o})});case 3:if(!(s=e.sent).ok){e.next=11;break}return e.next=7,s.json();case 7:return i=e.sent,this.props.history.push("/Films"),I.b.success("Ajout du film "+a+" avec succ\xe8s"),e.abrupt("return",i);case 11:throw new Error("Request failed!");case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(a,t,n,r,l,c,m,o){return e.apply(this,arguments)}}()},{key:"formIsValid",value:function(e,a,t,n,r,l,c,m){var o={};return e||(o.nom="Le nom est obligatoire"),a||(o.nom="Le genre est obligatoire"),t||(o.nom="Le genre est obligatoire"),n||(o.nom="L'acteur 1 est obligatoire"),r||(o.nom="L'acteur 2 est obligatoire"),m||(o.photo="La photo est obligatoire"),this.setState({setErrors:o}),0===Object.keys(o).length}},{key:"handleSave",value:function(e){e.preventDefault();var a=document.getElementById("titre").value,t=document.getElementById("genre1").value,n=document.getElementById("genre2").value,r=document.getElementById("resume").value,l=document.getElementById("annee_parution").value,c=document.getElementById("acteur1").value,m=document.getElementById("acteur2").value,o=document.getElementById("photoFilm").value;console.log(a),console.log(o),console.log(t),console.log(n),console.log(r),this.formIsValid(a,t,n,r,l,c,m,o)&&this.saveFilm(a,t,n,l,r,c,m,o)}},{key:"handlePhoto",value:function(e){var a=document.getElementById("photoFilm").value;this.setState({photo:a})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(y.a,{className:"mt-1 p-0"},r.a.createElement("a",{href:"/Films"},r.a.createElement("button",{className:"btn btn-primary"},"Retourner aux films"))),r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"12",className:"my-2"},r.a.createElement("h3",{className:"text-center my-2"},"Ajouter un nouveau film"))),r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"4"},""!==this.state.photo&&r.a.createElement(C.a,{src:this.state.photo,rounded:!0,className:"img-fluid"})),r.a.createElement(_.a,{className:"col-lg-8 mt-2"},r.a.createElement(_.a.Group,{controlId:"photoFilm"},r.a.createElement(_.a.Label,null,"URL de la pochette"),r.a.createElement(_.a.Control,{type:"text",placeholder:"Entrer une URL valide",className:"col-lg-12",onBlur:this.handlePhoto})),r.a.createElement(_.a.Group,{controlId:"titre"},r.a.createElement(_.a.Label,null,"Titre"),r.a.createElement(_.a.Control,{type:"text",placeholder:"Entrez le titre du film"})),r.a.createElement(_.a.Group,{controlId:"resume"},r.a.createElement(_.a.Label,null,"R\xe9sum\xe9"),r.a.createElement(_.a.Control,{as:"textarea",rows:"3",type:"text"})),r.a.createElement("h5",{className:"mt-1"},"Genres"),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Group,{as:y.a,controlId:"genre1"},r.a.createElement(_.a.Label,null,"Genre 1"),r.a.createElement(_.a.Control,{type:"text"})),r.a.createElement(_.a.Group,{as:y.a,controlId:"genre2"},r.a.createElement(_.a.Label,null,"Genre 2:"),r.a.createElement(_.a.Control,{type:"text"}))),r.a.createElement("h5",{className:"mt-1"},"Acteurs"),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Group,{as:y.a,controlId:"acteur1"},r.a.createElement(_.a.Label,null,"Acteur 1"),r.a.createElement(_.a.Control,{type:"text"})),r.a.createElement(_.a.Group,{as:y.a,controlId:"acteur2"},r.a.createElement(_.a.Label,null,"Acteur 2"),r.a.createElement(_.a.Control,{type:"text"}))),r.a.createElement(_.a.Group,{controlId:"annee_parution"},r.a.createElement(_.a.Label,null,"Ann\xe9e parution"),r.a.createElement(_.a.Control,{type:"number",maxlenght:"4"})),r.a.createElement(F.a,{variant:"primary",type:"submit",onClick:this.handleSave},"Enregistrer")))))}}]),t}(r.a.Component),P=t(18),R=t(59),D=t.n(R),T=t(60),V=t.n(T),z=t(61),J=t.n(z),W=t(62),q=t.n(W),U=t(63),M=t.n(U),H=t(64),K=t.n(H),Y=t(65),$=t.n(Y),Q=t(66),X=t.n(Q),Z=t(67),ee=t.n(Z),ae=t(68),te=t.n(ae),ne=t(69),re=t.n(ne),le=t(70),ce=t.n(le),me=t(71),oe=t.n(me),se=t(72),ie=t.n(se),ue=t(73),pe=t.n(ue),Ee=t(74),de=t.n(Ee),ge=t(75),fe=t.n(ge),be=t(76),he=t.n(be),ve=(t(93),t(94),t(77)),xe=t.n(ve),je=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e={dots:!0,adaptiveHeight:!0,arrows:!1,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"12",md:"12",xs:"12",className:"text-center my-4"},r.a.createElement("h4",null,"Bienvenue sur PWA Films ! "))),r.a.createElement(xe.a,e,r.a.createElement(y.a,null,r.a.createElement("img",{src:fe.a,alt:"Deep BLue Sea 3",className:"img-fluid"})),r.a.createElement(y.a,null,r.a.createElement("img",{src:oe.a,alt:"Ava",className:"img-fluid"})),r.a.createElement(y.a,null,r.a.createElement("img",{src:ie.a,alt:"Ghostbusters 1-2",className:"img-fluid"})),r.a.createElement(y.a,null,r.a.createElement("img",{src:pe.a,alt:"Primal",className:"img-fluid"})),r.a.createElement(y.a,null,r.a.createElement("img",{src:de.a,alt:"Stephen King",className:"img-fluid"})),r.a.createElement(y.a,null,r.a.createElement("img",{src:he.a,alt:"Shuuter Island",className:"img-fluid"}))),r.a.createElement(j.a,{className:"mt-5"},r.a.createElement(y.a,{lg:"3",xs:"6"},r.a.createElement(P.a,{src:D.a,animation:"zoomIn",animationDuration:"2s",alt:"Abominable",className:"img-fluid mb-2 img-thumbnail"})),r.a.createElement(y.a,{lg:"3",xs:"6"},r.a.createElement(P.a,{src:V.a,animation:"blurIn",animationDuration:"2s",alt:"Jaws",className:"img-fluid img-thumbnail"})),r.a.createElement(y.a,{lg:"3",xs:"6"},r.a.createElement(P.a,{animation:"blurIn",animationDuration:"2s",src:q.a,alt:"Fast And Furious",className:"img-fluid img-thumbnail"})),r.a.createElement(y.a,{lg:"3",xs:"6"},r.a.createElement(P.a,{src:te.a,animation:"zoomIn",animationDuration:"2s",alt:"Outpost",className:"img-fluid img-thumbnail"}))),r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"3",xs:"6"},r.a.createElement(P.a,{src:J.a,alt:"King of Staten Island",animation:"blurIn",animationDuration:"1s",className:"img-fluid img-thumbnail"})),r.a.createElement(y.a,{lg:"3",xs:"6"},r.a.createElement(P.a,{src:M.a,animation:"zoomIn",animationDuration:"2s",alt:"El Camino a Breaking Bad Movie",className:"img-fluid img-thumbnail"})),r.a.createElement(y.a,{lg:"3",xs:"6"},r.a.createElement(P.a,{src:ce.a,animation:"blurIn",animationDuration:"2s",alt:"Irresistible",className:"img-fluid img-thumbnail"})),r.a.createElement(y.a,{lg:"3",xs:"6"},r.a.createElement(P.a,{src:re.a,animation:"blurIn",animationDuration:"2s",alt:"Halloween",className:"img-fluid img-thumbnail"}))),r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"3",xs:"6"},r.a.createElement(P.a,{animation:"zoomIn",animationDuration:"2s",src:K.a,alt:"Beetlejuice",className:"img-fluid img-thumbnail"})),r.a.createElement(y.a,{lg:"3",xs:"6"},r.a.createElement(P.a,{animation:"zoomIn",animationDuration:"2s",src:X.a,alt:"Whiplash",className:"img-fluid img-thumbnail"})),r.a.createElement(y.a,{lg:"3",xs:"6"},r.a.createElement(P.a,{animation:"zoomIn",animationDuration:"2s",src:ee.a,alt:"Two Jakes",className:"img-fluid img-thumbnail"})),r.a.createElement(y.a,{lg:"3",xs:"6"},r.a.createElement(P.a,{animation:"zoomIn",animationDuration:"2s",src:$.a,alt:"Collection de films 1",className:"img-fluid img-thumbnail"})))))}}]),t}(r.a.Component),ye=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"12",sm:"12",className:"my-2"},r.a.createElement("h4",{className:"text-center my-5"},"\xc0 propos"),r.a.createElement("p",null,"Projet Final PWA \xe0 pour ojectif de maintenir une base de donn\xe9es avec plusieurs films ainsi que d'en pr\xe9senter la plupart sur la page d'accueil. Pour ce faire, nous avons d\xfbe utiliser plusieurs images provenants de diff\xe9rentes sources. Nous tenons ainsi \xe0 les remercier"))),r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"12",sm:"12",className:"mt-1 mb-2"},r.a.createElement("h6",{className:"text-center mb-4"},"Source pour les images de ce projet: "))),r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"6",sm:"6",md:"6",xs:"6"},r.a.createElement("img",{src:"https://www.archambault.ca/images/logo.svg",className:"img-fluid",alt:"Archambault"})),r.a.createElement(y.a,{lg:"6",sm:"6",md:"6",xs:"6"},r.a.createElement("img",{src:"https://www.cinoche.com/img/fb-share-ab0662e983.jpg",className:"img-fluid",alt:"Cinoche"})))))}}]),t}(r.a.Component);var Ne=function(e){var a=Object(n.useState)({titre:"",genre:["",""],annee_parution:"",resume:"",acteurs:["",""],picture:""}),t=Object(x.a)(a,2),l=t[0],c=t[1],m=Object(n.useState)(e.location.search.substring(4,e.location.search.length)),o=Object(x.a)(m,2),s=o[0],i=o[1];function u(){return(u=Object(v.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(O+"films/"+s);case 3:return a=e.sent,i(s),e.next=7,a.json();case 7:if(t=e.sent,c(t),a.ok){e.next=11;break}throw Error(a.statusText);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"12",sm:"12",md:"12",className:"my-3"},r.a.createElement("a",{href:"/Films"},r.a.createElement("button",{className:"btn btn-primary"},"Retourner aux films")),r.a.createElement("h5",{className:"mt-4 text-center"},"Informations du film ",r.a.createElement("i",null,l.titre)))),r.a.createElement(j.a,null,r.a.createElement(y.a,{lg:"3",md:"3",sm:"6",className:"my-2 text-center"},""!==l.picture&&r.a.createElement(C.a,{src:l.picture,rounded:!0,className:"img-fluid"}),r.a.createElement(y.a,{className:"my-4 text-center"})),r.a.createElement(y.a,{lg:"9",sm:"6",className:"my-3"},r.a.createElement("b",null,"Titre")," ",r.a.createElement("p",null,l.titre),r.a.createElement("b",null,"R\xe9sum\xe9"),r.a.createElement("p",null,l.resume),r.a.createElement("b",null,"Ann\xe9e de parution"),r.a.createElement("p",null,l.annee_parution),r.a.createElement("b",null,"Genres: "),r.a.createElement("p",null,l.genre[0].nom_genre,r.a.createElement("br",null),l.genre[1].nom_genre),r.a.createElement("b",null,"Acteurs: "),r.a.createElement("p",null,l.acteurs[0].name,r.a.createElement("br",null),l.acteurs[1].name)))))},we=function(e){Object(s.a)(n,e);var a=Object(i.a)(n);function n(){return Object(m.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:"text-center"},r.a.createElement("img",{src:t(110),alt:"Page not found",className:"py-3"})))}}]),n}(r.a.Component);var Oe=function(){var e=Object(f.f)();return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:je}),r.a.createElement(f.a,{exact:!0,path:"/Films",component:k}),r.a.createElement(f.a,{path:"/Films/:id",component:S}),r.a.createElement(f.a,{path:"/VoirFilm",component:Ne}),r.a.createElement(f.a,{path:"/ajouterFilm",component:G}),r.a.createElement(f.a,{path:"/About",component:ye}),r.a.createElement(f.a,{component:we})))};t(111),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(112);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{basename:"/AEC_Front_End/Programmation2/projet_final_pwa/build/"},r.a.createElement(Oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,a,t){e.exports=t.p+"static/media/abominable.284faf97.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/jaws_movie_collection.ec52ebe9.jpg"},61:function(e,a,t){e.exports=t.p+"static/media/staten_island.f67fb9e2.jpg"},62:function(e,a,t){e.exports=t.p+"static/media/fast_furious.81bc23a2.jpg"},63:function(e,a,t){e.exports=t.p+"static/media/el_camino.7e58a68a.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/beetlejuice.415a21d8.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/movie_collection1.e4b2ee68.jpg"},66:function(e,a,t){e.exports=t.p+"static/media/whiplash.e6f90d0e.jpg"},67:function(e,a,t){e.exports=t.p+"static/media/two_jakes.4a6ee184.jpg"},68:function(e,a,t){e.exports=t.p+"static/media/outpost.1e58bf53.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/halloween.8d185985.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/irresistible.9bd390fb.jpg"},71:function(e,a,t){e.exports=t.p+"static/media/ava_br.20fdda8f.jpg"},72:function(e,a,t){e.exports=t.p+"static/media/gb12.e4ed3fbd.jpg"},73:function(e,a,t){e.exports=t.p+"static/media/primal.c628fdd6.jpg"},74:function(e,a,t){e.exports=t.p+"static/media/stephen_king_br.fdf0a001.jpg"},75:function(e,a,t){e.exports=t.p+"static/media/dbs3.8799114a.jpg"},76:function(e,a,t){e.exports=t.p+"static/media/shutter_island_br.221ddf0d.jpg"},78:function(e,a,t){e.exports=t(113)},83:function(e,a,t){},90:function(e,a,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.7d1f2f90.chunk.js.map