import React, { Component } from 'react';
import './PreferenceCell.css';

class PreferenceCell extends Component {
    render() {
        const { preference, isSelected, isSmall, className, onClick } = this.props;
        return (
            <div className={`preference-cell-container UniversLTPro-75Black
                ${className}
                ${isSmall === true ? 'small' : ''}`}
                onClick={onClick}>
                <div className={`preference-cell-content-container
                    ${isSelected === true ? 'selected' : ''}
                    ${isSmall === true ? 'small' : ''}`}>
                    <img className="preference-cell-icon"
                    src={isSelected === true ? preference.selectedIcon
                    : preference.icon}
                    alt={preference.alt}/>
                </div>
                {
                    preference.title.split("\n").map((current, i) =>
                        <div key={i}>
                            {
                                i > 0 ?
                                <span className="preference-cell-title no-top-margin UniversLTPro-65Bold">
                                    {current}
                                </span>
                                :
                                <span className="preference-cell-title UniversLTPro-65Bold">
                                    {current}
                                </span>
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}

export default PreferenceCell;
