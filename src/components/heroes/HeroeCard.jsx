import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroeCard = ({ id, superhero, alter_ego, first_appearance }) => {
    return (
        <Link style={{color: 'black'}} to={`./hero/${ id }`}>
            <Col>
                <Card>
                    <Card.Img variant="top" src={`./assets/heroes/${id}.jpg`} />
                    <Card.Body>
                        <Card.Title>{superhero}</Card.Title>
                        <Card.Title style={{ fontSize: '14px' }}>{alter_ego}</Card.Title>
                        <Card.Text style={{ fontSize: '12px' }} className="text-muted">{first_appearance}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    );
};

export default HeroeCard;