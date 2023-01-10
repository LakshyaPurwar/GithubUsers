import React from 'react';
import './Skeleton.css';
import CircularProgress from '@mui/material/CircularProgress';
import Loader from '../Resources/Loader.gif';

const ProfilesSkeleton = ()=>{
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


const Circle = ()=>{
  return <div className='cirlce'>
    <CircularProgress/>
  </div>
}

const LotteFilesLoader = ()=>{
  return <div className='customLoader'>
    <img className='loaderImage' src={Loader} alt="customLoader" />
  </div>
}

const CustomLoader = ()=>{
return <div className='customLoader'>
  <div className='balls'>
    <div className='ball ball1'></div>
    <div className='ball ball2'></div>
    <div className="ball ball3"></div>
  </div>
  <span className="customText"> Loading . . </span>
</div>  
}

const Skeletons = (props) => {

  if(props.type === 'profile')
  {
    return Array(9).fill(<ProfilesSkeleton/>)
  }
  else if(props.type == 'heading')
  {
    return <div className='heading-sk'></div>  
  }
  else if(props.type == 'circle')
  {
    return <Circle/>
  }
  else if(props.type == 'lotter')
  {
    return <LotteFilesLoader/>
  }
  else if(props.type =='custom')
  {
    return <CustomLoader />
  }
}

export default Skeletons;