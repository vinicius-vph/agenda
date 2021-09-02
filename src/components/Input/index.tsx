import React, {
  useRef,
  useEffect,
} from 'react';

import { useField } from '@unform/core';

import { IInputProps } from '../../types';

import { Container } from "./styles";

const Input: React.FC<IInputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container name={name}>
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
};

export default Input;