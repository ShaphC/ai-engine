import type { AIAction } from "../types";

import { exampleAction } from "../actions/exampleAction";


const registry: Record<string, AIAction> = {

  [exampleAction.name]:
    exampleAction,

};


export function getAction(
  name: string
): AIAction {

  const action = registry[name];


  if (!action) {
    throw new Error(
      `Action "${name}" not found.`
    );
  }


  return action;
}