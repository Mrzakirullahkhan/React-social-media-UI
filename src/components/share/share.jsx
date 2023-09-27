import React from 'react'
import "./share.css"
import ShareIcon from '@mui/icons-material/ScreenShare';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

export default function share() {
  return (
    <div className='share'>
      <div className="sharetop">
      <img src="/assets/person/profilepic.jpg" alt="" className="shareprofileImg" />
      <input placeholder="what's in your mind"  className='shareInput'/>
      </div>
      <hr className='shareHR'/>
      <div className="shareBottom">
        <div className="shareOptions">
            <div className="shareOption">
                <ShareIcon className='shareIcon' htmlColor="tomato"/>
                <span className='shareOptionText' >Photo or Video</span>
            </div>
            <div className="shareOption">
                <LabelImportantIcon className='shareIcon' htmlColor="blue"/>
                <span className='shareOptionText'>Tags</span>
            </div>
            <div className="shareOption">
                <LocationOnIcon className='shareIcon' htmlColor="green"/>
                <span className='shareOptionText'>Location</span>
            </div>
            <div className="shareOption">
                <EmojiEmotionsIcon className='shareIcon' htmlColor="goldenrod"/>
                <span className='shareOptionText'>Feelings</span>
            </div>
           
        </div>
        <button className='shareBtn'>share</button>
      </div>
    </div>
  )
}
