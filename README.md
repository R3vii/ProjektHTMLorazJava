# Projekt JavaScript – Łamanie i justowanie tekstu

## Spis treści
- [Opis projektu](#opis-projektu)
- [Funkcje](#funkcje)
- [Demo](#demo)
- [Instalacja](#instalacja)
- [Użycie](#u%C5%BCycie)
- [API](#api)
- [Przykłady](#przyk%C5%82ady)
- [Statystyki](#statystyki)
- [Technologie](#technologie)
- [Autor](#autor)

---

## Opis projektu
Projekt prezentuje autorski **algorytm łamania i justowania tekstu** w czystym JavaScript.  
Algorytm analizuje tekst, dzieli go na słowa, mierzy szerokość przy użyciu elementu `<canvas>` i generuje linie tekstu z opcjonalnym:
- łamaniem długich wyrazów,
- justowaniem do lewej i prawej strony.

Celem projektu jest pokazanie, jak samodzielnie zaimplementować mechanizm składu tekstu bez korzystania z gotowych bibliotek.

---

## Funkcje
- **Łamanie wyrazów** – automatyczne dzielenie długich słów z użyciem łącznika (`-`)  
- **Justowanie tekstu** – wyrównanie tekstu do lewego i prawego marginesu  
- **Responsywność** – dopasowanie szerokości tekstu do kontenera  
- **Konfiguracja** – możliwość ustawienia szerokości linii, włączania justowania i łamania wyrazów  

---

## Demo
Strona demonstracyjna umożliwia:
- wpisanie dowolnego tekstu,
- zmianę szerokości linii,
- włączanie/wyłączanie łamania wyrazów i justowania,
- podgląd liczby słów, linii i łamań.

[Przejdź do demo](projekt_java.html)

---

## Instalacja
1. Sklonuj repozytorium:
```bash
git clone https://github.com/twoj-uzytkownik/projekt-justowania-tekstu.git
