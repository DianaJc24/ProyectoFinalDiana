import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import './estilos.css'
import React, { useState } from 'react';
import {
  ListGroup, ListGroupItem,
  CardGroup, Card, CardImg,CardBody,CardTitle,CardSubtitle, CardText,Button,
  UncontrolledPopover,PopoverHeader, PopoverBody,
} from 'reactstrap';

function ZapatillasMujer(props){
    return(
        <div className="articulos">
            <h1 className="titulo-deporte">FUTBOL/FUTSAL</h1>
            <div id="ZapatillaMujer" className="articulos-principal">
                <h2>Zapatillas Mujer</h2>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/71SCAi+Z4iL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">TOPSEBA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Tacos de futbol
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 440.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy1"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy1"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Rosa</li>
                                        <li>Morado</li>
                                        <li>Cyan</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    36-37-38-39-40-41-42-43
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/71korCj3Z7L._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ASOFT</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Tacos de Futbol
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 370.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy2"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy2"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Blanco/negro</li>
                                        <li>Blanco/celeste</li>
                                        <li>Blanco/plomo</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    36-37-38-39-40
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/81a965Un9cL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">XGHRIAN</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Botas de futbol
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 370.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy3"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy3"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Cyan-morado</li>
                                        <li>Negro</li>
                                        <li>Blanco</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    36-37-38-39-40-41-42-43
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/61dqyx1qSAL._AC_SX500_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">MEHLVDOY</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Tacos de Futbol
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 460.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy4"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy4"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Purpura</li>
                                        <li>Negro</li>
                                        <li>Cyan</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    36-37-38-39-40-41-42-43
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/715xG2610wL._AC_SY500_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ASOFT</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Tacos de Futbol
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 350.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy5"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy5"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Morado negro</li>
                                        <li>Cyan Morado</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    37-38-39-40-41-42-43
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/71qXHFs+v2L._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">BIAYVISAS</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Tacos de Futbol
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 480.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy6"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy6"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>O28 Tf Púrpura</li>
                                        <li>1126 Tf Rosa</li>
                                        <li>2077 Fg Blanco</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    36-37-38-39-40-41-42-43
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div id="RopaMujer" className="articulos-principal">
                <h3>Ropa Mujer</h3>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/91kVwsT1PVL._AC_SX385_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">SILVERFISH</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Camiseta
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 120.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy7"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy7"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Fucsia-negro</li>
                                        <li>Amarillo-negro</li>
                                        <li>Naranja-negro</li>
                                        <li>Blanco-azul</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    XS-S-M-L-XL-XXL
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/81LoQN2Do8S._AC_SX522_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">CYZONE</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Camiseta de entrenamiento
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 150.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy8"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy8"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Plomo</li>
                                        <li>Morado</li>
                                        <li>Rosa</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    XS-S-M-L-XL-XXL
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://www.dotarplus.com/wp-content/uploads/uniformes-de-futbol-para-mujer.webp"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">OEM</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Uniforme dama
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 210.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy9"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy9"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>morado/negro/azul</li>
                                        <li>celeste/rosado</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    XS-S-M-L-XL-XXL
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://www.dotarplus.com/wp-content/uploads/uniformes-de-futbol-personalizados-para-mujer.webp"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">TalkSPORTS</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Uniforme dama
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 210.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy10"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy10"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Rosado</li>
                                        <li>Turquesa</li>
                                        <li>Morado</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    S-L
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div id="AccesoriosMujer" className="articulos-principal">
                <h3>Accesorios Mujer</h3>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://fairplaybo.vtexassets.com/arquivos/ids/371507/030871-08.jpg?v=638463503045700000"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">PUMA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Canilleras protector
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 70.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy11"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy11"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Rosa</li>
                                        <li>blanco</li>
                                        <li>Negro</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    XS-S-M-L
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/619+5sr90hL.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">RACBEUK</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Cinta para el pelo
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 100.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy12"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy12"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Turquesa</li>
                                        <li>Rosa</li>
                                        <li>Azul</li>
                                        <li>Plomo</li>
                                        <li>Negro</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    S-M-L
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-l4CXAdfQyImUoEr4PFzcohsAmJs3tv-iw&s"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">NEW BALANCE</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Rodilleras
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 260.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy13"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy13"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Rosa-negro</li>
                                        <li>Naranja-negro</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    S-M-L
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://www.elmundodeportivo.com.mx/wp-content/uploads/2021/05/ATENEA-1000x1000-e1589230180278.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">OLYMPHUS</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Maletin
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 3810.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy14"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy14"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Blanco/rosa</li>
                                        <li>Blanco/naranja</li>
                                        <li>Blanco/azul</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    S-M-L-XL
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div id="ZapatillaHombre" className="articulos-principal">
                <h2>Zapatillas Hombre</h2>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/61NsgP57oVL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">AMZ BSHIDA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Botas de entrenamiento
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 400.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy15"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy15"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Neo lima</li>
                                        <li>Cyan</li>
                                        <li>Negro</li>
                                        <li>Blanco</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    38-39-40-41-42-43
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/81oGJWYrBYL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">CURUNECT</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Tacos Profesionales
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 380.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy16"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy16"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Blanco</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    38-39-40-41-42-43
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/71AJFXd9TmL._AC_SX395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">HAWK</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Tacos de Futsal
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 380.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy17"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy17"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>cyan/verde</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    38-39-40-42-43-44-45-46
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/81837vdlI2L._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">CURUNECT</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Netburner Ballistic
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 360.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy18"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy18"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>negro/cyan</li>
                                        <li>Neo lima/naranja</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    37-38-39-40-41-42-43
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/71q0Ld6EtLL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ASOFT</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Tacos de futbol
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 340.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy19"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy19"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Negro/blanco</li>
                                        <li>Negro/naranja</li>
                                        <li>Negro/morado</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    37-38-39-40-41-42-43
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div id="RopaHombre" className="articulos-principal">
                <h3>Ropa Hombre</h3>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/61hL3qUcypL._AC_SX385_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">RIKPR</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Camiseta Y Short
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 320.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy20"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy20"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    M-L-XL-XXL
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/71dmrfyq+nL._AC_SX385_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">CNINS</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Camiseta y Short Mexico
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 260.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy21"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy21"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    S-M-L-XL-XXL-XXXL
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/81h3dH6uI3L._AC_SX466_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">QIOOV</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Uniforme France
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 310.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy22"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy22"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    S-M-L-XL-XXL
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div id="AccesoriosHombre" className="articulos-principal">
                <h3>Accesorios Hombre</h3>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/917yjXwBrfL._AC_SX466_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">APTESOL</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Calsetines
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 290.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy23"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy23"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>blanco</li>
                                        <li>azul</li>
                                        <li>negro</li>
                                        <li>rojo</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    S-M-L
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/71wA6ptjt8L._AC_SX425_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">NORTHDEER</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Canilleras
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 170.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy24"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy24"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>blanco</li>
                                        <li>negro</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    S-M-L-XL-XXL
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://voleigram.com/wp-content/uploads/2023/12/Maleta-Mizuno-All-Sport-Duffle-Gris-1.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">MIZUNO</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Maleta 
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 7110.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy25"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy25"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>negro</li>
                                        <li>azul</li>
                                        <li>plomo</li>
                                    </ul>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div id="MaterialVoly" className="articulos-principal">
                <h2>Material Futbol/Futsal</h2>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://elksport.com/media/catalog/product/cache/c3dcfac33ae0402322c18d9a3c99c91b/s/i/silueta-jugador-flexible-evo.webp"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ELKSPORT</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Cilueta Flexible
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 779.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy26"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy26"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Naranja</li>
                                        <li>Azul</li>
                                    </ul>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://elksport.com/media/catalog/product/cache/cece36744afee66b9ca89b52e2728691/e/s/escalera-agilidad-2-en-uno-elk-sport.webp"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ELKSPORT</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Escalera de velocidad
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 200.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy27"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy27"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>rojo</li>
                                    </ul>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://vimassport.com/cdn/shop/files/16974_700x700.jpg?v=1727269317"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">VIMAS SPORT</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Balon
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 200.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy28"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy28"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>Naranja</li>
                                        <li>Azul</li>
                                        <li>Rojo</li>
                                    </ul>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                </div>          
            </div>
        </div>
    ); 
}



