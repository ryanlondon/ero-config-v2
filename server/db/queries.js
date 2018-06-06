module.exports = {
  getSystems:       `SELECT * FROM systems ORDER BY name;`,

  getRooms:         `SELECT r.menu_order, r.icon, r.name 
                     FROM rooms r 
                     JOIN systems sys ON r.system_id = sys._id 
                     WHERE sys._id = $1;`,

  getSources:       `SELECT s.menu_order, s.icon, s.name
                     FROM sources s
                     JOIN systems sys ON s.system_id = sys._id
                     WHERE sys._id = $1;`,

  getDevices:       `SELECT d.menu_order, d.icon, d.name
                     FROM devices d
                     JOIN systems sys ON d.system_id = sys._id
                     WHERE sys._id = $1;`,
};
