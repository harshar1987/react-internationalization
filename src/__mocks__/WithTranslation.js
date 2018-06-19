/* eslint-disable */
const React = require("react");
let WithTranslation = require("../WithTranslation");

WithTranslation = props => Component => {
    
    const ns = props.ns;
    const WrappedComponent = props => {
        return (<Component {...props} localize={text => text} />);
    }

    return WrappedComponent;
}

export default WithTranslation;


