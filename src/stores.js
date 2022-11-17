import { writable } from "svelte/store";

export const loggedInObservable = writable(true);
export const selectedTable = writable(1);
