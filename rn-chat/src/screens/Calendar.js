import { addDays } from 'date-fns';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DatePicker } from 'react-native-week-month-date-picker';

export default function App() {
  const minDate = new Date();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <SafeAreaView style={{ flex: 1}}>
      <DatePicker
        minDate={minDate}
        maxDate={addDays(minDate, 120)}
        markedDates={[minDate, addDays(new Date(), 2)]}
        selectedDate={selectedDate}
        onDateChange={(date) => setSelectedDate(date)}
        disabledDates={[addDays(new Date(), 1), addDays(new Date(), 3)]}
        allowsPastDates={false}
        locale="en"
        theme={{
          primaryColor: 'purple',
        }}
      >
        <View>
          <Text>Timeslots</Text>
          <Text>{selectedDate.toString()}</Text>
        </View>
      </DatePicker>
    </SafeAreaView>
  );
}