Na pierwszych labach napisalem kilka prostych funkcji w javascript'cie.
W zwiazku z tym zamiast mavena naturalnym wyborem jest dla mnie npm lub yarn.
Za pomoca komendy 'npm init' inicjuje plik package.json, do ktorego dodaje 2 zaleznosci:
1)     "jest": "^27.2.5",
2)     "lodash": "^4.17.21"

Nowa funkcjonalnosc to klasa `User` w pliku `helpers.js`.
Testy tej klasy znajduja sie w pliku `helpers.test.js`.
Dodatkowo testuje kilka funkcjonalnosci paczki `lodash`.

Zeby wykonac wszystkie testy nalezy przejsc do katalogu `4` i wywolac komende `npm test`.
