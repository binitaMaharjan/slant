var React = require('react');
var LoginMessage = require('LoginMessage');
var LoginForm = React.createClass({
    getInitialState: function () {
        return  this.state = {
            fields: {},
            errors: {}
        }
       },

     handleChange(field, e){
        let fields = this.state.fields;
         fields[field] = e.target.value;
         this.setState({fields});
        },

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Email
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Email cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }
        //password
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Password cannot be empty";
        }

        if(typeof fields["password"] !== "undefined"){
            if(fields["password"].length<8){
                formIsValid = false;
                errors["password"] = "Cannot be less than 8 character";
            }

        }
        this.setState({errors: errors});
        return formIsValid;
    },

     onFormSubmit: function (e) {
         e.preventDefault();
         let fields = this.state.fields;
         var email = fields["email"];
         var password = fields["password"];
         if(this.handleValidation()){
             this.props.onLoginButtonClicked(email, password);
             return true;
         }else{
             return false;
         }
     },
    render:function () {
        return(

            <div className="container">
                <div className="row">
                    <div className="col-sm-4">

                    </div>
                    <div className="col-sm-4 box">
                        <div className="row">
                            <div className="col-sm-2 col-md-1">
                            </div>
                            <div className="col-sm-8 col-md-10 box_inside">
                                <form className="reviews_await" onSubmit={this.onFormSubmit}>
                                    Reviews await.
                                    <input type="text" placeholder="Username" id="log_user" className="log_user" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} autoFocus required/>
                                    <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                    <input type="password" placeholder="Password" id="log_pass" className="log_pass" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} required/>
                                    <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                                    <button className="btn btn-primary btn_signin">
                                        <img src="images/airplane.png"/>&#8195; Sign In
                                    </button>
                                </form>
                                <div className="col-sm-2 col-md-1">
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports=LoginForm;