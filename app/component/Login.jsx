var React = require('react');
var LoginForm = require('LoginForm');
var LoginMessage = require('LoginMessage');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var loginApi = require('loginApi');

var Login = React.createClass({
    getInitialState: function () {
        return{
            isLoading:false,
            errorMessage:undefined,
            access_token: ''
        }
    },
    onLoginButtonClicked: function (email, password) {
        localStorage.removeItem('token');
        var that = this;
        this.setState({
            isLoading:true,
            errorMessage: undefined,
            access_token: undefined,
        });
        loginApi.getLoggedIn(email, password).then(function (access_token) {
            that.setState({
                access_token:access_token,
                isLoading:false
            })
            localStorage.setItem("token",access_token);
            hashHistory.push("/");
        },function (e) {
            that.setState({
                isLoading:false,
                errorMessage:e.message
            });
        })

    },
    render:function () {
        var {isLoading, access_token, errorMessage} = this.state;
        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching User...</h3>;
            }else if(access_token){

                return;
            }else if(errorMessage){
                return <LoginMessage checkError={errorMessage}/>
            }
        }
        return(
            <div className="container log_body">
                <LoginForm onLoginButtonClicked={this.onLoginButtonClicked}/>
                {renderMessage()}
            </div>
        )
    }
})

module.exports = Login;