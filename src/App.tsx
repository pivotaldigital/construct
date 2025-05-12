import React from 'react';
import { Box } from '@mui/material';
import { Reader } from '@usewaypoint/email-builder';

const WELCOME_EMAIL = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#F2F5F7',
      canvasColor: '#FFFFFF',
      textColor: '#242424',
      fontFamily: 'MODERN_SANS',
      childrenIds: ['block-welcome-text']
    }
  },
  'block-welcome-text': {
    type: 'Text',
    data: {
      style: {
        fontWeight: 'normal',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24
        }
      },
      props: {
        text: 'Welcome to EmailBuilder.js! This is a sample email template.'
      }
    }
  }
};

export default function App() {
  return (
    <Box sx={{ p: 3, minHeight: '100vh' }}>
      <Reader document={WELCOME_EMAIL} rootBlockId="root" />
    </Box>
  );
}