import { getMemorie } from '../../../services/servicesMemories';

const CardHooks = ({ date, title, navigation }) => {
  const handlePressMemorie = async (id) => {
    const data = await getMemorie(id);
    navigation.navigate('Memories', { date, title, data });
  };

  return {
    handlePressMemorie,
  };
};

export default CardHooks;
