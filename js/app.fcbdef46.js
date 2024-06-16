(function(){"use strict";var o={3367:function(o,t,e){var n=e(5130),d=e(6768);const r={class:"max-w-lg mx-auto mt-8 p-2"},s=(0,d.Lk)("h1",{class:"text-3xl font-semibold mb-4"},"Todo List",-1);function i(o,t,e,n,i,u){const c=(0,d.g2)("AddTodo"),a=(0,d.g2)("TodoList");return(0,d.uX)(),(0,d.CE)("div",r,[s,(0,d.bF)(c,{onCreate:u.createTodo},null,8,["onCreate"]),(0,d.bF)(a,{todos:i.todos,onDelete:u.deleteTodo,onUpdate:u.updateTodo},null,8,["todos","onDelete","onUpdate"])])}e(4114);var u=e(8355);function c(o,t,e,n,r,s){const i=(0,d.g2)("TodoItem");return(0,d.uX)(),(0,d.CE)("div",null,[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(e.todos,(o=>((0,d.uX)(),(0,d.Wv)(i,{key:o.id,todo:o,onDelete:s.deleteTodo,onUpdate:s.updateTodo},null,8,["todo","onDelete","onUpdate"])))),128))])}var a=e(4232);const l={class:"flex items-center justify-between border-b border-gray-200 py-4"},p={class:"flex items-center"};function h(o,t,e,r,s,i){return(0,d.uX)(),(0,d.CE)("div",l,[(0,d.Lk)("div",p,[(0,d.bo)((0,d.Lk)("input",{type:"checkbox",class:"form-checkbox h-5 w-5 text-indigo-600","onUpdate:modelValue":t[0]||(t[0]=o=>s.isChecked=o),onChange:t[1]||(t[1]=(...o)=>i.updateTodo&&i.updateTodo(...o))},null,544),[[n.lH,s.isChecked]]),(0,d.Lk)("p",{class:(0,a.C4)(["ml-2",{"line-through":s.isChecked}])},(0,a.v_)(e.todo.todo),3)]),(0,d.Lk)("button",{onClick:t[2]||(t[2]=(...o)=>i.deleteTodo&&i.deleteTodo(...o)),class:"text-red-600 hover:text-red-800"},"Delete")])}var f={props:{todo:Object},data(){return{isChecked:this.todo.completed}},methods:{deleteTodo(){this.$emit("delete",this.todo.id)},updateTodo(){this.$emit("update",this.todo.id)}}},m=e(1241);const v=(0,m.A)(f,[["render",h]]);var T=v,b={components:{TodoItem:T},props:{todos:Array},methods:{deleteTodo(o){this.$emit("delete",o)},updateTodo(o){this.$emit("update",o)}}};const g=(0,m.A)(b,[["render",c]]);var y=g;function k(o,t,e,r,s,i){return(0,d.uX)(),(0,d.CE)("div",null,[(0,d.bo)((0,d.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>s.newTodo=o),placeholder:"Enter a new todo"},null,512),[[n.Jo,s.newTodo]]),(0,d.Lk)("button",{onClick:t[1]||(t[1]=(...o)=>i.addTodo&&i.addTodo(...o)),class:"px-4 py-2 bg-blue-500 text-white rounded-md mt-2"}," Add Todo ")])}var w={data(){return{newTodo:""}},methods:{addTodo(){""!==this.newTodo.trim()&&(this.$emit("create",this.newTodo),this.newTodo="")}}};const x=(0,m.A)(w,[["render",k]]);var C=x,j={components:{TodoList:y,AddTodo:C},data(){return{todos:[]}},mounted(){u.A.get("https://dummyjson.com/todos").then((o=>{this.todos=o.data.todos})).catch((o=>{console.error("Error fetching todos:",o)}))},watch:{todos:{handler(){this.todos.sort(((o,t)=>t.id-o.id))},deep:!0}},methods:{updateTodo(o){const t=this.todos.find((t=>t.id===o));t&&u.A.put(`https://dummyjson.com/todos/${o}`,{completed:!t.completed}).then((()=>{t.completed=!t.completed})).catch((o=>{console.error("Error updating todo:",o)}))},deleteTodo(o){u.A.delete(`https://dummyjson.com/todos/${o}`).then((()=>{this.todos=this.todos.filter((t=>t.id!==o))})).catch((o=>{console.error("Error deleting todo:",o)}))},createTodo(o){u.A.post("https://dummyjson.com/todos/add",{todo:o,completed:!1,userId:5}).then((o=>{const t=o.data;this.todos.push(t)})).catch((o=>{console.error("Error creating todo:",o)}))}}};const O=(0,m.A)(j,[["render",i]]);var A=O;(0,n.Ef)(A).mount("#app")}},t={};function e(n){var d=t[n];if(void 0!==d)return d.exports;var r=t[n]={exports:{}};return o[n].call(r.exports,r,r.exports,e),r.exports}e.m=o,function(){var o=[];e.O=function(t,n,d,r){if(!n){var s=1/0;for(a=0;a<o.length;a++){n=o[a][0],d=o[a][1],r=o[a][2];for(var i=!0,u=0;u<n.length;u++)(!1&r||s>=r)&&Object.keys(e.O).every((function(o){return e.O[o](n[u])}))?n.splice(u--,1):(i=!1,r<s&&(s=r));if(i){o.splice(a--,1);var c=d();void 0!==c&&(t=c)}}return t}r=r||0;for(var a=o.length;a>0&&o[a-1][2]>r;a--)o[a]=o[a-1];o[a]=[n,d,r]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){e.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){var o={524:0};e.O.j=function(t){return 0===o[t]};var t=function(t,n){var d,r,s=n[0],i=n[1],u=n[2],c=0;if(s.some((function(t){return 0!==o[t]}))){for(d in i)e.o(i,d)&&(e.m[d]=i[d]);if(u)var a=u(e)}for(t&&t(n);c<s.length;c++)r=s[c],e.o(o,r)&&o[r]&&o[r][0](),o[r]=0;return e.O(a)},n=self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(3367)}));n=e.O(n)})();
//# sourceMappingURL=app.fcbdef46.js.map