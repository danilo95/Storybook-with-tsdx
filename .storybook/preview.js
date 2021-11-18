import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withThemes } from 'storybook-addon-themes/react';
import { ApplaudoThemeProvider } from '../src/providers';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
// https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args

//Theme Decorators
addDecorator(withThemes);

const ThemeDecorator = ({ children, themeName }) => {
  return (
    <>
      {themeName === 'Applaudo Theme' && (
        <ApplaudoThemeProvider>{children}</ApplaudoThemeProvider>
      )}
    </>
  );
};

// console messages
addDecorator((storyFn, message) => withConsole()(storyFn)(message));

export const parameters = {
  actions: { argTypesRegex: '^.(onClick|onChange)*' },
  themes: {
    default: 'Applaudo Theme',
    clearable: false,
    list: [{ name: 'Applaudo Theme', color: '#FF4040' }],
    Decorator: ThemeDecorator,
  },
};
