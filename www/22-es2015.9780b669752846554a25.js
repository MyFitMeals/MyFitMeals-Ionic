(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{TUkU:function(e,t,i){"use strict";i.r(t),i.d(t,"Tab2PageModule",(function(){return w}));var r=i("j1ZV"),s=i("TEn/"),n=i("ofXK"),o=i("3Pt+"),a=i("qtYk"),c=i("tyNb"),l=i("mrSG"),p=i("fXoL"),b=i("tk/3"),u=i("U8oy"),d=i("lGQG"),m=i("Uz4/");const g=function(e){return["/recipes",e]};function v(e,t){if(1&e&&(p.Ob(0,"ion-item",7),p.Kb(1,"app-recipes",8),p.Nb()),2&e){const e=t.$implicit;p.bc("id",e.id),p.zb(1),p.bc("recipe",e)("routerLink",p.dc(3,g,e._id))}}function f(e,t){1&e&&(p.Ob(0,"ion-text"),p.lc(1," Vous n'avez pas ajout\xe9 de favoris. "),p.Nb())}const h=[{path:"",component:(()=>{class e{constructor(e,t,i,r){this.http=e,this.favoritesService=t,this.authService=i,this.loadingController=r,this.registerForm=new o.d({name:new o.b("",o.m.required),calories:new o.b("",o.m.required),proteins:new o.b("",o.m.required),fats:new o.b("",o.m.required),carbs:new o.b("",o.m.required),instructions:new o.b("",o.m.required),preparationTime:new o.b("",o.m.required),ingredients:new o.b("",o.m.required),tips:new o.b("",o.m.required)})}selectImage(e){e.target.files.length>0&&(this.images=e.target.files[0])}loadRecipes(){return Object(l.a)(this,void 0,void 0,(function*(){yield this.favoritesService.loadFavorites()}))}presentLoading(){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.loadingController.create({cssClass:"my-custom-class",message:"Veuillez patienter.."});return yield e.present(),e}))}onSubmit(){const e=new FormData;e.append("file",this.images),e.append("name",this.registerForm.value.name),e.append("calories",this.registerForm.value.calories),e.append("proteins",this.registerForm.value.proteins),e.append("fats",this.registerForm.value.fats),e.append("carbs",this.registerForm.value.carbs),e.append("instructions",this.registerForm.value.instructions),e.append("preparationTime",this.registerForm.value.preparationTime),e.append("ingredients",this.registerForm.value.ingredients),e.append("tips",this.registerForm.value.tips),this.http.post("https://myfitmeals.herokuapp.com/recipes/",e).subscribe(e=>console.log(e),e=>console.log(e))}getFavorites(){return console.log("is Admin ? : "),console.log(this.authService.isAdmin()),this.favoritesService.getFavorites()}noFavorites(){return 0==this.favoritesService.getFavorites().length}getRecipes(){this.authService.getAllRecipes().subscribe(e=>{console.log(e),console.log("aftre"),console.log(e.recipes),console.log(this.favoritesService.getFavorites())})}}return e.\u0275fac=function(t){return new(t||e)(p.Jb(b.b),p.Jb(u.a),p.Jb(d.a),p.Jb(s.K))},e.\u0275cmp=p.Db({type:e,selectors:[["app-tab2"]],decls:13,vars:3,consts:[["mode","ios","translucent",""],["mode","ios","color","danger"],[3,"fullscreen"],["collapse","condense"],["size","large"],["class","eventItem","lines","none",3,"id",4,"ngFor","ngForOf"],[4,"ngIf"],["lines","none",1,"eventItem",3,"id"],[3,"recipe","routerLink"]],template:function(e,t){1&e&&(p.Ob(0,"ion-header",0),p.Ob(1,"ion-toolbar",1),p.Ob(2,"ion-title"),p.lc(3,"Mes favoris"),p.Nb(),p.Nb(),p.Nb(),p.Ob(4,"ion-content",2),p.Ob(5,"ion-header",3),p.Ob(6,"ion-toolbar"),p.Ob(7,"ion-title",4),p.lc(8,"Page de profil - A VENIR !"),p.Nb(),p.Nb(),p.Nb(),p.Ob(9,"ion-list"),p.jc(10,v,2,5,"ion-item",5),p.Ob(11,"ion-item"),p.jc(12,f,2,0,"ion-text",6),p.Nb(),p.Nb(),p.Nb()),2&e&&(p.zb(4),p.bc("fullscreen",!0),p.zb(6),p.bc("ngForOf",t.getFavorites()),p.zb(2),p.bc("ngIf",t.noFavorites()))},directives:[s.r,s.H,s.G,s.n,s.x,n.h,s.v,n.i,m.a,s.P,c.h,s.E],styles:[""]}),e})()}];let F=(()=>{class e{}return e.\u0275mod=p.Hb({type:e}),e.\u0275inj=p.Gb({factory:function(t){return new(t||e)},imports:[[c.j.forChild(h)],c.j]}),e})(),w=(()=>{class e{}return e.\u0275mod=p.Hb({type:e}),e.\u0275inj=p.Gb({factory:function(t){return new(t||e)},imports:[[s.I,n.b,o.f,a.a,F,o.l,o.f,r.a]]}),e})()}}]);