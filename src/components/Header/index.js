import React from 'react';
// import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {Container, Col, Row} from 'reactstrap'
import './Header.scss'
Header.propTypes = {

};

function Header(props) {
  return (
    <header className='header'>
      <Container>
        <Row className='justify-content-between'>
          <Col xs='auto'>
            <a
              className='header__link header__title'
              href='https://react-redux.js.org/introduction/getting-started'
              target="_blank"
              rel='noopener noreferrer'
              >
              Trang chu
            </a>
          </Col>
          <Col xs= 'auto'>
            <NavLink
              className='header__link'
              to='/photo'
            >Redux project</NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;