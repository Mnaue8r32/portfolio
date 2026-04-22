import useI18n from '../../hooks/useI18n';
import useReveal from '../../hooks/useReveal';
import { TECH_COLORS } from '../../utils/techColors';
import { TECH_ICONS } from '../../utils/techIcons';
import './TechStack.css';

export default function TechStack() {
    const sectionRef = useReveal();
    const { t } = useI18n();

    return (
        <section className="tech section" id="tech" ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal">{t.techStack.label}</span>
                <h2 className="section-title reveal reveal-delay-1">
                    {t.techStack.title} <em>{t.techStack.titleAccent}</em>
                </h2>

                <div className="tech__grid">
                    {t.techStack.categories.map((cat, ci) => (
                        <div key={cat.title} className={`tech__category reveal reveal-delay-${ci + 2}`}>
                            <h3 className="tech__category-title">{cat.title}</h3>
                            <div className="tech__badges">
                                {cat.techs.map((t) => {
                                    const color = TECH_COLORS[t] || 'var(--accent)';
                                    const Icon = TECH_ICONS[t];
                                    return (
                                        <span
                                            key={t}
                                            className="tech-badge"
                                            style={{ '--badge-color': color }}
                                        >
                                            {Icon ? (
                                                <Icon className="tech-badge-icon" />
                                            ) : (
                                                <span className="tech-badge-dot" style={{ backgroundColor: color }} />
                                            )}
                                            {t}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
