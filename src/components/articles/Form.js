import React from 'react'
import {connect} from 'react-redux'
import {addArticle} from '../../actions/article'

class ArticleForm extends React.Component {
    constructor() {
        super()
        this.state={
            title:''
        }
    }

    handleChange=(e)=> {
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }

    handleSubmit=(e)=> {
        e.preventDefault()
        const formData={
            id: Number(new Date()),
            title: this.state.title,
            published: false
        }
        console.log(formData)
        this.props.dispatch(addArticle(formData))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title} />
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=> {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(ArticleForm)