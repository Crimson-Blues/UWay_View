"use client";
import * as React from "react";
import HelmetIcon from "./HelmetIcon.tsx";
import ChevronDownIcon from "./ChevronDownIcon.tsx";

const NavHeader: React.FC = () => {
    return (
        <header className="nav-header">
            <LogoSection />
            <NavigationLinks />
            <UserProfile />
        </header>
    );
};


const LogoSection: React.FC = () => {
    return (
        <section className="logo-section">
            <LogoCircle />
            <h1 className="header-text">
                Modo Pasajero
            </h1>
            <div>
                <HelmetIcon />
            </div>
        </section>
    );
};

const LogoCircle: React.FC = () => {
    return (
        <div className="logo-text">
            Ü
        </div>
    );
};

const NavigationLinks: React.FC = () => {
    return (
        <nav className="header-box">
            <a href="#contact" className="header-link">
                Contacto
            </a>
            <a href="#settings" className="header-link">
                Configuración
            </a>
        </nav>
    );
};

const UserProfile: React.FC = () => {
    return (
        <div className={"flex has-[:hover]:bg-gray-300 relative gap-4 items-center px-6 py-4 rounded-lg max-md:gap-3 max-md:px-4 max-md:py-3 max-sm:gap-2 max-sm:px-3 max-sm:py-2"}>
            <div className={"flex relative justify-center items-center w-10 h-10 rounded-full max-sm:w-8 max-sm:h-8"}>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a9e1b825206ffc7d9a2857cba54bfc541a2cf1f?placeholderIfAbsent=true"
                    alt="User avatar"
                    className={'shrink-0 w-10 h-10 rounded-full max-sm:w-8 max-sm:h-8'}
                />
            </div>
            <button aria-label="User menu" className={'flex items-center hover:bg-gray-400 transition-colors'}>
                <ChevronDownIcon />
            </button>
        </div>
    );
};

export default NavHeader;
