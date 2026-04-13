import { GROUPS, scopeWeight } from '../data/groups.js';

function matchesBounds(group, bounds) {
  if (!bounds) return true;

  const withinLat = group.lat >= bounds.south && group.lat <= bounds.north;
  const crossesDateLine = bounds.west > bounds.east;
  const withinLng = crossesDateLine
    ? group.lng >= bounds.west || group.lng <= bounds.east
    : group.lng >= bounds.west && group.lng <= bounds.east;

  return withinLat && withinLng;
}

export function useGroups(activeFilter, mapBounds) {
  const groups = GROUPS
    .filter((group) => activeFilter === 'all' || group.type === activeFilter)
    .filter((group) => matchesBounds(group, mapBounds))
    .sort((a, b) => {
      if (a.scope !== b.scope) {
        return scopeWeight(b.scope) - scopeWeight(a.scope);
      }

      return a.name.localeCompare(b.name);
    });

  return {
    groups,
    loading: false,
    error: null,
  };
}
