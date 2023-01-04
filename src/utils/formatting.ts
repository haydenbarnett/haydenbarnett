import type { DocumentProps } from '@/types/documents';

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
