import { useState } from 'react';

const ProfileHooks = () => {
  const [contentType] = useState(['Memories', 'Friends', 'Circles', 'Tags']);
  const [selectedType, setSelectedType] = useState(['Memories']);

  return {
    contentType,
    selectedType,
    setSelectedType,
  };
};

export default ProfileHooks;
