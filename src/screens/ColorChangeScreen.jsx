import { StyleSheet, View } from "react-native";
import { useReducer } from "react";
import React from "react";
import ColorChange from "../../components/ColorChange";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeRed":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case "changeGreen":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case "changeBlue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const ColorChangeScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });

  const { red, green, blue } = state;

  return (
    <View>
      <ColorChange
        color="kirmizi"
        onIncrease={() => dispatch({ type: "changeRed", payload: 20 })}
        onDecrease={() => dispatch({ type: "changeRed", payload: -20 })}
      />
      <ColorChange
        color="yesil"
        onIncrease={() => dispatch({ type: "changeGreen", payload: 20 })}
        onDecrease={() => dispatch({ type: "changeGreen", payload: -20 })}
      />
      <ColorChange
        color="mavi"
        onIncrease={() => dispatch({ type: "changeBlue", payload: 20 })}
        onDecrease={() => dispatch({ type: "changeBlue", payload: -20 })}
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      ></View>
    </View>
  );
};

export default ColorChangeScreen;
