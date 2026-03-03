import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";

const arcjetKey = process.env.ARCJET_KEY ?? (process.env.NODE_ENV === "test" ? "test-key" : undefined);

if(!arcjetKey) {
  throw new Error('ARCJET_KEY is required');
}

const aj = arcjet({
  key: arcjetKey,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        "CATEGORY:PREVIEW",
      ],
    }),
    slidingWindow({
      mode:'LIVE',
      interval:'2s',
      max:7,
    })
  ],
});

export default aj;
