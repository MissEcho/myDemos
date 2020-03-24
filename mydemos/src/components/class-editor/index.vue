<template>
  <ckeditor :editor="editor" v-model="editorData"></ckeditor>
</template>

<script>
import ClassicEditor from "./core/ckeditor";
import CKEditor from "@ckeditor/ckeditor5-vue";

export default {
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {}
    };
  },
  props: {},
  methods: {}
};
</script>

<style scoped>
.simple-box {
  padding: 10px;
  margin: 1em 0;
  background: rgba(0, 0, 0, 0.1);
  border: solid 1px hsl(0, 0%, 77%);
  border-radius: 2px;
}

.simple-box-title, .simple-box-description {
  padding: 10px;
  margin: 0;
  background: #FFF;
  border: solid 1px hsl(0, 0%, 77%);
}

.simple-box-title {
  margin-bottom: 10px;
}
</style>