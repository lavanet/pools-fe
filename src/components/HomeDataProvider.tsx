'use client';

import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { fetchHomeData, HomeData } from '@/utils/api';
import HomeDataContext, { HomeDataContextType } from '@/contexts/HomeDataContext';

interface HomeDataProviderProps {
  children: React.ReactNode;
  refreshInterval?: number;
}

export const HomeDataProvider: React.FC<HomeDataProviderProps> = ({ children, refreshInterval = 60000 }) => {
  // State for storing fetched data, loading status, and error
  const [data, setData] = useState<HomeData>({ dataCards: [], pools: [], chains: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Function to fetch data, wrapped in useCallback to prevent unnecessary re-renders
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const homeData = await fetchHomeData();
      setData(homeData);
    } catch(error) {
      console.error('Error fetching home data:', error);
      setError(error instanceof Error ? error : new Error('An unknown error occurred'));
    } finally {
      setLoading(false);
    }
  }, []);

  const isInitialMount = useRef(true);

  // Effect to fetch data initially and set up interval for periodic fetching
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      fetchData();
    }
    const intervalId = setInterval(fetchData, refreshInterval);
    return () => clearInterval(intervalId);
  }, [fetchData, refreshInterval]);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo<HomeDataContextType>(() => ({
    ...data,
    loading,
    error,
    refreshData: fetchData,
  }), [data, loading, error, fetchData]);

  return (
    <HomeDataContext.Provider value={contextValue}>
      {children}
    </HomeDataContext.Provider>
  );
};
