import React from 'react';
import { GROUP_TYPES, getTypeMeta } from '../data/groups.js';

const FILTERS = ['all', ...GROUP_TYPES];

const LABELS = FILTERS.reduce((acc, key) => {
  if (key === 'all') {
    acc[key] = 'All';
    return acc;
  }

  acc[key] = getTypeMeta(key).label;
  return acc;
}, {});

const styles = {
  bar: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderBottom: '0.5px solid var(--border)',
    background: 'var(--surface)',
    flexShrink: 0,
    overflowX: 'auto',
  },
};

function chipStyle(active) {
  return {
    padding: '5px 13px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 500,
    fontFamily: 'var(--font-body)',
    border: active ? 'none' : '0.5px solid var(--border2)',
    background: active ? 'var(--accent)' : 'transparent',
    color: active ? '#fff' : 'var(--text-muted)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.15s',
    outline: 'none',
  };
}

export default function FilterBar({ active, onChange }) {
  return (
    <div style={styles.bar}>
      {FILTERS.map((f) => (
        <button
          key={f}
          style={chipStyle(active === f)}
          onClick={() => onChange(f)}
          onMouseEnter={(e) => {
            if (active !== f) {
              e.currentTarget.style.background = 'var(--surface2)';
              e.currentTarget.style.color = 'var(--text)';
            }
          }}
          onMouseLeave={(e) => {
            if (active !== f) {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--text-muted)';
            }
          }}
        >
          {LABELS[f]}
        </button>
      ))}
    </div>
  );
}
