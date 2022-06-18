import { createContext, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = (props) => {
  const [courses, setCourses] = useState([
    {
      id: 8,
      featured: true,
      name: "Java Script - kurs średniozaawansowany",
      excerpt:
        "Kurs Javascript dla superbohaterów, artykuły, tutoriale, porady, zadania do wykonania, różne resursy i tegesy.",
      description:
        "Kurs JavaScript w Kodilli jest elementem realizowanych przez internet bootcampów Web Developer Plus oraz Front-end: React. W tym pierwszym, trwającym 9 miesięcy szkoleniu, poznasz od podstaw języki HTML i CSS umożliwiające budowę stron i interfejsów aplikacji internetowych, nauczysz się też korzysta z takich narzędzi jak Bootstrap, Sass czy Git, nauczysz się również programować w języku JavaScript. Jednym ze sprawdzianów będzie przygotowanie własnej strony internetowej w oparciu o nabyte umiejętności. Poznasz także platformę Node.js czy framework React.js. Drugi kurs online, czyli Front-end: React to tworzenie aplikacji internetowych od podstaw właśnie z nauką wykorzystywania frameworka React w praktyce.\n",
      categories: ["Frontend", "Backend", "Testing"],
      levels: ["junior", "mid", "senior"],
      url: "https://www.youtube.com/watch?v=4oSVCLUPs5U",
      photo:
        "https://moralis.io/wp-content/uploads/2021/07/Moralis-Blogpost-JavaScript-Explained-07272021-V12.png",
    },
    {
      id: 10,
      featured: true,
      name: "Język Python - zaawansowany ",
      excerpt:
        "Python jest wysoko poziomowym, dynamicznym językiem ogólnego przeznaczenia. Obecnie jest jednym z najbardziej popuarlnych językow.",
      description:
        "Python jest wysokopoziomowym językiem ogólnego przeznacznenia. W przeciwieństwie do niektórych jęzków, takich jak np. PHP który jest używany głównie do tworzenia skryptów po stronie serwera WWW, możliwości Pythona są bardzo rozległe i jego konkretne zastosowanie zależy od bibliotek których się do niego użyje. Ogromna ilość i różnorodność jego bibliotek jest powszechnie uważana za jedną z głównych zalet języka. Swoją popularność zyskał on jednak dzięki zupełnie innym jego właściwościom które wyróżniają go od większości innych języków: semantyce oraz składni. Wysoka czytelność jest jadną z przewodnich idei stojących za powstaniem tego języka. Został on zaprojektowany żeby mieć nie zagracony układ wizualny często używając słów z języka angielskiego gdzie inne języki używają znaków inerpunkcji.\n",
      categories: ["Frontend", "Backend", "Testing"],
      levels: ["senior"],
      url: "https://www.youtube.com/watch?v=4oSVCLUPs5U",
      photo:
        "https://oprojektowaniu.pl/wp-content/uploads/2017/09/header-805x452.png",
    },
    {
      id: 11,
      featured: false,
      name: "Java - podstawy",
      excerpt:
        "Java jest jednym z najbardziej popularnych języków programowania. Kurs ten pomoże Ci poznać składnię języka Java.",
      description:
        "Java jest jednym z najczęściej używanych języków programowania na świecie, co potwierdzają liczne rankingi. Najbardziej znanym wskaźnikiem jest index TIOBE, według którego od 2000 roku Java plasuje się między drugim a pierwszym miejscem pod względem popularności, rywalizując z językiem C. Z dużą popularnością tego języka wiąże się też stałe zapotrzebowanie na pracowników z wiedzą i umiejętnościami opartymi na znajomości technologii Java. To oznacza, że prawdopodobnie nie będziesz miał problemu ze znalezieniem pierwszej pracy w IT, jeżeli to właśnie Java będzie językiem programowania, jaki opanujesz. Tym samym zapewnisz sobie stabilną przyszłość w branży IT. Java jest jednym z najczęściej używanych języków programowania na świecie, co potwierdzają liczne rankingi. Najbardziej znanym wskaźnikiem jest index TIOBE, według którego od 2000 roku Java plasuje się między drugim a pierwszym miejscem pod względem popularności, rywalizując z językiem C. Z dużą popularnością tego języka wiąże się też stałe zapotrzebowanie na pracowników z wiedzą i umiejętnościami opartymi na znajomości technologii Java. To oznacza, że prawdopodobnie nie będziesz miał problemu ze znalezieniem pierwszej pracy w IT, jeżeli to właśnie Java będzie językiem programowania, jaki opanujesz. Tym samym zapewnisz sobie stabilną przyszłość w branży IT. Fakt, że nie ma wystarczającej liczby zdolnych programistów, zwiększa szansę na lepsze zarobki. Najnowsze raporty wskazują, że deweloperzy należą do najlepiej opłacanych w branży. Dodatkowo, zeszłoroczna analiza przeprowadzona przez firmę Sedlak & Sedlak dowodzi, że posiadanie umiejętności Java w CV jest dochodowe. Średnie wynagrodzenie dla początkującego programisty wynosi 5,6 tys. zł brutto (na umowie o pracę). Z kolei zarobki midów (programistów z doświadczeniem) wahają się między 8,5-11,9 tys. zł w zależności od rodzaju umowy. Wynagrodzenia seniorów oscylują wokół 15 tys. zł. Jest to jeden z głównych powodów, dla których warto postawić na programowanie w Java, budując swoją ścieżkę kariery w branży IT. W porównaniu z innymi klasycznymi językami programowania takimi, jak C czy C++, Java jest znacznie łatwiejsza do nauczenia. Jest to rodzaj programowania obiektowego, a zrozumienie podstawowych aspektów tego typu programowania sprawi, że przyswojenie technologii Java będzie intuicyjne. Po zapoznaniu się z podstawami przekonasz się, że możesz szybciej zrozumieć bardziej zaawansowane koncepcje, ponieważ kod jest bardzo wyraźny. Trzeba mieć na uwadze, że w miarę uczenia się język programowania staje się coraz bardziej złożony, jednak jego znajomość pomoże nauczyć się wcześniej wspomnianych języków C oraz C++. Teraz, gdy wiesz, że nauka Java nie jest taka straszna, a myślisz o karierze programisty, to sprawdź nasz kurs back-endowy Java Developer. Bootcamp Java zapewni Ci możliwość efektywnej nauki od podstaw, a w drodze do opanowania tego języka programowania towarzyszyć Ci będą praktycy, którzy uwielbiają dzielić się swoją wiedzą i kształcić świetnych juniorów. ",
      categories: ["Frontend", "Backend"],
      levels: ["junior", "mid"],
      url: "https://www.youtube.com/watch?v=4bPpmWIpAIQ",
      photo: "https://cdn.mos.cms.futurecdn.net/Ks6KtG9fx9soz6ddidT9iY.jpg",
    },
    {
      id: 111,
      featured: true,
      name: "SQL podstawy",
      excerpt:
        "SQL pomoże Ci zrobić duży krok w karierze. Kurs pod okiem najlepszych trenerów w Polsce. Jeśli pracujesz z danymi, ten kurs jest dla ciebie. ",
      description:
        "Nauka we własnym zakresie może być bardzo trudna i czasochłonna. Poprzez udział w naszych szkoleniach pomożemy usprawnić pracę każdego programisty, analityka, administratora, a także pracownika banku lub dowolnej większej firmy, która obecnie wymaga znajomości SQL! Strukturalny język zapytań służy do tworzenia, a także modyfikowania bazy danych. SQL (Structured Query Language) pozwala na podniesienie wydajności oraz bezpieczeństwa cyfrowych zbiorów. Prowadzimy kompleksowe kursy online Azure Database oraz szkolenia SQL Server. Oferowany przez nas Kurs baz danych online opiera się na przyswojeniu niezbędnej teorii, ale koncentruje się na ćwiczeniach praktycznych. Praktyka to kluczowy element proponowanych przez nas programów kształcenia. Wierzymy, że tylko w taki sposób poznasz tajniki tego pozornie trudnego i skomplikowanego języka. Nauczymy Cię pisać wydajne zapytania od podstaw w SQL Server oraz PostgreSQL. Cykl zajęć edukacyjnych przygotowany został przez doświadczonych w branży IT trenerów. Po ukończeniu programu otrzymasz certyfikat uczestnictwa w szkoleniu , podpisany przez trenera. Nie czekaj! Wybierz interesujący Cię wariant i skorzystaj już teraz! SQL jest prosty, opisany podstawowymi zasadami matematyki, daje zawsze jednoznaczne wyniki. W nauce chodzi o to, aby właśnie uchwycić te zasady. Dlatego nie idę na skróty. Przekazuję dokładnie to co trzeba, abyś w pełni zrozumiał mechanizmy działania tego języka. Dzięki temu, Twoje zapytania będą przewidywalne a Ty będziesz potrafił tworzyć złożone kwerendy zwracające dokładnie to czego potrzebujesz.Istnieje wiele dialektów i implementacji SQL obecnych w różnych systemach bazodanowych a nawet technologiach Big Data. Wystarczy wspomnieć najpopularniejsze – SQL Server, Oracle, Postgre, Teradata, MySQL czy najnowsze – BigQuery czy Presto (AWS Athena). Wszystkie bazują na tym samym fundamencie logicznym. SQL jest ustandaryzowany (ANSI). Podstawowe zasady pisania zapytań są takie same dla wszystkich silników, którego go implementują. Jeśli poznasz np. T-SQL – będziesz wiedział czego szukać w innych dialektach.",
      categories: ["Backend"],
      levels: ["junior", "mid"],
      url: "https://www.youtube.com/watch?v=15q9R1lTqvI",
      photo: "https://asedukacja.pl/files/foto/posty/mini/206.jpg",
    },
    {
      id: 1111,
      featured: false,
      name: "C# - kurs średniozaawansowany ",
      excerpt:
        " Kurs ten powstał po części jako odpowiedź na pytanie kolegi czy znam jakiś polski kurs właśnie języka C#.",
      description:
        "C# jest obiektowym językiem programowania wysokiego poziomu. Stworzony został na potrzeby firmy Microsoft i z nią jest głównie kojarzony. Jednak w rzeczywistości jest on wieloplatformowy i posiada otwartą specyfikację. Programy pisane w języku C# kompilowane są do kodu pośredniego, który wymaga do uruchomienia odpowiedniego środowiska. Najpopularniejszym środowiskiem dla języka C# jest .NET Framework jednak poza nim istnieje np. Mono, które można spotkać chociażby w systemach Linux. Aktualnie wprowadzana jest powoli wersja 6.0 języka. Teoretycznie programy w języku C# pisać można nawet w windowskowym notatniku i kompilować je korzystając z konsoli jednak większość programistów wykorzystuje chwalone nawet przez osoby z innych „obozów” IDE Visual Studio. Do niedawna darmowa wersja oznaczana była jako Express i posiadała sporo ograniczeń zwłaszcza związanych z pracą w zespole i analizą kodu względem płatnych wersji. Jednak aktualnie Microsoft zamknął wersję Express i wypuścił w jej miejsc wydanie Community, które jest w dużej części identyczne jak wydanie Professional, jest jednak dalej darmowe i w przeciwieństwie do wersji Express w końcu umożliwia instalowanie dodatków co było jednym z powodów kupowania wyższych wersji przez zawodowych programistów pracujących w domu. W tym kursie wolę się skupić na samym języku niż pokazywać jak zainstalować IDE ponieważ po pierwsze każdy może wybrać to co lubi, a po drugie instalacja Visual Studio jest bardziej czasochłonna niż trudna i jest duża szansa, że nawet bez Google większość z Was sobie poradzi jednak jeśli ktoś potrzebuje zobaczyć co i jak i przy okazji chce poznać podstawowe funkcje to zapraszam na koniec tego artykułu, tam dodałem osobny blok poświęcony IDE.Jak wspomniałem już wcześniej do uruchamiania programów napisanych w języku C# wymagane jest środowisko uruchomieniowe i najczęściej wykorzystywanym w tym celu środowiskiem jest .NET Framework dostarczany przez Microsoft. Aktualnie .NET Framework we w miarę aktualnej wersji dostarczany jest razem z systemem Windows i potem razem z nim aktualizowany dlatego jeśli pracujesz na tym systemie to jest duża szansa, że bez problemu możesz uruchamiać aplikacje pisane w języku C#. Środowisko .NET zawiera większość biblioteki podstawowej, którą można wykorzystać w swoich programach. Zaletą i jednocześnie wadą takiego stanu rzeczy jest to, że instalując .NET Framework instalujemy większość wykorzystywanych pakietów za jednym razem przez co nie muszą być one dostarczane przez każdy program z osobna i dlatego paczki z Twoimi programami mogą być dużo mniejsze jednak wada jest taka, że samo środowisko zajmuje zdaniem niektórych bardzo dużo miejsca (aktualnie >1GB) i jego ewentualna aktualizacja czy świeża instalacja jest ciężka. .NET Framework odpowiada także za zarządzanie pamięciom uruchomionych programów. Jeśli pisałeś wcześniej aplikacje w języku C lub C++ to kojarzysz jak musiałeś pamiętać o zwalnianiu przydzielonej pamięci. Pisząc w C# nie musisz się martwić o usuwanie obiektów, robi to za Ciebie sprytny mechanizm – Garbage Collector. Ułatwia to w sporej mierze pracę jednak powoduje jednocześnie, że nie masz kontroli nad tym kiedy usuwanie zbędnych obiektów nastąpi, a jest to proces, który potrafi na ułamek sekundy spowolnić program (to wszystko przestaje mieć jednak takie znaczenie kiedy po spędzeniu kilku lat w piwnicy przy komputerze i studiowaniu wszystkich dostępnych mechanizmów i technik umiesz tak konstruować kod i wykorzystywać elementy środowiska, że w dużym stopniu panujesz nad tym co się dzieje w programie).",
      categories: ["Backend"],
      levels: ["junior", "mid"],
      url: "https://www.youtube.com/watch?v=qVMX17uoHbk",
      photo:
        "https://cdn.bulldogjob.com/system/readables/covers/000/003/186/original/291121_6_funkcji_C__10.png",
    },
    {
      id: 111123123,
      featured: false,
      name: "PHP - kurs zaawanasowany",
      excerpt:
        "Kurs programowania w języku PHP. Kurs ten ma za zadanie zaznajomić osobę kompletnie nieobeznaną z tym językiem na tyle, aby sama była w stanie napisać kod.",
      description:
        "Mianem back-endu określa się technologie webowe, których kody źródłowe wykonywane są przez procesor serwera, a nie klienta. Jako że skrypty te wykonywane są zdalnie, to rzecz jasna do tych kodów nie może zajrzeć każdy internauta - są jak to mówimy: utajnione (musimy posiadać dostęp do dysku twardego serwera, na przykład dzięki usłudze FTP - taki dostęp posiada jedynie właściciel strony). Języki back-endowe, takie jak PHP, zajmują się mechaniką działania serwisów internetowych i to właśnie dlatego skrypty te stanowią zawsze tajemnicę twórców witryn. PHP obsłuży na serwerze np. zachowanie algorytmu logowania, koszyk w sklepie internetowym, rejestrację użytkownika w grze przeglądarkowej etc. Uwaga: pełny opis przeznaczenia poszczególnych technologii webowych znajdziesz w tym filmie.PHP to język przy pomocy którego możemy pisać skrypty po stronie serwera. Język PHP służy do pisania stron i aplikacji internetowych. Jeżeli chcemy stworzyć grę na PC lub zaawansowany program do przetwarzania danych w czasie rzeczywistym to PHP nie jest dobrym wyborem. Jeżeli zaś chcemy stworzyć coś typowo „internetowego” np. aplikację lub grę przeglądarkową to PHP jest wtedy bardzo dobrym wyborem, choć do zapewnienia atrakcyjnego interfejsu będą potrzebne także inne technologie jak CSS i JavaScript. Aby mieć serwer PHP na własnym komputerze, zazwyczaj instaluje się pakiet XAMPP, który uruchamia serwer lokalnie. Wpisz XAMPP w wyszukiwarce i zainstaluj to. Jego uruchomienie, to nic skomplikowanego wystarczy kliknąć dwa przyciski Start i wpisać w przeglądarce localhostPHP to najpopularniejszy język w świecie aplikacji Internetowych. To przy jego pomocy stworzono aplikacje: Facebook, Wikipedia, WordPress, Flickr czy serwis Tumblr. Aktualną wersją PHP jest wersja ósma, która miała premierę w 2020 roku. Zaletą PHP jest przede wszystkim.",
      categories: ["Backend"],
      levels: ["junior", "mid"],
      url: "https://www.youtube.com/watch?v=4bPpmWIpAIQ",
      photo: "https://i.ytimg.com/vi/tD0Q5QwoQJI/maxresdefault.jpg",
    },
  ]);
  const [users, setUsers] = useState([
    {
      id: 2,
      email: "monika@user.pl",
      password: "123",
      role: "user",
    },
    {
      id: 3,
      email: "monika@teacher.pl",
      password: "123",
      role: "teacher",
    },
    {
      id: 11,
      email: "monika@admin.pl",
      password: "123",
      role: "admin",
    },
  ]);

  return (
    <DataContext.Provider
      value={{
        users,
        setUsers,
        courses,
        setCourses,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
