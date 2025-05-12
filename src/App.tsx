import React from 'react';
import { Box } from '@mui/material';
import { Reader } from '@usewaypoint/email-builder';

// Sample email template configuration
const SAMPLE_EMAIL = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#F8F8F8',
      canvasColor: '#FFFFFF',
      textColor: '#242424',
      fontFamily: 'MODERN_SANS',
      childrenIds: ['welcome-text']
    }
  },
  'welcome-text': {
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
        text: 'Welcome to Email Builder!'
      }
    }
  }
};

export default function App() {
  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '600px', bgcolor: 'white', boxShadow: 1 }}>
        <Reader document={SAMPLE_EMAIL} rootBlockId="root" />
      </Box>
    </Box>
  );
}