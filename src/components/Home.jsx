import React from 'react';
import { Information } from './homeItem/Information';
import { ProFile } from './homeItem/ProFile';

export function Home() {
  return (
    <div className="wrapper">
      <div className="content">
        <Information />
        <ProFile />
      </div>
    </div>
  );
}
