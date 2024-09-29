import React, { createContext, useContext } from 'react';
import { HomeData } from '@/utils/api';

export interface HomeDataContextType extends HomeData {
  loading: boolean;
  error: Error | null;
  refreshData: () => Promise<void>;
}

const HomeDataContext = createContext<HomeDataContextType>({
  dataCards: [],
  pools: [],
  chains: [],
  loading: true,
  error: null,
  refreshData: async () => {},
});

export const useHomeData = () => {
  const context = useContext(HomeDataContext);
  if (context === undefined) {
    throw new Error('useHomeData must be used within a HomeDataProvider');
  }
  return context;
};

export default HomeDataContext;
