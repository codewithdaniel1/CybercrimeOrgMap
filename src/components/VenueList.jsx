import { useEffect, useRef } from 'react';
import VenueCard from './VenueCard.jsx';

const styles = {
  header: {
    padding: '10px 14px',
    borderBottom: '0.5px solid var(--border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
  },
  title: {
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    fontFamily: 'var(--font-mono)',
  },
  countBadge: {
    fontSize: '11px',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    background: 'var(--bg)',
    padding: '2px 8px',
    borderRadius: '10px',
    border: '0.5px solid var(--border)',
  },
  list: {
    flex: 1,
    overflowY: 'auto',
    padding: '8px',
  },
  empty: {
    padding: '32px 16px',
    textAlign: 'center',
    color: 'var(--text-faint)',
    fontSize: '13px',
  },
  skeleton: {
    height: '78px',
    borderRadius: 'var(--radius-md)',
    background: 'var(--surface3)',
    marginBottom: '6px',
    animation: 'skeletonPulse 1.4s ease-in-out infinite',
  },
};

// Inject skeleton keyframes once
if (typeof document !== 'undefined' && !document.getElementById('skeleton-kf')) {
  const s = document.createElement('style');
  s.id = 'skeleton-kf';
  s.textContent = `
    @keyframes skeletonPulse {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.45; }
    }
  `;
  document.head.appendChild(s);
}

function Skeletons() {
  return Array.from({ length: 5 }, (_, i) => (
    <div key={i} style={{ ...styles.skeleton, opacity: 1 - i * 0.15 }} />
  ));
}

export default function VenueList({ venues, selectedVenue, onSelectVenue, loading, searchQuery }) {
  const selectedRef = useRef(null);
  const hasSearch = searchQuery.trim().length > 0;

  // Auto-scroll to selected card
  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedVenue]);

  return (
    <>
      <div style={styles.header}>
        <span style={styles.title}>Mapped Actors</span>
        <span style={styles.countBadge}>
          {loading ? '…' : venues.length}
        </span>
      </div>
      <div style={styles.list}>
        {loading && venues.length === 0 ? (
          <Skeletons />
        ) : venues.length === 0 ? (
          <div style={styles.empty}>
            {hasSearch
              ? `No actors matched "${searchQuery}".`
              : 'No mapped actors in this viewport.'}
          </div>
        ) : (
          venues.map((v) => {
            const isSelected = selectedVenue?.id === v.id;
            return (
              <div key={v.id} ref={isSelected ? selectedRef : null}>
                <VenueCard
                  venue={v}
                  selected={isSelected}
                  onClick={() => onSelectVenue(isSelected ? null : v)}
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
