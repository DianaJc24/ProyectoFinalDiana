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
            <h1 className="titulo-deporte">VOLEIBOL</h1>
            <div id="ZapatillaMujer" className="articulos-principal">
                <h2>Zapatillas Mujer</h2>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/51llJ7Be6TL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">FILA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Volley Zone
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
                                        <li>Wht/Kopk/Mblu</li>
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
                        src="https://m.media-amazon.com/images/I/51n3bJpgAzL._AC_SX395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">MIZUNO</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Wave Momentum3
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 750.00</CardSubtitle>
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
                                        <li>Tetra blanco-rosa</li>
                                        <li>Candy Coral</li>
                                        <li>Blanco Dorado</li>
                                        <li>Negro/Naranja pop</li>
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
                        src="https://m.media-amazon.com/images/I/51dKfgxqCuL._AC_SX425_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ASICS</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Netburner Ballistic
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
                                        <li>Blanco/rosa de cuenca</li>
                                        <li>blanco(White/Vapor)</li>
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
                        src="https://m.media-amazon.com/images/I/51baNGbSD5L._AC_SX395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">MIZUNO</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Wave Momentum2
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
                                        <li>    Blanco/Rosa</li>
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
                        src="https://m.media-amazon.com/images/I/61FZHiDKiHL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">MIZUNO</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Wave Momentum3
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
                                        <li>Neo Lime</li>
                                        <li>Mugen Azul</li>
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
                        src="https://m.media-amazon.com/images/I/61SoPMH2GOL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ASICS</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Elite FlyteFoam
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 750.00</CardSubtitle>
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
                                        <li>Claro Safiro/Blanco</li>
                                        <li>Cielo/Azul Índigo</li>
                                        <li>Negro/Blanco</li>
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
                        src="https://www.joma-sport.com/dw/image/v2/BFRV_PRD/on/demandware.static/-/Sites-joma-masterCatalog/default/dw5ac0e912/images/medium/901926.836_1.jpg?sw=460&sh=475&sm=fit"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">JOMA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Short
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
                                        <li>berry naranja blanco</li>
                                        <li>berry azul blanco</li>
                                        <li>berry menta blanco</li>
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
                        src="https://camisetadeportiva.com/wp-content/uploads/2019/11/manga-cero.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">SCANDER</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Camiseta
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
                                        <li>Coral Fluor</li>
                                        <li>Amarillo Fluor</li>
                                        <li>Turquesa</li>
                                        <li>Lima</li>
                                        <li>Royal</li>
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
                        src="https://image.made-in-china.com/202f0j00DjPoWJcdyBqu/OEM-Design-Sample-Volleyball-Uniform-Wholesale-Fashion-Popular-Women-Volleyball-Jersey.webp"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">OEM</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Uniforme dama
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 160.00</CardSubtitle>
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
                                        <li>morado/blanco/azul</li>
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
                        src="https://m.media-amazon.com/images/I/71++zLHCotL._AC_SX679_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">PUMA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Calcetines deportivos
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 90.00</CardSubtitle>
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
                                        <li>Rosa claro/</li>
                                        <li>Blanco</li>
                                        <li>Polomo claro</li>
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
                        src="https://m.media-amazon.com/images/I/51lZZmUjHdL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">CHINFUN</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             mangas
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
                                        <li>negro</li>
                                        <li>blanco</li>
                                        <li>rosa</li>
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
                        src="https://m.media-amazon.com/images/I/81bsAb9FChL._SX342_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">RACBEUK</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Rodilleras
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 450.00</CardSubtitle>
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
                                        <li>rosa</li>
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
                        src="https://m.media-amazon.com/images/I/518XJh9lYYL.__AC_SX300_SY300_QL70_ML2_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">NIKE</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Rodilleras
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 560.00</CardSubtitle>
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
                                        <li>blanco</li>
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
                        <CardSubtitle className="texto-articulo">BS. 110.00</CardSubtitle>
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
                        src="https://m.media-amazon.com/images/I/51bgawo7+ML._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ASICS</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Netburner Ballistic Ff Mt 3
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 600.00</CardSubtitle>
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
                        src="https://m.media-amazon.com/images/I/61PYKvpnmlL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">NIKE</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            React Hyperset
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
                        src="https://m.media-amazon.com/images/I/51pNZ378kqL._AC_SX395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">MIZUNO</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Wave Ligthning
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
                                        <li>Blanco/azul marroquí</li>
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
                        src="https://m.media-amazon.com/images/I/61PLSvJe9IL._AC_SX425_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ASICS</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Netburner Ballistic
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 860.00</CardSubtitle>
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
                                        <li>negro/oro puro</li>
                                        <li>denim/azul</li>
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
                        src="https://m.media-amazon.com/images/I/61bK0MXrgKL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ASICS</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Gel-Rocket 10
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 640.00</CardSubtitle>
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
                                        <li>Medianoche/Verde</li>
                                        <li>Negro/naranja</li>
                                        <li>Medianoche/Verde</li>
                                        <li>Blanco/platapura</li>
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
                        src="https://www.spearhead.cl/wp-content/uploads/2019/12/blanca-878x1024.jpg.webp"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">JOMA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Camiseta
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 220.00</CardSubtitle>
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
                        src="https://voleigram.com/wp-content/uploads/2021/05/Short-de-voleibol-voleigram-bh-negro-1.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">VOLEIGRAM</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Short
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 900.00</CardSubtitle>
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
                        src="https://s.alicdn.com/@sc04/kf/Sb084226d448649998abc2db3f924ed76G.jpg_720x720q50.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">OEM</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Uniforme varon
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 160.00</CardSubtitle>
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
                                        <li>blanco/negro/rojo</li>
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
                        src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/55b33a31-575f-4d08-9ca2-1e9583b8d31d/NIKE+VARSITY+KNEE+PAD.png"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">NIKE</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Rodilleras
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 560.00</CardSubtitle>
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
                <h2>Material Voleibol</h2>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://s.alicdn.com/@sc04/kf/H9d86421d794a418ab5e18c0221eaac1cR.jpg_720x720q50.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ASIBOASI</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Maquina Entrenamiento
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 10.500.00</CardSubtitle>
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
                        src="https://i.ebayimg.com/images/g/g~cAAOSwFyxnGzGB/s-l1600.webp"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">PICADOR</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Picador
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 220.00</CardSubtitle>
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
                </div>          
            </div>
        </div>
    ); 
}



function Voleibol(props){
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
                    <ListGroupItem className="nombre-lista" href="#ZapatillaHombre" tag="a">Zapatillas</ListGroupItem>
                    <ListGroupItem className="nombre-lista" href="#RopaHombre" tag="a">Ropa</ListGroupItem>
                    <ListGroupItem className="nombre-lista" href="#AccesoriosHombre" tag="a">Accesorios</ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <h4 class="color-tipo">MATERIAL</h4>
                    <ListGroupItem className="nombre-lista" href="#MaterialVoly" tag="a">General</ListGroupItem>
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
export default Voleibol;
