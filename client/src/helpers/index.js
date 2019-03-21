export function parseFilters(filters) {
    return (filters && filters.split(',').map(Number)) || [];
}
