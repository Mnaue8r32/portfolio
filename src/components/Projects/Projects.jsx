import useI18n from '../../hooks/useI18n';
import useReveal from '../../hooks/useReveal';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
    const sectionRef = useReveal(0.05);
    const { t } = useI18n();
    const projects = t.projects.items;

    return (
        <section className="projects section" id="projects" ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal">{t.projects.label}</span>
                <h2 className="section-title reveal reveal-delay-1">
                    {t.projects.title} <em>{t.projects.titleAccent}</em>
                </h2>
                <p className="section-subtitle reveal reveal-delay-2">
                    {t.projects.subtitle}
                </p>

                <div className="projects__grid">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} openInGithubLabel={t.projects.openInGithub} />
                    ))}
                </div>
            </div>
        </section>
    );
}
