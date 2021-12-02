import { useContext } from 'react';
import { SelectedUser } from './index';

export const useCar = () => {
  const { car, setCar } = useContext(SelectedUser);

  return { car, setCar };
}