import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': `Software Development
    /Cloud`,
    'image': {
      'desc': "screenshot of aws",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
  'title': "  Business Analytics & Data Science",
  'image': {
    'desc': " screenshot of analytical code",
    'src': "images/example2.png",
    'comment': ""
   }
 },
 {
 'title': "Educator",
 'image': {
   'desc': "screenshot of STEM",
   'src': "images/example3.png",
   'comment': ""
   }
 }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
