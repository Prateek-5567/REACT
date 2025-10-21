// url se data lena hoto kese llee??
 
// eg : https://localhost5005/userid102 
// how can i fetch this random page link the user entered userid102 bla bla to enhance ux/ui

import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const {randomId} = useParams();
  return (
    <div className='text-center'> 
        User : {randomId}
    </div>
  )
}

// {randomId} ka access is file me react internally bejta h through one hook : useParams


