import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/App';

import 'styles/App.scss';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) module.hot.accept();
