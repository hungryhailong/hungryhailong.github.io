webpackJsonp([1],{34:function(n,e,t){t(76);var r=t(20)(t(36),t(85),"data-v-288975d1",null);n.exports=r.exports},36:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(21),o=t.n(r),i=t(41),s=t.n(i),a=t(40),l=t.n(a),u=t(84),c=t.n(u),d=t(83),p=t.n(d),h=t(75);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:p.a},data:function(){return{interval:50,currentStyle:"",enableHtml:!1,fullStyle:["/*\n\n* 大家好，我是谯海龙 \n* 最近在学习Vue.js 2，加上秋招即将开始\n* 想用vue做一份在线简历，在腾讯课堂里上了方老师的课\n* 觉得这个效果非常酷，学完自己弄了一份\n* 希望大家能够耐心看完，当做是对我的小小鼓励，谢谢\n* 下面 开始做这个简历\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了，来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(1,101,100); \n}\n/* 文字离边框太近了，稍微调整下 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n  background: rgb(0,43,54);\n}\n/* 给代码加上高亮色 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 弄点并不酷的 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;  \n  -webkit-transition: none; \n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来给自己的简历准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 95vh; \n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n.resumeEditor blockquote h3{\n  margin:5px;\n}\n.resumeEditor blockquote ul{\n  text-indent:5px;\n}\n\n.resumeEditor p a{\n    display: block;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    float: left;\n    text-decoration: none;\n    background: rgb(232,221,203);\n    margin-right: 10px;\n    padding: 0 5px;\n    color: #000;\n}\n/*最后再小小调整一下*/\n.resumeEditor{\n    filter:alpha(Opacity=90);-moz-opacity:0.9;opacity: 0.9; \n    position: fixed; right: 100px; top: 30px;\n    transform: rotateY(-10deg) translateZ(-100px);\n}\n.styleEditor{ \n  left: 100px; \n  filter:alpha(Opacity=80);-moz-opacity:0.8;opacity: 0.8;\n}\n/*谢谢你们的耐心观看!*/\n'],currentMarkdown:"",fullMarkdown:"\n谯海龙\n----\n\n* 2018届东北大学学生，信息安全专业，专业成绩排名20%\n* 来自重庆，拥有积极乐观的心态，热爱新鲜事物，敢于尝试，较强的责任。\n* 热爱前端开发，自2016暑假开始接触前端，对前端工作充满热情，对新知识充满学习欲望。\n\n\n技能\n----\n\n* 前端基础开发：掌握HTML(5)，CSS(3),javascript,webpack\n* 前端框架学习：掌握jQuery,Bootstrap,熟悉Vue/Vue2,了解Angular，React\n* 后端语言：熟悉node.js，熟悉php+mysql编程，了解python\n* 计算机掌握：熟悉c++，java等面向对象语言，良好的数据结构和算法设计基础\n* 任职资格：具备良好的团队合作精神，善于沟通，有过项目负责人经验，求知欲强\n\n\n项目经历\n----\n> ### 校学生成绩管理系统实现                         2016.9至2016.12 \n   * 项目描述：对全院学生成绩进行管理，包括前端录入，反馈和后台数据库管理。\n   * 本人职责：项目成员。负责前端部分页面设计与实现，参与数据库的设计，参与项目前后端交互的实现。\n   * 主要业绩：经过专业老师审批和修改，为院学生使用。\n　\n\n> ### 个人网页的简单设计与实现                       2016.10\n   * 项目描述：根据个人需求设计网页并通过代码实现。\n   * 本人职责：项目负责人。负责项目的设计，网页的代码实现以及后续的维护。\n   * 主要业绩：该网站已于2016年10月完成，发布到互联网\n\n\n> ### 中国新东北振新研究院站点                        2017.3至2017.4\n   * 项目描述：中国新东北振新研究院站点页面实现\n   * 本人职责：项目成员。参与页面设计与实现，主要技术bootstrap，div+css，jquery\n   * 主要业绩：该项目已经上线_http://219.216.96.131/_\n\n实习经历\n----\n   * 2017.6-2017.8  广州蓝盾科技股份有限公司 \n   * 从事信息安全相关任务，参与web安全包括web渗透，web攻防，靶场环境搭建等方面\n\n校园经历\n----\n * 奖励荣誉：2014-2016年度  获国家励志奖学金、校二三等奖学金，自立自强先进个人等称号。\n * 教育背景：2014-至今 沈阳东北大学本科就读。\n * 校内活动：2015-至今  东北大学IBM俱乐部成员，参与各项活动组织和学习讨论。参加各类科技竞赛，包括全国大学生数学建模，信息安全竞赛等。2014-2015年   担任院学生会科技部副部长，参与院内各项科技赛事的组织。\n\n链接\n----\n [GitHub](https://github.com/hungryhailong)\n [学习过程中的案例](https://github.com/hungryhailong/web-project/tree/master/learn-web)\n [烂烂的gitpage](https://hungryhailong.github.io)\n [文本简历下载](http://hungryhailong.github.io/files/resume.doc)\n\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=l()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:return n.next=12,this.scrollGoTop();case 12:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},scrollGoTop:function(){var n=this;return new o.a(function(e,t){n.$refs.resumeEditor.backTop(),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=l()(s.a.mark(function e(){var r,a,l,u,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),l=a-r.length,this.currentStyle.length<a?(u=this.currentStyle.length-l,c=r.substring(u,u+1)||" ",this.currentStyle+=c,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom(),d.$refs.resumeEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);var i=(n.currentMarkdown[n.currentMarkdown.length-1],n.currentMarkdown[n.currentMarkdown.length-2]);console.log(i),"\n"===i&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},37:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(79),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},backTop:function(){this.$refs.container.scrollTop=1e3;var n=this,e=setInterval(function(){var t=Math.floor(-n.$refs.container.scrollTop/5);n.$refs.container.scrollTop=n.$refs.container.scrollTop+t,0==n.$refs.container.scrollTop&&clearInterval(e)},100)}}}},38:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(80),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},39:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(35),o=t(34),i=t.n(o);new r.a({el:"#app",render:function(n){return n(i.a)}})},75:function(n,e){},76:function(n,e){},77:function(n,e){},78:function(n,e){},83:function(n,e,t){t(78);var r=t(20)(t(37),t(87),"data-v-2df95543",null);n.exports=r.exports},84:function(n,e,t){t(77);var r=t(20)(t(38),t(86),"data-v-2ca90776",null);n.exports=r.exports},85:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},86:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},87:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}}},[39]);
//# sourceMappingURL=app.47e01977e76e29826004.js.map