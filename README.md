# Asana

BlueAsana is a web application based on Asana, a very popular tool for project and task management. BlueAsana was built using a PostgreSQL database, Ruby on Rails on the backend, and React.js on the frontend, using Redux to manage state.

[Live Site](http://blueasana.herokuapp.com/#/)

![screencast 2020-02-06 23-05-45](https://user-images.githubusercontent.com/7420659/74040202-2499e980-49bb-11ea-951f-41a93569e1f4.gif)

BlueAsana Technology Stack

* React / Redux
* JavaScript
* JQuery (AJAX)
* Ruby on Rails
* PostgreSQL
* CSS
* Webpack
* Other prebuilt react components as datepicker, autocomplete

## Features

### Teams

Teams are the main feature, actions on this model are create, edit, and delete teams.

### Projects

Projects is other important feature, users can create projects, but they can only edit, and delete a project if they members to the team that holds the project.


### Columns aka Categories

Categories help organize tasks in different topics, like To Do, In Progress, Done. For that reason this feature is under each project's show page. Actions permited are create and edit a column whenever the user, but can only delete a column if the column has no tasks. 

### Tasks

Tasks as well another feature of the application. Actions inlcuded here are the create, edit, delete and check whether the task was completed or not.

## Future Directions

* Enhancements to existing features:
    * Refactor code to improve user experience when navigating around the site.
    * Add drag-and-drop functionality to reassign tasks to sections.
    * Users can assign due dates to projects as well.
    * Add autosave using a debounce algorithm to limit API requests
    * Optimizing autocomplete using a debounce algorithm to limit API requests
    
* New features to implement:
    * Build interface by which users can update their profile information.
    * Add calendar view for visualizing project and task due dates.
    * Add comments to or reviews existing Tasks
    
## References

- Asana Design Documents
    * [MVP list](mvp.md "facts")
    * [Schema](schema.md "facts")
    * [Sample State](sample.md "facts")
    * [Frontend routes and components](frontend.md "facts")
    * [Backend routes](backend.md "facts")
