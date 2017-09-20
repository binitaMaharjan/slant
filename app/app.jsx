// React Component
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory,browserHistory} = require('react-router');
var Dashboard = require('Dashboard');
var Login = require('Login');
var Review = require('Review');
var Analytics = require('Analytics');
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
    <Router history={browserHistory}>
        <Route path={"/"} component={Dashboard} onEnter={requireAuth}>
            <IndexRoute component={Analytics}/>
            <Route component={Analytics} path="analytics" pattern="/analytics"  />
            <Route component={Review} path="review" pattern="/review"  />
            {/*<Route exactly component={Customer} pattern="/path2" />*/}
            {/*<Route exactly component={Page3} pattern="/path3" />*/}
        </Route>
        <Route path={"/login"} component={Login}/>

    </Router>,
    document.getElementById('app')
);




