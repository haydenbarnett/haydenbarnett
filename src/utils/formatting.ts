export const slugify = (value: string): string =>
  value.toLowerCase().replace(/[\s_-]+/gu, '-');

export const formatDate = (dateString: string): string =>
  new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

export const formatYear = (dateString: string): number =>
  new Date(`${dateString}T00:00:00Z`).getFullYear();
