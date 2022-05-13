// eslint-disable-next-line no-unused-vars
class FileOperationCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FileOperationCustomError';
  }
}
