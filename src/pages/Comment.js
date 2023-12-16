import React, { Component } from "react";
import CommentBox from "../components/CommentBox";
import Comments from "../components/Comments";
import Ably from "../components/Ably";

class Comm extends Component {
  constructor(props) {
    super(props);

    this.handleAddComment = this.handleAddComment.bind(this);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    const channel = Ably.channels.get("comments");

    channel.attach();
    channel.once("attached", () => {
      channel.history((err, page) => {
        const comments = Array.from(page.items, (item) => item.data);
        this.setState({ comments });
        channel.subscribe((msg) => {
          this.handleAddComment(msg.data);
        });
      });
    });
  }

  handleAddComment(comment) {
    this.setState((prevState) => {
      return {
        comments: [comment].concat(prevState.comments),
      };
    });
  }

  render() {
    return (
      <section className="section">
        <div className="min-h-full">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <CommentBox />
              <Comments comments={this.state.comments} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Comm;
