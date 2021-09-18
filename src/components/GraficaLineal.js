import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {Container, Row, Col, Card, Button, Accordion} from "react-bootstrap";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import '../App.css'
import CapturadorDatos from "./CapturadorDatos"

const GraficaLineal = () => {

    const [entradas, setEntradas] = useState([]);

    return (
        <>
            <Container fluid="true">
                <Card  style={{border: '10px solid rgba(255,255,255,.5)'}} >
                    <Card.Body>
                        <Row>
                            <Col xl={{span: 10, offset: 2}}>
                                <Card.Title style={{textAlign: 'center'}}>Graficas area bajo la curva</Card.Title>
                                <Card.Text style={{textAlign: 'center'}}>
                                    Utilizando hooks como useState, useForm con librerias como React-bootstrap y Recharts
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className="panelGraficas">
                            <Col xl={{span: 5, offset: 2}}>
                                <CapturadorDatos enviarPadre={entradas => setEntradas(entradas)}/>
                            </Col>
                            <Col xl={{span: 5}} style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "2em"
                            }}>
                                <ResponsiveContainer width={'99%'} height={300}>
                                    <AreaChart
                                        width={700}
                                        height={400}
                                        data={entradas}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <XAxis dataKey="etiquetas"/>
                                        <YAxis/>
                                        <Tooltip/>
                                        <Area type="monotone" dataKey="valores" stroke="#8884d8" fill="#8884d8"/>
                                    </AreaChart>
                                </ResponsiveContainer>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default GraficaLineal;