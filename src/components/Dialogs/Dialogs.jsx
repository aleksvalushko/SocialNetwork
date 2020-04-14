import React from 'react';
import mod from './Dialogs.module.sass';
import Content from './Content/Content';

const Dialogs = () => {

    return(
        <div className={mod.dialogs}>
            <div className={mod.title}>DIALOGS</div>
            <Content
            />
        </div>
    );
};

export default Dialogs;