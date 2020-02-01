import React from 'react';

class NewColumn extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: ''
    };
  }

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



  render(){
    const { deselectNewColumn, deselectEdit, closeDropdown, hideTaskNew, closeDropdownTask } = this.props;
    return (
      <div className="column-wrapper"
        onClick={() => {
          deselectEdit();
          closeDropdown();
          hideTaskNew();
          closeDropdownTask();
        }}>
        <div className="board-column">
          <div className="draggable">
            <form className="new-board-form" onKeyPress={this.handleSubmit}>
              <input type="text" className="new-column-name"
                onChange={this.update()}
                value={this.state.name}
                placeholder="New Column"
                autoFocus></input>
            </form>
          </div>
          <div className="board-column-body-new" onClick={() => {
              deselectNewColumn();
              hideTaskNew();
            }}>
            <div className="add-card-new">
            </div>
            <div className="card-container-new">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewColumn;
// e.key for handle submit
