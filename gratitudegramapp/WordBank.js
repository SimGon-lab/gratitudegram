import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text,  TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Button} from 'react-native';
import {EmojiBank} from './EmojiBank';
import LoginScreen from './LoginScreen';


const WordBank = () => {
  const categories = [
    
    { title: 'To You', words: ['Tenacious', 'Dependable', 'Punctual'] },
    { title: 'To Me', words: ['Honest', 'Temperate', 'Loyal', 'Encouraging', 'Hardworking', 'Flexible', 'Self-controlled', 'Thorough', 'Generous', 'Wise', 'Mindful', 'A leader'] },
    
   { title: 'To Others', words: ['Eloquent', 'Perceptive', 'Patient', 'Funny', 'Great listener', 'Resourceful', 'Focused', 'Imaginative', 'Loving', 'Empathetic', 'Assertive', 'Professional', 'Independent', 'Ambitious', 'Caring', 'Fun', 'Fair', 'Knowledgeable', 'Courageous', 'Curious', 'Positive', 'Open-minded', 'Warm', 'Optimistic', 'Creative', 'Mentally strong', 'Unselfish', 'Faithful', 'Understanding', 'Cooperative'] },

  ];

  const [selectedWords, setSelectedWords] = useState([]);

  const handleWordToggle = (word) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((selectedWord) => selectedWord !== word));
    } else {
      if (selectedWords.length < 3) {
        setSelectedWords([...selectedWords, word]);
      } else {
        // Notify the user that they can only choose 3 words
        alert('You can only choose 3 words.');



       const navigation = useNavigation();
        navigation.navigate('EmojiBank');
      }
     
    }
  };

  return (
    <ScrollView style={styles.container}>
      {categories.map((category, index) => (
        <View key={index} style={styles.categoryBox}>
          <Text style={styles.categoryTitle}>{category.title}</Text>
          <View>
            {category.words.map((word, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => handleWordToggle(word)}
                style={[styles.word, { backgroundColor: selectedWords.includes(word) ? 'pink' : 'white' }]}
              >
                <Text>{word}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
      <View style={styles.selectedWordsBox}>
        <Text style={styles.categoryTitle}>Selected Words:</Text>
        <View>
          {selectedWords.map((word, idx) => (
            <Text key={idx} style={styles.selectedWord}>{word}</Text>
          ))}
        </View>
      </View>
      <Button title="Go to Emoji Bank" onPress={EmojiBank} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFD580', // Light orange color
  },
  categoryBox: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'orange', // Orange color for category boxes
    borderRadius: 8,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  word: {
    padding: 8,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  selectedWordsBox: {
    marginTop: 16,
    padding: 16,
    backgroundColor: 'orange', // Orange color for selected words box
    borderRadius: 8,
  },
  selectedWord: {
    fontSize: 16,
  },
});

export default WordBank;
