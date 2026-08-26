(function () {
  "use strict";

  var navigation = [
    { screen: "arbeitsbereich", label: "Arbeitsbereich", href: "arbeitsbereich.html", icon: "waypoints" },
    { screen: "kontakte", label: "Kontakte", href: "kontakte.html", icon: "contact-round" },
    { screen: "veranstaltungen", label: "Veranstaltungen", href: "veranstaltungen.html", icon: "calendar-days" },
    { screen: "mailings", label: "Mailings", href: "mailing.html", icon: "send" }
  ];

  var searchRecords = [
    {
      group: "Kontakte",
      kind: "Kontakt",
      title: "Sabine Keller",
      meta: "GreenTech Solutions GmbH · 06221 873144",
      href: "kontakt-detail.html",
      icon: "user-round",
      status: "Kontakt aktiv",
      statusClass: "status--success",
      description: "Geschäftsführerin · GreenTech Solutions GmbH",
      facts: [
        { icon: "landmark", text: "Wirtschaftsförderung · Julia König" },
        { icon: "phone", text: "06221 873144" },
        { icon: "map-pin", text: "Eppelheimer Straße 82" }
      ],
      keywords: "umwelttechnik standorterweiterung mobilitaetskonzept"
    },
    {
      group: "Kontakte",
      kind: "Organisation",
      title: "Heidelberger Dienste gGmbH",
      meta: "Organisation · Weststadt",
      href: "kontakte.html",
      icon: "building-2",
      status: "Organisation",
      statusClass: "status--info",
      description: "Sozialwirtschaftlicher Betrieb in der Weststadt",
      facts: [
        { icon: "landmark", text: "Wirtschaftsförderung · Daniela Vogt" },
        { icon: "map-pin", text: "Hospitalstraße, Heidelberg" }
      ],
      keywords: "sozialwirtschaft weststadt daniela vogt"
    },
    {
      group: "Kontakte",
      kind: "Kontakt",
      title: "Dr. Aylin Yılmaz",
      meta: "BioRN Network e. V. · Biotechnologie",
      href: "kontakte.html",
      icon: "user-round",
      status: "Kontakt aktiv",
      statusClass: "status--success",
      description: "Ansprechpartnerin beim BioRN Network e. V.",
      facts: [
        { icon: "landmark", text: "Wirtschaftsförderung" },
        { icon: "calendar-check", text: "Teilnahme am Branchendialog bestätigt" }
      ],
      keywords: "aylin yilmaz biorn biotechnologie network"
    },
    {
      group: "Veranstaltungen",
      kind: "Veranstaltung",
      title: "Branchendialog Kreativwirtschaft",
      meta: "18. September 2026 · Dezernat 16",
      href: "veranstaltung.html",
      icon: "calendar-days",
      status: "Anmeldung geöffnet",
      statusClass: "status--success",
      description: "Freitag, 09:30–13:00 Uhr · Emil-Maier-Straße 16",
      facts: [
        { icon: "landmark", text: "Wirtschaftsförderung" },
        { icon: "users", text: "38 von 40 Plätzen belegt" }
      ],
      keywords: "anmeldungen teilnehmende warteliste kreativwirtschaft"
    },
    {
      group: "Veranstaltungen",
      kind: "Veranstaltung",
      title: "Runder Tisch Innenstadtwirtschaft",
      meta: "28. August 2026 · Kurpfälzisches Museum",
      href: "veranstaltungen.html",
      icon: "calendar-days",
      status: "Anmeldung geöffnet",
      statusClass: "status--success",
      description: "Freitag, 09:00–12:00 Uhr · Hauptstraße 97",
      facts: [
        { icon: "landmark", text: "Wirtschaftsförderung" },
        { icon: "users", text: "18 von 32 Plätzen belegt" }
      ],
      keywords: "innenstadt einzelhandel kurpfaelzisches museum"
    },
    {
      group: "Veranstaltungen",
      kind: "Veranstaltung",
      title: "Dialog nachhaltige Gewerbegebiete",
      meta: "12. November 2026 · Dezernat 16",
      href: "veranstaltungen.html",
      icon: "calendar-days",
      status: "Entwurf erfasst",
      statusClass: "status--info",
      description: "Donnerstag, 17:30–20:00 Uhr · Emil-Maier-Straße 16",
      facts: [
        { icon: "landmark", text: "Wirtschaftsförderung" },
        { icon: "users", text: "80 Plätze vorgesehen" }
      ],
      keywords: "nachhaltig gewerbegebiet netzwerktreffen entwurf"
    },
    {
      group: "Verteiler",
      kind: "Verteiler",
      title: "Verteiler Umweltwirtschaft",
      meta: "54 aktive Kontakte · E-Mail erlaubt",
      href: "mailing.html",
      icon: "mails",
      status: "Verteiler aktiv",
      statusClass: "status--info",
      description: "Unternehmen und Netzwerke der Heidelberger Umweltwirtschaft",
      facts: [
        { icon: "landmark", text: "Wirtschaftsförderung" },
        { icon: "mail-check", text: "54 erreichbare Kontakte" }
      ],
      keywords: "umwelt wirtschaft mailing empfaenger"
    },
    {
      group: "Verteiler",
      kind: "Verteiler",
      title: "Kreativwirtschaft Heidelberg",
      meta: "68 aktive Mitglieder",
      href: "mailing.html",
      icon: "mails",
      status: "Im Mailing gewählt",
      statusClass: "status--success",
      description: "Empfängerkreis für den Branchendialog Kreativwirtschaft",
      facts: [
        { icon: "landmark", text: "Kulturamt · Wirtschaftsförderung" },
        { icon: "mail-check", text: "68 aktive Mitglieder" }
      ],
      keywords: "verteiler mailing empfaenger branchendialog"
    },
    {
      group: "Verteiler",
      kind: "Verteiler",
      title: "Branchentreffen Kultur",
      meta: "41 aktive Mitglieder",
      href: "mailing.html",
      icon: "mails",
      status: "Im Mailing gewählt",
      statusClass: "status--success",
      description: "Kulturinstitutionen und freie Kulturschaffende in Heidelberg",
      facts: [
        { icon: "landmark", text: "Kulturamt" },
        { icon: "mail-check", text: "41 aktive Mitglieder" }
      ],
      keywords: "verteiler mailing kultur empfaenger"
    }
  ];

  var toastVariants = {
    success: { icon: "circle-check", role: "status", live: "polite" },
    info: { icon: "info", role: "status", live: "polite" },
    error: { icon: "circle-x", role: "alert", live: "assertive" }
  };
  var toast;
  var toastText;
  var toastLive;
  var toastTimer;
  var toastAnnouncementTimer;

  function renderIcons(root) {
    if (window.lucide) {
      window.lucide.createIcons({ root: root || document });
    }
  }

  function rendered(root) {
    (root || document).dispatchEvent(new CustomEvent("crm:rendered", { bubbles: true }));
  }

  function ensureToast() {
    if (toast) {
      return;
    }
    toast = document.createElement("div");
    toast.className = "toast toast--success";
    toast.hidden = true;
    toast.setAttribute("aria-hidden", "true");
    toast.innerHTML = '<i data-toast-icon data-lucide="circle-check" aria-hidden="true"></i><span data-toast-text></span>';
    toastText = toast.querySelector("[data-toast-text]");

    toastLive = document.createElement("div");
    toastLive.className = "u-sr-only";
    toastLive.setAttribute("role", "status");
    toastLive.setAttribute("aria-live", "polite");
    toastLive.setAttribute("aria-atomic", "true");
    document.body.appendChild(toast);
    document.body.appendChild(toastLive);
  }

  function showToast(message, variant) {
    var selected = toastVariants[variant] ? variant : "success";
    var settings = toastVariants[selected];
    ensureToast();
    window.clearTimeout(toastTimer);
    window.clearTimeout(toastAnnouncementTimer);
    toast.className = "toast toast--" + selected;
    toast.querySelector("[data-toast-icon]").setAttribute("data-lucide", settings.icon);
    toastText.textContent = message;
    toast.hidden = false;
    renderIcons(toast);

    toastLive.setAttribute("role", settings.role);
    toastLive.setAttribute("aria-live", settings.live);
    toastLive.textContent = "";
    toastAnnouncementTimer = window.setTimeout(function () {
      toastLive.textContent = message;
    }, 20);
    toastTimer = window.setTimeout(function () {
      toast.hidden = true;
    }, 2800);
  }

  document.addEventListener("crm:rendered", function (event) {
    renderIcons(event.target);
  });
  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-toast]");
    if (trigger) {
      showToast(trigger.getAttribute("data-toast"), trigger.getAttribute("data-toast-variant"));
    }
  });

  window.CrmShell = {
    openSearch: openSearch,
    renderIcons: renderIcons,
    rendered: rendered,
    showToast: showToast
  };

  var main = document.querySelector("main.screen");
  if (!main || document.querySelector(".app-main")) {
    renderIcons(document);
    return;
  }

  var activeScreen = document.body.getAttribute("data-screen") || "";
  var skipLink = document.createElement("a");
  skipLink.className = "skip-link";
  skipLink.href = "#main";
  skipLink.textContent = "Zum Inhalt springen";

  var sideNav = document.createElement("aside");
  sideNav.className = "side-nav";
  sideNav.setAttribute("aria-label", "Hauptnavigation");
  sideNav.innerHTML =
    '<a class="brand" href="arbeitsbereich.html"><span class="brand-mark" aria-hidden="true"></span><span><strong>Heidelberg CRM</strong><small>Gemeinsam im Bild</small></span></a>' +
    '<nav><ul class="nav-list"></ul></nav><div class="nav-spacer"></div>' +
    '<button class="nav-link" type="button" data-shell-help><i data-lucide="circle-help" aria-hidden="true"></i>Hilfe</button>' +
    '<div class="profile"><span class="avatar" aria-hidden="true">JK</span><span><strong>Julia König</strong><small>Wirtschaftsförderung</small></span></div>';

  var navList = sideNav.querySelector(".nav-list");
  navigation.forEach(function (item) {
    var listItem = document.createElement("li");
    var link = document.createElement("a");
    link.className = "nav-link";
    link.href = item.href;
    link.innerHTML = '<i data-lucide="' + item.icon + '" aria-hidden="true"></i>' + item.label;
    if (item.screen === activeScreen) {
      link.setAttribute("aria-current", "page");
    }
    listItem.appendChild(link);
    navList.appendChild(listItem);
  });

  var appMain = document.createElement("div");
  appMain.className = "app-main";
  var topbar = document.createElement("header");
  topbar.className = "topbar";
  topbar.innerHTML =
    '<div class="smart-search">' +
      '<div class="search-row"><i data-lucide="search" aria-hidden="true"></i>' +
        '<label class="u-sr-only" for="global-search">Kontakte, Veranstaltungen oder Verteiler suchen</label>' +
        '<input class="search-input" id="global-search" type="search" role="combobox" aria-autocomplete="list" aria-haspopup="listbox" aria-expanded="false" aria-controls="search-popover" autocomplete="off" placeholder="Kontakt, Veranstaltung oder Verteiler">' +
        '<span class="shortcut" aria-hidden="true">Strg K</span>' +
      '</div>' +
      '<div class="search-popover" id="search-popover" hidden>' +
        '<div class="suggestions" id="search-suggestions" role="listbox" aria-label="Suchvorschläge"></div>' +
        '<aside class="search-preview" id="search-preview" aria-label="Vorschau des aktiven Suchvorschlags"></aside>' +
      '</div>' +
      '<div class="u-sr-only" id="search-live" role="status" aria-live="polite" aria-atomic="true"></div>' +
    '</div>';

  document.body.insertBefore(skipLink, document.body.firstChild);
  document.body.insertBefore(sideNav, main);
  document.body.insertBefore(appMain, main);
  appMain.appendChild(topbar);
  appMain.appendChild(main);

  var search = document.getElementById("global-search");
  var popover = document.getElementById("search-popover");
  var suggestions = document.getElementById("search-suggestions");
  var preview = document.getElementById("search-preview");
  var live = document.getElementById("search-live");
  var matches = [];
  var activeIndex = -1;

  function normalize(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("de");
  }

  function announce(message) {
    live.textContent = "";
    window.setTimeout(function () {
      live.textContent = message;
    }, 20);
  }

  function renderPreview(record) {
    preview.innerHTML = "";
    if (!record) {
      preview.hidden = true;
      return;
    }
    preview.hidden = false;
    var status = document.createElement("span");
    status.className = "status " + record.statusClass;
    status.textContent = record.status;
    var heading = document.createElement("h3");
    heading.textContent = record.title;
    var description = document.createElement("p");
    description.textContent = record.description;
    var facts = document.createElement("div");
    facts.className = "preview-facts";
    record.facts.forEach(function (fact) {
      var line = document.createElement("span");
      line.innerHTML = '<i data-lucide="' + fact.icon + '" aria-hidden="true"></i>';
      line.appendChild(document.createTextNode(fact.text));
      facts.appendChild(line);
    });
    preview.appendChild(status);
    preview.appendChild(heading);
    preview.appendChild(description);
    preview.appendChild(facts);
  }

  function setActive(index, speak) {
    var options = suggestions.querySelectorAll('[role="option"]');
    if (!options.length) {
      activeIndex = -1;
      search.removeAttribute("aria-activedescendant");
      renderPreview(null);
      return;
    }
    activeIndex = (index + options.length) % options.length;
    options.forEach(function (option, optionIndex) {
      option.setAttribute("aria-selected", String(optionIndex === activeIndex));
    });
    search.setAttribute("aria-activedescendant", options[activeIndex].id);
    renderPreview(matches[activeIndex]);
    renderIcons(preview);
    if (speak) {
      announce(matches[activeIndex].title + ", " + matches[activeIndex].kind + ", " + (activeIndex + 1) + " von " + matches.length + ".");
    }
  }

  function renderResults(query) {
    var normalizedQuery = normalize(query.trim());
    suggestions.innerHTML = "";
    matches = searchRecords.filter(function (record) {
      return normalize(record.title + " " + record.meta + " " + record.group + " " + record.keywords).indexOf(normalizedQuery) !== -1;
    });
    popover.classList.toggle("search-popover--message", matches.length === 0);

    if (!matches.length) {
      var empty = document.createElement("div");
      empty.className = "search-feedback";
      empty.innerHTML = '<span class="empty-state-icon"><i data-lucide="search-x" aria-hidden="true"></i></span><strong>Keine Treffer</strong><p>Prüfen Sie die Schreibweise oder suchen Sie nach einem anderen Begriff.</p>';
      suggestions.appendChild(empty);
      setActive(-1, false);
      announce("Keine Treffer für " + (query.trim() || "diese Suche") + ".");
      renderIcons(suggestions);
      return;
    }

    var currentGroup = "";
    matches.forEach(function (record, index) {
      if (record.group !== currentGroup) {
        currentGroup = record.group;
        var group = document.createElement("div");
        group.className = "suggestion-group";
        group.textContent = currentGroup;
        suggestions.appendChild(group);
      }
      var option = document.createElement("a");
      option.className = "suggestion";
      option.href = record.href;
      option.id = "search-option-" + index;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", "false");
      option.innerHTML = '<span class="suggestion-icon"><i data-lucide="' + record.icon + '" aria-hidden="true"></i></span><span><strong></strong><small></small></span>';
      option.querySelector("strong").textContent = record.title;
      option.querySelector("small").textContent = record.meta;
      option.addEventListener("mouseenter", function () {
        setActive(index, false);
      });
      option.addEventListener("focus", function () {
        setActive(index, true);
      });
      suggestions.appendChild(option);
    });
    setActive(0, false);
    announce(matches.length + (matches.length === 1 ? " Vorschlag verfügbar." : " Vorschläge verfügbar.") + " Mit den Pfeiltasten auswählen, mit Enter öffnen.");
    renderIcons(popover);
  }

  function showSearch() {
    renderResults(search.value);
    popover.hidden = false;
    search.setAttribute("aria-expanded", "true");
  }

  function openSearch(prefill) {
    if (!search) {
      return;
    }
    var hadFocus = document.activeElement === search;
    if (typeof prefill === "string") {
      search.value = prefill;
    }
    search.focus();
    if (popover.hidden || (hadFocus && typeof prefill === "string")) {
      showSearch();
    }
  }

  function closeSearch() {
    popover.hidden = true;
    search.setAttribute("aria-expanded", "false");
    search.removeAttribute("aria-activedescendant");
  }

  search.addEventListener("focus", showSearch);
  search.addEventListener("input", function () {
    renderResults(search.value);
    if (popover.hidden) {
      popover.hidden = false;
      search.setAttribute("aria-expanded", "true");
    }
  });
  search.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (popover.hidden) {
        showSearch();
      } else if (matches.length) {
        setActive(activeIndex + 1, true);
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (popover.hidden) {
        openSearch();
      } else if (matches.length) {
        setActive(activeIndex - 1, true);
      }
    } else if (event.key === "Enter" && !popover.hidden && activeIndex >= 0) {
      event.preventDefault();
      window.location.href = matches[activeIndex].href;
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeSearch();
      search.focus();
      announce("Suche geschlossen.");
    }
  });

  document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase("de") === "k") {
      event.preventDefault();
      openSearch();
    }
  });
  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-open-search]");
    if (trigger) {
      event.preventDefault();
      openSearch(trigger.hasAttribute("data-search-query") ? trigger.getAttribute("data-search-query") : undefined);
      return;
    }
    if (!event.target.closest(".smart-search")) {
      closeSearch();
    }
  });
  sideNav.querySelector("[data-shell-help]").addEventListener("click", function () {
    showToast("Die Hilfe öffnet sich passend zu Ihrem aktuellen Bereich.", "info");
  });
  renderIcons(document);
}());
