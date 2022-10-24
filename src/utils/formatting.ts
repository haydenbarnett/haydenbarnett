import { DocumentProps } from '@/types/documents';
import { roles, RoleProps } from '../data';

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

export const findRole = (document: DocumentProps) => {
  if (!document) return undefined;
  return roles.find(
    (instance) =>
      document.slug ?? slugify(document.title) === slugify(instance.company)
  );
};

export const findDocument = (
  documents: any[],
  workInstance: Record<any, any>
): DocumentProps | undefined => {
  if (!documents || !workInstance) return undefined;
  return documents.find(
    (instance) => instance.slug === slugify(workInstance.company)
  );
};

export const formatDateRange = (role?: RoleProps) => {
  if (!role) return undefined;
  let endDate = '';
  if (typeof role.end === 'string') {
    return `${role.start} → ${role.end}`;
  }
  return `${role.start} → ${role.end.label}`;
};
