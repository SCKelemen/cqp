import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { cqbsPlugin, CqbsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(cqbsPlugin)
  .addPage({
    element: <CqbsPage />,
    title: 'Root Page',
    path: '/cqbs'
  })
  .render();
