import React, { PureComponent } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "../services/homePage";


class AppRouter extends PureComponent {
    state = { HomePage: null }

    componentDidMount() {
        this.onLoad()
    }

    onLoad = async () => {
        const homePage = await HomePage();
        this.setState({ homePage });
    }

    render() {
        const { homePage } = this.state;
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={homePage} />
                    <Route path="*" component={() => <div>Страница не найдена</div>} />
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;
