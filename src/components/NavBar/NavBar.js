import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


export default class NavBar extends Component {

    render() {
        return (
            <>
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
                    <DropdownButton id="dropdown-basic-button" title={this.props.code} onSelect={this.props.click}>
                        <Dropdown.Item href="#/us" eventKey="us">USA</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" eventKey="in">India</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="ca">Canada</Dropdown.Item>
                    </DropdownButton>
                </Nav>
            </>
        )
    }

}
