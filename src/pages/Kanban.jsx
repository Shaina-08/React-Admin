import React from 'react'
import { KanbanComponent, ColumnDirective ,ColumnsDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../data/dummy'
 import Header from '../Components/Header';
const Kanban = () => {
  return (
    <div className=
      "m-1  md:m-10 mt-20 p-2 md:p-20  bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
       id="kanban"
       dataSource={kanbanData}
       cardSettings={{ contentField: 'Summary',
        headerField:'Id'
        
      }}
      keyField="Status"

      >
        <ColumnsDirective>
        {kanbanGrid.map((item, index) =>
        <ColumnDirective key={index} {...item}/>)}
        </ColumnsDirective>
      </KanbanComponent>
      </div>
  )
}

export default Kanban