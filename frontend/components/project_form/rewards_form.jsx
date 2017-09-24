import React from 'react';
import RewardItemForm from './reward_item_form';

class RewardsForm extends React.Component{
  render(){
    const {rewards} = this.props.fieldVals;
    const {saveRewardValues, handleAddReward} = this.props;
    const rewardIndexItem = rewards.map((reward, idx) => (
      <RewardItemForm saveRewardValues={saveRewardValues}
                      reward={reward}
                      idx={idx}/>
    ));
    return(
      <div>
        {rewardIndexItem}
        <button onClick={handleAddReward}>+ Reward</button>
      </div>
    );
  }
}

export default RewardsForm;
