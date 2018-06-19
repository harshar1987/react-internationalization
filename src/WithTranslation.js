import React from "react";
import { I18n } from "react-i18next";
import * as i18n from "./internalization/i18n";

const  getNamespaceFromProps = (props) => {
  return props.ns === undefined ? props : props.ns;
}

const WithTranslation = (props) => Component => {
 
  const namespc = getNamespaceFromProps(props);
  const WrappedComponent = props => {
    
    return (
      <I18n ns={namespc}>{(t, { i18n }) => <Component {...props} localize={t} />}</I18n>
    );
  };

  return WrappedComponent;
};

export default WithTranslation;
