import styled from 'styled-components';

export const Container = styled.div`
  // empty address book
  .Agenda-vazia {
    width: 1440px;
    height: 1024px;
    padding: 0 0 557px;
    background-color: #f8f9fd;
    margin: 0 auto;
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
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fa7268;
  }

  /* .Criar-novo-contato {
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
  } */

  // full address book
  .Contato-criado-com-sucesso {
    width: 1440px;
    height: 1024px;
    padding: 0 0 460px;
    background-color: #f8f9fd;

    .Rectangle2 {
      width: 1408px;
      height: 40px;
      margin: 16px 16px 1px 16px;
      padding: 16px 437px 9px 47px;
      border-radius: 4px;
      border: solid 1px var(--white);
      background-color: var(--white-two);
  
      .Contatos {
        width: 53px;
        height: 15px;
        margin: 0 335px 0 0;
        font-family: Roboto;
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: var(--bluey-grey);
      }
  
      .E-mail {
        width: 36px;
        height: 15px;
        margin: 0 448px 0 0;
        font-family: Roboto;
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: var(--bluey-grey);
      }
  
      .Telefone {
        width: 51px;
        height: 15px;
        // margin: 0 0 0 0;
        font-family: Roboto;
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: var(--bluey-grey);
      }

    }
  }

  .Rectangle3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1408px;
    height: 40px;
    margin: 1px 16px 0 16px;
    padding: 8px 16px 8px 8px;
    border-radius: 4px;
    border: solid 1px var(--white);
    background-color: var(--white-two);

    &:hover {
      background-color: var(--very-light-pink);
    }
    

    .Oval {
      display: inline;
      width: 24px;
      height: 24px;
      margin: 0 16px 0 0;
      border-radius: 50%;
      padding: 3px 5px 2px 6px;
      background-color: #fa8d68;

      a {
        width: 13px;
        height: 19px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: var(--white-two);
        text-decoration: none;
      }
    }

    .Vincius {
      width: 36px;
      height: 16px;
      margin: 4px 0px 4px 16px;
      font-family: Roboto;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: var(--dark);
    }

    img.ic_edit {
      width: 16px;
      height: 16px;
      margin: 4px 24px 0px 0px;
      object-fit: contain;
    }

    img.ic_delete {
      width: 16px;
      height: 16px;
      margin: 4px 0 0px 0;
      object-fit: contain;
    }
  }
  

`;