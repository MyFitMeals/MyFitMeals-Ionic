(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"k+ul":function(t,e,n){"use strict";n.r(e),n.d(e,"Tab3PageModule",(function(){return v}));var i=n("j1ZV"),o=n("TEn/"),r=n("tyNb"),s=n("ofXK"),a=n("3Pt+"),c=n("fXoL"),b=n("U8oy"),u=n("lGQG");const l=function(){return["/mentions"]},h=function(){return["/cgv"]},g=function(){return["/politique"]},m=function(){return["/contact-us"]};let d=(()=>{class t{constructor(t,e){this.favoritesService=t,this.authService=e,this.loadInformations()}loadInformations(){console.log(this.authService.userInformations),this.firstName=this.authService.userInformations.user.firstName,this.lastName=this.authService.userInformations.user.lastName,this.age=this.authService.userInformations.user.age,this.weight=this.authService.userInformations.user.weight,this.height=this.authService.userInformations.user.height,this.calories=this.authService.userInformations.user.calories,this.proteins=this.authService.userInformations.user.proteins,this.carbs=this.authService.userInformations.user.carbs,this.fats=this.authService.userInformations.user.fats}getFirstName(){return this.firstName}getLastName(){return this.lastName}logout(){this.authService.logout()}getAge(){return this.age}getWeight(){return this.weight}getHeight(){return this.height}getCalories(){return this.calories}getProteins(){return this.proteins}getCarbs(){return this.carbs}getFats(){return this.fats}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(b.a),c.Jb(u.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-tab3"]],decls:50,vars:17,consts:[["mode","ios","translucent",""],["mode","ios","color","danger"],[1,"mainText"],["src","../../assets/avatar.png"],["id","aboutMe"],[1,"aboutMeElement",2,"width","100%","text-align","center"],["id","aboutMeAttributes"],[1,"aboutMeElement"],[1,"macrosDescription"],["name","calendar",2,"color","#FF4757"],["name","person-outline",2,"color","#FF4757"],["name","speedometer",2,"color","#FF4757"],["mode","ios"],[3,"routerLink"],[2,"text-align","center","margin-top","1em"],["mode","ios","color","danger",3,"click"]],template:function(t,e){1&t&&(c.Ob(0,"ion-header",0),c.Ob(1,"ion-toolbar",1),c.Ob(2,"ion-title"),c.lc(3,"Mon profil"),c.Nb(),c.Nb(),c.Nb(),c.Ob(4,"ion-content"),c.Ob(5,"div",2),c.Kb(6,"img",3),c.Ob(7,"h3"),c.lc(8),c.Nb(),c.Nb(),c.Ob(9,"div",4),c.Ob(10,"h4"),c.lc(11,"A propos de moi"),c.Nb(),c.Ob(12,"div",5),c.Ob(13,"h5"),c.lc(14),c.Nb(),c.Nb(),c.Ob(15,"div",6),c.Ob(16,"div",7),c.Ob(17,"span",8),c.lc(18,"P :"),c.Nb(),c.lc(19),c.Nb(),c.Ob(20,"div",7),c.Ob(21,"span",8),c.lc(22,"G :"),c.Nb(),c.lc(23),c.Nb(),c.Ob(24,"div",7),c.Ob(25,"span",8),c.lc(26,"L :"),c.Nb(),c.lc(27),c.Nb(),c.Nb(),c.Ob(28,"div",6),c.Ob(29,"div",7),c.Kb(30,"ion-icon",9),c.lc(31),c.Nb(),c.Ob(32,"div",7),c.Kb(33,"ion-icon",10),c.lc(34),c.Nb(),c.Ob(35,"div",7),c.Kb(36,"ion-icon",11),c.lc(37),c.Nb(),c.Nb(),c.Nb(),c.Ob(38,"ion-list",12),c.Ob(39,"ion-item",13),c.lc(40," Mentions L\xe9gales "),c.Nb(),c.Ob(41,"ion-item",13),c.lc(42," Conditions G\xe9n\xe9rales "),c.Nb(),c.Ob(43,"ion-item",13),c.lc(44," Politique de confidentialit\xe9 "),c.Nb(),c.Ob(45,"ion-item",13),c.lc(46," Nous contacter "),c.Nb(),c.Nb(),c.Ob(47,"div",14),c.Ob(48,"ion-button",15),c.Wb("click",(function(){return e.logout()})),c.lc(49,"Me d\xe9connecter"),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.zb(8),c.oc("Bonjour, ",e.getFirstName()," ",e.getLastName()," !"),c.zb(6),c.nc("Calories journali\xe8res : ",e.getCalories(),"cals"),c.zb(5),c.nc(" ",e.getProteins(),""),c.zb(4),c.nc(" ",e.getCarbs(),""),c.zb(4),c.nc(" ",e.getFats(),""),c.zb(4),c.nc(" ",e.getAge()," ans"),c.zb(3),c.nc(" ",e.getHeight()," cm"),c.zb(3),c.nc(" ",e.getWeight()," kg"),c.zb(2),c.bc("routerLink",c.cc(13,l)),c.zb(2),c.bc("routerLink",c.cc(14,h)),c.zb(2),c.bc("routerLink",c.cc(15,g)),c.zb(2),c.bc("routerLink",c.cc(16,m)))},directives:[o.r,o.R,o.P,o.n,o.s,o.x,o.v,o.ab,r.h,o.g],styles:["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{margin:10px 0}img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:10%}.myCard[_ngcontent-%COMP%]{position:relative}.myOverlay[_ngcontent-%COMP%]{height:60px;z-index:99;bottom:0;opacity:.5;background:#000;color:#fff}.myOverlay[_ngcontent-%COMP%], .testOverlay[_ngcontent-%COMP%]{width:100%;position:absolute}.testOverlay[_ngcontent-%COMP%]{text-align:right;padding-right:10px;padding-top:10px}.mainText[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%]{width:40%;height:40%}#aboutMeAttributes[_ngcontent-%COMP%]{display:flex;place-content:center;width:100%;text-align:center;margin-bottom:10px}#aboutMe[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:10px}.aboutMeElement[_ngcontent-%COMP%]{width:33.33%}.macrosDescription[_ngcontent-%COMP%]{color:#ff4757}"]}),t})();var p=n("qtYk"),f=n("s0Bq");const O=[{path:"",component:d},{path:":recipeId",component:f.a}];let N=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[r.j.forChild(O)],r.j]}),t})(),v=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[o.S,s.b,a.f,p.a,r.j.forChild([{path:"",component:d}]),N,i.a]]}),t})()}}]);