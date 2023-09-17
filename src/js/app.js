export default function cardsAttack(character) {
  const { special } = character;
  const arr = [];

  for (let i = 0; i < special.length; i += 1) {
    if (special[i].description === undefined) {
      special[i].description = 'Описание недоступно';
    }
    arr.push({
      id: special[i].id,
      name: special[i].name,
      icon: special[i].icon,
      description: special[i].description,
    });
  }
  return arr;
}
