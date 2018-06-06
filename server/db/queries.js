module.exports = {
  getAllProjects: 'SELECT * FROM systems ORDER BY name;',
  getRooms: 'SELECT * FROM rooms r JOIN systems sys ON r.system_id = sys._id WHERE sys.name = $1;'
};