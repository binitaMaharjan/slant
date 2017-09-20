var React = require('react');
var LoginForm = require('LoginForm');
var LoginMessage = require('LoginMessage');
var Cookies = require('universal-cookie');
var {Route, Router, IndexRoute, hashHistory,browserHistory} = require('react-router');
var loginApi = require('loginApi');
var getCurrentUser = require('getCurrentUser');
const cookies = new Cookies();
var Login = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
            errorMessage: undefined,
            access_token: ''
        }
    },
    onLoginButtonClicked: function (email, password) {
        localStorage.removeItem('token');
        var that = this;
        this.setState({
            isLoading: true,
            userData: null,
            errorMessage: undefined,
            access_token: undefined,
        });
        loginApi.getLoggedIn(email, password).then(function (access_token) {
            if(access_token){
                getCurrentUser.getCurrentUser().then(function (res) {
                    var  result = JSON.stringify(res.data);
                    cookies.set('user', result, {path: '/'});
                    localStorage.setItem("user", result);

                });
            }

            that.setState({
                access_token: access_token,
                isLoading: false
            });
            cookies.set('access_token', access_token, {path: '/'});

            localStorage.setItem("token", access_token);
            browserHistory.push("/");
        }, function (e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        })

    },
    render: function () {
        var {isLoading, access_token, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching User...</h3>;
            } else if (access_token) {
                localStorage.setItem("token", access_token);
                return;
            } else if (errorMessage) {
                return <LoginMessage checkError={errorMessage}/>
            }
        }

        return (
            <div className="container log_body">
                <LoginForm onLoginButtonClicked={this.onLoginButtonClicked}/>
                {renderMessage()}
            </div>
        )
    }
})

module.exports = Login;