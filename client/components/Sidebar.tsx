'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);
  const isTemplates = pathname === '/templates';

  return (
    <nav className={styles.sidebar}>
      <Link href="/" className={`${styles.navItem} ${pathname === '/' || pathname === '/boards' ? styles.active : ''}`}>
        <span>▣</span>
        Boards
      </Link>
      <Link href="/templates" className={`${styles.navItem} ${isTemplates ? styles.active : ''}`}>
        <span>📋</span>
        Templates
      </Link>

      {isTemplates && (
        <div style={{ marginLeft: '12px', marginBottom: '12px' }}>
          {['Business', 'Design', 'Education', 'Engineering', 'Marketing', 'HR & Operations', 'Personal', 'Productivity'].map(cat => (
            <div key={cat} className={styles.navItem} style={{ fontSize: '13px', padding: '4px 16px', color: '#9fadbc' }}>
              {cat}
            </div>
          ))}
        </div>
      )}

      <Link href="/home" className={`${styles.navItem} ${pathname === '/home' ? styles.active : ''}`}>
        <span>🏠</span>
        Home
      </Link>

      <div className={styles.section}>
        <span>Workspaces</span>
        <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>+</button>
      </div>

      <div className={styles.workspaceItem} onClick={() => setExpanded(!expanded)}>
        <div className={styles.workspaceLogo}>T</div>
        <span style={{ flex: 1 }}>Trello Workspace</span>
        <span>{expanded ? '▴' : '▾'}</span>
      </div>

      {expanded && (
        <>
          <div className={`${styles.workspaceSubItem} ${styles.activeSub}`}>
            <span>▣</span> Boards
          </div>
          <div className={styles.workspaceSubItem}>
            <span>👤</span> Members
          </div>
          <div className={styles.workspaceSubItem}>
            <span>⚙️</span> Settings
          </div>
          <div className={styles.workspaceSubItem}>
            <span>💳</span> Billing
          </div>
        </>
      )}
    </nav>
  );
};
