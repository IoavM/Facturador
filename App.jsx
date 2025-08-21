import React, { useState } from 'react';
import './App.css';

function App() {
  const [cajera, setCajera] = useState('');
  const [documento, setDocumento] = useState('');
  const [nombreCliente, setNombreCliente] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const [preciosiniva, setPreciosiniva] = useState('');
  const [descuento, setDescuento] = useState('');
  const [codigoiva, setCodigoiva] = useState('');
  const [preciounitario, setPreciounitario] = useState('');
  const [PorcentajeIVA, setPorcentajeIVA] = useState('');
  const [totalLineaIVA, setTotalLineaIVA] = useState('');
  const [total, setTotal] = useState('');

  const eliminarDatos = () => {
    setCantidad('');
    setPrecio('');
    setPreciosiniva('');
    setDescuento('');
    setTotal('');
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="menu-icons">
          <button className="icon-btn">☰</button>
          <button className="icon-btn">📄</button>
          <button className="icon-btn">💵</button>
          <button className="icon-btn">⏰</button>
          <button className="icon-btn">⚙</button>
        </div>
        <div className="logo">
          <span>SURTITODO</span>
        </div>
        <div className="header-right">
          <h3>MAYORCA - CAJA FACTURA</h3>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="factura-header">
          <h1>Factura de Venta</h1>
        </div>

        <div className="cliente-info">
          <div className="info-group">
            <label>Cajera</label>
            <input 
              type="text" 
              value={cajera} 
              onChange={(e) => setCajera(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="info-group">
            <label>Documento</label>
            <input 
              type="text" 
              value={documento} 
              onChange={(e) => setDocumento(e.target.value)}
              className="input-field"
              placeholder="Número de documento"
            />
          </div>
          <div className="info-group">
            <label>Nombre Cliente</label>
            <input 
              type="text" 
              value={nombreCliente} 
              onChange={(e) => setNombreCliente(e.target.value)}
              className="input-field"
              placeholder="Nombre del cliente"
            />
          </div>
        </div>

        {/* Table */}
        <div className="tabla-container">
          <table className="tabla-productos">
            <thead>
              <tr>
                <th>Selección</th>
                <th>Descripción</th>
                <th>CodigoIVA</th>
                <th>PorcentajeIVA</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Valor Dcto</th>
                <th>Total Linea IVA</th>
                <th>Total Linea Sin IVA</th>
                <th>Total Linea</th> 
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" defaultChecked /></td>
                <td>{descripcion}</td>
                <td>
                  <input 
                    type="text" 
                    value={codigoiva} 
                    onChange={(e) => setCodigoiva(e.target.value)}
                    className="input-field"
                    placeholder="Código"
                  />
                </td>
                <td>
                  <input 
                    type="text" 
                    value={PorcentajeIVA} 
                    onChange={(e) => setPorcentajeIVA(e.target.value)}
                    className="input-field"
                    placeholder="%"
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    value={preciounitario} 
                    onChange={(e) => setPreciounitario(e.target.value)}
                    className="input-field"
                    placeholder="Precio unitario"
                    step="0.01"
                  />
                </td>
                <td>{cantidad}</td>
                <td>{descuento}%</td>
                <td>{precio}</td>
                <td>{preciosiniva}</td>
                <td>
                  {/* CONDICIONAL PARA EL TOTAL LÍNEA */}
                  {descuento == 0 ? (
                    <span className='valor'>{precio*cantidad}</span>
                  ) : (
                    <span className='valor'>{(precio*cantidad*(1-descuento/100))}</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        
        <div className="bottom-section">
          <div className="producto-info">
            <div className="descripcion-precioIVA">
              
              
              <div className="descripcion-section">
                <h3>Descripción</h3>
                <input 
                  type="text" 
                  value={descripcion} 
                  onChange={(e) => setDescripcion(e.target.value)}
                  className="input-field"
                  placeholder="Descripción del producto"
                />
              </div>

             
              <div className="cantidad-info">
                <label>Cantidad</label>
                <input 
                  type="number" 
                  value={cantidad} 
                  onChange={(e) => setCantidad(e.target.value)}
                  className="input-field"
                  placeholder="0"
                />
              </div>

              
              <div className="precio-input">
                <label>Precio sin IVA</label>
                <input 
                  type="number" 
                  value={preciosiniva} 
                  onChange={(e) => setPreciosiniva(e.target.value)}
                  className="input-field"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>

              
              <div className="precio-input">
                <label>Precio con IVA</label>
                <input 
                  type="number" 
                  value={precio} 
                  onChange={(e) => setPrecio(e.target.value)}
                  className="input-field"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>

              
              <div className="descuento">
                <label>% Dcto</label>
                <input 
                  type="number" 
                  value={descuento} 
                  onChange={(e) => setDescuento(e.target.value)}
                  className="input-field"
                  placeholder="0"
                  min="0"
                  max="100"
                />
              </div>

             
              <div className="total">
                <label>Total</label>
                <input 
                  type="number" 
                  value={total} 
                  onChange={(e) => setTotal(e.target.value)}
                  className="input-field"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>

              {/* Botones - ocupan toda la fila */}
              <div className="action-buttons">
                <button className="btn btn-eliminar">✖ ELIMINAR LÍNEA</button>
                <button className="btn btn-confirmar">✓ CONFIRMAR LÍNEA</button>
              </div>

            </div>
          </div>

          <div className="totales-section">
            <h3>Totales</h3>

            <div className="totales-list">
              <div className="total-item">
                <span>Total Cantidad:</span>
                <span className='valor'>{cantidad}</span>
                </div>

              <div className="total-item">
                <span>Total del Descuento:</span>
                <span className='valor'>{(descuento)}%</span>
                
                </div>

                <div className="total-item">
                <span>Total sin IVA:</span>
                <span className='valor'>{preciosiniva}</span>
                </div>

              <div className="total-item">
                <span>Total con IVA:</span>
                <span className='valor'>{precio}</span>
                </div>

              <div className="total2-item">
                <span>Total de la Factura:</span>
                {/* CONDICIONAL PARA EL TOTAL DE LA FACTURA */}
                {descuento == 0 ? (
                  <span className='valor'>{precio*cantidad}</span>
                ) : (
                  <span className='valor'>{(precio*cantidad*(1-descuento/100))}</span>
                )}
              </div>

                  <div className="action-buttons">
                      <button className="btn btn-eliminar" onClick={eliminarDatos}>✖ ELIMINAR</button>
                      <button className="btn btn-pagar">PAGAR</button>
                  </div>
            </div>
          </div>
        </div>

        
      </main>
    </div>
  );
}

export default App;