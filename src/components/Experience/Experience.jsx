import useI18n from '../../hooks/useI18n';
import useReveal from '../../hooks/useReveal';
import './Experience.css';

export default function Experience() {
    const sectionRef = useReveal();
    const { t } = useI18n();

    return (
        <section className="experience section" id="experience" ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal">{t.experience.label}</span>
                <h2 className="section-title reveal reveal-delay-1">
                    {t.experience.title} <em>{t.experience.titleAccent}</em>
                </h2>

                <div className="experience__timeline">
                    {t.experience.timeline.map((item, i) => (
                        <div key={item.period} className={`experience__item reveal reveal-delay-${i + 2}`}>
                            <div className="experience__dot" aria-hidden="true" />
                            <span className="experience__period">{item.period}</span>
                            <h3 className="experience__title">{item.title}</h3>
                            <p className="experience__description">{item.description}</p>
                            <div className="experience__techs">
                                {item.techs.map((t) => (
                                    <span key={t} className="tech-badge">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
