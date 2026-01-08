import { useSyncExternalStore } from "react";

const STORAGE_KEY = "mazadat_user";
const USERS_KEY = "mazadat_users";
const listeners = new Set();

const isBrowser = typeof window !== "undefined";

const readFromStorage = () => {
  if (!isBrowser) {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const readUsersFromStorage = () => {
  if (!isBrowser) {
    return [];
  }
  try {
    const raw = window.localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

let currentUser = readFromStorage();
let users = readUsersFromStorage();

const notify = () => {
  listeners.forEach((listener) => listener());
};

const setUser = (user) => {
  currentUser = user;
  if (!isBrowser) {
    return;
  }
  if (user) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    window.localStorage.removeItem(STORAGE_KEY);
  }
  notify();
};

const setUsers = (nextUsers) => {
  users = nextUsers;
  if (!isBrowser) {
    return;
  }
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const login = ({ email, password }) => {
  users = readUsersFromStorage();
  const found = users.find((user) => user.email === email);
  if (!found) {
    return { ok: false, message: "ليس لديك حساب" };
  }
  if (found.password && password && found.password !== password) {
    return { ok: false, message: "كلمة المرور غير صحيحة" };
  }
  const { password: _, ...safeUser } = found;
  setUser(safeUser);
  return { ok: true };
};

export const register = ({ name, email, phone, password }) => {
  users = readUsersFromStorage();
  const exists = users.some((user) => user.email === email);
  if (exists) {
    return { ok: false, message: "هذا البريد مسجل بالفعل" };
  }
  const newUser = { name, email, phone, password };
  setUsers([...users, newUser]);
  const { password: _, ...safeUser } = newUser;
  setUser(safeUser);
  return { ok: true };
};

export const logout = () => {
  setUser(null);
};

export const getUser = () => currentUser;
export const getUsers = () => users;

export const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const useAuth = () => {
  return useSyncExternalStore(subscribe, getUser, getUser);
};
