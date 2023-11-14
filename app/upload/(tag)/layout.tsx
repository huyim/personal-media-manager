import { Boundary } from '#/ui/boundary';
import { TabNavItem } from '#/ui/tab-nav-item';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <TabNavItem href="/upload">Back</TabNavItem>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
