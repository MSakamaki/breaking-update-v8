# BreakingUpdateV8

```sh
KPC-0033:sakamaki m.sakamaki$ npx create-nx-workspace@7.7.0 breaking-update-v8
#Creating a sandbox with Nx...
#ng new "breaking-update-v8" --collection=@nrwl/schematics
#? Which stylesheet format would you like to use? SCSS   [ http://sass-lang.com   ]
#? What is the npm scope you would like to use for your Nx Workspace? 
#? What to create in the new workspace (You can create other applications and libraries at any point using 'ng g') angular


 npx ng generate lib theme

#? In which directory should the library be generated? 
#? What framework should this library use? Angular    [ https://angular.io/             ]
#? Which tags would you like to add to the library? (used for linting) 
#? Which Unit Test Runner would you like to use for the library? Jest [https://jestjs.io/]

```

Remove architect from angular.json theme

## Update Nrwl 8

```sh
npm run update
# or ng update @nrwl/schematics --from 7.7.0 --to 8 --migrate-only
```

### output

error: `Cannot convert undefined or null to object`

```sh
$ npm run update 

> breaking-update-v8@0.0.0 update /Users/m.sakamaki/project/sakamaki/breaking-update-v8
> ng update @nrwl/schematics

    Updating package.json with dependency @nrwl/schematics @ "8.1.2" (was "7.7.0")...
UPDATE package.json (2147 bytes)
npm WARN jasmine-marbles@0.5.0 requires a peer of rxjs@^6.4.0 but none is installed. You must install peer dependencies yourself.

added 45 packages from 18 contributors, removed 1 package, updated 2 packages and audited 972534 packages in 17.548s
found 2 vulnerabilities (1 low, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
            Prettier has been updated to 1.16.4 which has a lot of small improvements
            Formatting of your code might change as you are working on each file.
            Prettier will now format *.less files you can disable this by adding '*.less' to your .prettierignore
            
            Optional: You may want to run "npm run format" as part of this update to reformat all files in your workspace.
            
            You can also opt out of formatting in files by adding them to the .prettierignore file in the root of your workspace.
            Nx has been repackaged. We are installing and migrating your dependencies to the ones necessary.
            
            If you have workspace schematics, we tried to migrate your imports from "@nrwl/schematics" to "@nrwl/workspace" but your externalSchematics may be broken.
            
            Read this guide to see where to find familiar features: https://nx.dev/guides/nx7-to-nx8
            
            This migration may take a few minutes.
            Removing @nrwl/schematics as a dependency
            Removing @nrwl/builders as a dependency
            Removing @nrwl/nx as a dependency
Cannot convert undefined or null to object
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! breaking-update-v8@0.0.0 update: `ng update @nrwl/schematics`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the breaking-update-v8@0.0.0 update script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/m.sakamaki/.npm/_logs/2019-06-27T16_50_45_631Z-debug.log
```


