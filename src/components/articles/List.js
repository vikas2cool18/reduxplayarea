import React from 'react'
import ArticleForm from './Form'
import ArticleTable from './Table'
import {connect} from 'react-redux'

function ListArticles(props) {
return (
    <div>
    <h2>Listing Articles - {props.articles.length}</h2>
        <ArticleTable />
        <ArticleForm />
    </div>
)
}

const mapStateToProps=(state)=> {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(ListArticles)