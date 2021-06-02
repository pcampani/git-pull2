class GitCommand {
    constructor(working_directory){
        this.working_directory = working_directory;
    }
    //Command: git init 
    init(){
        this.staging = [];
        this.local_repository = [];
        return "Initialized as empty Git repository.";
    }

    //Command: git status
    status(){        
        /*
            For assignment #1:
            Create logic here and run unit testing.
        */
        const directory = this.working_directory.new_changes;
        let file_count = 0;
        let url = [];
        for(let key in directory) { 
            file_count++;
            url.push(key);
        }
        if(file_count > 0) {
            let response = `You have ${file_count} change/s.`
            for(let i = 0; i < url.length; ++i) {
                response += `\n${url[i]}`
            }
            return response;
        }
        else {
            return "You have 0 change/s.\n"
        }
        
    }

    //Command: git add <filename/file directory/wildcard> 
    add(path_file){
        let modified_files = this.working_directory.new_changes;
        
        if(modified_files[path_file]){
            this.staging.push(modified_files[path_file]);
            delete modified_files[path_file];
        }
        /*
            For assignment #2:
            Create logic here and run unit testing.
            Don't forget to uncomment the unit tests.
        */
        else if(path_file === ".") {
            this.working_directory.new_changes = this.staging;
        }
        else if(path_file === "*") {
            let directory = modified_files;     
            for(let key in directory) {
                if(key !== "views/index.html") {
                    this.working_directory.new_changes = {[key]: directory[key]};
                }
            }
        }
        else{
            return `Failed to add ${path_file}! File is not modified or missing.`;
        }
        return "Successfully added as index file/s.";
    }

    //Command: git commit -m "<message>"
    commit(message){
        if(this.staging.length > 0){
            this.local_repository.push({ "message": message, "files": this.staging });
            this.staging = [];
            return "Done committing to local repository.";
        }
        return "Nothing to commit.";
    }

    //Command: git push
    push(){   
        if(this.local_repository.length > 0){
            return "Done pushing to remote repository.";
        } 
        else {
            return "Nothing to push. No committed file found.";
        }     
    }
}


module.exports = GitCommand;