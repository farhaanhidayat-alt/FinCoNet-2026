function doGet(e) {
  // Tangkap parameter 'page' dari URL jika ada saat halaman di-reload
  var initialPage = (e && e.parameter && e.parameter.page) ? e.parameter.page : 'home';
  
  // Buat HTML Template (pastikan 'Index' sesuai nama file HTML Anda)
  var template = HtmlService.createTemplateFromFile('index');
  template.initialPage = initialPage;
  
  return template.evaluate()
      .setTitle('FinCoNet 2026 | Bali, Indonesia')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