function Futbol(props){
    return(
        <div className="Voleibol">
            <div className="lista-articulos">
                <ListGroup className="lista-bloque">
                    <h4 class="color-tipo">MUJER</h4>
                    <ListGroupItem className="nombre-lista" href="#ZapatillaMujer" tag="a">Zapatillas</ListGroupItem>
                    <ListGroupItem className="nombre-lista" href="#RopaMujer" tag="a">Ropa</ListGroupItem>
                    <ListGroupItem className="nombre-lista" href="#AccesoriosMujer"tag="a">Accesorios</ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <h4 class="color-tipo">HOMBRE</h4>
                    <ListGroupItem className="nombre-lista" href="#ZapatillaHombre"tag="a">Zapatillas</ListGroupItem>
                    <ListGroupItem className="nombre-lista" href="#RopaHombre"tag="a">Ropa</ListGroupItem>
                    <ListGroupItem className="nombre-lista" href="#AccesoriosHombre"tag="a">Accesorios</ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <h4 class="color-tipo">MATERIAL</h4>
                    <ListGroupItem className="nombre-lista" href="#MaterialVoly"tag="a">General</ListGroupItem>
                </ListGroup>
            </div>
            <div className="articulos">
                <ZapatillasMujer></ZapatillasMujer>
            </div>

            <Routes>
            <Route path="/ZapatillasMujer" element={<ZapatillasMujer></ZapatillasMujer>}></Route>
            </Routes> 
        </div>
    ); 
}
export default Futbol;