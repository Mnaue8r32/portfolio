import { useCallback, useEffect, useState } from 'react';
import { TbMoonStars, TbSun } from 'react-icons/tb';
import useI18n from '../../hooks/useI18n';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, language, theme, setLanguage, toggleTheme } = useI18n();
    const nav = t.navbar;
    const isDarkTheme = theme === 'dark';
    const nextThemeLabel = isDarkTheme ? nav.themeLight : nav.themeDark;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLinkClick = useCallback(() => {
        setMenuOpen(false);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner container">
                <a href="#about" className="navbar__logo">
                    <span className="navbar__logo-accent">JM</span>Cruz
                </a>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={nav.menuToggle}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {nav.links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="navbar__link" onClick={handleLinkClick}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="navbar__controls" aria-label={`${nav.language} y ${nav.theme}`}>
                        <button
                            className={`navbar__pill ${language === 'es' ? 'navbar__pill--active' : ''}`}
                            onClick={() => setLanguage('es')}
                            type="button"
                            aria-label={`${nav.language}: ${nav.langEs}`}
                        >
                            {nav.langEs}
                        </button>
                        <button
                            className={`navbar__pill ${language === 'en' ? 'navbar__pill--active' : ''}`}
                            onClick={() => setLanguage('en')}
                            type="button"
                            aria-label={`${nav.language}: ${nav.langEn}`}
                        >
                            {nav.langEn}
                        </button>
                        <button
                            className={`navbar__pill navbar__pill--icon ${isDarkTheme ? 'navbar__pill--icon-dark' : 'navbar__pill--icon-light'}`}
                            onClick={toggleTheme}
                            type="button"
                            aria-label={`${nav.theme}: ${nextThemeLabel}`}
                        >
                            <span className="navbar__theme-icons" aria-hidden="true">
                                <TbSun className={`navbar__theme-icon ${isDarkTheme ? '' : 'navbar__theme-icon--active'}`} />
                                <TbMoonStars className={`navbar__theme-icon ${isDarkTheme ? 'navbar__theme-icon--active' : ''}`} />
                            </span>
                            <span className="navbar__visually-hidden">{`${nav.theme}: ${nextThemeLabel}`}</span>
                        </button>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Mnaue8r32"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar__cta"
                        >
                            <svg className="icon" width="18" height="18" aria-hidden="true" style={{ fill: 'currentColor', marginRight: '6px' }}>
                                <use href="/sprite.svg#icon-github" />
                            </svg>
                            {nav.github}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
