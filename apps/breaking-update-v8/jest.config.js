module.exports = {
  name: "breaking-update-v8",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/breaking-update-v8/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
