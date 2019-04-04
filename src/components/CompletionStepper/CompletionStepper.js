import React, { Component } from 'react';
import './CompletionStepper.css';

class CompletionStepper extends Component {
    render() {
        const { currentStep, onClick } = this.props;
        return (
            <div className="completion-stepper-container UniversLTPro-75Black">
            {
                currentStep >= 1 && currentStep < 2 ?
                <div className="completion-stepper-wrapper">
                    <div className="completion-circle current"
                    onClick={onClick.bind(this, 1)}>
                        1
                    </div>
                    <div className="completion-line pending"/>
                    <div className="completion-circle pending"
                    onClick={onClick.bind(this, 2)}>
                        2
                    </div>
                    <div className="completion-line pending"/>
                    <div className="completion-circle pending"
                    onClick={onClick.bind(this, 3)}>
                        3
                    </div>
                </div>
                :
                currentStep >= 2 && currentStep < 3 ?
                <div className="completion-stepper-wrapper">
                    <div className="completion-circle complete"
                    onClick={onClick.bind(this, 1)}>
                        1
                    </div>
                    <div className="completion-line complete"/>
                    <div className="completion-circle current"
                    onClick={onClick.bind(this, 2)}>
                        2
                    </div>
                    <div className="completion-line pending"/>
                    <div className="completion-circle pending"
                    onClick={onClick.bind(this, 3)}>
                        3
                    </div>
                </div>
                :
                currentStep >= 3 && currentStep < 4 ?
                <div className="completion-stepper-wrapper">
                    <div className="completion-circle complete"
                    onClick={onClick.bind(this, 1)}>
                        1
                    </div>
                    <div className="completion-line complete"/>
                    <div className="completion-circle complete"
                    onClick={onClick.bind(this, 2)}>
                        2
                    </div>
                    <div className="completion-line complete"/>
                    <div className="completion-circle current"
                    onClick={onClick.bind(this, 3)}>
                        3
                    </div>
                </div>
                :
                <div className="completion-stepper-wrapper">
                    <div className="completion-circle complete"
                    onClick={onClick.bind(this, 1)}>
                        1
                    </div>
                    <div className="completion-line complete"/>
                    <div className="completion-circle complete"
                    onClick={onClick.bind(this, 2)}>
                        2
                    </div>
                    <div className="completion-line complete"/>
                    <div className="completion-circle complete"
                    onClick={onClick.bind(this, 3)}>
                        3
                    </div>
                </div>
            }
            </div>
        );
    }
}

export default CompletionStepper;
