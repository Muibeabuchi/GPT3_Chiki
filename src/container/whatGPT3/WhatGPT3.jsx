import React from 'react';
import './whatGPT3.css';
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {

  const text1='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.';

  const text2 = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '

  const text3 = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'

  const text4 = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'

  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature 
          title='What is Gpt-3'
          text={text1}
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination    
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature 
          title='Chatbots'
          text={text2}
        />
        <Feature 
           title='Knowledgebase'
           text={text3}
        />
        <Feature 
           title='Education'
           text={text4}
        />
      </div>
    </div>
  )
}

export default WhatGPT3;