import React from 'react'
import { Card, CardColumns } from 'react-bootstrap';
import '../assets/styles/oneCard.css';

function OneCard(props) {

    const { title, urlToImage, description, url } = props.article;
    return (

        <Card>
            <a href={url} target="_blank">
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
}

export default OneCard;
