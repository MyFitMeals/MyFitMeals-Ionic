function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{QCdY:function(e,t,n){"use strict";n.r(t),n.d(t,"ContactUsPageModule",(function(){return p}));var o=n("ofXK"),r=n("3Pt+"),i=n("TEn/"),s=n("tyNb"),c=n("mrSG"),a=n("fXoL");function u(e,t){if(1&e&&(a.Ob(0,"div",13),a.Ob(1,"ion-text",14),a.Ob(2,"h3"),a.lc(3),a.Nb(),a.Nb(),a.Nb()),2&e){var n=a.Yb();a.zb(3),a.mc(n.subject)}}var b,l,f,m=[{path:"",component:(b=function(){function e(t,n,o,r){_classCallCheck(this,e),this.pickerController=t,this.router=n,this.toast=o,this.formBuilder=r,this.subjects=["Probl\xe8me de paiement","Probl\xe8me de compte","Probl\xe8me de recette"],this.subjectSelected=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.contactUsForm=this.formBuilder.group({message:["",[r.m.required]]})}},{key:"showPicker",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={buttons:[{text:"Annuler",role:"cancel"},{text:"Ok",handler:function(e){n.subjectSelected=!0,n.subject=e.Subjects.text,console.log(e)}}],columns:[{name:"Subjects",options:this.getColumnOptions()}]},e.next=3,this.pickerController.create(t);case 3:e.sent.present().then((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"getColumnOptions",value:function(){var e=[];return this.subjects.forEach((function(t){e.push({text:t,value:t})})),e}},{key:"presentToast",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toast.create({message:"Votre message a bien \xe9t\xe9 envoy\xe9 !",duration:500,animated:!0,mode:"ios"});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"onSubmit",value:function(){this.presentToast(),this.router.navigate(["/tabs/tab1"])}}]),e}(),b.\u0275fac=function(e){return new(e||b)(a.Jb(i.M),a.Jb(s.g),a.Jb(i.S),a.Jb(r.a))},b.\u0275cmp=a.Db({type:b,selectors:[["app-contact-us"]],decls:18,vars:3,consts:[["mode","ios","translucent",""],["mode","ios","color","danger"],["slot","start"],["defaultHref","/"],["mode","ios"],[1,"sousHeader"],["src","../../../assets/niklas-rhose-FlmXvqlD-nI-unsplash-1@3x.png"],["expand","block",3,"click"],["class","subject",4,"ngIf"],[1,"loginForm",3,"formGroup","ngSubmit"],["type","text","formControlName","message","placeholder","Entrez plus d'informations ici..."],[2,"text-align","center","margin-top","2em"],["color","danger","type","submit",3,"disabled"],[1,"subject"],["color","primary"]],template:function(e,t){1&e&&(a.Ob(0,"ion-header",0),a.Ob(1,"ion-toolbar",1),a.Ob(2,"ion-buttons",2),a.Kb(3,"ion-back-button",3),a.Nb(),a.Ob(4,"ion-title"),a.lc(5,"Nous contacter"),a.Nb(),a.Nb(),a.Nb(),a.Ob(6,"ion-content",4),a.Ob(7,"div",5),a.Kb(8,"img",6),a.Ob(9,"ion-button",7),a.Wb("click",(function(){return t.showPicker()})),a.lc(10,"S\xe9lectionnez un sujet"),a.Nb(),a.Nb(),a.jc(11,u,4,1,"div",8),a.Ob(12,"form",9),a.Wb("ngSubmit",(function(){return t.onSubmit()})),a.Ob(13,"ion-item"),a.Kb(14,"ion-textarea",10),a.Nb(),a.Ob(15,"div",11),a.Ob(16,"ion-button",12),a.lc(17,"Envoyer"),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.zb(11),a.bc("ngIf",t.subjectSelected),a.zb(1),a.bc("formGroup",t.contactUsForm),a.zb(4),a.bc("disabled",!t.contactUsForm.valid))},directives:[i.r,i.H,i.g,i.c,i.d,i.G,i.n,i.f,o.i,r.n,r.j,r.e,i.v,i.F,i.R,r.i,r.c,i.E],styles:[".subject[_ngcontent-%COMP%]{text-align:center;padding-top:.5em}"]}),b)}],d=((f=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:f}),f.\u0275inj=a.Gb({factory:function(e){return new(e||f)},imports:[[s.j.forChild(m)],s.j]}),f),p=((l=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:l}),l.\u0275inj=a.Gb({factory:function(e){return new(e||l)},imports:[[o.b,r.f,i.I,r.l,d]]}),l)}}]);