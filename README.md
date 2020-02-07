# BlueAsana

BlueAsana is a web application based on Asana, a very popular tool for project and task management. BlueAsana was built using a PostgreSQL database, Ruby on Rails on the backend, and React.js on the frontend, using Redux to manage state.

[Live Site](http://blueasana.herokuapp.com/#/)

![screencast 2020-02-07 10-10-41](https://user-images.githubusercontent.com/7420659/74055165-66388d80-49d7-11ea-8eae-4eb8e130f834.gif)

BlueAsana Technology Stack

* React / Redux
* JavaScript
* JQuery (AJAX)
* Ruby on Rails
* PostgreSQL
* CSS
* Webpack
* Other prebuilt react components as datepicker, autocomplete

## Overviewing Features

### Teams

Teams are the main feature, actions on this model are create, edit, and delete teams.A newly user will have a membership association under a First Team that can remove from there later on after has another Teams.

### Projects

Projects is other important feature, users can create projects, but they can only edit, and delete a project if they are members to the team that holds the project.

### Members
A user may join a team in one of two different ways:
  * When a user creates a team, a Membership is automatically created for the given user and the newly created team.
  * When a user can add one or multiple users by entering their Names, those names are sent to the backend, where the MembershipsController retrieves the relevant users from the database and creates a Membership for each one.

### Columns (aka Categories)

Categories help organize tasks in different topics, like To Do, In Progress, Done. For that reason this feature is under each project's show page. Actions permited are create and edit a column whenever the user, but can only delete a column if the column has no tasks. 

### Tasks

Tasks as well another feature of the application. Actions inlcuded here are the create, edit, delete and check whether the task was completed or not.

## Feature Spotlight: Reusable Modal component

The modal component used was with the idea to help on React reusability and modularity. Overall the modal will conditionally renders various forms involved in logging in; signing up; adding, editing, and deleting various models (including teams, projects, tasks, and members).


```
const Modal = props => {
    const { modal, closeModal } = props;
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
      case 'Log In':
         component = <LogInFormContainer />;
         break;
       case 'Sign Up':
         component = <SignUpFormContainer />;
         break;
       case 'Create Project':
         component = <CreateProjectFormContainer />;
         break;
       case 'Update Project':
         component = <EditProjectFormContainer />;
         break;
       case 'Create Member':
         component = <CreateMemberFormContainer />;
           break;
       case 'Task Modal':
         component = <TaskFormContainer />;
         break;
       case 'Create Team':
         component = <CreateTeamFormContainer />;
         break;
       case 'Update Team':
         component = <UpdateTeamFormContainer />;
         break;
       case 'My Profile':
         component = <ProfileSettingsContainer />;
         break;
       default:
         return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};
```
## Feature Spotlight: Categories

Each user can create multiple categories, as a way to organize Tasks. When creating a task, a user can associated a Task to one of the category that under a Project.

The flow of data from frontend to backend to handle these two distinct scenarios, as shown on the code snippets.

Frontend form component:
```
  handleSubmit(e) {
    const { projectId, teamId } = this.props;
    e.preventDefault();
    const column = Object.assign({}, this.state);
    if (e.key === 'Enter'){
      if (this.state.name === ''){
        this.props.deselectNewColumn();
      } else {
        this.props.createColumn(column, projectId, teamId).then(() => this.setState({ name: ''}));
      }
    } else {
      this.update()(e);
    }
  }

  update() {
    return e => {
      if (e.key === undefined){
        return this.setState({ name: this.state.name.slice(0, -1)});
      } else {
        return this.setState({ name: this.state.name + e.key});
      }
    };
  }

```

Thunk action creator, asynchronously sends AJAX request to backend:
```
export const createColumn = (column, projectId, teamId) => dispatch => {

  return ColumnAPIUtil.createColumn(column, projectId, teamId).then(res => {
    return dispatch(receiveColumn(res));
  });
};
```

AJAX request that sends project and column information to the backend:
```
export const createColumn = (column, projectId, teamId) => {

  return $.ajax({
    method: 'POST',
    url: `api/teams/${teamId}/projects/${projectId}/columns/`,
    data: { column }
  });
};
```

## Feature Spotlight: Teams

Whenever a user joins a team, a new Membership (representing a row in a joins table in the database) is created. A user may join a team in one of two different ways:
  * When a user creates a team, a Membership is automatically created for the given user and the newly created team.
  * When a user invites one or multiple users by entering their Names, those names are sent to the backend, where the MembershipsController retrieves the relevant users from the database and creates a Membership for each one.

The flow of data from frontend to backend to handle these two distinct scenarios, as shown on the code snippets.

Frontend form component:

## Future Directions

* Enhancements to existing features:
    * Refactor code to improve the user experience when navigating around the site.
    * Refactor avatar under the Profile Settings
    * Add drag-and-drop functionality to reassign tasks to categories.
    * Add deadlines to projects as well.
    * Add autosave using a debounce algorithm to limit API requests
    * Optimizing autocomplete using a debounce algorithm to limit API requests
    
* New features to implement:
    * Build interface by which users can update their profile information.
    * Add calendar view for visualizing project and task due dates.
    * Add comments to or reviews existing Tasks
    
## References

- Asana Design Documents [Wiki](https://github.com/yenisbel/asana/wiki)
    * [MVP list](https://github.com/yenisbel/asana/wiki/mvp.md)
    * [Schema](https://github.com/yenisbel/asana/wiki/schema.md)
    * [Sample State](https://github.com/yenisbel/asana/wiki/sample.md)
    * [Frontend routes and components](https://github.com/yenisbel/asana/wiki/frontend.md)
    * [Backend routes](https://github.com/yenisbel/asana/wiki/backend.md)
    
    
## Acknowledgements

Special thanks to the teachers of App Academy!
