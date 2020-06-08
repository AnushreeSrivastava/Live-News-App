import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import NavBar from '../NavBar/NavBar'
import * as actions from '../../actions/actions';
import OneCard from '../OneCard';
import { CardColumns } from 'react-bootstrap';
import country_code from '../../country_code.json';

function Technology(props) {

    useEffect(() => {
        props.getNews('technology', props.code);
    }, [props.code]);

    return (
        <div>
            <NavBar click={(e) => props.handleDDChange(e)} code={country_code[props.code]} />
            <CardColumns id="cat-card">
                {
                    props.articles.map((article, i) => (
                        <OneCard article={article} key={i} />
                    ))
                }
            </CardColumns>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        handleDDChange: (code) => dispatch(actions.changeCountry(code)),
        getNews: (category, code) => dispatch(actions.getNews(category, code))
    };
};

const mapStateToProps = state => {
    return {
        code: state.news.code,
        articles: state.news.articles
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Technology);