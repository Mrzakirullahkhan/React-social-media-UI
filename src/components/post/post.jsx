import React, { useState } from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Users from '../../dummyData';

export default function Post({post}) {
 const user = Users.filter(u=>u.id===1)
 console.log(user[0].username)
const [like,setlike] =useState(post.like)
const [isliked,setisliked] =useState(false)

const likeHandler =()=>{
    setlike(isliked? like-1:like+1)
    setisliked(!isliked)
}
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" className='postProfileImg' />
                    <span className='postUserName'>{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                    <span className='postDate'>10 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className='postText'>{Users.filter((u)=>u.id === post.userId)[0].desc}</span>
                <img src={post.profilePicture} alt="" className='postImg' />
            </div>
            <div className="postButtom">
                <div className="postBottomLeft">
                    <img src="/assets/person/like.png" alt=""  className='likeIcon' onClick={likeHandler}/>
                    <img src="/assets/person/love.png" alt="" className='likeIcon' onClick={likeHandler}/>
                    <span className='postLikedCounter'>{like} people liked </span>
                </div>
                <div className="postBottomRight">
                    <span className='postCommentText'> {Users.filter((u)=>u.id === post.userId)[0].comment} comments</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
