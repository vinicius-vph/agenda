import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Form = styled(Unform)`
  .Criar-novo-contato {
    width: 132px;
    height: 19px;
    margin: 0 124px 0 16px;
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
    margin: 0;
    border: solid 1px var(--cloudy-blue);
  }

  .Nome {
    width: 38px;
    height: 16px;
    margin: 0 210px 0 24px;
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
    margin: 0 209px 0 24px;
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
    margin: 0 193px 0 24px;
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
    margin: 23px 16px 8px 256px;
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
`;
