import { Pressable, StyleSheet, Text, View } from "react-native";

import * as Burnt from "burnt";

export default function App() {
  return (
    <Pressable style={styles.container}>
      <Text
        style={styles.text}
        onPress={async () => {
          Burnt.toast({
            title: "Payment processed.",
            message: "Please see your orders.",
            preset: "done",
          });
        }}
      >
        Open Toast
      </Text>
      <View style={{ height: 16 }} />
      <Text
        style={styles.text2}
        onPress={async () => {
          Burnt.alert({
            title: "Download completed.",
            message: "Check your history.",
            preset: "done",
          });
        }}
      >
        Open Alert
      </Text>
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
    backgroundColor: "#0F291E",
    color: "#4CC38A",
    borderColor: "#164430",
    borderWidth: 2,
    borderRadius: 6,
    paddingVertical: 8,
    overflow: "hidden",
  },
  text2: {
    backgroundColor: "#481A1D",
    color: "#FF6369",
    borderColor: "#671E22",
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 6,
    paddingVertical: 8,
    overflow: "hidden",
  },
});
