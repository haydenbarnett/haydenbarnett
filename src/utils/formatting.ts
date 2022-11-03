import { DocumentProps } from '@/types/documents';

export const slugify = (value: string) => {
  return value.toLowerCase().replace(/[\s_-]+/g, '-');
};

export const formatDate = (dateString: string) => {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
};

export const formatYear = (dateString: string) => {
  return new Date(`${dateString}T00:00:00Z`).getFullYear();
};

export const formatDateRange = (document?: DocumentProps) => {
  if (!document) return undefined;
  let endDate = '';
  if (typeof document.end === 'string') {
    return `${document.start} → ${document.end}`;
  }
  return `${document.start} → ${document.end?.label}`;
};
