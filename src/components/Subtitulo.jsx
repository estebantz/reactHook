import React from 'react'

export const Subtitulo = (propos) => {
  return (
    <div>
        <h4 className='text-light text-center my-4'>Tereas de la comision {propos.comision} - {propos.empresa}</h4>
    </div>
  )
}
