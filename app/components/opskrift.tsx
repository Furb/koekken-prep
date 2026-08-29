import React from "react";

const opskrift = () => {
  return (
    <div className="px-4 py-8">
      <small className="mb-6">← Oversigt</small>
      <h1 className="mb-8">Lakserilette</h1>

      <ul className="space-y-4 *:border-b-green *:border-b *:pb-1 mb-8">
        <li className="flex justify-between">
          <p>Varmrøget laks</p>
          <p>1kg</p>
        </li>
        <li>Varmrøget laks</li>
        <li>Varmrøget laks</li>
        <li>Varmrøget laks</li>
        <li>Varmrøget laks</li>
        <li>Varmrøget laks</li>
      </ul>
      <div className="px-6 py-8 bg-soft rounded-md">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
          consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
          quisque faucibus ex sapien vitae pellentesque.
        </p>
      </div>
    </div>
  );
};

export default opskrift;
