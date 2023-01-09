import React from 'react';
import './Skeleton.css';

const Skeleton = ()=>{
    return <div className='card-sk'>
    <div className='card-left-sk'>
      <div className='img-sk'></div>
    </div>
    <div className='card-right-sk'>
        <div className='name-sk'></div>
        <div className='user-id-sk'></div>
        <div className='stats-sk'>
            <div className='stat-sk'></div>
            <div className='stat-sk'></div>
            <div className='stat-sk'></div>
        </div>
    </div>

</div>
}

const Skeletons = () => {
  return (
    Array(9).fill(<Skeleton/>)
    
  )
}

export default Skeletons;