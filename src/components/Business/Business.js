import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import NavBar from '../NavBar/NavBar'
import * as actions from '../../actions/actions';
import OneCard from '../OneCard';
import { CardColumns } from 'react-bootstrap';
import country_code from '../../country_code.json';


function Business(props) {

    useEffect(() => {
        props.getNews('business', props.code);
        props.getImages('business');
    }, [props.code]);

    return (
        <div>
            <NavBar test={true} click={(e) => props.handleDDChange(e)} code={country_code[props.code]} />
            <CardColumns id="cat-card">
                {
                    props.articles.map((article, i) => (
                        <OneCard article={article} key={i} imageUrl={props.pics[i].urls.thumb} />
                    ))
                }
            </CardColumns>
            <p className="p-credit">All images are from <a className="a-credit" href="https://unsplash.com/">Unsplash.com</a></p>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        handleDDChange: (code) => dispatch(actions.changeCountry(code)),
        getNews: (category, code) => dispatch(actions.getNews(category, code)),
        getImages: (category) => dispatch(actions.getImages(category))
    };
};

const mapStateToProps = (state) => {
    return {
        code: state.news.code,
        articles: state.news.articles,
        pics: state.pics.pics
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Business);