import React, {useEffect} from "react";
import { Container, Row, Col} from 'react-bootstrap';
import './assets/home.css';
import Profile from './../Profile/Profile';
import Header from './../Header/Private/Header';
import Posts from './../Posts/Posts';
import LayoutCanvas from './../Auth/include/LayoutCanvas';

export default function Home({posts}) {  
  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
});

  return (
    <>

      <Header activeLink = {posts}/>
      <Container className='home-body mt-5' fluid="md">
        <Row>
          <Col sm={4}>
            <Profile />
          </Col>
          <Col sm={8}>
            <Posts data={posts}/>
          </Col>
        </Row>
      </Container>
      <LayoutCanvas />
    </>
  );
}