export const mapPropertyDetailsFromApiToViewModel = (propertyDetails) => {
  return mapPropertyFromApiToViewModel(propertyDetails);
};

export const mapPropertyFromApiToViewModel = (property) => {
  return {
    id: property.id,
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    price: `${property.price.toLocaleString()} €`,
    title: property.title,
    city: property.city,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter} m2`,
    bathrooms: `${property.bathrooms} ${getBathRoomWord(property.bathrooms)}`,
    notes: property.notes,
    mainFeatures: Array.isArray(property.mainFeatures)
      ? property.mainFeatures
      : '',
    equipments: property.equipments,
    locationUrl: property.locationUrl,
    equipmentIds: Array.isArray(property.equipmentIds)
      ? property.equipmentIds
      : '',
    images: Array.isArray(property.images) ? property.images : '',
  };
};

const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitación';
};

const getBathRoomWord = (bathrooms) => {
  return bathrooms > 1 ? 'baño' : 'baños';
};
