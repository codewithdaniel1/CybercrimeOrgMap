import React from 'react';
import { getDisplayName, getTypeMeta } from '../data/groups.js';

const PANEL_HEIGHT = 286;
const panelStyles = {
  shell: {
    borderTop: '0.5px solid rgba(255, 255, 255, 0.14)',
    background:
      'linear-gradient(180deg, rgba(34, 34, 46, 0.98) 0%, rgba(22, 22, 32, 0.98) 100%)',
    boxShadow: '0 -18px 36px rgba(0, 0, 0, 0.36)',
    flexShrink: 0,
    overflow: 'hidden',
    transition: 'height 0.28s ease',
  },
  inner: {
    padding: '12px 14px',
    height: '100%',
    overflow: 'auto',
    background:
      'radial-gradient(circle at top right, rgba(255, 60, 110, 0.12), transparent 34%)',
  },
};

function StatCard({ label, value, valueStyle }) {
  return (
    <div style={{
      background: 'rgba(10, 10, 15, 0.72)',
      borderRadius: 'var(--radius-md)',
      padding: '8px 10px',
      border: '0.5px solid rgba(255, 255, 255, 0.12)',
      flex: 1,
      minWidth: 0,
    }}>
      <div style={{
        fontSize: '9px',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-faint)',
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        marginBottom: '4px',
      }}>
        {label}
      </div>
      <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, ...valueStyle }}>
        {value}
      </div>
    </div>
  );
}

export default function DetailPanel({ venue, onClose }) {
  const open = !!venue;
  const type = venue ? getTypeMeta(venue.type) : null;
  const displayName = venue ? getDisplayName(venue) : '';

  return (
    <div style={{
      ...panelStyles.shell,
      height: open ? `${PANEL_HEIGHT}px` : '0px',
    }}>
      {venue && (
        <div style={panelStyles.inner}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>
                {displayName}
              </div>
              <div style={{ fontSize: '10px', color: 'var(--text-faint)' }}>
                {venue.city}, {venue.country}
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '0.5px solid rgba(255,255,255,0.12)',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '16px',
                lineHeight: 1,
                padding: '4px 8px',
                marginLeft: '8px',
                flexShrink: 0,
                borderRadius: '999px',
              }}
              aria-label="Close detail panel"
            >
              x
            </button>
          </div>

          <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
            <StatCard
              label="Type"
              value={type.label}
              valueStyle={{ color: type.color }}
            />
            <StatCard label="First seen" value={venue.firstSeen} />
            <StatCard label="Scope" value={venue.scope} />
          </div>

          <div style={{
            background: 'rgba(114,168,255,0.13)',
            border: '0.5px solid rgba(114,168,255,0.28)',
            borderRadius: 'var(--radius-md)',
            padding: '8px 10px',
            fontSize: '11px',
            color: '#9dc0ff',
            marginBottom: '10px',
            lineHeight: 1.5,
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(157,192,255,0.7)', marginRight: '5px' }}>
              ORIGIN
            </span>
            {venue.originPrecision}
          </div>

          <div style={{
            background: 'rgba(10, 10, 15, 0.72)',
            border: '0.5px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 'var(--radius-md)',
            padding: '9px 10px',
            marginBottom: '10px',
          }}>
            <div style={{
              fontSize: '9px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-faint)',
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              marginBottom: '5px',
            }}>
              Known For
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              {venue.knownFor}
            </div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '0.5px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 'var(--radius-md)',
            padding: '9px 10px',
            marginBottom: '10px',
          }}>
            <div style={{
              fontSize: '9px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-faint)',
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              marginBottom: '5px',
            }}>
              Public Attribution
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              {venue.attribution}
            </div>
          </div>

          <div style={{ fontSize: '10px', color: 'var(--text-faint)' }}>
            Source basis: {venue.sourceLabel}
          </div>
        </div>
      )}
    </div>
  );
}
