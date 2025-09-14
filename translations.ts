import { LanguageCode, Translations } from './types';

const translations: Record<LanguageCode, Translations> = {
  nl: {
    nav: { home: 'Home', services: 'Services', about: 'Over Ons', contact: 'Contact' },
    home: {
      hero: { title: 'Alles voor uw scooter!', cta_appointment: 'Maak afspraak', cta_services: 'Bekijk onze services' },
      why_us: { title: 'Waarom Voor Ons Kiezen?', items: { one: 'Gratis ophaalservice', two: 'RDW erkend', three: 'Snelle service' } },
      offer: { title: 'Onze Diensten', items: { one: 'Onderhoud & Reparatie', two: 'Styling & Accessoires', three: 'Inkoop / Verkoop / Inruil' } },
      testimonials: { title: 'Wat Onze Klanten Zeggen', review1: { quote: 'Geweldige service, mijn scooter rijdt weer als nieuw!', author: 'Jan de Vries' }, review2: { quote: 'Zeer professioneel en betrouwbaar. Een echte aanrader!', author: 'Fatima El Amrani' } },
      cta: { title: 'Problemen met uw scooter?', subtitle: 'Wij helpen u graag!', cta_contact: 'Neem contact op' },
      slider: { title: "Een Glimp van Ons Werk", slide_road_desc: "Klaar voor de weg" }
    },
    services: {
        parts: {
          alt: 'Quality Parts',
          title: 'Quality Parts',
          description: 'We only use the best parts for repairs.'
        },
        title: 'Onze Diensten',
        cta: 'Vraag offerte aan',
        parts: {
          alt: 'Kwaliteitsonderdelen',
          title: 'Kwaliteitsonderdelen',
          description: 'Wij gebruiken alleen de beste onderdelen voor reparaties.'
        },
        maintenance: { title: 'Onderhoud & Reparatie', description: 'Wij volgen een strikt proces: diagnose, offerte, reparatie met kwaliteitsonderdelen en een laatste controle om ervoor te zorgen dat uw scooter in topconditie is.' },
        styling: { title: 'Styling & Accessoires', description: 'Personaliseer uw scooter! Wij bieden professioneel spuitwerk, wrapping, custom stickers, installatie van valbeugels en op maat gemaakte zadels.' },
        trade: { title: 'Inkoop / Verkoop / Inruil', description: 'Wij kopen, verkopen en ruilen gebruikte scooters. Geef de volgende informatie door voor een snelle taxatie: model, bouwjaar, kilometerstand, eventuele problemen en duidelijke foto\'s.' },
        export: { title: 'Export', description: 'Wij bieden volledige ondersteuning bij de verkoop en export van uw scooter naar het buitenland, inclusief alle benodigde documentatie.' },
        slider: { slide_parts_title: "Kwaliteitsonderdelen", slide_parts_desc: "Wij gebruiken alleen de beste onderdelen voor reparaties." }
    },
    about: {
      title: 'Over Ons',
      welcome: { title: 'Welkom bij Scootershop MG bv', text: 'Uw specialist in Den Haag voor service, reparatie en verkoop van scooters. Wij zijn gespecialiseerd in alle 4-takt scooters en bieden betrouwbare en snelle service.' },
      values: { title: 'Onze Kernwaarden', one: 'RDW Erkend', two: 'Snelle Service', three: 'Betrouwbaarheid' },
      gallery: { title: 'Merken die wij onderhouden', subtitle: 'Piaggio, Vespa, Yamaha, Honda, Kymco, Sym', more_brands: 'en vele andere merken.' },
      cta: { title: 'Heeft u een vraag?', cta_contact: 'Neem direct contact met ons op' },
      reviews: {
        rating: '4,1 / 5',
        based_on: 'Gebaseerd op 36 beoordelingen',
        cta_view: 'Bekijk alle beoordelingen',
        widget_error: 'Kon de widget niet laden?',
        widget_error_link: 'Bekijk op Google'
      }
    },
    contact: {
      title: 'Contacteer Ons',
      subtitle: 'Kunt u iets op de site niet vinden? Neem direct contact met ons op!',
      form: { 
        name: 'Naam', 
        email: 'E-mail', 
        phone: 'Telefoon', 
        service: 'Keuze service', 
        message: 'Bericht', 
        services: { 
            parts: {
              alt: 'Kwaliteitsonderdelen',
              title: 'Kwaliteitsonderdelen',
              description: 'Wij gebruiken alleen de beste onderdelen voor reparaties.'
            },
          repair: 'Reparatie afspraak', 
          trade: 'Tweedehands scooter kopen/verkopen', 
          other: 'Overige' 
        },
        repair_details_title: "Wat lijkt het probleem te zijn?",
        repair_options: {
          engine: "Motor",
          tires: "Banden / Remmen",
          electrical: "Elektrisch",
          damage: "Schadeherstel",
          maintenance: "Onderhoudsbeurt"
        },
        trade_details_title: "Scooter details",
        trade_options: {
          model: "Model",
          year: "Bouwjaar",
          mileage: "Kilometerstand"
        },
        appointment_date_title: "Selecteer een gewenste datum voor uw afspraak",
        selected_date: "Gewenste afspraakdatum",
        cta_whatsapp: 'Verstuur via WhatsApp', 
        cta_email: 'Verstuur via e-mail' 
      },
      info: { title: 'Bedrijfsinformatie', address: 'Adres', address_value: 'Mangaanstraat 50a, 2544 DW Den Haag', phone: 'Telefoon', email: 'E-mail' },
      hours: { title: 'Openingstijden', monday: 'Maandag', tuesday: 'Dinsdag', wednesday: 'Woensdag', thursday: 'Donderdag', friday: 'Vrijdag', saturday: 'Zaterdag', sunday: 'Zondag', times: '10:00 - 18:00', closed: 'Gesloten' },
    },
    footer: {
      rights: 'Alle rechten voorbehouden.'
    },
    calendar: {
        months: 'Januari,Februari,Maart,April,Mei,Juni,Juli,Augustus,September,Oktober,November,December',
        days_short: 'Zo,Ma,Di,Wo,Do,Vr,Za',
    }
  },
  en: {
    nav: { home: 'Home', services: 'Services', about: 'About Us', contact: 'Contact' },
    home: {
      hero: { title: 'Everything for your scooter!', cta_appointment: 'Make an appointment', cta_services: 'View our services' },
      why_us: { title: 'Why Choose Us?', items: { one: 'Free pickup service', two: 'RDW certified', three: 'Fast service' } },
      offer: { title: 'Our Services', items: { one: 'Maintenance & Repair', two: 'Styling & Accessories', three: 'Purchase / Sale / Trade-in' } },
      testimonials: { title: 'What Our Clients Say', review1: { quote: 'Great service, my scooter runs like new again!', author: 'John Smith' }, review2: { quote: 'Very professional and reliable. Highly recommended!', author: 'Emily Jones' } },
      cta: { title: 'Problems with your scooter?', subtitle: 'We are happy to help!', cta_contact: 'Contact us' },
      slider: { title: "A Glimpse of Our Work", slide_road_desc: "Ready for the road" }
    },
    services: {
        parts: {
          alt: 'Części Najwyższej Jakości',
          title: 'Części Najwyższej Jakości',
          description: 'Do napraw używamy tylko najlepszych części.'
        },
        title: 'Our Services',
        cta: 'Request a quote',
        parts: {
          alt: 'Quality Parts',
          title: 'Quality Parts',
          description: 'We only use the best parts for repairs.'
        },
        maintenance: { title: 'Maintenance & Repair', description: 'We follow a strict process: diagnosis, quote, repair with quality parts, and a final check to ensure your scooter is in top condition.' },
        styling: { title: 'Styling & Accessories', description: 'Personalize your scooter! We offer professional painting, wrapping, custom stickers, crash bar installation, and custom saddles.' },
        trade: { title: 'Purchase / Sale / Trade-in', description: 'We buy, sell, and trade used scooters. Please provide the following information for a quick valuation: model, year, mileage, any issues, and clear photos.' },
        export: { title: 'Export', description: 'We provide full support for the sale and export of your scooter abroad, including all necessary documentation.' },
        slider: { slide_parts_title: "Quality Parts", slide_parts_desc: "We only use the best parts for repairs." }
    },
    about: {
      title: 'About Us',
      welcome: { title: 'Welcome to Scootershop MG bv', text: 'Your specialist in The Hague for service, repair, and sale of scooters. We specialize in all 4-stroke scooters and offer reliable and fast service.' },
      values: { title: 'Our Core Values', one: 'RDW Certified', two: 'Fast Service', three: 'Reliability' },
      gallery: { title: 'Brands We Service', subtitle: 'Piaggio, Vespa, Yamaha, Honda, Kymco, Sym', more_brands: 'and many other brands.' },
      cta: { title: 'Have a question?', cta_contact: 'Contact us directly' },
      reviews: {
        rating: '4.1 / 5',
        based_on: 'Based on 36 reviews',
        cta_view: 'See all reviews',
        widget_error: "Couldn't load widget?",
        widget_error_link: 'See on Google'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Can\'t find something on the site? Contact us directly!',
      form: { 
        name: 'Name', 
        email: 'E-mail', 
        phone: 'Phone', 
        service: 'Choice of service', 
        message: 'Message', 
        services: { 
            parts: {
              alt: 'Kaliteli Parçalar',
              title: 'Kaliteli Parçalar',
              description: 'Onarımlar için sadece en iyi parçaları kullanıyoruz.'
            },
          repair: 'Repair appointment', 
          trade: 'Buy/sell second-hand scooter', 
          other: 'Other' 
        },
        repair_details_title: "What seems to be the problem?",
        repair_options: {
          engine: "Engine",
          tires: "Tires / Brakes",
          electrical: "Electrical",
          damage: "Damage repair",
          maintenance: "Regular maintenance"
        },
        trade_details_title: "Scooter details",
        trade_options: {
          model: "Model",
          year: "Year of construction",
          mileage: "Mileage"
        },
        appointment_date_title: "Select a desired date for your appointment",
        selected_date: "Desired Appointment Date",
        cta_whatsapp: 'Send via WhatsApp', 
        cta_email: 'Send via E-mail'
      },
      info: { title: 'Company Information', address: 'Address', address_value: 'Mangaanstraat 50a, 2544 DW Den Haag', phone: 'Phone', email: 'E-mail' },
      hours: { title: 'Opening Hours', monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday', times: '10:00 - 18:00', closed: 'Closed' },
    },
    footer: {
      rights: 'All rights reserved.'
    },
    calendar: {
        months: 'January,February,March,April,May,June,July,August,September,October,November,December',
        days_short: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat',
    }
  },
  tr: {
    nav: { home: 'Anasayfa', services: 'Hizmetler', about: 'Hakkımızda', contact: 'İletişim' },
    home: {
      hero: { title: 'Scooter\'ınız için her şey!', cta_appointment: 'Randevu al', cta_services: 'Hizmetlerimizi görüntüle' },
      why_us: { title: 'Neden Bizi Seçmelisiniz?', items: { one: 'Ücretsiz teslim alma hizmeti', two: 'RDW sertifikalı', three: 'Hızlı servis' } },
      offer: { title: 'Hizmetlerimiz', items: { one: 'Bakım ve Onarım', two: 'Tasarım ve Aksesuarlar', three: 'Alım / Satım / Takas' } },
      testimonials: { title: 'Müşterilerimiz Ne Diyor', review1: { quote: 'Harika hizmet, scooter\'ım yine yeni gibi çalışıyor!', author: 'Ahmet Yılmaz' }, review2: { quote: 'Çok profesyonel ve güvenilir. Kesinlikle tavsiye ederim!', author: 'Ayşe Kaya' } },
      cta: { title: 'Scooter\'ınızla ilgili sorunlar mı var?', subtitle: 'Size yardımcı olmaktan mutluluk duyarız!', cta_contact: 'Bize ulaşın' },
      slider: { title: "Çalışmalarımızdan Bir Kesit", slide_road_desc: "Yola çıkmaya hazır" }
    },
    services: {
        parts: {
          alt: 'Качествени Части',
          title: 'Качествени Части',
          description: 'Използваме само най-добрите части за ремонти.'
        },
        title: 'Hizmetlerimiz',
        cta: 'Teklif isteyin',
        parts: {
          alt: 'Kaliteli Parçalar',
          title: 'Kaliteli Parçalar',
          description: 'Onarımlar için sadece en iyi parçaları kullanıyoruz.'
        },
        maintenance: { title: 'Bakım ve Onarım', description: 'Sıkı bir süreç izliyoruz: teşhis, teklif, kaliteli parçalarla onarım ve scooter\'ınızın en iyi durumda olduğundan emin olmak için son kontrol.' },
        styling: { title: 'Tasarım ve Aksesuarlar', description: 'Scooter\'ınızı kişiselleştirin! Profesyonel boyama, kaplama, özel çıkartmalar, koruma demiri montajı ve özel seleler sunuyoruz.' },
        trade: { title: 'Alım / Satım / Takas', description: 'İkinci el scooter alıyor, satıyor ve takas ediyoruz. Hızlı bir değerleme için lütfen şu bilgileri sağlayın: model, yıl, kilometre, varsa sorunlar ve net fotoğraflar.' },
        export: { title: 'İhracat', description: 'Scooter\'ınızın yurtdışına satışı ve ihracatı için gerekli tüm belgeler dahil olmak üzere tam destek sağlıyoruz.' },
        slider: { slide_parts_title: "Kaliteli Parçalar", slide_parts_desc: "Onarımlar için sadece en iyi parçaları kullanıyoruz." }
    },
    about: {
      title: 'Hakkımızda',
      welcome: { title: 'Scootershop MG bv\'ye Hoş Geldiniz', text: 'Lahey\'deki scooter servis, onarım ve satış uzmanınız. Tüm 4 zamanlı scooter\'larda uzmanız ve güvenilir ve hızlı hizmet sunuyoruz.' },
      values: { title: 'Temel Değerlerimiz', one: 'RDW Sertifikalı', two: 'Hızlı Servis', three: 'Güvenilirlik' },
      gallery: { title: 'Servis Yaptığımız Markalar', subtitle: 'Piaggio, Vespa, Yamaha, Honda, Kymco, Sym', more_brands: 've diğer birçok marka.' },
      cta: { title: 'Bir sorunuz mu var?', cta_contact: 'Doğrudan bizimle iletişime geçin' },
      reviews: {
        rating: '4,1 / 5',
        based_on: '36 yoruma göre',
        cta_view: 'Tüm yorumları gör',
        widget_error: 'Widget yüklenemedi mi?',
        widget_error_link: 'Google\'da gör'
      }
    },
    contact: {
      title: 'Bize Ulaşın',
      subtitle: 'Sitede bir şey bulamıyor musunuz? Doğrudan bizimle iletişime geçin!',
      form: { 
        name: 'Ad', 
        email: 'E-posta', 
        phone: 'Telefon', 
        service: 'Hizmet seçimi', 
        message: 'Mesaj', 
        services: { 
            parts: {
              alt: 'قطع غيار عالية الجودة',
              title: 'قطع غيار عالية الجودة',
              description: 'نحن نستخدم فقط أفضل قطع الغيار للإصلاحات.'
            },
          repair: 'Onarım randevusu', 
          trade: 'İkinci el scooter al/sat', 
          other: 'Diğer' 
        },
        repair_details_title: "Sorun ne gibi görünüyor?",
        repair_options: {
            engine: "Motor",
            tires: "Lastikler / Frenler",
            electrical: "Elektrik",
            damage: "Hasar onarımı",
            maintenance: "Düzenli bakım"
        },
        trade_details_title: "Scooter detayları",
        trade_options: {
            model: "Model",
            year: "Yapım yılı",
            mileage: "Kilometre"
        },
        appointment_date_title: "Randevunuz için istediğiniz bir tarihi seçin",
        selected_date: "İstenen Randevu Tarihi",
        cta_whatsapp: 'WhatsApp ile gönder', 
        cta_email: 'E-posta ile gönder' 
      },
      info: { title: 'Şirket Bilgileri', address: 'Adres', address_value: 'Mangaanstraat 50a, 2544 DW Den Haag', phone: 'Telefon', email: 'E-posta' },
      hours: { title: 'Çalışma Saatleri', monday: 'Pazartesi', tuesday: 'Salı', wednesday: 'Çarşamba', thursday: 'Perşembe', friday: 'Cuma', saturday: 'Cumartesi', sunday: 'Pazar', times: '10:00 - 18:00', closed: 'Kapalı' },
    },
    footer: {
      rights: 'Tüm hakları saklıdır.'
    },
    calendar: {
        months: 'Ocak,Şubat,Mart,Nisan,Mayıs,Haziran,Temmuz,Ağustos,Eylül,Ekim,Kasım,Aralık',
        days_short: 'Paz,Pzt,Sal,Çar,Per,Cum,Cmt',
    }
  },
  pl: {
    nav: { home: 'Strona Główna', services: 'Usługi', about: 'O Nas', contact: 'Kontakt' },
    home: {
      hero: { title: 'Wszystko dla Twojego skutera!', cta_appointment: 'Umów wizytę', cta_services: 'Zobacz nasze usługi' },
      why_us: { title: 'Dlaczego My?', items: { one: 'Darmowy odbiór', two: 'Certyfikat RDW', three: 'Szybka obsługa' } },
      offer: { title: 'Nasze Usługi', items: { one: 'Serwis i Naprawa', two: 'Styling i Akcesoria', three: 'Skup / Sprzedaż / Zamiana' } },
      testimonials: { title: 'Opinie Klientów', review1: { quote: 'Świetna obsługa, mój skuter znów jeździ jak nowy!', author: 'Jan Kowalski' }, review2: { quote: 'Pełen profesjonalizm i niezawodność. Gorąco polecam!', author: 'Anna Nowak' } },
      cta: { title: 'Masz problem ze skuterem?', subtitle: 'Chętnie pomożemy!', cta_contact: 'Skontaktuj się z nami' },
      slider: { title: "Fragment Naszej Pracy", slide_road_desc: "Gotowy do drogi" }
    },
    services: {
        title: 'Nasze Usługi',
        cta: 'Poproś o wycenę',
        parts: {
          alt: 'Części Najwyższej Jakości',
          title: 'Części Najwyższej Jakości',
          description: 'Do napraw używamy tylko najlepszych części.'
        },
        maintenance: { title: 'Serwis i Naprawa', description: 'Działamy według ścisłej procedury: diagnoza, wycena, naprawa z użyciem wysokiej jakości części oraz końcowa kontrola, aby upewnić się, że Twój skuter jest w doskonałym stanie.' },
        styling: { title: 'Styling i Akcesoria', description: 'Spersonalizuj swój skuter! Oferujemy profesjonalne malowanie, oklejanie, niestandardowe naklejki, montaż gmole oraz siedzenia na zamówienie.' },
        trade: { title: 'Skup / Sprzedaż / Zamiana', description: 'Skupujemy, sprzedajemy i zamieniamy używane skutery. W celu szybkiej wyceny prosimy o podanie następujących informacji: model, rok, przebieg, ewentualne problemy oraz wyraźne zdjęcia.' },
        export: { title: 'Eksport', description: 'Zapewniamy pełne wsparcie przy sprzedaży i eksporcie Twojego skutera za granicę, włączając w to całą niezbędną dokumentację.' },
        slider: { slide_parts_title: "Części Najwyższej Jakości", slide_parts_desc: "Do napraw używamy tylko najlepszych części." }
    },
    about: {
      title: 'O Nas',
      welcome: { title: 'Witamy w Scootershop MG bv', text: 'Twój specjalista w Hadze w zakresie serwisu, naprawy i sprzedaży skuterów. Specjalizujemy się we wszystkich skuterach 4-suwowych i oferujemy niezawodną i szybką obsługę.' },
      values: { title: 'Nasze Wartości', one: 'Certyfikat RDW', two: 'Szybka Obsługa', three: 'Niezawodność' },
      gallery: { title: 'Obsługiwane Marki', subtitle: 'Piaggio, Vespa, Yamaha, Honda, Kymco, Sym', more_brands: 'i wiele innych marek.' },
      cta: { title: 'Masz pytanie?', cta_contact: 'Skontaktuj się z nami bezpośrednio' },
      reviews: {
        rating: '4,1 / 5',
        based_on: 'Na podstawie 36 recenzji',
        cta_view: 'Zobacz wszystkie opinie',
        widget_error: 'Nie udało się załadować widgetu?',
        widget_error_link: 'Zobacz na Google'
      }
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Nie możesz czegoś znaleźć na stronie? Skontaktuj się z nami bezpośrednio!',
      form: { 
        name: 'Imię i nazwisko', 
        email: 'E-mail', 
        phone: 'Telefon', 
        service: 'Wybór usługi', 
        message: 'Wiadomość', 
        services: { 
          repair: 'Umówienie naprawy', 
          trade: 'Kupno/sprzedaż używanego skutera', 
          other: 'Inne' 
        },
        repair_details_title: "Jaki jest problem?",
        repair_options: {
            engine: "Silnik",
            tires: "Opony / Hamulce",
            electrical: "Elektryka",
            damage: "Naprawa uszkodzeń",
            maintenance: "Regularny przegląd"
        },
        trade_details_title: "Dane skutera",
        trade_options: {
            model: "Model",
            year: "Rok produkcji",
            mileage: "Przebieg"
        },
        appointment_date_title: "Wybierz preferowaną datę wizyty",
        selected_date: "Preferowana data wizyty",
        cta_whatsapp: 'Wyślij przez WhatsApp', 
        cta_email: 'Wyślij przez e-mail' 
      },
      info: { title: 'Dane Firmy', address: 'Adres', address_value: 'Mangaanstraat 50a, 2544 DW Den Haag', phone: 'Telefon', email: 'E-mail' },
      hours: { title: 'Godziny Otwarcia', monday: 'Poniedziałek', tuesday: 'Wtorek', wednesday: 'Środa', thursday: 'Czwartek', friday: 'Piątek', saturday: 'Sobota', sunday: 'Niedziela', times: '10:00 - 18:00', closed: 'Zamknięte' },
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.'
    },
    calendar: {
        months: 'Styczeń,Luty,Marzec,Kwiecień,Maj,Czerwiec,Lipiec,Sierpień,Wrzesień,Październik,Listopad,Grudzień',
        days_short: 'Nie,Pon,Wto,Śro,Czw,Pią,Sob',
    }
  },
  bg: {
    nav: { home: 'Начало', services: 'Услуги', about: 'За нас', contact: 'Контакти' },
    home: {
      hero: { title: 'Всичко за вашия скутер!', cta_appointment: 'Запази час', cta_services: 'Вижте нашите услуги' },
      why_us: { title: 'Защо да изберете нас?', items: { one: 'Безплатно взимане от място', two: 'RDW сертифициран', three: 'Бързо обслужване' } },
      offer: { title: 'Нашите услуги', items: { one: 'Поддръжка и ремонт', two: 'Стилизиране и аксесоари', three: 'Изкупуване / Продажба / Замяна' } },
      testimonials: { title: 'Какво казват нашите клиенти', review1: { quote: 'Страхотно обслужване, скутерът ми отново е като нов!', author: 'Иван Петров' }, review2: { quote: 'Много професионални и надеждни. Горещо препоръчвам!', author: 'Мария Георгиева' } },
      cta: { title: 'Проблеми с вашия скутер?', subtitle: 'Ще се радваме да помогнем!', cta_contact: 'Свържете се с нас' },
      slider: { title: "Поглед към Нашата Работа", slide_road_desc: "Готов за пътя" }
    },
    services: {
      title: 'Нашите Услуги',
      cta: 'Поискай оферта',
      maintenance: { title: 'Поддръжка и Ремонт', description: 'Следваме строг процес: диагностика, оферта, ремонт с качествени части и финална проверка, за да гарантираме, че вашият скутер е в отлично състояние.' },
      styling: { title: 'Стилизиране и Аксесоари', description: 'Персонализирайте своя скутер! Предлагаме професионално боядисване, фолиране, персонализирани стикери, монтаж на ролбари и седалки по поръчка.' },
      trade: { title: 'Изкупуване / Продажба / Замяна', description: 'Ние купуваме, продаваме и заменяме употребявани скутери. Моля, предоставете следната информация за бърза оценка: модел, година, пробег, всякакви проблеми и ясни снимки.' },
      export: { title: 'Износ', description: 'Предоставяме пълна подкрепа за продажбата и износа на вашия скутер в чужбина, включително цялата необходима документация.' },
      slider: { slide_parts_title: "Качествени Части", slide_parts_desc: "Използваме само най-добрите части за ремонти." }
    },
    about: {
      title: 'За Нас',
      welcome: { title: 'Добре дошли в Scootershop MG bv', text: 'Вашият специалист в Хага за сервиз, ремонт и продажба на скутери. Ние сме специализирани във всички 4-тактови скутери и предлагаме надеждно и бързо обслужване.' },
      values: { title: 'Нашите Основни Ценности', one: 'RDW Сертифициран', two: 'Бързо Обслужване', three: 'Надеждност' },
      gallery: { title: 'Марки, които обслужваме', subtitle: 'Piaggio, Vespa, Yamaha, Honda, Kymco, Sym', more_brands: 'и много други марки.' },
      cta: { title: 'Имате въпрос?', cta_contact: 'Свържете се директно с нас' },
      reviews: {
        rating: '4,1 / 5',
        based_on: 'Въз основа на 36 отзива',
        cta_view: 'Вижте всички отзиви',
        widget_error: 'Неуспешно зареждане на уиджета?',
        widget_error_link: 'Вижте в Google'
      }
    },
    contact: {
      title: 'Свържете се с Нас',
      subtitle: 'Не можете да намерите нещо на сайта? Свържете се директно с нас!',
      form: { 
        name: 'Име', 
        email: 'Имейл', 
        phone: 'Телефон', 
        service: 'Избор на услуга', 
        message: 'Съобщение', 
        services: { 
          repair: 'Час за ремонт', 
          trade: 'Покупка/продажба на скутер втора ръка', 
          other: 'Друго' 
        },
        repair_details_title: "Какъв изглежда е проблемът?",
        repair_options: {
            engine: "Двигател",
            tires: "Гуми / Спирачки",
            electrical: "Електричество",
            damage: "Ремонт на щети",
            maintenance: "Редовна поддръжка"
        },
        trade_details_title: "Детайли за скутера",
        trade_options: {
            model: "Модел",
            year: "Година на производство",
            mileage: "Пробег"
        },
        appointment_date_title: "Изберете желана дата за вашата среща",
        selected_date: "Желана дата за среща",
        cta_whatsapp: 'Изпрати през WhatsApp', 
        cta_email: 'Изпрати по имейл' 
      },
      info: { title: 'Информация за Фирмата', address: 'Адрес', address_value: 'Mangaanstraat 50a, 2544 DW Den Haag', phone: 'Телефон', email: 'Имейл' },
      hours: { title: 'Работно Време', monday: 'Понеделник', tuesday: 'Вторник', wednesday: 'Сряда', thursday: 'Четвъртък', friday: 'Петък', saturday: 'Събота', sunday: 'Неделя', times: '10:00 - 18:00', closed: 'Затворено' },
    },
    footer: {
      rights: 'Всички права запазени.'
    },
    calendar: {
        months: 'Януари,Февруари,Март,Април,Май,Юни,Юли,Август,Септември,Октомври,Ноември,Декември',
        days_short: 'Нд,Пн,Вт,Ср,Чт,Пт,Сб',
    }
  },
  ar: {
    nav: { home: 'الرئيسية', services: 'الخدمات', about: 'من نحن', contact: 'اتصل بنا' },
    home: {
      hero: { title: 'كل شيء لسكوترك!', cta_appointment: 'احجز موعدًا', cta_services: 'عرض خدماتنا' },
      why_us: { title: 'لماذا تختارنا؟', items: { one: 'خدمة استلام مجانية', two: 'معتمد من RDW', three: 'خدمة سريعة' } },
      offer: { title: 'خدماتنا', items: { one: 'الصيانة والإصلاح', two: 'التصميم والإكسسوارات', three: 'شراء / بيع / استبدال' } },
      testimonials: { title: 'ماذا يقول عملاؤنا', review1: { quote: 'خدمة رائعة، سكوترى يعمل كأنه جديد مرة أخرى!', author: 'علي محمد' }, review2: { quote: 'محترفون وموثوقون للغاية. موصى به بشدة!', author: 'فاطمة أحمد' } },
      cta: { title: 'هل لديك مشاكل مع سكوترك؟', subtitle: 'يسعدنا مساعدتك!', cta_contact: 'اتصل بنا' },
      slider: { title: "لمحة عن عملنا", slide_road_desc: "جاهز للطريق" }
    },
    services: {
      title: 'خدماتنا',
      cta: 'اطلب عرض سعر',
      maintenance: { title: 'الصيانة والإصلاح', description: 'نتبع عملية صارمة: التشخيص، عرض الأسعار، الإصلاح بقطع غيار عالية الجودة، والفحص النهائي لضمان أن سكوترك في أفضل حالة.' },
      styling: { title: 'التصميم والإكسسوارات', description: 'أضف طابعًا شخصيًا على سكوترك! نحن نقدم دهانًا احترافيًا، وتغليفًا، وملصقات مخصصة، وتركيب قضبان حماية، ومقاعد مخصصة.' },
      trade: { title: 'شراء / بيع / استبدال', description: 'نحن نشتري ونبيع ونستبدل السكوترات المستعملة. يرجى تقديم المعلومات التالية لتقييم سريع: الموديل، السنة، المسافة المقطوعة، أي مشاكل، وصور واضحة.' },
      export: { title: 'تصدير', description: 'نقدم دعمًا كاملاً لبيع وتصدير سكوترك إلى الخارج، بما في ذلك جميع الوثائق اللازمة.' },
      slider: { slide_parts_title: "قطع غيار عالية الجودة", slide_parts_desc: "نحن نستخدم فقط أفضل قطع الغيار للإصلاحات." }
    },
    about: {
      title: 'من نحن',
      welcome: { title: 'أهلاً بكم في Scootershop MG bv', text: 'متخصصك في لاهاي لخدمة وإصلاح وبيع السكوترات. نحن متخصصون في جميع السكوترات رباعية الأشواط ونقدم خدمة موثوقة وسريعة.' },
      values: { title: 'قيمنا الأساسية', one: 'معتمد من RDW', two: 'خدمة سريعة', three: 'الموثوقية' },
      gallery: { title: 'العلامات التجارية التي نخدمها', subtitle: 'Piaggio, Vespa, Yamaha, Honda, Kymco, Sym', more_brands: 'والعديد من العلامات التجارية الأخرى.' },
      cta: { title: 'هل لديك سؤال؟', cta_contact: 'اتصل بنا مباشرة' },
      reviews: {
        rating: '٤٫١ / ٥',
        based_on: 'بناءً على 36 تقييمًا',
        cta_view: 'عرض جميع التقييمات',
        widget_error: 'تعذر تحميل الويدجت؟',
        widget_error_link: 'شاهد على جوجل'
      }
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'ألا تجد شيئًا على الموقع؟ اتصل بنا مباشرة!',
      form: { 
        name: 'الاسم', 
        email: 'البريد الإلكتروني', 
        phone: 'الهاتف', 
        service: 'اختيار الخدمة', 
        message: 'الرسالة', 
        services: { 
          repair: 'موعد إصلاح', 
          trade: 'شراء/بيع سكوتر مستعمل', 
          other: 'أخرى' 
        },
        repair_details_title: "ماذا تبدو المشكلة؟",
        repair_options: {
            engine: "المحرك",
            tires: "الإطارات / الفرامل",
            electrical: "الكهرباء",
            damage: "إصلاح الأضرار",
            maintenance: "صيانة دورية"
        },
        trade_details_title: "تفاصيل السكوتر",
        trade_options: {
            model: "الموديل",
            year: "سنة الصنع",
            mileage: "المسافة المقطوعة"
        },
        appointment_date_title: "اختر تاريخًا مرغوبًا لموعدك",
        selected_date: "تاريخ الموعد المطلوب",
        cta_whatsapp: 'أرسل عبر واتساب', 
        cta_email: 'أرسل عبر البريد الإلكتروني'
      },
      info: { title: 'معلومات الشركة', address: 'العنوان', address_value: 'Mangaanstraat 50a, 2544 DW Den Haag', phone: 'الهاتف', email: 'البريد الإلكتروني' },
      hours: { title: 'ساعات العمل', monday: 'الاثنين', tuesday: 'الثلاثاء', wednesday: 'الأربعاء', thursday: 'الخميس', friday: 'الجمعة', saturday: 'السبت', sunday: 'الأحد', times: '10:00 - 18:00', closed: 'مغلق' },
    },
    footer: {
      rights: 'كل الحقوق محفوظة.'
    },
    calendar: {
        months: 'يناير,فبراير,مارس,أبريل,مايو,يونيو,يوليو,أغسطس,سبتمبر,أكتوبر,نوفمبر,ديسمبر',
        days_short: 'أحد,إثن,ثلا,أرب,خمي,جمعة,سبت',
    }
  },
  de: {
    nav: { home: 'Startseite', services: 'Dienstleistungen', about: 'Über uns', contact: 'Kontakt' },
    home: {
      hero: { title: 'Alles für Ihren Roller!', cta_appointment: 'Termin vereinbaren', cta_services: 'Unsere Dienstleistungen' },
      why_us: { title: 'Warum Sie uns wählen sollten', items: { one: 'Kostenloser Abholservice', two: 'RDW-anerkannt', three: 'Schneller Service' } },
      offer: { title: 'Unsere Angebote', items: { one: 'Wartung & Reparatur', two: 'Styling & Zubehör', three: 'Ankauf / Verkauf / Inzahlungnahme' } },
      testimonials: { title: 'Was unsere Kunden sagen', review1: { quote: 'Toller Service, mein Roller fährt wieder wie neu!', author: 'Max Mustermann' }, review2: { quote: 'Sehr professionell und zuverlässig. Sehr zu empfehlen!', author: 'Erika Mustermann' } },
      cta: { title: 'Probleme mit Ihrem Roller?', subtitle: 'Wir helfen Ihnen gerne!', cta_contact: 'Kontakt aufnehmen' },
      slider: { title: "Ein Einblick in unsere Arbeit", slide_road_desc: "Bereit für die Straße" }
    },
    services: {
      title: 'Unsere Dienstleistungen',
      cta: 'Angebot anfordern',
      maintenance: { title: 'Wartung & Reparatur', description: 'Wir folgen einem strengen Prozess: Diagnose, Angebot, Reparatur mit Qualitätsteilen und eine Endkontrolle, um sicherzustellen, dass Ihr Roller in Top-Zustand ist.' },
      styling: { title: 'Styling & Zubehör', description: 'Personalisieren Sie Ihren Roller! Wir bieten professionelle Lackierung, Folierung, individuelle Aufkleber, Sturzbügelmontage und maßgefertigte Sättel.' },
      trade: { title: 'Ankauf / Verkauf / Inzahlungnahme', description: 'Wir kaufen, verkaufen und tauschen gebrauchte Roller. Bitte geben Sie für eine schnelle Bewertung folgende Informationen an: Modell, Baujahr, Kilometerstand, eventuelle Probleme und klare Fotos.' },
      export: { title: 'Export', description: 'Wir bieten volle Unterstützung beim Verkauf und Export Ihres Rollers ins Ausland, einschließlich aller notwendigen Unterlagen.' },
      slider: { slide_parts_title: "Qualitätsteile", slide_parts_desc: "Wir verwenden nur die besten Teile für Reparaturen." }
    },
    about: {
      title: 'Über Uns',
      welcome: { title: 'Willkommen bei Scootershop MG bv', text: 'Ihr Spezialist in Den Haag für Service, Reparatur und Verkauf von Rollern. Wir sind auf alle 4-Takt-Roller spezialisiert und bieten zuverlässigen und schnellen Service.' },
      values: { title: 'Unsere Kernwerte', one: 'RDW-Anerkannt', two: 'Schneller Service', three: 'Zuverlässigkeit' },
      gallery: { title: 'Marken, die wir warten', subtitle: 'Piaggio, Vespa, Yamaha, Honda, Kymco, Sym', more_brands: 'und viele andere Marken.' },
      cta: { title: 'Haben Sie eine Frage?', cta_contact: 'Kontaktieren Sie uns direkt' },
      reviews: {
        rating: '4,1 / 5',
        based_on: 'Basierend auf 36 Bewertungen',
        cta_view: 'Alle Bewertungen ansehen',
        widget_error: 'Widget konnte nicht geladen werden?',
        widget_error_link: 'Auf Google ansehen'
      }
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Können Sie etwas auf der Seite nicht finden? Kontaktieren Sie uns direkt!',
      form: { 
        name: 'Name', 
        email: 'E-Mail', 
        phone: 'Telefon', 
        service: 'Dienstleistungsauswahl', 
        message: 'Nachricht', 
        services: { 
          repair: 'Reparaturtermin', 
          trade: 'Gebrauchtroller kaufen/verkaufen', 
          other: 'Sonstiges' 
        },
        repair_details_title: "Was scheint das Problem zu sein?",
        repair_options: {
            engine: "Motor",
            tires: "Reifen / Bremsen",
            electrical: "Elektrisch",
            damage: "Schadensreparatur",
            maintenance: "Regelmäßige Wartung"
        },
        trade_details_title: "Rollerdetails",
        trade_options: {
            model: "Modell",
            year: "Baujahr",
            mileage: "Kilometerstand"
        },
        appointment_date_title: "Wählen Sie ein gewünschtes Datum für Ihren Termin",
        selected_date: "Gewünschtes Termindatum",
        cta_whatsapp: 'Per WhatsApp senden', 
        cta_email: 'Per E-Mail senden' 
      },
      info: { title: 'Firmeninformationen', address: 'Adresse', address_value: 'Mangaanstraat 50a, 2544 DW Den Haag', phone: 'Telefon', email: 'E-Mail' },
      hours: { title: 'Öffnungszeiten', monday: 'Montag', tuesday: 'Dienstag', wednesday: 'Mittwoch', thursday: 'Donnerstag', friday: 'Freitag', saturday: 'Samstag', sunday: 'Sonntag', times: '10:00 - 18:00', closed: 'Geschlossen' },
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.'
    },
    calendar: {
        months: 'Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember',
        days_short: 'So,Mo,Di,Mi,Do,Fr,Sa',
    }
  },
  hu: {
    nav: { home: 'Főoldal', services: 'Szolgáltatások', about: 'Rólunk', contact: 'Kapcsolat' },
    home: {
      hero: { title: 'Minden, ami a robogódhoz kell!', cta_appointment: 'Időpontfoglalás', cta_services: 'Szolgáltatásaink' },
      why_us: { title: 'Miért Minket Válasszon?', items: { one: 'Ingyenes begyűjtési szolgáltatás', two: 'RDW tanúsítvánnyal', three: 'Gyors szerviz' } },
      offer: { title: 'Szolgáltatásaink', items: { one: 'Karbantartás és javítás', two: 'Stílus és kiegészítők', three: 'Vétel / Eladás / Beszámítás' } },
      testimonials: { title: 'Amit Ügyfeleink Mondanak', review1: { quote: 'Nagyszerű szolgáltatás, a robogóm újra olyan, mint új korában!', author: 'Nagy János' }, review2: { quote: 'Nagyon profi és megbízható. Nagyon ajánlom!', author: 'Kovács Éva' } },
      cta: { title: 'Problémája van a robogójával?', subtitle: 'Szívesen segítünk!', cta_contact: 'Vegye fel a kapcsolatot' },
      slider: { title: "Bebizonyítás a munkánkból", slide_road_desc: "Útra kész" }
    },
    services: {
      title: 'Szolgáltatásaink',
      cta: 'Árajánlat kérése',
      maintenance: { title: 'Karbantartás és Javítás', description: 'Szigorú folyamatot követünk: diagnózis, árajánlat, javítás minőségi alkatrészekkel és végső ellenőrzés, hogy a robogója csúcsformában legyen.' },
      styling: { title: 'Stílus és Kiegészítők', description: 'Tegye egyedivé robogóját! Professzionális festést, fóliázást, egyedi matricákat, bukócső felszerelést és egyedi nyergeket kínálunk.' },
      trade: { title: 'Vétel / Eladás / Beszámítás', description: 'Használt robogókat vásárolunk, adunk el és cserélünk be. Kérjük, adja meg a következő információkat a gyors értékeléshez: modell, évjárat, kilométeróra állás, esetleges problémák és tiszta fotók.' },
      export: { title: 'Export', description: 'Teljes körű támogatást nyújtunk robogója külföldre történő eladásához és exportálásához, beleértve az összes szükséges dokumentációt.' },
      slider: { slide_parts_title: "Minőségi Alkatrészek", slide_parts_desc: "Csak a legjobb alkatrészeket használjuk a javításokhoz." }
    },
    about: {
      title: 'Rólunk',
      welcome: { title: 'Üdvözöljük a Scootershop MG bv-nél', text: 'Az Ön szakértője Hágában a robogók szervizelésében, javításában és értékesítésében. Minden 4 ütemű robogóra szakosodtunk, és megbízható, gyors szolgáltatást nyújtunk.' },
      values: { title: 'Alapértékeink', one: 'RDW Tanúsítvánnyal', two: 'Gyors Szolgáltatás', three: 'Megbízhatóság' },
      gallery: { title: 'Szervizelt márkák', subtitle: 'Piaggio, Vespa, Yamaha, Honda, Kymco, Sym', more_brands: 'és sok más márka.' },
      cta: { title: 'Kérdése van?', cta_contact: 'Lépjen kapcsolatba velünk közvetlenül' },
      reviews: {
        rating: '4,1 / 5',
        based_on: '36 vélemény alapján',
        cta_view: 'Összes vélemény megtekintése',
        widget_error: 'Nem sikerült betölteni a widgetet?',
        widget_error_link: 'Megtekintés a Google-on'
      }
    },
    contact: {
      title: 'Lépjen kapcsolatba velünk',
      subtitle: 'Nem talál valamit az oldalon? Lépjen kapcsolatba velünk közvetlenül!',
      form: { 
        name: 'Név', 
        email: 'E-mail', 
        phone: 'Telefon', 
        service: 'Szolgáltatás kiválasztása', 
        message: 'Üzenet', 
        services: { 
          repair: 'Javítási időpont', 
          trade: 'Használt robogó vétel/eladás', 
          other: 'Egyéb' 
        },
        repair_details_title: "Mi tűnik a problémának?",
        repair_options: {
            engine: "Motor",
            tires: "Gumiabroncsok / Fékek",
            electrical: "Elektromosság",
            damage: "Kárjavítás",
            maintenance: "Rendszeres karbantartás"
        },
        trade_details_title: "Robogó adatai",
        trade_options: {
            model: "Modell",
            year: "Évjárat",
            mileage: "Kilométeróra állás"
        },
        appointment_date_title: "Válasszon egy kívánt időpontot az időpontjához",
        selected_date: "Kívánt időpont",
        cta_whatsapp: 'Küldés WhatsApp-on', 
        cta_email: 'Küldés e-mailben' 
      },
      info: { title: 'Céginformáció', address: 'Cím', address_value: 'Mangaanstraat 50a, 2544 DW Den Haag', phone: 'Telefon', email: 'E-mail' },
      hours: { title: 'Nyitvatartás', monday: 'Hétfő', tuesday: 'Kedd', wednesday: 'Szerda', thursday: 'Csütörtök', friday: 'Péntek', saturday: 'Szombat', sunday: 'Vasárnap', times: '10:00 - 18:00', closed: 'Zárva' },
    },
    footer: {
      rights: 'Minden jog fenntartva.'
    },
    calendar: {
        months: 'Január,Február,Március,Április,Május,Június,Július,Augusztus,Szeptember,Október,November,December',
        days_short: 'V,H,K,Sze,Cs,P,Szo',
    }
  },
  fr: {
    nav: { home: 'Accueil', services: 'Services', about: 'À propos', contact: 'Contact' },
    home: {
      hero: { title: 'Tout pour votre scooter !', cta_appointment: 'Prendre rendez-vous', cta_services: 'Voir nos services' },
      why_us: { title: 'Pourquoi Nous Choisir ?', items: { one: 'Service de ramassage gratuit', two: 'Certifié RDW', three: 'Service rapide' } },
      offer: { title: 'Nos Services', items: { one: 'Entretien & Réparation', two: 'Style & Accessoires', three: 'Achat / Vente / Reprise' } },
      testimonials: { title: 'Ce Que Disent Nos Clients', review1: { quote: 'Excellent service, mon scooter roule comme neuf !', author: 'Jean Dupont' }, review2: { quote: 'Très professionnel et fiable. Fortement recommandé !', author: 'Marie Dubois' } },
      cta: { title: 'Des problèmes avec votre scooter ?', subtitle: 'Nous sommes heureux de vous aider !', cta_contact: 'Contactez-nous' },
      slider: { title: "Un aperçu de notre travail", slide_road_desc: "Prêt pour la route" }
    },
    services: {
      title: 'Nos Services',
      cta: 'Demander un devis',
      maintenance: { title: 'Entretien & Réparation', description: 'Nous suivons un processus strict : diagnostic, devis, réparation avec des pièces de qualité, et un contrôle final pour garantir que votre scooter est en parfait état.' },
      styling: { title: 'Style & Accessoires', description: 'Personnalisez votre scooter ! Nous proposons la peinture professionnelle, le wrapping, des autocollants personnalisés, l\'installation de barres de protection et des selles sur mesure.' },
      trade: { title: 'Achat / Vente / Reprise', description: 'Nous achetons, vendons et reprenons des scooters d\'occasion. Veuillez fournir les informations suivantes pour une évaluation rapide : modèle, année, kilométrage, problèmes éventuels et photos claires.' },
      export: { title: 'Export', description: 'Nous offrons un soutien complet pour la vente et l\'exportation de votre scooter à l\'étranger, y compris toute la documentation nécessaire.' },
      slider: { slide_parts_title: "Pièces de Qualité", slide_parts_desc: "Nous n'utilisons que les meilleures pièces pour les réparations." }
    },
    about: {
      title: 'À Propos de Nous',
      welcome: { title: 'Bienvenue chez Scootershop MG bv', text: 'Votre spécialiste à La Haye pour le service, la réparation et la vente de scooters. Nous sommes spécialisés dans tous les scooters 4 temps et offrons un service fiable et rapide.' },
      values: { title: 'Nos Valeurs Fondamentales', one: 'Certifié RDW', two: 'Service Rapide', three: 'Fiabilité' },
      gallery: { title: 'Marques que nous entretenons', subtitle: 'Piaggio, Vespa, Yamaha, Honda, Kymco, Sym', more_brands: 'et de nombreuses autres marques.' },
      cta: { title: 'Vous avez une question ?', cta_contact: 'Contactez-nous directement' },
      reviews: {
        rating: '4,1 / 5',
        based_on: 'Basé sur 36 avis',
        cta_view: 'Voir tous les avis',
        widget_error: 'Impossible de charger le widget ?',
        widget_error_link: 'Voir sur Google'
      }
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Vous ne trouvez pas quelque chose sur le site ? Contactez-nous directement !',
      form: { 
        name: 'Nom', 
        email: 'E-mail', 
        phone: 'Téléphone', 
        service: 'Choix du service', 
        message: 'Message', 
        services: { 
          repair: 'Rendez-vous de réparation', 
          trade: 'Achat/vente de scooter d\'occasion', 
          other: 'Autre' 
        },
        repair_details_title: "Quel semble être le problème ?",
        repair_options: {
            engine: "Moteur",
            tires: "Pneus / Freins",
            electrical: "Électrique",
            damage: "Réparation des dommages",
            maintenance: "Entretien régulier"
        },
        trade_details_title: "Détails du scooter",
        trade_options: {
            model: "Modèle",
            year: "Année de construction",
            mileage: "Kilométrage"
        },
        appointment_date_title: "Sélectionnez une date souhaitée pour votre rendez-vous",
        selected_date: "Date de rendez-vous souhaitée",
        cta_whatsapp: 'Envoyer via WhatsApp', 
        cta_email: 'Envoyer par e-mail' 
      },
      info: { title: 'Informations sur l\'entreprise', address: 'Adresse', address_value: 'Mangaanstraat 50a, 2544 DW Den Haag', phone: 'Téléphone', email: 'E-mail' },
      hours: { title: 'Heures d\'Ouverture', monday: 'Lundi', tuesday: 'Mardi', wednesday: 'Mercredi', thursday: 'Jeudi', friday: 'Vendredi', saturday: 'Samedi', sunday: 'Dimanche', times: '10:00 - 18:00', closed: 'Fermé' },
    },
    footer: {
      rights: 'Tous droits réservés.'
    },
    calendar: {
        months: 'Janvier,Février,Mars,Avril,Mai,Juin,Juillet,Août,Septembre,Octobre,Novembre,Décembre',
        days_short: 'Dim,Lun,Mar,Mer,Jeu,Ven,Sam',
    }
  }
};

export const getTranslation = (lang: LanguageCode): Translations => {
  return translations[lang] || translations.nl;
};

export default translations;