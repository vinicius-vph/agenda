import styled, { css } from 'styled-components';
import IContainerProps from './dtos/IContainerPropsDTO';

export const Container = styled.div<IContainerProps>`
  .text_field {
    ${props =>
      props.name === 'name' &&
      css`
        width: 384px;
        height: 32px;
        margin: 4px 24px 16px;
        padding: 9px 0px 7px 10px;
        border-radius: 4px;
        border: solid 1px var(--cloudy-blue);
        background-color: var(--white-two);
      `
    }

    ${props =>
      props.name === 'email' &&
      css`
        width: 384px;
        height: 32px;
        margin: 4px 24px 14px;
        padding: 8px 0px 8px 10px;
        border-radius: 4px;
        border: solid 1px var(--cloudy-blue);
        background-color: var(--white-two);
      `
    }

    ${props =>
      props.name === 'phone' &&
      css`
        width: 128px;
        height: 32px;
        margin: 4px 120px 22px 24px;
        padding: 8px 14px 8px 10px;
        border-radius: 4px;
        border: solid 1px var(--cloudy-blue);
        background-color: var(--white-two);
      `
    }
  }

`;