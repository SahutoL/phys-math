
import type { ReactNode } from 'react';

export interface Topic {
  id: string;
  title: string;
  content: ReactNode;
  summary?: string;
}
