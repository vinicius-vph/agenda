import styled, { css } from 'styled-components';
import { ButtonProps } from '../../types';

export const Container = styled.button<ButtonProps>`
  width: 72px;
  height: 32px;
  margin: 15px 16px 0;
  opacity: 0.32;
  border-radius: 16px;
  box-shadow: inset 0 0 0 1px rgba(255, 
    255, 255, 0.16), 0 0 0 0.5px rgba(0, 
      0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 
        0, 0, 0.08), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
  background-color: #fa7268;
  border: none;

  ${props => 
    props.isFilled && 
    css`
      opacity: 1;
    `
  }

  .Salvar {
    width: 40px;
    height: 16px;
    opacity: 0.32;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: var(--white-two);

    ${props => 
      props.isFilled &&
      css`
        opacity: 1;
      `
    }
  }
`;
