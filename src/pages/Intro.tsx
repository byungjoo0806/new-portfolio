import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {}

const Intro = (props: Props) => {
    const navigate = useNavigate();
    navigate("/home");

  return (
    <div>intro</div>
  )
}

export default Intro;