import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import finance from "./assets/finance.svg"
import { Link } from 'react-router-dom'
export default function Homepage() {
  return (
    <div>
        <Container >
            <div className='vh-100 d-flex justify-content-center align-items-center'>
            <Row>
                <Col className='d-flex align-items-center justify-content-center'>
                <div className='text-center '>
                    <h1>Abass' Budget App</h1>
                    <Link to="/create_budget"><Button variant="outline-primary">Create a budget</Button></Link>
                    </div>
                </Col>
                <Col>
                    <Image src={finance} fluid/>
                </Col>
            </Row>
            </div>
        </Container>
    </div>
  )
}
