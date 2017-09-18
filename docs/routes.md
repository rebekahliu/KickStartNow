# Routes

## API Endpoints
  
  - POST /api/session - login
  - DELETE /api/session - logout
  
  - GET /api/users/:userId - returns user information
  
  - GET /api/projects - return all projects
  - POST /api/projects/new - creates new project
  - GET /api/projects/:projectId - returns project information
  - PATCH /api/projects/:projectId - edits project information
  - DELETE /api/projects/:projectId - deletes project
  
  - GET /api/projects/:projectId/rewards -returns all rewards for a project
  - POST /api/projects/:projectId/rewards/new - creates new reward for a project
  - PATCH /api/projects/:projectId/rewards/:rewardId - edits reward information
  - DELETE /api/projects/:projectId/rewards/:rewardId - deletes reward
  
  - GET /api/projects/:projectId/backings -returns all backing information for a project
  - POST /api/projects/:projectId/backings/new - creates new backing for a project
  - PATCH /api/projects/:projectId/backings/:rewardId - edits backing information
  - DELETE /api/projects/:projectId/backings/:rewardId - deletes backing
  
  - GET /api/category/:categoryid -return all projects under that category
  

## Frontend Routes
  - /
  - /#/login
  - /#/signup
  - /#/projects
  - /#/projects/new
  - /#/projects/:projectId
  - /#/projects/:projectId/rewards
  - /#/user
  - /#/user/new
  - /#/categories
  - /#/categories/:categoryId
