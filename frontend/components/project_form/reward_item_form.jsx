import React from 'react';

class RewardItemForm extends React.Component{
  render(){
    console.log('rendering rewarditemform');
    const {saveRewardValues, reward, idx} = this.props;
    return (
      <form>
        <label>Title</label><br />
        <input onChange={saveRewardValues('title', idx)} value={reward.title}></input><br />

        <label>Description</label><br />
        <input onChange={saveRewardValues('description', idx)} value={reward.description}></input><br />

        <label>Pledge Amount</label><br />
        <input type ='number' onChange={saveRewardValues('pledge_amount', idx)} value={reward.pledge_amount}></input><br />

        <label>Estimated Delivery</label><br />
        <input type='date' onChange={saveRewardValues('estimated_delivery', idx)} value={reward.estimated_delivery}></input><br />

      </form>
    );
  }
}

export default RewardItemForm;
