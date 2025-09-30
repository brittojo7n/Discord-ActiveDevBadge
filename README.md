# Discord Active Developer Badge Bot

This repository contains a minimal Discord bot used to trigger the requirements for the Discord **Active Developer Badge**.

The bot only registers and responds to a single slash command: `/ping`.

## Setup and Instructions

Follow these steps to deploy the bot and become eligible for the badge.

### 1. Discord Application Setup

1.  Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a **New Application**.
2.  In the application settings, go to the **Bot** tab and click **Add Bot**.
3.  Click **Reset Token** and **copy the bot token**. You will need this to run the bot.
4.  Go to the **General Information** tab and **copy the Application ID**. You will need this for the invite link.

### 2. Local Environment Setup

1.  Ensure you have **Node.js** installed on your system.
2.  Save the provided `index.js` and `package.json` files.
3.  Open your terminal or command prompt in the project directory.
4.  Install the necessary dependencies:

    ```bash
    npm install
    ```

5.  Run the bot:

    ```bash
    node index.js
    ```

6.  When prompted in the console, **paste your bot token** and press Enter.
7.  Wait for the console to log the message: `DONE | Application/Bot is up and running...`. **Keep this running.**

### 3. Invite the Bot and Claim the Badge

1.  **Create a new Discord server** or use an existing one where you have admin privileges.
2.  Go to **Server Settings -> Enable Community** and follow the steps to enable it for the server.
3.  Use the following URL to invite your bot (replace `{applicationid}` with the Application ID you copied in Step 1):

    ```
    https://discord.com/oauth2/authorize?client_id={applicationid}&scope=bot%20applications.commands&permissions=105227086912
    ```

4.  In any channel on that server, use the command:

    ```
    /ping
    ```

5.  Visit the **Active Developer Badge** page at [https://discord.com/developers/active-developer](https://discord.com/developers/active-developer) and register your application.
    * *Note: If you are not eligible right away, you may need to wait up to 24 hours for Discord's system to register the command usage.*

**Important Settings:**
* Make sure you have the **“Use data to improve Discord”** setting enabled under User Settings > Privacy & Safety, as this is required for eligibility.
