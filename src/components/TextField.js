import React, { Component } from 'react';
import './TextField.css';

class TextField extends Component {

    constructor(props) {
        super(props);
        this.state = {focusToggle: 'not-focused'}
        this.onInputFocus = this.onInputFocus.bind(this);
    }

    getInitialState() {

    }

    onInputFocus() {
        var textField = this.refs[this.props.refName];

        if (this.state.focusToggle === 'not-focused') {
            this.setState({'focusToggle': 'focused'});
        } else if (textField.value.length === 0) {
            this.setState({'focusToggle': 'not-focused'});
        }
    }

    render() {
        let inputToDisplay;

        if (this.props.inputType === 'textfield') {
            inputToDisplay = (
                <input id={this.props.id} className="TextField-inputText" type={this.props.textType} pattern={this.props.pattern} ref={this.props.refName} onFocus={this.onInputFocus} onBlur={this.onInputFocus} onChange={this.props.onChange} required />
            )
        } else {
            inputToDisplay = (
                <textarea id={this.props.id} ref={this.props.refName} onFocus={this.onInputFocus} onBlur={this.onInputFocus} onChange={this.props.onChange} />
            )
        }

        return (
            <div className={[this.state.focusToggle, 'TextField-inputBlock', 'TextField'].join(' ')}>
                <label className={[this.state.focusToggle, 'TextField-inputLabel'].join(' ')}>{this.props.fieldName}</label>
                {inputToDisplay}
            </div>
        );
    }
}

export default TextField;
