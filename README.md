# Kickstartnow

[Kickstartnow live][heroku]

Kickstartnow is a single page app inspired by Kickstarter and created using a React/Redux frontend and Ruby on Rails backend. Users can sign up to create and back projects.

![Kickstartnow Home Page][index]

## Features

### Project Creation

Users can create projects. I used a multi-page form because it created a cleaner UI experience. In order to implement this I used a parent 'Project Form' form that held all the inputs needed for a project and then nested child forms under it. This parent form allowed navigation between the multiple form pages and passed appropriate information to each child form. 

![Project Form Reward Child][project-create]

One of the biggest hurdles was creating a rewards form that allowed users to dynamically add many reward inputs. I was able to implementing this by using an array to handle my reward state in the parent Project Form. Each element in the array will save as separate reward for this project.

```javascript
// project_form.jsx

  saveRewardValues(type, idx){
    return (e) => {
      const newRewards = this.state.rewards.map((reward, sidx) => {
        if (idx !== sidx) return reward;
        return Object.assign({}, reward, {[type]: e.target.value});
      });

      this.setState({ rewards: newRewards });
    };
  }

  handleAddReward(e){
    e.preventDefault();
    this.setState({
      rewards: this.state.rewards.concat([{title: "",
                                           description: "",
                                           pledge_amount: "",
                                           estimated_delivery: ""
                                         }])
   });
 }
```

The rewards form then renders a new reward form input corresponding to each element in that array.

```javascript
// rewards_form.jsx
const rewardIndexItem = rewards.map((reward, idx) => (
      <RewardItemForm saveRewardValues={saveRewardValues}
                      reward={reward}
                      idx={idx}
                      key={idx}/>
));
```

![Project form reward page dynamically adds reward inputs][project-create-reward]

### Project update

Upon mounting, the project form checks if user wants to create a new form or update a project. Users can only update and delete their own projects. If user is trying to update an existing project, the form will autofill with the project information.

```javascript
// project_form.jsx
  componentWillMount(){
    if (this.props.match.path.includes('update')){
      this.setState(this.props.projects[this.props.match.params.projectId]);
    }
  }
```

### Project show

On the project show page users can interact with a project through backings. Backings can either be through a reward or not. The progress bar and project information will automatically update when a backing is created to reflect that change.

![Project show page][project-show]

### Categories

The explore button opens a list of categories that the user can choose from. Each category shows the number of projects in that category and clicking a category shows those projects. I was able to reuse my ProjectIndexItem component for this by manually passing in the project prop.

![Category search][category-search]

### Search

I implemented a live search for kickstartnow that responds to each change in the query string with a corresponding ajax call. This might become too expensive if the database becomes too large in which case I could implement a timer to only fire an ajax call every second or so. 

![search][search]


[heroku]: https://kickstartnow.herokuapp.com/
[index]: https://github.com/rebekahliu/KickStartNow/blob/master/app/assets/images/home-screen.png
[project-create]: https://github.com/rebekahliu/KickStartNow/blob/master/app/assets/images/rewards-1.png
[project-create-reward]: https://github.com/rebekahliu/KickStartNow/blob/master/app/assets/images/rewards-2.png
[project-show]: https://github.com/rebekahliu/KickStartNow/blob/master/app/assets/images/project-show.png
[category-search]: https://github.com/rebekahliu/KickStartNow/blob/master/app/assets/images/categories-search.png
[search]: https://github.com/rebekahliu/KickStartNow/blob/master/app/assets/images/search-result.png
