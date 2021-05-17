import React from 'react';

import styles from './AdjustSupport.module.css';

import { makeStyles } from '@material-ui/core/styles';

const AdjustSupport = () => {
    console.log('wtf bro');
    return (
        <div id={styles.container}>
            <div id={styles.content}>
                <h1 style={{width: "100%", textAlign: "center"}}>This will be the adjust support page.</h1>
            </div>
        </div>
    )
}

export default AdjustSupport;