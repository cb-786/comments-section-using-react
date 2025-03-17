import { useState } from "react";
import Commentsform from './commentsform';
import "./commentsection.css";
export default function() {

    let [commentlist,setcommentlist] = useState([{
        name:"chirag",
        remarks:"works!!",
        rating :4
    }]);


    let addcomment= (obj)=> {
              setcommentlist((prev)=> {
                return [...prev,obj];
              })
    }


    return (
        <div className="comments-container">
          <h3>Comments</h3>
          {commentlist.map((comment, idx) => (
            <div className="comment" key={idx}>
              <span>{comment.remarks}</span>
              <span>rating = {comment.rating}</span>
              <p>{comment.name}</p>
            </div>
          ))}
      
          <Commentsform addcomment={addcomment} />
        </div>
      );
      
}