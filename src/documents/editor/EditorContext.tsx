import { create } from 'zustand';
import { TReaderDocument } from '@usewaypoint/email-builder';

type TValue = {
  document: TReaderDocument;
};

const editorStateStore = create<TValue>(() => ({
  document: {
    root: {
      type: 'EmailLayout',
      data: {
        backdropColor: '#F5F5F5',
        canvasColor: '#FFFFFF',
        textColor: '#262626',
        fontFamily: 'MODERN_SANS',
        childrenIds: ['welcome-text'],
      },
    },
    'welcome-text': {
      type: 'Text',
      data: {
        style: {
          padding: {
            top: 16,
            bottom: 16,
            left: 24,
            right: 24
          }
        },
        props: {
          text: 'Welcome to the Email Builder!'
        }
      }
    }
  }
}));

export function useDocument() {
  return editorStateStore((s) => s.document);
}