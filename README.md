### Dokumentacja aplikacji WeatherApp

Ten plik README zawiera przegląd prostej aplikacji pogodowej stworzonej przy użyciu Reacta oraz TypeScript, skupiając się na jej strukturze, komponentach, integracji z API oraz użytych technologiach.

#### Użyte technologie

- **React**: Biblioteka JavaScript do budowania interfejsów użytkownika.
- **TypeScript**: Rozszerzenie JavaScript dodające statyczne typy.
- **react-router-dom**: Deklaratywny routing dla aplikacji React.
- **Tailwind CSS**: Framework CSS oparty na klasach pomocniczych do stylizacji.

#### Komponenty

##### 1. Generatory

W projekcie komponenty są tworzone i zarządzane ręcznie.

##### 2. Routery HTTP

Routing jest zarządzany przy użyciu `react-router-dom`. Komponent `BrowserRouter` ustawia ścieżki dla różnych adresów URL:

```jsx
<Router>
  <Routes>
    <Route path="/" element={<App day="today" />} />
    <Route path="/tomorrow" element={<App day="tomorrow" />} />
  </Routes>
</Router>
```

##### 3. Szablony HTML

HTML jest renderowany przy użyciu składni JSX w komponentach React (`App.tsx`, `Nav.tsx`, `DailyForecast.tsx`).

##### 4. Konektory do baz danych

Dla prostoty i ułatwienia korzystania z aplikacji pobieramy dane bezpośrednio z publicznego API (`https://api.open-meteo.com/v1/forecast`).

##### 5. Integracja z API

Aplikacja integruje się z API Open Meteo, pobierając dane pogodowe na podstawie określonych parametrów (`params` w `utils.tsx`).

##### 6. Użyte technologie

- **React**: Zarządza komponentami interfejsu użytkownika i stanem.
- **TypeScript**: Zapewnia bezpieczeństwo typów i zwiększa jakość kodu.
- **react-router-dom**: Obsługuje nawigację między stronami w aplikacji.
- **Tailwind CSS**: Zapewnia szybkie i responsywne stylizowanie komponentów.

#### Problemy i rozwiązania

- **Routing**: Obsługiwany przy użyciu komponentu `<Link>` z `react-router-dom` do nawigacji między danymi pogodowymi na dzisiaj i jutro.
- **Integracja z API**: Zaimplementowana w `App.tsx` za pomocą funkcji `fetch()` do pobierania danych pogodowych na podstawie określonych parametrów.
- **Stylizacja**: Uzywamy Tailwind CSS do szybkiego i responsywnego stylizowania.

#### Uruchomienie aplikacji

Aby uruchomić aplikację lokalnie:

1. Sklonuj repozytorium.
2. Zainstaluj zależności za pomocą `npm install`.
3. Uruchom serwer deweloperski za pomocą `npm start`.

#### Podsumowanie

Ten plik README przedstawia przegląd struktury aplikacji pogodowej, jej komponentów, integracji z API oraz użytych technologii. Opisuje sposób uruchomienia aplikacji lokalnie oraz wymienia narzędzia i biblioteki wykorzystane do budowy projektu.
