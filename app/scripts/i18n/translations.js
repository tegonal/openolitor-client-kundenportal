angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en_US', {"Abmelden":"Log out","Abo":"Subscription","Abo:":"Subscription:","Anzahl Lieferungen":"Number of deliveries","Betrag":"Amount","Das Backend steht im Moment nicht zur Verfügung. Bitte besuchen Sie uns später wieder.":"The backend is currently not available. Please visit us later again.","Datum":"Date","Deine Abos":"Your subscriptions","Deine Rechnungen":"Your invoices","Der aktuelle Korb":"Current basket","Der nächste Korb":"Next basket","Details werden geladen...":"Loading details...","Die früheren Körbe":"Previous baskets","Diese Seite konnte nicht gefunden werden!":"The page cannot be found","Eingabe erforderlich":"Input required","Eingabe stimmt nicht übereint":"Input doesn't match","Eingabe zu kurz":"Input too short","Eingabe zu lang":"Input too long","Einheit":"Unit","Einstellungen":"Settings","Error 404":"Error 404","Es liegen noch keine Rechnungen vor.":"There are no invoices yet.","Fehlerhafte Email Adresse":"Incorrect email address","Fällig":"Due","Fällig am":"Due date","Gramm":"Grams","Kilogramm":"Kilograms","Menge":"Quantity","OpenOlitor Mitgliederportal:":"OpenOlitor Member Portal:","Passwort wechseln":"Change password","Preis":"Price","Preis:":"Price:","Produkt":"Product","Produzent":"Producer","Status":"State","Stück":"Piece","Titel":"Title","Version:":"Version:","Weitere Körbe anzeigen...":"View more baskets...","Weitere Lieferungen anzeigen...":"View more deliveries...","alle":"all","gr":"gr","kg":"kg","l":"l","pendente":"pending"});
    gettextCatalog.setStrings('es_ES', {"Abmelden":"Cerrer sesión","Abo":"Subscripción","Abo:":"Subscripción:","Abwesenheit erfassen":"Sin registro","Abwesenheiten <small>({{getCurrentlyMatchingGJItem.value}}<span ng-if=\"abo.abotyp.anzahlAbwesenheiten > 0\"> / {{abo.abotyp.anzahlAbwesenheiten}}</span>)</small>":"Ausencias <small>({{getCurrentlyMatchingGJItem.value}}\n      <span nf-if=\"abo.abotyp.anzahlAbwesenheiten > 0\"> / {{abo.abotyp.anzahlAbwesenheiten}}</span>)</small>","Anzahl Lieferungen":"Número de entregas","Betrag":"Monto","Bu.":"Manojo","Bund":"Manojo","Das Backend steht im Moment nicht zur Verfügung. Bitte besuchen Sie uns später wieder.":"El servidor no está disponible actualmente, por favor, intentelo un poco mas tarde.","Das Modul „Arbeitseinsätze“ wird in Kürze zur Verfügung stehen.":"El modulo \"horas de trabajo\" estará disponible próximamente.","Datum":"Fecha","Deine Abos":"Tus abonos","Deine Arbeitseinsätze":"Tus días y horas de trabajo","Deine Rechnungen":"Tus facturas","Depot:":"Punto de recogida:","Der Rechnungsstatus wird periodisch durch die Administration aktualisiert. Eine bereits bezahlte Rechnung kann also noch als unbezahlt angezeigt werden.":"El estado de una factura está actualizada periódicamente por la administración. Por lo tanto, una factura pagada puede aparecer como no pagada.","Der aktuelle Korb":"La cesta actual","Der nächste Korb":"La siguiente cesta","Details werden geladen...":"Cargando los detalles...","Die früheren Körbe":"Las cestas anteriores","Diese Seite konnte nicht gefunden werden!":"¡La página solicitada no ha sido encontrada!","Eingabe erforderlich":"Campo obligatorio","Eingabe stimmt nicht übereint":"Las contraseñas no coinciden","Eingabe zu kurz":"Entrada muy corta","Eingabe zu lang":"Entrada muy larga","Einheit":"Unidad","Einstellungen":"Parametros","Error 404":"Error 404","Es liegen noch keine Rechnungen vor.":"Todavía no hay facturas.","Es wurden noch keine Körbe dieses Typs geplant oder geliefert.":"Todavía no hay cestas de este tipo que hayan sido programadas o entregadas.","Es wurden noch keine Lieferplanungen abgeschlossen.":"Ninguna planificación de la distribución ha sido concluida.","Fehlerhafte Email Adresse":"Dirección de correo electrónico incorrecta","Fällig":"A pagar hasta","Fällig am":"Fecha límite","Gramm":"Gramos","Inhalt der Körbe":"Contenido de las cestas","Kilogramm":"Kilogramos","Konto für Einzahlungen:":"Cuenta de pago:","Laufzeit:":"Duración del contrato:","Lieferrhythmus:":"Ciclo de entrega:","Liefertag:":"Día de entrega:","Lieferung":"Entrega","Liter":"Litro","Menge":"Cantidad","OpenOlitor Mitgliederportal:":"Portal de abonado a OpenOlitor:","Passwort wechseln":"Cambiar la contraseña","Portion":"Porción","Preis":"Precio","Preis:":"Precio:","Produkt":"Producto","Produzent":"Productores","Rechnungsdatum":"Fecha de facturas","Referenznummer":"Número de referencia","St.":"Unidad","Status":"Estado","Stück":"Unidad","Titel":"Título","Tour:":"Recorrido:","Version:":"Versión:","Von":"De","Weitere Körbe anzeigen...":"Mostrar más cestas...","Weitere Lieferungen anzeigen...":"Mostrar más entregas...","Wir sind froh über Rückmeldungen, Ideen und Verbesserungsvorschläge.":"Estamos más que contentos de que nos envíes tus comentarios, ideas y sugerencias de mejora. ¡Así haremos de OpenOlitor un proyecto que ayude cada vez a más grupos de consumo!","alle":"todos","bis":"de","gr":"gr","in Stammdaten nicht definiert":"sin definir en los datos básicos","kg":"kg","l":"l","pendente":"pendiente","vom":"del"});
    gettextCatalog.setStrings('fr_BE', {"Abmelden":"se déconnecter","Abo":"Abon","Abwesenheit erfassen":"Pas d'enregistrement","Betrag":"Montant","Das Backend steht im Moment nicht zur Verfügung. Bitte besuchen Sie uns später wieder.":"Le back-end est momentanément ineccessible. Merci de revenir un peu plus tard.","Das Modul „Arbeitseinsätze“ wird in Kürze zur Verfügung stehen.":"Le module « Travail » sera bientôt disponible.","Datum":"Date","Deine Abos":"Vos abonnements","Deine Arbeitseinsätze":"Vos missions","Deine Rechnungen":"Vos factures","Depot:":"Dépôt :","Der Rechnungsstatus wird periodisch durch die Administration aktualisiert. Eine bereits bezahlte Rechnung kann also noch als unbezahlt angezeigt werden.":"Le statut d’une facture est mis à jour périodiquement par l’administration. Une facture payée peut apparaître alors comme non payée.","Die früheren Körbe":"Les paniers précédents","Diese Seite konnte nicht gefunden werden!":"La page demandée n’a pas été trouvée","ESR-Nr.":"No de l’ISR","Eingabe erforderlich":"Champ obligatoir","Eingabe stimmt nicht übereint":"Les données ne correspondent pas","Eingabe zu kurz":"Les données sont trop courtes","Eingabe zu lang":"Entrée trop longue","Einheit":"Unité","Einstellungen":"Paramètres","Error 404":"Erreur 404","Es liegen noch keine Rechnungen vor.":"Il n’y a encore aucune facture.","Es wurden noch keine Körbe dieses Typs geplant oder geliefert.":"Encore aucun emplacement de ce type a été demandé ou livré.","Fehlerhafte Email Adresse":"adresse e-mail erronné","Fällig":"Du","Fällig am":"Date d’échéance","Lieferrhythmus:":"Cadence de livraison:","Liefertag:":"Jour de livraison:","Menge":"Quantité","OpenOlitor Mitgliederportal:":"Portail des membres de OpenOlitor :","Passwort wechseln":"Changer mot de passe","Preis":"Prix","Preis:":"Prix :","Produkt":"Produit","Produzent":"Producteur","Rechnungsdatum":"Date de la facture","Status":"Statut","Titel":"Titre","Tour:":"Tournée:","Version:":"Version :","alle":"tous","pendente":"en attente"});
    gettextCatalog.setStrings('fr_CH', {"Abmelden":"Se déconnecter","Abo":"Abonnement","Abwesenheit erfassen":"Saisir des absences","Betrag":"Montant","Das Backend steht im Moment nicht zur Verfügung. Bitte besuchen Sie uns später wieder.":"Le backend n'est pas disponible pour le moment, veuillez attendre quelques secondes, s'il vous plaît.","Das Modul „Arbeitseinsätze“ wird in Kürze zur Verfügung stehen.":"Le module \"journées et heures de travail\" sera à disposition prochainement.","Datum":"Date","Deine Abos":"Tes abonnements","Deine Arbeitseinsätze":"Tes journées et heures de travail","Deine Rechnungen":"Tes factures","Depot:":"Dépôt:","Der Rechnungsstatus wird periodisch durch die Administration aktualisiert. Eine bereits bezahlte Rechnung kann also noch als unbezahlt angezeigt werden.":"Le statut d’une facture est mis à jour périodiquement par l’administration. Une facture payée peut apparaître alors comme non payée.","Die früheren Körbe":"Les paniers précédents","Diese Seite konnte nicht gefunden werden!":"La page demandée n’a pas été trouvée","ESR-Nr.":"n° BVR","Eingabe erforderlich":"Entrée requise","Eingabe stimmt nicht übereint":"Les deux entrées ne sont pas identiques","Eingabe zu kurz":"Entrée trop courte","Eingabe zu lang":"Entrée trop longue","Einheit":"Unité","Einstellungen":"Paramètres","Error 404":"Erreur 404","Es liegen noch keine Rechnungen vor.":"Aucune facture n'a été créé jusqu'ici.","Es wurden noch keine Körbe dieses Typs geplant oder geliefert.":"Aucun panier de ce type d'a été planifié jusqu'ici.","Fehlerhafte Email Adresse":"Adresse courriel non valide","Fällig":"A payer jusqu'au","Fällig am":"Date d’échéance","Lieferrhythmus:":"Cadence de livraison:","Liefertag:":"Jour de livraison:","Menge":"Quantité","OpenOlitor Mitgliederportal:":"Portail des membres:","Passwort wechseln":"Changer mot de passe","Preis":"Prix","Preis:":"Prix:","Produkt":"Produit","Produzent":"Producteur, productrice","Rechnungsdatum":"Date de facturation","Status":"Etat","Titel":"Titre","Tour:":"Tour:","Version:":"Version:","alle":"tous","pendente":"en suspens"});
/* jshint +W100 */
}]);