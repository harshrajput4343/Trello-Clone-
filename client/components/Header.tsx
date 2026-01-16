'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ProfileDropdown } from './ProfileDropdown';
import { CreateBoardModal } from './CreateBoardModal';
import { NotificationPopup } from './NotificationPopup';
import styles from './Header.module.css';

interface Props {
  onSearch?: (query: string) => void;
}

export const Header = ({ onSearch }: Props) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <header className={styles.mainHeader}>
        <div className={styles.headerLeft}>
          <button className={styles.headerIconBtn}>
            <span style={{ fontSize: '18px' }}>⋮⋮⋮</span>
          </button>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>▣</span>
            <span style={{ marginLeft: '4px' }}>Trello</span>
          </Link>
        </div>
        <div className={styles.headerSearch}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search"
            className={styles.headerSearchInput}
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>
        <div className={styles.headerRight}>
          <div style={{ position: 'relative' }}>
            <button
              className={styles.headerIconBtn}
              title="Notifications"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              🔔
            </button>
            {showNotifications && (
              <NotificationPopup onClose={() => setShowNotifications(false)} />
            )}
          </div>
          <button className={styles.headerIconBtn} title="Help">
            ❓
          </button>
          <button className={styles.headerIconBtn} title="Theme">
            🎨
          </button>
          <button
            className={styles.createBtn}
            onClick={() => setShowCreateModal(true)}
          >
            Create
          </button>
          <div style={{ position: 'relative' }}>
            <div
              className={styles.avatar}
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              HK
            </div>
            {showProfileMenu && (
              <ProfileDropdown onClose={() => setShowProfileMenu(false)} />
            )}
          </div>
        </div>
      </header>
      {showCreateModal && <CreateBoardModal onClose={() => setShowCreateModal(false)} />}
    </>
  );
};
