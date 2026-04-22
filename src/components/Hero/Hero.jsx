import useI18n from '../../hooks/useI18n';
import useReveal from '../../hooks/useReveal';
import './Hero.css';

export default function Hero() {
    const sectionRef = useReveal(0.1);
    const { t } = useI18n();

    return (
        <section className="hero" ref={sectionRef} id="hero">
            <div className="hero__bg-glow" aria-hidden="true" />

            <div className="hero__content container">
                <div className="hero__status reveal">
                    <span className="hero__status-dot" aria-hidden="true" />
                    {t.hero.status}
                </div>

                <h1 className="hero__name reveal reveal-delay-1">
                    Juan Manuel
                    <br />
                    <span className="hero__name-accent">Cruz Beltran</span>
                </h1>

                <p className="hero__description reveal reveal-delay-2">
                    {t.hero.description}
                </p>

                <div className="hero__actions reveal reveal-delay-3">
                    <a href="#projects" className="hero__cta-primary">
                        {t.hero.primaryCta}
                    </a>
                    <a href="#contact" className="hero__cta-secondary">
                        {t.hero.secondaryCta}
                    </a>
                </div>
            </div>

            <div className="hero__scroll reveal reveal-delay-5" aria-hidden="true">
                <div className="hero__scroll-line" />
            </div>
        </section>
    );
}
