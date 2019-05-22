import React, { PureComponent } from "react";

import startupService from "services/startupService";
import Text from "./Text";

import stag from "../images/stag.jpg";
import "./hello.scss";

interface IProps {
    compiler: string;
    framework: string;
    bundler: string;
}

export default class Hello extends PureComponent<IProps> {
    public componentDidMount() {
        console.log(stag);
    }

    public render(): JSX.Element {
        return (
            <h1 className="hello-header">
                This is a {this.props.framework} sratfghddddddgfhddd ion using{" "}
                {this.props.compiler} with {this.props.bundler}.
                <img src={stag} />
                <Text value={"dasdsadasdt"} />
                <span>{startupService.getShit()}</span>
            </h1>
        );
    }
}
