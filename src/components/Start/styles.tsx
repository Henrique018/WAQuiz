import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Typography, useMediaQuery } from '@material-ui/core';

export const CustomTypography = styled(Typography)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightMedium};
    ${useMediaQuery(theme.breakpoints.up('md')) &&
    css`
      font-size: 2rem;
    `};
  `}
`;
