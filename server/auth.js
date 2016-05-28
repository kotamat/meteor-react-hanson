import { HttpBasicAuth } from 'meteor/jabbslad:basic-auth';

const basicAuthUser = process.env.BASIC_AUTH_USERNAME;
const basicAuthPass = process.env.BASIC_AUTH_PASSWORD;

// valid basic auth if EnvVar is exist
if (basicAuthPass && basicAuthUser) {
  const basicAuth = new HttpBasicAuth(basicAuthUser, basicAuthPass);
  basicAuth.protect();
}
