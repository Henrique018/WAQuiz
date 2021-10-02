import { ReactNode } from 'react';
import * as S from './styles';

type CustomStackProps = {
  children: ReactNode;
};

const CustomStack = ({ children }: CustomStackProps) => {
  return <S.CustomStack>{children}</S.CustomStack>;
};

export default CustomStack;
