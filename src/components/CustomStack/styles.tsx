import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Stack } from '@material-ui/core';

export const CustomStack = styled(Stack)`
  ${({ theme }) => css`
    max-width: 700px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(5)} ${theme.spacing(3)};
  `};
`;
