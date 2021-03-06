import React from 'react';
import RewardItemForm from './reward_item_form';

class RewardsForm extends React.Component{
  render(){
    const {rewards} = this.props.fieldVals;
    const {saveRewardValues, handleAddReward, changeForm} = this.props;
    const rewardIndexItem = rewards.map((reward, idx) => (
      <RewardItemForm saveRewardValues={saveRewardValues}
                      reward={reward}
                      idx={idx}
                      key={idx}/>
    ));
    return(
      <div className='project-new-partial'>
        {rewardIndexItem}
        <button onClick={handleAddReward}>+ Reward</button>
        <button onClick={changeForm('about')}>Save and Continue</button>
      </div>
    );
  }
}

export default RewardsForm;
