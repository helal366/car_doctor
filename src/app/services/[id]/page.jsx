import dbConnect, { collectionNames } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServiceDetailsPage({ params }) {
  const { id } = params;
  const servicesCollection = await dbConnect(collectionNames.servicesCollection);
  const service = await servicesCollection.findOne({ _id: new ObjectId(id) });
  service._id=service?._id.toString()
  return (
    <section className='py-10'>
      <section>
        <figure className='w-full relative'>
          <Image className='w-full' src="/assets/images/checkout/checkout.png" alt="Banner" width={1137} height={300} />
          <div className='absolute w-full h-full border-2 border-red-400 top-0 overlay-bg'>
            <div className='flex items-center ps-10 w-full h-full'>            
              <h1 className='text-white font-bold'>Service Details</h1>
            </div>
          </div>
        </figure>
      </section>
      <div>
        Service Details for {id}
      </div>
      <p>{JSON.stringify(service)}</p>
    </section>
  )
}
