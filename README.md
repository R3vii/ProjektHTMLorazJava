```markdown
# Łamanie i Justowanie Tekstu - Projekt JavaScript

Projekt implementacji mechanizmu łamania i justowania tekstu z podziałem wyrazów w czystym JavaScript.

##  Spis treści

- [O projekcie](#o-projekcie)
- [Funkcjonalności](#funkcjonalności)
- [Instalacja i użycie](#instalacja-i-użycie)
- [Struktura projektu](#struktura-projektu)
- [API](#api)
- [Przykłady użycia](#przykłady-użycia)
- [Technologie](#technologie)
- [Autor](#autor)

##  O projekcie

Projekt prezentuje autorską implementację algorytmu łamania i justowania tekstu w języku JavaScript. Celem jest stworzenie mechanizmu składu tekstu, który automatycznie dzieli wyrazy i justuje akapity zgodnie z zasadami typografii, bez użycia zewnętrznych bibliotek.

### Kluczowe cechy:
- **Autorski algorytm** - cała logika napisana od podstaw
- **Łamanie wyrazów** - automatyczny podział długich wyrazów z łącznikiem
- **Justowanie tekstu** - równomierne rozmieszczenie odstępów między słowami
- **Responsywność** - dopasowanie do zmieniającej się szerokości kontenera
- **Konfigurowalność** - kontrola szerokości linii i opcji formatowania

##  Funkcjonalności

1. **Łamanie wyrazów** - automatyczne dzielenie długich wyrazów z użyciem łącznika (-)
2. **Justowanie tekstu** - wyrównanie tekstu do obu marginesów
3. **Pomiar tekstu** - precyzyjny pomiar szerokości tekstu przy użyciu Canvas API
4. **Statystyki** - liczba słów, linii i podziałów wyrazów
5. **Interaktywny interfejs** - suwaki i przełączniki do konfiguracji
6. **Responsywny design** - dostosowanie do różnych rozmiarów ekranu
7. **Tryb ciemny/jasny** - przełączanie motywów kolorystycznych

## Instalacja i użycie

### Szybkie rozpoczęcie

1. **Dodanie skryptu do projektu:**
```html
<script src="js/justowanie.js"></script>
```

1. Utworzenie instancji klasy:

```javascript
const juster = new TextJustifier();
```

1. Konfiguracja opcji:

```javascript
const options = {
    width: 600,        // szerokość linii w pikselach
    justify: true,     // włączenie justowania
    hyphenate: true    // włączenie łamania wyrazów
};
```

1. Przetwarzanie tekstu:

```javascript
const result = juster.justify("Twój tekst do formatowania", options);
document.getElementById("output").innerHTML = result;
```

Demo interaktywne

Projekt zawiera dwie strony demonstracyjne:

1. Strona główna (index.html) - dokumentacja i opis algorytmu
2. Strona demo (projekt_java.html) - interaktywne narzędzie do testowania

Aby uruchomić demo:

```bash
# Otwórz plik index.html w przeglądarce
# lub użyj serwera lokalnego
python -m http.server 8000
```

> Struktura projektu

```
projekt/
├── index.html              # Strona główna z dokumentacją
├── projekt_java.html       # Interaktywne demo
├── css/
│   ├── style.css          # Style dla strony głównej
│   └── projekt_java.css   # Style dla demo
└── js/
    ├── justowanie.js      # Główna klasa TextJustifier
    ├── projekt_java.js    # Logika aplikacji demo
    └── script.js          # Skrypty pomocnicze
```

> API

Klasa TextJustifier

Główna klasa odpowiedzialna za łamanie i justowanie tekstu.

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

> Przykłady użycia

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

> Technologie

· HTML5 - struktura strony
· CSS3 - style i responsywność
· JavaScript (ES6+) - logika aplikacji
· Canvas API - pomiar szerokości tekstu
· Font: Arial - czcionka użyta do pomiarów

> Autor

Oliwer Strzałka
Projekt stworzony w ramach realizacji zadania z przedmiotu JavaScript.

---

> Linki

· Demo interaktywne
· Dokumentacja
· Kod źródłowy

```