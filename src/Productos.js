
import React, { Component } from 'react';
import './Productos.css';


const list = [
    {
        id:1,
        descripcion:'PC Samsung',
        precio:2800000,
    },
    {
        id:2,
        descripcion:'PC Asus',
        precio:2300000,
    },
    {
        id:3,
        descripcion:'Mackbook air ml',
        precio:4300000,
    }
]; 

function buscar(nombreLibro) {
    return function (item) {
        return item.descripcion.toLowerCase().includes(nombreLibro.toLowerCase())
    }
}
class Productos extends Component {
    constructor(props){
        super(props);

        this.state = {
            list,
            nombreLibro:'',
        };
        
        this.Eliminar = this.Eliminar.bind(this);
        this.onsearchChange = this.onsearchChange.bind(this);
    }   

    Eliminar(id) {
        const isNotId = item => item.id !== id;
        const listaActualizada = this.state.list.filter(isNotId);
        this.setState({ list: listaActualizada});
    }
    onsearchChange(event){
        this.setState({nombreLibro: event.target.value})

    }   

    render() {
        return (
           <div className="content"> 
           
                <h2>Lista de Productos</h2>
                <form >
                    <label>filtrar por nombre del libro</label>
                    <input type="text" placeholder='Buscar' className='Buscador' onChange={this.onsearchChange}></input>
                    
                </form>
                <div className='tabla'>
                        
                    <table table-dark table-striped>
                        <div>
                            <th>Id  Producto</th>
                            <th>Descripción  Producto</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                                    {
                                        this.state.list.filter(buscar(this.state.nombreLibro)).map (item=>
                                             <tbody key={item.id}>
                                            <tr>
                                                <td>
                                                    {
                                                        item.id
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        item.descripcion
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        item.precio
                                                    }
                                                </td>
                                                <td>
                                                    <button
                                                        className='boton'
                                                        onClick={()=> this.Eliminar(item.id)}
                                                        type="button"
                                                    >
                                                    Eliminar   
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>  
                                     )}
                        </div>
                    </table>
                </div>
            </div>
        );
    };
};

export default Productos;