import './Header.css';
import React from 'react';
import { BlueLogo } from '../blue_logo/BlueLogo';
import { LoginButton } from '../login_button/LoginButton';

export function Header() {
    return (
        <header className='CTA_header'>

            <div className="CTA_header_container">

                <BlueLogo />

                <div className="CTA_header_navigation">
                    <LoginButton />

                    <div className="register_button">
                        <a href="#">
                            <button>Cadastrar-se</button>
                        </a>
                    </div>

                </div>
            </div>

        </header>
    )
}