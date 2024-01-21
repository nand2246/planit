// handles routing/callbacks for auth0 login/logout
import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth();