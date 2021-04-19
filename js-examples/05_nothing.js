// Wie in jeder Programmiersprache gibt es auch einen Wert für 'nichts'.
// Äquivalent zu Java und C# ist dies der Wert 'null'.
// Jedoch gibt es in JavaScript auch einen zweiten Typen, der für das
// nicht definieren eines Typen steht. Dieser nennt sich undefined:

let someVar;
if (someVar === undefined) {
    // Ist wahr.
}

if (someVar === null) {
    // Ist falsch.
}

someVar = null;
// Erst jetzt hat der Wert der Variable someVar den Wert null. Dieser
// muss explizit angegeben sein. Undefined ist immer der Standardwert.

// Um zu checken, ob eine Variable einen null/undefined Wert hat, gibt es mehrere
// Optionen:

if (someVar == null) {
    // Wahr für undefined und null. Dies ist wahr, da null == undefined, jedoch nicht null === undefined!
}

// Der bessere Weg für eine Überprüfung auf einen null/undefined Wert ist der sogenannte
// Truthyness-Check:

if (!someVar) {
    // Dies ist wahr, da someVar den Wert null hat, somit ist !someVar true.
}

// Dieser ist auch invertierbar:
if (!!someVar) {
    // In diesem Falle falsch, also wahr, wenn der Wert gültig ist.
}
