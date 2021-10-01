import React, { useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router';
import { getHeroeById } from '../../selectors/getHeroeId'

const HeroesScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroeById(heroeId), [ heroeId ])

    if (!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if( history.length <= 2){
            history.push('/')
        }else{
            history.goBack()
        }
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero

    return (
        <Row className="mt-5">
            <Col xs={4}>
                <img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} className="img-thumbnail" />
            </Col>
            <Col xs={8}>
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
                    <li className="list-group-item"><b>Characters: </b>{characters}</li>
                </ul>
                <button className="btn btn-outline-info" onClick={handleReturn}>
                    Return
                </button>
            </Col>
        </Row>
    );
};

export default HeroesScreen;