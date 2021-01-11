# FRONT-END Numérica - Compétences

_Project created and monitored by Cécile Maillard-Salin, David Caignaert and John Haimez._

> use this branch to create new branches and work on them.
> then if the code is correct, the branch will be merged on the develop branch for the final production

- **under construction**

> [Maquette Figma](https://www.figma.com/proto/ILECZVkbsHWVSmTIbRFCEF/projet-co-maquette?node-id=547%3A5085&scaling=min-zoom)  
> [Trello](https://trello.com/b/E2KKZtPq/prod-numerica-comp%C3%A9tences)  
> [Soutenance N°1](https://prezi.com/dashboard/next/#/presentations)  
> [Documentation Back-End](https://github.com/j314h/backend-numerica-competences/tree/developp)

# Documentation

## Install

- Installation procedure for local development
  > install [Nodejs](https://nodejs.org/en/)
  > and follow the following instructions
  - before continuing, you must create a '.env' file in the 'front' folder Copy paste the contents of the '.env.example' file to fill the file
    - open a terminal
    - go in project 'frontend-numerica-competence'
    - execute the following command `npm i`
    - execute the following command `npm run serve`
      > if you have encountered any errors at this time you have executed a command incorrectly or you have placed the commands in the wrong place

## Roads / vue-router

> in progess

`' / '` => router for HomeConnect view (connect user)  
`' /dashbord-page '` => router for home page this app (user connected)  
`' /dashbord-page/home '` => router for home page with dashbord primary content this app (user connected)  
`' /dashbord-page/setting '` => router access root user, page for custom app  
`' /dashbord-page/home/dashbord-home '` => router for home this dashbord  
`' /dashbord-page/home/create-company '` => router for create company  
`' /dashbord-page/home/create-new '` => router for send message in ligne of news

## Data / vuex

> in progress

- ### UserConnect => store namespaced

  - `currentUser: Object,` //info for user connected  
    => currentUser, containe themes of colors for app
  - `isSignIn: Booleen,` // connected
  - `isLoading: Booleen,` //loading for user connect
  - `errors: Array,` // error user connect

  #### Actions

  - `function signIn` => connect user

          - Active load page
          - Call api for connect user => return cookie jwt + user infos
          - Assigned user info in store.currentUser
          - Verification exist jwt in cookie
          - Redirect in page dashbord
          - Desactived page load
          - If error, add errors message in store.errors
          - and desactived page load

  - `function userConnectVerification` => verification this jwt is validate

          - Active load page
          - Call api in roads GET juste for check jwt is validate and recover info for user
          - Assigned user info in store.currentUser
          - Verification exist jwt in cookie
          - Desactived page load
          - If error, add errors message in store.errors
          - and desactived page load

  - `function logOut` => disconnect currentUser

          - Active load page
          - Call api in roads sign-out for delete jwt
          - Delete data in UserConnect store
          - Redirect in page connect user
          - Desactived page load
          - If error, add errors message in store.errors
          - and desactived page load

  - `function DarkMode` => change theme color

          - Active load page
          - Call api for change theme attribut in current user and recover user update
          - Assigned user info in store.currentUser
          - Desactived page load
          - See Alert custom after desactivate page load for more info for user (success or error)
          - If error, add errors message in store.errors
          - and desactived page load

  - `function updateUserRefMin` => update user root, admin, referent

          - Active load page
          - Call api and back-end update info user current
          - Assigned user info in store.currentUser
          - Desactived page load
          - See Alert custom after desactivate page load for more info for user (success or error)
          - If error, add errors message in store.errors
          - and desactived page load

  - `function updateCompanyRefMin` => update company for current user root, admin, referent

        - Active load page
        - Call api and back-end update info company of user current
        - Assigned user info in store.currentUser with new info company
        - Desactived page load
        - See Alert custom after desactivate page load for more info for user (success or error)
        - If error, add errors message in store.errors
        - and desactived page load

    #### Mutations

    - `isloading` => activate page loading
    - `disableLoading` => disable loading of page loading
    - `signInSuccess` => connection user success, assignate info in currentUser
    - `signInError` => error de connection user
    - `checkedJwt` => check if jwt existed
    - `logOutUser` => user disconnect, delete data in currentUser
    - `updateUserCurrent` => update info for currentUser
    - `addError` => add error in tab errors user connected
    - `resetErrors` => reset tab for errors

* ### ParamApp => store namespaced

  - `imgs: null,` // img for app
  - `errors: Array,` // error param app
  - `titleHeadBand` // title headband
  - `isSubMenu` // see sub menu

  #### Actions

  - `function changeLogoNumerica` => change image logo numerica

        - Active load page
        - Call api in roads `/file/logo-numerica` for change img in database
        - Reset error exist after
        - call function `getFilesImg`
        - Desactived page load
        - If error, add errors message in store.errors
        - and desactived page load

  - `function changeLogoIdentifiant` => change image icon personne or salarié

        - Active load page
        - Call api in roads `/file/logo-identifiant` for change img in database
        - Reset error exist after
        - call function `getFilesImg`
        - Desactived page load
        - If error, add errors message in store.errors
        - and desactived page load

  - `function changeLogoMenu` => change image logo in menu primary

        - Active load page
        - Call api in roads `/file/logo-menu` for change img in database
        - Reset error exist after
        - call function `getFilesImg`
        - Desactived page load
        - If error, add errors message in store.errors
        - and desactived page load

  - `function changeLogoFooterNumerica` => change image logo in footer for logo numerica

        - Active load page
        - Call api in roads `/file/logo-numerica-footer` for change img in database
        - Reset error exist after
        - call function `getFilesImg`
        - Desactived page load
        - If error, add errors message in store.errors
        - and desactived page load

  - `function changeLogoUpdateElement` => change logo pencil for update element

        - Active load page
        - Call api in roads `/file/logo-update-element` for change img in database
        - Reset error exist after
        - call function `getFilesImg`
        - Desactived page load
        - If error, add errors message in store.errors
        - and desactived page load

  - `function changelogoCloseUpdateElement` => change logo X for close update element

        - Active load page
        - Call api in roads `/file/logo-close-update-element` for change img in database
        - Reset error exist after
        - call function `getFilesImg`
        - Desactived page load
        - If error, add errors message in store.errors
        - and desactived page load

  - `function getFilesImag` => load img in database

        - Call api in roads `/files-i` for recover url img in database
        - Save new url (update) in array imgs in ParamApp
        - Reset error exist after
        - If error, add errors message in store.errors
        - and desactived page load

    #### Mutations

    - `getImgsFiles` => recover img database and set array store imgs
    - `addErrors` => add errors in store ParamApp
    - `resetErrors` => reset errors in store ParamApp
    - `seeSubMenu` => change booleen for see or not sub menu
    - `changeTitleHeadBand` => change title in headband

* ### Companies => store namespaced

  - `companies: null,` // list tab companies
  - `errors: Array,` // error companies

  #### Actions

  - `function getAllCompanies` => recover list companies

        - Reset error exist after
        - Actived page load
        - Call api in roads `/companies` for recover list companies attached of user current admin or root state
        - And recover list sector attached of companies list
        - call function `addAllCompanies` for save list companies in store
        - call function `addAllSectors` for save list sectors in store
        - Desactived page load
        - If error, add errors message in store.errors
        - and desactived page load

  - `function createCompany` => create company and sector in data base

        - Reset error exist after
        - Active load page
        - Call api in roads `/file/create-company` for create company and sector of company
        - Desactived page load
        - If error, add errors message in store.errors
        - and desactived page load

    #### Mutations

    - `addAllCompanies` => recover list companies
    - `addErrors` => add errors in store Companies
    - `resetErrors` => reset errors in store Companies

* ### Sector => store namespaced

  - `sector: null,` // list tab sector
  - `errors: Array,` // error sector

  #### Actions

  - `function getAllSector` => recover list sector

        - we collect the sectors related to the companies so we assign our sectors variable when we collect the companies
        - In `Companies/getAllCompanies`

    #### Mutations

    - `addAllSectors` => recover list sectors
    - `addErrors` => add errors in store Companies
    - `resetErrors` => reset errors in store Companies

* ### States => store namespaced

  - `states: null,` // list tab states
  - `errors: Array,` // error sector

  #### Actions

  - `function getAllState` => recover list sector

        - Call api for recover list state in data base
        - Save list in states in store States
        - If error, add errors message in store.errors

    #### Mutations

    - `allState` => recover list states
    - `addErrors` => add errors in store Companies
    - `resetErrors` => reset errors in store Companies

### Scss / class personal

> in progress

`/color` => colors of all app  
`/component` => style for divers component  
`/size-text` => size for text of all app  
`/style` => style for elements isolate  
`globals-rules.scss` => is load in App component, and he charge all rules css for everyone component  
`root.scss` => load all variable for project
