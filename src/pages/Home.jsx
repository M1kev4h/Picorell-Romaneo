import '../styles/Layout.css'
import '../styles/home.css'
import{useState} from 'react'
import { Microphone } from '../components/Buttons/Microphone/Microphone'
import { Modal } from '../components/Modal/Modal'
import { Openmodal } from '../components/Buttons/Openmodal/Openmodal'
export const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
      setIsOpen(!isOpen);
  }

  return (
    <section className='container'>
        <Modal isOpen={isOpen} onClose={openModal} />
        <h2 className='home-title'>Preciona el boton para empesar a grabar</h2>
        <Microphone/>
        <Openmodal openModal={openModal}/>
        <p id='textArea' className='recording-text'></p>
    </section>
  )
}
