import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <View>
      <Text>Este es un ejemplo de contador usando hooks</Text>
      <Text>{count}</Text>
      <Button onPress={handleClick} title="Increment"></Button>
    </View>
  );
};

export default Counter;
