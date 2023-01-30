import React from 'react';

// children_components
import DefaultButtons from './children_components/home_default_buttons/default_buttons.js';
import VariantTextButtons from './children_components/home_default_buttons/variant_text_buttons.js';
import VariantOutlineButtons from './children_components/home_default_buttons/variant_outline_buttons.js';
import PrimaryButtons from './children_components/home_primary_buttons/primary_buttons.js';

// styles
import './home.css';
import PrimaryVariantTextButtons from './children_components/home_primary_buttons/variant_text_buttons';
import PrimaryVariantOutlineButtons from './children_components/home_primary_buttons/primary_variant_outline_buttons';
import PrimaryButtonsSize from './children_components/home_primary_buttons/primary_buttons_size';
import PrimaryButtonsVariantTextSize from './children_components/home_primary_buttons/primary_buttons_variant_text_size';
import PrimaryButtonsVariantOutlineSize from './children_components/home_primary_buttons/primary_buttons_variant_outline_size';

const Home: React.FC = () => {
  return (
    <>
      <section className="contentainer">
        <ol className="grid content">
          <DefaultButtons />
          <VariantTextButtons />
          <VariantOutlineButtons />
          <PrimaryButtons />
          <PrimaryVariantTextButtons />
          <PrimaryVariantOutlineButtons />
          <PrimaryButtonsSize />
          <PrimaryButtonsVariantTextSize />
          <PrimaryButtonsVariantOutlineSize />
        </ol>
      </section>
    </>
  );
};

export default Home;
