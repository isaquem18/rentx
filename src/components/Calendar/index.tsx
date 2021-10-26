import React from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { 
  Calendar as CustomCalendar,
  LocaleConfig
} from 'react-native-calendars';

LocaleConfig.locales['pt-BR'] = {
  monthNames: [ 'Janeiro',  'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mac.','Abr','Mai','Jun','Jul.','Ago','Set.','Out.','Nov.','Dez.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['DOM.','SEG','TER','QUA','QUI','SEX','SAB'],
  today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-BR';

export const Calendar = () => {

  const theme = useTheme();

  return (
      <CustomCalendar
        current={new Date()}
        renderArrow={( direction ) => {
          return <Feather 
              name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
              color={theme.colors.text}
              size={24}
            />
        }}
      />
  )
}