import React, { PureComponent } from "react";

export default class Text extends PureComponent<{ value: string }> {
    render() {
        return <span>{this.props.value} test</span>;
    }
}
