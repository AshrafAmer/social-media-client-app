import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import PostsData from '../../Services/posts.service';
import NoPosts from "./NoPosts";
import AuthService from './../../Services/auth.service';
import Pagination from "./Pagination";


export default function SinglePost({_id}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        if(_id === 'all'){
            PostsData.posts().then(res => {
                posts.push(...res);
                setPosts([...res]);
            });
        }

        if(_id === 'timeline'){
            PostsData.timeline().then(res => {
                posts.push(...res);
                setPosts([...res]);
            });
        }
        

    }, [_id]);
  return (
    <>
    {
    posts.length === 0 ?(<NoPosts />) :
    <Pagination  
    itemsperpage={3}
    items={posts}
    />
        // (posts.map((item, i) => {
        //     if(_id === 'all') {
        //     return(
        //     <div key={i} className="card">
        //         <div className="post-title d-flex align-items-center">
        //             <div className="profile-thumb">
        //                 <FontAwesomeIcon size='2x' icon={faCommentAlt} color='#CFB53B' style={{marginRight: '25px'}} />
        //             </div>

        //             <div className="posted-author">
        //                 <h6 className="author"><a href="">{item.user.first_name} {item.user.last_name}</a></h6>
        //                 <span className="post-time">{new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'short', day: 'numeric'}).format(new Date(item.created_at))}</span>
        //             </div>
        //         </div>
        //         <div className="post-content">
        //             <p className="post-desc">
        //                 {item.body}
        //             </p>
        //         </div>
        //     </div>
        //     )}

        //     else if(_id === 'timeline' && item.user.id === AuthService.userData().id){
        //         return(
        //             <div key={i} className="card">
        //                 <div className="post-title d-flex align-items-center">
        //                     <div className="profile-thumb">
        //                         <FontAwesomeIcon size='2x' icon={faCommentAlt} color='#CFB53B' style={{marginRight: '25px'}} />
        //                     </div>
            
        //                     <div className="posted-author">
        //                         <h6 className="author"><a href="">{item.user.first_name} {item.user.last_name}</a></h6>
        //                         <span className="post-time">{new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'short', day: 'numeric'}).format(new Date(item.created_at))}</span>
        //                     </div>
        //                 </div>
        //                 <div className="post-content">
        //                     <p className="post-desc">
        //                         {item.body}
        //                     </p>
        //                 </div>
        //             </div>
        //         );}
        //     }
        // ))
        }
    </>
  );
}