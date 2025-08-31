import React from 'react'

export default async function Services() {
    const res=await fetch("/services.json");
    const data=await res.json();
  return (
    <section className='grid grid-cols-12'>
        <h1 className='text-4xl text-center font-semibold'>
            Services: {data?.length}
        </h1>
        {
            JSON.stringify(data)
        }
    </section>
  )
}
