## Component Hierarchy

### Functional Component Hierarchy
- Root
  + App
    - Nav Bar
    - Main Page
    - Footer

- Nav Bar
  + Session Buttons Container + Session Buttons
    - state: session
  
- Session
  + Session Form Container + Session Form
    - routes: /#/signin and /#/login
 
- Home Page
  + Project Index Container + Project Index 
    - routes: /#/projects
    - state: projects
      + Project
        - routes: /#/projects/{project.id}
        - state: projects[:id]
  + Project Show Container + Project Show
    - routes: /#/projects/{project.id}
    - state: projects[:id]
      + Rewards Index Container + Rewards Index
        - routes: /#/projects/{project.id}/rewards
        - state: projects[:id].rewards
  + Project Form Container + Project Form
    - routes: /#/projects/new
    - state: errors:projectform
- User
  + User Show Container + User Show
    - routes: /#/users/{user.id}
    - state: currentuser
  
