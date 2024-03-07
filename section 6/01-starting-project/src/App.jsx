import  AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
import TestColor from './components/TestColor.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
        <TestColor></TestColor>
      </main>
    </>
  );
}
