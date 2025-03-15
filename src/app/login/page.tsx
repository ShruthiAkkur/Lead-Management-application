'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Title, StyledForm, Label, Input, ErrorAlert, LoginCard, StyledContainer, Button, FormGroup } from "../styles/styledComponents";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dummyapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        
        localStorage.setItem('token', data.token);
        localStorage.setItem('userData', JSON.stringify(data.user));
        
        
        router.push('/leads');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/leads');
    }
  }, [router]);

  return (
    <StyledContainer>
      <LoginCard>
        <Title>Login</Title>
        {error && <ErrorAlert>{error}</ErrorAlert>}
        <StyledForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Email address</Label>
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>

          <Button type="submit">
            Login
          </Button>
        </StyledForm>
      </LoginCard>
    </StyledContainer>
  );
};

export default LoginPage;