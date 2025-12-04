import React from 'react';
import './myteam.css';
import image1 from '../../image/image1.jpg';
import myteam from '../../image/myteam.jpg';
import image2 from '../../image/image2.jpg';
import image3 from '../../image/image3.jpg';

const teamMembers = [
  {
    name: 'Miss.Mina Tamang',
    role: 'Documentation ',
    description:
      'Mina tamang is professional documentation specialist for foregin employment ',
    email: 'info@minatamang.com.np',
    image: image1,
  },
  {
    name: 'Ms.Sunil Shrestha',
    role: 'It Professional ',
    description: 'Sunil is IT Expert ',
    email: 'example@example.com',
    image: image2,
  },
  {
    name: 'Miss.Muna Shrestha',
    role: 'Designer',
    description: 'Some text that describes me lorem ipsum ipsum lorem.',
    email: 'example@example.com',
    image: image3,
  },
  {
    name: 'Miss.Megna',
    role: 'Designer',
    description: 'Some text that describes me lorem ipsum ipsum lorem.',
    email: 'example@example.com',
    image: image3,
  },
];

const Myteam = () => {
  return (
    <div className='row'>
      <div>
        <img
          src={myteam}
          alt='myteam'
          style={{ width: '100%', height: '600px' }}
        ></img>
        <h1>My Team Member</h1>
      </div>
      <div>
        {teamMembers.map((member, index) => (
          <div className='column'>
            <div className='card'>
              <img src={image1} alt='John'></img>
              <div className='container'>
                <h1>{member.name}</h1>
                <p className='title'>{member.role}</p>
                <p>{member.description}</p>
                <p>{member.email}</p>
                <p>
                  <button
                    className='button'
                    onClick={() => alert(`Contact ${member.name}`)}
                  >
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div />
    </div>
  );
};

export default Myteam;
