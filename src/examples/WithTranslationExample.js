import React from "react";
import Header from "./Header";

const WithTranslationExample = (props) => {
    return (
        <div>
            <Header title={props.headerTitle} />
        </div>
    );
};

WithTranslationExample.defaultProps = {
    headerTitle: "Movie Cards"
};

export default WithTranslationExample;