import type { DocumentProps } from '@/types/documents';

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

export const formatDateRange = (
  document?: DocumentProps
): string | undefined => {
  if (!document) {
    return undefined;
  }
  if (typeof document.end === 'string') {
    return `${document.start} → ${document.end}`;
  }
  return `${document.start} → ${document.end.label}`;
};
