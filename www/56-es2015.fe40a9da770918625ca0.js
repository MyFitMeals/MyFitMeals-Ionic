(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{wHD8:function(i,t,o){"use strict";o.r(t),o.d(t,"ion_img",(function(){return r}));var e=o("QX1p"),s=o("u799");class r{constructor(i){Object(e.l)(this,i),this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()},this.ionImgWillLoad=Object(e.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(e.e)(this,"ionImgDidLoad",7),this.ionError=Object(e.e)(this,"ionError",7)}srcChanged(){this.addIO()}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(i=>{i[0].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){return Object(e.j)(e.b,{class:Object(s.b)(this)},Object(e.j)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}get el(){return Object(e.g)(this)}static get watchers(){return{src:["srcChanged"]}}}r.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);