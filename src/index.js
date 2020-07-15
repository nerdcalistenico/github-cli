#!/usr/bin/env node

const meow = require("meow");
const unfollow = require("./unfollow");

const cli = meow();

// Personal access token
const accessToken = cli.input[0];
// action: unfollow
const action = cli.input[1];
const username = cli.input[2];

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: accessToken,
});

switch (action) {
  case 'unfollow':
    unfollow(octokit, username);
    break;
  default:
    break;
}
