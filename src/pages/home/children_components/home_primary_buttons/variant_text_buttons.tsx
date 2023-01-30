import React from 'react';

// components
import Button from '../../../../components/button/button.js';

const PrimaryVariantTextButtons: React.FC = () => {
  return (
    <>
      <li className="list-item">
        <div className="item">
          <p className="item-description">
            {'<Button color="primary" variant="text"/>'}
          </p>
          <Button color="primary" variant="text">
            Button 5
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {
              '<Button color="primary" variant="text" startIcon="grocery_store"/>'
            }
          </p>
          <Button color="primary" variant="text" startIcon="grocery_store">
            Button 5
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button color="primary" variant="text" endIcon="grocery_store"/>'}
          </p>
          <Button color="primary" variant="text" endIcon="grocery_store">
            Button 5
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button color="primary" variant="text" disabled />'}
          </p>
          <Button color="primary" variant="text" disabled>
            Button 5
          </Button>
        </div>
      </li>
    </>
  );
};

export default PrimaryVariantTextButtons;
