import './login.css';

export default function Button({handleAction,title}:any) {
  return (
    <div className='login_submit'>
         <button className='logs' onClick={handleAction} >{title}</button>    
         <i className="button__icon fas fa-chevron-right fa-2x"></i>   
    </div>
  )
}
