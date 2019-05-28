import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

interface IProps {
    links: Array<{ name: string; url: string }>;
}

const Header = ({ links }: IProps) => {
    return (
        <nav className="header">
            <ul>
                {links.map(link => (
                    <li key={link.url}>
                        <Link to={link.url}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;
