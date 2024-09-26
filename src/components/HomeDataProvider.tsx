'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { IDataCard, IPool, IChain } from '@/types';
import { fetchHomeData } from '@/utils/api';

interface HomeData {
  dataCards: IDataCard[];
  pools: IPool[];
  chains: IChain[];
}

const HomeDataContext = createContext<HomeData>({
  dataCards: [],
  pools: [],
  chains: [],
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeData = await fetchHomeData();
        setData(homeData as HomeData);
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <HomeDataContext.Provider value={data}>
      {children}
    </HomeDataContext.Provider>
  );
};
