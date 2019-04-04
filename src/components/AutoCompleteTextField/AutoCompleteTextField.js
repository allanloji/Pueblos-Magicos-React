import React, { Component } from 'react';
import './AutoCompleteTextField.css';
import SelectTextField from '../SelectTextField';

class AutoCompleteTextField extends Component {
    render() {
        const { title, placeholder, name, type, onChange,
            hasOptions, options } = this.props;
        return (
            <div className="auto-complete-textfield-container UniversLTPro-75Black">
                <span>
                    {title}
                </span>
                <br/>
                {
                    hasOptions === true ?
                    <SelectTextField
                    placeholder={placeholder}
                    onChange={onChange}
                    options={options}/>
                    :
                    <input className="auto-complete-textfield UniversLTPro-65Bold"
                     type={type === undefined ? 'text' : type} onChange={onChange}
                     name={name} placeholder={placeholder}/>

                }
            </div>
        );
    }
}

export default AutoCompleteTextField;
