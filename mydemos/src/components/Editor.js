// The editor creators to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

// ...

class ClassicEditor extends ClassicEditorBase {}
class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
const plugins = [
    // ...
];

ClassicEditor.builtinPlugins = plugins;
InlineEditor.builtinPlugins = plugins;

// Editor configuration.
const config = {
    // ...
};

ClassicEditor.defaultConfig = config;
InlineEditor.defaultConfig = config;

export default {
    ClassicEditor, InlineEditor
};