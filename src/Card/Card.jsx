import React from 'react';
import './Card.css';

const Card = (props) => {
const {img ,name , userId , first , second , third} = props;
  return (
    <div className='card'>
        <div className='card-left'>
          <img  className= 'profile-img' src={img} alt="User Profile"/>
        </div>
        <div className='card-right'>
            <div className='name'>{name}</div>
            <div className='user-id'>{userId}</div>
            <div className='stats'>
                <div className='stat'>{first}</div>
                <div className='stat'>{second}</div>
                <div className='stat'>{third}</div>
            </div>
        </div>

    </div>
  )
}

export default Card
