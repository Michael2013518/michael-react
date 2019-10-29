import React from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends React.PureComponent{
    static propTypes = {
        comments: PropTypes.array.isRequired
    }
    render() {
        return (
            <div className="comment-form">
              <form onSubmit={evt => evt.preventDefault()}>
                  <textarea style={{ display: "block", width: "90%"}}></textarea>
                  <button>Submit</button>
              </form>
            </div>
        )
    }
}