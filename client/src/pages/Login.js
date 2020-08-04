import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.attemptLogin = this.attemptLogin.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    attemptLogin(event) {
        event.preventDefault();
        fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    render() {
        return (
            <section className="mt-5">
                <div className="container is-fluid">
                    <div className="columns is-centered">
                        <div className="column is-one-third">
                            <form>
                                <div className="columns">
                                    <div className="column">
                                        <div className="field">
                                            <label
                                                htmlFor="username"
                                                className="label"
                                            >
                                                Username
                                            </label>
                                            <div className="control">
                                                <input
                                                    className="input"
                                                    type="text"
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
                                                className="label"
                                                htmlFor="password"
                                            >
                                                Password
                                            </label>
                                            <div className="control">
                                                <input
                                                    className="input"
                                                    type="password"
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
                                        <button
                                            className="button is-link is-fullwidth"
                                            onClick={this.attemptLogin}
                                        >
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
