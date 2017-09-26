var React = require('react');
var {Link, IndexLink} = require('react-router');
var Modal = require('react-modal');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

var NavSideBar = React.createClass({
    getInitialState: function () {
        return this.state = {
            isActive: false
        }
    },
    componentWillMount() {
        Modal.setAppElement('body');
    },
    toggleModal: function () {
        this.setState({
            isActive: !this.state.isActive
        })
    },
    render: function () {
        var reviewData = this.props.reviewsJson;
        var total = 0;
        if (!jQuery.isEmptyObject(reviewData) || !typeof(reviewsJson) === "reviewData") {
            total = reviewData.reviews.length;
        }
        return (
            <div className="row">
                <div className="col-sm-12 side_nav">
                    <br/><br/>
                    <div className="logo_holder">
                        Logo
                    </div>
                    <br/><br/>
                    <button onClick={this.toggleModal} className="btn btn_primary send_invite">
                        <img src="images/airplane.png"/>&#8195;  Send Request
                    </button>

                    <br/>
                    <br/><br/>
                    <br/>
                    <ul className="nav nav-pills nav-stacked">
                        <li><Link to="/analytics" className="active"><img src="images/Analytics.png"/>&#8195; Analytics</Link>
                        </li>
                        <li><Link to="/review"><img src="images/Reviews.png"/>&#8195; Reviews <span
                            className="badge">{total}</span></Link></li>
                        <li><Link to={"/customer"}><img src="images/Customers.png"/>&#8195; Customers</Link></li>
                        <li><Link to={"/setting"}><img src="images/Settings.png"/>&#8195; Settings</Link></li>
                    </ul>
                </div>
                <Modal
                    isOpen={this.state.isActive}
                    onRequestClose={this.toggleModal}
                    contentLabel="Example Modal"
                    className="box">

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">

                            </div>
                            <div className="col-sm-4 box">
                                <div className="row">
                                    <div className="col-sm-2 col-md-1">
                                    </div>
                                    <div className="col-sm-8 col-md-10 box_inside">
                                        <form className="reviews_customer">
                                            Send a review request to
                                            <br/>
                                            your happy customers.
                                            <br/>
                                            <br/>
                                            <input type="text" placeholder="First Name" className="log_user"
                                                   autoFocus required/>

                                            <input type="tel" placeholder="Phone Number" className="log_pass"
                                                   required/>

                                            <button onClick={this.toggleModal} className="btn btn_primary btn_signin">
                                                <img src="images/airplane.png"/>&#8195;  Send Request
                                            </button>
                                        </form>
                                        <div className="col-sm-2 col-md-1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">

                            </div>
                        </div>
                    </div>

                </Modal>

            </div>

        );
    }
});

module.exports = NavSideBar;
