import React from 'react';

// components
import Button from '../../../../components/button/button.js';

const VariantOutlineButtons: React.FC = () => {
  return (
    <>
      <li className="list-item">
        <div className="item">
          <p className="item-description">{'<Button variant="outline" />'}</p>
          <Button variant="outline">Button 3</Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button variant="outline" startIcon="grocery_store" />'}
          </p>
          <Button variant="outline" startIcon="grocery_store">
            Button 3
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button variant="outline" endIcon="grocery_store" />'}
          </p>
          <Button variant="outline" endIcon="grocery_store">
            Button 3
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button variant="outline" disabledShadow />'}
          </p>
          <Button variant="outline" disabledShadow>
            Button 3
          </Button>
        </div>
      </li>
    </>
  );
};

export default VariantOutlineButtons;
