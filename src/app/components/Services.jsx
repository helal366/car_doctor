import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import React from 'react'

export default async function Services() {
    const res = await fetch(`${process.env.NEXT_BASE_URL || "http://localhost:3000"}/services.json`);
    const data = await res.json();
    const servicesCollection = dbConnect("services");
    const servicees= await servicesCollection.find({})
    return (
        <section>
            <h1 className='text-4xl text-center font-semibold my-6'>
                Services : {data?.length}
            </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data?.map((item) => {
                        return (
                            <div key={item?.service_id} className='overflow-hidden '>
                                <Image className='w-full h-[200px] rounded-t-xl border border-gray-500/50 ' src={item?.img} width={314} height={208} alt={item?.title} />
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}
