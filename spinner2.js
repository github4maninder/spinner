const sentence = "\r| \r/ \r- \r\\ \r| \r/ \r- \r\\ \r| \r/ \r- \r\\ \n";
const text = sentence.slice(" ");

let delay = 100;
for (const char of text) {
  setTimeout(() => {
    process.stdout.write(`${char}`);
  },delay);
  delay += 200;
};