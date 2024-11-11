import './App.css';
import RegisterForm from './Form';
import { ThemeProvider } from './theme-context'; // Import ThemeProvider

function App() {
  return (
    <ThemeProvider>
      <RegisterForm />
    </ThemeProvider>
  );
}

export default App;
