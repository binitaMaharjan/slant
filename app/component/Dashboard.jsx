var React= require('react');
var Analytics = require('Analytics');
var NavSideBar = require('NavSideBar');

var Dashboard = React.createClass({
    render: function () {
        return (
            <div className="container anly_body">
                <div className="row">
                    <NavSideBar/>
                    <Analytics/>
                </div>
            </div>
        );
    }
});

module.exports= Dashboard;