import { TbCodeCircle, TbLayoutBoardSplit, TbUsersGroup } from 'react-icons/tb';
import useI18n from '../../hooks/useI18n';
import useReveal from '../../hooks/useReveal';
import './Skills.css';

const ICONS = {
    architecture: <TbLayoutBoardSplit className="skills__card-icon" />,
    engineering: <TbCodeCircle className="skills__card-icon" />,
    'soft-skills': <TbUsersGroup className="skills__card-icon" />,
};

export default function Skills() {
    const sectionRef = useReveal();
    const { t } = useI18n();

    return (
        <section className="skills section" id="skills" ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal">{t.skills.label}</span>
                <h2 className="section-title reveal reveal-delay-1">
                    {t.skills.title} <em>{t.skills.titleAccent}</em>
                </h2>

                <div className="skills__bento-grid">
                    {t.skills.groups.map((group, index) => (
                        <div
                            key={group.id}
                            className={`skills__card ${group.className} reveal reveal-delay-${index + 2}`}
                        >
                            <div className="skills__card-header">
                                <div className="skills__icon-wrapper">{ICONS[group.id]}</div>
                                <h3 className="skills__card-title">{group.title}</h3>
                            </div>
                            <ul className="skills__list">
                                {group.skills.map((skill) => (
                                    <li key={skill} className="skills__list-item">
                                        <span className="skills__check">✦</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
