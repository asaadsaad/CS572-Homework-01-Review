try {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
} catch (error) {
  console.log(error.message);
}
