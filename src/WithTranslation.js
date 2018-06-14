import React from "react";
import { I18n } from "react-i18next";
import "./internalization/i18n";

const WithTranslation = props => Component => () => {
  const { ns, ...rest } = props;

  return (
    <I18n ns={ns}>{(t, { i18n }) => <Component {...rest} localize={t} />}</I18n>
  );
};

export default WithTranslation;
