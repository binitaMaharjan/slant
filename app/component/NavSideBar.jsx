var React = require('react');
var {Link, IndexLink} = require('react-router');
var Modal = require('react-modal');
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
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
                    <Modal
                        isOpen={this.state.isActive}
                        style={customStyles}
                        onRequestClose={this.toggleModal}
                        contentLabel="Example Modal">Hello From Modal
                        <button onClick={this.toggleModal} className="btn btn_primary send_invite">
                            <img src="images/airplane.png"/>&#8195;  Send Request
                        </button>
                    </Modal>

                    <br/>
                    <br/><br/>
                    <br/>
                    <ul className="nav nav-pills nav-stacked">
                        <li><Link to="/analytics" className="active"><img src="images/Analytics.png"/>&#8195; Analytics</Link>
                        </li>
                        <li><Link to="/review"><img src="images/Reviews.png"/>&#8195; Reviews <span
                            className="badge">12</span></Link></li>
                        <li><Link to={"/customer"}><img src="images/Customers.png"/>&#8195; Customers</Link></li>
                        <li><Link to={"/setting"}><img src="images/Settings.png"/>&#8195; Settings</Link></li>
                    </ul>
                </div>
            </div>

        );
    }
});

module.exports = NavSideBar;
