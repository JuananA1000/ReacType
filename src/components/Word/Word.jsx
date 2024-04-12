import { useEffect, useRef } from 'react';

export default function Word(props) {
  const { text, active, correct } = props;

  const reRender = useRef(0);

  useEffect(() => {
    reRender.current += 1;
  });

  if (active) {
    return <span className='active'>{text}</span>;
  }

  if (correct === true) {
    return <span className='correct'>{text}</span>;
  }

  if (correct === false) {
    return <span className='incorrect'>{text}</span>;
  }

  return <span>{text}</span>;
}
