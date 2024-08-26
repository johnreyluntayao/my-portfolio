import { sample } from '@/data'
import React from 'react'

const page = ({params} : {
    params :{
        id : number}}) => {

        const paramid = Number(params.id)

  const idx  = sample.find((p) => p.id === paramid)

  return (

    idx ? (
        <div>{idx.text}</div>
    ) : (
        <div>not found</div>
    )

    
  )
}

export default page