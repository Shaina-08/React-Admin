import React from 'react'
import { ChartComponent , SeriesCollectionDirective, SeriesDirective, Inject , Category , ColumnSeries, DataLabel, Legend, Tooltip} from '@syncfusion/ej2-react-charts'
import { barCustomSeries, barPrimaryYAxis , barPrimaryXAxis} from '../../data/dummy'
// import Header from '../../Components/Header';
import  ChartsHeader from '../../Components/ChartsHeader'

import { useStateContext } from '../../context/ContextProvider'

function Bar() {
    const { currentMode } = useStateContext()
    return (

        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader category="Chart" title="Inflation Rate in Percentage" />

            <ChartComponent id="charts"
                height="460px"
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >
                <Inject services={[ColumnSeries, Tooltip, Legend, Category, DataLabel]} />
                <SeriesCollectionDirective>
                    {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />
                    )}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default Bar