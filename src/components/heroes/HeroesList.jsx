import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { CardGroup, Container, Row } from 'react-bootstrap';
import HeroeCard from './HeroeCard';

const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <Container>
            <CardGroup className="animate__animated animate__fadeIn">
                <Row xs={1} md={4} className="g-4">
                    {
                        heroes.map(hero => (
                            <HeroeCard  key={hero.id} {...hero} />
                        ))
                    }
                </Row>
            </CardGroup>
        </Container>
    );
};

export default HeroesList;