# Test 

This is node based test automation platform for performing UI based functional checks. 

### Tech stack used in building the framework 
##### Programming language used: java script 
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
   

#### For executing the tests, navigate to the tests folder in the project and use the command : npm run test


### Improvements to be made (Devops way):

###### Quality is Everone's responsibility. No Blame Game in the Team but a Constant feedback mechanism within the team to foster ONE Team culture (this is highly encouraged as members within the team may have different skillset and may help if someone is getitng stuck due to some technical challenges)

###### Continuouos code integration (any tool e.g. git could be used) to ensure frequent code changes to be pushed in the repo
###### The tests to be run as part of the build process (on every approved pull request)
###### The tests to be data driven withi no hard coded data
###### Fostering Test Data management
###### Continuous testing to be implemented within the team. This can achieved with idenfication of condition best suited for test automation.
###### Collaboration between Dev and QA for better coverage unit test, e2e test, code reviews
###### Code quality measure to be adopted while running the build in pipeline
###### Reporting mechanism for the status on the build (could be splunk / DataDog... or any other tool)
###### Constant colloboration with the PO to understand business needs for better acceptance criteria within the stories / requirement specifications
###### Implement BDD approach to enable collaboration between the Development and the Business and reduce the ambiguity in requirements
###### Defect Management and reporting
###### Fostering Test pyramid culture (maximum test at unit level and only business test at the UI level)
###### Active involvement of PO during the testing
###### Fostering Exploratory test culture to uncover hidden challenges
###### Fostering In Sprint automation for faster release cycles.
###### Involvement of Dev Team for Sprint planning and Backlog refinement
###### Effective mechanism for prioritisation of defects encountered

