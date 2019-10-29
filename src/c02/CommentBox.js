import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import withTimer from '../c01/withTimer';
import './CommentBox.css'


const comments = [
    {
        author: "Nate",
        content: "hello react! this is sample comment "
    },{
        author: "Kevin",
        content: "hello kevin, this is comment data"
    },{
        author: "Bood",
        content: "Hello Bood, Rekit"
    }
]

export class CommentBox extends React.PureComponent {
    render() {
        return (
            <div className="comment-box">
                <h1>Comments ({comments.length})</h1>
                <CommentList comments={comments} />
                <CommentForm comments = {comments} />
            </div>
        )
    }
}

export default withTimer(CommentBox);