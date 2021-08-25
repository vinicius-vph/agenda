import styled from "styled-components";

export const Container = styled.div`
  .Secção-principal {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .Nenhum-contato-foi-c {
    width: 238px;
    height: 19px;
    margin: 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: var(--dark);
  }
  
  .Rectangle {
    width: 144px;
    height: 40px;
    margin: 24px 47px 0;
    padding: 12px 22px 12px 16px;
    border-radius: 20px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
    background-color: var(--light-yellowish-green);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .Criar-contato {
    width: 82px;
    height: 16px;
    margin: 0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fa7268;
  }
  
  img.ic_book {
    width: 237px;
    height: 200px;
    margin: 0 0 24px 1px;
    object-fit: contain;
  }
  
  img.ic_plus {
    width: 16px;
    height: 16px;
    margin: 0 8px 0 0;
    object-fit: contain;
  }
`;
