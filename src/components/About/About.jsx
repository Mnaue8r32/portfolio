import useI18n from '../../hooks/useI18n';
import useReveal from '../../hooks/useReveal';
import './About.css';

export default function About() {
    const sectionRef = useReveal();
    const { t } = useI18n();

    return (
        <section className="about section" id="about" ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal">{t.about.label}</span>
                <div className="about__grid">
                    <div className="about__text">
                        <h2 className="section-title reveal reveal-delay-1">
                            {t.about.titleTop}<br />
                            <em>{t.about.titleAccent}</em>
                        </h2>
                        <p className="about__paragraph reveal reveal-delay-2">
                            {t.about.paragraph1}
                        </p>
                        <p className="about__paragraph reveal reveal-delay-3">
                            {t.about.paragraph2}
                        </p>
                    </div>

                    <div className="about__stats">
                        {t.about.stats.map((stat, i) => (
                            <div key={stat.label} className={`about__stat reveal reveal-delay-${i + 2}`}>
                                <span className="about__stat-value">{stat.value}</span>
                                <span className="about__stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
