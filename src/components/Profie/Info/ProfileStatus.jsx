import React from 'react';
import mod from './Info.module.sass';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

   /* onPressEnter = (e) => {
      if(e.key === 'Enter'){
          this.onStatusChange(e);
      }
    };*/

   componentDidUpdate(prevProps, prevState) {
       if(prevProps.status !== this.props.status){
           this.setState({
               status: this.props.status
           })
       }
   }

    render() {
        return <div>
            {!this.state.editMode && <div onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</div>}
            {this.state.editMode &&
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>}
        </div>
    };
};

export default ProfileStatus;
