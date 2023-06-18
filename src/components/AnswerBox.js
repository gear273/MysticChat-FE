import React from 'react';

const AnswerBox = ({ answer }) => {
    return (
        <textarea 
            style={{
                width: '695px',
                height: '162px',
                backgroundColor: 'rgb(176, 156, 217)'
            }} 
            readOnly
            value={answer}
        />
    );
}

export default AnswerBox;
