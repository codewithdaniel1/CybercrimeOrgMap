import { GROUPS, getDisplayName, getTypeMeta, scopeWeight } from '../data/groups.js';

function matchesBounds(group, bounds) {
  if (!bounds) return true;

  const withinLat = group.lat >= bounds.south && group.lat <= bounds.north;
  const crossesDateLine = bounds.west > bounds.east;
  const withinLng = crossesDateLine
    ? group.lng >= bounds.west || group.lng <= bounds.east
    : group.lng >= bounds.west && group.lng <= bounds.east;

  return withinLat && withinLng;
}

function matchesSearch(group, searchQuery) {
  if (!searchQuery.trim()) return true;

  const haystack = [
    getDisplayName(group),
    group.country,
    group.city,
    group.scope,
    group.knownFor,
    group.attribution,
    group.sourceLabel,
    getTypeMeta(group.type).label,
    String(group.firstSeen),
    ...group.tags,
  ]
    .join(' ')
    .toLowerCase();

  const terms = searchQuery
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  return terms.every((term) => haystack.includes(term));
}

export function useGroups(activeFilter, mapBounds, searchQuery) {
  const hasSearch = searchQuery.trim().length > 0;
  const groups = GROUPS
    .filter((group) => hasSearch || activeFilter === 'all' || group.type === activeFilter)
    .filter((group) => matchesSearch(group, searchQuery))
    .filter((group) => hasSearch || matchesBounds(group, mapBounds))
    .sort((a, b) => {
      if (a.scope !== b.scope) {
        return scopeWeight(b.scope) - scopeWeight(a.scope);
      }

      return getDisplayName(a).localeCompare(getDisplayName(b));
    });

  return {
    groups,
    loading: false,
    error: null,
  };
}
