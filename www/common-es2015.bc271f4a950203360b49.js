(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return s}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},o=()=>{i.selectionStart()},c=()=>{i.selectionChanged()},s=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=`${t*e/n-t}ms`,r=2*Math.PI*e/n;return{r:5,style:{top:`${9*Math.sin(r)}px`,left:`${9*Math.cos(r)}px`,"animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=`${t*i-t}ms`,o=2*Math.PI*i;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:`${9-9*e}px`,"animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})}}},DlXg:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("QX1p"),r=n("ItpF"),o=n("2c9M");const c=(t,e)=>{let n;const c=(t,i,r)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,i);o&&e(o)?o!==n&&(a(),s(o,r)):a()},s=(t,e)=>{n=t;const r=n;Object(i.n)(()=>r.classList.add("ion-activated")),e()},a=(t=!1)=>{if(!n)return;const e=n;Object(i.n)(()=>e.classList.remove("ion-activated")),t&&n.click(),n=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,o.a),onMove:t=>c(t.currentX,t.currentY,o.b),onEnd:()=>{a(!0),Object(o.e)()}})}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));const i=async(t,e,n,i,r)=>{if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>o.classList.add(t)),r&&Object.assign(o,r),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"Uz4/":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("fXoL"),r=n("jhN1"),o=n("cygB"),c=n("TEn/");let s=(()=>{class t{constructor(t,e){this.sanitizer=t,this.backendService=e}ngOnInit(){}getRecipeIngredients(t){return this.recipe.ingredients.substring(0,t)+"..."}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(r.b),i.Jb(o.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-recipes"]],inputs:{recipe:"recipe"},decls:20,vars:5,consts:[[1,"myCard"],[1,"testOverlay"],["color","light"],["name","flame-outline",2,"color","red","font-size","16px"],[3,"src"],["name","star",2,"color","yellow","font-size","16px"],["name","alarm-outline",2,"color","red","font-size","16px"]],template:function(t,e){1&t&&(i.Mb(0,"ion-card",0),i.Mb(1,"div",1),i.Mb(2,"ion-badge",2),i.Kb(3,"ion-icon",3),i.hc(4),i.Lb(),i.Lb(),i.Kb(5,"ion-img",4),i.Mb(6,"ion-card-header"),i.Mb(7,"ion-card-title"),i.hc(8),i.Lb(),i.Mb(9,"ion-card-subtitle"),i.Kb(10,"ion-icon",5),i.Kb(11,"ion-icon",5),i.Kb(12,"ion-icon",5),i.Kb(13,"ion-icon",5),i.Kb(14,"ion-icon",5),i.hc(15," \xa0 "),i.Kb(16,"ion-icon",6),i.hc(17),i.Lb(),i.Lb(),i.Mb(18,"ion-card-content"),i.hc(19),i.Lb(),i.Lb()),2&t&&(i.zb(4),i.jc(" ",e.recipe.calories," cal"),i.zb(1),i.Zb("src",e.recipe.imageURL),i.zb(3),i.ic(e.recipe.name),i.zb(9),i.jc(" ",e.recipe.preparationTime,"min "),i.zb(2),i.jc(" ",e.getRecipeIngredients(100)," "))},directives:[c.h,c.e,c.s,c.t,c.j,c.l,c.k,c.i],styles:["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{margin:10px 0}img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:10%}.myCard[_ngcontent-%COMP%]{position:relative}.myOverlay[_ngcontent-%COMP%]{height:60px;z-index:99;bottom:0;opacity:.5;background:#000;color:#fff}.myOverlay[_ngcontent-%COMP%], .testOverlay[_ngcontent-%COMP%]{width:100%;position:absolute}.testOverlay[_ngcontent-%COMP%]{text-align:right;padding-right:10px;padding-top:10px}"]}),t})()},VHP5:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("mrSG"),r=n("fXoL"),o=n("cygB");let c=(()=>{class t{constructor(t){this.backendService=t}loadRecipes(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.backendService.loadRecipes(),this.recipes=this.backendService.getRecipes(),console.log(this.recipes)}))}getRecipes(){return this.recipes}filterMacros(t,e,n){this.loadRecipes().then(i=>{this.recipes=this.recipes.filter(i=>Math.abs(i.proteins-t)<=10&&Math.abs(i.fats-e)<=10&&Math.abs(i.carbs-n)<=10),console.log(this.recipes)})}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(o.a))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s}));const i=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},c=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,i)}return!1}},j1ZV:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("3Pt+"),r=n("TEn/"),o=n("tyNb"),c=n("ofXK"),s=n("fXoL");let a=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[r.J,c.b,o.j,i.f]]}),t})()},qtYk:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),c=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.b,r.f,o.J]]}),t})()}}]);