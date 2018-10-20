https://facebook.github.io/react-native/docs/getting-started.html
npm install -g react-native-cli
react-native init AwesomeProject

Yeah, it's a bug in react-native 0.57.3 but react-native 0.57.2 has its own issues!

So you have to downgrade to react-native 0.57.1 that is a bit more stable!

Do the following things in command prompt in the root directory of your project (these steps install some missed dependencies of this version):

1. delete your node_modules directory (command: rmdir node_modules /s in windows)

2. npm i -S react-native@0.57.1

3. npm add @babel/runtime

4. npm i -D schedule@0.4.0

5. npm i
