import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const BootstrapButton = styled(Button)({


    minHeight: '20px',
    width: '20px',
    borderRadius: '50%',
    borderColor: 'transparent',
    backgroundColor: '#8566aa',
    color: '#fff',
    fontSize: 10,
    border:'none',
    outline: 'none',
    marginLeft: 10,
    boxShadow: '5px 5px 15px -5px rgba(0, 0,0, 0.3)',
 


    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });