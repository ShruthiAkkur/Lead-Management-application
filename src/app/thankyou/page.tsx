'use client'
import {  Button } from "../styles/styledComponents";

export default function page() {
  return (
    <div>
      <div style={{
        backgroundColor: 'white',
        width: '100%',
        maxWidth: 'none',
        padding: '4rem',
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#000000',
          fontWeight: '700',
        }}>Thank you!</h2>
        <p style={{
          fontSize: '1.2rem',
          fontWeight: '700',
          color: '#000',
          marginBottom: '2rem',
          maxWidth: '600px'
        }}>
          your information was submitted to our team of immigration<br></br>
          attorneys. Expect an email from hello@tryalma.ai.
        </p>
        <Button
          onClick={() => window.location.href = '/'}
        >
          Back to Homepage
        </Button>
      </div>
    </div>
  )
}