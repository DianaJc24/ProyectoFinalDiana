import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import './estilos.css'
import './script.js'
import Voleibol from './Voleibol.jsx'
import Basquetbol from './Basquetbol.jsx'
import Futbol from "./Futbol.jsx";
import Gimnasia from "./Gimnasia.jsx";
import Carrusel from "./Carrusel.jsx";

import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  UncontrolledCarousel,Card,CardImg,CardImgOverlay,CardTitle,CardText
} from 'reactstrap';

function Basquet(props){
    return(
        <Basquetbol></Basquetbol>
    );
}

function Voly(props){
    return(
        <Voleibol></Voleibol>
    );
}

function Futbolsal(props){
    return(
        <Futbol></Futbol>
    );
}

function Gimnasiaa(props){
    return(
        <Gimnasia></Gimnasia>
    );
}

function Deportes(props){
    return(
        <div className="Deportes">
            <h1>DEPORTES</h1>
            <div className="deportes-opciones">
                <Card inverse className="carta-voleibol">
                    <CardImgOverlay>
                    <CardTitle tag="h2">
                        VOLEIBOL
                    </CardTitle>
                    <CardText className="carta-texto">
                    Encuentra todo lo que necesitas para dominar la cancha de voleibol. Desde balones de alta calidad hasta redes profesionales, pasando por calzado deportivo, ropa y accesorios como rodilleras y mangas.
                    </CardText>
                    </CardImgOverlay>
                </Card>
                <Card inverse className="carta-basquetbol">
                    <CardImgOverlay>
                    <CardTitle tag="h2">
                        BASQUETBOL
                    </CardTitle>
                    <CardText className="carta-texto">
                    Equipa tu juego con lo mejor en baloncesto. Ofrecemos una amplia selección de balones, zapatillas de última generación, ropa deportiva, canastas de entrenamiento y accesorios.
                    </CardText>
                    </CardImgOverlay>
                </Card>
                <Card inverse className="carta-futbol">
                    <CardImgOverlay>
                    <CardTitle tag="h2">
                        FUTBOL/FUTSAL
                    </CardTitle>
                    <CardText className="carta-texto">
                    Vive la pasión por el fútbol y Futsal con nuestra selección de balones, botas de fútbol de diferentes tipos, ropa deportiva, porterías, conos de entrenamiento y accesorios para disfrutar del deporte.
                    </CardText>
                    </CardImgOverlay>
                </Card>
                <Card inverse className="carta-gimnasia">
                    <CardImgOverlay>
                    <CardTitle tag="h2">
                        GIMNASIA
                    </CardTitle>
                    <CardText className="carta-texto">
                    Encuentra todo lo que necesitas para la gimnasia artística, rítmica o de trampolín: leotardos, mallas, cintas, pelotas, aros, clavas, barras, colchonetas y más.
                    </CardText>
                    </CardImgOverlay>
                </Card>
            </div>
        </div>
    ); 
}

function Inicio(props){
    return(
        <div className="inicio">
            <div className="Carrusel">
                <UncontrolledCarousel
                items={[
                    {
                    key: 1,
                    src: '/feliz.png'
                    },
                    {
                    key: 2,
                    src: '/descuent.png'
                    },
                    {
                    key: 3,
                    src: '/regalo.png'
                    },
                    {
                    key: 4,
                    src: '/regalar.png'
                    },
                ]}
                />
            </div>
            <div className="descuentos-general">
                <h1 className="descuentos">LOS MEJORES DESCUENTOS!!!</h1>
                <div className="contenido-inicio">
                    <div className="contenido-inicio1">
                        <p className="descuento1">¿Cansado de pagar por el equipo deportivo y que no te dure nada? ¿Sueñas con alcanzar tu máximo potencial atlético sin sacrificar tu presupuesto envano?</p>
                        <p className="descuento2">En DC Sports, te entendemos. Por eso, te ofrecemos la mejor, ¡solo en DC Sports!</p>           
                    </div>
                    <div className="contenido-inicio2">
                        <img className="contenido-imagen"src="https://image.cdn2.seaart.me/2024-12-12/ctd39vde878c73fblkq0-1/beb16cce860b6c4a73c531f51aab438d_high.webp" alt="..." />
                    </div>
                </div>
                <div className="contenido-inicio">
                    <div className="contenido-inicio2">
                        <img className="contenido-imagen"src="https://marketplace.canva.com/EAGWZ03F20M/3/0/566w/canva-cartel-vertical-venta-de-navidad-moderno-verde-6ozwRzZHPs8.jpg" alt="..." />
                    </div>
                    <div className="contenido-inicio1">
                        <p className="descuento1">¿Cansado de pagar por el equipo deportivo y que no te dure nada? ¿Sueñas con alcanzar tu máximo potencial atlético sin sacrificar tu presupuesto envano?</p>
                        <p className="descuento2">En DC Sports, te entendemos. Por eso, te ofrecemos la mejor, ¡solo en DC Sports!</p>           
                    </div>
                </div>
            </div>
            <div className="anuncios-inicio">
                <img className="imagen-anuncio" src="/descuentos.png"/>
                <img className="imagen-anuncio" src="/navidad.png"/>
            </div>
        </div>
    ); 
}

