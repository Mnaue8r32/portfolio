import useI18n from '../../hooks/useI18n';
import useReveal from '../../hooks/useReveal';
import './Contact.css';

export default function Contact() {
    const sectionRef = useReveal();
    const { t } = useI18n();
    const links = [
        {
            label: t.contact.links.github,
            href: 'https://github.com/Mnaue8r32',
            icon: (
                <svg className="icon" width="20" height="20" aria-hidden="true" style={{ fill: 'currentColor' }}>
                    <use href="/sprite.svg#icon-github" />
                </svg>
            ),
        },
        {
            label: t.contact.links.email,
            href: 'mailto:juanmanuelcruzbeltran660@gmail.com',
            icon: (
                <svg className="icon" width="20" height="20" aria-hidden="true" style={{ stroke: 'currentColor', fill: 'none', strokeWidth: '2' }}>
                    <use href="/sprite.svg#icon-email" />
                </svg>
            ),
        },
    ];

    return (
        <section className="contact section" id="contact" ref={sectionRef}>
            <div className="container">
                <div className="contact__card reveal">
                    <div className="contact__glow" aria-hidden="true" />
                    <span className="section-label">{t.contact.label}</span>
                    <h2 className="contact__title">
                        {t.contact.title} <em>{t.contact.titleAccent}</em>?
                    </h2>
                    <p className="contact__subtitle">
                        {t.contact.subtitle}
                    </p>
                    <div className="contact__links">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="contact__link"
                            >
                                {link.icon}
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
