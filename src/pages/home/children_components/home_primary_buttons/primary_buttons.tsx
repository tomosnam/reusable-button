import React from 'react';

// components
import Button from '../../../../components/button/button.js';

const PrimaryButtons: React.FC = () => {
  return (
    <>
      <li className="list-item">
        <div className="item">
          <p className="item-description">{'<Button color="primary" />'}</p>
          <Button color="primary">Button 4</Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button color="primary" startIcon="grocery_store" />'}
          </p>
          <Button color="primary" startIcon="grocery_store">
            Button 4
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button color="primary" endIcon="grocery_store" />'}
          </p>
          <Button color="primary" endIcon="grocery_store">
            Button 4
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button color="primary" disabledShadow />'}
          </p>
          <Button color="primary" disabledShadow>
            Button 4
          </Button>
        </div>
      </li>
    </>
  );
};

export default PrimaryButtons;
