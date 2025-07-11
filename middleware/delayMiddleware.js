module.exports = (req, res, next) => {
  console.log('⏳ Simulating submission processing...');
  setTimeout(() => {
    console.log('✅ Done.');
    next();
  }, 2000); // 2 sec delay
};
