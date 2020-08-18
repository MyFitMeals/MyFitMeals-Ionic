function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{tmrb:function(e,t,n){"use strict";n.r(t),n.d(t,"Tab1PageModule",(function(){return R}));var r,i,o,s=n("j1ZV"),a=n("TEn/"),c=n("ofXK"),u=n("3Pt+"),l=n("qtYk"),b=n("s0Bq"),p=n("tyNb"),f=n("mrSG"),h=n("fXoL"),d=n("cygB"),v=n("VHP5"),m=((o=function(){function e(t,n){_classCallCheck(this,e),this.backendService=t,this.recipesLoader=n}return _createClass(e,[{key:"getProteins",value:function(){return this.proteins}},{key:"getCarbs",value:function(){return this.carbs}},{key:"getFats",value:function(){return this.fats}},{key:"applyMacros",value:function(e,t,n){this.proteins=e,this.fats=t,this.carbs=n,this.recipesLoader.filterMacros(this.proteins,this.fats,this.carbs)}},{key:"resetMacros",value:function(){this.proteins=0,this.fats=0,this.carbs=0,this.recipesLoader.loadRecipes()}}]),e}()).\u0275fac=function(e){return new(e||o)(h.Qb(d.a),h.Qb(v.a))},o.\u0275prov=h.Fb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),y=((i=function(){function e(t,n){_classCallCheck(this,e),this.macroService=t,this.popOverController=n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"setQuantity",value:function(e,t){"proteins"===e&&(this.proteins=t),"carbs"===e&&(this.carbs=t),"fats"===e&&(this.fats=t),console.log(e),console.log(t)}},{key:"onSubmit",value:function(){this.macroService.applyMacros(this.proteins,this.fats,this.carbs),this.dismissPopover()}},{key:"dismissPopover",value:function(){var e=this;this.popOverController&&this.popOverController.dismiss().then((function(){e.popOverController=null}))}},{key:"resetMacros",value:function(){this.macroService.resetMacros()}}]),e}()).\u0275fac=function(e){return new(e||i)(h.Jb(m),h.Jb(a.O))},i.\u0275cmp=h.Db({type:i,selectors:[["app-macros"]],decls:22,vars:0,consts:[["position","floating"],["type","number","name","proteins",3,"input"],["type","number","name","carbs",3,"input"],["type","number","name","fats",3,"input"],["type","submit",2,"font-size","20px","margin-left","10px",3,"click"],["type","submit","color","danger",3,"click"]],template:function(e,t){1&e&&(h.Mb(0,"ion-row"),h.Mb(1,"ion-col"),h.Mb(2,"ion-label",0),h.hc(3,"Prot\xe9ines"),h.Lb(),h.Mb(4,"ion-input",1),h.Ub("input",(function(e){return t.setQuantity("proteins",e.target.value)})),h.Lb(),h.Lb(),h.Lb(),h.Mb(5,"ion-row"),h.Mb(6,"ion-col"),h.Mb(7,"ion-label",0),h.hc(8,"Glucides"),h.Lb(),h.Mb(9,"ion-input",2),h.Ub("input",(function(e){return t.setQuantity("carbs",e.target.value)})),h.Lb(),h.Lb(),h.Lb(),h.Mb(10,"ion-row"),h.Mb(11,"ion-col"),h.Mb(12,"ion-label",0),h.hc(13,"Lipides"),h.Lb(),h.Mb(14,"ion-input",3),h.Ub("input",(function(e){return t.setQuantity("fats",e.target.value)})),h.Lb(),h.Lb(),h.Lb(),h.Mb(15,"ion-row"),h.Mb(16,"ion-col"),h.Mb(17,"ion-button",4),h.Ub("click",(function(){return t.onSubmit()})),h.hc(18,"Valider"),h.Lb(),h.Lb(),h.Mb(19,"ion-col"),h.Mb(20,"ion-button",5),h.Ub("click",(function(){return t.resetMacros()})),h.hc(21,"Reset"),h.Lb(),h.Lb(),h.Lb())},directives:[a.z,a.m,a.w,a.u,a.M,a.f],styles:[""]}),i),g=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=h.Db({type:r,selectors:[["app-header"]],decls:4,vars:0,consts:[["translucent",""],["color","danger"]],template:function(e,t){1&e&&(h.Mb(0,"ion-header",0),h.Mb(1,"ion-toolbar",1),h.Mb(2,"ion-title"),h.hc(3,"MyFitMeals"),h.Lb(),h.Lb(),h.Lb())},directives:[a.r,a.I,a.H],styles:[""]}),r),M=n("Uz4/"),k=function(e){return["/recipes",e]};function C(e,t){if(1&e&&(h.Mb(0,"ion-item",7),h.Kb(1,"app-recipes",8),h.Lb()),2&e){var n=t.$implicit;h.Zb("id",n.id),h.zb(1),h.Zb("recipe",n)("routerLink",h.bc(3,k,n._id))}}var L,w,O,_=function(){return["/add-recipe"]},P=[{path:"",component:(L=function(){function e(t,n,r,i){_classCallCheck(this,e),this.backendService=t,this.loadingController=n,this.popoverController=r,this.recipesLoder=i}return _createClass(e,[{key:"loadRecipes",value:function(){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.recipesLoder.loadRecipes();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"getRecipes",value:function(){return this.recipesLoder.getRecipes()}},{key:"presentLoading",value:function(){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({cssClass:"my-custom-class",message:"Veuillez patienter.."});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"presentPopover",value:function(e){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popoverController.create({component:y,cssClass:"my-custom-class",event:e,translucent:!0});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}}]),e}(),L.\u0275fac=function(e){return new(e||L)(h.Jb(d.a),h.Jb(a.L),h.Jb(a.O),h.Jb(v.a))},L.\u0275cmp=h.Db({type:L,selectors:[["app-tab1"]],decls:10,vars:3,consts:[["class","eventItem","lines","none",3,"id",4,"ngFor","ngForOf"],["horizontal","end","vertical","bottom","slot","fixed"],["color","danger",3,"routerLink"],["name","add"],["horizontal","start","vertical","bottom","slot","fixed"],["color","primary",3,"click"],["name","pizza-outline"],["lines","none",1,"eventItem",3,"id"],[3,"recipe","routerLink"]],template:function(e,t){1&e&&(h.Kb(0,"app-header"),h.Mb(1,"ion-content"),h.Mb(2,"ion-list"),h.gc(3,C,2,5,"ion-item",0),h.Lb(),h.Mb(4,"ion-fab",1),h.Mb(5,"ion-fab-button",2),h.Kb(6,"ion-icon",3),h.Lb(),h.Lb(),h.Mb(7,"ion-fab",4),h.Mb(8,"ion-fab-button",5),h.Ub("click",(function(e){return t.presentPopover(e)})),h.Kb(9,"ion-icon",6),h.Lb(),h.Lb(),h.Lb()),2&e&&(h.zb(3),h.Zb("ngForOf",t.getRecipes()),h.zb(2),h.Zb("routerLink",h.ac(2,_)))},directives:[g,a.n,a.x,c.h,a.o,a.p,a.P,p.h,a.s,a.v,M.a],styles:["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{margin:10px 0}img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:10%}.myCard[_ngcontent-%COMP%]{position:relative}.myOverlay[_ngcontent-%COMP%]{height:60px;z-index:99;bottom:0;opacity:.5;background:#000;color:#fff}.myOverlay[_ngcontent-%COMP%], .testOverlay[_ngcontent-%COMP%]{width:100%;position:absolute}.testOverlay[_ngcontent-%COMP%]{text-align:right;padding-right:10px;padding-top:10px}"]}),L)},{path:":recipeId",component:b.a}],x=((O=function e(){_classCallCheck(this,e)}).\u0275mod=h.Hb({type:O}),O.\u0275inj=h.Gb({factory:function(e){return new(e||O)},imports:[[p.j.forChild(P)],p.j]}),O),R=((w=function e(){_classCallCheck(this,e)}).\u0275mod=h.Hb({type:w}),w.\u0275inj=h.Gb({factory:function(e){return new(e||w)},imports:[[a.J,c.b,u.f,l.a,s.a,x]]}),w)}}]);