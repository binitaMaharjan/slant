var React = require('react');

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


var Customer = React.createClass({
    render:function(){
        return (

            <div>

                <div className="row">
                    <div className="col-sm-8 all_reviews">
                        <span className="all_review_head">Customers</span>
                        <form className="form_filter">
                            <input className="srch_button" name="Search" placeholder="Search"/>
                        </form>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 table_box">
                        <div class="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Phone</th>
                                    <th>Clicked Thru</th>
                                    <th>Recommended?</th>
                                    <th>Invited</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>John Otteson</td>
                                    <td>555-555-5555</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>08-08-17</td>
                                    <td><img src="images/CustomerInvite.png"/></td>
                                </tr>
                                <tr>
                                    <td>Dave Hodgkinson</td>
                                    <td>555-555-5555</td>
                                    <td>No</td>
                                    <td>-</td>
                                    <td>08-08-17</td>
                                    <td><img src="images/CustomerInvite.png"/></td>
                                </tr>
                                <tr>
                                    <td>Jeff Handy</td>
                                    <td>555-555-5555</td>
                                    <td>Yes</td>
                                    <td>No</td>
                                    <td>08-08-17</td>
                                    <td><img src="images/CustomerInvite.png"/></td>
                                </tr>
                                <tr>
                                    <td>Collin Hundley</td>
                                    <td>555-555-5555</td>
                                    <td>Yes</td>
                                    <td>-</td>
                                    <td>08-08-17</td>
                                    <td><img src="images/CustomerInvite.png"/></td>
                                </tr>
                                <tr>
                                    <td>Seth Jenkins</td>
                                    <td>555-555-5555</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>08-08-17</td>
                                    <td><img src="images/CustomerInvite.png"/></td>
                                </tr>
                                <tr>
                                    <td>Brandon</td>
                                    <td>555-555-5555</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>08-08-17</td>
                                    <td><img src="images/CustomerInvite.png"/></td>
                                </tr>
                                <tr>
                                    <td>Darren</td>
                                    <td>555-555-5555</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>08-08-17</td>
                                    <td><img src="images/CustomerInvite.png"/></td>
                                </tr>
                                <tr>
                                    <td>Robert Bobbington</td>
                                    <td>555-555-5555</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>08-08-17</td>
                                    <td><img src="images/CustomerInvite.png"/></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>

            </div>

        )
    }
});

module.exports = Customer;