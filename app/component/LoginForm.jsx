var React = require('react');
var LoginMessage = require('LoginMessage');
var LoginForm = React.createClass({
     onFormSubmit: function (e) {
         e.preventDefault();
         var email = this.refs.email.value;
         var password = this.refs.password.value;
         if(email.length>0 && password.length>0){
             this.props.onLoginButtonClicked(email, password);
         }
     },
    render:function () {
        return(
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <form className="v_center" onSubmit={this.onFormSubmit}>
                            <div className="box">
                                <div className="row">
                                    <div className="col-md-4 col-md-offset-4 box_inside">
                                        <div className="row">
                                            <div className="col-md-4 col-md-offset-4 reviews_await">
                                                Reviews await.
                                            </div>
                                        </div>
                                        <br/><br/>
                                        <input type="text" placeholder="Username" id="log_user" ref="email" className="log_user" autoFocus/>
                                        <input type="password" placeholder="Password" id="log_pass" ref="password" className="log_pass"/>
                                        <button className="btn btn-primary btn_signin">
                                            <img src="./../images/airplane.png"/>&#8195; Sign In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

        );
    }
});

module.exports=LoginForm;