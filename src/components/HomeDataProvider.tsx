'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { IDataCard, IPool, IChain } from '@/types';
import { fetchHomeData } from '@/utils/api';

interface HomeData {
  dataCards: IDataCard[];
  pools: IPool[];
  chains: IChain[];
}

interface HomeDataContextType extends HomeData {
  loading: boolean;
}

const HomeDataContext = createContext<HomeDataContextType>({
  dataCards: [],
  pools: [],
  chains: [],
  loading: true,
});

export const useHomeData = () => {
  const context = useContext(HomeDataContext);
  return context;
};

interface HomeDataProviderProps {
  children: React.ReactNode;
}

export const HomeDataProvider: React.FC<HomeDataProviderProps> = ({ children }) => {
  const [data, setData] = useState<HomeData>({
    dataCards: [],
    pools: [],
    chains: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const homeData = await fetchHomeData();
        setData(homeData as HomeData);
      } catch (error) {
        console.error('Error fetching home data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <HomeDataContext.Provider value={{ ...data, loading }}>
      {children}
    </HomeDataContext.Provider>
  );
};
