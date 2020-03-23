<template>
  <ckeditor :editor="editor" :value="editorData"></ckeditor>
</template>

<script>
  import ClassicEditor from './core/ckeditor'
  
  import CKEditor from '@ckeditor/ckeditor5-vue'

  export default {
    components:{
        ckeditor: CKEditor.component
    },
    data() {
    return {
      editor: ClassicEditor,
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
    
  }
</script>

<style scoped lang="stylus"></style>