import AuthenticationService from "../services/AuthenticationService";

export function authHeader() {
  const currentUser = AuthenticationService.currentUserValue;
  if (currentUser && currentUser.token) {
    return { Authorization: "Bearer " + currentUser.token };
  }

  return {};
}
