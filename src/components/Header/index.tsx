import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const logo = require("../../assets/Logo.png");
const chevronLeft = require("../../assets/icons/chevron-left.png");

interface HeaderProps {
  backButton: boolean;
  onPress: () => void;
}

const Header = ({ backButton, onPress }: HeaderProps) => (
  <View style={styles.container}>
    <View style={styles.contentLeft}>
      {backButton && (
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
          <Image source={chevronLeft} />
        </TouchableOpacity>
      )}
    </View>
    <View style={styles.contentCenter}>
      <Image source={logo} style={styles.logo} />
    </View>
    <View style={styles.contentRight} />
  </View>
);

export default Header;
