import React from 'react';

// components
import Button from '../../../../components/button/button.js';

const PrimaryButtonsSize: React.FC = () => {
  return (
    <>
      <li className="list-item">
        <div className="item">
          <p className="item-description">{'<Button size="sm"/>'}</p>
          <Button color="primary" size="sm">
            Button 7
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button color="primary size="md"/>'}
          </p>
          <Button color="primary" size="md">
            Button 7
          </Button>
        </div>

        <div className="item">
          <p className="item-description">
            {'<Button color="primary size="lg"/>'}
          </p>
          <Button color="primary" size="lg">
            Button 8
          </Button>
        </div>
      </li>
    </>
  );
};

export default PrimaryButtonsSize;
