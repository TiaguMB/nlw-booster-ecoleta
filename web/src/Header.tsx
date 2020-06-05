import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <h1>{props.title}</h1>
  );
}

export default Header;