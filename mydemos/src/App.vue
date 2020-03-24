<template>
  <div id="app">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="classic编辑器" name="first">
        <el-button type="primary" @click="getData">获取html结构</el-button>
         <el-button type="primary" @click="getCanvas">生成canvas</el-button>
        <class-editor ref="classeditor"  class="editor-wrap"></class-editor>
        <img :src="htmlUrl" alt="" srcset="">
      </el-tab-pane>
      <el-tab-pane label="inline编辑器" name="second">
        <el-button type="primary" @click="getCanvas">生成canvas</el-button>
        <div id='screen'>
          <inline-editor ref="inlineeditor"></inline-editor>
        </div>
        <img :src="htmlUrl" alt="" srcset="">
      </el-tab-pane>
      <el-tab-pane label="ballon编辑器" name="third">ballon编辑器</el-tab-pane>
      <el-tab-pane label="document编辑器" name="fourth">document编辑器</el-tab-pane>
      <el-tab-pane label="证书编辑器" name="fifth">证书编辑器</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import classEditor from "./components/class-editor";
import inlineEditor from "./components/inline-editor";
import html2canvas from "html2canvas";
export default {
  name: "App",
  components: {
    classEditor,
    inlineEditor
  },
  data() {
    return {
      activeName: "first",
      htmlUrl:'',
      question:{
        questionTitle:"html内容",
        questionType:'试题类型',
        answers:[
            {
              answerContent:'',
              isTrueAnswer:'',
              matchType:''
            }
        ]
      }
    };
  },
  methods: {
    getData() {
      //获取子组件的值
      console.log(this.$refs.classeditor.editorData);
    },
    getCanvas() {
      html2canvas(document.getElementById('screen'), {
        backgroundColor: null,
         dpi: window.devicePixelRatio * 2,
        scale: 2, //放大倍数
        width: 200,
        heigth: 200,//dom高
        useCORS: true // 【重要】开启跨域配置
      }).then(canvas => {
        let url = canvas.toDataURL("image/png");
        this.htmlUrl = url; // 把生成的base64位图片上传到服务器,生成在线图片地址;url是拼接的；
      });
      console.log(this.$refs.inlineeditor.editorData);
    },
    handleClick(idx) {
      console.log(idx);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.editor-wrap {
  width: 80%;
  height: 200px;
}
</style>
