var React= require('react');
var Analytics = require('Analytics');
var NavSideBar = require('NavSideBar');
var TopNav = require('TopNav');

var Dashboard = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-2">
                    <NavSideBar/>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <TopNav/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 bg_blu">
                            <Analytics/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports= Dashboard;