// 基础功能组件
import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
// 按钮视图组件
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'

// 按钮的图标 SVG
const questionChoiceIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M1.34 8.269a.6.6 0 0 0-.607.592l-.07 5.87a.6.6 0 0 0 .607.607l5.869-.071a.6.6 0 0 0-.015-1.2l-5.254.063.063-5.254a.6.6 0 0 0-.593-.607zM14.73.662L8.861.733a.6.6 0 0 0 .015 1.2l5.254-.063-.063 5.254a.6.6 0 0 0 1.2.015l.07-5.87a.6.6 0 0 0-.607-.607z"/>
</svg>
`

// 自定义组件需要继承基础组件
class QuestionChoice extends Plugin {
  // 重写基础组件的初始化函数
  init () {
    // 获取当前编辑器
    const editor = this.editor
    // 从当前编辑器的配置中获取传入的自定义配置名称
    // const questionchoice = this.editor.config.get('questionchoice')

    // 将自定义按钮添加到当前编辑器的组件工厂
    editor.ui.componentFactory.add('questionchoice', locale => {
      // 获取当前编辑器的按钮视图
      const view = new ButtonView(locale)

      // 在按钮视图中注入自定义按钮的名称、图标
      view.set({
        label: '选择题',
        icon: questionChoiceIcon,
        // 开启提示，当鼠标悬浮到按钮上，会显示 label 指定的 questionchoice 字样
        tooltip: true
      })

      // 点击按钮
      view.on('execute', () => {
        // 执行自定义配置中指定的回调函数
        // questionchoice.handler.call()
        editor.model.change( writer => {
          console.log('wjr');
          const imageElement = writer.createElement( 'p', {
              text: 'imageUrl'
          } );

          // Insert the image in the current selection location.
          editor.model.insertContent( imageElement, editor.model.document.selection );
      } );


      })

      // 返回修改后的视图内容
      return view
    })
  }
}

// 对外暴漏自定义组件
export default QuestionChoice