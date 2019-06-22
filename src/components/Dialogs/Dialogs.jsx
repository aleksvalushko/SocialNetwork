import React from 'react';
import mod from './Dialogs.module.css';
import Content from './Content/Content';
import PropTypes from 'prop-types';

const Dialogs = ({dialogs, dispatch}) => {

    return(
        <div className={mod.dialogs}>
            <div className={mod.title}>DIALOGS</div>
            <Content dialogs={dialogs} dispatch={dispatch}/>
        </div>
    );
};

export default Dialogs;

Dialogs.propTypes = {
};