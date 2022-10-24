import type { FC } from 'react';

import { Container } from '../Container';
import { MobileNavigation } from '../MobileNavigation';
import { DesktopNavigation } from '../DesktopNavigation';
import { Avatar } from '../Avatar';
import { ModeToggle } from '../ModeToggle';

export const Header: FC = () => {
  return (
    <>
      <header className="pointer-events-none relative z-50 flex flex-col">
        <div className="top-0 z-10 h-16 pt-6">
          <Container>
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                <Avatar />
              </div>
              <div className="flex justify-end gap-4 md:flex-1">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};
