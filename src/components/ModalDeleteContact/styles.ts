import styled, { css } from 'styled-components';

export const Container = styled.div`
  .Excluir-contato {
    width: 106px;
    height: 19px;
    margin: 0 142px 12.5px 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark);
  }
  
  .First-divisor {
    width: 432px;
    height: 2px;
    margin: 12.5px 0 19.5px;
    border: solid 1px var(--cloudy-blue);
  }

  .Deseja-realmente-exc {
    width: 222px;
    height: 16px;
    margin: 19.5px 18px 57px 24px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark);
  }

  .Last-divisor {
    width: 432px;
    height: 2px;
    margin: 57px 0 15px;
    border: solid 1px var(--cloudy-blue);
  }

  .Cancelar {
    width: 56px;
    height: 16px;
    margin: 8px 16px 8px 264px;
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

  .Rectangle-Copy-delete {
    width: 80px;
    height: 32px;
    border: none;

    margin: 0;
    padding: 8px 5px;
    border-radius: 16px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
    background-color: #fa7268;

    .Excluir {
      width: 70px;
      height: 16px;
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
  }
`;