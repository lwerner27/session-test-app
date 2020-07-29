import React from 'react';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            username: null,
            password: null,
            confirmPassword: null,
            location: null,
            role: null,
        };

        // Binds method to class
        this.handleChange = this.handleChange.bind(this);
        this.checkForNullValues = this.checkForNullValues.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.submitRegistration = this.submitRegistration.bind(this);
    }

    // Handles Changes to the form inputs
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    checkForNullValues() {
        if (this.state.firstName === null || '') {
            return 'Please enter a value for the first name field.';
        } else if (this.state.lastName === null || '') {
            return 'Please enter a value for the last name field.';
        } else if (this.state.username === null || '') {
            return 'Please enter a value for the username field.';
        } else if (this.state.password === null || '') {
            return 'Please enter a value for the password field.';
        } else if (this.state.confirmPassword === null || '') {
            return 'Please enter a value for the confirm password field.';
        } else if (this.state.location === null) {
            return 'Please select a location.';
        } else if (this.state.role === null) {
            return 'Please select a role.';
        } else {
            return false;
        }
    }

    checkPassword() {
        if (this.state.password.length < 8) {
            return 'Please choose a password that is at least 8 characters.';
        }

        if (this.state.password !== this.state.confirmPassword) {
            return 'Passwords do not match.';
        }

        return false;
    }

    submitRegistration(event) {
        event.preventDefault();
        let result = this.checkForNullValues();
        if (result) {
            alert(result);
            return;
        }

        result = this.checkPassword();
        if (result) {
            alert(result);
            return;
        }

        console.log('Registration Submitted');
    }

    render() {
        return (
            <div className='container'>
                <div className='row mt-5 justify-content-center'>
                    <div className='col-md-6 col-sm-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <form>
                                    <div className='form-row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label htmlFor='fistName'>
                                                First Name:
                                            </label>
                                            <input
                                                type='text'
                                                id='firstName'
                                                className='form-control'
                                                name='firstName'
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label htmlFor='lastName'>
                                                Last Name:
                                            </label>
                                            <input
                                                className='form-control'
                                                type='text'
                                                name='lastName'
                                                id='lastName'
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className='form-group col'>
                                            <label htmlFor='username'>
                                                Username:
                                            </label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                name='username'
                                                id='username'
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className='form-group col'>
                                            <label htmlFor='password'>
                                                Password:
                                            </label>
                                            <input
                                                type='password'
                                                className='form-control'
                                                name='password'
                                                id='password'
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className='form-group col'>
                                            <label htmlFor='confirmPassword'>
                                                Confirm Password:
                                            </label>
                                            <input
                                                type='password'
                                                className='form-control'
                                                name='confirmPassword'
                                                id='confirmPassword'
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className='form-group col'>
                                            <label htmlFor='location'>
                                                Location:
                                            </label>
                                            <select
                                                id='location'
                                                name='location'
                                                className='form-control'
                                                defaultValue='Choose One...'
                                                onChange={this.handleChange}
                                            >
                                                <option disabled>
                                                    Choose One...
                                                </option>
                                                <option value='MEL'>MEL</option>
                                                <option value='KEL'>KEL</option>
                                                <option value='PEL'>PEL</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className='form-group col'>
                                            <label htmlFor='role'>Role</label>
                                            <select
                                                id='role'
                                                name='role'
                                                className='form-control'
                                                defaultValue='Choose One...'
                                                onChange={this.handleChange}
                                            >
                                                <option disabled>
                                                    Choose One...
                                                </option>
                                                <option value='Administrator'>
                                                    Administrator
                                                </option>
                                                <option value='Standard User'>
                                                    Standard User
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        onClick={this.submitRegistration}
                                        className='btn btn-primary btn-block'
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;
