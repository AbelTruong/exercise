'use client'
import { NormalCounter } from '@/components/counter/normal-counter'
import { ZustandCounter } from '@/components/counter/zustand-counter'
import React from 'react'

const Counter = () => {
  return (
    <section className='container mx-auto h-screen flex gap-8 justify-center items-center'>
      <NormalCounter/>
      <ZustandCounter/>
    </section>
  )
}

export default Counter