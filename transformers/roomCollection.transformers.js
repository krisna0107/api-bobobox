
export const transform = (room) => {
    const objectRoom = room.toJSON()
    return {
        room_id: objectRoom.id,
        room_number: objectRoom.room_number,
        price: objectRoom.room_type.price
    }
}

export const roomCollection = (rooms) => {
    var data = [];
    for (var i = 0; i < rooms.length; i++) {
        data.push(transform(rooms[i]))
    }
    return data;
}