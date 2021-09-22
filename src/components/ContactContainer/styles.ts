import styled, { css } from 'styled-components';
import { IContactContainerProps } from '../../types/';

export const Container = styled.div <Omit<IContactContainerProps, 'handleDeletingContact' | 'handleEditContact'>>`
  ${props => 
    props.contact.name === props.filteredContact?.name && 
    css`
      {
        border: 1px solid #fa7268;
        background-color: yellow;
      }    
    `
  }

  ${props => 
    props.filteredContact?.name !== props.contact.name && 
    typeof props.filteredContact?.id === 'string' &&
    css`
      {
        display: none;
      }    
    `
  }

  {
    ${props => 
      props.idToHighlight === props.contact.id && 
      css`
        background-color: var(--very-light-pink);
      `
    }
  }

  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  padding: 8px 16px 8px 8px; 
  border-radius: 4px;
  border: solid 1px var(--white);
  background-color: var(--white-two);

  &:hover {
    background-color: var(--very-light-pink);
  }

  .Rectangle-flex {
    width: 33%;
    display: flex;
    flex-direction: row;
    align-items: center;

  }
  .Rectangle-flex:first-of-type {
    width: 34%;
   
  }

  .Rectangle-flex:last-of-type {
    justify-content: space-between;
  }
  
  .Oval {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin: 0 16px 0 0;
	  border-radius: 15px;
    padding: 3px 5px 2px 6px;
    background-color: #fa8d68;
    
    span {
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

  .Contact-name {
    width: 110px;
    height: 16px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark);
  }
  .Button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    img.ic_edit, img.ic_delete {
      width: 16px;
      height: 16px;
      object-fit: contain;
    }
  
    img.ic_delete {
      margin-left: 12px;
    }
  }
`;
