const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    for (const [search, replace] of replacements) {
        if (content.includes(search)) {
            content = content.split(search).join(replace);
            changed = true;
            console.log(`Replaced in ${filePath}`);
        }
    }
    
    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

// Evo (index)
replaceInFile(path.join(__dirname, 'public/evo/js/chunk-JHH6BJ7G.mjs'), [
    ['title: "SSDSSC | Science Society of D.S. Senanayake College "', 'title: "Evolvion - Sri Lanka\'s Premier Tech-Driven Quiz Eve | SSDSSC"']
]);
replaceInFile(path.join(__dirname, 'public/evo/js/chunk-EN26E4LI.mjs'), [
    ['"Evolvion \\u2014 Sri Lanka\\u2019s pioneering, fully tech-driven Quiz Eve, uniting schools in a battle of minds. Brought to you by SSDSSC."', '"Join Evolvion, Sri Lanka\\u2019s pioneering, fully tech-driven Quiz Eve uniting schools in a battle of minds. Brought to you by the Science Society of DSSC."']
]);

// Evo Register
replaceInFile(path.join(__dirname, 'public/evo/register/_framer/js/siteMetadata.js'), [
    ['title:"Register | SSDSSC | Science Society of DSSC"', 'title:"Register for Evolvion - Tech-Driven Quiz Eve | SSDSSC"'],
    ['description:"Register for Evolvion \\u2014 Sri Lanka\'s pioneering, fully tech-driven Quiz Eve, uniting schools in a battle of minds. Brought to you by SSDSSC."', 'description:"Register your school for Evolvion, Sri Lanka\'s premier fully tech-driven quiz competition organized by the Science Society of D.S. Senanayake College."']
]);

// Esper Awards
const esperJsFiles = [
    'public/esper/js/augiA20Il.RAqgRTJD.mjs',
    'public/esper/js/m3aphwwzw.clbc3scn.mjs',
    'public/esper/js/m3aPhWwZw.DYu7tj_-.mjs',
    'public/esper/js/shared-lib.bbcal4fm.mjs',
    'public/esper/js/shared-lib.D_RJvpHY.mjs'
];

for (const file of esperJsFiles) {
    replaceInFile(path.join(__dirname, file), [
        ["ESPER Awards 26 \\u2013 Sri Lanka's Premier Science Day & Innovation Awards | SSDSSC", "ESPER Awards '26 - Sri Lanka's Premier Science Day | SSDSSC"],
        ["ESPER Awards 26 \u2013 Sri Lanka's Premier Science Day & Innovation Awards | SSDSSC", "ESPER Awards '26 - Sri Lanka's Premier Science Day | SSDSSC"],
        ["ESPER Awards 26 \\u2013 Sri Lanka's Premier Science Day \\u0026 Innovation Awards | SSDSSC", "ESPER Awards '26 - Sri Lanka's Premier Science Day | SSDSSC"],
        ["ESPER Awards 26 – Sri Lanka's Premier Science Day & Innovation Awards | SSDSSC", "ESPER Awards '26 - Sri Lanka's Premier Science Day | SSDSSC"],
        ["ESPER Awards is Sri Lanka's No.1 national school science day and innovation awards platform, organized by the Science Society of D. S. Senanayake College (SSDSSC), bringing together students, schools and young innovators from across Sri Lanka.", "ESPER Awards is Sri Lanka's No.1 national school science day and innovation awards platform, organized by the Science Society of D. S. Senanayake College."]
    ]);
}

console.log("Done");
