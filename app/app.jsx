// React Component
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory,browserHistory} = require('react-router');
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
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path={"/"} component={Dashboard} onEnter={requireAuth}/>
        <Route path={"/login"} component={Login}/>
    </Router>,
    document.getElementById('app')
);




