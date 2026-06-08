import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

interface ToolCardProps {
  icon?: string;
  name: string;
  description: string;
  href: string;
  tags?: string[];
  liveUrl?: string;
  className?: string;
}

export default function ToolCard({
  icon,
  name,
  description,
  href,
  tags,
  liveUrl,
  className,
}: ToolCardProps) {
  return (
    <div className={clsx('tool-card', styles.card, className)}>
      <div className={styles.header}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <Link to={href} className={styles.title}>
          {name}
        </Link>
      </div>
      <p className={styles.description}>{description}</p>
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
      {liveUrl && (
        <a
          className={clsx('tool-card-live', styles.liveLink)}
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          访问 →
        </a>
      )}
    </div>
  );
}
