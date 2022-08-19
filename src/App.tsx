import './App.css';
import Login from './component/Login';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Acceuil from './component/Acceuil';
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { authentication } from './Config';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleAction = (id: any) => {
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          console.log(response)
          navigate("/Accueil")
        })
        .catch((error) => {
          console.error(error.code)
        })
    }
    if(id === 1){
      signInWithEmailAndPassword(authentication, email, password)
        .then((response)=> {
          navigate("/Accueil")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login
          title="Login"
          setEmail={setEmail}
          setPassword={setPassword}
          handleAction={() => handleAction(1)}
        />} />
        <Route path="/Register" element={<Login
          title="Register"
          setEmail={setEmail}
          setPassword={setPassword}
          handleAction={() => handleAction(2)}
        />} />
        <Route path="/Accueil" element={<Acceuil />} />
      </Routes>
    </div>
  );
}

