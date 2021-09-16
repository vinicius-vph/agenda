import styled, { css } from 'styled-components';

export const Container = styled.section`
  min-width: 500px;
  background-color: #f8f9fd;
  margin: 0 auto;

  .Contatos, 
  .E-mail, 
  .Telefone, 
  .Criar-contato,
  .Nenhum-contato-foi-c {
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--bluey-grey);
    height: 15px;
  }
  
  ${props => props.className === "Agenda-vazia" &&
    css`
      .Adjust-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 80px;
      }

      img.ic_book {
        width: 237px;
        height: 200px;
        margin: 0 0 24px 1px;
        object-fit: contain;
      }

      .Nenhum-contato-foi-c {
        width: 238px;
        height: 19px;
        margin: 0 auto;
        font-size: 16px;
        text-align: center;
        color: var(--dark);
      }
    `
  }
  
  ${props => props.className === "Contato-criado-com-sucesso" &&
    css`
      .Rectangle-head {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 40px;
        margin: 16px 16px 1px 16px;
        padding: 8px 16px 8px 8px; 
        border-radius: 4px;
        border: solid 1px var(--white);
        background-color: var(--white-two);

        .Contatos {
          width: 34%;
        }
      
        .E-mail,.Telefone {
          width: 33%;
        }
      }
    `
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
      border: none;

    }

    img.ic_plus {
      width: 16px;
      height: 16px;
      margin: 0 8px 0 0;
      object-fit: contain;
    }

    .Criar-contato {
      width: 82px;
      height: 16px;
      margin: 0;
      font-size: 14px;
      font-weight: 500;
      color: #fa7268;
    }
`;
