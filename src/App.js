import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birth': '890823',
    'sex': 'male',
    'job': 'stu'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동2',
    'birth': '890824',
    'sex': 'female',
    'job': 'stu2'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '홍길동3',
    'birth': '890825',
    'sex': 'male',
    'job': 'stu3'
  }
];

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birth={c.birth}
              sex={c.sex}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
