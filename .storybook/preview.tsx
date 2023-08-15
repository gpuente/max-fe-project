import React from 'react';
import type { Preview } from "@storybook/react";
import { BackgroundVideo } from '../src/components/BackgroundVideo';
import { AppContainer } from '../src/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const decorators = [
  (Story) => (
    <>
      <BackgroundVideo />
      <AppContainer>
        <Story />
      </AppContainer>
    </>
  ),
];

const preview: Preview = {
  decorators,
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
