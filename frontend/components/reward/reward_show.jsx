import React from 'react';

class RewardItem extends React.Component{
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     backing_amount: "",
  //     reward_id: "",
  //     project_id: ""
  //   };
  //
  //   this.handleClick = this.handleClick.bind(this);
  // }

  render(){
    const {title, description, estimated_delivery, pledge_amount, id} = this.props.reward;
    const {newRewardBacking, reward} = this.props;
    return (
      <button onClick={newRewardBacking}>
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
      </button>
    );
  }
}

export default RewardItem;
