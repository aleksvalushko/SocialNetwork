import React from 'react';
import mod from './Members.module.sass';
import Member from './Member/Member';
import PropTypes from 'prop-types';

const Members = (props) => {

    let name = props.members.map((el, index) =>  <Member name={el} item={index+1}/> );

    return (
        <div className={mod.members}>
            {name}
        </div>
    );
};

export default Members;

Members.propTypes = {
    state: PropTypes.object
};