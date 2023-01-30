import React from 'react';

// components
import Button from '../../../../components/button/button.js';

const PrimaryButtonsVariantOutlineSize: React.FC = () => {
  return (
    <>
      <li className="list-item">
        <div className="item">
          <p className="item-description">
            {'<Button  variant="outline" size="sm"/>'}
          </p>
          <Button color="primary" variant="outline" size="sm">
            Button 9
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button color="primary variant="outline" size="md"/>'}
          </p>
          <Button color="primary" variant="outline" size="md">
            Button 9
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button color="primary variant="outline" size="lg"/>'}
          </p>
          <Button color="primary" variant="outline" size="lg">
            Button 9
          </Button>
        </div>
      </li>
    </>
  );
};

export default PrimaryButtonsVariantOutlineSize;
