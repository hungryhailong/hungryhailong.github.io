<template>
  <div class="resumeEditor" :class="{htmlMode:enableHtml}" ref="container">
    <div v-if="enableHtml" v-html="result"></div>
    <pre v-else>{{result}}</pre>
  </div>
</template>

<script>
  import marked from 'marked'
  export default {
    props: ['markdown', 'enableHtml'],
    name: 'ResumeEditor',
    computed: {
      result: function () {
        return this.enableHtml ? marked(this.markdown) : this.markdown
      }
    },
    methods: {
      goBottom: function () {
        this.$refs.container.scrollTop = 100000
      },
      backTop:function(){
       
        this.$refs.container.scrollTop = 1000;
        var that = this;
        var timer = setInterval(function(){
          var speed = Math.floor(-that.$refs.container.scrollTop/5);
          that.$refs.container.scrollTop =  that.$refs.container.scrollTop + speed;
          if( that.$refs.container.scrollTop == 0){
            clearInterval(timer);
          }
        },100)

      }
    }
  }

</script>

<style scoped>
  .htmlMode {
    animation: flip 2s;
  }
  
  @keyframes flip {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>