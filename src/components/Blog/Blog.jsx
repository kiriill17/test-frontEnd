import './Blog.css';
import Post from '../Post/Post';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Blog() {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:7777/posts')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <>
      <div className="blog__container">
        {items.map((obj) => {
          return <Post id={obj._id} title={obj.title} text={obj.text} />;
        })}
      </div>
    </>
  );
}
