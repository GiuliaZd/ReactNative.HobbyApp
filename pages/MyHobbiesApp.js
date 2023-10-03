import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';

const MyHobbiesApp = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 16, color: "blue", fontWeight: 'bold'}}>
            Welcome to My Hobbies App!!
          </Text>
          <Image source={require('../assets/girl.png')} style={{width: 300, height:300}} />
          <Button
            onPress={() => navigation.navigate('MyReadingDiary')}
            title="My Reading Diary"
          />
          <Button
            onPress={() => navigation.navigate('MyYogaDiary')}
            title="My Yoga Diary"
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

export default MyHobbiesApp;