import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../components/header';
import BookItem from '../components/bookItem';
import AddBook from '../components/addBook';

const Books = () =>  {
  const [books, setBooks] = useState([
    { text: 'Erich Maria Remarque "Im Westen nichts Neues"', key: '1' },
    { text: 'Sarah Winman "Still life"', key: '2' },
    { text: 'The Flames by Sophie Haydock', key: '3' },
  ]);

  const pressHandler = (key) => {
    setBooks(prevBooks => {
      return prevBooks.filter(book => book.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 3){
      setBooks(prevBooks => {
        return [
          { text, key: Math.random().toString() },
          ...prevBooks
        ];
      });
    } else {
      Alert.alert('OOPS', 'Book must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddBook submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={books}
              renderItem={({ item }) => (
                <BookItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
export default Books;