import Currency from '@/components/currency/Currency'
import Dashboard from '@/components/dashboard/Dashboard'
import LineChart from '@/components/Line'
import React from 'react'

const page = () => {
  return (
    <div className='pl-[20%] pt-20'>
        <Currency/>
        <LineChart/>
        <Dashboard/>
    </div>
  )
}

export default page