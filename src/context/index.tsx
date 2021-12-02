import React, { createContext, ReactNode, useState } from 'react';
import { CarDTO } from '../dtos/carDTO';

interface Props {
  children: ReactNode;
}

interface Car {
  car: CarDTO;
  setCar: (x: any) => void;
}

export const SelectedUser = createContext<Car>({} as Car);

export const Provider = ({ children }: Props) => {
  const [ car, setCar ] = useState<CarDTO>({} as CarDTO);

  return (
    <SelectedUser.Provider value={{ car, setCar }}>
      {children}
    </SelectedUser.Provider>
  )
}