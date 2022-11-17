import { writable } from "svelte/store";

export const loggedInObservable = writable(false);
export const selectedTable = writable(1);
