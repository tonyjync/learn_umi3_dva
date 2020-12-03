// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'E:/www/users/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.tsx').default
  },
  {
    "path": "/phone",
    "exact": true,
    "component": require('@/pages/phone/index.tsx').default
  },
  {
    "path": "/users",
    "exact": true,
    "component": require('@/pages/users/index.tsx').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
