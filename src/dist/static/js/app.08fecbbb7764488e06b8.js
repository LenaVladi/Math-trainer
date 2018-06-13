webpackJsonp([0],{"1mY0":function(t,s){},aczW:function(t,s){},lIqX:function(t,s){},lVK7:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"training"},[e("h1",[t._v("Math training. Level "+t._s(t.level+1))]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",style:t.progressStyles})]),t._v(" "),e("div",{staticClass:"box"},[e("transition",{attrs:{name:"flip",mode:"out-in"}},["start"==t.state?e("start-screen",{on:{onStart:t.onStart}}):"question"==t.state?e("question",{attrs:{settings:t.levels[t.level]},on:{succsess:t.onQuestionSuccsess,error:t.onQuestionError}}):"message"==t.state?e("message",{attrs:{type:t.message.type,text:t.message.text},on:{onNext:t.onNext}}):"result"==t.state?e("result-screen",{attrs:{stats:t.stats},on:{repeat:t.onStart,nextLevel:t.onNextLevel}}):e("div",[t._v("Unknown state")])],1)],1)])},staticRenderFns:[]};var a=e("VU/8")({name:"app",data:function(){return{state:"start",message:{type:"",text:""},stats:{success:0,error:0},questionMax:3,level:0,levels:[{from:10,to:40,range:5,variants:2},{from:100,to:200,range:20,variants:4},{from:500,to:900,range:40,variants:6}]}},computed:{questDone:function(){return this.stats.success+this.stats.error},progressStyles:function(){return{width:this.questDone/this.questionMax*100+"%"}}},methods:{onStart:function(){this.state="question",this.stats.success=0,this.stats.error=0},onQuestionSuccsess:function(){this.state="message",this.message.text="Good Job!",this.message.type="success",this.stats.success++},onQuestionError:function(t){this.state="message",this.message.text=t,this.message.type="danger",this.stats.error++},onNext:function(){this.questDone<this.questionMax?this.state="question":this.state="result"},onNextLevel:function(){this.level++,this.onStart()}}},r,!1,function(t){e("lIqX")},"data-v-68539811",null).exports,o=e("/ocq");n.a.use(o.a);var i=new o.a({routes:[{path:"/src/App.vue",name:"App",component:a}]}),c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"alert alert-secondary"},[e("h3",[t._v("Are you ready?")]),t._v(" "),e("button",{staticClass:"btn btn-succes",on:{click:function(s){t.$emit("onStart")}}},[t._v("\n    Start\n  ")])])},staticRenderFns:[]};var u=e("VU/8")({data:function(){return{state:"start"}}},c,!1,function(t){e("1mY0")},null,null).exports,l={props:["settings"],data:function(){return{x:v(this.settings.from,this.settings.to),y:v(this.settings.from,this.settings.to)}},computed:{good:function(){return this.x+this.y},answers:function(){for(var t=[this.good];t.length<this.settings.variants;){var s=v(this.good-this.settings.range,this.good+this.settings.range);-1===t.indexOf(s)&&t.push(s)}return t.sort(function(){return Math.random()>.5})}},methods:{onAnswer:function(t){t==this.good?this.$emit("succsess"):this.$emit("error",this.x+" + "+this.y+" = "+this.good+"!")}}};function v(t,s){var e=t-s;return Math.floor(Math.random()*(e+1))+s}var h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"alert"},[e("h3",[t._v(t._s(t.x)+" + "+t._s(t.y)+" = ?")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"buttons"},t._l(t.answers,function(s){return e("button",{staticClass:"btn btn-success",on:{click:function(e){t.onAnswer(s)}}},[t._v("\n      "+t._s(s)+"\n    ")])}))])},staticRenderFns:[]};var p=e("VU/8")(l,h,!1,function(t){e("nqB8")},null,null).exports,f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:"alert-"+t.type},[e("h2",[t._v(t._s(t.text))]),t._v(" "),e("hr"),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:function(s){t.$emit("onNext")}}},[t._v("\n      Continue\n  ")])])},staticRenderFns:[]};var m=e("VU/8")({props:["type","text"]},f,!1,function(t){e("uZvZ")},"data-v-7c92a236",null).exports,d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"alert-primary"},[e("h3",[t._v("Success: "+t._s(t.stats.success))]),t._v(" "),e("h3",[t._v("Error: "+t._s(t.stats.error))]),t._v(" "),e("hr"),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:function(s){t.$emit("repeat")}}},[t._v("Repeat")]),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:function(s){t.$emit("nextLevel")}}},[t._v("Next Level")])])},staticRenderFns:[]};var _=e("VU/8")({props:["stats"]},d,!1,function(t){e("aczW")},null,null).exports;n.a.config.productionTip=!1,n.a.component("StartScreen",u),n.a.component("Question",p),n.a.component("Message",m),n.a.component("ResultScreen",_),new n.a({el:"#app",router:i,components:{App:a},template:"<App/>",render:function(t){return t(a)}})},nqB8:function(t,s){},uZvZ:function(t,s){}},["lVK7"]);
//# sourceMappingURL=app.08fecbbb7764488e06b8.js.map