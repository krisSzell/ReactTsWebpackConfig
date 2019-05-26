import React from "react";
import classNames from "classnames";
import "./switch.scss";

interface IProps {
    on: boolean;
    className?: string;
    [prop: string]: any;
}

export const Switch = ({ on, className = "", ...props }: IProps) => {
    return (
        <div>
            <input
                className="toggle-input"
                type="checkbox"
                checked={on}
                onChange={() => {
                    // changing is handled by clicking the button
                }}
            />
            <button
                className={classNames(
                    "toggle-btn",
                    className,
                    on ? "toggle-btn-on" : "toggle-btn-off"
                )}
                aria-label="Toggle"
                {...props}
            />
        </div>
    );
};
