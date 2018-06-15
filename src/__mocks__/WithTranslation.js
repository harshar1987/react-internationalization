/* eslint-disable */
const React = require("react");
const WithTranslation = require("../WithTranslation");

module.exports = {

    WithTranslation: props => Component => () => {
        const { ns, ...rest } = props;
        return (<Component {...rest} localize={text => text} />);
    }
}