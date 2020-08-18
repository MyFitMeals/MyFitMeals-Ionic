function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{fhSy:function(e,n,t){"use strict";t.r(n),t.d(n,"RegisterPageModule",(function(){return d}));var i,o,r,a=t("ofXK"),s=t("3Pt+"),l=t("TEn/"),b=t("tyNb"),c=t("fXoL"),u=t("lGQG"),m=function(){return["/register"]},f=[{path:"",component:(i=function(){function e(n,t){_classCallCheck(this,e),this.formBuilder=n,this.authService=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.credentialsForm=this.formBuilder.group({email:["",[s.m.required,s.m.email]],password:["",[s.m.required,s.m.minLength(6)]],firstName:["",[s.m.required]],lastName:["",[s.m.required]]})}},{key:"onSubmit",value:function(){var e=this;this.authService.register(this.credentialsForm.value).subscribe((function(n){e.authService.login(e.credentialsForm.value).subscribe()}))}}]),e}(),i.\u0275fac=function(e){return new(e||i)(c.Jb(s.a),c.Jb(u.a))},i.\u0275cmp=c.Db({type:i,selectors:[["app-register"]],decls:29,vars:4,consts:[["color","danger"],["slot","start"],["padding",""],["src","../../../assets/niklas-rhose-FlmXvqlD-nI-unsplash-1@3x.png"],[1,"loginForm",3,"formGroup","ngSubmit"],["position","floating"],["type","email","formControlName","email"],["type","password","formControlName","password"],["type","text","formControlName","firstName"],["type","text","formControlName","lastName"],["expand","full","color","danger","type","submit",3,"disabled"],["type","button",3,"routerLink"]],template:function(e,n){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar",0),c.Mb(2,"ion-buttons",1),c.Kb(3,"ion-back-button"),c.Lb(),c.Mb(4,"ion-title"),c.hc(5,"Inscription"),c.Lb(),c.Lb(),c.Lb(),c.Mb(6,"ion-content",2),c.Kb(7,"img",3),c.Mb(8,"form",4),c.Ub("ngSubmit",(function(){return n.onSubmit()})),c.Mb(9,"ion-item"),c.Mb(10,"ion-label",5),c.hc(11,"Email"),c.Lb(),c.Kb(12,"ion-input",6),c.Lb(),c.Mb(13,"ion-item"),c.Mb(14,"ion-label",5),c.hc(15,"Mot de passe"),c.Lb(),c.Kb(16,"ion-input",7),c.Lb(),c.Mb(17,"ion-item"),c.Mb(18,"ion-label",5),c.hc(19,"Pr\xe9nom"),c.Lb(),c.Kb(20,"ion-input",8),c.Lb(),c.Mb(21,"ion-item"),c.Mb(22,"ion-label",5),c.hc(23,"Nom"),c.Lb(),c.Kb(24,"ion-input",9),c.Lb(),c.Mb(25,"ion-button",10),c.hc(26,"Cr\xe9er mon compte"),c.Lb(),c.Mb(27,"a",11),c.hc(28,"Me connecter"),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(8),c.Zb("formGroup",n.credentialsForm),c.zb(17),c.Zb("disabled",!n.credentialsForm.valid),c.zb(2),c.Zb("routerLink",c.ac(3,m)))},directives:[l.r,l.I,l.g,l.c,l.d,l.H,l.n,s.n,s.j,s.e,l.v,l.w,l.u,l.R,s.i,s.c,l.f,b.i,l.P],styles:[".login[_ngcontent-%COMP%]{background-image:url(niklas-rhose-FlmXvqlD-nI-unsplash-1@3x.3ab973f1bc0f14166885.png);background-size:cover}.login[_ngcontent-%COMP%], .loginForm[_ngcontent-%COMP%]{text-align:center}"]}),i)}],p=((r=function e(){_classCallCheck(this,e)}).\u0275mod=c.Hb({type:r}),r.\u0275inj=c.Gb({factory:function(e){return new(e||r)},imports:[[b.j.forChild(f)],b.j]}),r),d=((o=function e(){_classCallCheck(this,e)}).\u0275mod=c.Hb({type:o}),o.\u0275inj=c.Gb({factory:function(e){return new(e||o)},imports:[[a.b,s.f,l.J,s.l,p]]}),o)}}]);