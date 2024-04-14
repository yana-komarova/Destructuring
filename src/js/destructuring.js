function destructuring(obj) {
    const result = obj.special.map(({ id, name, description = 'Описание недоступно', icon }) => ({
      id,
      name,
      description,
      icon,
    }));
  
    return result;
  }