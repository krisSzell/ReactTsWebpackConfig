import React, { PureComponent, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";

import Input from "@components/shared/input/input";

import "./home.scss";

const LazyUsage = React.lazy(() => import("@components/shared/toggle/hocToggle"));

export default class Home extends PureComponent<{ children?: ReactNode }> {
    state = { formVisible: false };

    public render(): JSX.Element {
        return (
            <>
                <h1 className="home-header">
                    React playground
                    <br />
                    <LazyUsage onToggle={on => this.setState({ formVisible: on })} />
                </h1>
                <CSSTransition
                    in={this.state.formVisible}
                    timeout={400}
                    unmountOnExit={true}
                    className="form-transition"
                >
                    <form>
                        <Input label="Name:" placeholder="Enter name..." />
                        <Input label="Age:" type="number" placeholder="Enter age..." />
                    </form>
                </CSSTransition>
                <div>dupadupadupa</div>
            </>
        );
    }
}
