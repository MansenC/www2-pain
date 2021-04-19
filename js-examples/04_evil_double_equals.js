// Das == ist böse in JavaScript und verkörpert alles dieser Sprache:
if (0 == '0') {
    // Dieser Vergleich ist wahr.
}

// Das liegt daran, dass der == Operator lediglich den Inhalt der Typen vergleicht.
// Da der String 0 auch in die Zahl 0 verwandelt werden kann, ist in dem Fall
// die Überprüfung wahr. Hierzu gibt es die bessere Alternative:
// Die strikte Gleichheitsüberprüfung mit dem Operator ===.

if (0 === '0') {
    // Diese Überprüfung wertet sich als falsch aus.
}

// Äquivalent existiert hierzu das !==. Es gibt jedoch kein <== oder >==, da diese
// bereits nur Zahlen überprüfen sollten.
