import { Form } from '../Form/Form'
import './Modal.css'

export const Modal = ({isOpen, onClose}) => {

  return (
    <section className={isOpen ? "modal modal_active" : "modal"}>
        <div className="modal_container">
            <h2 className="modal_title">Define los parametros del romaneo</h2>
            <p className="modal_paragraph">Aqui se estableceran los parametros para el romaneo</p>
            <Form/>
            <div className='modal_buttons' >
            <button className="modal_make button" type='submit'>Crear</button>
            <button onClick={onClose}   className="modal_close button">Salir</button>
            </div>
        </div>
    </section>
  )
}
