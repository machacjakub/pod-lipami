import React, { useState, useEffect } from 'react';
import './Dropdown.css';
import {MenuIcon} from "../MenuIcon.jsx"; // Ensure this file has the animation styles

export const DropdownMenuButton = ({items}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const closeDropdown = (event) => {
        if (!event.target.closest('.dropdown')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                <MenuIcon/>
            </button>
            <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                {items?.map(item => <a style={{textDecoration: "none"}} href={item.path}>{item.label}</a>)}
            </ul>
        </div>
    );
};

