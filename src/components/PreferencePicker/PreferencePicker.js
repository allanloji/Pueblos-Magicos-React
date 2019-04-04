import React, { Component } from 'react';
import './PreferencePicker.css';
import { preferences } from './PreferencesData';
import PreferenceCell from './PreferenceCell';

class PreferencePicker extends Component {

    constructor(props) {
        super(props)
        this.state = {selectedPreference: props.selectedPreference};
    }

    onClick(i) {
        this.setState({selectedPreference: i});
        this.props.onPreferencePicker(i);
    }

    render() {
        const { hasTitle, title, className, isSmall } = this.props;
        const { selectedPreference } = this.state;
        return (
            <div className={`preference-picker-container UniversLTPro-75Black ${className}`}>
                {
                    hasTitle === true ?
                        <span className="preference-picker-title">
                            {title}
                        </span>
                    :
                    ''
                }
                <div className="preference-list-container">
                    {
                        preferences.map((current, i) =>
                            <PreferenceCell key={i} preference={current}
                            isSelected={i === selectedPreference}
                            onClick={this.onClick.bind(this, i)}
                            isSmall={isSmall}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default PreferencePicker;
