import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import Body from './Content';
const App = () => {
    return (_jsx(_Fragment, { children: _jsx(Body, {}, void 0) }, void 0));
};
ReactDOM.render(_jsx(App, {}, void 0), document.getElementById('root'));
