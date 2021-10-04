/**
 * The response model that is returned by the
 * User Registration API.
 */
import {UserRole} from '@core/models/user.role.model';

export type UserResponse = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: UserRole;
  enabled: boolean;
  memberId: number;
  membershipId: string;
};
