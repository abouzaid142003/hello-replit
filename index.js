const { exec } = require("child_process");

// تشغيل n8n
const process = exec("n8n");

process.stdout.on("data", (data) => {
  console.log(data.toString());
});

process.stderr.on("data", (data) => {
  console.error(data.toString());
});
