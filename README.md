# Pull Request 2
Now that you learned how to perform git commands and pull-request, we will now do another practice.

In this assignment, you will be required to have 2 GitHub user accounts. Each user will be in-charge in opening a pull-request with different feature simultaneously. And to do this, follow the instructions below:

## Pre-requisites:

In your working directory, download the contents from https://github.com/hh-kigcasan/git-commands-v2.git. 
Make sure you create master, develop, feature/git_add_all, feature/git_add_wildcard local repository branches.
Make all branches reflect to newly-created central repository.
Set up branch restrictions for master and develop of central repository.
Run local unit testing to check failed test cases.
Requirements:

One user should introduce code changes to "feature/git_add_all" . Work in the add(“.”) feature.
Another user should introduce code changes to "feature/git_add_wildcard". Work in the add(“*”) feature.
Once unit tests passed, open merge requests with destination central "develop" branch.
Once there are two open merge requests, approve them. 

## Tips:

Use git config to set author before committing
Use git log to check commit author.
Always do local unit testing before introducing to central repository.
If you find problem combining the codes in central, always recall past lesson. At the end of the day, make sure that the new codes from two different features reflect to central "develop" branch.


Note: Naming convention is so important, not only in codes, but also in naming branches. This makes our branch history very beautiful, yet meaningful. In this case, we want to tell that “Hey! I made a new feature!” -- in indirect way. So, from now on, whenever you’re making new feature, do also the same format in naming a branch: feature/<feature name or id given by your team>.

Good luck! Don't forget to upload necessary screenshots related to each requirement.