This package uses [i18next](https://www.i18next.com/). It just encapsulates i18next and provides a higner order component `WithTranslation` for string localization purpose. 

## Install via NPM
`npm install --save-dev si-react-localize`

## Usage
Once the package is installed you can import the HOC `WithTranslation` in your component like below. 

`import {WithTranslation} from "si-react-localize";`

Add `locales` folder in your `src` folder and add language folders with the language code as the folder name, for every language you would want localization support for. For example if you have a component called `Header` somewhere deep inside your `src` folder then the folder structure would look like below. We are following component specific localization approach here and hence the json file name should be same as component name.

```
|___src  
     |   
     |___locales
            |
            |___en
            |    - Header.json
            |
            |___no
            |    - Header.json  
            |
            |___fi
            |    - Header.json  
            |
            |___da 
                 - Header.json
```
       
If you have a header component composed like below then you have to wrap this component with HOC  `WithTranslation` and you will have `localize` function available on your component props. You can use pass the string into this function to localize the string.

```jsx

    import React from "react";
    import {WithTranslation} from "si-react-localize";

    const Header = (props) => {
        return (<div>{props.localize(props.title)}</div>)
    };

    export default WithTranslation("Header")(Header);

```
    
Your `app.js` may look like below
   
```jsx

    import React from "react";
    import Header from "./Header";

    const App = <Header title="header" />    
    render(<App />, document.getElementById("app"));

```
And your `Header.json` file looks like below  

```json
    {
        "header": "Hello World"
    }
```