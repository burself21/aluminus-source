import React from 'react';

import styles from './GraphicSection.module.css';

import graphic from './graphic.svg';

const GraphicSection = () => {

    return (
        <div id={styles.container}>
            <div id={styles.content}>
                <h2 id={styles.header}>A small support from you goes a long way for students in need</h2>
                <div id={styles.img_container}>
                    <img src={graphic} alt="" />
                </div>
                <p id={styles.caption}>
                    Whether you are giving 5 dollars a month or 50 dollars, Aluminus makes it possible for your support to provide value 
                    by pooling together monthly support from many different alumni provided to each student. This way, the help students get really adds up!
                </p>
            </div>
        </div>
    )

}

export default GraphicSection;