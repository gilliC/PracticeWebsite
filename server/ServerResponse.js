class ServerResponse {
  constructor() {
    this.statuses = {
      succeed: 'SUCCEED',
      failed: 'FAILED',
    };
  }
  getSucceedAnswer(type, value) {
    return {
      status: this.statuses.succeed,
      type: type,
      value: value,
    };
  }
  getFailedAnswer(error) {
    return {
      status: this.statuses.failed,
      message: error,
    };
  }
}
exports.default = ServerResponse;
