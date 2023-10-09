import { StyleSheet } from "react-native";

const colors = {
  light: {
    background: '#7fffd4',
    text: '#333',
    switchThumb: '#007AFF',
    switchTrack: '#f4f3f4',
    inputText: '#333',
    inputBorder: '#ccc',
    inputBackground: '#fff',
    numericInputContainer: '#2e6153',
    iconColor: '#fff',
    buttonBackground: '#197511',
    resultText: 'black',
    safeResult: 'rgba(11, 233, 11, 0.866)',
    warningResult: 'rgba(235, 243, 11, 0.974)',
    dangerResult: 'rgba(234, 9, 9, 0.984)'
  },
  dark: {
    background: '#333',
    text: '#fff',
    switchThumb: '#f4f3f4',
    switchTrack: '#007AFF',
    inputText: '#fff',
    inputBorder: '#aaa',
    inputBackground: '#444',
    numericInputContainer: '#555',
    iconColor: '#333',
    buttonBackground: '#007AFF',
    resultText: 'white',
    safeResult: 'rgba(11, 233, 11, 0.5)',
    warningResult: 'rgba(235, 243, 11, 0.5)',
    dangerResult: 'rgba(234, 9, 9, 0.5)'
  }
};

const baseTheme = {
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  themeToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  themeText: {
    fontSize: 16,
    marginHorizontal: 10,
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 4,
  }
};

const lightTheme = StyleSheet.create({
  ...baseTheme,
  container: {
    ...baseTheme.container,
    backgroundColor: colors.light.background,
  },
  heading: {
    ...baseTheme.heading,
    color: colors.light.text,
  },
  label: {
    ...baseTheme.label,
    color: colors.light.text,
  },
  input: {
    ...baseTheme.input,
    color: colors.light.inputText,
    borderColor: colors.light.inputBorder,
    backgroundColor: colors.light.inputBackground,
  },
  button: {
    ...baseTheme.button,
    backgroundColor: colors.light.buttonBackground,
  },
  buttonText: {
    ...baseTheme.buttonText,
    color: colors.light.text,
  },
  resultContainer: {
    ...baseTheme.resultContainer,
    backgroundColor: colors.light.safeResult,
  },
  resultText: {
    ...baseTheme.resultText,
    color: colors.light.resultText,
  },
  themeToggleContainer: {
    ...baseTheme.themeToggleContainer,
  },
  themeText: {
    ...baseTheme.themeText,
    color: colors.light.text,
    textShadowColor: colors.light.text,
  }
});

const darkTheme = StyleSheet.create({
  ...baseTheme,
  container: {
    ...baseTheme.container,
    backgroundColor: colors.dark.background,
  },
  heading: {
    ...baseTheme.heading,
    color: colors.dark.text,
  },
  label: {
    ...baseTheme.label,
    color: colors.dark.text,
  },
  input: {
    ...baseTheme.input,
    color: colors.dark.inputText,
    borderColor: colors.dark.inputBorder,
    backgroundColor: colors.dark.inputBackground,
  },
  button: {
    ...baseTheme.button,
    backgroundColor: colors.dark.buttonBackground,
  },
  buttonText: {
    ...baseTheme.buttonText,
    color: colors.dark.text,
  },
  resultContainer: {
    ...baseTheme.resultContainer,
    backgroundColor: colors.dark.safeResult,
  },
  resultText: {
    ...baseTheme.resultText,
    color: colors.dark.resultText,
  },
  themeToggleContainer: {
    ...baseTheme.themeToggleContainer,
  },
  themeText: {
    ...baseTheme.themeText,
    color: colors.dark.text,
    textShadowColor: colors.dark.text,
  }
});

export { lightTheme, darkTheme, colors };
