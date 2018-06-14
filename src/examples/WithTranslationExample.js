import React from "react"
import WithTranslation from "../WithTranslation";

console.log(typeof WithTranslation);
const Header = (props) => (<div>{props.localize(props.title)}</div>);
const WithTranslationComp = WithTranslation({ns: "Header", title: "header"})(Header);

export default WithTranslationComp;