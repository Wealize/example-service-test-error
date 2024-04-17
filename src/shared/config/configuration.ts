
export const SERVER = {
  port: 8000,
  api_path: "/api",
};

export const LOGS = {
  console: {
    active: true,
    level: "debug",
  },
  file: {
    active:  false,
    level:  "debug",
    path: "",
  },
};

export const LANGUAGE = {
  allowed: ["es"],
  default: "es",
  location: "es",
};
