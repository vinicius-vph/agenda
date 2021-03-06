import styled, { css } from 'styled-components';

interface IContainer {
  hasChildren: boolean;
}

export const Container = styled.header<IContainer>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  margin: 0 0 16px;
  padding: 16px;
  
  div.Rectangle {
    height: 32px;
    padding: 8px 22px 8px 16px;
    margin: 0 24px 0 0;
  }

  img.ic_logo {
    width: 148px;
    height: 32px;
    /* margin: 0 60px 0 0; */
    object-fit: contain;
  }
  
  .busca_field {
    display: flex;
    align-items: center;
    width: 35%;
    height: 32px;
    margin: 0;
    padding: 7px 8px 6px;
    border-radius: 4px;
    background-color: var(--pale-lilac);

    input {
      background-color: var(--pale-lilac);
      border: none;
      width: 95%;
    }
  }
  
  .Buscar {
    width: 63px;
    height: 19px;
    margin: 0px 937px 0 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--bluey-grey);
  }

  img.ic_search {
    width: 16px;
    height: 16px;
    margin: 1px 0 0px 0px;
    object-fit: contain;
  }
  
  ${props => 
    !props.hasChildren && 
    css`
      .busca_field {
        margin-left: 168px;
      }  
    `
  }
`;
