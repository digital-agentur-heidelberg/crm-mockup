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
    toast.innerHTML = '<i data-toast-icon data-lucide="circle-check" aria-hidden="true"></i><span data-toast-text></span><button class="toast-action" type="button" hidden></button>';
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
    toast.querySelector(".toast-action").hidden = true;
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

  function showUndoToast(message, undo, duration) {
    ensureToast();
    showToast(message, "success");
    var action = toast.querySelector(".toast-action");
    window.clearTimeout(toastTimer);
    action.textContent = "Rückgängig";
    action.hidden = false;
    action.onclick = function () {
      undo();
      action.hidden = true;
      showToast("Statusänderung wurde zurückgenommen.", "info");
    };
    toastTimer = window.setTimeout(function () {
      toast.hidden = true;
    }, duration || 10000);
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
    var selectMatched = elements(settings.selectMatched, root)[0] || null;
    var restrictToPage = elements(settings.restrictToPage, root)[0] || null;
    var scopeRegion = elements(settings.scopeRegion, root)[0] || null;
    var scopeMessage = elements(settings.scopeMessage, root)[0] || null;
    var resetNotice = elements(settings.resetNotice, root)[0] || null;
    var emptyReason = elements(settings.emptyReason, root)[0] || null;
    var actions = elements(settings.actions, root);
    var boundChecks = [];
    var matched = [];
    var page = [];
    var scope = "explicit";
    var itemSingular = settings.itemSingular || "Eintrag";
    var itemPlural = settings.itemPlural || "Einträge";

    function onRowChange() {
      scope = "explicit";
      update();
    }

    function checkboxFor(row) {
      return row.querySelector(settings.checkbox || ".selection-check");
    }

    function selectedRows() {
      return rows.filter(function (row) {
        var checkbox = checkboxFor(row);
        return checkbox && checkbox.checked;
      });
    }

    function visibleRows() {
      return page.slice();
    }

    function matchedRows() {
      return matched.slice();
    }

    function isAlreadyIncluded(row) {
      return settings.isAlreadyIncluded ? settings.isAlreadyIncluded(row) : row.getAttribute("data-already-included") === "true";
    }

    function setResetNotice(message) {
      if (!resetNotice) {
        return;
      }
      resetNotice.textContent = message || "";
      resetNotice.hidden = !message;
    }

    function setChecked(items, checked) {
      items.forEach(function (row) {
        var checkbox = checkboxFor(row);
        if (checkbox) {
          checkbox.checked = checked;
        }
      });
    }

    function pageIsSelected(selected, visible) {
      return visible.length > 0 && visible.every(function (row) {
        return selected.indexOf(row) !== -1;
      });
    }

    function selectionText(selected, visible) {
      var count = selected.length;
      var noun = count === 1 ? itemSingular : itemPlural;
      var outsidePage = selected.some(function (row) { return visible.indexOf(row) === -1; });
      if (scope === "all-matches") {
        return "Alle " + count + " " + itemPlural + " dieser Filterung sind ausgewählt.";
      }
      if (pageIsSelected(selected, visible) && !outsidePage) {
        return count + " " + itemPlural + " auf dieser Seite sind ausgewählt.";
      }
      if (outsidePage) {
        return count + " " + itemPlural + " auf mehreren Seiten ausgewählt.";
      }
      return count + " " + noun + " ausgewählt.";
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
      if (emptyReason) {
        emptyReason.hidden = selected.length > 0;
      }
      if (scopeRegion) {
        scopeRegion.hidden = selected.length === 0;
      }
      if (scopeMessage) {
        scopeMessage.textContent = selected.length ? selectionText(selected, visible) : "";
      }
      if (selectMatched) {
        var canSelectMatched = scope !== "all-matches" && pageIsSelected(selected, visible) && matchedRows().length > selected.length;
        selectMatched.hidden = !canSelectMatched;
        if (canSelectMatched) {
          selectMatched.textContent = "Alle " + matchedRows().length + " " + itemPlural + " dieser Filterung auswählen";
        }
      }
      if (restrictToPage) {
        restrictToPage.hidden = scope !== "all-matches";
      }
      var alreadyIncluded = selected.filter(isAlreadyIncluded);
      var meta = {
        scope: scope,
        selectedRows: selected.slice(),
        pageRows: visible.slice(),
        matchedRows: matchedRows(),
        selectedCount: selected.length,
        alreadyIncludedRows: alreadyIncluded,
        alreadyIncludedCount: alreadyIncluded.length,
        actionableRows: selected.filter(function (row) { return !isAlreadyIncluded(row); }),
        actionableCount: selected.length - alreadyIncluded.length
      };
      if (settings.onChange) {
        settings.onChange(selected, visible, meta);
      }
      return selected;
    }

    function bindRows() {
      boundChecks.forEach(function (checkbox) {
        checkbox.removeEventListener("change", onRowChange);
      });
      rows = elements(settings.rows, root);
      boundChecks = rows.map(checkboxFor).filter(Boolean);
      boundChecks.forEach(function (checkbox) {
        checkbox.addEventListener("change", onRowChange);
      });
    }

    if (selectAll) {
      selectAll.addEventListener("change", function () {
        scope = "explicit";
        visibleRows().forEach(function (row) {
          var checkbox = checkboxFor(row);
          if (checkbox) {
            checkbox.checked = selectAll.checked;
          }
        });
        update();
      });
    }
    if (selectMatched) {
      selectMatched.addEventListener("click", function () {
        scope = "all-matches";
        setChecked(rows, false);
        setChecked(matchedRows(), true);
        setResetNotice("");
        update();
      });
    }
    if (restrictToPage) {
      restrictToPage.addEventListener("click", function () {
        scope = "explicit";
        setChecked(rows, false);
        setChecked(visibleRows(), true);
        update();
      });
    }
    bindRows();
    matched = rows.slice();
    page = rows.filter(function (row) { return !row.hidden; });
    update();

    return {
      getSelectedRows: selectedRows,
      getVisibleRows: visibleRows,
      getMatchedRows: matchedRows,
      getState: function () {
        var selected = selectedRows();
        var included = selected.filter(isAlreadyIncluded);
        return {
          scope: scope,
          selectedRows: selected,
          pageRows: visibleRows(),
          matchedRows: matchedRows(),
          selectedCount: selected.length,
          alreadyIncludedRows: included,
          alreadyIncludedCount: included.length,
          actionableRows: selected.filter(function (row) { return !isAlreadyIncluded(row); }),
          actionableCount: selected.length - included.length
        };
      },
      refresh: function () {
        page = rows.filter(function (row) { return !row.hidden; });
        matched = page.slice();
        return update();
      },
      syncCollection: function (view) {
        var next = view || {};
        var collectionChanged = next.reason === "filter" || next.reason === "query" || next.reason === "reset";
        if (scope === "all-matches" && collectionChanged) {
          setChecked(rows, false);
          scope = "explicit";
          setResetNotice("Die Auswahl aller Treffer wurde aufgehoben, weil sich Suche oder Filter geändert haben.");
        }
        matched = next.matchedRows ? next.matchedRows.slice() : matched;
        page = next.pageRows ? next.pageRows.slice() : page;
        return update();
      },
      clear: function () {
        setChecked(rows, false);
        scope = "explicit";
        return update();
      },
      refreshRows: function () {
        bindRows();
        matched = rows.slice();
        page = rows.filter(function (row) { return !row.hidden; });
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

  function createEmbeddedList(options) {
    var settings = options || {};
    var root = settings.root || document;
    var rows = elements(settings.rows, root);
    var query = elements(settings.query, root)[0] || null;
    var loadMore = elements(settings.loadMore, root)[0] || null;
    var resetControls = elements(settings.resetControls, root);
    var groups = settings.groups || [];
    var loaded = Math.min(settings.initialLoad || rows.length, rows.length);
    var step = settings.loadStep || rows.length;
    var values = {};
    var loadedRows = [];
    var matchedRows = [];

    function groupControls(group) { return elements(group.controls, root); }
    function valueFor(group, control) { return group.attribute ? control.getAttribute(group.attribute) : control.value; }
    function reflect(group) {
      groupControls(group).forEach(function (control) {
        control.setAttribute("aria-pressed", String(values[group.name] === valueFor(group, control)));
      });
    }
    function refresh(reason) {
      var normalizedQuery = normalizeText(query ? query.value.trim() : "");
      loadedRows = rows.slice(0, loaded);
      matchedRows = loadedRows.filter(function (row) {
        var text = settings.searchText ? settings.searchText(row) : row.textContent;
        var queryMatches = !normalizedQuery || normalizeText(text).indexOf(normalizedQuery) !== -1;
        return queryMatches && (!settings.matches || settings.matches(row, values));
      });
      rows.forEach(function (row) { row.hidden = matchedRows.indexOf(row) === -1; });
      if (loadMore) {
        loadMore.hidden = loaded >= rows.length;
        loadMore.textContent = Math.min(step, rows.length - loaded) + " weitere Teilnehmende anzeigen";
      }
      var view = { totalRows: rows.slice(), loadedRows: loadedRows.slice(), matchedRows: matchedRows.slice(), loaded: loaded, total: rows.length, query: query ? query.value.trim() : "", state: Object.assign({}, values), reason: reason || "refresh" };
      if (settings.onChange) { settings.onChange(view); }
      return view;
    }
    groups.forEach(function (group) {
      values[group.name] = group.initial;
      reflect(group);
      groupControls(group).forEach(function (control) {
        control.addEventListener("click", function () {
          values[group.name] = valueFor(group, control);
          reflect(group);
          refresh("filter");
        });
      });
    });
    if (query) { query.addEventListener("input", function () { refresh("query"); }); }
    if (loadMore) { loadMore.addEventListener("click", function () { loaded = Math.min(rows.length, loaded + step); refresh("load"); }); }
    function reset() {
      if (query) { query.value = ""; }
      groups.forEach(function (group) { values[group.name] = group.initial; reflect(group); });
      refresh("reset");
    }
    resetControls.forEach(function (control) {
      control.addEventListener("click", reset);
    });
    refresh("initial");
    return { refresh: refresh, reset: reset, getLoadedRows: function () { return loadedRows.slice(); }, getMatchedRows: function () { return matchedRows.slice(); }, getState: function () { return Object.assign({}, values); } };
  }

  function createRowStatusChange(options) {
    var settings = options || {};
    var root = settings.root || document;
    var rows = elements(settings.rows, root);
    var history = [];
    var statusFor = settings.statusFor || function (row) { return row.dataset.status; };
    var setStatus = settings.setStatus || function (row, status) { row.dataset.status = status; };

    function latestChange() {
      return history[history.length - 1] || null;
    }

    function announceUndo() {
      var latest = latestChange();
      if (settings.onUndoAvailable) {
        settings.onUndoAvailable(latest ? latest.changes.length : 0);
      }
    }

    function apply(targetRows, nextStatus, label) {
      var changes = targetRows.filter(function (row) { return statusFor(row) !== nextStatus; }).map(function (row) { return { row: row, status: statusFor(row) }; });
      if (!changes.length) { return; }
      changes.forEach(function (change) { setStatus(change.row, nextStatus); });
      var changeSet = { changes: changes, nextStatus: nextStatus };
      history.push(changeSet);
      if (settings.onChange) { settings.onChange(changes, nextStatus); }
      var message = label || (changes.length === 1 ? "Teilnehmendenstatus wurde geändert." : "Status von " + changes.length + " Teilnehmenden wurde geändert.");
      showUndoToast(message, function () { undo(changeSet); }, changes.length > 1 ? 10000 : 5000);
      announceUndo();
    }
    function undo(changeSet) {
      var latest = latestChange();
      if (!latest || (changeSet && latest !== changeSet)) { return; }
      latest.changes.forEach(function (change) { setStatus(change.row, change.status); });
      history.pop();
      if (settings.onChange) { settings.onChange([], "undo"); }
      announceUndo();
    }
    root.addEventListener("click", function (event) {
      var choice = event.target.closest("[data-status-choice]");
      if (!choice || choice.disabled) { return; }
      var row = choice.closest("tr");
      if (!row) { return; }
      apply([row], choice.getAttribute("data-status-choice"));
      var menu = choice.closest("details");
      if (menu) { menu.open = false; }
    });
    return { change: apply, undo: undo, hasUndo: function () { return Boolean(latestChange()); } };
  }

  function createDialog(options) {
    var settings = options || {};
    var dialog = elements(settings.dialog)[0];
    var openers = elements(settings.openers);
    var returnFocus = null;

    if (!dialog) {
      return null;
    }

    function focusable() {
      return elements('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', dialog)
        .filter(function (control) { return !control.hidden && control.getAttribute("aria-hidden") !== "true"; });
    }

    function open(trigger) {
      returnFocus = trigger || document.activeElement;
      if (settings.onOpen) {
        settings.onOpen(trigger);
      }
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
      var initial = elements(settings.initialFocus || "[data-dialog-initial]", dialog)[0] || focusable()[0];
      if (initial) {
        initial.focus();
      }
    }

    function close(value) {
      if (dialog.open && typeof dialog.close === "function") {
        dialog.close(value || "close");
      } else {
        dialog.removeAttribute("open");
        if (settings.onClose) {
          settings.onClose(value || "close");
        }
        if (returnFocus && document.contains(returnFocus)) {
          returnFocus.focus();
        }
      }
    }

    openers.forEach(function (opener) {
      opener.addEventListener("click", function () { open(opener); });
    });
    elements("[data-dialog-close]", dialog).forEach(function (control) {
      control.addEventListener("click", function () { close("close"); });
    });
    dialog.addEventListener("keydown", function (event) {
      if (event.key !== "Tab") {
        return;
      }
      var controls = focusable();
      if (!controls.length) {
        event.preventDefault();
        return;
      }
      var first = controls[0];
      var last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
    dialog.addEventListener("close", function () {
      if (settings.onClose) {
        settings.onClose(dialog.returnValue);
      }
      if (returnFocus && document.contains(returnFocus)) {
        returnFocus.focus();
      }
    });

    return { dialog: dialog, open: open, close: close };
  }

  function createUnsavedGuard(options) {
    var settings = options || {};
    var form = elements(settings.form)[0];
    var dirty = false;
    var pendingHref = "";
    var dialog = document.createElement("dialog");
    var dialogController;

    if (!form) {
      return null;
    }

    dialog.className = "confirm-dialog";
    dialog.setAttribute("aria-labelledby", "unsaved-dialog-title");
    dialog.innerHTML =
      '<div class="card-body"><h2 id="unsaved-dialog-title">Eingaben verwerfen?</h2>' +
      '<p>Ihre noch nicht gespeicherten Angaben gehen verloren.</p>' +
      '<div class="button-row"><button class="btn" type="button" data-dialog-close data-dialog-initial>Zur Eingabe zurück</button>' +
      '<button class="btn btn--primary" type="button" data-unsaved-leave>Ohne Speichern verlassen</button></div></div>';
    document.body.appendChild(dialog);
    dialogController = createDialog({ dialog: dialog, initialFocus: "[data-dialog-initial]" });

    function setDirty(next) {
      dirty = Boolean(next);
      return dirty;
    }

    function markDirty() {
      setDirty(true);
    }

    form.addEventListener("input", markDirty);
    form.addEventListener("change", markDirty);

    elements(settings.saveControls).forEach(function (control) {
      control.addEventListener("click", function () { setDirty(false); });
    });

    document.addEventListener("click", function (event) {
      var explicitLeave = event.target.closest("[data-leave-with-unsaved-check]");
      var link = event.target.closest("a[href]");
      var href = link ? link.getAttribute("href") : "";
      var sameDocumentFragment = href && href.charAt(0) === "#";
      if (!dirty || (!explicitLeave && (!link || sameDocumentFragment))) {
        return;
      }
      event.preventDefault();
      pendingHref = explicitLeave ? explicitLeave.getAttribute("data-leave-with-unsaved-check") : href;
      dialogController.open(explicitLeave || link);
    });

    dialog.querySelector("[data-unsaved-leave]").addEventListener("click", function () {
      var destination = pendingHref;
      setDirty(false);
      dialogController.close("leave");
      if (destination) {
        window.location.href = destination;
      }
    });

    window.addEventListener("beforeunload", function (event) {
      if (!dirty) {
        return;
      }
      event.preventDefault();
      event.returnValue = "";
    });

    rendered(dialog);
    return {
      dialog: dialog,
      isDirty: function () { return dirty; },
      setDirty: setDirty,
      markSaved: function () { return setDirty(false); }
    };
  }

  function contactCatalog() {
    var givenNames = ["Anna", "Benjamin", "Carolin", "Daniel", "Elena", "Florian", "Hanna", "Jonas", "Katrin", "Lukas", "Maja", "Nadine", "Oliver", "Ravi", "Sophie"];
    var familyNames = ["Aksoy", "Beck", "Brenner", "Ebert", "Fuchs", "Graf", "Hartmann", "Kohl", "Nguyen", "Petrova", "Schilling", "Weber"];
    var organisations = [
      "GreenTech Solutions GmbH", "BioRN Network e. V.", "Heidelberg iT Management GmbH", "UnterwegsTheater Heidelberg", "C. Josef Lamy GmbH",
      "SNP Schneider-Neureither & Partner SE", "Medienforum Heidelberg e. V.", "Heidelberger Kunstverein", "EMBL Heidelberg", "Musik- und Singschule Heidelberg",
      "Stadtwerke Heidelberg Netze GmbH", "Karlstorbahnhof Heidelberg", "InnovationLab GmbH", "halle02", "Kulturfenster Heidelberg e. V.",
      "Universität Heidelberg", "Ameria GmbH", "Deutsch-Amerikanisches Institut", "ProMinent GmbH", "Theater und Orchester Heidelberg",
      "Heidelberger Dienste gGmbH", "Heidelberg Materials AG", "Metropolink Festival", "Dezernat 16", "Heidelberger Frühling gGmbH"
    ];
    var offices = ["Wirtschaftsförderung", "Kulturamt", "OB-Referat"];
    var contacts = [];

    function slug(value) {
      return normalizeText(value).replace(/ß/g, "ss").replace(/[^a-z0-9]+/g, ".").replace(/^\.|\.$/g, "");
    }

    givenNames.forEach(function (givenName, givenIndex) {
      familyNames.forEach(function (familyName, familyIndex) {
        var index = contacts.length;
        var organisation = organisations[index % organisations.length];
        contacts.push({
          id: "person-" + (index + 1),
          name: givenName + " " + familyName,
          organisation: organisation,
          email: slug(givenName + "." + familyName) + "@" + slug(organisation).replace(/\./g, "-") + ".de",
          kind: "person",
          scopes: (index % 3 === 0 ? "mine " : "") + (index % 5 === 0 ? "needs" : ""),
          office: offices[(givenIndex + familyIndex) % offices.length],
          permission: index % 17 === 0 ? "E-Mail nicht erlaubt" : (index % 11 === 0 ? "Nur Post erlaubt" : "E-Mail erlaubt"),
          memberOf: index % 23 === 0 ? ["umweltwirtschaft"] : (index % 29 === 0 ? ["unternehmen-aktiv"] : [])
        });
      });
    });
    organisations.forEach(function (organisation, index) {
      contacts.push({
        id: "organisation-" + (index + 1),
        name: organisation,
        organisation: "Organisation · Heidelberg",
        email: "kontakt@" + slug(organisation).replace(/\./g, "-") + ".de",
        kind: "org",
        scopes: (index % 4 === 0 ? "mine " : "") + (index % 6 === 0 ? "needs" : ""),
        office: offices[index % offices.length],
        permission: index % 9 === 0 ? "E-Mail nicht erlaubt" : "E-Mail erlaubt",
        memberOf: index % 8 === 0 ? ["umweltwirtschaft"] : []
      });
    });
    return contacts;
  }

  function createDistributionAssignment(options) {
    var settings = options || {};
    var contacts = settings.contacts || contactCatalog();
    var dialog = document.createElement("dialog");
    var workspace;
    var summary;
    var submit;
    var dialogController;
    var selectedTarget = null;
    var selectionController = null;
    var listView = null;

    function contactNoun(count) {
      return count === 1 ? "Kontakt" : "Kontakte";
    }

    dialog.className = "work-dialog";
    dialog.setAttribute("aria-labelledby", "assignment-dialog-title");
    dialog.innerHTML =
      '<header class="work-dialog-head"><div><p class="eyebrow">Kontakte zuordnen</p><h2 id="assignment-dialog-title">Kontakte einem Verteiler hinzufügen</h2><p id="assignment-dialog-subtitle"></p><span class="status" id="assignment-dialog-kind" hidden></span></div><button class="btn btn--quiet btn--compact dialog-close" type="button" data-dialog-close aria-label="Zuordnung schließen"><i data-lucide="x" aria-hidden="true"></i>Schließen</button></header>' +
      '<div class="work-dialog-body"><section class="assignment-context" id="assignment-context"></section><div id="assignment-workspace"></div></div>' +
      '<footer class="work-dialog-foot"><div class="assignment-summary" id="assignment-summary" aria-live="polite"><strong>Auswahl erforderlich</strong><p>Wählen Sie die Zuordnung aus.</p></div><div class="button-row"><button class="btn" type="button" data-dialog-close>Abbrechen</button><button class="btn btn--primary" id="assignment-submit" type="button" disabled>Kontakte hinzufügen</button></div></footer>';
    document.body.appendChild(dialog);
    workspace = dialog.querySelector("#assignment-workspace");
    summary = dialog.querySelector("#assignment-summary");
    submit = dialog.querySelector("#assignment-submit");

    function fixedContacts() {
      return settings.getFixedContacts ? settings.getFixedContacts() : [];
    }

    function isMember(contact, distribution) {
      return contact.memberOf && contact.memberOf.indexOf(distribution.id) !== -1;
    }

    function setSummary(selectedCount, addedCount, includedCount, distribution) {
      var title = summary.querySelector("strong");
      var copy = summary.querySelector("p");
      if (!selectedCount || !distribution) {
        title.textContent = "Auswahl erforderlich";
        copy.textContent = settings.mode === "choose-distribution" ? "Wählen Sie einen Verteiler aus." : "Wählen Sie mindestens einen Kontakt aus.";
        copy.hidden = true;
        submit.disabled = true;
        submit.textContent = "Kontakte hinzufügen";
        return;
      }
      copy.hidden = false;
      title.textContent = selectedCount + (selectedCount === 1 ? " ausgewählter Kontakt" : " ausgewählte Kontakte");
      copy.textContent = "Sie fügen " + selectedCount + (selectedCount === 1 ? " ausgewählten Kontakt" : " ausgewählte Kontakte") + " dem Verteiler „" + distribution.name + "“ hinzu. " + addedCount + " " + (addedCount === 1 ? "wird" : "werden") + " hinzugefügt; " + includedCount + " " + (includedCount === 1 ? "ist" : "sind") + " bereits enthalten und " + (includedCount === 1 ? "wird" : "werden") + " übersprungen.";
      submit.disabled = addedCount === 0;
      submit.textContent = addedCount + " " + contactNoun(addedCount) + " hinzufügen";
    }

    function showSuccess(added, included, distribution) {
      var message = added + " " + contactNoun(added) + " " + (added === 1 ? "wurde" : "wurden") + " hinzugefügt. " + included + " " + contactNoun(included) + " " + (included === 1 ? "war" : "waren") + " bereits enthalten und " + (included === 1 ? "wurde" : "wurden") + " übersprungen.";
      workspace.innerHTML = '<section class="card assignment-success" role="status"><span class="status status--success"><i data-lucide="circle-check" aria-hidden="true"></i>Zuordnung abgeschlossen</span><h3></h3><p></p></section>';
      workspace.querySelector("h3").textContent = distribution.name;
      workspace.querySelector("p").textContent = message;
      summary.querySelector("strong").textContent = "Zuordnung abgeschlossen";
      summary.querySelector("p").textContent = message;
      summary.querySelector("p").hidden = false;
      submit.hidden = true;
      showToast(message, "success");
      rendered(workspace);
    }

    function renderTargetChoice() {
      var chosenContacts = fixedContacts();
      var context = dialog.querySelector("#assignment-context");
      var list = document.createElement("ul");
      context.hidden = false;
      dialog.querySelector("#assignment-dialog-title").textContent = "Kontakte einem Verteiler hinzufügen";
      context.innerHTML = "<strong>Kontakte stehen fest</strong><p></p>";
      context.querySelector("p").textContent = chosenContacts.length + " ausgewählte " + contactNoun(chosenContacts.length) + ". Wählen Sie den Verteiler.";
      dialog.querySelector("#assignment-dialog-subtitle").textContent = "Kontakte stehen fest, der Verteiler wird gewählt.";
      dialog.querySelector("#assignment-dialog-kind").hidden = true;
      workspace.innerHTML = '<section aria-labelledby="assignment-target-title"><h3 id="assignment-target-title">Verteiler wählen</h3></section>';
      list.className = "assignment-targets";
      (settings.distributions || []).forEach(function (distribution, index) {
        var item = document.createElement("li");
        var label = document.createElement("label");
        var radio = document.createElement("input");
        var copy = document.createElement("span");
        var status = document.createElement("span");
        label.className = "assignment-target";
        radio.type = "radio";
        radio.name = "assignment-target";
        radio.value = distribution.id;
        if (index === 0) {
          radio.setAttribute("data-dialog-initial", "");
        }
        copy.innerHTML = "<strong></strong><small></small>";
        copy.querySelector("strong").textContent = distribution.name;
        copy.querySelector("small").textContent = distribution.office + " · " + distribution.members + " Mitglieder";
        status.className = "status " + (distribution.managed ? "status--info" : "");
        status.textContent = distribution.managed ? "Managed-Verteiler" : "Arbeitsverteiler";
        radio.addEventListener("change", function () {
          var included = chosenContacts.filter(function (contact) { return isMember(contact, distribution); }).length;
          selectedTarget = distribution;
          setSummary(chosenContacts.length, chosenContacts.length - included, included, distribution);
        });
        label.appendChild(radio);
        label.appendChild(copy);
        label.appendChild(status);
        item.appendChild(label);
        list.appendChild(item);
      });
      workspace.querySelector("section").appendChild(list);
      setSummary(0, 0, 0, null);
      submit.onclick = function () {
        var included = chosenContacts.filter(function (contact) { return isMember(contact, selectedTarget); });
        var added = chosenContacts.filter(function (contact) { return !isMember(contact, selectedTarget); });
        added.forEach(function (contact) { contact.memberOf = (contact.memberOf || []).concat(selectedTarget.id); });
        if (settings.onComplete) {
          settings.onComplete({ distribution: selectedTarget, addedContacts: added, alreadyIncludedContacts: included });
        }
        showSuccess(added.length, included.length, selectedTarget);
      };
    }

    function renderContactChoice() {
      var distribution = settings.getDistribution ? settings.getDistribution() : settings.distribution;
      var context = dialog.querySelector("#assignment-context");
      var rows;
      var offices = ["Wirtschaftsförderung", "Kulturamt", "OB-Referat"];
      context.hidden = true;
      dialog.querySelector("#assignment-dialog-title").textContent = "Kontakte zu „" + distribution.name + "“ hinzufügen";
      dialog.querySelector("#assignment-dialog-subtitle").textContent = "";
      dialog.querySelector("#assignment-dialog-kind").textContent = distribution.managed ? "Managed-Verteiler" : "Arbeitsverteiler";
      dialog.querySelector("#assignment-dialog-kind").hidden = false;
      workspace.innerHTML =
        '<section class="card list-controls" aria-labelledby="assignment-filter-title"><h3 class="u-sr-only" id="assignment-filter-title">Kontakte suchen und filtern</h3><div class="list-controls-main"><div class="list-search"><i data-lucide="search" aria-hidden="true"></i><label class="u-sr-only" for="assignment-search">Nach Name, Organisation oder E-Mail suchen</label><input class="input" id="assignment-search" type="search" autocomplete="off" placeholder="Name, Organisation oder E-Mail" data-dialog-initial></div><button class="btn btn--quiet btn--compact dialog-filter-toggle" id="assignment-filter-toggle" type="button" aria-expanded="false" aria-controls="assignment-filter-panel"><i data-lucide="sliders-horizontal" aria-hidden="true"></i>Filter<span id="assignment-filter-count"></span></button></div><div class="list-filter-groups" id="assignment-filter-panel" hidden><div class="list-filter-row" role="group" aria-label="Nach Kontaktart filtern"><strong>Kontaktart</strong><button class="filter-chip" type="button" aria-pressed="true" data-assignment-kind="all">Alle</button><button class="filter-chip" type="button" aria-pressed="false" data-assignment-kind="person">Personen</button><button class="filter-chip" type="button" aria-pressed="false" data-assignment-kind="org">Organisationen</button></div><div class="list-filter-row"><strong>Zuständigkeit</strong><details class="menu"><summary class="filter-chip"><i data-lucide="landmark" aria-hidden="true"></i>Ämter: alle</summary><div class="menu-popover menu-popover--left filter-popover"><strong>Verantwortliches Amt</strong><label class="check"><input type="checkbox" name="assignment-office" value="Wirtschaftsförderung" checked><span>Wirtschaftsförderung</span></label><label class="check"><input type="checkbox" name="assignment-office" value="Kulturamt" checked><span>Kulturamt</span></label><label class="check"><input type="checkbox" name="assignment-office" value="OB-Referat" checked><span>OB-Referat</span></label></div></details></div><div class="list-filter-row" role="group" aria-label="Nach Zuordnungsmöglichkeit filtern"><strong>Zuordnung</strong><button class="filter-chip" type="button" aria-pressed="false" data-assignment-availability="addable">Nur hinzufügbare</button><button class="btn btn--quiet btn--compact list-filter-reset" id="assignment-reset" type="button" hidden>Filter zurücksetzen</button></div></div></section>' +
        '<p class="selection-reset-notice" id="assignment-selection-reset" role="status" hidden></p>' +
        '<section class="card assignment-result-card" aria-labelledby="assignment-result-title"><div class="assignment-result-meta"><h3 id="assignment-result-title" tabindex="-1">Kontakte</h3><p id="assignment-result-count" aria-live="polite"></p><span class="status" id="assignment-selected-count" aria-live="polite">0 ausgewählt</span></div><div class="selection-scope" id="assignment-selection-scope" hidden><p id="assignment-selection-message"></p><button class="btn btn--compact" id="assignment-select-matched" type="button" hidden></button><button class="btn btn--quiet btn--compact" id="assignment-restrict-page" type="button" hidden>Auswahl auf diese Seite beschränken</button></div><div class="table-wrap"><table class="data-table"><thead><tr><th class="selection-col" scope="col"><input class="selection-check" id="assignment-select-page" type="checkbox"><label class="u-sr-only" id="assignment-select-page-label" for="assignment-select-page">Alle Kontakte auf dieser Seite auswählen</label></th><th scope="col">Kontakt</th><th scope="col">Organisation</th><th scope="col">E-Mail</th><th scope="col">Kontakterlaubnis</th><th scope="col">Mitgliedschaft</th></tr></thead><tbody id="assignment-contact-rows"></tbody></table></div><footer class="list-pagination" id="assignment-pagination"><p class="list-range" data-list-range aria-live="polite" aria-atomic="true"></p><nav class="pagination-nav" data-pagination-nav aria-label="Kontaktseiten"><button class="pagination-button" type="button" data-page-previous aria-label="Vorherige Kontaktseite"><i data-lucide="chevron-left" aria-hidden="true"></i></button><div class="pagination-pages" data-page-list></div><button class="pagination-button" type="button" data-page-next aria-label="Nächste Kontaktseite"><i data-lucide="chevron-right" aria-hidden="true"></i></button></nav></footer></section>';
      var body = workspace.querySelector("#assignment-contact-rows");
      contacts.forEach(function (contact) {
        var row = document.createElement("tr");
        var included = isMember(contact, distribution);
        row.setAttribute("data-kind", contact.kind);
        row.setAttribute("data-scope", contact.scopes);
        row.setAttribute("data-office", contact.office);
        row.setAttribute("data-search", contact.name + " " + contact.organisation + " " + contact.email);
        row.setAttribute("data-contact-id", contact.id);
        row.setAttribute("data-already-included", String(included));
        row.innerHTML = '<td class="selection-col"><input class="selection-check" type="checkbox"></td><td class="primary-cell"><strong></strong></td><td></td><td class="assignment-email"><span></span></td><td><span class="status"></span></td><td><span class="status"></span></td>';
        row.querySelector("input").setAttribute("aria-label", contact.name + " auswählen" + (included ? "; bereits enthalten und wird übersprungen" : ""));
        row.querySelector("strong").textContent = contact.name;
        row.children[2].textContent = contact.organisation;
        row.children[3].querySelector("span").textContent = contact.email;
        row.children[3].querySelector("span").title = contact.email;
        row.children[4].querySelector(".status").className = "status " + (contact.permission === "E-Mail erlaubt" ? "status--success" : "status--warning");
        row.children[4].querySelector(".status").textContent = contact.permission;
        row.children[5].querySelector(".status").className = "status " + (included ? "status--info" : "");
        row.children[5].querySelector(".status").textContent = included ? "Bereits enthalten" : "Noch nicht enthalten";
        body.appendChild(row);
      });
      rows = Array.prototype.slice.call(body.querySelectorAll("tr"));
      selectionController = createListSelection({
        root: workspace,
        rows: rows,
        selectAll: "#assignment-select-page",
        selectMatched: "#assignment-select-matched",
        restrictToPage: "#assignment-restrict-page",
        scopeRegion: "#assignment-selection-scope",
        scopeMessage: "#assignment-selection-message",
        resetNotice: "#assignment-selection-reset",
        actions: submit,
        itemSingular: "Kontakt",
        itemPlural: "Kontakte",
        onChange: function (selected, visible, state) {
          workspace.querySelector("#assignment-selected-count").textContent = state.selectedCount + " ausgewählt";
          setSummary(state.selectedCount, state.actionableCount, state.alreadyIncludedCount, distribution);
        }
      });
      listView = createListView({
        root: workspace,
        rows: rows,
        query: "#assignment-search",
        pagination: "#assignment-pagination",
        resultFocus: "#assignment-result-title",
        resetControls: "#assignment-reset",
        pageSize: 25,
        itemName: "Treffern",
        groups: [
          { name: "kind", type: "exclusive", controls: "[data-assignment-kind]", attribute: "data-assignment-kind", initial: "all" },
          { name: "office", type: "checkbox", controls: 'input[name="assignment-office"]', initial: offices },
          { name: "availability", type: "toggle", controls: "[data-assignment-availability]", attribute: "data-assignment-availability", initial: [] }
        ],
        searchText: function (row) { return row.getAttribute("data-search"); },
        matches: function (row, state) {
          return (state.kind === "all" || state.kind === row.getAttribute("data-kind")) && state.office.indexOf(row.getAttribute("data-office")) !== -1 && (!state.availability.length || row.getAttribute("data-already-included") === "false");
        },
        onChange: function (view) {
          workspace.querySelector("#assignment-result-count").textContent = view.total + " Treffer";
          workspace.querySelector("#assignment-select-page-label").textContent = "Alle " + view.pageRows.length + " Kontakte auf dieser Seite auswählen";
          var activeFilters = (view.state.kind === "all" ? 0 : 1) + (view.state.office.length === offices.length ? 0 : 1) + view.state.availability.length;
          workspace.querySelector("#assignment-filter-count").textContent = activeFilters ? " (" + activeFilters + ")" : "";
          selectionController.syncCollection(view);
        }
      });
      workspace.querySelector("#assignment-filter-toggle").addEventListener("click", function () {
        var panel = workspace.querySelector("#assignment-filter-panel");
        panel.hidden = !panel.hidden;
        this.setAttribute("aria-expanded", String(!panel.hidden));
      });
      dialog.style.setProperty("--assignment-dialog-head-offset", dialog.querySelector(".work-dialog-head").offsetHeight + "px");
      submit.onclick = function () {
        var state = selectionController.getState();
        var selectedContacts = state.selectedRows.map(function (row) {
          return contacts.filter(function (contact) { return contact.id === row.getAttribute("data-contact-id"); })[0];
        });
        var included = selectedContacts.filter(function (contact) { return isMember(contact, distribution); });
        var added = selectedContacts.filter(function (contact) { return !isMember(contact, distribution); });
        added.forEach(function (contact) { contact.memberOf = (contact.memberOf || []).concat(distribution.id); });
        if (settings.onComplete) {
          settings.onComplete({ distribution: distribution, addedContacts: added, alreadyIncludedContacts: included });
        }
        showSuccess(added.length, included.length, distribution);
      };
      rendered(workspace);
    }

    function render() {
      submit.hidden = false;
      selectedTarget = null;
      selectionController = null;
      listView = null;
      if (settings.mode === "choose-distribution") {
        renderTargetChoice();
      } else {
        renderContactChoice();
      }
      rendered(dialog);
    }

    dialogController = createDialog({ dialog: dialog, openers: settings.openers, onOpen: render });
    return { dialog: dialog, controller: dialogController, contacts: contacts };
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
    showUndoToast: showUndoToast,
    showPrototypeNotice: showPrototypeNotice,
    createListSelection: createListSelection,
    createListFilter: createListFilter,
    createListView: createListView,
    createEmbeddedList: createEmbeddedList,
    createRowStatusChange: createRowStatusChange,
    createDialog: createDialog,
    createUnsavedGuard: createUnsavedGuard,
    createDistributionAssignment: createDistributionAssignment,
    getAssignmentContacts: contactCatalog,
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
      filled: "Gefüllt",
      overview: "Übersicht",
      loading: "Lädt",
      empty: "Leer",
      error: "Fehler",
      protected: "Kein Zugriff"
    };
    var configuredPrototypeLabels = (document.body.getAttribute("data-prototype-state-labels") || "").split("|");
    var prototypeInitial = document.body.getAttribute("data-prototype-initial") || prototypeStateNames[0];
    var prototypeBar = document.createElement("section");
    prototypeBar.className = "prototype-bar";
    prototypeBar.setAttribute("aria-label", "Ansichtszustand im Prototyp wechseln");
    prototypeBar.innerHTML = '<span class="prototype-label"><i data-lucide="circle-dashed" aria-hidden="true"></i>Prototyp-Zustand</span><div class="prototype-controls"></div>';
    var prototypeControls = prototypeBar.querySelector(".prototype-controls");
    prototypeStateNames.forEach(function (state, index) {
      var button = document.createElement("button");
      button.className = "prototype-state";
      button.type = "button";
      button.setAttribute("data-prototype-state", state);
      button.setAttribute("aria-pressed", String(state === prototypeInitial));
      button.textContent = configuredPrototypeLabels[index] || prototypeLabels[state] || state;
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
