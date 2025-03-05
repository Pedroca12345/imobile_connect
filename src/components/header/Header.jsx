import './Header.css';
import { BlueLogo } from '../blue_logo/BlueLogo';
import React from 'react';

export function Header() {
    return (
        <header className='CTA_header'>

            <div className="CTA_header_container">

                <BlueLogo />

                <div className="CTA_header_navigation">

                    <div className="login_button">
                        <a href="#">
                            <button>Login</button>
                        </a>
                    </div>

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