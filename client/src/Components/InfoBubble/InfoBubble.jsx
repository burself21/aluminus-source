import React from 'react';

const InfoBubble = (props) => {

    const styles = {
        root: {
            borderRadius: "10px",
            border: "2px solid #AFAFAF",
            fontSize: props.fontSize
        }
    }
    /**
     * Takes the following props: 
     * 1. text
     * 2. fontSize
     */
    return (
        <div style={styles.root}> 
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default InfoBubble;