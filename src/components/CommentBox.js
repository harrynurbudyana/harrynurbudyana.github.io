import React, {Component} from "react";
import keyAPI from "./Ably";
// import axios from "axios";

class CommentBox extends Component {
    constructor(props) {
        super(props)
        this.addComment = this.addComment.bind(this)
    }
    async addComment(e) {
        e.preventDefault()
        const comment = e.target.elements.comment.value.trim()
        const name = e.target.elements.name.value.trim()

        const timestamp = Date.now()

        if(name && comment) {
            const commentObject = { name, comment, timestamp }

            const channel = keyAPI.channels.get("comments")
            channel.publish("add_comment", commentObject, (err) => {
                if (err) {
                    console.log("Unable to publish message err = " + err.message)
                }
            })

            e.target.elements.name.value = ""
            e.target.elements.comment.value = ""
        }
    }
    render() {
        return (
            <div>
                <h1 className="title">Berikan Ucapan dan Do'a Untuk Kami</h1>
                <form onSubmit={this.addComment}>
                    <div className="field">
                        <div className="control">
                            <input type="text" className="input" name="name" placeholder="Your Name" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <textarea className="textarea" name="comment" placeholder="Tambah do'a dan ucapan"></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentBox;