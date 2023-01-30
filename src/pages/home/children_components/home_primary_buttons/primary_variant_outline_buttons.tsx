import React from 'react';

// components
import Button from '../../../../components/button/button.js';

const PrimaryVariantOutlineButtons: React.FC = () => {
  return (
    <>
      <li className="list-item">
        <div className="item">
          <p className="item-description">
            {'<Button color="primary" variant="outline"/>'}
          </p>
          <Button color="primary" variant="outline">
            Button 6
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {
              '<Button color="primary" variant="outline" startIcon="grocery_store"/>'
            }
          </p>
          <Button color="primary" variant="outline" startIcon="grocery_store">
            Button 6
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {
              '<Button color="primary" variant="outline" endIcon="grocery_store"/>'
            }
          </p>
          <Button color="primary" variant="outline" endIcon="grocery_store">
            Button 6
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button color="primary" variant="outline" disabled />'}
          </p>
          <Button color="primary" variant="outline" disabled>
            Button 6
          </Button>
        </div>
      </li>
    </>
  );
};

export default PrimaryVariantOutlineButtons;
