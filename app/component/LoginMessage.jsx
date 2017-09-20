var React = require('react');

var LoginMessage = ({checkError})=>{
    return (
        <h3 className="text-center">{checkError}</h3>
    )
};
module.exports = LoginMessage;