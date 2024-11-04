import './Post.css';
import axios from 'axios';

export default function Post({ title, text, id }) {
  //del axios
  // const delPostById = async (userId) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:7777/posts/${id}`);
  //     //return response.data;
  //   } catch (err) {
  //     console.error(err.toJSON());
  //   }
  // };

  return (
    <>
      <div className="post__container">
        <div className="post__container__inner">
          <h1>{title}</h1>
          <p>{text}</p>
          <p>Просмотров: 0</p>
          <button>Удалить</button>
        </div>
      </div>
    </>
  );
}
