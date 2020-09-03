const yargs = require('yargs');


yargs.command({
    command: "add",
    describe: "Adding a  note",
    builder: {
        title: {
            describe: 'title of a note',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'main content of a note',
            demandOption: true,
            type: 'string'
        },
        done: {
            describe: 'did the work or not',
            demandOption: true,
            type: 'boolean'
        }
    },
    handler: function(argv){
        console.log(`Title: ${argv.title}`);
        console.log(`Content: ${argv.body}`);
        console.log(`Done: ${argv.done}`);
    }
});

yargs.command({
    command: "remove",
    describe: "remove a  note",
    handler: function(){
        console.log("remove a note!");
    }
});

yargs.command({
    command: "read",
    describe: "read a  note",
    handler: function(){
        console.log("reading a note!");
    }
});

yargs.command({
    command: "list",
    describe: "list notes",
    handler: function(){
        console.log("list your notes!");
    }
});

yargs.parse();