import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import './estilos.css'
import Menu from './Menu.jsx'
import PiePagina from './PiePagina.jsx'
  

function Principal(props){
    return(
        <div className="principal" >
            <div className="titulo-principal">
                <img className="logo-iz" src="/logo-tienda.png" style={{height:70}}/>
                   <p className="texto-titulo-principal" >DC SPORT</p>
                <img className="logo-der" src="/logo-tienda.png" style={{height:70}}/>
            </div>
            <Menu></Menu>
            <PiePagina></PiePagina>
        </div>
    );
}
export default Principal;