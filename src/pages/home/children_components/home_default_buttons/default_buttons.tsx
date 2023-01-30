import React from 'react';

// components
import Button from '../../../../components/button/button.js';

const DefaultButtons: React.FC = () => {
  return (
    <>
      <li className="list-item">
        <div className="item">
          <p className="item-description">{'<Button />'}</p>
          <Button>Button 1</Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button startIcon="grocery_store" />'}
          </p>
          <Button startIcon="grocery_store">Button 1</Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button endIcon="grocery_store" />'}
          </p>
          <Button endIcon="grocery_store">Button 1</Button>
        </div>

        <div className="item">
          <p className="item-description">{'<Button disabledShadow />'}</p>
          <Button disabledShadow>{'Button 1'}</Button>
        </div>
      </li>
    </>
  );
};

export default DefaultButtons;
