import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';


const App = () => <AppRouter />;

ReactDOM.render(<App />,
    document.getElementById("app")
)