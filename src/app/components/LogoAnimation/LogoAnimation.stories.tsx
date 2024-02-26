// LogoAnimation.stories.tsx
import React from 'react';
import LogoAnimation from './LogoAnimation';

export default {
  title: 'Components/LogoAnimation',
  component: LogoAnimation,
};

// Template without args parameter
const Template: React.VFC = () => <LogoAnimation />;

export const Default = Template.bind({});
// Since there are no args to pass, you can omit the args property or leave it as an empty object
