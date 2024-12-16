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
            <h1 className="titulo-deporte">GIMNASIA</h1>
            <div id="ZapatillaMujer" className="articulos-principal">
                <h2>Zapatillas</h2>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/519jGqSIu1L._AC_SY575_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">DANCEFIELD</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Ballet de Suave
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 2000.00</CardSubtitle>
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
                                        <li>rosa</li>
                                        <li>negro</li>
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
                        src="https://m.media-amazon.com/images/I/61AeS76TmBL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">A&K L'YDIA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Zapatos de lona
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 4050.00</CardSubtitle>
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
                                        <li>beige</li>
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
                        src="https://m.media-amazon.com/images/I/51CwOgZL7wL._AC_SY500_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">EQSJIU</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Piel Sintética
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 1300.00</CardSubtitle>
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
                                        <li>purpura claro</li>
                                        <li>rosa</li>
                                        <li>negro</li>
                                        <li>rosado</li>
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
                        src="https://m.media-amazon.com/images/I/71Rbx5zv-oL._AC_SY395_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">OWANVION</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Calzado suave y elastico
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 2360.00</CardSubtitle>
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
                                        <li>rosa</li>
                                        <li>nude</li>
                                        <li>rosado</li>
                                        <li>negro</li>
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
                        src="https://contents.mediadecathlon.com/p1857003/k$504e11717c4027b7c318c7c81985a132/sq/zapatillas-gimnasia-nina-y-nino-de-tela-blanca.jpg?format=auto&f=323x323"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">DOMYOS</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Zapatillas
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 250.00</CardSubtitle>
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
                                        <li>Blanco</li>
                                        <li>Negro</li>
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
                        src="https://www.diezdeditoslibres.com/cdn/shop/files/DSC_2021.jpg?v=1697718034&width=713"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">OMA KING</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Barefoot
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 150.00</CardSubtitle>
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
                                        <li>Negro/Blanco</li>
                                    </ul>
                                </PopoverBody>
                                <PopoverHeader className="detalle-header">
                                    TALLAS
                                </PopoverHeader>
                                <PopoverBody className="detalle-body">
                                    35-36-37-38-39-40-41
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
                        src="https://gimargym.com/wp-content/uploads/2024/01/BONNIE-DELANTE-Photoroom-800x800.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        /> 
                        <CardBody>
                        <CardTitle className="titulo-articulo">GIMAR</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                             Short
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 620.00</CardSubtitle>
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
                                        <li>Neo Lime/negro</li>
                                        <li>Truquesa/negro</li>
                                        <li>Fucsia/negro</li>
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
                        src="https://gimargym.com/wp-content/uploads/2022/10/12-793-SHORT-CINTURA-FLUOR-NARANJA.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">GIMAR</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Short
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 210.00</CardSubtitle>
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
                        src="https://gimargym.com/wp-content/uploads/2022/10/287-764-SPACE.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">GIMAR</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Malla de gimnasia
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 460.00</CardSubtitle>
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
                                        <li>Negro</li>
                                        <li>Blanco</li>
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
                        src="https://gimargym.com/wp-content/uploads/2022/10/46-492-GRAFITTI.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">GIMAR</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Malla de gimnasia
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 450.00</CardSubtitle>
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
                                        <li>Blanco</li>
                                        <li>Negro</li>
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
                        src="https://http2.mlstatic.com/D_NQ_NP_989034-MLA46980563949_082021-O.webp"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">GIMMAN</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Varilla y cinta
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 180.00</CardSubtitle>
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
                                        <li>arcoiris</li>
                                    </ul>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://http2.mlstatic.com/D_NQ_NP_2X_990454-MLA69858279716_062023-F.webp"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">GYMMAN</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Cintas
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 550.00</CardSubtitle>
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
                                        <li>naranja</li>
                                        <li>morado</li>
                                        <li>fucsia</li>
                                        <li>cyan</li>
                                        <li>turquesa</li>
                                    </ul>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://www.mundocrystal.com/wp-content/uploads/2016/06/aro-sidney-pastorelli.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">MUNDO CRYSTAL</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Aro Sidney Pastorelli
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
                                        <li>blanco</li>
                                        <li>rosado</li>
                                    </ul>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://contents.mediadecathlon.com/p2412617/k$b87c9238106b121291986ea91c24a9c0/calleras-barras-asimetricas-para-gimnasia-artistica-femenina.jpg?format=auto&quality=40&f=800x800"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">TIENDAMIA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Muñequeras
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 410.00</CardSubtitle>
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
                                        <li>Blamco/celeste</li>
                                        <li>Blanco/rosa</li>
                                        <li>Blanco/naranja</li>
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
                        src="https://contents.mediadecathlon.com/p1714836/k$24a87ded305cf2295998714f091b41a0/sq/zapatillas-gimnasia-artistica-femeninamasculina-500-blanco-mesh.jpg?format=auto&f=323x323"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ASICS</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Zapatillas
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 150.00</CardSubtitle>
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
                        src="https://www.freddy.com/media/catalog/product/cache/d0a60c4268af39efe35afa856c063cd3/3/0/305_N_01615901017000.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">FREDDY</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Zapatillas
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 180.00</CardSubtitle>
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
                                        <li>Negro</li>
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
                        src="https://argym.es/10-large_default/zapatillas-venturelli-cv2.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">VENTURELLI</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Zapatillas
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 480.00</CardSubtitle>
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
                                        <li>Amarillo</li>
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
                        src="https://artisticaparapadres.com/wp-content/uploads/2020/10/51E95YNyWwL._AC_UX695_-min.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">FALABELLA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Zapatillas
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
                                        <li>negro/oro puro</li>ç
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
                        src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/131754552_01/w=800,h=800,fit=pad"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">FALABELLA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Zapatillas
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 140.00</CardSubtitle>
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
                                        <li>Negro</li>
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
                        src="https://www.eticsports.com/clients/eticsports/product/product/images/2753_medium.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ETIC</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Malla
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
                                        <li>azul/blanco/rojo</li>
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
                        src="https://i.ebayimg.com/thumbs/images/g/d30AAOSwcHVlWsH-/s-l1200.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">V</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Malla-short
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 350.00</CardSubtitle>
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
                                        <li>blanco</li> 
                                    </ul>
                                </PopoverBody>
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
                        src="https://i.etsystatic.com/8107937/r/il/977ff1/2519946937/il_794xN.2519946937_mqwl.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">ETSY</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Malla
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 360.00</CardSubtitle>
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
                                        <li>blanco/negro</li>
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
                        src="https://m.media-amazon.com/images/I/51ZEKB7-M+L._AC_SX355_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">AND SPORT</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Mazas
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
                                        <li>rosado</li>
                                        <li>rojo</li>
                                        <li>verde</li>
                                        <li>amarillo</li>
                                    </ul>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://http2.mlstatic.com/D_NQ_NP_2X_866198-MLA43299101612_082020-F.webp"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">GBA</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Pelota
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 160.00</CardSubtitle>
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
                                        <li>rojo</li>
                                        <li>naranja</li>
                                        <li>azul</li>
                                        <li>verde</li>
                                    </ul>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://http2.mlstatic.com/D_NQ_NP_2X_903836-MLA79509533277_092024-F.webp"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">GENETIC</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Cintas de agarre 
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 310.00</CardSubtitle>
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
                <h2>Material Gimnasia</h2>
                <div className="bloque-articulos">
                    <Card className="cada-articulo">
                        <CardImg
                        alt="Card image cap"
                        src="https://m.media-amazon.com/images/I/41aP5l+ZDQL._AC_SX425_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">EUROTRAMP</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Trampolin
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 500.00</CardSubtitle>
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
                                        <li>Negro</li>
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
                        src="https://m.media-amazon.com/images/I/71A4ixilR1L._AC_SY355_.jpg"
                        top
                        width="100%"
                        className="imagen-articulo"
                        />
                        <CardBody>
                        <CardTitle className="titulo-articulo">CALISTENIA PRO</CardTitle>
                        <CardSubtitle className="subtitulo-articulo" >
                            Barras Paralelas
                        </CardSubtitle>
                        <CardSubtitle className="texto-articulo">BS. 720.00</CardSubtitle>
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
                            </UncontrolledPopover>
                        </div>
                        </CardBody>
                    </Card>
                </div>          
            </div>
        </div>
    ); 
}



function Gimnasia(props){
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
export default Gimnasia;