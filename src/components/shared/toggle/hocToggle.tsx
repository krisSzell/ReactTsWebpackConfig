import hoistNonReactStatics from "hoist-non-react-statics";
import React, {
    ComponentClass,
    ComponentType,
    forwardRef,
    Fragment,
    FunctionComponent,
    ReactChild,
    ReactChildren,
    Ref,
    useState
} from "react";

import { Switch } from "@components/shared/switch/switch";

interface IProps {
    children?: ReactChildren | ReactChild;
    onToggle?: (on: boolean) => void;
}

const { Provider: ToggleContextProvider, Consumer: ToggleContextConsumer } = React.createContext<{
    on: boolean;
    toggle: () => void;
}>({
    on: false,
    toggle: () => null
});

const Toggle = (props: IProps = { onToggle: () => null }) => {
    const [on, setOn] = useState(false);

    const toggle = () => {
        setOn(!on);
        props.onToggle(!on);
    };

    return <ToggleContextProvider value={{ on, toggle }} {...props} />;
};

const withToggle = (Component: ComponentType) => {
    const Wrapper = (props: any, ref: Ref<ComponentType>) => (
        <ToggleContextConsumer>
            {toggleContext => <Component toggle={toggleContext} {...props} ref={ref} />}
        </ToggleContextConsumer>
    );
    Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`;

    return hoistNonReactStatics(forwardRef(Wrapper), Component) as any;
};

const SwitchWithToggle = withToggle(({ toggle: { on, toggle } }: any) => (
    <Switch on={on} onClick={toggle} />
));

const Usage = ({ onToggle = (...args: any) => {} }) => (
    <Toggle onToggle={onToggle}>
        <SwitchWithToggle />
    </Toggle>
);
Usage.title = "Compound Components";

export { Toggle, withToggle, Usage as default };
