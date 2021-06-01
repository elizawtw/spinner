let delay = 50;
let spinner2 = ['\r   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/  ', '\r-   ', '\r\\  ', '\r|  ', '\n']
for(const spin of spinner2) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, delay);
  delay += 200;
}


