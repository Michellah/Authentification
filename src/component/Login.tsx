import './login.css';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { googleAuth } from './Google';
import { facebookAuth } from './Facebook';
import { githubAuth } from './Github';

export default function Login({ title, setEmail, setPassword, handleAction }: any) {
    const navigate = useNavigate();
    return (
        <>
            <div className='App'>
                <form onSubmit={e => e.preventDefault()} className='formStyle'>
                    <div className="formulaire">
                    <div className="login__field">
                        <i className='fa fa-user fa-1x'></i>
                        <input
                                type="email"
                                name=""
                                id="email"
                                placeholder='Email*'
                                className="inputStyle"
                                autoComplete="on"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                    <br />
                    <div>
                        <i className='fas fa-lock'></i>
                        <input
                            type="password"
                            name=""
                            id="password"
                            className="inputStyle"
                            placeholder='Password*'
                            autoComplete="on"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <br />
                    <Button handleAction={handleAction} title={title} />
                    <h4>Se connecter avec</h4>
                    <button className='social-login__icon fab fa-google fa-2x' onClick={() => googleAuth(() => navigate("/Accueil"))} ></button>
                    <button className='social-login__icon fab fa-facebook fa-2x' onClick={() => facebookAuth(() => navigate("/Accueil"))}></button>
                    <button className='social-login__icon fab fa-github fa-2x' onClick={() => githubAuth(() => navigate("/Accueil"))} ></button>
                    <br />
                    <Link to="/Register">S'inscrire</Link>
                    </div>
                </form>
            </div>
        </>
    )
}
