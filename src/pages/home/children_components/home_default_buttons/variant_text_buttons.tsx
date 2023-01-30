import React from 'react';

// components
import Button from '../../../../components/button/button.js';

const VariantTextButtons: React.FC = () => {
  return (
    <>
      <li className="list-item">
        <div className="item">
          <p className="item-description">{'<Button variant="text" />'}</p>
          <Button variant="text">Button 2</Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button variant="text" startIcon="grocery_store" />'}
          </p>
          <Button variant="text" startIcon="grocery_store">
            Button 2
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button variant="text" endIcon="grocery_store" />'}
          </p>
          <Button variant="text" endIcon="grocery_store">
            Button 2
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button variant="text" disabledShadow />'}
          </p>
          <Button variant="text" disabledShadow>
            Button 2
          </Button>
        </div>
      </li>
    </>
  );
};

export default VariantTextButtons;
