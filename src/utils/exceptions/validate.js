function ValidateException(status, message, path, errors = []) {
  this.status = status;
  this.message = message;
  this.path = path;
  this.errors = errors;
}

module.exports = ValidateException;
