import styled from 'styled-components';
import { adSimplifierTheme } from '@/themes/adSimplifier-theme';

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: ${({ color }) => adSimplifierTheme.palette.secondary.main};
`;

export const StyledLink = styled.a`
  color: ${({ color }) => adSimplifierTheme.palette.primary.main};
  text-decoration: none;
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${({ color }) => adSimplifierTheme.palette.secondary.dark};
  margin: 15px;
  text-align: justify;
`;

export const SubText = styled.p`
  font-size: 13px;
  color: ${({ color }) => adSimplifierTheme.palette.secondary.main};
  margin-left: 30px;
`;

export const Container = styled.div`
  display: flex;
  margin: 10px;
`;
