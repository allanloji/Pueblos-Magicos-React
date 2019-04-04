import React, { Component } from 'react';
import './MainForm.css';
import { withRouter } from 'react-router-dom';
import CompletionStepper from '../CompletionStepper';
import AutoCompleteTextField from '../AutoCompleteTextField';
import Button from '../Button';
import PreferencePicker from '../PreferencePicker';
import { towns, cylindersOptions, cylinders4, cylinders6, cylinders8, cylinders4Options, cylinders6Options, cylinders8Options } from './MainFormData';

class MainForm extends Component {

    constructor(props) {
        super(props)
        this.state = {currentStep: 1, originId: undefined,
            destinationId: undefined, numberOfCylinders: undefined,
            engineSize: undefined, preference: undefined};
        this.onClick = this.onClick.bind(this);
        this.onOriginChange = this.onOriginChange.bind(this);
        this.onDestinationChange = this.onDestinationChange.bind(this);
        this.onCylindersChange = this.onCylindersChange.bind(this);
        this.onLitersChange = this.onLitersChange.bind(this);
        this.onPreferencePicker = this.onPreferencePicker.bind(this);
        this.onSeeRoute = this.onSeeRoute.bind(this);
        this.onStepperClick = this.onStepperClick.bind(this);
        this.validateFirstStep = this.validateFirstStep.bind(this);
        this.validateSecondStep = this.validateSecondStep.bind(this);
    }

    onClick(event) {
        event.preventDefault()
        this.setState({currentStep: Math.trunc(this.state.currentStep) + 1});
    }

    onPreferencePicker(i) {
        this.setState({currentStep: 3.5, preference: i})
    }

    onSeeRoute(event) {
        event.preventDefault();
        let mileageArray = [];
        switch (this.state.numberOfCylinders) {
            case 4:
                mileageArray = cylinders4.filter(current => current.motor
                    === this.state.engineSize);
                break;
            case 6:
                mileageArray = cylinders6.filter(current => current.motor
                    === this.state.engineSize);
                break;
            case 8:
                mileageArray = cylinders8.filter(current => current.motor
                    === this.state.engineSize);
                break;
            default:
                break;
        }
        let params = new URLSearchParams()
        params.append("origin", this.state.originId)
        params.append("destination", this.state.destinationId)
        if (mileageArray.length > 0){
            params.append("kml", mileageArray[0].kl)
        }
        params.append("preference", this.state.preference)
        this.props.history.push(`/map?${params.toString()}`);
    }

    onStepperClick(i) {
        if (i < Math.trunc(this.state.currentStep)) {
            this.setState({currentStep: i})
        }
    }

    onOriginChange(value) {
        this.setState({originId: value}, () => this.validateFirstStep())
        this.validateFirstStep()
    }

    onDestinationChange(value) {
        this.setState({destinationId: value}, () => this.validateFirstStep())
    }

    validateFirstStep() {
        if (this.state.originId !== undefined
            && this.state.destinationId !== undefined) {
            this.setState({currentStep: 1.5})
        } else {
            this.setState({currentStep: 1})
        }
    }

    onCylindersChange(value) {
        this.setState({numberOfCylinders: value}, () => this.validateSecondStep());
    }

    validateSecondStep() {
        if (this.state.numberOfCylinders !== undefined
            && this.state.numberOfCylinders > 0) {
            this.setState({currentStep: 2.5});
        } else {
            this.setState({currentStep: 2});
        }
    }

    onLitersChange(value) {
        this.setState({engineSize: value}, () => this.validateSecondStep());
    }

    render() {
        const { currentStep } = this.state;
        return (
            <div className="main-form-container">
                <div className="main-form-wrapper UniversLTPro-75Black">
                    <span className="main-form-instructions">
                        Descubre en sólo 3 pasos la mejor ruta para descubrir
                        los 111 pueblos mágicos de la República Mexicana.
                    </span>
                    <CompletionStepper currentStep={currentStep}
                    onClick={this.onStepperClick}/>
                    <form>
                        {
                            currentStep === 1 ?
                                <div>
                                    <AutoCompleteTextField title="Pueblo Inicial"
                                    placeholder="Lugar dónde desea comenzar su aventura"
                                    name="originTown"
                                    hasOptions={true}
                                    options={towns}
                                    onChange={this.onOriginChange}
                                    value={this.state.originTown}/>
                                    <AutoCompleteTextField title="Pueblo Final"
                                    placeholder="Lugar dónde desea terminar su aventura"
                                    hasOptions={true}
                                    options={towns}
                                    onChange={this.onDestinationChange}/>
                                </div>
                            :
                            currentStep === 1.5 ?
                                <div>
                                    <AutoCompleteTextField title="Pueblo Inicial"
                                    placeholder="Lugar dónde desea comenzar su aventura"
                                    name="originTown"
                                    hasOptions={true}
                                    options={towns}
                                    onChange={this.onOriginChange}
                                    value={this.state.originTown}/>
                                    <AutoCompleteTextField title="Pueblo Final"
                                    placeholder="Lugar dónde desea terminar su aventura"
                                    hasOptions={true}
                                    options={towns}
                                    onChange={this.onDestinationChange}/>
                                    <Button title="Siguiente" onClick={this.onClick}
                                    name="destinationTown"/>
                                </div>
                            :
                            currentStep === 2 ?
                                <div>
                                    <AutoCompleteTextField
                                    title="¿Cuántos cilindros tiene tu auto?"
                                    placeholder="Cilindraje del auto en el que viajarás"
                                    onChange={this.onCylindersChange}
                                    name="cylinderCount"
                                    hasOptions={true}
                                    options={cylindersOptions}/>
                                </div>
                            :
                            currentStep === 2.5 ?
                                <div>
                                    <AutoCompleteTextField
                                    title="¿Cuántos cilindros tiene tu auto?"
                                    placeholder="Cilindraje del auto en el que viajarás"
                                    onChange={this.onCylindersChange}
                                    name="cylinderCount"
                                    hasOptions={true}
                                    options={cylindersOptions}/>
                                    <AutoCompleteTextField
                                    title="¿De cuántos litros es el motor de tu auto?"
                                    placeholder="Litros del motor (1.4L, 2.0L, etc.)"
                                    name="engineSize"
                                    onChange={this.onLitersChange}
                                    hasOptions={true}
                                    options={
                                        this.state.numberOfCylinders === 4 ?
                                        cylinders4Options
                                        :
                                        this.state.numberOfCylinders === 6 ?
                                        cylinders6Options
                                        :
                                        this.state.numberOfCylinders === 8 ?
                                        cylinders8Options
                                        :
                                        ''
                                    }/>
                                    {
                                        this.state.numberOfCylinders !== undefined
                                        && this.state.engineSize !== undefined ?
                                        <Button title="Siguiente" onClick={this.onClick}
                                        name="destinationTown"/>
                                        :
                                        ''
                                    }
                                </div>
                            :
                            currentStep === 3 ?
                                <div>
                                    <PreferencePicker hasTitle={true}
                                    title="¿Qué te importa más?"
                                    onPreferencePicker={this.onPreferencePicker}/>
                                </div>
                            :
                            currentStep === 3.5 ?
                                <div>
                                    <PreferencePicker hasTitle={true}
                                    title="¿Qué te importa más?"
                                    onPreferencePicker={this.onPreferencePicker}/>
                                    <Button title="Ver Ruta" onClick={this.onSeeRoute}
                                    name="destinationTown"/>
                                </div>
                            :
                            ''
                        }
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(MainForm);
