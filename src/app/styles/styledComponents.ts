import React from 'react';
import styled from 'styled-components';

type StyledComponentProps = {
  children?: React.ReactNode;
}

type ImageProps = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

type CheckboxProps = {
  isChecked?: boolean;
  disabled?: boolean;
  size?: string;
}

type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  error?: unknown
}

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const LoginCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const ErrorAlert = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;


export const FormContainer = styled.div<StyledComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 0;
`

export const Title = styled.h1<StyledComponentProps>`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  fontSize: '1.2rem';
  marginTop: '0.5rem';
  color: #000;
`

export const StyledForm = styled.form<StyledComponentProps>`
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  border-radius: 0.5rem;
  padding: 2rem;
  margin-bottom: 1rem;
`

export const FormGroup = styled.div<StyledComponentProps>`
  margin-bottom: 1rem;
`

type LabelProps = StyledComponentProps & {
  htmlFor?: string;
}

export const Label = styled.label<LabelProps>`
  display: block;
  color: #4a5568;
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`


export const Image= styled.img<ImageProps>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.borderRadius || '0'};
  margin-bottom: 0.5rem;
  align-self: center;
  margin-top: 1.5rem;
`;

export const CheckboxGroup = styled.div<CheckboxProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CheckboxLabel = styled.label<CheckboxProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4a5568;
`;



export const Input = styled.input<InputProps>`
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  appearance: none;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  color: #4a5568;
  line-height: 1.25;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66,153,225,0.5);
  }
`

export const TextArea = styled(Input).attrs({ as: 'textarea' })`
  resize: vertical;
`

export const Button = styled.button`
  background: #000000;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  border-radius: '10px';
  type: 'submit;
  width: '100%;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66,153,225,0.5);
  }
`