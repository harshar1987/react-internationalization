import React from "react";
import WithTranslation from "../WithTranslation";
import PropTypes from "prop-types";

const Header = (props) => {
    return (<div>{props.localize(props.title)}</div>)
};

Header.propTypes = {
    title: PropTypes.string
};


export default WithTranslation("Header")(Header);