import { Assistant, userThread } from "@prisma/client";
import { atom } from "jotai";

export const userThreadAtom = atom<userThread | null>(null);
export const assistantAtom = atom<Assistant | null>(null);