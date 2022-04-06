import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { Snapshot } from 'recoil';
import { db } from '../firebase';
import Post from './Post'
 

function Posts() {
    const [posts, setPosts]=useState([]);
    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "posts"),orderBy("timestamp", "desc")), 
                (snapshot)=>{
                    setPosts(snapshot.docs);
                }   
            ), 
          
        [db]
        
    );
    
    console.log(posts);


  return (
    <div>
        
        {posts.map(post =>(
            <Post 
                key={post.id} 
                id={post.id} 
                username={post.data().username} 
                userImg={post.data().profileImg} 
                img={post.data().image} 
                caption={post.data().caption} 

            />
        ))} 
    </div>
  );
}

export default Posts;