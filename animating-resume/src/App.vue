<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 50,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*

* 大家好，我是谯海龙 
* 最近在学习Vue.js 2，加上秋招即将开始
* 想用vue做一份在线简历，在腾讯课堂里上了方老师的课
* 觉得这个效果非常酷，学完自己弄了一份
* 希望大家能够耐心看完，当做是对我的小小鼓励，谢谢
* 下面 开始做这个简历
*/

/* 首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* 白色背景太单调了，来点背景 */
html {
  color: rgb(222,222,222); background: rgb(1,101,100); 
}
/* 文字离边框太近了，稍微调整下 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
  background: rgb(0,43,54);
}
/* 给代码加上高亮色 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 弄点并不酷的 3D 效果 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;  
  -webkit-transition: none; 
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来给自己的简历准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 95vh; 
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */


`,
          `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`
          ,
          `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;            
  content: counters(section, ".") " ";  
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
.resumeEditor blockquote h3{
  margin:5px;
}
.resumeEditor blockquote ul{
  text-indent:5px;
}
.resumeEditor a{
    display: block;
    height: 30px;
    line-height: 30px;
    text-align: center;
    float: left;
    text-decoration: none;
    background: rgb(232,221,203);
    margin-right: 10px;
    padding: 0 5px;
    color: #000;
}
/*最后再小小调整一下*/
.resumeEditor{
    filter:alpha(Opacity=90);-moz-opacity:0.9;opacity: 0.9; 
    position: fixed; right: 100px; top: 30px;
    transform: rotateY(-10deg) translateZ(-100px);
}
.styleEditor{ 
  left: 100px; 
  filter:alpha(Opacity=80);-moz-opacity:0.8;opacity: 0.8;
}
`],
        currentMarkdown: '',
        fullMarkdown: `
谯海龙
----

* 2018届东北大学学生，信息安全专业，专业成绩排名20%
* 来自重庆，拥有积极乐观的心态，热爱新鲜事物，敢于尝试，较强的责任。
* 热爱前端开发，自2016暑假开始接触前端，对前端工作充满热情，对新知识充满学习欲望。


技能
----

* 前端基础开发：掌握HTML(5)，CSS(3),javascript,webpack
* 前端框架学习：掌握jQuery,Bootstrap,熟悉Vue/Vue2,了解Angular，React
* 后端语言：熟悉node.js，熟悉php+mysql编程，了解python
* 计算机掌握：熟悉c++，java等面向对象语言，良好的数据结构和算法设计基础
* 任职资格：具备良好的团队合作精神，善于沟通，有过项目负责人经验，求知欲强


项目经历
----
> ### 校学生成绩管理系统实现                         2016.9至2016.12 
   * 项目描述：对全院学生成绩进行管理，包括前端录入，反馈和后台数据库管理。
   * 本人职责：项目成员。负责前端部分页面设计与实现，参与数据库的设计，参与项目前后端交互的实现。
   * 主要业绩：经过专业老师审批和修改，为院学生使用。
　

> ### 个人网页的简单设计与实现                       2016.10
   * 项目描述：根据个人需求设计网页并通过代码实现。
   * 本人职责：项目负责人。负责项目的设计，网页的代码实现以及后续的维护。
   * 主要业绩：该网站已于2016年10月完成，发布到互联网
>

校园经历
----
 * 奖励荣誉：2014-2016年度  获国家励志奖学金、校二三等奖学金，自立自强先进个人等称号。
 * 教育背景：2014-至今 沈阳东北大学本科就读。
 * 校内活动：2015-至今  东北大学IBM俱乐部成员，参与各项活动组织和学习讨论。参加各类科技竞赛，包括全国大学生数学建模，信息安全竞赛等。2014-2015年   担任院学生会科技部副部长，参与院内各项科技赛事的组织。

链接
----
 [GitHub](https://github.com/hungryhailong)
 [学习过程中的案例](https://github.com/hungryhailong/web-project/tree/master/learn-web)
 [烂烂的gitpage](https://hungryhailong.github.io)
 [文本简历下载](http://hungryhailong.github.io/files/resume.doc)


`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              console.log(prevChar)
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    min-height: 100vh;
  }
  
  * {
    -webkit-transition: all .3s;
    transition: all .3s;
  }
</style>
