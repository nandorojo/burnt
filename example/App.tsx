import { Pressable, StyleSheet, Text } from "react-native";

import * as Burnt from "burnt";

export default function App() {
  return (
    <Pressable
      onPress={async () => {
        Burnt.alert({
          title: "It's happy!",
          message: "This is a message",
          preset: "done",
        });
      }}
      style={styles.container}
    >
      <Text style={styles.text}>Open Toast</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151718",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // height: 30,
    paddingHorizontal: 16,
    backgroundColor: "#481A1D",
    color: "#FF6369",
    borderColor: "#671E22",
    borderWidth: 2,
    borderRadius: 6,
    paddingVertical: 8,
    overflow: "hidden",
  },
});
