import React from "react";
import ReactDOM from "react-dom";
import WithTranslationExample from "../examples/WithTranslationExample";

describe("WithTranslation Higher Order component", () => {

    it("renders without error", () => {
        const app = document.createElement("div");
        ReactDOM.render(<WithTranslationExample />, app);
        ReactDOM.unmountComponentAtNode(app);
    });
});