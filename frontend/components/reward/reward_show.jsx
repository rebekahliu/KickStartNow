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
    this.backers = this.backers.bind(this);
    this.backed = this.backed.bind(this);
  }

  handleClick(e){
    const {reward, currentUser, createBacking} = this.props;
    if (currentUser){
      e.preventDefault();
      const newBacking = {
        backing_amount: reward.pledge_amount,
        reward_id: reward.id,
        project_id: reward.project_id
      };
      createBacking(newBacking);
      window.scrollTo(0, 0);
    } else {
      alert('Please login!');
    }
  }

  backers(){
    if (this.props.reward.backingUserIds.length === 1){
      return <span>1 backer</span>;
      } else {
      return <span>{this.props.reward.backingUserIds.length} backers</span>;
    }
  }

  backed(){
    const {backingUserIds} = this.props.reward;
    if (this.props.currentUser){
      if (backingUserIds.includes(this.props.currentUser.id)) {
        return <p>You've backed this!</p>;
      }
    }
  }

  render(){
    const {title, description, estimated_delivery, pledge_amount, id, backingUserIds} = this.props.reward;
    const {newRewardBacking, currentUser, reward} = this.props;
    return (
      <div className='reward-item'>
        <div className='pledge-info'>
          <h2>Pledge ${pledge_amount} or more</h2>
          <h3>{title}</h3>
          <p className='reward-item-description'>{description}</p>
          <span>ESTIMATED DELIVERY</span><br />
          <p className='estimated-delivery'>{estimated_delivery}</p><br />
          {this.backers()}
          {this.backed()}
        </div>
        <button onClick={this.handleClick}>
          <div id='pledge-info-overlay'>
            <p>Select this reward</p>
          </div>
        </button>
      </div>
    );
  }
}

export default RewardItem;
