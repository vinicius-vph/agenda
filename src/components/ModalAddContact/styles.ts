import styled, { css } from "styled-components";
import { Form as Unform } from "@unform/web";

interface LabelProps {
  htmlFor: string; 
  labelType: string;
}

export const Form = styled(Unform)`
  .Criar-novo-contato {
    width: 132px;
    height: 19px;
    margin: 0 124px 12.5px 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark);
  } 

  .divisor:first-of-type {
    width: 432px;
    height: 2px;
    margin: 12.5px 0 19.5px;
    border: solid 1px var(--cloudy-blue);
  }

  .divisor:last-of-type {
    width: 432px;
    height: 2px;
    margin: 22px 0 15px;
    border: solid 1px var(--cloudy-blue);
  }

  .Nome {
    width: 38px;
    height: 16px;
    margin: 19.5px 210px 4px 24px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark);
  }
  
  .E-mail {
    width: 39px;
    height: 16px;
    margin: 16px 209px 4px 24px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark);
  }
  
  .Telefone {
    width: 55px;
    height: 16px;
    margin: 14px 193px 4px 24px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark);
  }

  .Cancelar {
    width: 56px;
    height: 16px;
    margin: 23px 16px 8px 278px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fa7268;
  }

  .Rectangle-Copy {
    display: inline;
    width: 72px;
    height: 32px;
    margin: 15px 16px 16px 0;
    padding: 8px 16px;
    opacity: 0.32;
    border-radius: 16px;
    box-shadow: inset 0 0 0 1px rgba(255, 
      255, 255, 0.16), 0 0 0 0.5px rgba(0, 
        0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 
          0, 0, 0.08), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
    background-color: #fa7268;
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
  }
`;
