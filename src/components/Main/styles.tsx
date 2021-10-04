import { css } from '@emotion/react';
import { Box } from '@material-ui/core';
import { styled } from '@mui/material/styles';

export const AlternativeWrapper = styled(Box)`
  ${({ theme }) => css`
    border: 1px solid ${theme.palette.secondary.main};
    border-radius: ${theme.shape.borderRadius};
    transition: ${theme.transitions.create('border-width')};

    &:hover {
      border: 3px solid ${theme.palette.primary.main};
    }
  `}
`;
