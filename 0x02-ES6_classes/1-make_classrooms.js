import ClassRoom from './0-classroom';

function initializeRooms() {
  const rm1 = new ClassRoom(19);
  const rm2 = new ClassRoom(20);
  const rm3 = new ClassRoom(34);
  return [rm1, rm2, rm3];
}

export default initializeRooms;
