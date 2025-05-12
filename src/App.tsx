import React from 'react';
import { Box } from '@mui/material';
import { Reader } from '@usewaypoint/email-builder';
import { useDocument } from './documents/editor/EditorContext';

export default function App() {
  const document = useDocument();

  return (
    <Box sx={{ p: 2 }}>
      <Reader document={document} rootBlockId="root" />
    </Box>
  );
}