function Marcas(props){
    return(
        <div className="Carrusel-general">
            <div className="Carrusel-marcas">
                <div className="Carrusel-imagen">
                    <img href="#adidas" src="/icono-adidas.png" className="imagen-marca"/>
                </div>
                <div className="Carrusel-imagen">
                    <img src="/mizuno-icono.png" className="imagen-marca"/>
                </div>
                <div className="Carrusel-imagen">
                    <img src="/fila-icono.png" className="imagen-marca"/>
                </div>
                <div className="Carrusel-imagen">
                    <img src="/asics-icon.png" className="imagen-marca"/>
                </div>
                <div className="Carrusel-imagen">
                    <img src="/new-icono.png" className="imagen-marca"/>
                </div>
                <div className="Carrusel-imagen">
                    <img src="/nike-icono.png" className="imagen-marca"/>
                </div>
                <div className="Carrusel-imagen">
                    <img src="/puma-icono.png" className="imagen-marca"/>
                </div>
                <div className="Carrusel-imagen">
                    <img src="/under-icono.png" className="imagen-marca"/>
                </div>
                <div className="Carrusel-imagen">
                    <img src="/reebok-icono.png" className="imagen-marca"/>
                </div>
            </div>
            <div className="marcas">
                <div className="fondo-marca">
                    <div className="titulo-marca">ADIDAS</div>
                    <div className="info-marcas">
                        <div className="imagen-marca-info" >
                            <img className="imagen-imagen-marca" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/running_fw23_adizero_adiospro3_launch1_plp_racing_iwp_fg_c_d_7ad372626a.jpg" />
                        </div>
                        <div className="texto-marca">
                        <p>"Descubre la moda sostenible que te hace sentir bien por dentro y por fuera. Nuestra ropa estáhecha con materiales ecológicos y diseños únicos que te ahran destacar. !Únete al movimiento de la moda consciente"</p>
                        </div>
                    </div>
                </div>

                <div className="fondo-marca-der">
                    <div className="titulo-marca">MIZUNO</div>
                    <div className="info-marcas">
                        <div className="texto-marca-der">
                            <p>"Descubre la moda sostenible que te hace sentir bien por dentro y por fuera. Nuestra ropa estáhecha con materiales ecológicos y diseños únicos que te ahran destacar. !Únete al movimiento de la moda consciente"</p>
                        </div>
                        <div className="imagen-marca-info-der" >
                            <img className="imagen-imagen-marca" src="https://www.trailrunningreview.com/Mizuno-Wave-Rider-TT_912_1_2838.jpg" />
                        </div>
                    </div>
                </div>

                <div className="fondo-marca">
                    <div className="titulo-marca">FILA</div>
                    <div className="info-marcas">
                        <div className="imagen-marca-info" >
                            <img className="imagen-imagen-marca" src="https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--a8437cda-1d09-4b36-8118-c4c5a726f0b3/20230815-about-image-fila.jpg" />
                        </div>
                        <div className="texto-marca">
                        <p>"Descubre la moda sostenible que te hace sentir bien por dentro y por fuera. Nuestra ropa estáhecha con materiales ecológicos y diseños únicos que te ahran destacar. !Únete al movimiento de la moda consciente"</p>
                        </div>
                    </div>
                </div>

                <div className="fondo-marca-der">
                    <div className="titulo-marca">ASICS</div>
                    <div className="info-marcas">
                        <div className="texto-marca-der">
                            <p>"Descubre la moda sostenible que te hace sentir bien por dentro y por fuera. Nuestra ropa estáhecha con materiales ecológicos y diseños únicos que te ahran destacar. !Únete al movimiento de la moda consciente"</p>
                        </div>
                        <div className="imagen-marca-info-der" >
                            <img className="imagen-imagen-marca" src="https://images.contentstack.io/v3/assets/blt6b512cc60b434656/blt268d5943b00e9aef/657849f6cc647824bfc4316a/asics-choose-running-shoes-lp-article-06032022-2.jpg?format=webp&quality=80" />
                        </div>
                    </div>
                </div>
                <div className="fondo-marca">
                    <div className="titulo-marca">NEW BALANCE</div>
                    <div className="info-marcas">
                        <div className="imagen-marca-info" >
                            <img className="imagen-imagen-marca" src="https://media.revistagq.com/photos/5ca5fac87a3aec3c5349710b/16:9/w_1280,c_limit/s_571.jpg" />
                        </div>
                        <div className="texto-marca">
                        <p>"Descubre la moda sostenible que te hace sentir bien por dentro y por fuera. Nuestra ropa estáhecha con materiales ecológicos y diseños únicos que te ahran destacar. !Únete al movimiento de la moda consciente"</p>
                        </div>
                    </div>
                </div>

                <div className="fondo-marca-der">
                    <div className="titulo-marca">NIKE</div>
                    <div className="info-marcas">
                        <div className="texto-marca-der">
                            <p>"Descubre la moda sostenible que te hace sentir bien por dentro y por fuera. Nuestra ropa estáhecha con materiales ecológicos y diseños únicos que te ahran destacar. !Únete al movimiento de la moda consciente"</p>
                        </div>
                        <div className="imagen-marca-info-der" >
                            <img className="imagen-imagen-marca" src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_363,c_limit/4cfba592-4b70-4f08-ac2c-ce7a948b88dc/los-6-modelos-de-calzado-de-running-m%C3%A1s-c%C3%B3modos-de-nike.jpg" />
                        </div>
                    </div>
                </div>

                <div className="fondo-marca">
                    <div className="titulo-marca">PUMA</div>
                    <div className="info-marcas">
                        <div className="imagen-marca-info" >
                            <img className="imagen-imagen-marca" src="https://about.puma.com/sites/default/files/styles/dd_hero_tablet/public/media/hero/images/24ss-paid-br-yos-jackson.png?itok=CJs4kJMc" />
                        </div>
                        <div className="texto-marca">
                        <p>"Descubre la moda sostenible que te hace sentir bien por dentro y por fuera. Nuestra ropa estáhecha con materiales ecológicos y diseños únicos que te ahran destacar. !Únete al movimiento de la moda consciente"</p>
                        </div>
                    </div>
                </div>

                <div className="fondo-marca-der">
                    <div className="titulo-marca">UNDER ARMOUR</div>
                    <div className="info-marcas">
                        <div className="texto-marca-der">
                            <p>"Descubre la moda sostenible que te hace sentir bien por dentro y por fuera. Nuestra ropa estáhecha con materiales ecológicos y diseños únicos que te ahran destacar. !Únete al movimiento de la moda consciente"</p>
                        </div>
                        <div className="imagen-marca-info-der" >
                            <img className="imagen-imagen-marca" src="https://underarmour.scene7.com/is/image/Underarmour/SS23_BRND_IWD_Site_2_1?qlt=75&fmt=jpg&scl=1&" />
                        </div>
                    </div>
                </div>

                <div className="fondo-marca">
                    <div className="titulo-marca">REEBOK</div>
                    <div className="info-marcas">
                        <div className="imagen-marca-info" >
                            <img className="imagen-imagen-marca" src="https://www.barbichette.fr/wp-content/uploads/2016/08/reebok-running-zprint3d06.jpg" />
                        </div>
                        <div className="texto-marca">
                        <p>"Descubre la moda sostenible que te hace sentir bien por dentro y por fuera. Nuestra ropa estáhecha con materiales ecológicos y diseños únicos que te ahran destacar. !Únete al movimiento de la moda consciente"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Contacto(props){
    return(
        <div className="contáctanos">
            <h2>Contáctanos</h2>
            <div className="cantacto1">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nombre completo"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Celular</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Celular"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Escribe tu mensaje..."></textarea>
                </div>
            </div>
        </div>
    );    
}

function Menu(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(!dropdownOpen);
  
    return (
      <div className="Menu">
        <div className="principal-barra-menu">
            <Nav tabs style={{textAlign:'right'}} className="barra-menu">
            <NavItem>
                <NavLink href="/" className="no-linea-menu">INICIO</NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
                <Link to="/Deportes" class="no-linea-menu">DEPORTES</Link>
            </DropdownToggle>
            <DropdownMenu >
                <DropdownItem>
                    <Link to="/Voly" className="no-linea">Voleibol</Link>
                </DropdownItem>
                <DropdownItem>
                    <Link to="/Basquet" className="no-linea">Baquetbol</Link>
                </DropdownItem>
                <DropdownItem>
                    <Link to="/Futbolsal" className="no-linea">Futbol/Futsal</Link>
                </DropdownItem>
                <DropdownItem>
                    <Link to="/Gimnasiaa" className="no-linea">Gimnasia</Link>
                </DropdownItem>
            </DropdownMenu>
            </Dropdown>
            <NavItem>
            <NavLink href="/Marcas" className="no-linea-menu">MARCAS</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/Contacto" className="no-linea-menu">CONTACTO</NavLink>
            </NavItem>
            </Nav>
        </div>

      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="/Deportes" element={<Deportes></Deportes>}></Route>
        <Route path="/Voly" element={<Voly></Voly>}></Route> 
        <Route path="/Basquet" element={<Basquet></Basquet>}></Route> 
        <Route path="/Futbolsal" element={<Futbolsal></Futbolsal>}></Route>
        <Route path="/Gimnasiaa" element={<Gimnasiaa></Gimnasiaa>}></Route>
        <Route path="/Marcas" element={<Marcas></Marcas>}></Route>
        <Route path="/Contacto" element={<Contacto></Contacto>}></Route>

      </Routes> 
      
    </div>
    );
  }
export default Menu;
