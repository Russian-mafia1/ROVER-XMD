import fs from 'fs';
import path from 'path';
import axios from 'axios';
import unzipper from 'unzipper';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fix: Correct temp and extracted directory names
const TEMP_DIR = path.join(__dirname, ".botx_temp");
const EXTRACT_DIR = path.join(TEMP_DIR, "ROVER-XMD-main"); // GitHub zip default folder

async function downloadAndExtract() {
  if (fs.existsSync(TEMP_DIR)) {
    console.log(chalk.yellow("Removing old folder..."));
    fs.rmSync(TEMP_DIR, {
      recursive: true,
      force: true
    });
  }

  fs.mkdirSync(TEMP_DIR, { recursive: true });

  console.log(chalk.blue("Downloading code from GitHub..."));

  const response = await axios({
    url: "https://github.com/Conway-eng/ROVER-XMD/archive/refs/heads/main.zip",
    method: "GET",
    responseType: "stream"
  });

  await new Promise((resolve, reject) => {
    response.data
      .pipe(unzipper.Extract({ path: TEMP_DIR }))
      .on("close", resolve)
      .on("error", reject);
  });

  console.log(chalk.green("Extraction complete!"));
}

async function startBot() {
  console.log(chalk.cyan("Starting the bot..."));

  if (!fs.existsSync(path.join(EXTRACT_DIR, "index.js"))) {
    console.log(chalk.red(`index.js not found in ${EXTRACT_DIR}`));
    return;
  }

  const child = spawn("node", [path.join(EXTRACT_DIR, "index.js")], {
    stdio: "inherit",
    env: process.env
  });

  child.on("close", (code) => {
    console.log(chalk.red("Bot exited with code " + code));
  });
}

(async () => {
  await downloadAndExtract();
  await startBot();
})();
