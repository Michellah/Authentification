import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

export default function Acceuil() {
  const auth = getAuth();
  return (
    <>
      <div className='accueilStyle'>
      <h1>Your connected</h1>
        <button className='buttonStyle' onClick={()=>{
           signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
        }
         
        }><Link to="/">LogOut</Link></button>
      </div>
        
    </>
  )
}
