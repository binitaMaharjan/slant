var React = require('react');
var Review = React.createClass({
    render:function(){
        return (
            <div className="col-xs-8 col-sm-offset-4 dash_bar">
                <div className="all_body">
                    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
})

module.exports = Review;