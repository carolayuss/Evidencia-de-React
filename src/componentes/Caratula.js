import React from 'react'
import fotoa from '../imagenes/caratula1.png';
import fotob from '../imagenes/caratula2.png';
import fotoc from '../imagenes/caratula3.png';
import fotod from '../imagenes/caratula4.png';
import fotoe from '../imagenes/caratula5.png';
import fotof from '../imagenes/caratula6.png';


const Caratula = () => {
  return (
    <div className='images'>
    <img src={fotoa} alt="caratula1.png" style={{ width: '250px', height: '200px' }}/>
    <img src={fotob} alt="caratula2.png" style={{ width: '250px', height: '200px'  }}/>
    <img src={fotoc} alt="caratula3.png" style={{ width: '250px', height: '200px' }}/>
    <img src={fotod} alt="caratula4.png" style={{ width: '250px', height: '200px'  }}/>
    <img src={fotoe} alt="caratula5.png" style={{ width: '240px', height: '200px'  }} />
    <img src={fotof} alt="caratula6.png" style={{ width: '240px', height: '200px'  }} />

    </div>
  )
}

export default Caratula
