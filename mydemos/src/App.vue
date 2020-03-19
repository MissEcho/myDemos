<template>
  <div id="app">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="classic编辑器" name="first">
      <editor-classic2 ></editor-classic2>
      </el-tab-pane>
      <el-tab-pane label="inline编辑器" name="second">
        <editor-inline ></editor-inline>
      </el-tab-pane>
      <el-tab-pane label="ballon编辑器" name="third">ballon编辑器</el-tab-pane>
      <el-tab-pane label="document编辑器" name="fourth">document编辑器</el-tab-pane>
      <el-tab-pane label="证书编辑器" name="fifth">证书编辑器</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import EditorClassic2 from './components/EditorClassic2'
import EditorInline from './components/EditorInline'
export default {
  name: "App",
  components:{
    EditorClassic2,
    EditorInline
  },
  data(){
    return {
      activeName:'first'
    }
  },
  methods:{
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
