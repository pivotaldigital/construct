import React from 'react';
import { Box, Stack, Tab, Tabs } from '@mui/material';
import { Reader, renderToStaticMarkup } from '@usewaypoint/email-builder';

const WELCOME_EMAIL = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#F2F5F7',
      canvasColor: '#FFFFFF', 
      textColor: '#242424',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'block-logo',
        'block-heading',
        'block-welcome-text',
        'block-cta',
        'block-footer'
      ]
    }
  },
  'block-logo': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 24,
          bottom: 24,
          right: 24,
          left: 24
        },
        textAlign: 'center'
      },
      props: {
        height: 32,
        url: 'https://placehold.co/120x32',
        alt: 'Logo',
        contentAlignment: 'middle'
      }
    }
  },
  'block-heading': {
    type: 'Heading',
    data: {
      style: {
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24
        }
      },
      props: {
        level: 'h1',
        text: 'Welcome to Our Platform!'
      }
    }
  },
  'block-welcome-text': {
    type: 'Text',
    data: {
      style: {
        fontWeight: 'normal',
        padding: {
          top: 0,
          bottom: 24,
          right: 24,
          left: 24
        }
      },
      props: {
        text: 'Thank you for joining us! We\'re excited to have you on board. Get started by exploring our features and let us know if you need any help.'
      }
    }
  },
  'block-cta': {
    type: 'Button',
    data: {
      style: {
        padding: {
          top: 8,
          bottom: 32,
          right: 24,
          left: 24
        },
        textAlign: 'center'
      },
      props: {
        buttonBackgroundColor: '#0079CC',
        buttonStyle: 'rounded',
        buttonTextColor: '#FFFFFF',
        text: 'Get Started →',
        url: 'https://example.com/start',
        size: 'large'
      }
    }
  },
  'block-footer': {
    type: 'Text',
    data: {
      style: {
        color: '#666666',
        fontSize: 12,
        padding: {
          top: 16,
          bottom: 24,
          right: 24,
          left: 24
        },
        textAlign: 'center'
      },
      props: {
        text: '© 2024 Your Company. All rights reserved.'
      }
    }
  }
};

export default function App() {
  const [tab, setTab] = React.useState<'preview'|'html'>('preview');
  
  return (
    <Box sx={{ p: 3, minHeight: '100vh', bgcolor: 'background.default' }}>
      <Stack spacing={2}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)}>
          <Tab value="preview" label="Preview" />
          <Tab value="html" label="HTML" />
        </Tabs>

        {tab === 'preview' ? (
          <Reader document={WELCOME_EMAIL} rootBlockId="root" />
        ) : (
          <Box 
            component="pre" 
            sx={{ 
              p: 2,
              bgcolor: 'white',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              overflow: 'auto'
            }}
          >
            {renderToStaticMarkup(WELCOME_EMAIL, { rootBlockId: 'root' })}
          </Box>
        )}
      </Stack>
    </Box>
  );
}