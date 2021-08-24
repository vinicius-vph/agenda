import React, { 
  InputHTMLAttributes, 
  useCallback, 
  useRef, 
  useState, 
  useEffect, 
} from "react";

import { useField } from '@unform/core';

import { Container } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<IInputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused} name={name}>
      <input 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur} 
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  ) 

};

export default Input;