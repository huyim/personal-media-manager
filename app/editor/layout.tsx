import { TabGroup } from '#/ui/tab-group';
import React from 'react';

const title = 'Editor';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div>{children}</div>
    </div>
  );
}
