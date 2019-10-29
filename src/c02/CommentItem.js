import React from 'react';
import PropTypes from 'prop-types';


export default class Comment extends React.PureComponent{
    static propTypes = {
        comment: PropTypes.object.isRequired
    }
    render() {
        const { author, content } = this.props.comment;
        return (
            <div className="comment-item">
                <span className="avatar" />
                  <button className="link-btn">{author}</button>
                  <p>{content}</p>
            </div>
        )
    }
}