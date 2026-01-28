# Łamanie i Justowanie Tekstu – Projekt JavaScript

Projekt implementacji mechanizmu łamania i justowania tekstu z podziałem wyrazów stworzony w czystym języku JavaScript (Vanilla JS).

---

## Spis treści

* [O projekcie](#-o-projekcie)
* [Funkcjonalności](#-funkcjonalności)
* [Instalacja i użycie](#-instalacja-i-użycie)
* [Struktura projektu](#-struktura-projektu)
* [API](#-api)
* [Przykłady użycia](#-przykłady-użycia)
* [Technologie](#-technologie)
* [Autor](#-autor)

---

## O projekcie

Projekt prezentuje autorską implementację algorytmu łamania i justowania tekstu. Celem jest stworzenie mechanizmu składu tekstu, który automatycznie dzieli wyrazy i justuje akapity zgodnie z zasadami typografii, bez użycia zewnętrznych bibliotek.

**Kluczowe cechy:**
* **Autorski algorytm** – cała logika napisana od podstaw.
* **Łamanie wyrazów** – automatyczny podział długich wyrazów z łącznikiem.
* **Justowanie tekstu** – równomierne rozmieszczenie odstępów między słowami.
* **Responsywność** – dopasowanie do zmieniającej się szerokości kontenera.
* **Konfigurowalność** – pełna kontrola nad szerokością linii i opcjami formatowania.

---

## Funkcjonalności

1.  **Łamanie wyrazów** – automatyczne dzielenie długich słów z użyciem łącznika (-).
2.  **Justowanie tekstu** – wyrównanie tekstu do obu marginesów.
3.  **Pomiar tekstu** – precyzyjny pomiar szerokości tekstu przy użyciu Canvas API.
4.  **Statystyki** – zliczanie słów, linii i wykonanych podziałów.
5.  **Interaktywny interfejs** – suwaki i przełączniki do konfiguracji na żywo.
6.  **Responsywny design** – dostosowanie do różnych rozmiarów ekranu.
7.  **Tryb ciemny/jasny** – obsługa motywów kolorystycznych.

---

## Instalacja i użycie

### Szybkie rozpoczęcie

1.  **Dodanie skryptu do projektu:**
    ```html
    <script src="js/justowanie.js"></script>
    ```

2.  **Utworzenie instancji klasy:**
    ```javascript
    const juster = new TextJustifier();
    ```

3.  **Konfiguracja opcji:**
    ```javascript
    const options = {
        width: 600,        // szerokość linii w pikselach
        justify: true,     // włączenie justowania
        hyphenate: true    // włączenie łamania wyrazów
    };
    ```

4.  **Przetwarzanie tekstu:**
    ```javascript
    const result = juster.justify("Twój tekst do formatowania", options);
    document.getElementById("output").innerHTML = result;
    ```

### Demo interaktywne
Projekt zawiera dwie strony demonstracyjne:
* `index.html` – dokumentacja i opis algorytmu.
* `projekt_java.html` – interaktywne narzędzie do testowania.

Aby uruchomić demo lokalnie:
```bash
# Użyj serwera lokalnego, np. Python:
python -m http.server 8000

### API
Główna klasa odpowiedzialna za łamanie i justowanie tekstu
Konstruktor
```javascript
const juster = new TextJustifier();
```
Metoda justify(text, options)

Przetwarza tekst zgodnie z podanymi opcjami.

Parametry:

· text (string) - tekst wejściowy do formatowania
· options (object) - obiekt konfiguracyjny:
  · width (number) - szerokość linii w pikselach
  · justify (boolean) - czy justować tekst
  · hyphenate (boolean) - czy łamać wyrazy

Zwraca: (string) - sformatowany tekst HTML

Metoda getStats(html)

Zwraca statystyki sformatowanego tekstu.

Parametry:

· html (string) - sformatowany tekst HTML

Zwraca: (object) - obiekt ze statystykami:

· words (number) - liczba słów

· lines (number) - liczba linii

· hyphens (number) - liczba podziałów wyrazów

## Przykłady użycia

Przykład 1: Podstawowe użycie

```javascript
const juster = new TextJustifier();
const text = "Przykładowy tekst zawierający bardzo długiewyrazyktórebędąłamane.";
const options = { width: 400, justify: true, hyphenate: true };
const result = juster.justify(text, options);
```

Przykład 2: Bez łamania wyrazów

```javascript
const result = juster.justify(text, {
    width: 500,
    justify: false,
    hyphenate: false
});
```

Przykład 3: Pobieranie statystyk

```javascript
const formatted = juster.justify(text, options);
const stats = juster.getStats(formatted);
console.log(`Słowa: ${stats.words}, Linie: ${stats.lines}, Łamania: ${stats.hyphens}`);
```

## Technologie

· HTML - struktura strony
· CSS - style i responsywność
· JavaScript - logika aplikacji

## Autor

Oliwer Strzałka
Projekt stworzony w ramach realizacji projektu na zaliczenie przedmiotu "Technologie internetowe"

---