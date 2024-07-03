import "./feed.css"
import Post from "../post/Post"
import { Posts } from "../../dummy";
import Share from "../Share/Share"

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}
