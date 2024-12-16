import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import './estilos.css'
import React, { useState } from 'react';
import {
  ListGroup,ListGroupItem,
  Card, CardImg,CardBody,CardTitle,CardSubtitle, CardText,Button,
  UncontrolledPopover,PopoverHeader, PopoverBody,
} from 'reactstrap';

function ZapatillasMujer(props){
    return(
        <div className="articulos">
            <h1 className="titulo-deporte">BASQUETBOL</h1>
            <div id="ZapatillaMujer" className="articulos-principal">
                <h2>Zapatillas Mujer</h2>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/818irOAeicL._AC_SY500_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">PEAK</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Transpirable antideslizante
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 600.00</CardSubtitle>
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
                                        <li>magenta/salmon</li>
                                        <li>palo de rosa/blanco</li>
                                        <li>púrpura/cyan</li>
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
                        src="https://m.media-amazon.com/images/I/51F0VCGTd9L._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">PEAK</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Streetball Master
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 690.00</CardSubtitle>
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
                                        <li>Rosado</li>
                                        <li>Nube cerúleo</li>
                                        <li>Gris Neblinoso</li>
                                        <li>Azul Robin</li>
                                        <li>Taichi Blanco</li>
                                        <li>Escarlata</li>
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
                        src="https://m.media-amazon.com/images/I/51LknEatBML._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">PROKENNEX</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                        Tenis Tipo Bota
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 780.00</CardSubtitle>
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
                                        <li>Blanco</li>
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
                        src="https://m.media-amazon.com/images/I/71lfHVRR-xL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">AISHON</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Resagrip-Boss   
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 1360.00</CardSubtitle>
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
                                        <li>Naranja</li>
                                        <li>Blanco</li>
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
                        src="https://m.media-amazon.com/images/I/811v6hwJPSL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">BEMYGREENBAG</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Caña alta, antideslizante
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 950.00</CardSubtitle>
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
                                        <li>Rosado</li>
                                        <li>Amarillo</li>
                                        <li>Blanco/Rosa</li>
                                        <li>Blanco/Púrpura</li>
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
                        src="https://m.media-amazon.com/images/I/71kEo9fkJpL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">CJSPORX</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Transpirables antideslizante
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 560.00</CardSubtitle>
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
                                        <li>Rosa</li>
                                        <li>Blanco/rosa</li>
                                        <li>Celeste/púrpura</li>
                                        <li>Celeste/verde</li>
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
                        src="https://m.media-amazon.com/images/I/7178uB60FuL._AC_SX522_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">JOMA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Camiseta
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 160.00</CardSubtitle>
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
                                        <li>azul</li>
                                        <li>blanco</li>
                                        <li>rojo</li>
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
                        src="https://m.media-amazon.com/images/I/71nBnti-UHL._AC_SX385_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">KXK</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Uniforme
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 230.00</CardSubtitle>
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
                                        <li>Rosado</li>
                                        <li>Amarillo</li>
                                        <li>Turquesa</li>
                                        <li>Lima</li>
                                        <li>Naranja</li>
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
                        src="https://m.media-amazon.com/images/I/71s80cqRQaL._AC_SX522_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">JOMA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Camiseta
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 190.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy9"s
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
                                        <li>Naranja</li>
                                        <li>Rosado</li>
                                        <li>Rojo</li>
                                        <li>Azul</li>
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
                        src="https://m.media-amazon.com/images/I/61kJqxLHQRL.__AC_SX300_SY300_QL70_ML2_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">QYEEYPOC</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Calcetines deportivos
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 110.00</CardSubtitle>
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
                                        <li>Rosa/nEGRO</li>
                                        <li>Negro/Plomo</li>
                                        <li>Amarillo/Morado</li>
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
                        src="https://m.media-amazon.com/images/I/61r4PKBpw6L._AC_SX679_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">JAGELY</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            calentador
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 350.00</CardSubtitle>
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
                                        <li>negro</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    XS-S-M-L-XL
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/c83b553c-477b-4d80-a656-4351f252ef76/NIKE+SWOOSH+HEADBAND.png"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">NIKE</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Cinta Para el pelo
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 150.00</CardSubtitle>
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
                                        <li>rojo</li>
                                        <li>blanco</li>
                                        <li>Turquesa</li>
                                        <li>negro</li>
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
                        src="https://contents.mediadecathlon.com/p2406489/k$492177b9e8576f38cb4afaae4543bc39/tobillera-sujecion-ligamentos-r100.jpg?format=auto&quality=40&f=800x800"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">NIKE</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Tobilleras
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 310.00</CardSubtitle>
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
                                        <li>negro</li>
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
                        src="https://d3fvqmu2193zmz.cloudfront.net/items_2/uid_commerces.1/uid_items_2.FDC68F4EJMV9/1500x1500/650AFBE30C20D-Maletin-Deportivo-Adulto-Unisex-Fundamentals-Sports-Bag-S.webp"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">PUMA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Maletin
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 560.00</CardSubtitle>
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
                                        <li>guindo/rosa</li>
                                        <li>cafe/marfil</li>
                                        <li>negro/plomo</li>
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
            <div id="ZapatillaHombre" className="articulos-principal">
                <h2>Zapatillas Hombre</h2>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/71SFMpKRYuL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">BEMYGREENBAG</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Caña alta, suela antideslizante
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 500.00</CardSubtitle>
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
                                        <li>Blanco</li>
                                        <li>Negro-Azul</li>
                                        <li>Blanco/verde</li>
                                        <li>Azul</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    38-39-40-41-42-43-44-46
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/810VN+NnS6L._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">CJSPORX</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Transpirables antideslizantes
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 1580.00</CardSubtitle>
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
                                        <li>Negro/dorado</li>
                                        <li>Blanco/azul</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    38-39-40-41-42-43-44-45
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/81LuRE8X0xL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">CJSPORX</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                        Transpirables antideslizantes
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 1180.00</CardSubtitle>
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
                                        <li>azul</li>
                                        <li>verde/rosa</li>
                                        <li>blanco</li>
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
                        src="https://m.media-amazon.com/images/I/51eK1D88RtL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">NIKE</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Netburner Ballistic
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 850.00</CardSubtitle>
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
                                        <li>negro/blanco</li>
                                        <li>plomo/azul</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    37-38-39-40-41-42-43-44
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/71oHkw1vzkL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">BEOAPT</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Gel-Rocket 10
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 480.00</CardSubtitle>
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
                                        <li>amarillo verde</li>
                                        <li>Negro blanco</li>
                                        <li>negro rojo</li>
                                        <li>negro</li>
                                        <li>negro azul</li>
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
                        src="https://images.footballfanatics.com/new-york-knicks/new-york-knicks-nike-icon-edition-swingman-jersey-blue-jalen-brunson-unisex_ss4_p-13349423+pv-1+u-fisvk6fuw7brxs5ufqb0+v-c54b60e8b07c4412842297e48d29771c.jpg?_hv=2&w=900"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">NIKE</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Camiseta
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 1420.00</CardSubtitle>
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
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>azul/blanco</li>
                                        <li>blanco/azul</li>
                                    </ul>
                                </PopoverBody>
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
                        src="https://m.media-amazon.com/images/I/61xtFYvEffL._AC_SX385_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">JERSEY</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Uniforme
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 240.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy21"
                                type="button"
                                className="mas-detalles"
                            >Detalles</Button>               
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy21"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
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
                        src="https://images.footballfanatics.com/new-york-knicks/new-york-knicks-nike-association-swingman-jersey-custom-unisex_ss4_p-13304042+pv-1+u-178hmu3mit41a6pv3403+v-4455a81c622645d9886133d92da0bea3.jpg?_hv=2&w=900"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">OEM</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Uniforme varon
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 2400.00</CardSubtitle>
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
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>blanco/negro/morado</li>
                                        <li>plomo/azul</li>
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
                </div>
            </div>
            <div id="AccesoriosHombre" className="articulos-principal">
                <h3>Accesorios Hombre</h3>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/dfa68bbe-e102-4e33-9b6e-6763e2a75f19/U+NK+EVERYDAY+CSH+CRW+3PR+132.png"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">NIKE</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Calsetines
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 280.00</CardSubtitle>
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
                                        <li>morado</li>
                                        <li>naranja</li>
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
                        src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/c045d2ff-e1e4-42c6-8b94-a854ddc4436c/NIKE+SWOOSH+HEADBAND.png"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">NIKE</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Banda
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 100.00</CardSubtitle>
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
                                        <li>azul</li>
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
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/71eoDHtZxpL._AC_SX425_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">MIZUNO</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Protector Bucal 
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 7110.00</CardSubtitle>
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
                <h2>Material Basquetbol</h2>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/6148y723wUL._AC_SX425_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">RENOJ</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            bandas de resistencia
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 100.00</CardSubtitle>
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
                        src="https://m.media-amazon.com/images/I/61bLyTODRRL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">SKLZ</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Tablero
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 310.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy28"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/913QzuE08vL._AC_SX425_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">CANNON</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Balon
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 270.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy29"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy29"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>naranja</li>
                                    </ul>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/81hYczB+zfL._AC_SX425_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">AKTIVE</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Conos de entrenamiento
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 130.00</CardSubtitle>
                        <div>
                            <Button id="PopoverLegacy30"
                                type="button"
                                className="mas-detalles"
                            >
                                Detalles
                            </Button>
                
                            <UncontrolledPopover
                                placement="bottom"
                                target="PopoverLegacy30"
                                trigger="legacy"
                            >
                                <PopoverHeader className="detalle-header">
                                    COLORES
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    <ul>
                                        <li>naranja</li>
                                        <li>rojo</li>
                                        <li>verde</li>
                                        <li>amarillo</li>
                                        <li>azul</li>
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


function Basquetbol(props){
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
export default Basquetbol;