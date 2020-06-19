import React from 'react';
import { useHistory } from "react-router-dom";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './topHeadlines.css';

const TopHeadlines = () => {
    let history = useHistory();
    const clickHandler = (e) => {
        history.push({
            pathname: `/${e.target.name}`
        });
    }
    return (
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    <Card>
                        <Card.Header>Business</Card.Header>
                        <Card.Body>
                            <Card.Title className="h6">Latest headlines for business news around the world</Card.Title>
                            <Card.Text>
                                The latest Business News: breaking personal finance, company, financial and economic news, plus insight and analysis into US and global markets
                                </Card.Text>
                            <Button variant="primary" name="business" onClick={clickHandler}>More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6}>
                    <Card>
                        <Card.Header>Technology</Card.Header>
                        <Card.Body>
                            <Card.Title className="h6">The latest tech news about the world's best hardware, apps, and much more</Card.Title>
                            <Card.Text>
                                Live news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events.
                        </Card.Text>
                            <Button variant="primary" name="technology" onClick={clickHandler}>More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6}>
                    <Card>
                        <Card.Header>Sports</Card.Header>
                        <Card.Body>
                            <Card.Title className="h6">Latest sports news from around the world</Card.Title>
                            <Card.Text>
                                Latest sports news, scores, schedules, stats and more for all pro sports including NFL, MLB, NBA, NHL, college sports, high school sports and more
                        </Card.Text>
                            <Button variant="primary" name="sport" onClick={clickHandler}>More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6}>
                    <Card>
                        <Card.Header>Entertainment</Card.Header>
                        <Card.Body>
                            <Card.Title className="h6">Read all the latest and breaking celebrity entertainment news.</Card.Title>
                            <Card.Text>
                                Breaking the biggest stories in celebrity and entertainment news. Get exclusive access to the latest stories, photos, and video as only Live can.
                        </Card.Text>
                            <Button variant="primary" name="entertainment" onClick={clickHandler}>More</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>

    )
}

export default TopHeadlines;
// const mapDispatchToProps = dispatch => {
//     return {
//         getBusinessNews: () => dispatch(actions.getBusinessNews())
//     };
// };

// const mapStateToProps = state => {
//     return {
//         articles: state.news
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TopHeadlines);