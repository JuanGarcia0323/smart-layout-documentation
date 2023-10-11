# MIP Starting Point

This is a custom template created by Juan Emilio Garcia to optimize development at the time to start a project.

## Libraries

This template has only the basic and most ussed tecnologies inside FIT4Software. Among them we can find:

1. Redux Toolkit + Redux Logger
2. React
3. Antdesign
4. Vite + SWC
5. StoryBook
6. TypeScript
7. CVA
8. TailwindCSS

## Clear Structure

The template has **5** important folders:

### Components:

Here you should create an independent folder for each one of your most basic components, where you'll have one file for your `.tsx` _(basically all visual related code, should be here)_ and one `.ts` _(basically all logic related code should be here, Ex: useState, useRef, useEffect, api-calls)_ this last file should be called Logic.

Also it's worth to mention that most of your logic also should be handle in your reducers, when you are using _Redux_.

### Interfaces:

This folder should be use to store all the types and interfaces that you need for your project.
Once you create a file and export the interfaces you should add this new interface/type to the index.ts of the **Interfaces** folder, in next way:

```typescript
export * from './yourNewInterface.ts';
```

### Modules:

Modules it's pretty similar to _Components_ with the slightly difference that here you'll store the components that are built upon other components, for example you header, that probably it's going to use multiple components that you already created: buttons, inputs and so on...

### Pages:

Finally _Pages_ it's like _Modules_, with the only difference that use not only components but also _Modules_. One last thing to take in consideration when you are creating _Pages_ is that you should have little to no logic in your _Page_, it should be handle by your components and modules.

### Imports:

Finally when you are importing something, always use the preconfigured _relative paths_ with the `@`. For example:

#### Importing from the starting-point directory

```typescript
import Button from '@sp-components/Button/Button';
import { IButtonProps } from '@interfaces';
import { useSelector } from '@store';
import SideBar from '@sp-modules/SideBar/SideBar';
import Landing from '@sp-pages/Landing/Landing';
```

#### Importing from your own modules, components, pages or stories

```typescript
import Button from '@components/Button/Button';
import { IButtonProps } from '@interfaces';
import { useSelector } from '@store';
import SideBar from '@modules/SideBar/SideBar';
import Landing from '@pages/Landing/Landing';
```

## Customization

The project has multiple parts that are expected to be change for the developer once he starts creating new code, all this parts like: name, style and so on, are cofigured on the `project.config.json`

### API URL

To change the default base-url you should go to `project.config.json` and change the property `url` this will affect the axios base-url configured

### Application Name

To change the default name you should go to `project.config.json` and change the property `name` this will affect the title of the APP, not only on the HTML but also on the PWA

### Style

To change the default theme of the project you should change the colors configuration on the file `project.config.json`, this will automatically affect `Antdesign` and `TailwindCSS`

## Troubleshooting

### Type-Errors:

In case you get an error like:

    Cannot find type definition file for 'node'.
    The file is in the program because:
    Entry point of type library 'node' specified in compilerOptionsts
    JSON schema for the TypeScript compiler's configuration file

We strongly suggest to run the next command inside of the project: `npm i --save @types/node`

## Update:

Inside the src directory there's a folder called starting-point with all the basic components, modules, pages and stories. We strongly encourage to don't change anything inside this folder because this will break the _Update_.

### Updating the project:

To update the project you should run `npm run update-starting-point` this command will overwrite the current starting-point folder with the latest one on existance.

### Caveats:

If you have some of the starting-point files, you should copy them before running the update so you won't lose your changes.
