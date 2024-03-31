import React from 'react';

export default function Alert({ alerta }) {
  const { texto, tipo, estado } = alerta;

  if (estado) {
    return (
      <div className={alert ${tipo} mt-1}>
        {texto}
      </div>
    );
  } else {
    return null;
  }
}