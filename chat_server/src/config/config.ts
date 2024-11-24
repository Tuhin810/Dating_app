export const NODE_ENV: "PROD" | "DEV" | "LOCAL" = "PROD";

export const MONGO_URI = {
  LOCAL: "mongodb://127.0.0.1:27017/shohozshadi",
  DEV: "mongodb://proton:proton%402030@ec2-3-108-27-200.ap-south-1.compute.amazonaws.com:27017/shohozshadi?authSource=shohozshadi",
  PROD: "mongodb://proton:proton%402030@172.31.33.124:27017/shohozshadi?authSource=shohozshadi",
};
