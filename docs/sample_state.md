{
  entities: {
    projects: {
      id: 1,
      name: "The Next Big Project Idea",
      body: "Fund out project to get our great product right out of production!",
      user_id: 1,
    },
    user: {
      id: 1,
      username: "rebekahliu",
      email: "rebekahliu93@yahoo.com"
    },
    rewards: {
      id: 1,
      project_id: 1,
      reward: "A set of 3 of our new product",
      amount: 100
    }
    backings: {
      user_id: 1,
      project_id: 1,
      amount: 100
    }
    categories: {
      id: 1,
      name: "Entertainment"
    }
    projectcategories {
      project_id: 1,
      category_id: 1
    }
  }
  session: {
    currentUser: {
      id: 1,
      username: "rebekahliu"
    }
  }
  ui: {
    loading: true/false
  }
  errors: {
    login: [incorrect login info],
    project: [project name cannot be blank],
    reward: [reward cannot be blank],
    backing: [backing amount cannot be 0]
  }
}

