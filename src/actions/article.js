export const addArticle=(article)=> {
    return {
        type: 'ADD_ARTICLE',
        payload: article
    }
}

export const removeArticle=(id)=> {
    return {
        type: 'REMOVE_ARTICLE',
        payload: id
    }
}

export const updateArticle=(id)=> {
    return {
        type: 'UPDATE_ARTICLE',
        payload: id
    }
}