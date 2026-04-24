import PropTypes from 'prop-types';
import { memo } from 'react';
import { TECH_COLORS } from '../../utils/techColors';
import { TECH_ICONS } from '../../utils/techIcons';
import './ProjectCard.css';

const ProjectCard = memo(function ProjectCard({ project, index }) {
    const featured = index === 0;
    const repos = project.repositories
        || (project.github ? [{ name: 'GitHub', url: project.github }] : null);

    return (
        <article className={`project-card ${featured ? 'project-card--featured' : ''} reveal reveal-delay-${(index % 4) + 1}`}>
            <div className="project-card__inner">
                <div className="project-card__header">
                    <span className="project-card__type">{project.type}</span>
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

                {repos && (
                    <div className="project-card__repos">
                        {repos.map((repo) => (
                            <a
                                key={repo.name}
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card__repo-link"
                                aria-label={`${repo.name} on GitHub`}
                            >
                                <svg width="13" height="13" aria-hidden="true" style={{ stroke: 'currentColor', fill: 'none', strokeWidth: '2', flexShrink: 0 }}>
                                    <use href="/sprite.svg#icon-arrow-external" />
                                </svg>
                                {repo.name}
                            </a>
                        ))}
                    </div>
                )}
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
        github: PropTypes.string,
        repositories: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            })
        ),
    }).isRequired,
    index: PropTypes.number.isRequired,
};

export default ProjectCard;
