import React from 'react';
import mod from './Members.module.sass';
import Member from './Member/Member';

const Members = (props) => {

    let name = props.members.map((el, index) => <Member name={el} item={index+1} key={index}/> );

    return (
        <div className={mod.members}>
            {name}
        </div>
    );
};

export default Members;