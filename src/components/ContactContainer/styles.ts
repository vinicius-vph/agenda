import styled, { css } from 'styled-components';
import { IContactContainerProps } from '../../types/';

export const Container = styled.div <Omit<IContactContainerProps, 'handleDeletingContact' | 'handleEditContact'>>`
  div.RectangleBody {
    ${props => props.highlightContact.id === props.contact.id && 
      css`
        background-color: var(--very-light-pink);
      `
    }
  }

  .RectangleBody {
    display: flex;
    flex-direction: row;
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
    
    .Rectangle-flex:first-of-type {flex: 29.5%;}
    .Rectangle-flex:last-of-type {flex: 3%;}

    .Oval {
      display: inline;
      width: 24px;
      height: 24px;
      margin: 0 16px 0 0;
      border-radius: 50%;
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
      width: 36px;
      height: 16px;
      /* margin: 4px 351px 4px 0px; */
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