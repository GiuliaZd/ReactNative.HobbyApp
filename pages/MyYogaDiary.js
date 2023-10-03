import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image } from 'react-native';

const MyYogaDiary = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 16, color: "blue", fontWeight: 'bold'}}>
            Welcome to My Yoga Diary!!
          </Text>
          <Image source={require('../assets/yoga.png')} style={{width: 400, height:300}} />
           <Button
            title="Go back"
            onPress={() => navigation.goBack()}
          />
          <Button
            onPress={() => navigation.navigate('MyReadingDiary')}
            title="My Reading Diary"
          />
           <Button
            onPress={() => navigation.navigate('MyCosts')}
            title="My Costs Calculator"
          />
          <Button
            title="Menu page"
            onPress={() => navigation.reset({
                index: 0,
                routes: [{name: 'MyHobbiesApp',params: { someParam: 'reset' }},],})
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MyYogaDiary;