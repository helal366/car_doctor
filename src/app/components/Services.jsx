import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import React from 'react'

export default async function Services() {
    const servicesCollection = await dbConnect("services");
    const services= await servicesCollection.find({}).toArray();
    return (
        <section>
            <h1 className='text-4xl text-center font-semibold my-6'>
                Services : {services?.length}
            </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map((item) => {
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
