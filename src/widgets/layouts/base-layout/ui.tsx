/* eslint-disable boundaries/element-types */
import { usePageEvent } from 'nextjs-effector';
import type { PropsWithChildren } from 'react';
import { Header } from 'widgets/header';
import { appStarted } from 'shared/config';
// run process logic for all base layout pages
import 'processes/root';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  usePageEvent(appStarted);

  return (
    <>
      <Header />
      <main className="main">{children}</main>
    </>
  );
};
