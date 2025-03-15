/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { 
  FormContainer, Title, StyledForm, 
  FormGroup, Input,
  TextArea, Button,
  CheckboxGroup, CheckboxLabel 
} from "./styles/styledComponents";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      console.log(data);
      window.location.href = '/thankyou';
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getErrorMessage = (error: any): string => {
    if (typeof error === 'string') return error;
    if (error?.message && typeof error.message === 'string') return error.message;
    return 'An error occurred';
  };

  const visaOptions = [
    { id: 'O-1', label: 'O-1' },
    { id: 'EB-1A', label: 'EB-1A' }, 
    { id: 'EB2-NIW', label: 'EB2-NIW' },
    { id: "I don't know", label: "I don't know" }
  ];

  const countryOptions = [
    { value: "US", label: "United States" },
    { value: "UK", label: "United Kingdom" },
    { value: "CA", label: "Canada" },
    { value: "AU", label: "Australia" },
    { value: "DE", label: "Germany" },
    { value: "FR", label: "France" },
    { value: "JP", label: "Japan" },
    { value: "CN", label: "China" },
    { value: "IN", label: "India" },
    { value: "BR", label: "Brazil" }
  ];

  return (
    <>
      <FormContainer>
        <div style={{ 
          backgroundColor: '#E8F5E9', 
          padding: '2rem 0',
          width: '100%',
          marginBottom: '0',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <h1 style={{
            fontSize: '1.8rem', 
            fontWeight: '700',
            textTransform: 'lowercase',
            letterSpacing: '1px',
            color: '#000000',
            paddingLeft: "250px",
            paddingBottom: "10px",
          }}>alma</h1>
          <Title style={{paddingLeft:"250px"}}> Get An Assessment <br></br>
          Of Your Immigration Case</Title>
        </div>
        <div style={{background: 'white', display: 'flex', justifyContent: 'center', maxWidth: 'none'}}>
          <StyledForm 
            onSubmit={handleSubmit(onSubmit)}
            style={{
              borderRadius: '0px',
              justifyContent: 'center',
              maxWidth: 'none',
              width: '100%',
              margin: '0 auto',
              padding: '15rem',
              paddingTop: '2rem'
            }}
          >
            <div>
              <Title>Want to understand your options?</Title>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#333'
              }}>
                Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals.        
              </p>
            </div>
            <div style={{ marginBottom: '2rem' }}></div>
            
            <FormGroup>
              <Input 
                {...register("firstName", { required: "First name is required" })}
                id="firstName" 
                type="text" 
                placeholder="First Name"
                error={errors.firstName} 
              />
              {errors.firstName && <span style={{color: 'red'}}>{getErrorMessage(errors.firstName)}</span>}
            </FormGroup>       
            
            <FormGroup>
              <Input 
                {...register("lastName", { required: "Last name is required" })}
                id="lastName" 
                type="text" 
                placeholder="Last Name"
                error={errors.lastName}
              />
              {errors.lastName && <span style={{color: 'red'}}>{getErrorMessage(errors.lastName)}</span>}
            </FormGroup>
            
            <FormGroup>
              <Input 
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                id="email" 
                type="email" 
                placeholder="Email"
                error={errors.email}
              />
              {errors.email && <span style={{color: 'red'}}>{getErrorMessage(errors.email)}</span>}
            </FormGroup>

            <FormGroup>
              <Input
                as="select"
                {...register("country", { required: "Please select your country" })}
                id="country"
                defaultValue=""
                error={errors.country}
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%3E%3Cpath%20d%3D%22M7%2010L1%204h12z%22%2F%3E%3C%2Fsvg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.7rem top 50%',
                  backgroundSize: '0.65rem auto',
                  backgroundColor: 'white',
                  color: 'black',
                  padding: '0.75rem',
                  paddingRight: '2rem',
                  cursor: 'pointer',
                  pointerEvents: 'auto',
                  zIndex: 1
                }}
              >
                <option value="" disabled>Country of Citizenship</option>
                {countryOptions.map(country => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </Input>
              {errors.country && <span style={{color: 'red'}}>{errors.root?.message}</span>}
            </FormGroup>

            <FormGroup>
              <Input 
                {...register("personalPortfolio", {
                  pattern: {
                    value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                    message: "Please enter a valid URL"
                  }
                })}
                id="personalPortfolio" 
                type="url" 
                placeholder="linkedin/personal website URL"
                error={errors.personalPortfolio}
              />
              {errors.personalPortfolio && <span style={{color: 'red'}}>{getErrorMessage(errors.personalPortfolio)}</span>}
            </FormGroup>

            <FormGroup>
              <Input
                {...register("resume", { required: "Please upload your resume" })}
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                placeholder="Upload a file"
                error={errors.resume}
              />
              {errors.resume && <span style={{color: 'red'}}>{getErrorMessage(errors.resume)}</span>}
            </FormGroup>
            <div style={{ marginBottom: '2rem' }}></div> 
            
            <FormGroup>
              <Title>Visa categories of interest</Title>
              <CheckboxGroup>
                {visaOptions.map(option => (
                  <CheckboxLabel key={option.id} color="black">
                    <input
                      type="checkbox"
                      {...register("visaCategories", { required: "Please select at least one visa category" })}
                      value={option.id}
                    />
                    {option.label}
                  </CheckboxLabel>
                ))}
              </CheckboxGroup>
              {errors.visaCategories && <span style={{color: 'red'}}>{getErrorMessage(errors.visaCategories)}</span>}
            </FormGroup>
            
            <div style={{ marginBottom: '2rem' }}></div>
            
            <FormGroup>
              <Title>How can we help you?</Title>
              <TextArea 
                {...register("message", { required: "Please provide some details about your case" })}
                id="message" 
                placeholder="Message"
                error={errors.message}
              />
              {errors.message && <span style={{color: 'red'}}>{errors.root?.message}</span>}
            </FormGroup>
            
            <div style={{ marginBottom: '2rem' }}></div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              style={{width:"100%"}}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </StyledForm>
        </div>
      </FormContainer>
    </>
  );
}
