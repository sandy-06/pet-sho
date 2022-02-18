import React from "react";

export default function Login() {
    return (
        <div class="uk-flex uk-flex-center uk-grid">
            <div class="uk-card uk-card-default">
                <div class="uk-child-width-1-4@s uk-flex uk-flex-center" uk-grid>
                    <div>
                        <div class="">
                            <h3 class="uk-card-title">Sign-up</h3>
                            <div class="uk-flex uk-flex-column">
                            <form id="signup">
                                <input placeholder="Username"></input>
                                <input placeholder="someone@email.com"></input>
                                <input placeholder="Password(Requirements)"></input>
                            </form>
                            </div>
                        </div>
                    </div>
                    <div>
                    <h3 class="uk-card-title">Login</h3>
                        <form id="login">
                            <input placeholder="Username"></input>
                            <input placeholder="someone@email.com"></input>
                            <input placeholder="Password(Requirements)"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}