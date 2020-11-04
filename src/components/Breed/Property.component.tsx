import React from "react";

type TPropertyProps = {
  name: string;
  value: string;
};

const Property = ({ name, value }: TPropertyProps): JSX.Element => (
  <li>
    <span className="breed-details__item">{name}: </span> {value}
  </li>
);

export default Property;
