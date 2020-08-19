function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{fhSy:function(e,n,t){"use strict";t.r(n),t.d(n,"RegisterPageModule",(function(){return d}));var o,i,r,a=t("ofXK"),s=t("3Pt+"),l=t("TEn/"),c=t("tyNb"),b=t("fXoL"),u=t("lGQG"),m=function(){return["/register"]},f=[{path:"",component:(o=function(){function e(n,t){_classCallCheck(this,e),this.formBuilder=n,this.authService=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.credentialsForm=this.formBuilder.group({email:["",[s.m.required,s.m.email]],password:["",[s.m.required,s.m.minLength(6)]],firstName:["",[s.m.required]],lastName:["",[s.m.required]]})}},{key:"onSubmit",value:function(){var e=this;this.authService.register(this.credentialsForm.value).subscribe((function(n){e.authService.login(e.credentialsForm.value).subscribe()}))}}]),e}(),o.\u0275fac=function(e){return new(e||o)(b.Jb(s.a),b.Jb(u.a))},o.\u0275cmp=b.Db({type:o,selectors:[["app-register"]],decls:29,vars:4,consts:[["mode","ios"],["mode","ios","color","danger"],["slot","start"],["padding",""],["src","../../../assets/niklas-rhose-FlmXvqlD-nI-unsplash-1@3x.png"],[1,"loginForm",3,"formGroup","ngSubmit"],["position","floating"],["type","email","formControlName","email"],["type","password","formControlName","password"],["type","text","formControlName","firstName"],["type","text","formControlName","lastName"],["mode","ios","expand","full","color","danger","type","submit",3,"disabled"],["mode","ios","type","button",3,"routerLink"]],template:function(e,n){1&e&&(b.Ob(0,"ion-header",0),b.Ob(1,"ion-toolbar",1),b.Ob(2,"ion-buttons",2),b.Kb(3,"ion-back-button"),b.Nb(),b.Ob(4,"ion-title"),b.lc(5,"Inscription"),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content",3),b.Kb(7,"img",4),b.Ob(8,"form",5),b.Wb("ngSubmit",(function(){return n.onSubmit()})),b.Ob(9,"ion-item",0),b.Ob(10,"ion-label",6),b.lc(11,"Email"),b.Nb(),b.Kb(12,"ion-input",7),b.Nb(),b.Ob(13,"ion-item",0),b.Ob(14,"ion-label",6),b.lc(15,"Mot de passe"),b.Nb(),b.Kb(16,"ion-input",8),b.Nb(),b.Ob(17,"ion-item",0),b.Ob(18,"ion-label",6),b.lc(19,"Pr\xe9nom"),b.Nb(),b.Kb(20,"ion-input",9),b.Nb(),b.Ob(21,"ion-item",0),b.Ob(22,"ion-label",6),b.lc(23,"Nom"),b.Nb(),b.Kb(24,"ion-input",10),b.Nb(),b.Ob(25,"ion-button",11),b.lc(26,"Cr\xe9er mon compte"),b.Nb(),b.Ob(27,"a",12),b.lc(28,"Me connecter"),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.zb(8),b.bc("formGroup",n.credentialsForm),b.zb(17),b.bc("disabled",!n.credentialsForm.valid),b.zb(2),b.bc("routerLink",b.cc(3,m)))},directives:[l.r,l.H,l.g,l.c,l.d,l.G,l.n,s.n,s.j,s.e,l.v,l.w,l.u,l.R,s.i,s.c,l.f,c.i,l.P],styles:[".login[_ngcontent-%COMP%]{background-image:url(niklas-rhose-FlmXvqlD-nI-unsplash-1@3x.3ab973f1bc0f14166885.png);background-size:cover}.login[_ngcontent-%COMP%], .loginForm[_ngcontent-%COMP%]{text-align:center}"]}),o)}],p=((r=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:r}),r.\u0275inj=b.Gb({factory:function(e){return new(e||r)},imports:[[c.j.forChild(f)],c.j]}),r),d=((i=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(e){return new(e||i)},imports:[[a.b,s.f,l.I,s.l,p]]}),i)}}]);