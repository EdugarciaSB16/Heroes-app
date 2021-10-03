import React, { useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import useForm from '../../hooks/useForm';
import HeroeCard from '../heroes/HeroeCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import queryString from 'query-string';

const SearchScreen = ({ history }) => {

    const location = useLocation()
    const { q = '' } = queryString.parse( location.search )
    const [value, handleInputChange] = useForm({
        hero: q
    })
    const { hero } = value
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q])

    const handleSeacth = (e) => {
        e.preventDefault()
        history.push(`?q=${ hero }`)
    }
    return (
        <div>
            <h1 className="mt-5">SearchScreen</h1>
            <hr />

            <Row>
                <Col sm={5}>
                    <h3>Search Form</h3>
                    <hr />

                    <form onSubmit={handleSeacth}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="hero"
                            value={hero}
                            onChange={handleInputChange}
                            />
                        <button className="btn mt-2 btn-block btn-outline-info">
                            Search...
                        </button>
                    </form>

                </Col>

                <Col sm={7}>

                    <h4>Results</h4>
                    <hr />
                    {
                        heroesFiltered.map( hero => (
                            <HeroeCard key={hero.id} {...hero} />
                        ))
                    }
                </Col>
            </Row>

        </div>
    );
};

export default SearchScreen;