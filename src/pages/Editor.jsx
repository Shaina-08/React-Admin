import React from 'react'
import { HtmlEditor , Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar} from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy'
import Header from '../Components/Header'
const Editor = () => {
  return (
    <div className=
      "m-1  md:m-10 mt-20 p-2 md:p-20  bg-white rounded-3xl">
      <Header category="App" title="Editor" />

      <RichTextEditorComponent>
        <EditorData/>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}/>
      </RichTextEditorComponent>
      </div>
  )
}

export default Editor