import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const cqbsPlugin = createPlugin({
  id: 'cqbs',
  routes: {
    root: rootRouteRef,
  },
});

export const CqbsPage = cqbsPlugin.provide(
  createRoutableExtension({
    name: 'CqbsPage',
    component: () =>
      import('./components/CloudQueryComponent').then(m => m.CloudQueryComponent),
    mountPoint: rootRouteRef,
  }),
);
