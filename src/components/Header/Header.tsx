import type { FC } from 'react';

import { Container } from '../Container';
import { MobileNavigation } from '../MobileNavigation';
import { DesktopNavigation } from '../DesktopNavigation';
import { Avatar } from '../Avatar';
import { ModeToggle } from '../ModeToggle';

export const Header: FC = () => {
  return (
    <>
      <header className="relative z-50 flex flex-col">
        <div className="top-0 z-10 h-16 pt-6">
          <Container>
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                <Avatar />
              </div>
              <div className="flex justify-end gap-4 md:flex-1">
                <MobileNavigation />
                <DesktopNavigation />
                <ModeToggle />
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};
