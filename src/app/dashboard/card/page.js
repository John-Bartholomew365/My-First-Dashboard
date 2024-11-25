import Hero from '@/components/card/hero/Hero'
import Transaction from '@/components/card/transaction/Transaction'
import React from 'react'

const page = () => {
  return (
    <div className="pl-[20%] pt-20">
        <Hero/>
        <Transaction/>
       
    </div>
  )
}

export default page