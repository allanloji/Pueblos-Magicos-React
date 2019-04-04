import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        const { title, onClick } = this.props;
        return (
            <div className="button-container UniversLTPro-75Black">
                <input className="button UniversLTPro-75Black"
                type="submit" value={title} onClick={onClick}/>
            </div>
        );
    }
}

export default Button;
