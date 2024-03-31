import React from 'react';
import { Button } from 'react-bootstrap';

export default function SocialButton({ button }) {
  return (
    <>
      <Button variant="outline-dark rounded-circle p-2 m-2">
        <i className={`fa-brands ${button} fa-xl`}></i>
      </Button>
    </>
  );
}