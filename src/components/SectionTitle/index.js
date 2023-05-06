import React from 'react';

import "./index.scss"

function SectionTitle({title,align}) {
  return (
      <h2 className={`section-title ${align? `align-${align}`: "align-left"}`}>{title}</h2>
  )
}

export default SectionTitle;