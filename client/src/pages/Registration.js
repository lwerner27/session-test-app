import React from "react";
import { withRouter } from "react-router-dom";

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
        console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    }

    checkForNullValues() {
        if (this.state.firstName === null || "") {
            return "Please enter a value for the first name field.";
        } else if (this.state.lastName === null || "") {
            return "Please enter a value for the last name field.";
        } else if (this.state.username === null || "") {
            return "Please enter a value for the username field.";
        } else if (this.state.password === null || "") {
            return "Please enter a value for the password field.";
        } else if (this.state.confirmPassword === null || "") {
            return "Please enter a value for the confirm password field.";
        } else if (this.state.location === null) {
            return "Please select a location.";
        } else if (this.state.role === null) {
            return "Please select a role.";
        } else {
            return false;
        }
    }

    checkPassword() {
        if (this.state.password.length < 8) {
            return "Please choose a password that is at least 8 characters.";
        }

        if (this.state.password !== this.state.confirmPassword) {
            return "Passwords do not match.";
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

        fetch("/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    alert(res.msg);
                    this.props.history.push("/login");
                } else {
                    alert(res.msg);
                }
            });
    }

    render() {
        return (
            <div className="container is-fluid">
                <div className="columns mt-5 is-centered">
                    <div className="column is-half">
                        <form>
                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <label
                                            htmlFor="firstName"
                                            className="label"
                                        >
                                            First Name:
                                        </label>
                                        <div className="control">
                                            <input
                                                type="text"
                                                className="input"
                                                name="firstName"
                                                id="firstName"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="field">
                                        <label
                                            htmlFor="lastName"
                                            className="label"
                                        >
                                            Last Name:
                                        </label>
                                        <div className="control">
                                            <input
                                                type="text"
                                                className="input"
                                                name="lastName"
                                                id="lastName"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <label
                                            htmlFor="username"
                                            className="label"
                                        >
                                            Username:
                                        </label>
                                        <div className="control">
                                            <input
                                                type="text"
                                                className="input"
                                                name="username"
                                                id="username"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <label
                                            htmlFor="password"
                                            className="label"
                                        >
                                            Password:
                                        </label>
                                        <div className="control">
                                            <input
                                                type="password"
                                                className="input"
                                                name="password"
                                                id="password"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <label
                                            htmlFor="confirmPassword"
                                            className="label"
                                        >
                                            Confirm Password:
                                        </label>
                                        <div className="control">
                                            <input
                                                type="password"
                                                className="input"
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <label
                                            htmlFor="location"
                                            className="label"
                                        >
                                            Location
                                        </label>
                                        <div className="select is-fullwidth">
                                            <select
                                                defaultValue="Choose Location..."
                                                name="location"
                                                id="location"
                                                onChange={this.handleChange}
                                            >
                                                <option
                                                    disabled
                                                    value="Choose Location..."
                                                >
                                                    Choose Location...
                                                </option>
                                                <option value="KEL">KEL</option>
                                                <option value="MEL">MEL</option>
                                                <option value="PEL">PEL</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <label htmlFor="role" className="label">
                                            Role:
                                        </label>
                                        <div className="select is-fullwidth">
                                            <select
                                                defaultValue="Choose Role..."
                                                name="role"
                                                id="role"
                                                onChange={this.handleChange}
                                            >
                                                <option
                                                    disabled
                                                    value="Choose Role..."
                                                >
                                                    Choose Role...
                                                </option>
                                                <option value="admin">
                                                    Admin
                                                </option>
                                                <option value="Standard User">
                                                    Standard User
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <button
                                        className="button is-link is-fullwidth"
                                        onClick={this.submitRegistration}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Registration);
