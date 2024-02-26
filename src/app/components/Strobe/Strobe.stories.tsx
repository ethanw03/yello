// Strobe.stories.tsx
import React from 'react';
import Strobe from './Strobe'; // Adjust the import path as needed

export default {
  title: 'Components/Strobe',
  component: Strobe,
};

export const Default = {
  args: {
    onCompleted: () => console.log('Strobe Animation completed'),
  },
};
