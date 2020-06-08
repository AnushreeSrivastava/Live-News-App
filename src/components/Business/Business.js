import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import NavBar from '../NavBar/NavBar'
import * as actions from '../../actions/actions';
import OneCard from '../OneCard';
import { CardColumns, ListGroup } from 'react-bootstrap';

function Business(props) {
    const [code, setCode] = useState('us')

    useEffect(() => {
        props.getNews('business', code);
    }, [code]);

    const handleChange = (e) => {
        setCode(e)
    }

    return (
        <div>
            <NavBar click={(e) => handleChange(e)} code={code} />
            <CardColumns id="cat-card">
                {
                    props.articles.articles.map((article, i) => (
                        <OneCard article={article} key={i} />
                    ))
                }
            </CardColumns>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getNews: (category, code) => dispatch(actions.getNews(category, code))
    };
};

const mapStateToProps = state => {
    return {
        articles: state.news
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Business);