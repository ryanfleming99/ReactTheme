// RyansTheme/src/theme/components/modules/Testimonials.module/TestimonialsDropdown.jsx
import { useState } from 'react';

export default function TestimonialsDropdown({ numOfCards }) {
  const [selected, setSelected] = useState(0);

  return (
    <select
      value={selected}
      onChange={(e) => setSelected(Number(e.target.value))}
    >
      {Array.from({ length: numOfCards }, (_, i) => (
        <option key={i} value={i}>
          Card {i + 1}
        </option>
      ))}
    </select>
  );
}
