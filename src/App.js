import logo from './logo.svg';
import './App.css';
import {LoginForm} from "./components/login-form";
import { Provider } from 'react-redux';
import Store from './store';

function App() {
  return (
    <Provider store={Store}>
        <div className="App">
            <header className="App-header">
                <LoginForm />
                <h4 className="header-4">My name in Giovanni Georgio, but everybody calls me...</h4>
            </header>
        </div>
    </Provider>
  );
}

export default App;
