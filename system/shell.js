(function () {
  "use strict";

  var navigation = [
    { screen: "arbeitsbereich", label: "Arbeitsbereich", href: "arbeitsbereich.html", icon: "waypoints" },
    { screen: "kontakte", label: "Kontakte", href: "kontakte.html", icon: "contact-round" },
    { screen: "veranstaltungen", label: "Veranstaltungen", href: "veranstaltungen.html", icon: "calendar-days" },
    { screen: "verteiler", label: "Verteiler", href: "verteiler.html", icon: "mails" },
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
      keywords: "umwelttechnik standorterweiterung mobilitaetskonzept",
      available: true
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
      keywords: "anmeldungen teilnehmende warteliste kreativwirtschaft",
      available: true
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
      meta: "25 aktive Kontakte · E-Mail erlaubt",
      href: "verteiler-detail.html",
      icon: "mails",
      status: "Verteiler aktiv",
      statusClass: "status--info",
      description: "Unternehmen und Netzwerke der Heidelberger Umweltwirtschaft",
      facts: [
        { icon: "landmark", text: "Wirtschaftsförderung" },
        { icon: "mail-check", text: "25 erreichbare Kontakte" }
      ],
      keywords: "umwelt wirtschaft mailing empfaenger",
      available: true
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
    prototype: { icon: "circle-dashed", role: "status", live: "polite" },
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

  function showPrototypeNotice(type, subject, name) {
    var message;
    if (type === "record") {
      message = subject + " „" + name + "“ ist im Entwurf nicht hinterlegt.";
    } else {
      message = subject + " – im Entwurf nicht ausgeführt.";
    }
    showToast(message, "prototype");
  }

  function elements(value, root) {
    if (!value) {
      return [];
    }
    if (typeof value === "string") {
      return Array.prototype.slice.call((root || document).querySelectorAll(value));
    }
    if (value.nodeType) {
      return [value];
    }
    return Array.prototype.slice.call(value);
  }

  function normalizeText(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("de");
  }

  function createListSelection(options) {
    var settings = options || {};
    var root = settings.root || document;
    var rows = [];
    var selectAll = elements(settings.selectAll, root)[0] || null;
    var actions = elements(settings.actions, root);
    var boundChecks = [];

    function checkboxFor(row) {
      return row.querySelector(settings.checkbox || ".row-check");
    }

    function selectedRows() {
      return rows.filter(function (row) {
        var checkbox = checkboxFor(row);
        return checkbox && checkbox.checked;
      });
    }

    function visibleRows() {
      return rows.filter(function (row) {
        return !row.hidden;
      });
    }

    function update() {
      var selected = selectedRows();
      var visible = visibleRows();
      var selectedVisible = visible.filter(function (row) {
        var checkbox = checkboxFor(row);
        return checkbox && checkbox.checked;
      });
      rows.forEach(function (row) {
        var checkbox = checkboxFor(row);
        row.classList.toggle("is-checked", Boolean(checkbox && checkbox.checked));
      });
      if (selectAll) {
        selectAll.checked = visible.length > 0 && selectedVisible.length === visible.length;
        selectAll.indeterminate = selectedVisible.length > 0 && selectedVisible.length < visible.length;
      }
      actions.forEach(function (action) {
        action.disabled = selected.length === 0;
      });
      if (settings.onChange) {
        settings.onChange(selected, visible);
      }
      return selected;
    }

    function bindRows() {
      boundChecks.forEach(function (checkbox) {
        checkbox.removeEventListener("change", update);
      });
      rows = elements(settings.rows, root);
      boundChecks = rows.map(checkboxFor).filter(Boolean);
      boundChecks.forEach(function (checkbox) {
        checkbox.addEventListener("change", update);
      });
    }

    if (selectAll) {
      selectAll.addEventListener("change", function () {
        visibleRows().forEach(function (row) {
          var checkbox = checkboxFor(row);
          if (checkbox) {
            checkbox.checked = selectAll.checked;
          }
        });
        update();
      });
    }
    bindRows();
    update();

    return {
      getSelectedRows: selectedRows,
      getVisibleRows: visibleRows,
      refresh: update,
      refreshRows: function () {
        bindRows();
        return update();
      }
    };
  }

  function createListFilter(options) {
    var settings = options || {};
    var root = settings.root || document;
    var rows = elements(settings.rows, root);
    var values = {};
    var groups = settings.groups || [];

    function controlValue(group, control) {
      return control.getAttribute(group.attribute);
    }

    function reflect(group) {
      elements(group.controls, root).forEach(function (control) {
        control.setAttribute("aria-pressed", String(controlValue(group, control) === values[group.name]));
      });
    }

    function refresh() {
      var visible = [];
      rows.forEach(function (row) {
        row.hidden = settings.matches ? !settings.matches(row, values) : false;
        if (!row.hidden) {
          visible.push(row);
        }
      });
      if (settings.onChange) {
        settings.onChange(visible, values);
      }
      return visible;
    }

    function set(name, value, shouldRefresh) {
      values[name] = value;
      groups.forEach(function (group) {
        if (group.name === name) {
          reflect(group);
        }
      });
      if (shouldRefresh !== false) {
        refresh();
      }
    }

    groups.forEach(function (group) {
      values[group.name] = group.initial;
      elements(group.controls, root).forEach(function (control) {
        control.addEventListener("click", function () {
          set(group.name, controlValue(group, control));
        });
      });
      reflect(group);
    });
    refresh();

    return {
      getState: function () {
        return Object.assign({}, values);
      },
      getVisibleRows: function () {
        return rows.filter(function (row) { return !row.hidden; });
      },
      refresh: refresh,
      set: set
    };
  }

  function createListView(options) {
    var settings = options || {};
    var root = settings.root || document;
    var rows = elements(settings.rows, root);
    var query = elements(settings.query, root)[0] || null;
    var pagination = elements(settings.pagination, root)[0] || null;
    var resultFocus = elements(settings.resultFocus, root)[0] || null;
    var resetControls = elements(settings.resetControls, root);
    var busyControls = elements(settings.busyControls, root)
      .concat(elements(".list-actions .btn, .list-actions .menu-choice", root))
      .filter(function (control, index, all) { return all.indexOf(control) === index; });
    var groups = settings.groups || [];
    var pageSize = settings.pageSize || 25;
    var currentPage = settings.initialPage || 1;
    var values = {};
    var initialValues = {};
    var matchedRows = [];
    var pageRows = [];
    var isBusy = false;
    var savedBusyStates = [];

    function copy(value) {
      return Array.isArray(value) ? value.slice() : value;
    }

    function stateCopy() {
      var state = {};
      Object.keys(values).forEach(function (name) {
        state[name] = copy(values[name]);
      });
      return state;
    }

    function groupControls(group) {
      return elements(group.controls, root);
    }

    function valueFor(group, control) {
      return group.attribute ? control.getAttribute(group.attribute) : control.value;
    }

    function reflect(group) {
      var type = group.type || "exclusive";
      groupControls(group).forEach(function (control) {
        var value = valueFor(group, control);
        if (type === "checkbox") {
          control.checked = values[group.name].indexOf(value) !== -1;
        } else if (type === "toggle") {
          control.setAttribute("aria-pressed", String(values[group.name].indexOf(value) !== -1));
        } else {
          control.setAttribute("aria-pressed", String(values[group.name] === value));
        }
      });
    }

    function sameValue(left, right) {
      if (!Array.isArray(left) || !Array.isArray(right)) {
        return left === right;
      }
      return left.slice().sort().join("\u0000") === right.slice().sort().join("\u0000");
    }

    function isFiltered() {
      if (query && query.value.trim()) {
        return true;
      }
      return groups.some(function (group) {
        return !sameValue(values[group.name], initialValues[group.name]);
      });
    }

    function pageNumbers(pageCount) {
      var pages = [];
      var candidates;
      if (pageCount <= 7) {
        for (var page = 1; page <= pageCount; page += 1) {
          pages.push(page);
        }
        return pages;
      }
      candidates = [1, currentPage - 1, currentPage, currentPage + 1, pageCount]
        .filter(function (page) { return page >= 1 && page <= pageCount; })
        .filter(function (page, index, all) { return all.indexOf(page) === index; })
        .sort(function (left, right) { return left - right; });
      candidates.forEach(function (page, index) {
        if (index && page - candidates[index - 1] > 1) {
          pages.push("ellipsis-" + index);
        }
        pages.push(page);
      });
      return pages;
    }

    function setPage(nextPage, shouldFocus) {
      var pageCount = Math.max(1, Math.ceil(matchedRows.length / pageSize));
      currentPage = Math.min(Math.max(1, nextPage), pageCount);
      refresh("page");
      if (shouldFocus && resultFocus) {
        var focusTarget = resultFocus.classList.contains("u-sr-only") && resultFocus.closest(".list-card") ? resultFocus.closest(".list-card") : resultFocus;
        focusTarget.setAttribute("tabindex", "-1");
        focusTarget.focus();
      }
    }

    function renderPagination(total, pageCount) {
      if (!pagination) {
        return;
      }
      var range = pagination.querySelector("[data-list-range]");
      var nav = pagination.querySelector("[data-pagination-nav]");
      var previous = pagination.querySelector("[data-page-previous]");
      var next = pagination.querySelector("[data-page-next]");
      var pages = pagination.querySelector("[data-page-list]");
      var start = total ? ((currentPage - 1) * pageSize) + 1 : 0;
      var end = total ? Math.min(currentPage * pageSize, total) : 0;
      var itemName = typeof settings.itemName === "function" ? settings.itemName(total) : (settings.itemName || (total === 1 ? "Treffer" : "Treffern"));
      if (range) {
        range.textContent = total ? start + "–" + end + " von " + total + " " + itemName : "0 " + itemName;
      }
      if (nav) {
        nav.hidden = pageCount <= 1;
      }
      if (previous) {
        previous.disabled = isBusy || currentPage === 1;
      }
      if (next) {
        next.disabled = isBusy || currentPage === pageCount;
      }
      if (!pages) {
        return;
      }
      pages.innerHTML = "";
      pageNumbers(pageCount).forEach(function (page) {
        if (typeof page === "string") {
          var ellipsis = document.createElement("span");
          ellipsis.className = "pagination-ellipsis";
          ellipsis.setAttribute("aria-hidden", "true");
          ellipsis.textContent = "…";
          pages.appendChild(ellipsis);
          return;
        }
        var button = document.createElement("button");
        button.className = "pagination-button";
        button.type = "button";
        button.textContent = page;
        button.setAttribute("aria-label", "Seite " + page + " zeigen");
        if (page === currentPage) {
          button.setAttribute("aria-current", "page");
        }
        button.disabled = isBusy;
        button.addEventListener("click", function () {
          setPage(page, true);
        });
        pages.appendChild(button);
      });
    }

    function refresh(reason) {
      var state = stateCopy();
      var normalizedQuery = normalizeText(query ? query.value.trim() : "");
      matchedRows = rows.filter(function (row) {
        var text = settings.searchText ? settings.searchText(row) : row.textContent;
        var queryMatches = !normalizedQuery || normalizeText(text).indexOf(normalizedQuery) !== -1;
        return queryMatches && (!settings.matches || settings.matches(row, state));
      });
      var pageCount = Math.max(1, Math.ceil(matchedRows.length / pageSize));
      currentPage = Math.min(currentPage, pageCount);
      var start = (currentPage - 1) * pageSize;
      pageRows = matchedRows.slice(start, start + pageSize);
      rows.forEach(function (row) {
        row.hidden = pageRows.indexOf(row) === -1;
      });
      resetControls.forEach(function (control) {
        control.hidden = !isFiltered();
      });
      renderPagination(matchedRows.length, pageCount);
      var view = {
        matchedRows: matchedRows.slice(),
        pageRows: pageRows.slice(),
        total: matchedRows.length,
        page: currentPage,
        pageCount: pageCount,
        query: query ? query.value.trim() : "",
        state: stateCopy(),
        reason: reason || "refresh"
      };
      if (settings.onChange) {
        settings.onChange(view);
      }
      return view;
    }

    function reset() {
      if (query) {
        query.value = "";
      }
      groups.forEach(function (group) {
        values[group.name] = copy(initialValues[group.name]);
        reflect(group);
      });
      currentPage = 1;
      return refresh("reset");
    }

    function setBusy(busy) {
      var nextBusy = Boolean(busy);
      if (nextBusy === isBusy) {
        return;
      }
      isBusy = nextBusy;
      if (isBusy) {
        savedBusyStates = busyControls.map(function (control) {
          return {
            control: control,
            disabled: Boolean(control.disabled),
            ariaDisabled: control.getAttribute("aria-disabled")
          };
        });
        busyControls.forEach(function (control) {
          if ("disabled" in control) {
            control.disabled = true;
          }
          control.setAttribute("aria-disabled", "true");
        });
      } else {
        savedBusyStates.forEach(function (entry) {
          if ("disabled" in entry.control) {
            entry.control.disabled = entry.disabled;
          }
          if (entry.ariaDisabled === null) {
            entry.control.removeAttribute("aria-disabled");
          } else {
            entry.control.setAttribute("aria-disabled", entry.ariaDisabled);
          }
        });
        savedBusyStates = [];
      }
      if (pagination) {
        pagination.setAttribute("aria-busy", String(isBusy));
      }
      renderPagination(matchedRows.length, Math.max(1, Math.ceil(matchedRows.length / pageSize)));
    }

    busyControls.forEach(function (control) {
      control.addEventListener("click", function (event) {
        if (!isBusy) {
          return;
        }
        event.preventDefault();
        event.stopImmediatePropagation();
      });
    });

    groups.forEach(function (group) {
      var type = group.type || "exclusive";
      var controls = groupControls(group);
      if (type === "checkbox") {
        values[group.name] = group.initial ? group.initial.slice() : controls.filter(function (control) { return control.checked; }).map(function (control) { return valueFor(group, control); });
      } else if (type === "toggle") {
        values[group.name] = group.initial ? group.initial.slice() : [];
      } else {
        values[group.name] = group.initial;
      }
      initialValues[group.name] = copy(values[group.name]);
      reflect(group);
      controls.forEach(function (control) {
        control.addEventListener(type === "checkbox" ? "change" : "click", function () {
          var value = valueFor(group, control);
          if (type === "checkbox") {
            values[group.name] = controls.filter(function (item) { return item.checked; }).map(function (item) { return valueFor(group, item); });
          } else if (type === "toggle") {
            var active = values[group.name].slice();
            var index = active.indexOf(value);
            if (index === -1) {
              active.push(value);
            } else {
              active.splice(index, 1);
            }
            values[group.name] = active;
          } else {
            values[group.name] = value;
          }
          reflect(group);
          currentPage = 1;
          refresh("filter");
        });
      });
    });

    if (query) {
      query.addEventListener("input", function () {
        currentPage = 1;
        refresh("query");
      });
    }
    resetControls.forEach(function (control) {
      control.addEventListener("click", reset);
    });
    if (pagination) {
      var previous = pagination.querySelector("[data-page-previous]");
      var next = pagination.querySelector("[data-page-next]");
      if (previous) {
        previous.addEventListener("click", function () { setPage(currentPage - 1, true); });
      }
      if (next) {
        next.addEventListener("click", function () { setPage(currentPage + 1, true); });
      }
    }
    refresh("initial");

    return {
      getState: stateCopy,
      getMatchedRows: function () { return matchedRows.slice(); },
      getPageRows: function () { return pageRows.slice(); },
      getPage: function () { return currentPage; },
      refresh: refresh,
      reset: reset,
      setBusy: setBusy,
      setPage: function (page) { setPage(page, false); }
    };
  }

  function createStateSwitch(options) {
    var settings = options || {};
    var root = settings.root || document;
    var controls = elements(settings.controls, root);
    var panels = settings.panels || {};
    var current = settings.initial;

    function set(next) {
      if (!Object.prototype.hasOwnProperty.call(panels, next)) {
        return current;
      }
      Object.keys(panels).forEach(function (name) {
        panels[name].hidden = name !== next;
      });
      controls.forEach(function (control) {
        control.setAttribute("aria-pressed", String(control.getAttribute(settings.attribute) === next));
      });
      current = next;
      if (settings.onChange) {
        settings.onChange(next);
      }
      return current;
    }

    controls.forEach(function (control) {
      control.addEventListener("click", function () {
        set(control.getAttribute(settings.attribute));
      });
    });
    set(current);

    return {
      get: function () { return current; },
      set: set
    };
  }

  document.addEventListener("crm:rendered", function (event) {
    renderIcons(event.target);
  });
  document.addEventListener("click", function (event) {
    var recordTrigger = event.target.closest("[data-prototype-record]");
    if (recordTrigger) {
      event.preventDefault();
      showPrototypeNotice("record", recordTrigger.getAttribute("data-prototype-record"), recordTrigger.getAttribute("data-prototype-name"));
      return;
    }
    var actionTrigger = event.target.closest("[data-prototype-action]");
    if (actionTrigger) {
      event.preventDefault();
      showPrototypeNotice("action", actionTrigger.getAttribute("data-prototype-action"));
      return;
    }
    var trigger = event.target.closest("[data-toast]");
    if (trigger) {
      showToast(trigger.getAttribute("data-toast"), trigger.getAttribute("data-toast-variant"));
    }
  });

  window.CrmShell = {
    openSearch: openSearch,
    renderIcons: renderIcons,
    rendered: rendered,
    showToast: showToast,
    showPrototypeNotice: showPrototypeNotice,
    createListSelection: createListSelection,
    createListFilter: createListFilter,
    createListView: createListView,
    createStateSwitch: createStateSwitch
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
    '<a class="nav-link" href="index.html" data-shell-prototype-index><i data-lucide="circle-dashed" aria-hidden="true"></i>Prototyp-Übersicht</a>' +
    '<button class="nav-link" type="button" data-shell-help><i data-lucide="circle-help" aria-hidden="true"></i>Hilfe</button>' +
    '<div class="profile"><span class="avatar" aria-hidden="true">JK</span><span><strong>Julia König</strong><small>Wirtschaftsförderung</small></span></div>';

  if (activeScreen === "prototyp-index") {
    sideNav.querySelector("[data-shell-prototype-index]").setAttribute("aria-current", "page");
  }

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

  var prototypeStateNames = (document.body.getAttribute("data-prototype-states") || "").trim().split(/\s+/).filter(Boolean);
  if (prototypeStateNames.length) {
    var prototypeLabels = {
      recent: "Zuletzt geöffnet",
      filled: "Gefüllt",
      overview: "Übersicht",
      loading: "Lädt",
      empty: "Leer",
      error: "Fehler",
      protected: "Kein Zugriff"
    };
    var prototypeInitial = document.body.getAttribute("data-prototype-initial") || prototypeStateNames[0];
    var prototypeBar = document.createElement("section");
    prototypeBar.className = "prototype-bar";
    prototypeBar.setAttribute("aria-label", "Ansichtszustand im Prototyp wechseln");
    prototypeBar.innerHTML = '<span class="prototype-label"><i data-lucide="circle-dashed" aria-hidden="true"></i>Prototyp-Zustand</span><div class="prototype-controls"></div>';
    var prototypeControls = prototypeBar.querySelector(".prototype-controls");
    prototypeStateNames.forEach(function (state) {
      var button = document.createElement("button");
      button.className = "prototype-state";
      button.type = "button";
      button.setAttribute("data-prototype-state", state);
      button.setAttribute("aria-pressed", String(state === prototypeInitial));
      button.textContent = prototypeLabels[state] || state;
      prototypeControls.appendChild(button);
    });
    main.insertBefore(prototypeBar, main.firstChild);
  }

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
      option.addEventListener("click", function (event) {
        if (!record.available) {
          event.preventDefault();
          showPrototypeNotice("record", record.kind, record.title);
        }
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
      if (matches[activeIndex].available) {
        window.location.href = matches[activeIndex].href;
      } else {
        showPrototypeNotice("record", matches[activeIndex].kind, matches[activeIndex].title);
      }
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
