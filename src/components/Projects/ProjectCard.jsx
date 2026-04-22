import PropTypes from 'prop-types';
import { memo } from 'react';
import { TECH_COLORS } from '../../utils/techColors';
import { TECH_ICONS } from '../../utils/techIcons';
import './ProjectCard.css';

const ProjectCard = memo(function ProjectCard({ project, index, openInGithubLabel }) {
    const featured = index === 0;
    const githubAriaLabel = openInGithubLabel.replace('{title}', project.title);

    return (
        <article className={`project-card ${featured ? 'project-card--featured' : ''} reveal reveal-delay-${(index % 4) + 1}`}>
            <div className="project-card__inner">
                <div className="project-card__header">
                    <span className="project-card__type">{project.type}</span>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                        aria-label={githubAriaLabel}
                    >
                        <svg className="icon" width="18" height="18" aria-hidden="true" style={{ stroke: 'currentColor', fill: 'none', strokeWidth: '2' }}>
                            <use href="/sprite.svg#icon-arrow-external" />
                        </svg>
                    </a>
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                <div className="project-card__techs">
                    {project.techs.map((tech) => {
                        const color = TECH_COLORS[tech] || 'var(--accent)';
                        const Icon = TECH_ICONS[tech];
                        return (
                            <span
                                key={tech}
                                className="tech-badge"
                                style={{ '--badge-color': color }}
                            >
                                {Icon ? (
                                    <Icon className="tech-badge-icon" />
                                ) : (
                                    <span className="tech-badge-dot" style={{ backgroundColor: color }} />
                                )}
                                {tech}
                            </span>
                        );
                    })}
                </div>

                {project.highlights ? (
                    <ul className="project-card__highlights">
                        {project.highlights.map((h) => (
                            <li key={h}>{h}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </article>
    );
});

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        techs: PropTypes.arrayOf(PropTypes.string).isRequired,
        highlights: PropTypes.arrayOf(PropTypes.string),
        github: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    openInGithubLabel: PropTypes.string.isRequired,
};

export default ProjectCard;
