import React from 'react';

class RewardItem extends React.Component{
  render(){
    const {title, description, estimated_delivery, pledge_amount} = this.props.reward;
    return (
      <div className='reward-item'>
        <div className='pledge-info'>
          <h2>Pledge ${pledge_amount} or more</h2>
          <h3>{title}</h3>
          <p className='reward-item-description'>{description}</p>
          <span>ESTIMATED DELIVERY</span><br />
          <p className='estimated-delivery'>{estimated_delivery}</p><br />
          <span>244 backers</span>
        </div>
      </div>
    );
  }
}

export default RewardItem;
