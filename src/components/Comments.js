import React, { Component } from "react";
import Comment from "./Comment";

class Comments extends Component {
    render () {
        return (
            <section className="section">
                {
                    this.props.comments.map((comment, index) => {
                        return <Comment key={comment.timestamp} comment={comment} />
                    })
                }
            </section>
        )
    }
}

export default Comments;