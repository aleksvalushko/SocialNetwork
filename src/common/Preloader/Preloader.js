import React from 'react';
import preloader from '../../images/Preloader.png';
import mod from './Preloader.module.sass';

let Preloader = () => {
    return <div className={mod.preloader}>
        <img src={preloader} alt="Preloader"/>
    </div>
};

export default Preloader;