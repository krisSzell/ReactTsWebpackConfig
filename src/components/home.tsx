import React, { PureComponent } from "react";

import Usage from "@components/shared/toggle/toggle";
import stag from "../images/stag.jpg";
import "./home.scss";

interface IProps {
    compiler: string;
    framework: string;
    bundler: string;
}

export default class Home extends PureComponent<IProps> {
    public componentDidMount() {
        console.log(stag);
    }

    public render(): JSX.Element {
        return (
            <h1 className="home-header">
                React playground
                <br />
                <Usage />
            </h1>
        );
    }
}
