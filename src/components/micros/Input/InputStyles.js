import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.input`
  width: calc(100% - 28px);
  margin-left: 8px;
  background: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.fontSize? props.fontSize : "16px"};
  line-height: ${props => props.lineHeight? props.lineHeight : "16px"};
  color: ${props => props.color? props.color : "#646467"};
  border: none;
  &::placeholder{
    color: ${props => props.color? props.color : "#B8B8B7"};
  }
  &:focus {
    outline: none;
  }
`;

export const InputIcon = styled.img`
    width: 20px;
`;

export const Label = styled.label`
  display: flex;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: ${props => props.colorLabel? props.colorLabel : "#646467"};
  font-size: ${props => props.fontSizeLabel? props.fontSizeLabel : "14px"};
  line-height: ${props => props.lineHeightLabel? props.lineHeightLabel : "22px"};
  padding-bottom: 8px;
`;