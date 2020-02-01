import React from 'react';
import { Link } from 'react-router-dom';
import Column from '../../columns/column_container';
import NewColumn from '../../columns/new_column/new_column_form_container';

class ProjectShow extends React.Component {

  componentDidMount(){
    const { teamId, projectId, columnId, requestAllTasks, requestAllColumns } = this.props;

    this.props.requestProject(projectId, teamId);
    this.buttonOrForm();
  }

  componentDidUpdate(prevProps){
    if ((prevProps.projectId != this.props.projectId) || (prevProps.columns.length != this.props.columns.length)){
      this.props.requestProject(this.props.projectId, this.props.teamId);
    }
  }

  buttonOrForm(){
    const { projectId } = this.props;
    if (this.props.creating === false){
      return (
        <div className="column-wrapper">
          <div className="board-column">
            <div className="button-wrapper">
              <button className="add-column" onClick={this.props.selectNewColumn}> + Add column</button>
            </div>
          </div>
        </div>);
    } else {
      return (<NewColumn projectId={projectId} deselectNewColumn={this.props.deselectNewColumn}/>);
    }
  }

  render(){
    const { columns, deselectEdit, deselectNewColumn, hideTaskNew } = this.props;
    return (
      <div className="index-single-project" style={{marginLeft: this.props.sidebar ? '250px' : '0'}}>
        <div className="project-main" >
          <div className="function-wrapper">
            <div className="board">
              <div className="board-body" onClick={() => {
                  deselectNewColumn();
                }}>
                <div className="scrollable">
                  <div className="columns">
                    {columns.map((column, i) => (
                      <Column key={`column-${i}`}
                        column={column}
                        />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="scrollable-new" onClick={() => {
                deselectEdit();
                hideTaskNew();
              }}>
              {this.buttonOrForm()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectShow;
