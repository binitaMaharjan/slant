// React Component
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Dashboard = require('Dashboard');
var Login = require('Login');
//Load foundation

function requireAuth(nextState, replace) {
    if (!localStorage.getItem('token')) {
        replace({
            pathname: '/login'
        })
    }
}

/*ReactDOM.render(
    <Dashboard/>,
        document.getElementById("app")

);*/
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard} onEnter={requireAuth}/>
        <Route path="login" component={Login}/>
    </Router>,
    document.getElementById('app')
);




