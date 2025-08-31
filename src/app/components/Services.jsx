import Image from 'next/image';
import React from 'react'

export default async function Services() {
    const res=await fetch(`${process.env.NEXT_BASE_URL || "http://localhost:3000"}/services.json`);
    const data=await res.json();
  return (
    <section>
        <h1 className='text-4xl text-center font-semibold my-6'>
            Services : {data?.length}
        </h1>
        <div className='grid grid-cols-3 gap-5'>
            {
                data?.map((item)=>{
                    return (
                        <div key={item?._id} className='border-2 border-green-600 overflow-hidden'>
                            <Image src={item?.img} width={314} height={208} alt={item?.title}/>
                        </div>
                    )
                })
            }
        </div>
        
    </section>
  )
}
