// Funktionen können wie in anderen Sprachen auch verwendet werden:
function example() {

}

// Beginnen kann man eine Funktion mit dem jeweiligen Keyword function.
// Anschließend kommt der Name, die Parameter und geschweifte Klammern
// für den Inhalt der Funktion.

// Den Rückgabewert einer Funktion kann über return gesteuert werden:

function returnsOne() {
    return 1;
}

// Ein einfaches return; gibt den Wert undefined zurück.
// Parameter werden über Komma getrennt und über ihren Namen identifiziert:

function parameters(param1, param2) {
}

// Eine Beispielfunktion wäre die Fakultät:

function factorial(num) {
    // Wir checken, ob num einen gültigen Wert hat, wenn nicht, dann returnen wir undefined.
    if (!num) {
        return;
    }

    // Wenn num <= 1 ist, dann returnen wir 1.
    if (num <= 1) {
        return 1;
    }

    // Ansonsten rufen wir die Funktion mit num - 1 auf und multiplizieren diesen Wert mit num.
    return factorial(num - 1) * num;
}
