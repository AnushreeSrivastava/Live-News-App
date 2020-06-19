import React, { useEffect } from 'react'
import { connect } from "react-redux";
import NavBar from '../NavBar/NavBar'
import * as actions from '../../actions/actions';
import OneCard from '../OneCard';
import { CardColumns } from 'react-bootstrap';
import country_code from '../../country_code.json';

function Sport(props) {
    useEffect(() => {
        props.getNews('sports', props.code);
        props.getImages('sports');
    }, [props.code]);


    return (
        <div>
            <NavBar click={(e) => props.handleDDChange(e)} code={country_code[props.code]} />
            <CardColumns id="cat-card">
                {
                    props.articles.map((article, i) => (
                        (props.pics.length !== 0) ?
                            <OneCard article={article} key={i} imageUrl={props.pics[i].urls.thumb} />
                            : <OneCard article={article} key={i} imageUrl="https://unsplash.com/photos/SkEp83PJJAM" />
                    ))
                }
            </CardColumns>
            <p className="p-credit">All images are from <a className="a-credit" rel="noopener noreferrer" target="_blank" href="https://unsplash.com/">Unsplash.com</a></p>
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

const mapStateToProps = state => {
    return {
        code: state.news.code,
        articles: state.news.articles,
        pics: state.pics.pics
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sport);