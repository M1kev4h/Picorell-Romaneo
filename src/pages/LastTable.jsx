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
            <td>1</td>
            <td>18.45</td>
            <td>Panceta</td>
            <td>Upisa</td>
            <td>Funcionario 1</td>
            <td>2024-06-15 14:30</td>
          </tr>
          <tr></tr>
            <td>2</td>
            <td>22.10</td>
            <td>Jamón</td>
            <td>Frivati</td>
            <td>Funcionario 2</td>
            <td>2024-06-15 15:00</td>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6">Total</td>
          </tr>
          <tr>
            <td colSpan="4">Peso Neto</td>
            <td colSpan="5">Peso Real</td>
            
          </tr>
        </tfoot>
      </table>
    </section>
  )
}
