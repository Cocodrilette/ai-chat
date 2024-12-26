import { lmstudio } from "./lm-studio";
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";

import { customMiddleware } from "./custom-middleware";

export const customModel = (
  apiIdentifier: string = "meta-llama-3.1-8b-instruct"
) => {
  return wrapLanguageModel({
    model: lmstudio(apiIdentifier),
    middleware: customMiddleware,
  });
};
