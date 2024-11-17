// src/icpService.js
import { HttpAgent, Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { idlFactory } from "./my_icp_project.did"; // Adjust the path as necessary

const agent = new HttpAgent();
const canisterId = "br5f7-7uaaa-aaaaa-qaaca-cai"; // Replace with your actual canister ID

const userAccountActor = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});

export const registerUser = async (name, phone, password) => {
  return await userAccountActor.register(name, phone, password);
};

export const loginUser = async (phone, password) => {
  return await userAccountActor.login(phone, password);
};

export const checkBalance = async (phone) => {
  return await userAccountActor.checkBalance(phone);
};

export const deposit = async (phone, amount) => {
  return await userAccountActor.deposit(phone, amount);
};
