import type { AIAction } from "../types";

import { voiceToNotesAction } from "../actions/voiceToNotes";
import { exampleAction } from "../actions/exampleAction";

import { InvalidActionError } from "./errors";


const registry: Record<string, AIAction> = {
  [exampleAction.name]: exampleAction,

  [voiceToNotesAction.name]:
    voiceToNotesAction,
};


export function getAction(
  name: string
): AIAction {

  const action = registry[name];


  if (!action) {
    throw new InvalidActionError(name);
  }


  return action;
}