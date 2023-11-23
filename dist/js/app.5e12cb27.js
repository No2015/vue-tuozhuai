(function(){"use strict";var t={9777:function(t,e,r){var a=r(9242),n=r(3396);function o(t,e,r,a,o,i){const s=(0,n.up)("HelloWorld");return(0,n.wg)(),(0,n.j4)(s,{msg:"Welcome to Your Vue.js App"})}var i=r(7139);const s={class:"hello"},d={class:"drag-list"},l={class:"test-box"};function u(t,e,r,a,o,u){const c=(0,n.up)("drag-item"),f=(0,n.up)("drag-box");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(f,{list:o.list,class:"box"},{default:(0,n.w5)((()=>[(0,n._)("div",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.paths,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{class:"path",key:e},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.list.filter((t=>t.path==e)),(t=>((0,n.wg)(),(0,n.j4)(c,{paths:o.paths,item:t,key:t.id},{default:(0,n.w5)((()=>[(0,n._)("div",l,(0,i.zw)(t.name),1)])),_:2},1032,["paths","item"])))),128))])))),128))])])),_:1},8,["list"])])}const c=["data-dragid"];function f(t,e,r,a,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(["drag-item",{move:r.item.moveState,drag:r.item.dragState}]),style:(0,i.j5)(s.style),draggable:"true",onDragstart:e[0]||(e[0]=(...t)=>s.onDrag&&s.onDrag(...t)),"data-dragid":r.item.id},[(0,n.WI)(t.$slots,"default",{},void 0,!0)],46,c)}var p={name:"DragItem",props:{item:{type:Object,default:()=>{}},paths:{type:Array,default:()=>[]}},data(){return{}},computed:{style({item:t,paths:e}){return{width:e[t.path]+"px",height:t.height+"px"}}},methods:{onDrag(t){this.item.move=!0,this.item.dragState=!0,t.dataTransfer.setData("dragid",t.target.dataset.dragid)}}},h=r(89);const g=(0,h.Z)(p,[["render",f],["__scopeId","data-v-7d328434"]]);var v=g;function m(t,e,r,a,o,i){return(0,n.wg)(),(0,n.iD)("div",{class:"drag-box",onDragover:e[0]||(e[0]=(...t)=>i.onDragOver&&i.onDragOver(...t)),onDrop:e[1]||(e[1]=(...t)=>i.onDrop&&i.onDrop(...t))},[(0,n.WI)(t.$slots,"default",{},void 0,!0)],32)}var D={name:"DragBox",props:{list:{type:Array,default:()=>[]}},data(){return{}},methods:{onDragOver(t){t.preventDefault();const e=t.composedPath().find((t=>t.dataset&&t.dataset.dragid));if(e){const t=e.dataset.dragid,r=this.list.findIndex((e=>e.id==t));this.list[r].moveState||(this.list.forEach((t=>{t.moveState=!1})),this.list[r].moveState=!0)}else this.list.forEach((t=>{t.moveState=!1}))},onDrop(t){const e=this.list.findIndex((t=>t.dragState)),r=this.list.findIndex((t=>t.moveState));if(this.list.forEach((t=>{t.moveState=!1,t.dragState=!1})),e>-1&&r>-1&&e!==r){const t=Math.min(e,r),a=Math.max(e,r),n=this.list[t],o=this.list[a],i=n.path;n.path=o.path,o.path=i,this.list[t]=o,this.list[a]=n,console.log(`>>> 交换${t}和${a}`)}}}};const w=(0,h.Z)(D,[["render",m],["__scopeId","data-v-2858521f"]]);var y=w,b={name:"HelloWorld",components:{DragItem:v,DragBox:y},data(){return{list:[],paths:[300,500,400,200]}},created(){this.init()},methods:{init(){this.list=new Array(25).fill().map(((t,e)=>{let r=e%4;return{id:e,name:"测试"+e,path:r,height:parseInt(100*Math.random()+30)}}))}}};const x=(0,h.Z)(b,[["render",u],["__scopeId","data-v-a5dc532e"]]);var O=x,_={name:"App",components:{HelloWorld:O}};const j=(0,h.Z)(_,[["render",o]]);var I=j;(0,a.ri)(I).mount("#app")}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,o){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],o=t[u][2];for(var s=!0,d=0;d<a.length;d++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[d])}))?a.splice(d--,1):(s=!1,o<i&&(i=o));if(s){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,i=a[0],s=a[1],d=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(d)var u=d(r)}for(e&&e(a);l<i.length;l++)o=i[l],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},a=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(9777)}));a=r.O(a)})();
//# sourceMappingURL=app.5e12cb27.js.map