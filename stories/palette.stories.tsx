import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography } from '@material-ui/core';
import palette from '../src/themes/Applaudo/tokens/Palette';
import Grid from '@material-ui/core/Grid';
import { conditionalExpression } from '@babel/types';

export default {
  title: 'Foundations/Palette',
} as Meta;

export const MainPalette: Story = () => {
  const keys = Object.keys(palette);
  const notValueKeys: string[] = [
    'type',
    'contrastThreshold',
    'getContrastText',
    'augmentColor',
    'tonalOffset',
    'divider',
  ];
  const getValidKeys = (a: string[], ...arr: any[]) =>
    [...new Set(a)].filter((v) => arr.every((b) => !b.includes(v)));

  const validkeys = getValidKeys(keys, notValueKeys);

  return (
    <div>
      {validkeys.map((title) => (
        <>
          <Typography key={title} variant="h4">
            {title}
          </Typography>
          {Object.keys(palette[title]).map((colorTitle) => (
            <Grid container direction="row" justifyContent="flex-start">
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: `${palette[title][colorTitle]}`,
                  boxShadow: '0px 5px 24px -5px rgb(14 31 53 / 15%)',
                }}
              />
              <p
                style={{ marginLeft: '5px' }}
              >{`${colorTitle}  ${palette[title][colorTitle]}`}</p>
            </Grid>
          ))}
        </>
      ))}
    </div>
  );
};
