import React from 'react';

function MyComponent(props) {
    MyComponent();
  return <h1>Hello, {props.name} , MyComponent(MyComponent(MyComponent(  yes )))</h1>;
}

export default MyComponent;