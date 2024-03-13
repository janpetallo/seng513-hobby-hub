# seng513-202401-group-19

## Seeding Scripts

### Get started

1) To run the seeding scripts you will need to first install the project from GIT
2) From the root directory `cd api` then `cd DBSeedingScripts`
3) The script files should already be present in this directory, and the schemas corresponding to these scripts should be 
in the directory: `root/api/models`. 
4) Within the DBSeeding directory make a .env file, inside this file you will write 
`MONGO = <Mogo DB connection URL> (Replace the <> with the connection settings from Mongodb)`
5) Afterwards you will be able to start the `seedDB.js` script. To do this you must once more (from the root directory)
`cd api` then `cd DBSeedingScripts`. From this directory run `node seedDB.js`
6) Some prompts will appear and you will be able to select an option to choose which schema you would like to seed.