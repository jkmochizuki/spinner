const chars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let time = 100;
for (const char of chars) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 200;
}