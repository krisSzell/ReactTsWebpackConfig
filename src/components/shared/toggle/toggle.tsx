import { Switch } from "@components/shared/switch/switch";
import React, { useState } from "react";

interface IProps {
    onToggle: (on: boolean) => void;
    stateReducer?: (state: any, changes: any) => IState;
}

interface IState {
    on: boolean;
}

const { Provider: ToggleContextProvider, Consumer: ToggleContextConsumer } = React.createContext<{
    on: boolean;
    toggle: () => void;
}>({
    on: false,
    toggle: () => null
});

class Toggle extends React.Component<IProps, IState> {
    // These are the compound elements that users
    // can place inside our Toggle component
    static On = ({ children }: any) => (
        <ToggleContextConsumer>{({ on }) => on && children}</ToggleContextConsumer>
    );
    static Off = ({ children }: any) => (
        <ToggleContextConsumer>{({ on }) => on || children}</ToggleContextConsumer>
    );
    static Button = (props: any) => (
        <ToggleContextConsumer>
            {({ on, toggle }) => <Switch on={on} onClick={toggle} {...props} />}
        </ToggleContextConsumer>
    );

    state = { on: false, timesClicked: 0 };

    toggle = () =>
        this.internalSetState(({ on }) => ({ on: !on }), () => this.props.onToggle(this.state.on));

    // state reducer pattern
    // thanks to that we can give the consumer of our component the possibility to
    // modify state the way they like via stateReducer prop
    internalSetState = (
        changes: (state: Partial<IState>) => void | Partial<IState>,
        callback: () => void
    ) => {
        this.setState(state => {
            const changesObject = typeof changes === "function" ? changes(state) : changes;

            const reducedChanges = this.props.stateReducer(state, changesObject) || {};

            return reducedChanges;
        }, callback);
    };

    render(): JSX.Element {
        return (
            <ToggleContextProvider value={{ on: this.state.on, toggle: this.toggle }}>
                {this.props.children}
            </ToggleContextProvider>
        );
    }
}

const Usage = () => {
    const [timesClicked, setTimesClicked] = useState(0);
    const onToggle = (on: boolean) => {
        setTimesClicked(timesClicked + 1);
        console.log("onToggle", on);
        console.log("times clicked: ", timesClicked + 1);
    };
    // here we have our stateReducer function 
    // in this case it blocks toggling after 4 clicks but it could be so much more
    const stateReducer = (state: IState, changes: any) => {
        if (timesClicked >= 4) {
            return { ...changes, on: false };
        }

        return changes;
    };

    return (
        <Toggle onToggle={onToggle} stateReducer={stateReducer}>
            <div>
                {timesClicked >= 4 ? (
                    <h3 style={{ color: "orange" }}>You clicked too many times!</h3>
                ) : (
                    <h2>Click this button to toggle.</h2>
                )}
                <Toggle.Button />
            </div>
            <Toggle.On>Content rendered when toggle is on.</Toggle.On>
            <Toggle.Off>Content rendered when toggle is off.</Toggle.Off>
        </Toggle>
    );
};
Usage.title = "Compound Components";

export { Toggle, Usage as default };
