import React from 'react'

import ChartsHeader from '../../Components/ChartsHeader'
import LineChart from '../../Components/Charts/LineChart'
import Header from '../../Components/Header';

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category= "Chart" title="Inflation Rate"/>
      <div className="w-full">
        <LineChart/>

      </div>
    </div>
  )
}

export default Line