import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function EmojiBank() {
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const onOptionChange = (value) => {
    setSelectedEmoji(value);
  };

  const emojiToggle = (selectedEmoji) => {
    if (emoji === selectedEmoji) {
      setSelectedEmoji('');
    } else {
      // Notify the user that they can only choose 1 emoji
      alert('You can only choose 1 emoji for your GratitudeGram.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.emojiTitle}>Emoji Bank</Text>
      <Text style={styles.emojiTitle}>Select An Emoji </Text>

      {['😄', '😆', '😊', '😇', '🙃', '😉', '😌', '😍', '😘', '😚', '😋', '😝', '😜', '🤪', '🤓', '😎', '🤩', '🥳', '😏', '😩', '🥺', '😭', '🤯', '🥵', '🤗', '🤭', '🤤', '🤑', '🫶', '🙌', '👌', '🤞', '🙏', '🤙', '🫦', '👅', '💋', '🤰', '💐', '🌹', '🌷', '🌞', '🌈', '✨', '🏆', '🎊', '🎉', '🎁', '🩷', '🧡', '💛', '💚', '🩵', '💙', '💜', '🖤', '🤍', '💔', '💞', '💓', '💗', '💖', '💘'].map((emoji, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.emoji, { backgroundColor: selectedEmoji === emoji ? 'orange' : '#fff' }]}
          onPress={() => emojiToggle(emoji)}
        >
          <Text>{emoji}</Text>
        </TouchableOpacity>
      ))}
      <Text>Selected Emoji is {selectedEmoji}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFD580', // Light orange color
  },
  emojiTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  emoji: {
    padding: 8,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});

export default EmojiBank;