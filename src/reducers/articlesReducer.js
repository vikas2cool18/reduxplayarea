const initalArticles = [
    
]
const articlesReducer=(state=initalArticles, action)=> {
    switch(action.type) {
        case 'ADD_ARTICLE' : {
            return [...state, action.payload]
        }
        case 'REMOVE_ARTICLE' : {
            return state.filter(article=> article.id!=action.payload )
        }
        case 'UPDATE_ARTICLE' : {
            return state.map((article)=> {
                if(article.id==action.payload) {
                    return {...article, published: !article.published}
                } else {
                    return {...article}
                }
            })
                
               }
        default: {
            return [...state]
        }
    }

}

export default articlesReducer