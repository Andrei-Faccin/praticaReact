import Keycloak from "keycloak.js";

const url = "http://localhost:8080/auth";
const realm = 'master';
const clientid = 'testei_react';

const keycloak = keycloak(( url, realm, clientid));

export default keycloak;
