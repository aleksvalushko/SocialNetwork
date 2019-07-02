import React from 'react';
import mod from './Dialogs.module.sass';
import Content from './Content/Content';
import PropTypes from 'prop-types';

const Dialogs = () => {

    return(
        <div className={mod.dialogs}>
            <div className={mod.title}>DIALOGS</div>
            <Content
                // store={store} dialogs={dialogs}
            />
        </div>
    );
};

export default Dialogs;

Dialogs.propTypes = {
};