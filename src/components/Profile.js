import React, { useState, useEffect } from 'react';
import vk from '../images/vk.jpg';

const Profile = () => {
  const [profile, setProfile] = useState();
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setImages(data.filter((d) => d.id <= 12)))
      .catch((err) => console.log(err));
  }, []);

  console.log(images);
  return (
    <>
      <div className='profile__section'>
        <div className='profile__img'>
          <img src={vk} alt='Virat Kohli' />
        </div>
        <div className='profile__description'>
          <div className='profile__description-header'>
            <p className='profile__name'>{profile.username}</p>
            {/* <p className='profile__name'>VK</p> */}
            <ul className='profile__options'>
              <li>
                <button className='btn'>Message</button>
              </li>
              <li>
                <button className='btn'>
                  <i className='fa-solid fa-user-plus'></i>
                </button>
              </li>
              <li>
                <button className='btn'>
                  <i className='fa-solid fa-angle-down'></i>
                </button>
              </li>
            </ul>
          </div>
          <div className='profile__description-statistics'>
            <p>
              <span className='fw-bold'>1387</span>
              <span>posts</span>
            </p>
            <p>
              <span className='fw-bold'>205M</span>
              <span>followers</span>
            </p>
            <p>
              <span className='fw-bold'>248</span>
              <span>following</span>
            </p>
          </div>
          <div className='profile__description-cta'>
            <p className='fw-bold'>{profile.name}</p>
            <p>{profile.company.name}</p>
            <a target='_blank' rel='noreferrer' href={profile.website}>
              {profile.website}
            </a>
          </div>
        </div>
      </div>
      <section className='profile__posts'>
        {images.map((img) => (
          <div key={img.id} className='post'>
            <img src={img.url} alt={img.title} />
            <div className='post__actions'>
              <p>
                <button>
                  <i className='fa-regular fa-heart'></i> 2.9M
                </button>
              </p>
              <p>
                <button>
                  <i className='fa-regular fa-comment'></i> 3,340
                </button>
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Profile;
