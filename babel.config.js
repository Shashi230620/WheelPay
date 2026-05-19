// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: [
//     'react-native-reanimated/plugin', // Keep this first if using Reanimated
//     [
//       'module-resolver',
//       {
//         root: ['./src'],
//         extensions: ['.js', '.jsx', '.json'],
//         alias: {
//           'app-Wallet': './Src/Components/Features/Wallet',
//         },
//       },
//     ],
//   ],
// };




module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./Src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          'app-Shared':'./Src/Shared',
          'app-Customer':'./Src/Customer_Modules',
          'app-Driver':'./Src/Driver_Modules'
        },
      },
    ],
  ],
};