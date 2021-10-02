import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Stack, useMediaQuery } from '@material-ui/core';

export const CustomStack = styled(Stack)`
  ${({ theme }) => css`
    max-width: 650px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(5)} ${theme.spacing(3)};

    svg {
      margin: ${theme.spacing(6)};
    }

    ${useMediaQuery(theme.breakpoints.up('md')) &&
    css`
      svg {
        width: 800px;
        height: 250px;
      }
    `};
  `};
`;
