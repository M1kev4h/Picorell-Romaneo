import "../styles/LastTable.css"
export const LastTable = () => {
  return (
    <section className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Nro</th>
            <th>Peso</th>
            <th>Producto</th>
            <th>Provedor</th>
            <th>Funcionario</th>
            <th>Fecha y Hora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="id">#1</td>
            <td className="peso">18.45 kg</td>
            <td className="mercaderia">Panceta</td>
            <td className="provedor">Upisa</td>
            <td className="funcionario">Gonzalo</td>
            <td className="fecha">2024-06-15 14:30</td>
          </tr>
          <tr>
            <td className="id">#2</td>
            <td className="peso">22.10 kg</td>
            <td className="mercaderia">Jamón</td>
            <td className="provedor">Frivati</td>
            <td className="funcionario">Diego</td>
            <td className="fecha">2024-06-15 15:00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="total-peso-cajas" colSpan="5">Total Cajas</td>
            <td className="total" colSpan='1'>2</td>
          </tr>
          <tr>
            <td className="total-peso-cajas" colSpan="5">Peso Neto</td>
            <td className="total" colSpan='1'>40.55 kg</td>
            
          </tr>
        </tfoot>
      </table>
    </section>
  )
}
