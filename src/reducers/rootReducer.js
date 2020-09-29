
const initState = {
    posts:[{id:'1', title: 'squi eus use', body:'1111Lorem,ipsum dolor isti'},
           {id:'2', title: 'mnsöm eus squiuse', body:'2222Lorem,ipsum dolor isti'},
           {id:'3', title: ' psadfdj usesqui eus ', body:'3333Lorem,ipsum dolor isti'}]
}

const rootReducer = (state=initState,action) => {
    // console.log(action);
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post =>
            {
                return post.id !== action.id
            });
            return {
                ...state,
                posts:newPosts
            }
    }
    return state;
}

export default rootReducer;