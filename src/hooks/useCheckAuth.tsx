export function useCheckAuth() {
  if (typeof window !== "undefined") {
    return !!window?.localStorage?.getItem("auth");
  }
}
