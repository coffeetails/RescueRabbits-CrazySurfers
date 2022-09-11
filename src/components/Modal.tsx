import './modal.scss'
import { useNavigate } from 'react-router'

interface Prop {
    closeModal: (close: boolean) => void;
    username: string;
}
const Modal = ({closeModal, username}: Prop) =>{
    const navigate = useNavigate();
    const closeBtn = () =>{
        closeModal(false)
        navigate('/')
    }
    return(
        <section className='modal-container'>
            <div className='modal'>

                <h1>Tack för din ansökan! <br/>{username}</h1>
                <button onClick={closeBtn}>Stäng</button> 
            </div>
            
        </section>
    )
}



export default Modal;