import readline from 'readline';
import seedUserData from './seedUsers.js'; // user seeding script
import seedForumPostData from './seedPost.js'; // post seeding script
import seedHubData from './seedHub.js'; // hub seeding script
import seedMarketPlacePostData from './seedMarketPlacePost.js'; // marketplace seeding script
import seedCommentData from './seedComment.js'; // comment seeding script

// Create readline interface to read the user's input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Function to seed user data
async function seedUser(){
    try {
        await seedUserData();
    } catch (error) {
    }
};

// Function to seed hub data
async function seedHub(){
    try {
        await seedHubData();
    } catch (error) {
    }
};


// Function to seed forum post data
async function seedForumPost(){
    try {
        await seedForumPostData();
    } catch (error) {
    }
};

// Function to seed marketplace post data
async function seedMarketPlacePost(){
    try {
        await seedMarketPlacePostData();
    } catch (error) {
    }
};


// Function to seed comment data
async function seedComment(){
    try {
        await seedCommentData();
    } catch (error) {
    }
};


// Function to choose which seed script to run
const seedDB = async () => {
    // printing out all the options
    console.log("Select an option:");
    console.log("1. Seed all schema's");
    console.log("2. Seed user schema only");
    console.log("3. Seed hub schema only");
    console.log("4. Seed forum post schema only");
    console.log("5. Seed market place post schema only");
    console.log("6. Seed comment schema only");
    console.log("0. Cancel");

    rl.question("\nEnter your choice: ", async (choice) => {
        switch (choice) {
            case '0':
                console.log("Exiting Seeding Program...\n")
                break
            case '1':
                await seedUser();
                await seedHub();
                await seedForumPost();
                await seedMarketPlacePost();
                await seedComment();
                break;
            case '2':
                await seedUser();
                break;
            case '3':
                await seedHub();
                break;
            case '4':
                await seedForumPost();
                break;
            case '5':
                await seedMarketPlacePost();
                break;
            case '6':
                await seedComment();
                break;
            default:
                console.log("Invalid choice");
                console.log("Exiting Program...\n");
        }
        rl.close();
    });
};
seedDB();
