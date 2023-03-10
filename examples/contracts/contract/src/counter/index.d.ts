/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.31.0
  Forc version: 0.32.2
  Fuel-Core version: 0.17.1
*/

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  BytesLike,
  BigNumberish,
  InvokeFunction,
  BN,
} from 'fuels';
import { Contract } from 'fuels';

interface CounterAbiInterface extends Interface {
  functions: {
    counter: FunctionFragment;
    decrement: FunctionFragment;
    increment: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'counter', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'decrement', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'increment', values: []): Uint8Array;

  decodeFunctionData(functionFragment: 'counter', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'decrement', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'increment', data: BytesLike): DecodedValue;
}

export class CounterAbi extends Contract {
  interface: CounterAbiInterface;
  functions: {
    counter: InvokeFunction<[], BN>;
    decrement: InvokeFunction<[], void>;
    increment: InvokeFunction<[], void>;
  };
}
