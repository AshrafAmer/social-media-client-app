import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import SinglePost from './SinglePost';
import PostsData from '../../Services/posts.service';
import { useHistory } from "react-router-dom";


export default function Posts({data}) {
    const { register, handleSubmit, errors} = useForm();
    const history = useHistory();

    const addPost = (_body) => {
        PostsData.create(_body)
            .then( data => {
              console.log(data);
              if(data){
                window.location.reload(true);
              }
            },
            err => {
                console.log(err.response.data.message);
            }
        );
    }

    const onSubmit = data => addPost(data.body);

  return (
    <>
        <div className="col-md-12 posts-card">
            <div className="card card-small">
                <div className="share-box-inner">
                    <div className="profile-thumb">
                            <FontAwesomeIcon size='2x' icon={faShare} color='#CFB53B'/>
                    </div>

                    <div className="share-content-box w-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="share-text-box">
                            <textarea ref={register({ required: true })} name="body"
                             className="share-text-field" placeholder="Say Something" data-target="#textbox"></textarea>
                            <button className="btn-share" type="submit">share</button>
                        </form>
                        {errors.body && <span style={{marginLeft: '7%'}} className="my-form-error">This field is required</span>}
                    </div>
                </div>
            </div>
            
            <SinglePost _id={data}/>
            
        </div>
    </>
  );
}