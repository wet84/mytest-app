import React from 'react';

function Input(){
    return (
        <div className="ui action input">
            <input type="text" placeholder="Поиск..."></input>
            <button className="ui button">Поиск</button>
        </div>
    );
}

export default Input;