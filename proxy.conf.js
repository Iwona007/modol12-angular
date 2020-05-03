const PROXY_CONFIG = [
  {
    context: [
      "/ocr/all",
      "/ocr/all/{id}",
      "/ocr/add"
    ],
    target: "https://modol12.herokuapp.com",
    secure: false
  }
];

module.exports = PROXY_CONFIG;
