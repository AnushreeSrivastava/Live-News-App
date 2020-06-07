import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import NavBar from '../NavBar/NavBar'
import * as actions from '../../actions/actions';
import OneCard from '../OneCard';
import { CardColumns } from 'react-bootstrap';

function Business(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        props.getNews();
        //setData(props.articles);
    }, []);

    return (
        <div>
            <NavBar />
            <CardColumns id="cat-card">
                {
                    props.articles.articles.map(article => (
                        <OneCard article={article} />
                    ))
                }
            </CardColumns>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getNews: () => dispatch(actions.getBusinessNews())
    };
};

const mapStateToProps = state => {
    return {
        articles: state.news
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Business);