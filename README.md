## NativeScript-BarcodeValidator



###Development

This app is built with the NativeScript CLI. Once you have the [CLI installed](http://docs.nativescript.org/angular/tutorial/ng-chapter-1#11-install-nativescript-and-configure-your-environment), start by cloning the repo:

```
$ git clone https://github.com/mhadaily/NativeScript-BarcodeValidator.git
$ cd NativeScript-BarcodeValidator
```

Next, install the app's iOS and Android runtimes, as well as the app's npm dependencies:

```
$ tns install
```

From there you can use the `run` command to run app on iOS:

```
$ tns run ios --emulator
```

And the same command to run app on Android:

```
$ tns run android --emulator
```

Finally, use the `livesync` command to push out changes to your app without having to go through the full build cycle:

```
$ tns livesync ios --emulator --watch
```
```
$ tns livesync android --emulator --watch
```

###Linting

This app uses [tslint](https://www.npmjs.com/package/tslint) + [codelyzer](https://github.com/mgechev/codelyzer) rules to ensure the code follows the [angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

You can run the linter with the `tslint` npm script:
```
$ npm run tslint
```