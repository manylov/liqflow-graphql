import Knex from 'knex';

export type PoolModel = {
  id: string;
  address: string;
  reserve_multiply_4_percent: string;
  reserve_multiply_24_percent: string;
};

export const PoolModel = (knex: Knex) => knex<PoolModel>('pair');

export type TokenModel = {
  id: number;
  name: string;
  symbol: string;
};

export const TokenModel = (knex: Knex) => knex<TokenModel>('token');
