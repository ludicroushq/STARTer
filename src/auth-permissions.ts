import { createAccessControl } from "better-auth/plugins/access";
import {
  adminAc,
  defaultStatements,
  userAc,
} from "better-auth/plugins/admin/access";

const statement = {
  admin: ["access"],
  ...defaultStatements,
} as const;

export const ac = createAccessControl(statement);

const user = ac.newRole({
  ...userAc.statements,
});

const admin = ac.newRole({
  admin: ["access"],
  ...adminAc.statements,
});

export const roles = {
  admin,
  user,
};
