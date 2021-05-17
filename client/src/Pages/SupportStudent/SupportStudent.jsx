import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './SupportStudent.module.css';

const SupportStudent = () => {
    const { id } = useParams();

    return (
        <div id={styles.container}>
            <div id={styles.content}>
                {id}
            </div>
        </div>
    )
};

export default SupportStudent;