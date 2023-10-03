import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import Books from '../content/Books'

const MyReadingDiary = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 16, color: "blue", fontWeight: 'bold'}}>
            Welcome to My Reading Diary!!
          </Text>
          <Books />
          <Button
            title="Go back"
            onPress={() => navigation.goBack()}
          />
          <Button
            title="Menu page"
            onPress={() => navigation.navigate('MyHobbiesApp')}
          />
          <Button
            title=" My Yoga Diary"
            onPress={() => navigation.navigate('MyYogaDiary', { someParam: 'Param1' })}
          />
           <Button
            onPress={() => navigation.navigate('MyCosts')}
            title="My Costs Calculator"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MyReadingDiary;