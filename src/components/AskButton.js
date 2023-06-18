import React from 'react';

const AskButton = ({ onClick }) => {
    return (
        <button 
            style={{
                width: '600px',
                height: '48px',
            }} 
            onClick={onClick}
        >
            Preguntar
        </button>
    );
}

export default AskButton;
