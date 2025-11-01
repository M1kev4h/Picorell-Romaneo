import './Form.css'

export const Form = () => {
  return (
    <form action="" className='form'>
        
        <input className='form_input' type="number" placeholder='Cantidad de Cajas' />
        
        <section className='form_options'>
         <select className='form_select' name="Funcionario" id="Funcionario">
            <option value="Gonzalo">Gonzalo</option>
            <option value="Diego">Diego</option>
          </select>
        
          <select className='form_select' name="Provedor" id="Provedor">
            <option value="Provedor 1">Upisa</option>
            <option value="Provedor 2">Frivatti</option>
            <option value="Provedor 3">Coopabel</option>
          </select>
         </section>

        <input className='form_input' type="Text" placeholder='Producto' />
        
    </form>
  )
}
