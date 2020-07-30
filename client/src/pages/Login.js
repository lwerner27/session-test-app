import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        };
    }

    render() {
        return (
            <section className='mt-5'>
                <div className='container is-fluid'>
                    <div className='columns is-centered'>
                        <div className='column is-one-third'>
                            <form>
                                <div className='columns'>
                                    <div className='column'>
                                        <div className='field'>
                                            <label
                                                htmlFor='username'
                                                className='label'
                                            >
                                                Username
                                            </label>
                                            <div className='control'>
                                                <input
                                                    className='input'
                                                    type='text'
                                                    name='username'
                                                    id='username'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='columns'>
                                    <div className='column'>
                                        <div className='field'>
                                            <label
                                                className='label'
                                                htmlFor='password'
                                            >
                                                Password
                                            </label>
                                            <div className='control'>
                                                <input
                                                    className='input'
                                                    type='password'
                                                    name='password'
                                                    id='password'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='columns'>
                                    <div className='column'>
                                        <button className='button is-link'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Login);
