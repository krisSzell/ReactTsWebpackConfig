import React, { PureComponent, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "@components/shared/header/header";
import { AppStartupLoader } from "@components/shared/loader/loader";
import withLoading from "@components/shared/withLoading";

const Home = React.lazy(() => import("@components/home"));
const Todo = React.lazy(() => import("@components/shared/todo/todo"));
const About: any = React.lazy(() => import("@components/shared/loader/loader"));

export default class App extends PureComponent<{}> {
    state = { formVisible: false };

    public render(): JSX.Element {
        return (
            <Suspense fallback={<AppStartupLoader />}>
                <BrowserRouter>
                    <Route
                        render={({ location }) => (
                            <div className="home-container" style={{ position: "relative" }}>
                                <Header
                                    links={[
                                        { name: "Home", url: "/" },
                                        { name: "Todo", url: "/todo" },
                                        { name: "About", url: "/about" }
                                    ]}
                                />
                                <TransitionGroup>
                                    <CSSTransition
                                        key={location.key}
                                        timeout={300}
                                        classNames="route-transition"
                                    >
                                        <div className="switch-container">
                                            <Switch location={location}>
                                                <Route
                                                    exact
                                                    path="/"
                                                    component={withLoading(Home)}
                                                />
                                                <Route path="/todo" component={withLoading(Todo)} />
                                                <Route
                                                    path="/about"
                                                    component={withLoading(About)}
                                                />
                                            </Switch>
                                        </div>
                                    </CSSTransition>
                                </TransitionGroup>
                            </div>
                        )}
                    />
                </BrowserRouter>
            </Suspense>
        );
    }
}
