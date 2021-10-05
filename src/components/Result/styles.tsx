import { css } from '@emotion/react';
import { Box, Stack, useMediaQuery } from '@material-ui/core';
import { styled } from '@mui/material/styles';

export const IllustrationWrapper = styled(Box)`
  ${({ theme }) => css`
    svg {
      margin: ${theme.spacing(4)};
    }
    ${useMediaQuery(theme.breakpoints.up('md')) &&
    css`
      svg {
        width: 350px;
        height: 200px;
      }
    `};
  `}
`;

export const QuestionsWrapper = styled(Stack)`
  ${({ theme }) => css`
    background-color: ${theme.palette.secondary.main};
    padding: ${theme.spacing(3)};
    border-radius: ${theme.shape.borderRadius};
    margin: ${theme.spacing(3)};
    max-height: 500px;
    overflow-y: auto;
  `};
`;

export const Question = styled(Box)`
  ${({ theme }) => css`
    background-color: #fff;
    color: #333;
    padding: ${theme.spacing(3)};
    border-radius: ${theme.shape.borderRadius};
    margin: ${theme.spacing(1)};
    position: relative;
  `};
`;

export const IconWrapper = styled(Box)`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: ${theme.spacing(1)};
  `};
`;
