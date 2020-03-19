<template>
  <div id="app">
     <el-button type="primary" size="small" @click="getEditorTxt">获取数据</el-button>
      <el-button type="primary" size="small"  @click="setEditorTxt">设置数据</el-button>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @input="onEditorInput"></ckeditor>
  </div>
</template>

<script>
import inline from "@ckeditor/ckeditor5-build-inline/build/ckeditor";
import '@ckeditor/ckeditor5-build-inline/build/translations/zh-cn';

export default {
  name: "app",
  data() {
    return {
      editor: inline,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        //   toolbar: [ 'bold', 'italic', '|', 'link' ],
          language: 'zh-cn'
        // The configuration of the editor.
      }
    };
  },
  methods:{
      getEditorTxt(){
          console.log(this.editorData);
      },
      setEditorTxt(){
          this.editorData=''
      },
      onEditorInput(txt){
          console.log(txt);
      }
  }
};
</script>