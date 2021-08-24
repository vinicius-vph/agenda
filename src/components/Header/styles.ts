import styled from "styled-components";

export const Container = styled.div`
  .bg_header {
    height: 64px;
    margin: 0 0 96px;
    padding: 16px;
    display: flex;
    align-items: center;
  }
  
  img.ic_logo {
    width: 148px;
    height: 32px;
    margin: 0 228px 0 0;
    object-fit: contain;
  }

  /*input busca*/
  .busca_field {
    display: flex;
    align-items: center;
    width: 1032px;
    height: 32px;
    margin: 0;
    padding: 7px 8px 6px;
    border-radius: 4px;
    background-color: var(--pale-lilac);
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
`;
