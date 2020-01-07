import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import {ScrollView} from 'react-native';
import PhotoPost from '../components/PhotoPost';

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    Axios.get('http://localhost:3000/image_post/index')
      .then(res => {
        setPosts(res.data)
      })
      .catch(e => setPosts(e.message))
  }, [])

  return (
    <ScrollView>
      {posts.map((post, index) => {
        return(
          <PhotoPost key={index} post={post} />
        )
      })}
    </ScrollView>
  )
}

export default Home
