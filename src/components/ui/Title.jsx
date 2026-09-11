import React from 'react';

const Title = ({ children, addClass = '' }) => (
  <h4 className={`mt-8 text-2xl font-bold tracking-tight ${addClass}`}>{children}</h4>
);

export default Title;
