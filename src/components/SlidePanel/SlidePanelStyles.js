import styled from 'styled-components';
import { adSimplifierTheme } from '@/themes/adSimplifier-theme';

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${({ color }) => adSimplifierTheme.palette.secondary.dark};
  margin-left: 10px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 16px 6px;
`;
