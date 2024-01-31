const whitelist = [
  "http://localhost:5173",
  "https://thoughts-9s85.onrender.com",
];

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) != -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed"));
    }
  },
};

export default corsOptions;
