// RyansTheme/src/theme/partials/testimonials_dropdown_partial.jsx
import Island from '@hubspot/cms-components';
import TestimonialsDropdown from '../components/modules/Testimonials.module/TestimonialsDropdown?island';

export default function TestimonialsDropdownPartial({ numOfCards }) {
  console.log(
    'TestimonialsDropdownPartial rendered with numOfCards:',
    numOfCards,
  ); // Debug
  return (
    <Island
      module={TestimonialsDropdown}
      numOfCards={numOfCards}
      hydrateOn="load"
    />
  );
}
