import React from 'react'

const GroupPage = async ({params}) => {

    const { id } = await params;

  return (
    <div className='mt-20 gap-1'>GroupPage: {id} </div>
  )
}

export default GroupPage