// In JavaScript gibt es auch Kontrolllogik, also if/else statements.
// Diese sind etwas verwirrender als in anderen Sprachen, aber dazu
// gleich mehr. Die altbekannten Operatoren existieren jedoch auch:
if (true) {
    // wird ausgeführt
} else {
    // wird ignoriert
}

// Es existiert analog ein else if.
if (0 == 0) {
    // ist wahr.
}

if (0 != 1) {
    // ist wahr.
}

if (0 < 1) {
    // ist wahr
}

if (-1 < 0) {
    // ist wahr
}

// Überprüfungen können auch aneinander gereiht werden. Es gilt das übliche
// Punkt vor Strich der Logik: && vor ||

if (1 < 2 && 2 < 3 || 4 > 5) {
    // ist wahr
}
