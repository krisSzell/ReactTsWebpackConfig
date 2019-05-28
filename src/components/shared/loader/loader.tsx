import React from "react";

import "./loader.scss";

const LoaderAnimation = () => (
    <svg
        height="80"
        width="100%"
        viewBox="0 0 105 105"
        xmlns="http://www.w3.org/2000/svg"
        fill="#20262E"
    >
        <defs>
            <filter id="drop-shadow" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                <feOffset dy="2" dx="3" />
                <feComposite
                    in2="SourceAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                    result="shadowDiff"
                />

                <feFlood floodColor="#444444" floodOpacity="0.75" />
                <feComposite in2="shadowDiff" operator="in" />
                <feComposite in2="SourceGraphic" operator="over" result="firstfilter" />

                <feGaussianBlur in="firstfilter" stdDeviation="3" result="blur2" />
                <feOffset dy="-2" dx="-3" />
                <feComposite
                    in2="firstfilter"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                    result="shadowDiff"
                />

                <feFlood floodColor="#444444" floodOpacity="0.75" />
                <feComposite in2="shadowDiff" operator="in" />
                <feComposite in2="firstfilter" operator="over" />
            </filter>
        </defs>
        <circle cx="12.5" cy="12.5" r="12.5" filter="url(#drop-shadow)">
            <animate
                attributeName="fill-opacity"
                begin="0s"
                dur="1s"
                values="1;.2;1"
                calcMode="linear"
                repeatCount="indefinite"
            />
        </circle>
        <circle cx="12.5" cy="52.5" r="12.5" fillOpacity=".5" filter="url(#drop-shadow)">
            <animate
                attributeName="fill-opacity"
                begin="100ms"
                dur="1s"
                values="1;.2;1"
                calcMode="linear"
                repeatCount="indefinite"
            />
        </circle>
        <circle cx="52.5" cy="12.5" r="12.5" filter="url(#drop-shadow)">
            <animate
                attributeName="fill-opacity"
                begin="300ms"
                dur="1s"
                values="1;.2;1"
                calcMode="linear"
                repeatCount="indefinite"
            />
        </circle>
        <circle cx="52.5" cy="52.5" r="12.5" filter="url(#drop-shadow)">
            <animate
                attributeName="fill-opacity"
                begin="600ms"
                dur="1s"
                values="1;.2;1"
                calcMode="linear"
                repeatCount="indefinite"
            />
        </circle>
        <circle cx="92.5" cy="12.5" r="12.5" filter="url(#drop-shadow)">
            <animate
                attributeName="fill-opacity"
                begin="800ms"
                dur="1s"
                values="1;.2;1"
                calcMode="linear"
                repeatCount="indefinite"
            />
        </circle>
        <circle cx="92.5" cy="52.5" r="12.5" filter="url(#drop-shadow)">
            <animate
                attributeName="fill-opacity"
                begin="400ms"
                dur="1s"
                values="1;.2;1"
                calcMode="linear"
                repeatCount="indefinite"
            />
        </circle>
        <circle cx="12.5" cy="92.5" r="12.5" filter="url(#drop-shadow)">
            <animate
                attributeName="fill-opacity"
                begin="700ms"
                dur="1s"
                values="1;.2;1"
                calcMode="linear"
                repeatCount="indefinite"
            />
        </circle>
        <circle cx="52.5" cy="92.5" r="12.5" filter="url(#drop-shadow)">
            <animate
                attributeName="fill-opacity"
                begin="500ms"
                dur="1s"
                values="1;.2;1"
                calcMode="linear"
                repeatCount="indefinite"
            />
        </circle>
        <circle cx="92.5" cy="92.5" r="12.5" filter="url(#drop-shadow)">
            <animate
                attributeName="fill-opacity"
                begin="200ms"
                dur="1s"
                values="1;.2;1"
                calcMode="linear"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

const Loader = ({ isLoading = false }) =>
    isLoading ? (
        <div className="loader">
            <LoaderAnimation />
        </div>
    ) : null;

const AppStartupLoader = () => (
    <div className="app-startup-loader">
        <LoaderAnimation />
        <h1 className="header">Application is loading</h1>
    </div>
);

export { Loader as default, AppStartupLoader };
