var React = require('react');
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
var Review = React.createClass({
    render:function(){
        return (
            <div className="col-xs-8 col-sm-offset-4 dash_bar">
                <div className="all_body">
                    <Tabs>
                        <TabList>
                            <Tab>Title 1</Tab>
                            <Tab>Title 2</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }
})

module.exports = Review;