import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import * as Burnt from "burnt";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Toaster } from "burnt/web";

export default function App() {
  const [modal, setModal] = useState(false);

  const content = (
    <>
      <Text
        style={[styles.text, styles.red]}
        onPress={async () => {
          Burnt.alert({
            title: "Download canceled.",
            message: "Please try again.",
            preset: "error",
          });
        }}
      >
        Error Alert
      </Text>
      <View style={{ height: 16 }} />
      <Text
        style={[styles.text, styles.orange]}
        onPress={async () => {
          Burnt.alert({
            title: "Download completed.",
            message: "Check your history.",
            preset: "done",
          });
        }}
      >
        Success Alert
      </Text>

      <View style={{ height: 16 }} />
      <Text
        style={[styles.text, styles.yellow]}
        onPress={async () => {
          Burnt.alert({
            title: "Downloading...",
            message: "",
            preset: "spinner",
            duration: 30,
          });
          await new Promise((resolve) => setTimeout(resolve, 3000));
          await Burnt.dismissAllAlerts();
          Burnt.alert({
            title: "Download completed.",
            message: "Check your history.",
            preset: "done",
          });
        }}
      >
        Loading Alert
      </Text>

      <View style={{ height: 16 }} />
      <Text
        style={[styles.text, styles.yellow]}
        onPress={async () => {
          Burnt.alert({
            title: "Verified account",
            preset: "custom",
            icon: {
              ios: {
                name: "checkmark.seal",
                color: "#1D9BF0",
              },
              web: <WebIcon />,
            },
          });
        }}
      >
        Custom Icon Alert
      </Text>

      <View style={{ height: 16 }} />

      <Text
        style={[styles.text, styles.green]}
        onPress={async () => {
          Burnt.toast({
            title: "Payment failed.",
            message: "Please try again.",
            preset: "error",
          });
        }}
      >
        Error Toast
      </Text>

      <View style={{ height: 16 }} />

      <Text
        style={[styles.text, styles.blue]}
        onPress={async () => {
          Burnt.toast({
            title: "Payment processed.",
            message: "Please see your orders.",
            preset: "done",
          });
        }}
      >
        Success Toast
      </Text>
      <View style={{ height: 16 }} />
      <Text
        style={[styles.text, styles.blue]}
        onPress={async () => {
          Burnt.toast({
            title: "This toast has more text, without an icon or a message.",
            preset: "none",
          });
        }}
      >
        Without Icon Toast
      </Text>
      <View style={{ height: 16 }} />
      <Text
        style={[styles.text, styles.blue]}
        onPress={async () => {
          Burnt.toast({
            title: "This toast has more text, and it also has a custom icon.",
            preset: "custom",
            icon: {
              ios: {
                name: "circle",
                color: "#F7A51D",
              },
              web: <WebIcon />,
            },
            duration: Infinity,
          });
        }}
      >
        Custom Icon Toast
      </Text>
    </>
  );

  return (
    <>
      <View style={styles.container}>
        <StatusBar style='light' />
        {content}
        <View style={{ height: 16 }} />
        <Text
          style={[styles.text, styles.purple]}
          onPress={async () => {
            setModal(true);
          }}
        >
          Open Modal
        </Text>
        <Modal
          presentationStyle='formSheet'
          onRequestClose={() => setModal(false)}
          visible={modal}
          animationType='slide'
        >
          <View style={[styles.container]}>{content}</View>
        </Modal>
      </View>
      <Toaster theme='dark' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151718",
    alignItems: "center",
    justifyContent: "center",
  },
  green: {
    backgroundColor: "#0F291E",
    color: "#4CC38A",
    borderColor: "#164430",
  },
  red: {
    backgroundColor: "#481A1D",
    color: "#FF6369",
    borderColor: "#671E22",
  },
  purple: {
    backgroundColor: "#301A3A",
    color: "#BF7AF0",
  },
  text: {
    // height: 30,
    paddingHorizontal: 16,
    borderRadius: 6,
    paddingVertical: 8,
    overflow: "hidden",
    fontSize: 18,
    width: 200,
    textAlign: "center",
  },
  orange: { backgroundColor: "#391A03", color: "#FF8B3E" },
  yellow: { backgroundColor: "#2C2100", color: "#F5D90A" },
  blue: { backgroundColor: "#0A1A2C", color: "#4CB5FF" },
});

const WebIcon = () => {
  if (Platform.OS !== "web") return null;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9'></path>
      <path d='M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z'></path>
    </svg>
  );
};
