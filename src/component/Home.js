import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import fb from '../fb.png';
import {connect} from 'react-redux';

class Home extends Component {

    
    
    render() {
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                    <img src={fb} alt=""/>
                    <div className="card-content">
                        <Link to={'/'+post.id}>
                        <span className="card-title red-text">
                            {post.title}
                        </span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>

                )
            })
        ) : (
            <div className="center">
                No Post to show
            </div>
        );
        
        return (
            <div>
                <div className="home container">
                    <h4 className="center">Home</h4>
                        {postList}                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home);