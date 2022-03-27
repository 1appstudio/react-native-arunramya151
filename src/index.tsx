import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-arunramya151' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const Arunramya151 = NativeModules.Arunramya151
  ? NativeModules.Arunramya151
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return Arunramya151.multiply(a, b);
}
