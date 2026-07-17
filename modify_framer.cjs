const fs = require('fs');
const path = require('path');

const file = 'd:/Web Projects/ssdssc/ssdssc.com/public/evo/register/_framer/js/screen-augiA20Il.js';
let content = fs.readFileSync(file, 'utf8');

let contactInputMatch = content.match(/\/\*#__PURE__\*\/_jsxs\("div",\{className:"framer-154epjs".*?\+94.*?\)\}\)\]\}\)/);
if (!contactInputMatch) throw new Error("Contact input not found");
let contactInputOrig = contactInputMatch[0];
let contactInputCopy = contactInputOrig.replace(/"framer-154epjs"/g, '"framer-154epjs-2"').replace(/"input#contact-number"/g, '"input#contact-number-2"');

let contactLabelMatch = content.match(/\/\*#__PURE__\*\/_jsx\(RichText,\{[^}]*className:"framer-7bl29x".*?\}\)/);
if (!contactLabelMatch) throw new Error("Contact label not found");
let contactLabelOrig = contactLabelMatch[0];
let contactLabelCopy = contactLabelOrig.replace(/"framer-7bl29x"/g, '"framer-7bl29x-2"');

let presidentInputMatch = content.match(/\/\*#__PURE__\*\/_jsx\("div",\{className:"framer-rv89xf".*?Science Union \/ Society President.*?\}\)\}\)/);
if (!presidentInputMatch) throw new Error("President input not found");
let presidentInputOrig = presidentInputMatch[0];
let presidentInputCopy = presidentInputOrig.replace(/"framer-rv89xf"/g, '"framer-rv89xf-2"').replace(/"input#president-name"/g, '"input#president-name-2"');

let presidentLabelMatch = content.match(/\/\*#__PURE__\*\/_jsx\(RichText,\{[^}]*className:"framer-s46at3".*?\}\)/);
if (!presidentLabelMatch) throw new Error("President label not found");
let presidentLabelOrig = presidentLabelMatch[0];
let presidentLabelCopy = presidentLabelOrig.replace(/"framer-s46at3"/g, '"framer-s46at3-2"');

content = content.replace(contactInputOrig, contactInputOrig + "," + contactInputCopy);
content = content.replace(contactLabelOrig, contactLabelOrig + "," + contactLabelCopy);
content = content.replace(presidentInputOrig, presidentInputOrig + "," + presidentInputCopy);
content = content.replace(presidentLabelOrig, presidentLabelOrig + "," + presidentLabelCopy);

let cssContactInputMatch = content.match(/\.framer-93UTc \.framer-154epjs \{[^}]*\}/);
let cssContactLabelMatch = content.match(/\.framer-93UTc \.framer-7bl29x \{[^}]*\}/);
let cssPresidentInputMatch = content.match(/\.framer-93UTc \.framer-rv89xf \{[^}]*\}/);
let cssPresidentLabelMatch = content.match(/\.framer-93UTc \.framer-s46at3 \{[^}]*\}/);

if (!cssContactInputMatch) throw new Error("CSS Contact input not found");
if (!cssContactLabelMatch) throw new Error("CSS Contact label not found");
if (!cssPresidentInputMatch) throw new Error("CSS President input not found");
if (!cssPresidentLabelMatch) throw new Error("CSS President label not found");

let cssContactInputOrig = cssContactInputMatch[0];
let cssContactInputCopy = cssContactInputOrig.replace(/\.framer-154epjs/g, '.framer-154epjs-2').replace(/bottom: 546px;/, 'bottom: 436px;');

let cssContactLabelOrig = cssContactLabelMatch[0];
let cssContactLabelCopy = cssContactLabelOrig.replace(/\.framer-7bl29x/g, '.framer-7bl29x-2').replace(/bottom: 614px;/, 'bottom: 504px;');

let cssPresidentInputOrig = cssPresidentInputMatch[0];
let cssPresidentInputCopy = cssPresidentInputOrig.replace(/\.framer-rv89xf/g, '.framer-rv89xf-2').replace(/top: 728px;/, 'top: 838px;');

let cssPresidentLabelOrig = cssPresidentLabelMatch[0];
let cssPresidentLabelCopy = cssPresidentLabelOrig.replace(/\.framer-s46at3/g, '.framer-s46at3-2').replace(/top: calc\(49\.23504867872047% - 16px \/ 2\);/, 'top: calc(49.23504867872047% - 16px / 2 + 110px);');

content = content.replace(cssContactInputOrig, cssContactInputOrig + '","' + cssContactInputCopy);
content = content.replace(cssContactLabelOrig, cssContactLabelOrig + '","' + cssContactLabelCopy);
content = content.replace(cssPresidentInputOrig, cssPresidentInputOrig + '","' + cssPresidentInputCopy);
content = content.replace(cssPresidentLabelOrig, cssPresidentLabelOrig + '","' + cssPresidentLabelCopy);

fs.writeFileSync('d:/Web Projects/ssdssc/ssdssc.com/public/evo/register/_framer/js/screen-augiA20Il.js', content, 'utf8');
console.log("Done");
