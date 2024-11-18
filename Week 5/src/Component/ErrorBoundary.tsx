import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error occurred:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className='text-xl font-bold text-center text-red-500 mt-10'>Something went wrong. Please Check Error.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;






// import React, { useState, ReactNode, useEffect } from 'react';

// interface Props {
//   children: ReactNode;
// }

// const ErrorBoundary: React.FC<Props> = ({ children }) => {
//   const [hasError, setHasError] = useState(false);

//   const ErrorFallback = () => (
//     <div>
//       <h1>Something went wrong. Please try again later.</h1>
//     </div>
//   );

//   const handleError = (error: Error) => {
//     console.error('Error occurred:', error);
//     setHasError(true);
//   };

//   useEffect(() => {
//     window.addEventListener('error', (event) => {
//       handleError(event.error);
//     });
//     return () => {
//       window.removeEventListener('error', (event) => {
//         handleError(event.error);
//       });
//     };
//   }, []);

//   if (hasError) {
//     return <ErrorFallback />;
//   }

//   return <>{children}</>;
// };

// export default ErrorBoundary;