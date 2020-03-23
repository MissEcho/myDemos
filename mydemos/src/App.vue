<template>
  <div id="app">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="classic编辑器" name="first">
        <el-button type="primary" @click="getData">获取html结构</el-button>
      <class-editor ></class-editor>
      </el-tab-pane>
      <el-tab-pane label="inline编辑器" name="second">
        <inline-editor ></inline-editor>
      </el-tab-pane>
      <el-tab-pane label="ballon编辑器" name="third">ballon编辑器</el-tab-pane>
      <el-tab-pane label="document编辑器" name="fourth">document编辑器</el-tab-pane>
      <el-tab-pane label="证书编辑器" name="fifth">证书编辑器</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import classEditor from './components/class-editor'
import inlineEditor from './components/inline-editor'
// import EditorInline from './components/EditorInline'
export default {
  name: "App",
  components:{
    classEditor,
    inlineEditor
  },
  data(){
    return {
      activeName:'first'
    }
  },
  methods:{
    getData(){

    },
    handleClick(idx){
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
</style>
