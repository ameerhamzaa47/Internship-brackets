import { FC, useState } from 'react';
import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const Payment: FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isClientSecretUsed, setIsClientSecretUsed] = useState(false);


  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (isClientSecretUsed) {
      alert('Already added!');
      return;
    }

    if (!stripe || !elements || !clientSecret) {
      alert('Please wait, Stripe is loading...');
      return;
    }

    setLoading(true);

    const cardNumber = elements.getElement(CardNumberElement);
    const cardExpiry = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);

    if (!cardNumber || !cardExpiry || !cardCvc) {
      console.error('One or more card elements not found');
      setLoading(false);
      return;
    }

    try {
      // Confirm the payment using the client_secret from Stripe CLI
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumber,
        },
      });

      if (error) {
        console.error('Payment failed', error.message);
        setLoading(false);
        alert('Payment Failed!');
        return;
      }

      setIsClientSecretUsed(true);

      // Payment successful
      console.log('Payment successful!', paymentIntent);
      alert('Payment Successful!');
      setLoading(false);
    } catch (err:unknown) {
      console.error('Error during payment processing:', err);
      setLoading(false);
    }
  };

  // Simulating fetching client_secret from Stripe CLI
  const fetchClientSecret = () => {
    // Replace with the actual client_secret from the server or Stripe CLI
    const generatedClientSecret = 'pi_3QQRKeABp1KJlVmp0odRpo3g_secret_gPuVbcfIvYvJdMfUHGxG4m966';
    setClientSecret(generatedClientSecret);
  };

  React.useEffect(() => {
    fetchClientSecret();
  }, []);

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Payment</h2>

            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
              <form onSubmit={handleSubmit} action="#" className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8">
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Full name (as displayed on card)*</label>
                    <input type="text" id="full_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900" placeholder="Bonnie Green" required />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Card number*</label>
                    <CardNumberElement
                      id="card-number-input"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      options={{
                        style: {
                          base: {
                            fontSize: '16px',
                            color: '#32325d',
                            letterSpacing: '0.025em',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            '::placeholder': {
                              color: '#aab7c4',
                            },
                          },
                        },
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="card-expiration-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Card expiration*</label>
                    <CardExpiryElement
                      id="card-expiration-input"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      options={{
                        style: {
                          base: {
                            fontSize: '16px',
                            color: '#32325d',
                            letterSpacing: '0.025em',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            '::placeholder': {
                              color: '#aab7c4',
                            },
                          },
                        },
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="cvv-input" className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">CVV*</label>
                    <CardCvcElement
                      id="cvv-input"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      options={{
                        style: {
                          base: {
                            fontSize: '16px',
                            color: '#32325d',
                            letterSpacing: '0.025em',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            '::placeholder': {
                              color: '#aab7c4',
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center bg-red-300 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none"
                  disabled={loading || !stripe || !clientSecret}
                >
                  {loading ? 'Processing...' : 'Pay Now'}
                </button>
              </form>

              <div className="mt-6 grow sm:mt-8 lg:mt-0">
          <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">$6,592.00</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                <dd className="text-base font-medium text-green-500">-$299.00</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">$799</dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">$7,191.00</dd>
            </dl>
          </div>

          <div className="mt-6 flex items-center justify-center gap-8">
            <img className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="" />
            <img className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="" />
            <img className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
            <img className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
            <img className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
            <img className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" alt="" />
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
        Payment processed by <a href="#" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Paddle</a> for <a href="#" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Flowbite LLC</a>
        - United States Of America
      </p>

          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;