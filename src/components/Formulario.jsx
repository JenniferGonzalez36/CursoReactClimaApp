import React, { useState} from 'react';
import useClima from '../hooks/useClima';

const Formulario = () => {

    const [alerta, setAlerta] = useState('');
    const { busqueda, datosBusqueda, consultarClima } = useClima();
    const { ciudad, pais } = busqueda;

    const handleSubmit = e => {
        e.preventDefault();

        if(Object.values(busqueda).includes('')){
            setAlerta("Todos los campos son obligatorios");
            return;
        }

        setAlerta('');

        consultarClima(busqueda);
    }

  return (
    <div className='contenedor'>

        {alerta && <p>{alerta}</p>}

        <form
            onSubmit={handleSubmit}
        >
            <div className='campo'>
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text" 
                    id="ciudad"
                    name="ciudad"
                    onChange={datosBusqueda}
                    value={ciudad}
                />
            </div>
            <div className='campo'>
                <label htmlFor="pais">País</label>
                <select 
                    name="pais" 
                    id="pais"
                    onChange={datosBusqueda}
                    value={pais}
                >
                    <option value=""> - Seleccione un país - </option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="ES">España</option>
                    <option value="AR">Argentina</option>
                    <option value="BO">Bolivia</option>
                    <option value="BR">Brasil</option>
                    <option value="CA">Canadá</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CU">Cuba</option>
                    <option value="EC">Ecuador</option>
                    <option value="SV">El Salvador</option>
                    <option value="GT">Guatemala</option>
                    <option value="HN">Honduras</option>
                    <option value="NI">Nicaragua</option>
                    <option value="PA">Panamá</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Perú</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="DO">República Dominicana</option>
                    <option value="UY">Uruguay</option>
                    <option value="VE">Venezuela</option>
                </select>
            </div>

            <input type="submit" value="Consultar clima"/>
        </form>
    </div>
  )
}

export default Formulario