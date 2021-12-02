import React from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { ptBR } from './localeConfig';
import { 
  Calendar as CustomCalendar,
  DateCallbackHandler,
  LocaleConfig,
  
} from 'react-native-calendars';

import { generateInterval } from './generateInterval';
import { getPlatformDate } from '../../utils/getPlatformDate';

LocaleConfig.locales['pt-BR'] = ptBR;

LocaleConfig.defaultLocale = 'pt-BR';

interface MarkedDatesProps {
  [key: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  }
}

interface CalendarProps {
  markedDates: MarkedDatesProps;
  onDayPress: DateCallbackHandler;
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

const Calendar = ({ markedDates, onDayPress }: CalendarProps) => {

  const theme = useTheme();

  return (
      <CustomCalendar
        renderArrow={( direction: any ) => {
          return <Feather 
              name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
              color={theme.colors.text}
              size={24}
            />
        }}
        headerStyle={{
          borderBottomWidth: 0.5,
          borderBottomColor: theme.colors.text_detail,
          paddingBottom: 10,
          marginBottom: 10
        }}
        theme={{
          textDayFontFamily: theme.fonts.archivo_400,
          textDayHeaderFontFamily: theme.fonts.inter_500,
          textDayHeaderFontSize: 10,
          textMonthFontSize: 20,
          monthTextColor: theme.colors.title,
          arrowStyle: {
            marginHorizontal: -15
          }
        }}
        firstDay={1}
        minDate={new Date()}
        markingType={'period'}
        markedDates={markedDates}
        onDayPress={onDayPress}
      />
  )
}

export {
  MarkedDatesProps,
  DayProps,
  Calendar,
  generateInterval,
  getPlatformDate
}