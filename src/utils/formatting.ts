import type { WorkProps } from '@/types/work';

export const formatDateRange = (work?: WorkProps): string | undefined => {
  if (!work) {
    return undefined;
  }

  if (typeof work.end === 'string') {
    return `${work.start} → ${work.end}`;
  }

  return `${work.start} → ${work.end.label}`;
};
