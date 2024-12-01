import authData from "~/auth.json";

const BRIDGE_URL = "https://backhaj.blahaj.land/create_user";
const AUTH_URL = "https://backhaj.blahaj.land/login";

export default defineEventHandler(async (event) => {
  let rawToken: Response;
  const tokenHeaders = new Headers();
  tokenHeaders.append("Content-Type", "application/json");
  try {
    rawToken = await fetch(AUTH_URL, {
      method: "post",
      body: JSON.stringify(authData),
      headers: tokenHeaders,
    });
  } catch (err: unknown) {
    setResponseStatus(event, 500, "Internal error");
    return {};
  }

  if (!rawToken.ok || !rawToken.body) {
    setResponseStatus(event, rawToken.status, rawToken.statusText);
    return {};
  }

  const token = ((await rawToken.json()) as { access_token: string })
    .access_token;
  const body = await readBody<string>(event);
  let data: Response;
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Content-Type", "application/json");
  for (const e of headers.entries()) console.log(e);
  console.log(body);
  try {
    data = await fetch(BRIDGE_URL, {
      method: "post",
      body: body,
      headers: headers,
    });
  } catch (err: unknown) {
    setResponseStatus(event, 500, "Internal error");
    return {};
  }

  const jsonData = await data.json();
  console.log(jsonData);

  if (data.status !== 201) {
    setResponseStatus(event, data.status, jsonData["error"]);
    return {};
  }

  setResponseStatus(event, data.status, jsonData["msg"]);
  return {};
});
