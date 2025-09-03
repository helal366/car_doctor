import React from 'react'

export default async function ServiceDetailsPage({params}) {
    const p=await params
  return (
    <section>
        Service Details for {p?.id}
    </section>
  )
}
