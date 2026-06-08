import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface PillButtonProps {
  href: string;
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  external?: boolean;
}

export default function PillButton({
  href,
  variant = 'outline',
  children,
  external = false,
}: PillButtonProps) {
  const isExternal = href.startsWith('http') || external;
  const className = clsx('pill-button', styles.pill, styles[variant]);
  if (isExternal) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  );
}
