import { createContext, useContext } from 'react';

//define types for modal context
export interface ModalContextType {
  openModal: (type: string) => void;
}

//define props for components that might receive openModal
export interface OpenModalProps {
  openModal: (type: string) => void;
}

//modal context with proper typing
export const ModalContext = createContext<ModalContextType | undefined>(undefined);

//hook for accessing the modal context
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};