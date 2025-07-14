import React from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  className?: string;
  onPress?: () => void;
};

const Button: React.FC<Props> = ({ name, className, onPress }) => (
  <>
    <TouchableOpacity
      onPress={() => {
        onPress && onPress();
      }}
      className={`bg-blue-500 ${className}`}
    >
      <Text className="text-white">{name}</Text>
    </TouchableOpacity>
  </>
);

export default Button;
