import type { FC, SVGAttributes } from 'react';

export const ChevronRightIcon: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="#71717A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HorizontalDotsIcon: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    width="16"
    height="2"
    viewBox="0 0 16 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 2C8.55228 2 9 1.55228 9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1C7 1.55228 7.44772 2 8 2Z"
      fill="#71717A"
    />
    <path
      d="M15 2C15.5523 2 16 1.55228 16 1C16 0.447715 15.5523 0 15 0C14.4477 0 14 0.447715 14 1C14 1.55228 14.4477 2 15 2Z"
      fill="#71717A"
    />
    <path
      d="M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z"
      fill="#71717A"
    />
  </svg>
);

export const LinkIcon: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H9C11.7614 17 14 14.7614 14 12M16.5 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H15C12.2386 7 10 9.23858 10 12"
      stroke="#71717A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UserIcon: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
      stroke="#71717A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
