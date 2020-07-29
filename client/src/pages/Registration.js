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
    }

    // Handles Changes to the form inputs
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value }, () => {
            console.log(this.state);
        });
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
                                    <button className='btn btn-primary btn-block'>
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
