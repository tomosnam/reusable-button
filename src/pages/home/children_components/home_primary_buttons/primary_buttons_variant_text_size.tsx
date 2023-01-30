import React from 'react';

// components
import Button from '../../../../components/button/button.js';

const PrimaryButtonsVariantTextSize: React.FC = () => {
  return (
    <>
      <li className="list-item">
        <div className="item">
          <p className="item-description">
            {'<Button variant="text" size="sm"/>'}
          </p>
          <Button color="primary" variant="text" size="sm">
            Button 8
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button color="primary variant="text" size="md"/>'}
          </p>
          <Button color="primary" variant="text" size="md">
            Button 8
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button color="primary variant="text" size="lg"/>'}
          </p>
          <Button color="primary" variant="text" size="lg">
            Button 9
          </Button>
        </div>
      </li>
    </>
  );
};

export default PrimaryButtonsVariantTextSize;
