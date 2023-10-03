import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image} from 'react-native';
import Calc from '../content/Calc'

const MyCosts = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 16, color: "blue", fontWeight: 'bold'}}>
            Welcome to My Costs Calculator!!
          </Text>
          <Image source={require('../assets/calc.jpg')} style={{width: 350, height:200}} />
          <Calc />
           <Button
            title="Go back"
            onPress={() => navigation.goBack()}
          />
          <Button
            onPress={() => navigation.navigate('MyReadingDiary')}
            title="My Reading Diary"
          />
           <Button
            title="My Yoga diary"
            onPress={() => navigation.navigate('MyYogaDiary', { someParam: 'Param1' })}
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

export default MyCosts;