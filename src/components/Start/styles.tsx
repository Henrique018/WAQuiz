import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Typography, Box, useMediaQuery } from '@material-ui/core';

export const CustomTypography = styled(Typography)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightMedium};
    ${useMediaQuery(theme.breakpoints.up('md')) &&
    css`
      font-size: 2rem;
    `};
  `}
`;

export const IllustrationWrapper = styled(Box)`
  ${({ theme }) => css`
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
  `}
`;
