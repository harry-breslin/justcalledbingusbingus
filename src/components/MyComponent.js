import React from 'react';

function MyComponent(props) {
  console.log('MyComponent called'+props);
  return <h1>Hello, {props.name}</h1>;
}

export default MyComponent;