import React from 'react';

class RewardItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      backing_amount: "",
      reward_id: "",
      project_id: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const {reward, createBacking} = this.props;
    const newBacking = {
      backing_amount: reward.pledge_amount,
      reward_id: reward.id,
      project_id: reward.project_id
    };
    createBacking(newBacking);
  }

  render(){
    const {title, description, estimated_delivery, pledge_amount, id} = this.props.reward;
    const {newRewardBacking, reward} = this.props;
    return (
      <div className='reward-item'>
        <button onClick={this.handleClick}>
          <div className='pledge-info'>
            <h2>Pledge ${pledge_amount} or more</h2>
            <h3>{title}</h3>
            <p className='reward-item-description'>{description}</p>
            <span>ESTIMATED DELIVERY</span><br />
            <p className='estimated-delivery'>{estimated_delivery}</p><br />
            <span>244 backers</span>
          </div>
        </button>
      </div>
    );
  }
}

export default RewardItem;
