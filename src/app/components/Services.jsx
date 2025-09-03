import React from 'react'
import dbConnect, { collectionNames } from '@/lib/dbConnect';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

export default async function Services() {
    const servicesCollection = await dbConnect(collectionNames.servicesCollection);
    const services = await servicesCollection.find({}).toArray();
    return (
        <section>
            <h1 className='text-4xl text-center font-semibold my-6'>
                Services : {services?.length}
            </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map((item) => {
                        return (
                            <div key={item?._id.toString()} className='overflow-hidden border border-gray-700/50 rounded-t-xl p-3 bg-gray-50'>
                                <Image className='w-full h-[200px] rounded-t-xl border border-gray-500/50 mb-3' src={item?.img} width={314} height={208} alt={item?.title || 'Service image'} />
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='text-lg font-bold'>{item?.title}</h3>
                                        <h3 className='text-lg font-bold text-orange-500'>Price : ${item?.price}</h3>
                                    </div>
                                    <div>
                                        <Link href={`/services/${item?._id}`} className='font-extrabold text-orange-500'>
                                            <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
