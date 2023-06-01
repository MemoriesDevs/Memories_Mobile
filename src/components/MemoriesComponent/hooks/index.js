const MemoriesHooks = ({ navigation }) => {
  const handleClose = () => {
    navigation.goBack();
  };

  return {
    handleClose,
  };
};

export default MemoriesHooks;
