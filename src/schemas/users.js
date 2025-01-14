module.exports = {
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    selected: false
  },
  booksID: {
    type: [String],
    required: false,
    default: []
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now
  }
};
