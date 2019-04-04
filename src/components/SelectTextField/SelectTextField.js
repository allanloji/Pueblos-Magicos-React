import React, { Component } from 'react';
import './SelectTextField.css';
import Select from 'react-select';

class SelectTextField extends Component {

    constructor(props) {
        super(props)
        this.state = {selectedOption: ''}
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.placeholder !== this.props.placeholder) {
            this.setState({selectedOption: ''})
        }

    }

    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      this.props.onChange(selectedOption.value)
    }

    render() {
        const { selectedOption } = this.state;
        const { placeholder, options } = this.props;
        const colourStyles = {
          option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
              ...styles,
              fontFamily: "UniversLTPro-65Bold",
              fontSize: "1.125rem",
              backgroundColor: isDisabled
                ? null
                : isSelected ? "#FF3366" : isFocused ? "rgba(255, 51, 102, 0.2)" : null,
              color: isDisabled ? "#ccc" : isSelected ? "white" : null,
              cursor: isDisabled ? "not-allowed" : "default",
              ":active": {
                backgroundColor: "rgba(255, 51, 102, 0.2)"
              },
            };
          },
          noOptionsMessage: styles => ({
            ...styles,
            fontFamily: "UniversLTPro-65Bold",
            fontSize: "1.125rem",
          }),
          input: styles => ({
            ...styles,
            fontFamily: "UniversLTPro-65Bold",
            fontSize: "1.125rem",
            paddingTop: "0.675rem",
            paddingBottom: "0.55rem",
          }),
          placeholder: styles => ({
            ...styles,
            fontFamily: "UniversLTPro-65Bold",
            fontSize: "1.125rem",
            color: "#A9A9A9",
            paddingTop: "0.675rem",
            paddingBottom: "0.55rem",
          }),
          singleValue: styles => ({
            ...styles,
            fontFamily: "UniversLTPro-65Bold",
            fontSize: "1.125rem",
            paddingTop: "0.675rem",
            paddingBottom: "0.55rem",
          }),
          control: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                fontFamily: "UniversLTPro-65Bold",
                fontSize: "1.125rem",
                borderRadius: "0.3125rem",
                borderWidth: "0.1875rem",
                height: "2.75rem",
                width: "calc(100% - (0.625rem * 2))",
                borderColor: isSelected ? "#FF3366" : isFocused ? "#FF3366" : "black",
                boxShadow: isFocused ? "0px 0px 0px 1px #FF3366" : "none",
                marginTop: "0.625rem",
                "&:hover": {
                    borderColor: "#FF3366",
                },
                ":focus": {
                    outline: "none"
                },
            };
          },
        };
        return (
          <Select
            className="custom-textfield"
            name="form-field-name"
            value={selectedOption}
            placeholder={placeholder}
            onChange={this.handleChange}
            styles={colourStyles}
            options={options}
          />
        );
    }
}

export default SelectTextField;
