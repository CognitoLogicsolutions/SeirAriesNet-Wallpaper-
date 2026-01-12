{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 et totalValue = Number(localStorage.getItem('paul_balance') || 0);\
let autoInterval = null;\
\
const display = document.getElementById('balance-display');\
const container = document.getElementById('asset-container');\
\
function updateUI() \{\
    display.textContent = `$$\{totalValue.toLocaleString()\}`;\
    localStorage.setItem('paul_balance', totalValue);\
\}\
\
function log(msg) \{\
    const line = document.createElement('div');\
    line.className = 'asset-line';\
    line.textContent = `> $\{new Date().toLocaleTimeString()\}: $\{msg\}`;\
    container.prepend(line);\
\}\
\
document.getElementById('mine-asset-btn').onclick = () => \{\
    totalValue += 100;\
    updateUI();\
    log("Asset Mined +$100");\
\};\
\
document.getElementById('auto-btn').onclick = () => \{\
    if (autoInterval) \{\
        clearInterval(autoInterval);\
        autoInterval = null;\
        log("Auto-Miner Offline");\
    \} else \{\
        autoInterval = setInterval(() => \{\
            totalValue += 10;\
            updateUI();\
        \}, 1000);\
        log("Auto-Miner Online");\
    \}\
\};\
\
document.getElementById('reset-btn').onclick = () => \{\
    totalValue = 0;\
    updateUI();\
    container.innerHTML = '';\
    log("System Reset");\
\};\
\
updateUI();\
log("SeirAriesNet Grid Initialized.");\
}