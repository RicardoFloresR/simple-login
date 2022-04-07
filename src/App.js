import logo from './logo.svg';
import './App.css';
import {LoginForm} from "./components/login-form";
import { useSelector } from 'react-redux';

function App() {

    const auth = useSelector((state) => state.auth.value);
    const userName = useSelector((state) => state.user.value)

  return (
    <div className="main">
        {auth ? `Welcome mf: ${userName}` : <LoginForm />}
    </div>
  );
}

export default App;
