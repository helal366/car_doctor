import dbConnect, { collectionNames } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServiceDetailsPage({params}) {
    const {id}=await params;
    const servicesCollection= await dbConnect(collectionNames.servicesCollection);
    const service=await servicesCollection.findOne({_id: new ObjectId(id)})
  return (
    <section>
        <section>
          <Image className='w-full' src="/assets/images/checkout/checkout.png" alt="Banner" width={1137} height={300}/>
        </section>
        <div>
          Service Details for {id}
        </div>
        <p>{JSON.stringify(service)}</p>
    </section>
  )
}
