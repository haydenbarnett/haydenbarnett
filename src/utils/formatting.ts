import type { DocumentProps } from '@/types/documents';

export const slugify = (value: string) =>
  value.toLowerCase().replace(/[\s_-]+/g, '-');

export const formatDate = (dateString: string) =>
  new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

export const formatYear = (dateString: string) =>
  new Date(`${dateString}T00:00:00Z`).getFullYear();

export const formatDateRange = (document?: DocumentProps) => {
  if (!document) {
    return undefined;
  }

  if (typeof document.end === 'string') {
    return `${document.start} → ${document.end}`;
  }
  return `${document.start} → ${document.end.label}`;
};
