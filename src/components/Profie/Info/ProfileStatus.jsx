import React from 'react';
import mod from './Info.module.sass';

class ProfileStatus extends React.Component{

    state = {
      editMode: false
    };

    activateEditMode = () => {
      this.setState({
          editMode: true
      })
    };

    deactivateEditMode(){
        this.setState({
            editMode: false
        })
    };

    render() {
        return <div>
            {!this.state.editMode && <div onDoubleClick={this.activateEditMode}>{this.props.status}</div>}
            {this.state.editMode && <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>}
        </div>
    };
};

export default ProfileStatus;
