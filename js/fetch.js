"use strict";

import { Octokit, App } from "https://esm.sh/octokit";

const octokit = new Octokit({ auth: GH_KEY });

async function getGhPublicEvents(userName) {
    console.log("test");
    return await octokit.request("GET /users/{username}/events/public", {
        username: userName,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
}

getGhPublicEvents("eltownes")
    .then(resp => console.log( resp.data[0].created_at ))
;

export {getGhPublicEvents};
