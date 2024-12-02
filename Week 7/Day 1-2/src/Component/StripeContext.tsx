// src/StripeContext.tsx
import React, { createContext, useContext } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load your Stripe public key (get it from your Stripe dashboard)
const stripePromise = loadStripe('pk_test_51QPfwVABp1KJlVmplqeMwqN8TLAjkI0fJy2bhdS89zrY4yXWG5ABtUTEDOz5AUfvTY4HW9SOOof8pUbdDqZhA7iA00GXu1zBgb');  // Replace with your actual key

const StripeContext = createContext<any>(null);

export const StripeProvider: React.FC <{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
};

export const useStripeContext = () => useContext(StripeContext);
