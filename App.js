import React, { useState } from 'react';
import { Text, View, TextInput, Button, ScrollView } from 'react-native';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

export default function App() {
  const [text, setText] = useState('');
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const onEmojiClick = (emojiData) => {
    setText((prevText) => prevText + emojiData.emoji);
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '100%', marginBottom: 20, padding: 10 }}
        placeholder="Type a message"
        value={text}
        onChangeText={setText}
      />
      <Button title="Show Emoji Picker" onPress={() => setEmojiPickerVisible(true)} />
      {emojiPickerVisible && (
        <View style={{ width: '100%', marginTop: 20, alignItems: 'center' }}>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </View>
      )}
    </ScrollView>
  );
}
