import React from 'react'
import ArticleForm from './Form';
import {connect} from 'react-redux'
import {removeArticle, updateArticle} from '../../actions/article'

function ArticleTable(props) {
    const removeArticleById=(id)=> {
        props.dispatch(removeArticle(id))
    }

const handleChecked=(id)=> {
    props.dispatch(updateArticle(id))
}

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>published</th>
                    <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.articles.map((article)=> {
                        return (
                        <tr key={article.id}>
                        <td>{article.id}</td>
                        <td>{article.title}</td>
                        <td><input type="checkbox" checked={article.published} onChange={()=> {
                            handleChecked(article.id)
                        }} /></td>
                        <td><button onClick={()=> {
                            removeArticleById(article.id)
                        }}>Remove</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps=(state)=> {
    return {
    articles: state.articles
    }
}

export default connect(mapStateToProps)(ArticleTable)