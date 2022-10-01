#!/usr/bin/env node
// index.js
var temat = "Fwd: Lorum Ipsum PROD dolor sit amet, consectetur adipiscing elit [...] [TEST-TICKET#2022092817133275]"; //workflowContext.trigger.outputs.body.Subject
var lastopensquarebracket = temat.lastIndexOf('[');
var ticketId = temat.substring(lastopensquarebracket);


console.log(ticketId);