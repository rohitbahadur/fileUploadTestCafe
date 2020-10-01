# Test 

This is node based test automation platform for performing UI based functional checks. 

### Tech stack used in building the framework 
##### Programming language used: node js v12.18.2
##### Test framework : TestCafe
##### IDE : Visual Studio code

### Prerequisite 1
##### Node js should be installed on the system.To check if Node js is available on the system, go to command prompt and type node -version.It should display: 
    
>node --version
v12.18.2

### Prerequisite 2 (not mandatory)
##### git should be configured on the system to pull the project from github. 

If github is not configured on the system, then project can be downloaded using the option "Download ZIP" from https://github.com/rohitbahadur/fileUploadTestCafe


### Installation (using git, assumption is a repo created on github )
1. If using git,create a project folder on your local machine.
2. From the git repo click on Clone or download option and copy the link. 
2. Go to command prompt and navigate to the project and folder and type git clone "copy the link" (copy the link is the link copied from git repo).


### Installation (without git)
1. There is no additional settings or configurations required. The 
   project can be downloaded using git or option "Download ZIP" from 
   https://github.com/rohitbahadur/fileUploadTestCafe
2. unzip (if downloaded as a ZIP) the project folder and open in eclipse 
    (File-->Open Projects from File System ). Select the directory where 
    the project folder is available.


#### Project Design Strategy
#### The project is designed using page object model principles.
1. pages package --> Page objects are stored in their respective page 
   under "pages" 
   package.
2. data folder --> Project configurations (baseurl and some inputs(appUrl and login credentials) are placed in this file.
3. test package --> This package contains test cases for Login and File upload which could be run from a single command from the tests folder.
4. package.json --> This package contains all the dependencies for the project execution.
   

#### For executing the tests, navigate to the tests folder in the project and use the command npm run test
