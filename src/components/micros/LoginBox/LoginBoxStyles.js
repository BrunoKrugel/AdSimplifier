import styled from 'styled-components';
import { adSimplifierTheme } from '@/themes/adSimplifier-theme';

export const MarginContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: ${adSimplifierTheme.breakpoints.xsm}) {
    margin: 16px;
  }
`;

export const Title = styled.h1`
  font-family: ${adSimplifierTheme.fonts.roboto};
  font-size: 28px;
  font-weight: ${adSimplifierTheme.fontWeights.black};
  color: ${(props) =>
    props.color ? props.color : adSimplifierTheme.colors.outerSpace};
  text-align: center;
`;

export const Line = styled.hr`
  width: 100%;
  border-top: 2px solid ${adSimplifierTheme.colors.black10};
`;

export const CreateAccount = styled.div`
  display: flex;
  width: 100%;
  height: 14px;
  justify-content: center;
  button {
    font-family: ${adSimplifierTheme.fonts.openSans};
    font-weight: ${adSimplifierTheme.fontWeights.semiBold};
    font-size: 14px;
    color: ${(props) =>
      props.color ? props.color : adSimplifierTheme.colors.darkLavender};
    border: none;
    background: transparent;
    &:hover {
      cursor: pointer;
    }
  }
`;
