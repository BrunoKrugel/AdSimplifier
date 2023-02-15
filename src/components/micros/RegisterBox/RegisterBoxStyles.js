import styled from "styled-components";
import {adSimplifierTheme} from "@/themes/adSimplifier-theme";

export const MarginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 32px;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${adSimplifierTheme.breakpoints.xsm}){
    padding: 16px;
  }
`;
export const Title = styled.h1`
  font-family: ${adSimplifierTheme.fonts.roboto};
  font-size: 28px;
  font-weight: ${adSimplifierTheme.fontWeights.black};
  color: ${props => props.color? props.color : adSimplifierTheme.colors.outerSpace };
  text-align: center;
`;

export const Line = styled.hr`
  width: 100%;
  border-top: 2px solid ${adSimplifierTheme.colors.black10};
`;
