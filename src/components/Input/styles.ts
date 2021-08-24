import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  name: string;
}

export const Container = styled.div<IContainerProps>`
  .text_field {
    ${props =>
      props.name === 'name' &&
      css`
        width: 384px;
        height: 32px;
        margin: 4px 24px 16px;
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
        border-radius: 4px;
        border: solid 1px var(--cloudy-blue);
        background-color: var(--white-two);
      `
    }
  }

`;

// input {
//   flex: 1;
//   background: transparent;
//   width: 100%;
//   height: 40%;
//   border-color: green;

//   &::placeholder {
//     color: #b7b7cc;
//   }
// }