import { Meta, Support, User } from "./req-response";

export interface UserResponse {
  data: User;
  support: Support;
  _meta: Meta
}
