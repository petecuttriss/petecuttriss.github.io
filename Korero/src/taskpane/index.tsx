import 'office-ui-fabric-react/dist/css/fabric.min.css';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ConfigProvider from './services/ConfigProvider';

initializeIcons();

let isOfficeInitialized = false;
let isFirstRun = true;
const title = 'Kōrero Add-in';
const configProvider = new ConfigProvider();

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component title={title} isOfficeInitialized={isOfficeInitialized} isFirstRun={isFirstRun} />
        </AppContainer>,
        document.getElementById('container')
    );
};

/* Render application after Office initializes */
Office.initialize = () => {
    isOfficeInitialized = true;
    let config = configProvider.getConfig();
    if (config.isFirstRun !== undefined)
    {
        isFirstRun = config.isFirstRun;
    }
    render(App);
};

/* Initial render showing a progress bar */
render(App);


if ((module as any).hot) {
    (module as any).hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        render(NextApp);
    });
}