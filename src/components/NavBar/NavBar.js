import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import country_code from '../../country_code.json';

export default class NavBar extends Component {

    render() {
        return (
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link as={NavLink} exact to="/" eventKey="link-1">
                        <FontAwesomeIcon icon={faHome} size="lg" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/business" eventKey="link-2">Business</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/technology" eventKey="link-3">Technology</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/sport" eventKey="link-4">Sports </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/entertainment" eventKey="link-5">Entertainment </Nav.Link>
                </Nav.Item>
                <div className="div-filter float-right ml-auto">
                    <span>Filter By Country</span>
                    <DropdownButton id="dropdown-basic-button" title={this.props.code} onSelect={this.props.click}>
                        {
                            Object.keys(country_code).map(key => <Dropdown.Item key={key} eventKey={key}>{country_code[key]}</Dropdown.Item>)
                        }
                    </DropdownButton>
                </div>

            </Nav>

        )
    }

}
