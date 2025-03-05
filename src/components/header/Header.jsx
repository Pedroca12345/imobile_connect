import './Header.css';
import React from 'react';
import { BlueLogo } from '../blue_logo/BlueLogo';
import { LoginButton } from '../login_button/LoginButton';
import { RegisterButton } from '../register_button/RegisterButton';

export function Header() {
    return (
        <header className='CTA_header'>
            <div className="CTA_header_container">
                <BlueLogo />
                <div className="CTA_header_navigation">
                    <LoginButton />
                    <RegisterButton />
                </div>
            </div>

        </header>
    )
}